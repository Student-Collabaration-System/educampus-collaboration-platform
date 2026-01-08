# OAuth Integration Guide

## Overview
StudyHub now supports signing in with **Google** and **Microsoft** accounts. When users authenticate via OAuth, their data is captured and displayed throughout the application.

## How It Works

### 1. **Login/Signup Pages**
- Users can click "Continue with Google" or "Continue with Microsoft"
- A dialog opens asking for their account details
- Users enter their name and email
- A random avatar is generated for them
- Upon confirmation, they're logged in and redirected to the dashboard

### 2. **Data Captured from OAuth**
The following information is saved when using OAuth:

| Field | Source | Example |
|-------|--------|---------|
| **Full Name** | User enters in dialog | "Alex Thompson" |
| **Email** | User enters in dialog | "alex.thompson@gmail.com" |
| **Username** | Auto-generated from email | "alex.thompson" |
| **Bio** | Auto-generated | "StudyHub member via Google" |
| **Profile Picture** | Auto-generated avatar | Random DiceBear avatar |

### 3. **Where OAuth Data Appears**

#### 📍 **Header (My Account Dropdown)**
- Full name displayed at the top
- Email shown below the name
- Profile picture in the avatar
- Example:
  ```
  Alex Thompson
  alex.thompson@gmail.com
  ```

#### 📍 **Dashboard**
- Personalized greeting: "Welcome back, Alex!"

#### 📍 **Profile Page**
- Full name in large header text
- Bio: "StudyHub member via Google/Microsoft"
- Email in the About section
- Profile picture displayed

#### 📍 **Settings Page**
- All fields pre-populated with OAuth data
- Name: "Alex Thompson"
- Email: "alex.thompson@gmail.com"
- Username: "alex.thompson"
- Bio: "StudyHub member via Google"
- Profile picture shown
- **All fields are editable!**

#### 📍 **Throughout the App**
- Profile picture appears in:
  - Header avatar
  - All activity feed items
  - Comments and posts
  - Group member lists

## Editing OAuth Data

Even if you signed in with Google or Microsoft, you can still edit your information:

1. Go to **Settings** → **Account** tab
2. Edit any field (name, email, username, bio)
3. Upload a custom profile picture
4. Click **"Save Changes"**
5. Changes are reflected everywhere immediately

## OAuth vs Traditional Login

| Feature | Traditional Login | OAuth Login |
|---------|------------------|-------------|
| Password Required | ✅ Yes | ❌ No |
| Email Verification | Manual | Via OAuth provider |
| Profile Picture | Default | Auto-generated |
| Bio | "Computer Science student" | "StudyHub member via [Provider]" |
| Data Editable | ✅ Yes | ✅ Yes |

## Security Notes

### Current Implementation (Demo Mode)
- This is a **frontend-only demo** of OAuth
- No real OAuth tokens are exchanged
- Data is stored in browser memory (session)
- Perfect for prototyping and testing

### Production Implementation (With Supabase)
When connected to Supabase, OAuth would work as follows:
1. User clicks "Continue with Google/Microsoft"
2. Redirected to real OAuth provider
3. User authenticates with their actual account
4. OAuth provider returns user data + access token
5. Supabase stores user data securely
6. Data persists across sessions and devices
7. Profile picture URL from actual provider account

## Testing OAuth Flow

### Quick Test
1. Open the app (login page)
2. Click **"Continue with Google"**
3. Enter name: "Test User"
4. Enter email: "test@gmail.com"
5. Click **"Continue with Google"**
6. ✅ You're logged in!

### Verify Data Storage
1. After OAuth login, click your profile picture (top right)
2. You should see:
   - Your entered name
   - Your entered email
3. Navigate to **Settings**
4. See all your data pre-filled
5. Navigate to **Profile**
6. See your information displayed beautifully

### Verify Data Persistence
1. Navigate between pages
2. Your name and email should stay consistent
3. Edit your profile in Settings
4. Changes should appear everywhere
5. Upload a new profile photo
6. Photo should update in header, profile, settings

## Provider-Specific Notes

### Google OAuth
- Email domain: `@gmail.com` (typical)
- Bio: "StudyHub member via Google"
- Color theme: Google colors in icon

### Microsoft OAuth
- Email domain: `@outlook.com` or `@hotmail.com` (typical)
- Bio: "StudyHub member via Microsoft"
- Color theme: Microsoft colors in icon

## Next Steps

To implement **real OAuth** with Supabase:
1. Connect to Supabase
2. Enable Google/Microsoft providers in Supabase dashboard
3. Configure OAuth redirect URLs
4. Update OAuth handlers to use Supabase Auth
5. Store user data in Supabase database
6. Implement session management

---

**Note**: The current implementation is a high-fidelity prototype that demonstrates the complete OAuth user experience. All user data flows work correctly and can be easily migrated to a real OAuth implementation with Supabase.
