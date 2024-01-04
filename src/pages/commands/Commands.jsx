import React, { useEffect, useState } from "react";
import Commands from "../../components/commands/Commands";
import { useParams, NavLink } from "react-router-dom";
import "./style.css";
import Pagination from "../../components/pagination/Pagination";
import SearchBar from "../../components/searchbar/SearchBar";

export default function CommandsDetails() {
  let { id } = useParams();
  const [commands, setCommands] = useState([]);
  const [category, setCategory] = useState([]);
  const [commandsPerPage, setCommandsPerPage] = useState(10);
  const [commandsOffset, setCommandsOffset] = useState(0);

  useEffect(() => {
    // Get scheduled threatments
    const fetchCommands = async () => {
      await fetch(`/api/getCommands/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setCommands(data.results);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    };

    const fetchCategory = async () => {
      await fetch(`/api/getCategory/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setCategory(data.results[0]);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    };

    fetchCategory();

    fetchCommands();
  }, [id]);

  return (
    <>
      <div className="content">
        <main>
          <div className="header">
            <div className="left">
              <h1>/ {category.NAME}</h1>
            </div>
          </div>
          <NavLink to={`/editCategory/${id}`} reloadDocument>
            <button className="edit-category-btn">EDIT CATEGORY</button>
          </NavLink>
          <SearchBar setResults={setCommands} id={id} />
          <div className="commands">
            <Commands
              commandsValue={commands}
              commandsPerPage={commandsPerPage}
              itemOffSet={commandsOffset}
            />
          </div>
          <Pagination
            itemsPerPage={commandsPerPage}
            commandsData={commands}
            setItemOffsetValue={setCommandsOffset}
            setItemsPerPage={setCommandsPerPage}
          />
        </main>
      </div>
    </>
  );
}
