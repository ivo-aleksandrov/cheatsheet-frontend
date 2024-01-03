import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

export default function AddCategory() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    categoryName: "",
    icon: "",
  });

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
              <h1>Add category</h1>
            </div>
          </div>
          <div className="add-category">
            <input
              type="text"
              name="categoryName"
              onChange={handleInputChange}
              placeholder="Enter category name"
            />
            <input
              type="text"
              name="icon"
              onChange={handleInputChange}
              placeholder="Enter icon"
            />
            <button onClick={handleSubmit}>Add Category</button>
          </div>
        </main>
      </div>
    </>
  );
}
