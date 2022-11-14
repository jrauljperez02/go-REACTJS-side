import MainHeader from './MainHeader'
import Footer from './Footer/Footer'

const Layout = ({children}) => {
  return (
    <>
        <MainHeader/>
        {children}
        <Footer/>
    </>
  )
}

export default Layout