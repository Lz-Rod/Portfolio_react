import { aboutData } from "../data/Data"
import Shape from '../assets/Titik.png'

function About() {
    return (
        <section id="About">
            {aboutData.map(({img, aboutInfo, btnLink}, index)=>{
                return(
                    <div className="container about-container" key={index}>
                        <div className="about-left">
                            <div className="about-shape">
                                <img src={Shape} alt="" />
                            </div>
                            <img src={img} alt="" />
                            <div className="about-shape">
                                <img src={Shape} alt="" />
                            </div>
                        </div>
                        <div className="about-right">
                            <h2>&lt;Um pouco sobre mim/&gt;</h2>
                            <p>{aboutInfo}</p>
                            <a href={btnLink} download className="btn">Download CV</a>
                        </div>
                    </div>
                )
            })}
        </section>
    )
}
export default About