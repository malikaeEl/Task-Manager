Task Manager App

A simple Task Manager web application built with HTML, CSS, and JavaScript. It allows you to add, edit, and delete tasks and categorize them as Pending or Completed.

Features

Add tasks with:

Title

Description

Priority (Low, Medium, High)

Due Date

Status (Pending / Completed)

Edit tasks directly from the task list.

Delete tasks easily.

Tasks are displayed in separate Pending and Completed sections.

How to Use

Open index.html in a browser.

Fill in the task details in the form.

Click Add Task to add the task.

Tasks will appear in Pending or Completed section based on status.

Click the ✏️ Edit button to modify a task.

Click the 🗑️ Delete button to remove a task.

Technologies Used

HTML5 – Structure of the app.

CSS3 – Styling using Flexbox and basic design.

JavaScript – Task management functionality.

Font Awesome – Icons for edit, delete, and status.

File Structure
/task-manager
│
├─ index.html        # Main HTML page
├─ style.css         # Styles for the app
├─ script.js         # JavaScript functionality
└─ README.md         # Project description

Notes

Tasks are stored only in memory (var db=[]), so they disappear on page reload.

The app separates tasks by status visually for better organization.

Works on modern browsers.