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
              <br></br>
              <p>
                This React App is a user-friendly and intuitive tool designed to
                streamline the organization and management of categories and
                associated commands. This versatile application provides a
                robust platform for users to create, modify, and delete both
                categories and commands within those categories effortlessly.
              </p>
              <br></br>
              <h3>Key Features:</h3>
              <ul>
                <li>
                  <b>Category Management:</b> Users can create, rename,
                  and delete categories.
                </li>
                <li>
                  <b>Command Creation and Editing:</b> Add, edit, and
                  delete commands within categories.
                </li>
                <li>
                  <b>User-Friendly Interface: </b>Intuitive controls and
                  navigation for easy use.
                </li>
                <li>
                  <b>Responsive Design: </b>Ensures usability across
                  various devices.
                </li>
                <li>
                  <b>Drag-and-Drop Functionality: </b>Organize commands
                  with ease.
                </li>
                <li>
                  <b>Error Handling and Confirmation: </b>Prevent
                  accidental data loss.
                </li>
                <li>
                  <b>Search and Filter: </b>Find specific categories or
                  commands quickly.
                </li>
                <li>
                  <b>Authentication and Security: </b>Secure user data and
                  operations.
                </li>
                <li>
                  <b>Undo and Redo Functionality: </b>Provides a safety
                  net for actions.
                </li>
                <li>
                  <b>Export and Import: </b>Backup and transfer data
                  effortlessly.
                </li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
