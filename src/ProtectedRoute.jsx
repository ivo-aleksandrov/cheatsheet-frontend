import { Outlet, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

const ProtectedRoute = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState();

  useEffect(() => {
    fetch("/api/verifytoken")
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      })
      .catch((error) => {
        console.error("Error checking authentication:", error);
      });
  }, []);

  if (isAuthenticated) {
    return <Outlet />;
  } else {
    navigate("/login");
  }
};

export default ProtectedRoute;
