import './Navbar.css'
import { CgMail } from "react-icons/cg";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaBars } from "react-icons/fa";
const Navbar = () => {
  return (
    <>
    <div className="Alamin-Nav">
        <div className="container">
            <div className="Nav-row">
                <div className="nav-logo">
                    <img src="images/Group.png" alt="logo-img" />
                </div>
                <div className="menu-dot md:hidden">
                    <button onClick={""}><FaBars className='text-[20px] hover:bg-brand-color'/></button>
                </div>
                <div className="menu-nav">
                    <ul>
                        <li><a href="#">Startseite</a></li>
                        <li className='relative group'>
                            <a  href="#">Leistungen<span className=' absolute top-[10px]'><IoMdArrowDropdown /></span></a>
                            <div className="side-menu-hidden">
                            <ul className='sideMenu'>
                                <li><a href="#">dndnd</a></li>
                                <li><a href="#">dndnd</a></li>
                                <li><a href="#">dndnd</a></li>
                            </ul>
                            </div>
                        </li>
                        <li className='relative group'><a href="#">Referenzen<span className=' absolute top-[10px]'><IoMdArrowDropdown /></span></a>
                        <div className="side-menu-hidden">
                            <ul className='sideMenu'>
                                <li><a href="#">dndnd</a></li>
                                <li><a href="#">dndnd</a></li>
                                <li><a href="#">dndnd</a></li>
                            </ul>
                            </div>
                        </li>
                        <li><a href="#">Über uns</a></li>
                    </ul>
                </div>
                <div className="navbutton">
                    <button className='text-[fff]' href="#">Kontakt</button>
                    <span className='text-[24px] font-roboto font-semibold text-[#fff]'><CgMail /></span>
                </div>
            </div>
        </div>
    </div>
        
    </>
  )
}

export default Navbar