import { Link } from "react-router-dom"
import { IoIosArrowForward } from "react-icons/io";
import './Mach.css'
const Mach = () => {
  return (
    <>
    <div className="alaminMach">
        <div className="container">
            <div className="Mach-row">
                <div className="mach-text">
                    <h3>Mach Karriere bei uns</h3>
                    <h1>Bewirb dich bei uns</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                    <div className="button">
                        <Link to={''}>Karriere</Link>
                        <span><IoIosArrowForward/></span>
                    </div>
                </div>
                <div className="mach-img">
                    <img src="images/mach-img.png" alt="mach-img" />
                </div>
            </div>
        </div>
    </div>
    </>
)
}

export default Mach