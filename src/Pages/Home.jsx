import Banner from "../Banner/Banner"
import Blog from "../Blog/Blog"
import Card from "../Card/Card"
import Diplom from "../Diplom-Ingenieur/Diplom"
import Footer from "../Footer/Footer"
import Mach from "../Mach/Mach"
import Navbar from "../Navbar/Navbar"

const Home = () => {
  return (
    <>
    <Navbar/>
    <Banner/>
    <Card/>
    <Diplom/>
    <Blog/>
    <Mach/>
    <Footer/>
    </>
  )
}

export default Home