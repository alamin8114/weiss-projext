import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";
import './Diplom.css'
const Diplom = () => {
  return (
    <>
    <div className="alamin-diplom">
        <div className="container">
            <div className="diplom-row">
                <div className="diplom-col">
            <h3>Unsere Firmenhistorie</h3>
            <h1>Diplom-Ingenieur Dieter Weiss gründete im Jahre 1971 sein Ingenieurbüro.</h1>
            <p>Fast 30 Jahre lang führte er es als Alleininhaber. 1998 trat Sohn Klaus weiss als Stellvertreter an die Seite seines Vaters. Seit 2006 ist Diplom-Ingenieur Klaus Weiss alleiniger Geschäftsführer</p>
            <div className="line-diplom"></div>
            <div className="button">
                <Link to={''}>Lesen Sie weiter</Link>
                <IoIosArrowForward/>
            </div>
            </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Diplom