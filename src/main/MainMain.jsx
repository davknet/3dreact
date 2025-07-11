import { Navigate, Outlet } from "react-router-dom";
import './style/main-main-style.css';









const MainMain = () => {

    return (
        
        <>
            <main className='main' id=''>
                <Outlet />
            </main>
        </>

    )
}



export default MainMain ;