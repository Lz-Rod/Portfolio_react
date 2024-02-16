import { servicesData } from "../data/Data"

function Services() {
    return (
        <section id="Services">
            <h2>&lt;Minha Expertise/&gt;</h2>
            <div className="container services-container">
                {servicesData.map(({img, serviceName, serviceInfo}, index)=>{
                    return(
                        <article key={index}>
                            <img src={img} alt="" />
                            <h3>{serviceName}</h3>
                            <p>{serviceInfo}</p>
                        </article>
                    )
                })}
            </div>
        </section>
    )
}
export default Services