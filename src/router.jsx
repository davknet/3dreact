import { createBrowserRouter } from "react-router-dom"
import DefaultLayout from "./layouts/DefaultLayout";
import Home from "./view/Home";
import Contact from "./view/Contact";
import About from "./view/About";







const router =  createBrowserRouter([

     { 'path' : '/' , element : <DefaultLayout /> , children : [
          { path : '/' , element : <Home />  }     ,
          { path : '/contact-us' , element : <Contact /> } ,
          { path : '/about-us' , element : <About /> }   
    ]}
]);




export default router;