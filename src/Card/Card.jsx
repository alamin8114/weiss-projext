import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";
import './Card.css'
const Card = () => {
  return (
    <>
    <div className="alaminCard">
        <div className="container">
            <div className="card-head">
                <h2>Unsere Dienstleistungen</h2>
                <p>Dienstleistung ist für unsere Mitarbeiter Herausforderung, das ist die Stärke unseres Teams. Ganz gleich, ob Verkehrsplanungen, Ver- und Ent­sorgung, Lärmschutz oder Spezialgebiete – wir bieten Rundum-Service mit:</p>
            </div>
            <div className="single-card-row">
                <div className="single-card">
                    <img src="images/card-img-1.png" alt="card-img" />
                    <h2>Studien und Konzepte, Gesamtplanung</h2>
                    <p>Neubau und Ausbau von Straßen, Verkehrsflächen, Wasserwegen und Eisenbahnen erfordert überzeugende Verkehrskonzepte.</p>
                    <div className="button">
                        <Link to={''}>Erfahren Sie mehr</Link>
                        <span><IoIosArrowForward/></span>
                    </div>
                </div>
                <div className="single-card">
                    <img src="images/card-img-2.png" alt="card-img" />
                    <h2>Studien und Konzepte, Gesamtplanung</h2>
                    <p>Neubau und Ausbau von Straßen, Verkehrsflächen, Wasserwegen und Eisenbahnen erfordert überzeugende Verkehrskonzepte.</p>
                    <div className="button">
                        <Link to={''}>Erfahren Sie mehr</Link>
                        <span><IoIosArrowForward/></span>
                    </div>
                </div>
                <div className="single-card">
                    <img src="images/card-img-3.png" alt="card-img" />
                    <h2>Studien und Konzepte, Gesamtplanung</h2>
                    <p>Neubau und Ausbau von Straßen, Verkehrsflächen, Wasserwegen und Eisenbahnen erfordert überzeugende Verkehrskonzepte.</p>
                    <div className="button">
                        <Link to={''}>Erfahren Sie mehr</Link>
                        <span><IoIosArrowForward/></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Card