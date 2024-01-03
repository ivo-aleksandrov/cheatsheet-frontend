import React, { useEffect, useState } from "react";
import { useNavigate, NavLink, useLocation } from "react-router-dom";
import Cookies from "js-cookie";

function getCookie(name) {
  let value = `; ${document.cookie}`;
  let parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}

export default function Wrapper() {
  const [categories, setCategories] = useState([]);
  const location = useLocation();

  // Log out
  const navigate = useNavigate();

  function handleLogout() {
    fetch("/api/logout")
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          navigate("/login");
          window.location.reload(false);
        }
      })
      .catch((error) => {
        console.error("Error logging out: ", error);
      });
  }

  useEffect(() => {
    var user = getCookie("user");

    if (user != null) {
      fetch("/api/getCategories")
        .then((response) => response.json())
        .then((data) => {
          setCategories(data.results);
        })
        .catch((error) => {
          console.error("Error getting categories: ", error);
        });
    }

    // Sidebar
    const sideBar = document.querySelector(".sidebar");
    const menuBar = document.querySelector(".content .nav .bx.bx-menu");

    menuBar.addEventListener("click", () => {
      sideBar.classList.toggle("close");
    });

    if (window.innerWidth < 768) {
      sideBar.classList.toggle("close");
    } else if (window.innerWidth > 576) {
      sideBar.classList.toggle("close");
    }

    window.addEventListener("resize", function () {
      if (this.innerWidth > 576) {
        sideBar.classList.toggle("close");
      }
    });

    // Theme
    var theme = getCookie("theme");
    const toggler = document.getElementById("theme-toggle");

    if (theme === "dark") {
      document.body.classList.add("dark");
      document.getElementById("theme-toggle").checked = true;
    } else {
      document.body.classList.remove("dark");
    }

    toggler.addEventListener("change", function () {
      if (this.checked) {
        document.body.classList.add("dark");
        Cookies.set("theme", "dark");
      } else {
        document.body.classList.remove("dark");
        Cookies.set("theme", "light");
      }
    });
  }, []);

  return (
    <>
      <div className="sidebar">
        <a href="/" className="logo">
          <i className="bx bxs-brain"></i>
          <div className="logo-name">
            <span>Ch</span>Sheet
          </div>
        </a>
        <ul className="side-menu">
          {categories?.map((category) => (
            <div key={category.ID}>
              <NavLink to={`/commands/${category.ID}`} reloadDocument>
                {({ isActive }) =>
                  isActive ? (
                    <li className="active">
                      <span>
                        <i className={`bx ${category.ICON}`}></i>
                        {category.NAME}
                      </span>
                    </li>
                  ) : (
                    <li>
                      <span>
                        <i className={`bx ${category.ICON}`}></i>
                        {category.NAME}
                      </span>
                    </li>
                  )
                }
              </NavLink>
            </div>
          ))}
        </ul>

        <ul className="side-menu">
          <NavLink to="/addCategory" reloadDocument>
            {({ isActive }) =>
              isActive ? (
                <li className="active">
                  <span>
                    <i className="bx bx-plus"></i>Add Category
                  </span>
                </li>
              ) : (
                <li>
                  <span>
                    <i className="bx bx-plus"></i>Add Category
                  </span>
                </li>
              )
            }
          </NavLink>

          {location.pathname === "/login" && (
            <li className="active">
              <span>
                <i className="bx bx-log-in-circle"></i>Login
              </span>
            </li>
          )}

          {location.pathname !== "/login" && (
            <li>
              <span className="logout" onClick={handleLogout}>
                <i className="bx bx-log-out-circle"></i>
                Logout
              </span>
            </li>
          )}
        </ul>
      </div>

      <div className="content">
        <div className="nav">
          <i className="bx bx-menu"></i>
          Theme:
          <input type="checkbox" id="theme-toggle" hidden />
          <label htmlFor="theme-toggle" className="theme-toggle"></label>
        </div>
      </div>
    </>
  );
}
