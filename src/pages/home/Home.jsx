import React from "react";
import "./style.css";

export default function Dashboard() {
  return (
    <>
      <div className="content">
        <main>
          <div className="header">
            <div className="left">
              <h1>Cheat Sheet</h1>
              <p>
                This React App is a user-friendly and intuitive tool designed to
                streamline the organization and management of categories and
                associated commands. This versatile application provides a
                robust platform for users to create, modify, and delete both
                categories and commands within those categories effortlessly.
              </p>

              <h2>Key Features:</h2>
              <ol>
                <li>
                  <span>Category Management:</span> Users can create, rename,
                  and delete categories.
                </li>
                <li>
                  <span>Command Creation and Editing:</span> Add, edit, and
                  delete commands within categories.
                </li>
                <li>
                  <span>User-Friendly Interface: </span>Intuitive controls and
                  navigation for easy use.
                </li>
                <li>
                  <span>Responsive Design: </span>Ensures usability across
                  various devices.
                </li>
                <li>
                  <span>Drag-and-Drop Functionality: </span>Organize commands
                  with ease.
                </li>
                <li>
                  <span>Error Handling and Confirmation: </span>Prevent
                  accidental data loss.
                </li>
                <li>
                  <span>Search and Filter: </span>Find specific categories or
                  commands quickly.
                </li>
                <li>
                  <span>Authentication and Security: </span>Secure user data and
                  operations.
                </li>
                <li>
                  <span>Undo and Redo Functionality: </span>Provides a safety
                  net for actions.
                </li>
                <li>
                  <span>Export and Import: </span>Backup and transfer data
                  effortlessly.
                </li>
              </ol>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
