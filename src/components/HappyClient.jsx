import { happyclientData } from "../data/Data"

function HappyClient() {
    return (
        <div id="HappyClient">
            <div className="container happyClient-container">
                {happyclientData.map(({topic, info}, index)=>{
                    return(
                        <div className="happyPart" key={index}>
                            <h3>{topic}</h3>
                            <h4>{info}</h4>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default HappyClient