# How to Record and Add Demo Video

This guide will help you record a professional demo video of your Employee Task Tracker application.

## Option 1: Record with Windows Built-in Tools (Recommended for Beginners)

### Method 1: Xbox Game Bar (Windows 10/11)

**Best for:** Quick screen recordings

1. **Open your application** (http://localhost:3000)

2. **Start Recording:**
   - Press `Windows + G` to open Xbox Game Bar
   - Click the Record button (circle icon) or press `Windows + Alt + R`
   - A timer will appear showing recording is active

3. **Stop Recording:**
   - Press `Windows + Alt + R` again
   - Or click the stop button in the floating toolbar

4. **Find Your Video:**
   - Videos are saved in: `C:\Users\[YourName]\Videos\Captures`
   - File format: `.mp4`

### Method 2: PowerPoint Screen Recording

**Best for:** Professional recordings with editing

1. **Open PowerPoint** (any version 2013+)

2. **Start Recording:**
   - Go to `Insert` tab
   - Click `Screen Recording`
   - Select area to record (full screen or window)
   - Click Record button

3. **Stop Recording:**
   - Press `Windows + Shift + Q`

4. **Save Video:**
   - Right-click on the recorded video in PowerPoint
   - Choose `Save Media as...`
   - Save as `.mp4`

## Option 2: Use Free Screen Recording Software

### OBS Studio (Free & Professional)

**Download:** https://obsproject.com/

**Features:**
- Professional quality
- No watermark
- No time limit
- Can add webcam overlay
- Can add audio commentary

**Quick Setup:**
1. Install OBS Studio
2. Add "Display Capture" source
3. Click "Start Recording"
4. Click "Stop Recording" when done
5. Videos saved in: `C:\Users\[YourName]\Videos`

### Other Free Options:

1. **ShareX** (https://getsharex.com/)
   - Lightweight and simple
   - Good for quick recordings

2. **ScreenRec** (https://screenrec.com/)
   - No time limit
   - Easy to use

3. **Loom** (https://www.loom.com/)
   - Free plan available
   - Automatically uploads to cloud
   - Easy sharing

## Demo Video Script (2-3 Minutes)

Follow this script for a professional demo:

### Introduction (10 seconds)
"Welcome to the Employee Task Tracker - a full-stack application for managing employees and tasks."

### 1. Login (15 seconds)
- Show login page
- Enter credentials (admin / 12345670)
- Click Login
- Say: "The app uses JWT authentication for secure access"

### 2. Dashboard (30 seconds)
- Show dashboard overview
- Point out:
  - Total tasks counter
  - Completed tasks
  - In-progress tasks
  - Pending tasks
  - Completion rate progress bar
- Say: "The dashboard provides real-time statistics on task completion"

### 3. Employee Management (45 seconds)
- Click Employees tab
- Show existing employees (if any)
- Click "Add Employee"
- Fill in form:
  - Name: John Doe
  - Email: john@company.com
  - Department: Engineering
  - Position: Senior Developer
- Click Create
- Show the new employee in the list
- Say: "Employees can be easily added, edited, and managed"
- Click Edit on one employee
- Make a small change
- Click Update
- Say: "All changes are saved to MongoDB database"

### 4. Task Management (60 seconds)
- Click Tasks tab
- Show filter options
- Click "Add Task"
- Fill in form:
  - Title: Complete Login Feature
  - Description: Implement user authentication
  - Assign to: John Doe
  - Status: In Progress
  - Priority: High
  - Due Date: [Pick a future date]
- Click Create
- Show the task card
- Say: "Tasks can be assigned to employees with priorities and due dates"
- Use status dropdown to change task status
- Say: "Task status can be updated with a single click"
- Show filters in action:
  - Filter by Status: "Completed"
  - Filter by Employee: Select one
- Say: "Powerful filters help you find tasks quickly"

### 5. Responsive Design (15 seconds)
- Resize browser window to show mobile view
- Say: "The application is fully responsive and works on all devices"

### 6. Logout (10 seconds)
- Click Logout button
- Return to login page
- Say: "Secure logout clears all session data"

### Conclusion (10 seconds)
"This Employee Task Tracker is built with React, Node.js, Express, and MongoDB. Thank you for watching!"

**Total Duration:** ~3 minutes

## Video Quality Settings

**Recommended Settings:**
- **Resolution:** 1920x1080 (Full HD)
- **Frame Rate:** 30 FPS
- **Format:** MP4 (H.264)
- **Audio:** Optional (but recommended for narration)

## Tips for a Professional Demo:

1. **Prepare Your Screen:**
   - Close unnecessary browser tabs
   - Hide desktop icons (right-click desktop → View → uncheck Show desktop icons)
   - Use a clean browser window
   - Set zoom to 100%

2. **Prepare Sample Data:**
   - Add 3-4 sample employees before recording
   - Add 5-6 sample tasks with different statuses
   - This makes the demo more realistic

3. **Recording Tips:**
   - Practice the flow once before recording
   - Speak clearly and not too fast
   - Don't rush - take your time
   - If you make a mistake, just start over
   - Keep mouse movements smooth

4. **After Recording:**
   - Review the video
   - Check audio quality (if added)
   - Trim any dead time at start/end

## How to Add Video to README

You have 3 options:

### Option 1: Upload to GitHub (Easiest)

1. **Record and save video** (max 10MB for GitHub)

2. **Upload to GitHub:**
   - Create a GitHub Issue in your repository
   - Drag and drop your video file
   - GitHub will upload it and give you a URL
   - Copy that URL
   - Or directly drag video into README edit mode on GitHub

3. **Add to README:**
   ```markdown
   ## Demo Video

   https://user-images.githubusercontent.com/your-uploaded-video-url.mp4
   ```

### Option 2: Upload to YouTube (Recommended)

1. **Upload video to YouTube:**
   - Go to https://youtube.com
   - Click Create → Upload video
   - Upload your recording
   - Set visibility (Public, Unlisted, or Private)
   - Get the video ID from URL (e.g., `dQw4w9WgXcQ`)

2. **Add to README:**
   ```markdown
   ## Demo Video

   [![Watch Demo](https://img.youtube.com/vi/YOUR_VIDEO_ID/0.jpg)](https://www.youtube.com/watch?v=YOUR_VIDEO_ID)
   ```
   Replace `YOUR_VIDEO_ID` with your actual YouTube video ID

3. **Benefits:**
   - No file size limit
   - Video streaming
   - Can update video without changing README
   - YouTube analytics

### Option 3: Google Drive / Dropbox

1. **Upload to Google Drive or Dropbox**

2. **Get shareable link**

3. **Add to README:**
   ```markdown
   ## Demo Video

   [Watch Demo Video](https://drive.google.com/your-link)
   ```

## File Organization

Save your demo video in the project:

```
PROU/
├── demo/
│   ├── demo-video.mp4         (Your recorded video)
│   └── demo-script.txt        (Your recording script)
```

**Note:** Large video files should NOT be committed to Git. Add them to `.gitignore`:
```
# Videos
demo/*.mp4
demo/*.mov
demo/*.avi
```

## Example Demo Videos (For Reference)

Look at these examples for inspiration:
- Keep it under 3-5 minutes
- Show key features
- Use smooth mouse movements
- Add background music (optional)

## Troubleshooting

**Video too large for GitHub?**
- Compress using: https://www.freeconvert.com/video-compressor
- Or use YouTube instead

**No audio recording?**
- Check microphone permissions
- Use a separate audio recorder and merge later

**Video quality poor?**
- Increase resolution in recording settings
- Record at 1080p minimum
- Ensure good lighting (for webcam overlay)

**Need to edit video?**
- Windows: Use built-in Photos app (Video Editor)
- Free software: DaVinci Resolve, Shotcut
- Online: Kapwing, Clipchamp

---

## Quick Checklist Before Recording:

- [ ] Application is running (http://localhost:3000)
- [ ] Sample data added (employees and tasks)
- [ ] Desktop is clean
- [ ] Browser window is maximized
- [ ] Zoom is at 100%
- [ ] Recording software is ready
- [ ] Script is prepared
- [ ] Microphone tested (if using audio)

Happy recording! 🎥
