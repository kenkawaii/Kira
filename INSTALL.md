# Installation & Setup Instructions

## 🚀 Getting Started in 3 Steps

### Step 1: Install Dependencies
Open PowerShell/Terminal in the `D:\Kira` folder and run:
```bash
npm install
```

This will download all required packages (~200MB).

### Step 2: Start the Server
```bash
npm start
```

You should see:
```
🚀 Kira server running at http://localhost:3000
📊 Admin panel: http://localhost:3000/admin
```

### Step 3: Open in Browser
Visit: **http://localhost:3000**

---

## 📋 What's Now Functional

### ✅ Public Features
- **Home Page** - Fully functional hero and CTA
- **Waitlist Form** - Saves email + business info to database
- **Contact Page** - Send messages (admin can view)
- **Admin Login** - Secure authentication
- **Success Pages** - Confirmation after signup

### ✅ Admin Dashboard
- **View Signups** - See all waitlist entries in real-time
- **View Messages** - Check all contact form submissions
- **Statistics** - Total signups, interviews opted-in, etc.
- **Delete Entries** - Remove entries from database
- **Auto-refresh** - Data updates every 30 seconds

### ✅ Backend
- **SQLite Database** - Auto-created, persistent storage
- **REST API** - Full CRUD operations
- **Session Auth** - Secure admin login
- **Form Validation** - Both client & server-side
- **Email Ready** - Can send notifications (optional setup)

---

## 🔑 Demo Credentials

**Admin Panel Login:**
- Username: `admin`
- Password: `admin123`

Visit: **http://localhost:3000/admin**

---

## 📱 Test the Features

### 1. Test Waitlist Form
```
1. Go to http://localhost:3000/waitlist.html
2. Fill in form:
   - Email: test@example.com
   - Business: Test Bakery
   - Type: Bakery
   - Interview: Check it
3. Click "Join Waitlist"
4. Should redirect to success page
5. Check admin dashboard - you'll see the entry!
```

### 2. Test Admin Dashboard
```
1. Go to http://localhost:3000/admin
2. Login with: admin / admin123
3. See all statistics and signups
4. Try deleting an entry
5. Data auto-refreshes every 30 seconds
```

### 3. Test Contact Form
```
1. Go to http://localhost:3000/contact.html
2. Fill in form and submit
3. See success message
4. Check admin dashboard - "Contact Messages" tab
```

---

## 📧 Email Setup (Optional)

To enable email notifications:

1. **Get Gmail App Password:**
   - Enable 2FA on Gmail
   - Go to: https://myaccount.google.com/apppasswords
   - Select "Mail" and "Windows Computer"
   - Copy the 16-character password

2. **Create .env file** in `D:\Kira`:
   ```
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASSWORD=xxxx xxxx xxxx xxxx
   ```

3. **Restart server** (ctrl+C and npm start)

Now emails will be sent when people sign up!

---

## 🗄️ Database

The database (`kira.db`) is automatically created in the project folder.

**To reset the database:**
1. Stop the server (Ctrl+C)
2. Delete `kira.db` file
3. Start the server again
4. New empty database will be created

---

## 🛠️ Common Issues

### Port 3000 Already in Use
```bash
# Windows - find and kill process
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:3000 | xargs kill -9
```

### npm install fails
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -r node_modules
rm package-lock.json

# Reinstall
npm install
```

### Forms not submitting
- Check browser console (F12) for errors
- Make sure server is running on port 3000
- Try refreshing the page

---

## 🚀 What's Included

### Pages (9 total)
- ✅ index.html - Home
- ✅ how-it-works.html - Process
- ✅ features.html - Features showcase
- ✅ comparison.html - vs other tools
- ✅ faq.html - FAQ
- ✅ why.html - Problem & opportunity
- ✅ waitlist.html - Signup form
- ✅ contact.html - Contact form
- ✅ success.html - Confirmation
- ✅ admin.html - Admin login
- ✅ admin-dashboard.html - Admin panel

### Backend Files
- ✅ server.js - Express server
- ✅ package.json - Dependencies
- ✅ .env.example - Config template
- ✅ kira.db - SQLite database

### Database
- ✅ 3 tables (waitlist, admin, contacts)
- ✅ Automatic schema creation
- ✅ Default admin user

---

## 📊 Next Steps

1. **Customize Admin Credentials**
   - Update in the application

2. **Set Up Email Notifications**
   - Follow email setup above

3. **Customize Emails**
   - Edit email templates in server.js

4. **Deploy to Production**
   - See SETUP.md for deployment options

5. **Add More Pages**
   - Create new .html files
   - Link from navigation

---

## 💬 Need Help?

Check these files:
- `SETUP.md` - Detailed setup guide
- `README.md` - Project overview
- `server.js` - API documentation in comments

---

**You're all set!** 🎉

The full-stack application is ready to use. Start with `npm start` and visit **http://localhost:3000**
