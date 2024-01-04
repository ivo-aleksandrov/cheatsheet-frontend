import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ErrorHandler from "../../components/errorhandler/ErrorHandler";
import "./style.css";

export default function EditCategory() {
  let { id } = useParams();
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
    fetch("/api/editCategory", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ID: id,
        NAME: form.categoryName,
        ICON: form.icon,
      }),
    })
      .then((response) => {
        if (response.ok) {
          navigate(`/commands/${id}`);
          window.location.reload(false);
        }
      })
      .catch((error) => {
        // Handle errors, e.g., show an error message
        console.error("Error adding category:", error.errorMessage);
        setError(error.errorMessage);
      });
  };

  const handleDelete = () => {
    fetch(`/api/deleteCategory/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          navigate(`/`);
          window.location.reload(false);
        } else {
          console.error("Error adding category:", response.errorMessage);
          setError(response.errorMessage);
        }
      })
      .catch((error) => {
        console.error("Error editing command:", error);
      });
  };

  useEffect(() => {
    fetch(`/api/getCategory/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setForm({
          ...form,
          categoryName: data.results[0].NAME,
          icon: data.results[0].ICON,
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
              <h1>Edit category: {form.categoryName}</h1>
            </div>
          </div>
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
                    <td onClick={handleDelete} className="edit-btn">
                      <i className="bx bxs-trash-alt"></i>
                    </td>
                  </tr>
                </tbody>
              </table>

              <ErrorHandler error={error} />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
