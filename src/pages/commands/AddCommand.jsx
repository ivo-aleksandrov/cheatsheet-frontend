import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./style.css";

export default function AddCommand() {
  let { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    descriptionValue: "",
    commandValue: "",
    categoryID: id,
  });

  const handleInputChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    fetch("/api/addCommand", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        DESCRIPTION: form.descriptionValue,
        COMMAND: form.commandValue,
        CATEGORY_ID: form.categoryID,
      }),
    })
      .then((response) => {
        if (response.ok) {
          navigate(`/commands/${form.categoryID}`);
          window.location.reload(false);
        }
      })
      .catch((error) => {
        // Handle errors, e.g., show an error message
        console.error("Error adding category:", error);
      });
  };

  return (
    <>
      <div className="content">
        <main>
          <div className="header">
            <div className="left">
              <h1>Add command</h1>
            </div>
          </div>
          <div className="bottom-data">
            <div className="commands">
              <div className="add-command">
                <table>
                  <thead>
                    <tr>
                      <th>DESCRIPTION</th>
                      <th>COMMAND</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody></tbody>
                  <tbody>
                    <tr>
                      <td>
                        <input
                          type="text"
                          className="category-input"
                          name="descriptionValue"
                          onChange={handleInputChange}
                          placeholder="Enter description for command..."
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="commandValue"
                          onChange={handleInputChange}
                          placeholder="Enter command..."
                        />
                      </td>
                      <td onClick={handleSubmit} className="edit-btn">
                        <i className="bx bx-check"></i>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
