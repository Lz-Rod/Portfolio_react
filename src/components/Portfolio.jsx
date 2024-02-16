import { portfolioData } from "../data/Data"

function Portfolio() {
    return (
        <section id="Portfolio">
            <div className="container portfolio-container">
                <h2>&lt;Portfólio/&gt;</h2>
                <div className="all-portfolios">
                    {portfolioData.map(({img, name, info, viewLink, gitLink}, index)=>{
                        return(
                            <article key={index}>
                                <img src={img} alt="" />
                                <div className="portfolio-info">
                                    <h4>{name}</h4>
                                    <small>{info}</small>
                                    <div className="portfolio-btn">
                                        <a href={viewLink} className="btn" target="_blank"> Demo</a>
                                        <a href={gitLink} className="btn" target="_blank"> GitHub</a>
                                    </div>
                                </div>
                            </article>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
export default Portfolio