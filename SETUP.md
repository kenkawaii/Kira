# Kira Analytics - Full Stack Setup Guide

## 🚀 Quick Start

### Prerequisites
- Node.js (v14+)
- npm
- Git

### Installation

1. **Install dependencies:**
```bash
cd D:\Kira
npm install
```

2. **Start the server:**
```bash
npm start
```

The application will be available at: **http://localhost:3000**

## 📊 Features

### Frontend
✅ Fully functional website with 8 linked pages
✅ Responsive design (mobile, tablet, desktop)
✅ Form validation and error handling
✅ Smooth animations and transitions
✅ Success confirmation pages

### Backend
✅ Express.js REST API
✅ SQLite database (auto-created)
✅ Session-based authentication
✅ Email notifications (requires Gmail setup)
✅ Data validation and error handling

### Admin Panel
✅ Login authentication
✅ Dashboard with statistics
✅ View all waitlist signups
✅ View contact messages
✅ Delete entries
✅ Real-time data refresh

## 🔑 Admin Credentials

**Default Login:**
- Username: `admin`
- Password: `admin123`

Access at: http://localhost:3000/admin

⚠️ **Important:** Change these credentials in production!

## 📧 Email Setup (Optional)

To enable email notifications, add a `.env` file in the project root:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
```

### Gmail Setup Instructions:
1. Enable 2-Factor Authentication
2. Create an App Password: https://myaccount.google.com/apppasswords
3. Use the generated 16-character password

Without email config, the app will still work - forms just won't send emails.

## 📁 Project Structure

```
/kira
├── server.js                 # Express server
├── package.json             # Dependencies
├── kira.db                  # SQLite database (auto-created)
│
├── index.html              # Home page
├── how-it-works.html       # Process
├── features.html           # Features showcase
├── comparison.html         # Comparison page
├── faq.html               # FAQ
├── why.html               # Problem & opportunity
├── waitlist.html          # Signup form
├── success.html           # Confirmation
│
├── admin.html             # Admin login
├── admin-dashboard.html   # Admin panel
│
├── SETUP.md              # This file
└── README.md             # Project overview
```

## 🔌 API Endpoints

### Public Endpoints

**POST /api/waitlist**
- Submit waitlist signup
- Body: `{ email, businessName, businessType, interview }`
- Returns: `{ success, message, id }`

**POST /api/contact**
- Submit contact form
- Body: `{ name, email, subject, message }`
- Returns: `{ success, message }`

### Admin Endpoints (requires authentication)

**POST /api/admin/login**
- Body: `{ username, password }`

**GET /api/admin/check**
- Check if user is authenticated

**POST /api/admin/logout**
- Logout current user

**GET /api/admin/waitlist**
- Get all waitlist entries

**GET /api/admin/stats**
- Get dashboard statistics

**GET /api/admin/contacts**
- Get all contact messages

**DELETE /api/admin/waitlist/:id**
- Delete a waitlist entry

## 🗄️ Database Schema

### waitlist table
```sql
id (INTEGER PRIMARY KEY)
email (TEXT UNIQUE)
businessName (TEXT)
businessType (TEXT)
interview (INTEGER 0/1)
joinedAt (DATETIME)
status (TEXT)
```

### admin table
```sql
id (INTEGER PRIMARY KEY)
username (TEXT UNIQUE)
password (TEXT - hashed)
createdAt (DATETIME)
```

### contacts table
```sql
id (INTEGER PRIMARY KEY)
name (TEXT)
email (TEXT)
subject (TEXT)
message (TEXT)
createdAt (DATETIME)
```

## 🧪 Testing

### Test Waitlist Form
1. Go to http://localhost:3000/waitlist.html
2. Fill in the form
3. Submit
4. Check admin dashboard at http://localhost:3000/admin

### Test Admin Panel
1. Navigate to http://localhost:3000/admin
2. Login with: admin / admin123
3. View statistics and submissions
4. Try deleting an entry

## 🔒 Security Notes

- Passwords are hashed with bcryptjs
- Sessions are stored server-side
- CORS is enabled (adjust for production)
- Add rate limiting for production
- Change default admin credentials
- Use HTTPS in production
- Validate all inputs on both client and server

## 📦 Deployment

### For Production:

1. **Set environment variables:**
```bash
NODE_ENV=production
PORT=3000
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-password
```

2. **Use a process manager** (PM2):
```bash
npm install -g pm2
pm2 start server.js --name kira
```

3. **Use a reverse proxy** (Nginx):
```nginx
server {
    listen 80;
    server_name your-domain.com;
    location / {
        proxy_pass http://localhost:3000;
    }
}
```

### Hosting Options:
- Heroku
- Railway
- Render
- DigitalOcean
- AWS
- Google Cloud

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Find and kill process on port 3000
lsof -ti:3000 | xargs kill -9  # macOS/Linux
netstat -ano | findstr :3000   # Windows
```

### Database Issues
- Delete `kira.db` and restart the server to recreate
- Check file permissions

### Email Not Sending
- Verify Gmail credentials
- Check App Password is correct
- Try a different email provider

### Form Submission Fails
- Check browser console for errors
- Verify API endpoint is accessible
- Check database permissions

## 📚 Additional Resources

- Express.js: https://expressjs.com
- SQLite3: https://sqlite.org
- Tailwind CSS: https://tailwindcss.com
- Nodemailer: https://nodemailer.com

## 💬 Support

For issues, check the browser console and server logs for error messages.

---

**Happy coding!** 🚀
