import React from 'react'
import {
    Card,
    Cardcontent,
    Typography

} from "@material-ui/core"
import "./Infobox.css"

const InfoBox=({ title, cases, total, active, isRed, ...props })=>{
    return(
        <div>
            <Card className="infoBox"
             onClick={props.onClick}
             className={`infoBox ${active && "infoBox--selected"} ${
               isRed && "infoBox--red"
             }`}>
                
               <Typography  className="infoBox_title" color="textSecondary">
                   {title}
               </Typography>

                 <h2 className="infoBox_cases">{cases}</h2>

                 <Typography className="infoBox_total" color="textSecondary">
                      {total} Total
                 </Typography>
            </Card>

        </div>

    )
}
export default InfoBox;