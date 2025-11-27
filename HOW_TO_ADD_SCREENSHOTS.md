 How to Add Screenshots to README

Follow these steps to add screenshots to your README file:

## Step 1: Take Screenshots

1. **Open your application** in the browser (http://localhost:3000)

2. **Take screenshots of each page:**
   - **Login Page**: Before logging in
   - **Dashboard**: After logging in, click Dashboard tab
   - **Employee Management**: Click Employees tab
   - **Task Management**: Click Tasks tab

### How to Take Screenshots:

**Windows:**
- Press `Windows + Shift + S` to open Snipping Tool
- Select the area you want to capture
- The screenshot will be copied to clipboard
- Open Paint or any image editor and paste (Ctrl + V)
- Save the image

**Alternative (Windows):**
- Press `PrtScn` (Print Screen) key to capture full screen
- Open Paint and paste (Ctrl + V)
- Crop if needed and save

## Step 2: Save Screenshots

1. Navigate to your project folder: `C:\Users\SRIRAM\OneDrive\Desktop\PROU\screenshots`

2. Save your screenshots with these exact names:
   - `login.png` - Login page screenshot
   - `dashboard.png` - Dashboard page screenshot
   - `employees.png` - Employee management page screenshot
   - `tasks.png` - Task management page screenshot

**Important**: Use PNG or JPG format. PNG is recommended for better quality.

## Step 3: Verify Images

1. Check that all images are saved in the `screenshots` folder:
   ```
   PROU/
   ├── screenshots/
   │   ├── login.png
   │   ├── dashboard.png
   │   ├── employees.png
   │   └── tasks.png
   ```

2. The README.md file already has the image references added:
   ```markdown
   ![Login Page](screenshots/login.png)
   ![Dashboard](screenshots/dashboard.png)
   ![Employee Management](screenshots/employees.png)
   ![Task Management](screenshots/tasks.png)
   ```

## Step 4: View in README

Once you save the images:
- Open README.md in GitHub, VS Code, or any Markdown viewer
- The images will display automatically
- If viewing on GitHub, push the screenshots folder along with your code

## Tips for Good Screenshots:

1. **Use Full Window**: Capture the entire browser window or just the application area
2. **Good Resolution**: Use at least 1920x1080 resolution
3. **Show Real Data**: Add some sample employees and tasks before taking screenshots
4. **Consistent Size**: Try to keep all screenshots roughly the same width
5. **Clear and Readable**: Ensure text is readable in the screenshots

## Optional: Add More Screenshots

You can add more screenshots by:

1. Adding the image to the `screenshots` folder
2. Adding this line in README.md where you want the image:
   ```markdown
   ![Description](screenshots/image-name.png)
   ```

## Example Workflow:

1. Login to your application (http://localhost:3000)
   - Username: admin
   - Password: 12345670

2. Take screenshot of login page BEFORE logging in
   - Save as: `screenshots/login.png`

3. Login and go to Dashboard
   - Take screenshot
   - Save as: `screenshots/dashboard.png`

4. Click on Employees tab
   - Add 2-3 sample employees first (for better visual)
   - Take screenshot
   - Save as: `screenshots/employees.png`

5. Click on Tasks tab
   - Add 2-3 sample tasks first (for better visual)
   - Take screenshot
   - Save as: `screenshots/tasks.png`

6. Done! Your README will now show all screenshots.

## Troubleshooting:

**Images not showing?**
- Check file names match exactly (case-sensitive on some systems)
- Verify files are in the `screenshots` folder
- Check file extension (.png or .jpg)
- Try opening the README in a different Markdown viewer

**Images too large?**
You can resize them using online tools or image editors before saving.
