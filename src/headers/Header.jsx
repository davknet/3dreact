
import MainLogo from '../components/logos/MainLogo';
import MainHeaderNav from '../components/navs/MainHeaderNav';
import './style/header-style.css' ;





const Header = () => {



 return (

    <>
         <header className='main-header'>

               <div className='main-menu-bar' > 
                  <div className='left-header-box'   id=''> 
                      <MainLogo /> 
                  </div>
                  <div className='middle-header-box' id=''>
                      <MainHeaderNav />
                  </div>
                  <div className='right-header-box'  id=''>
                      
                  </div>
               </div>   
        </header>     
    </>
 )

}




export default Header;