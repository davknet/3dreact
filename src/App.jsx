
import Header  from './headers/Header' ;
import './App.css'
import MainFooter from './footers/MainFooter';
import { RouterProvider } from 'react-router-dom';
import router from './Router';

function App() {
 

  return (
     <>
       
        <RouterProvider router={router} />
      
     </>
  )
}

export default App
