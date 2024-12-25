import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";

import './Blog.css'
const Blog = () => {
return (
    <>
    <div className="alaminBlog">
        <div className="container">
            <div className="blog-row">
                <div className="blog-head">
                    <h1>Wissenswertes</h1>
                    <p>Integer massa urna, senectus maecenas in dapibus urna amet hendrerit. In ipsum, morbi amet aenean. Iaculis donec sem nullam nunc condimentum nisl non gravida in.</p>
                </div>
                <div className="button-blog">
                    <Link to={''}>Unser Blog</Link>
                    <span><IoIosArrowForward/></span>
                </div>
            </div>
            <div className="blog-card">
                <h1>Unsere Letzten Beiträge</h1>
                <div className="blog-single-card-row">
                <div className="single-card-blog">
                        <h1>Sed eget morbi cursus elit ipsum pellentesque</h1>
                        <p>Pellentesque mauris arcu nec gravida amet nec. Duis senectus cras semper cursus bibendum phasellus vehicula porttitor...</p>
                        <div className="button">
                            <Link>Lesen Sie weiter</Link>
                            <span><IoIosArrowForward/></span>
                        </div>
                    </div><div className="single-card-blog">
                        <h1>Urna velit semper faucibus ac suspendisse et</h1>
                        <p>In nibh sodales tincidunt vitae tortor. Turpis aliquam mattis eget cursus bibendum interdum vestibulum, aliquam. Fringilla malesuada...</p>
                        <div className="button">
                            <Link>Lesen Sie weiter</Link>
                            <span><IoIosArrowForward/></span>
                        </div>
                    </div>
                    <div className="single-card-blog">
                        <h1>Bibendum augue imperdiet sapien quis enim elementum</h1>
                        <p>Facilisi id mus at pulvinar vitae, ornare vitae scelerisque. Lacus egestas augue cursus aliquam nulla. Sed erat a scelerisque neque...</p>
                        <div className="button">
                            <Link>Lesen Sie weiter</Link>
                            <span><IoIosArrowForward/></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
)
}

export default Blog