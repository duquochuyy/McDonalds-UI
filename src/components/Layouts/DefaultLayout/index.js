import Header from './Header'
import Footer from './Footer'

function DefaultLayout({children}) {
    return ( 
        <div className='wrapper'>
            <Header/>
            <div className='inner'>
                {children}
            </div>
            <Footer/>
        </div>
    );
}

export default DefaultLayout;