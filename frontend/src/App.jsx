import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./components/Auth/LoginPage.jsx";
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Subjects from "./pages/Subjects.jsx";
import Labs from "./pages/Labs.jsx";
import TestYourSkills from "./pages/TestYourSkills.jsx";
import AnyDoubt from "./pages/AnyDoubt.jsx";
import Standard from "./pages/Standard.jsx";

const router =createBrowserRouter([
  {
    path: "/",
    element: (
    <div>
      <Navbar />
      <Home />
    </div>
    ),
  },
  {
    path: "/Standard",
    element: (
    <div>
      <Navbar/>
      <Standard/>
      </div>
    ),
  },
  {
    path: "/Subjects",
    element: (
    <div>
      <Navbar/>
      <Subjects/>
      </div>
    ),
  },
  {
    path: "/Labs",
    element: (
    <div>
      <Navbar/>
      <Labs/>
    </div>
    ),
  },
  {
    path: "/TestYourSkills",
    element: (
    <div>
      <Navbar/>
      <TestYourSkills/>
    </div>
    ),
  },
  {
    path: "/Anydoubt",
    element:(
    <div>
      <Navbar/>
      <AnyDoubt/>
    </div>
    ),
  },
  {
    path: "/Login",
    element: (
      <div>
        <LoginPage />
      </div>
    ),
  }
])


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;