import React from "react";
import "./style.css";

export default function Dashboard() {
  return (
    <>
      <div className="content">
        <main>
          <div className="header">
            <div className="left">
              <h1>Cheat Sheet asjkdhasjkdhaskjdhaskd</h1>
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
              <br></br>
              <div class="feature">
                1. <span>Category Management:</span>
                <p>
                  Users can create, rename, and delete categories to organize
                  commands efficiently. Each category serves as a container for
                  related commands, enabling users to maintain a structured
                  hierarchy.
                </p>
              </div>
              <div class="feature">
                2. <span>Command Creation and Editing: </span>
                <p>
                  Within each category, users can add new commands with
                  specified titles, descriptions, and associated actions. The
                  app allows for the editing of command details, enabling users
                  to update information or modify functionalities as needed.
                </p>
              </div>
              <div class="feature">
                3. <span>User-Friendly Interface: </span>
                <p>
                  The interface is designed with simplicity and ease of use in
                  mind. Intuitive controls and clear navigation make it
                  effortless for users to add, remove, and modify categories and
                  commands.
                </p>
              </div>
              <div class="feature">
                4. <span>Responsive Design: </span>
                <p>
                  The app is responsive across various devices and screen sizes,
                  ensuring a seamless experience whether accessed from desktops,
                  tablets, or smartphones.
                </p>
              </div>
              <div class="feature">
                5. <span>Error Handling and Confirmation: </span>
                <p>
                  Robust error handling ensures that users receive notifications
                  and confirmations when performing critical actions like
                  deleting categories or commands, preventing accidental data
                  loss.
                </p>
              </div>
              <div class="feature">
                6. <span>Search for a command: </span>
                <p>
                  Users can swiftly search for specific commands using the
                  search bar.
                </p>
              </div>
              <div class="feature">
                7. <span>Authentication and Security: </span>
                <p>
                  The app implements secure authentication measures to protect
                  user data, allowing only authorized users to perform (Create,
                  Read, Update, Delete) operations.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
