import React from "react";
import { NavLink } from "react-router-dom";

function Commands({ commandsValue, commandsPerPage, itemOffSet }) {
  const endOffset = itemOffSet + commandsPerPage;
  const currentItems = commandsValue.slice(itemOffSet, endOffset);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>DESCRIPTION</th>
            <th>COMMAND</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((command) => (
            <tr key={command.ID}>
              <td>
                <p>{command.DESCRIPTION}</p>
              </td>
              <td>
                <p>{command.COMMAND}</p>
              </td>
              <td>
                <NavLink
                  to={`/commands/${command.CATEGORY_ID}/editCommand/${command.ID}`}
                  reloadDocument
                >
                  <div className="edit">
                    <i className="bx bxs-edit"></i>
                  </div>
                </NavLink>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Commands;
