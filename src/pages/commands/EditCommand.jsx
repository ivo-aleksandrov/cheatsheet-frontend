import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./style.css";

export default function EditCommand() {
  let { commandID } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    commandID: commandID,
    descriptionValue: "",
    commandValue: "",
    categoryID: "",
  });

  const handleInputChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    fetch("/api/editCommand/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ID: form.commandID,
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
        console.error("Error editing command:", error);
      });
  };

  const handleDelete = () => {
    fetch(`/api/deleteCommand/${commandID}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          navigate(`/commands/${form.categoryID}`);
          window.location.reload(false);
        }
      })
      .catch((error) => {
        console.error("Error editing command:", error);
      });
  };

  useEffect(() => {
    fetch(`/api/getCommand/${commandID}`)
      .then((response) => response.json())
      .then((data) => {
        setForm({
          ...form,
          descriptionValue: data.results[0].DESCRIPTION,
          commandValue: data.results[0].COMMAND,
          categoryID: data.results[0].CATEGORY_ID,
        });
      })
      .catch((error) => {
        console.error("Error getting categories: ", error);
      });
  }, []);

  return (
    <>
      <div className="content">
        <main>
          <div className="header">
            <div className="left">
              <h1>Edit command</h1>
            </div>
          </div>
          <div className="commands">
            <div className="action">
              <table>
                <thead>
                  <tr>
                    <th>DESCRIPTION</th>
                    <th>COMMAND</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody></tbody>
                <tbody>
                  <tr>
                    <td>
                      <input
                        type="text"
                        name="descriptionValue"
                        onChange={handleInputChange}
                        value={form.descriptionValue}
                        placeholder="Enter description for command..."
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="commandValue"
                        onChange={handleInputChange}
                        value={form.commandValue}
                        placeholder="Enter command..."
                      />
                    </td>
                    <td onClick={handleSubmit} className="edit-btn">
                      <i className="bx bx-check"></i>
                    </td>
                    <td onClick={handleDelete} className="edit-btn">
                      <i className="bx bxs-trash-alt"></i>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
