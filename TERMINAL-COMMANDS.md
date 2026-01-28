# 🖥️ TERMINAL COMMANDS QUICK REFERENCE

## Essential Commands for Your Clothing Brand Website

---

## 🚀 First Time Setup

### Install All Dependencies:
```powershell
npm install
```
**What it does:** Downloads React, Tailwind CSS, Framer Motion, and all required packages  
**Time:** 2-3 minutes  
**Run:** Only once (or after deleting node_modules)

---

## 🏃 Development (While Building)

### Start Development Server:
```powershell
npm start
```
**What it does:** 
- Starts local server at http://localhost:3000
- Opens browser automatically
- Auto-refreshes on file changes
- Shows errors in browser and terminal

**Stop server:** Press `Ctrl + C`

---

## 🏗️ Build for Production

### Create Production Build:
```powershell
npm run build
```
**What it does:**
- Creates optimized version in `build/` folder
- Minifies code
- Optimizes images and assets
- Ready for deployment

**Time:** 1-2 minutes  
**Output:** `build/` folder  
**Use:** Before deploying to Vercel/Netlify

---

## 🧪 Testing

### Run Tests:
```powershell
npm test
```
**What it does:** Runs any tests you've written  
**Note:** Default CRA tests included

---

## 🧹 Cleanup Commands

### Delete node_modules:
```powershell
Remove-Item -Recurse -Force node_modules
```

### Fresh Install:
```powershell
Remove-Item -Recurse -Force node_modules
npm install
```
**Use:** When something breaks or packages conflict

### Clear Build:
```powershell
Remove-Item -Recurse -Force build
```

---

## 🔍 Helpful Commands

### Check Node Version:
```powershell
node --version
```
**Should be:** v14.0.0 or higher

### Check npm Version:
```powershell
npm --version
```
**Should be:** v6.0.0 or higher

### List Installed Packages:
```powershell
npm list --depth=0
```

---

## 🚀 Deployment Commands

### Vercel Deployment:

**Install Vercel CLI:**
```powershell
npm install -g vercel
```

**Login:**
```powershell
vercel login
```

**Deploy (Preview):**
```powershell
vercel
```

**Deploy (Production):**
```powershell
vercel --prod
```

---

### Netlify Deployment:

**Install Netlify CLI:**
```powershell
npm install -g netlify-cli
```

**Login:**
```powershell
netlify login
```

**Deploy (Preview):**
```powershell
netlify deploy
```

**Deploy (Production):**
```powershell
netlify deploy --prod
```

---

## 🛠️ Troubleshooting Commands

### If "npm install" fails:

**Clear npm cache:**
```powershell
npm cache clean --force
npm install
```

### If port 3000 is busy:

**Kill process on port 3000:**
```powershell
Get-Process -Id (Get-NetTCPConnection -LocalPort 3000).OwningProcess | Stop-Process
```

**Or use different port:**
```powershell
$env:PORT=3001; npm start
```

---

## 📦 Package Management

### Add a Package:
```powershell
npm install package-name
```

### Remove a Package:
```powershell
npm uninstall package-name
```

### Update All Packages:
```powershell
npm update
```

### Check for Outdated Packages:
```powershell
npm outdated
```

---

## 🔄 Common Workflows

### Daily Development:
```powershell
# Start work
npm start

# Make changes in VS Code
# Browser auto-refreshes

# Stop server when done
Ctrl + C
```

### Before Deploying:
```powershell
# Clean build
Remove-Item -Recurse -Force build

# Create fresh build
npm run build

# Test build locally
npx serve -s build

# Deploy
vercel --prod
```

### After Pulling Updates:
```powershell
# Update dependencies
npm install

# Start server
npm start
```

---

## 🎨 Tailwind Commands

### Rebuild Tailwind (if needed):
Already handled by `npm start` - you don't need to do anything!

---

## 📝 Git Commands (Optional)

### Initialize Git:
```powershell
git init
git add .
git commit -m "Initial commit"
```

### Push to GitHub:
```powershell
git remote add origin https://github.com/yourusername/clothing-brand.git
git branch -M main
git push -u origin main
```

---

## 💡 Quick Tips

### Open VS Code from Terminal:
```powershell
code .
```

### Open Folder in Explorer:
```powershell
explorer .
```

### Check Current Directory:
```powershell
pwd
```

### List Files:
```powershell
ls
```

### Change Directory:
```powershell
cd "d:\clothing brand website"
```

---

## 🚨 Error Solutions

### Error: "npm not found"
**Solution:** Install Node.js from https://nodejs.org

### Error: "EACCES permission denied"
**Solution:** Run PowerShell as Administrator

### Error: "Port 3000 already in use"
**Solution:** 
```powershell
# Option 1: Kill the process
Get-Process -Id (Get-NetTCPConnection -LocalPort 3000).OwningProcess | Stop-Process

# Option 2: Use different port
$env:PORT=3001; npm start
```

### Error: "Module not found"
**Solution:**
```powershell
Remove-Item -Recurse -Force node_modules
npm install
```

---

## 📋 Quick Command Cheat Sheet

| Command | What It Does | When to Use |
|---------|--------------|-------------|
| `npm install` | Install dependencies | First time, after clone |
| `npm start` | Start dev server | Daily development |
| `npm run build` | Build for production | Before deployment |
| `vercel --prod` | Deploy to Vercel | Make site live |
| `Ctrl + C` | Stop server | End development session |
| `npm test` | Run tests | Testing |
| `code .` | Open VS Code | Start editing |

---

## 🎯 Your Daily Routine

```powershell
# Morning - Start coding
cd "d:\clothing brand website"
npm start

# Work in VS Code
# Browser shows changes automatically

# Evening - Stop server
Ctrl + C
```

---

## 🚀 First Time? Run These Now:

```powershell
# Step 1: Navigate to project
cd "d:\clothing brand website"

# Step 2: Install everything
npm install

# Step 3: Start development server
npm start

# Your browser opens to http://localhost:3000
# You're ready to customize!
```

---

**Remember:**
- `npm install` - Only needed once (or after deleting node_modules)
- `npm start` - Use every time you want to work
- `npm run build` - Only before deploying
- `Ctrl + C` - Stop the server

---

**Happy Coding! 🎉**
