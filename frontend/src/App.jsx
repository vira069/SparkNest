import React, { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Labs from "./pages/Labs.jsx";
import TestYourSkills from "./pages/TestYourSkills.jsx";
import AnyDoubt from "./pages/AnyDoubt.jsx";
import Quiz from "./pages/Quiz.jsx";
import LoginPage from "./components/Auth/LoginPage.jsx";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/Login" replace />;
};

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");
    if (token && storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar user={user} setUser={setUser} />
          <Home />
        </>
      ),
    },
    {
      path: "/Labs",
      element: (
        <>
          <Navbar user={user} setUser={setUser} />
          <Labs />
        </>
      ),
    },
    {
      path: "/TestYourSkills",
      element: (
        <>
          <Navbar user={user} setUser={setUser} />
          <TestYourSkills />
        </>
      ),
    },
    {
      path: "/TestYourSkills/quiz",
      element: (
        <ProtectedRoute>
          <>
            <Navbar user={user} setUser={setUser} />
            <Quiz />
          </>
        </ProtectedRoute>
      ),
    },
    {
      path: "/AnyDoubt", 
      element: (
        <>
          <Navbar user={user} setUser={setUser} />
          <AnyDoubt />
        </>
      ),
    },
    {
      path: "/Login",
      element: (
        <LoginPage
          onLogin={(user) => {
            setUser(user);
          }}
        />
      ),
    },
    {
      path: "*", 
      element: <Navigate to="/" replace />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;