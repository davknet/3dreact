import { Helmet, HelmetProvider } from 'react-helmet-async';









const Contact = () => {


    return (

         <>
                <HelmetProvider>
                    <Helmet>
                     <title> Contact Us  | LEANCON  </title>
                    </Helmet>
            </HelmetProvider>
            <div className="Home-page">
                    <title>Contact Us </title>
            </div>
         </>
 
    )
}


export default Contact ;