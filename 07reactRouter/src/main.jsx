import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import User from "./components/User/User.jsx";
import Github, {githubInfoLoader} from "./components/Github/Github.jsx";

// '/' => top level elem

// createBrowserRouter function is used to create a router instance for
//  client-side routing in React applications. It simplifies route 
// definitions and allows you to set up a router with routes and layouts 
// more declaratively. It provides a modern, structured way to handle 
// navigation in Single Page Applications (SPAs

// const router = createBrowserRouter([{
//   path: "/",
//   element: <Layout />,
//   children: [
//     {
//       path: "",
//       element: <Home />,
//     },
//     {
//       path: "about",
//       element: <About />,
//     },
//     {
//       path: "contact",
//       element: <Contact />,
//     },
//   ],
// }]);
// isme Array para

// isme Function Para

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element = {<Home />}/>
      <Route path="/about" element = {<About />}/>
      <Route path="/contact" element = {<Contact />}/>
      <Route path="/user/:userid" element = {<User />}/>
      <Route 
      // yaha api call likh skte pura lekin not preferable
      // loader jaise hi event trigger hota mouse hover hote hi DATA fetch kr lo
      loader = {githubInfoLoader}
      path="/github" 
      element = {<Github />}/>
    </Route>
  ) 
)

createRoot(document.getElementById("root")).render(
  <StrictMode>
    
    <RouterProvider router={router} />
  </StrictMode>
);
