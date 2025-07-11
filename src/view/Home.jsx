import { Helmet, HelmetProvider } from 'react-helmet-async';
import './style/home-page-style.css' ;
import { FloorTabs } from '../components/perspective/FloorTabs';
// import BoxViewer from '../components/canvas/viewers/BoxViewer';










const Home = () => {


    return (

         <>
         
            <HelmetProvider>
                    <Helmet>
                     <title> Home | LEANCON  </title>
                    </Helmet>
            </HelmetProvider>
            <div className="Home-page">
                <div className='container' id='home-container'>
                        <div className='view-cover' id='view-cover-home'>

                         <FloorTabs />

                        </div>
                        <div className='sidebar' id='home-sidebar'>
                       
                       </div>
                </div>    
            </div>
         </>
 
    )
}


export default Home ;