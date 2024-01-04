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
              <h4>Key Features:</h4>
              <div class="feature">
                <span>1. Category Management:</span>
                <p>Users can create, rename, and delete categories.</p>
              </div>
              <div class="feature">
                <span>2. Command Creation and Editing:</span>
                <p>Add, edit, and delete commands within categories.</p>
              </div>
              <div class="feature">
                <span>3. User-Friendly Interface:</span>
                <p>Intuitive controls and navigation for easy use.</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
