# StudyHub User Data Flow

## How User Data is Saved and Displayed

### 1. **Creating an Account (Signup)**

#### Option A: Traditional Signup
When you create a new account:
- Enter your **Full Name** (e.g., "Sarah Johnson")
- Enter your **Email** (e.g., "sarah.johnson@university.edu")
- Enter your **Username** (e.g., "sarahjohnson")
- Enter your **Password**

#### Option B: OAuth Signup (Google/Microsoft)
When you sign up with Google or Microsoft:
1. Click "Sign up with Google" or "Sign up with Microsoft"
2. A dialog will open asking for your account details
3. Enter your **Full Name** and **Email**
4. Your profile picture is automatically generated
5. Bio is set to "StudyHub member via [Provider]"

This data is saved in the app and will appear in:
- **Header dropdown**: Shows your full name and email
- **Profile page**: Displays your full name, email, and bio
- **Settings page**: Shows all your account details (editable)
- **Dashboard**: Welcomes you by your first name

### 2. **Logging In**

#### Option A: Traditional Login
When you log in with an existing account:
- Enter your **Email** (e.g., "john.smith@university.edu")
- Enter your **Password**

The system will:
- Extract your name from your email (john.smith → John Smith)
- Save your email address
- Display this information throughout the app

#### Option B: OAuth Login (Google/Microsoft)
When you log in with Google or Microsoft:
1. Click "Continue with Google" or "Continue with Microsoft"
2. A dialog will open asking for your account details
3. Enter your **Full Name** and **Email** 
4. Your profile picture is automatically generated
5. Click "Continue" to log in

The system will save all your information and use it throughout the app.

### 3. **Where Your Data Appears**

#### Header (Top Right)
- Click on your profile picture
- See your **full name** and **email** in the dropdown menu

#### My Account (Settings Page)
- Shows your **profile picture** (uploadable)
- Displays your **full name** (editable)
- Displays your **email** (editable)
- Displays your **username** (editable)
- Displays your **bio** (editable)

#### Profile Page
- Shows your **full name** in large text
- Shows your **bio** as a subtitle
- Shows your **email** in the About section
- Displays your **profile picture**

#### Dashboard
- Personalized welcome message: "Welcome back, [FirstName]!"

### 4. **Updating Your Data**
Go to Settings → Account tab:
- Click "Upload from Device" to change your profile photo
- Edit your name, email, username, or bio
- Click "Save Changes" to update

All changes are immediately reflected across:
- Header dropdown
- Profile page  
- Settings page
- Dashboard welcome message

### 5. **Profile Photo**
You can upload a profile photo from two places:
1. **Settings page**: Click "Upload from Device" button
2. **Profile page**: Click the camera icon on your profile picture

The photo will appear in:
- Header avatar
- Profile page header
- Settings page
- All activity feed items

## Testing the Flow

### Test 1: Traditional Signup
1. **Start Fresh**: Open the app (starts at login page)
2. **Create Account**: 
   - Click "Sign up"
   - Enter: "Jane Doe", "jane.doe@university.edu", "janedoe", password
   - See "Welcome back, Jane!" on dashboard
3. **Check Header**: Click profile picture → See "Jane Doe" and "jane.doe@university.edu"
4. **Visit Profile**: Click "Profile" → See all your information
5. **Edit Settings**: Change name to "Jane Smith" → Click "Save Changes"
6. **Verify Update**: Check header again → See "Jane Smith"

### Test 2: OAuth Login (Google/Microsoft)
1. **Start Fresh**: Open the app (starts at login page)
2. **OAuth Login**:
   - Click "Continue with Google" or "Continue with Microsoft"
   - Enter your name (e.g., "Alex Thompson")
   - Enter your email (e.g., "alex.thompson@gmail.com")
   - Click "Continue with Google/Microsoft"
3. **Check Dashboard**: See "Welcome back, Alex!"
4. **Check Header**: Click profile picture → See "Alex Thompson" and "alex.thompson@gmail.com"
5. **Check Bio**: Visit Settings or Profile → See "StudyHub member via Google/Microsoft"
6. **Profile Picture**: See your auto-generated avatar everywhere

## Note
All data is currently stored in memory (browser session). In a production app, this would be saved to a database via Supabase.
