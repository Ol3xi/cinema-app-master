import React from 'react';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { Home, MovieData } from './components/Cards/Home';
import { Comedy } from './components/Cards/Comedy';
import ErrorPage from "./error-page";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: [<Navbar />, <Home />],    
      errorElement: <ErrorPage />,
    },
    {
      path: "/comedy",
      element: [<Navbar />, <Comedy />],    
      errorElement: <ErrorPage />,
    },
  ]);

  return (
    <div className="App">
    <RouterProvider router={router} />
    </div>
  );
}

export default App;
