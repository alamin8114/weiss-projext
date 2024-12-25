import { Link } from 'react-router-dom';
import './Banner.css'
import { IoIosArrowForward } from "react-icons/io";
const Banner = () => {
  return (
    <>
    <div className="alaminBanner">
        <div className="container">
            <div className="banner-row">
                <div className="banner-text">
                    <h2>Ingenieur Dieter Weiss</h2>
                    <h1>Ingenieurbüro für Bau- und Vermessungswesen</h1>
                    <p>Wenn Sie zuverlässige Ingenieure brauchen – das Ingenieurbüro Dieter Weiss ist Garant für den Er­folg Ihrer Projekte.</p>
                    <div className="button-banner">
                        <Link>Ihr Projekt mit uns</Link>
                        <span><IoIosArrowForward/></span>
                    </div>
                </div>
                <div className="banner-img">
                    <img src="images/banner-img.png" alt="Banner-img" />
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Banner