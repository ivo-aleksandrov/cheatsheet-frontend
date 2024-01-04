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
              <div class="container">
                <div class="header">
                  <p>
                    This React App is a user-friendly and intuitive tool
                    designed to streamline the organization and management of
                    categories and associated commands. This versatile
                    application provides a robust platform for users to create,
                    modify, and delete both categories and commands within those
                    categories effortlessly.
                  </p>
                </div>

                <div class="main">
                  <h2>Key Features:</h2>
                  <ol>
                    <li>
                      Category Management: Users can create, rename, and delete
                      categories.
                    </li>
                    <li>
                      Command Creation and Editing: Add, edit, and delete
                      commands within categories.
                    </li>
                    <li>
                      User-Friendly Interface: Intuitive controls and navigation
                      for easy use.
                    </li>
                    <li>
                      Responsive Design: Ensures usability across various
                      devices.
                    </li>
                    <li>
                      Drag-and-Drop Functionality: Organize commands with ease.
                    </li>
                    <li>
                      Error Handling and Confirmation: Prevent accidental data
                      loss.
                    </li>
                    <li>
                      Search and Filter: Find specific categories or commands
                      quickly.
                    </li>
                    <li>
                      Authentication and Security: Secure user data and
                      operations.
                    </li>
                    <li>
                      Undo and Redo Functionality: Provides a safety net for
                      actions.
                    </li>
                    <li>
                      Export and Import: Backup and transfer data effortlessly.
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
