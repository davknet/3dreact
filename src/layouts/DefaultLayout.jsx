
import MainFooter from '../footers/MainFooter';
import Header from '../headers/Header';
import MainMain from '../main/MainMain';
import  './style/default-layout-style.css';







const DefaultLayout = () => {

    return (

         <>
             <div className='default-layout' id=''>
                <Header />
                <MainMain/>
                <MainFooter />
             </div>
         </>

    )
}


export default DefaultLayout ;