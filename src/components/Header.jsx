import { homeData } from "../data/Data"

import { FaArrowRight } from "react-icons/fa6";

function Header() {
    return (
        <header>
            {homeData.map(({img, info, clip1, clip2, clip3, btnLink}, index)=>{
                return(
                    <div className="container header-container" key={index}>
                        <div className="header-left">
                            <h1>
                                {clip1}<br/>
                                {clip2}<br/>
                                {clip3}<br/>
                            </h1>
                            <p>{info}</p>
                            <a href={btnLink} >Contato <FaArrowRight /> </a>
                        </div>
                        <div className="header-image">
                            <img src={img} alt="" />
                        </div>
                        <div className="header-style">
                            L Z D E V
                        </div>
                    </div>
                )
            })}
        </header>
    )
}

export default Header