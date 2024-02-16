import { TechData } from "../data/Data"

function Tech() {
    return (
        <div>
            <div className="container brand-container">
                {TechData.map(({img}, index)=>{
                    return(                    
                        <img src={img} alt="" key={index} />                  
                    )
                })}
            </div>
        </div>
    )
}
export default Tech