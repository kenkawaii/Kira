const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const nodemailer = require('nodemailer');
const bcrypt = require('bcryptjs');
const session = require('express-session');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(path.join(__dirname)));
app.use(session({
  secret: 'kira-secret-key-change-in-production',
  resave: false,
  saveUninitialized: true
}));

// Database setup
const db = new sqlite3.Database('./kira.db', (err) => {
  if (err) console.error('Database error:', err);
  else console.log('Connected to SQLite database');
});

// Initialize database tables
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS waitlist (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE NOT NULL,
    businessName TEXT NOT NULL,
    businessType TEXT NOT NULL,
    interview INTEGER DEFAULT 0,
    joinedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    status TEXT DEFAULT 'pending'
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS admin (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS contacts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    subject TEXT NOT NULL,
    message TEXT NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
  )`);

  // Create default admin if it doesn't exist
  db.get('SELECT * FROM admin WHERE username = ?', ['admin'], (err, row) => {
    if (!row) {
      const hashedPassword = bcrypt.hashSync('admin123', 10);
      db.run('INSERT INTO admin (username, password) VALUES (?, ?)',
        ['admin', hashedPassword],
        (err) => {
          if (err) console.error('Error creating admin:', err);
          else console.log('Default admin created (username: admin, password: admin123)');
        }
      );
    }
  });
});

// Email configuration
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});

// Routes

// API: Submit to waitlist
app.post('/api/waitlist', (req, res) => {
  const { email, businessName, businessType, interview } = req.body;

  // Validation
  if (!email || !businessName || !businessType) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }

  // Insert into database
  db.run(
    'INSERT INTO waitlist (email, businessName, businessType, interview) VALUES (?, ?, ?, ?)',
    [email, businessName, businessType, interview ? 1 : 0],
    function(err) {
      if (err) {
        if (err.message.includes('UNIQUE constraint failed')) {
          return res.status(400).json({ error: 'This email is already on the waitlist' });
        }
        return res.status(500).json({ error: 'Database error' });
      }

      // Send confirmation email
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Welcome to Kira Waitlist!',
        html: `
          <h2>You're on the list! 🎉</h2>
          <p>Hi ${businessName},</p>
          <p>Thanks for joining the Kira waitlist. We'll be in touch soon with more updates about our private beta launch.</p>
          <p><strong>Business Type:</strong> ${businessType}</p>
          ${interview ? '<p><strong>You\'ve opted in for a 20-minute interview - we\'ll reach out soon!</strong></p>' : ''}
          <p>In the meantime, feel free to reply to this email if you have any questions.</p>
          <p>Best regards,<br>The Kira Team</p>
        `
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log('Email error:', error);
          // Still return success even if email fails
          return res.json({
            success: true,
            message: 'Added to waitlist (email notification pending)',
            id: this.lastID
          });
        }
        res.json({
          success: true,
          message: 'Successfully added to waitlist',
          id: this.lastID
        });
      });
    }
  );
});

// API: Submit contact form
app.post('/api/contact', (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  db.run(
    'INSERT INTO contacts (name, email, subject, message) VALUES (?, ?, ?, ?)',
    [name, email, subject, message],
    function(err) {
      if (err) {
        return res.status(500).json({ error: 'Failed to submit contact form' });
      }

      // Send notification email to admin
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: `New Contact: ${subject}`,
        html: `
          <p><strong>From:</strong> ${name} (${email})</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `
      };

      transporter.sendMail(mailOptions, (error) => {
        if (error) console.log('Email error:', error);
      });

      res.json({ success: true, message: 'Thank you for your message' });
    }
  );
});

// Admin: Login
app.post('/api/admin/login', (req, res) => {
  const { username, password } = req.body;

  db.get('SELECT * FROM admin WHERE username = ?', [username], (err, user) => {
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    if (!bcrypt.compareSync(password, user.password)) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    req.session.admin = { id: user.id, username: user.username };
    res.json({ success: true, message: 'Logged in successfully' });
  });
});

// Admin: Check if logged in
app.get('/api/admin/check', (req, res) => {
  if (req.session.admin) {
    res.json({ authenticated: true });
  } else {
    res.status(401).json({ authenticated: false });
  }
});

// Admin: Logout
app.post('/api/admin/logout', (req, res) => {
  req.session.destroy();
  res.json({ success: true });
});

// Admin: Get all waitlist entries
app.get('/api/admin/waitlist', (req, res) => {
  if (!req.session.admin) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  db.all('SELECT * FROM waitlist ORDER BY joinedAt DESC', [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }
    res.json(rows);
  });
});

// Admin: Get stats
app.get('/api/admin/stats', (req, res) => {
  if (!req.session.admin) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  db.all(`
    SELECT businessType, COUNT(*) as count
    FROM waitlist
    GROUP BY businessType
  `, [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }

    db.get('SELECT COUNT(*) as total FROM waitlist', [], (err, total) => {
      db.get('SELECT COUNT(*) as withInterview FROM waitlist WHERE interview = 1', [], (err, interview) => {
        res.json({
          total: total?.total || 0,
          withInterview: interview?.withInterview || 0,
          byType: rows
        });
      });
    });
  });
});

// Admin: Get contacts
app.get('/api/admin/contacts', (req, res) => {
  if (!req.session.admin) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  db.all('SELECT * FROM contacts ORDER BY createdAt DESC', [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }
    res.json(rows);
  });
});

// Admin: Delete waitlist entry
app.delete('/api/admin/waitlist/:id', (req, res) => {
  if (!req.session.admin) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  db.run('DELETE FROM waitlist WHERE id = ?', [req.params.id], function(err) {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }
    res.json({ success: true });
  });
});

// Server-side pages
app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'admin.html'));
});

app.get('/admin/dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, 'admin-dashboard.html'));
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Not found' });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Kira server running at http://localhost:${PORT}`);
  console.log(`📊 Admin panel: http://localhost:${PORT}/admin`);
});

process.on('SIGINT', () => {
  db.close();
  process.exit(0);
});
