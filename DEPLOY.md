# Deployment Guide - Kira Analytics

Choose your platform and follow the steps below.

## 🚀 Option 1: Railway (Recommended - Easiest)

### Why Railway?
- ✅ Free tier available
- ✅ Auto-deploys from Git
- ✅ Database included
- ✅ Environment variables built-in
- ✅ Custom domains

### Step-by-Step Deployment

#### 1. Prepare Repository
```bash
cd D:\Kira
git init
git add .
git commit -m "Initial commit: Kira full-stack app"
```

#### 2. Create GitHub Repository
- Go to https://github.com/new
- Create repo named `kira-analytics`
- Copy the commands and run:
```bash
git remote add origin https://github.com/YOUR-USERNAME/kira-analytics.git
git branch -M main
git push -u origin main
```

#### 3. Deploy on Railway
1. Go to https://railway.app
2. Click **"New Project"**
3. Select **"Deploy from GitHub"**
4. Authorize GitHub and select your `kira-analytics` repo
5. Click **Deploy**

#### 4. Configure Environment Variables
1. In Railway dashboard, go to **Variables**
2. Add these:
```
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
NODE_ENV=production
```
3. Railway auto-detects PORT

#### 5. Get Your Domain
- Railway provides a free domain automatically
- Go to **Settings → Domains**
- You'll see something like: `kira-analytics-production.up.railway.app`

**Done!** Your app is live! 🎉

---

## 🚀 Option 2: Render.com

### Step-by-Step

#### 1. Push to GitHub
Follow steps 1-2 from Railway above

#### 2. Deploy on Render
1. Go to https://render.com
2. Click **"New +"** → **"Web Service"**
3. Select **"Deploy an existing repository"**
4. Authorize GitHub and select `kira-analytics`
5. Configure:
   - **Name:** kira-analytics
   - **Environment:** Node
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
6. Select **Free** plan
7. Click **Create Web Service**

#### 3. Add Environment Variables
1. Go to **Environment** on the left
2. Add:
```
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
NODE_ENV=production
```
3. Auto-deploys on save

#### 4. Get Your Domain
- Render provides a free domain automatically
- You'll see: `kira-analytics.onrender.com`

---

## 🚀 Option 3: Heroku (Paid now, but works great)

### Step-by-Step

#### 1. Install Heroku CLI
```bash
# Windows: Download from https://devcenter.heroku.com/articles/heroku-cli
# Or use npm:
npm install -g heroku
```

#### 2. Login to Heroku
```bash
heroku login
```

#### 3. Create Heroku App
```bash
heroku create kira-analytics
```

#### 4. Set Environment Variables
```bash
heroku config:set EMAIL_USER=your-email@gmail.com
heroku config:set EMAIL_PASSWORD=your-app-password
```

#### 5. Deploy
```bash
git push heroku main
```

#### 6. View Logs
```bash
heroku logs --tail
```

Your app is at: `https://kira-analytics.herokuapp.com`

---

## 📧 Email Setup (Important!)

### Get Gmail App Password:
1. Go to https://myaccount.google.com/apppasswords
2. Ensure 2FA is enabled
3. Select **Mail** and **Windows Computer**
4. Copy the 16-character password
5. Add to environment variables as `EMAIL_PASSWORD`

### Gmail Configuration:
```
EMAIL_USER: your-email@gmail.com
EMAIL_PASSWORD: xxxx xxxx xxxx xxxx
```

---

## 🔄 Deployment Workflow

After first deployment, updates are automatic:

```bash
# Make changes locally
# Commit and push
git add .
git commit -m "Update feature"
git push origin main

# Railway/Render automatically redeploys
# Check logs in dashboard
```

---

## ✅ Testing After Deployment

1. **Visit your live app:**
   - Railway: `kira-analytics-production.up.railway.app`
   - Render: `kira-analytics.onrender.com`
   - Heroku: `kira-analytics.herokuapp.com`

2. **Test features:**
   - Fill waitlist form → should save
   - Login to admin panel → check submissions
   - Send contact message → verify in database

3. **Check logs:**
   - Railway: **Deployments → Logs**
   - Render: **Logs** tab
   - Heroku: `heroku logs --tail`

---

## 🆘 Troubleshooting

### App crashes after deploy
```bash
# Check logs
heroku logs --tail  # Heroku

# Common issues:
# - Missing dependencies (run npm install locally)
# - Wrong environment variables
# - PORT not set (Railway/Render handle this)
```

### Database errors
- First deploy creates empty database
- Add entries via waitlist form
- Check with `sqlite3 kira.db` locally

### Email not sending
- Verify Gmail App Password
- Check EMAIL_USER and EMAIL_PASSWORD are set
- Gmail may block first attempt - approve in email

### Domain not working
- Wait 2-3 minutes for DNS to propagate
- Check dashboard for actual URL
- Clear browser cache

---

## 💰 Pricing

| Platform | Free Tier | Limits |
|----------|-----------|--------|
| **Railway** | $5/month credit | Good for hobby |
| **Render** | Free | Sleeps after 15min inactivity |
| **Heroku** | ❌ Paid only | $7+/month |

**Recommendation:** Use Railway or Render free tier to start!

---

## 🔒 Security Checklist

Before going live:
- [ ] Change default admin password
- [ ] Add Gmail app-specific password
- [ ] Set NODE_ENV=production
- [ ] Enable HTTPS (automatic on all platforms)
- [ ] Remove .env.example from repo
- [ ] Set up error logging
- [ ] Backup database regularly

---

## 📈 Monitor Your App

### Railway Dashboard
- View logs in real-time
- See resource usage
- Monitor deployments

### Render Dashboard
- Check health status
- View logs
- Monitor performance

### Heroku Dashboard
```bash
# View metrics
heroku metrics --type=cpu

# View database info
heroku config
```

---

## 🔄 Update Your App

After first deployment, just push to GitHub:

```bash
git add .
git commit -m "Update message"
git push origin main

# Auto-deploys in 1-2 minutes
```

---

## 📞 Support

If deployment fails:

1. **Check platform logs** (most helpful)
2. **Verify environment variables** are set
3. **Ensure package.json is correct**
4. **Test locally** first: `npm start`
5. **Check Node version** is 14+

Good luck! 🚀
