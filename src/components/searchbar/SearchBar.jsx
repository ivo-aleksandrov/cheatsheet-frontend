import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

export default function SearchBar({ setResults, id }) {
  const [input, setInput] = useState("");

  const fetchPatients = (value) => {
    fetch(`/api/getCommands/${id}`)
      .then((response) => response.json())
      .then((data) => {
        let results = [];

        results = data.results.filter(
          (command) =>
            command.DESCRIPTION.toLowerCase().includes(value.toLowerCase()) ||
            command.COMMAND.includes(value)
        );

        setResults(results);
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchPatients(value);
  };

  return (
    <div className="searchBar">
      <NavLink to={`/commands/${id}/addCommand/`} reloadDocument>
        <button className="add-btn" type="submit">
          <i className="bx bx-plus"></i>
        </button>
      </NavLink>
      <input
        type="search"
        placeholder="Search for command..."
        className="input"
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
      <button className="search-btn" type="submit">
        <i className="bx bx-search"></i>
      </button>
    </div>
  );
}
