import { Helmet, HelmetProvider } from 'react-helmet-async';
import './style/about-page-style.css' ;
import BuildingViewer  from '../components/canvas/viewers/BuildingViewer';










const About = () => {


    return (

         <>
             <HelmetProvider>
                    <Helmet>
                     <title> About | LEANCON  </title>
                    </Helmet>
            </HelmetProvider>
            <div  className="About-page">
                <div style={{ width: '600px', height: '400px', border: '1px solid red' }}>
                    <BuildingViewer />
                </div>
            </div>
         </>
 
    )
}


export default About ;