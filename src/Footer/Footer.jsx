import './Footer.css'
const Footer = () => {
  return (
    <>
    <div className="Alamin-footer">
        <div className="container">
            <div className="footer-row">
                <div className="footer-logo">
                    <img src="images/Weiss Logo.png" alt="Footer-img" />
                </div>
                <div className="footer-text flex md:gap-[144px] justify-between">
                    <div className="single-footer-text">
                    <h4>Geschäftsführer</h4>
                    <p>Beratender Ingenieur
                    Dipl.-Ing. Klaus Weiss</p>
                    </div>
                    <div className="single-footer-text">
                    <h4>Adresse</h4>
                    <p>Straßenname 7
                    12345 Stadt</p>
                    </div>
                </div>

            </div>
            <div className="footer-line"></div>
            <div className="footer-end-row">
                <h3>Impressum</h3>
                <div className="footer-end-line"></div>
                <h3>Datenschutz</h3>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer