import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ErrorHandler from "../../components/errorhandler/ErrorHandler";
import "./style.css";

export default function AddCategory() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    categoryName: "",
    icon: "",
  });

  const [error, setError] = useState();

  const handleInputChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    fetch("/api/addCategory", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ NAME: form.categoryName, ICON: form.icon }),
    })
      .then((response) => {
        if (response.ok) {
          navigate(`/`);
          window.location.reload(false);
        } else {
          console.error("Error adding category:", response.errorMessage);
          setError(response.errorMessage);
        }
        throw new Error("Network response was not ok.");
      })
      .catch((error) => {
        // Handle errors, e.g., show an error message
        console.error("Error adding category:", error);
      });

    window.location.reload(false);
  };

  return (
    <>
      <div className="content">
        <main>
          <div className="header">
            <div className="left">
              <h1>Edit category: {form.categoryName}</h1>
            </div>
          </div>
          <div className="bottom-data">
            <div className="commands">
              <div className="action">
                <table>
                  <thead>
                    <tr>
                      <th>NAME</th>
                      <th>ICON</th>
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
                          name="categoryName"
                          onChange={handleInputChange}
                          value={form.categoryName}
                          placeholder="Enter name for category..."
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="icon"
                          onChange={handleInputChange}
                          value={form.icon}
                          placeholder="Enter icon for category..."
                        />
                      </td>
                      <td onClick={handleSubmit} className="edit-btn">
                        <i className="bx bx-check"></i>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <ErrorHandler error={error} />
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
