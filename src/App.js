import React from 'react';
import './App.css';
import Home from './components/Home/home';
import Events from './components/Events/Events';
import About from './components/About/About';
import Gallery from './components/Gallery/Gallery';
import Contact from './components/Contact/Contact';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    { path: '/', 
    element : <Home/>,
    },
    {path : '/events',
    element : <Events />
    },
    {path : '/about-us',
    element : <About />
    },
    {path : '/gallery',
    element : <Gallery />
    },
    {path : '/contact-us',
    element : <Contact />
    }
  ])
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
