import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <>
      <div className="content">
        <Navbar />
        { children }
      </div>
      <Footer />
    </>
  );
}
 
export default Layout;