import { useContext } from "react"
import { winContext } from "../context"
export default function Winning(){
    const {amount} = useContext(winContext)
    return(
        <>
        
            <div className="pt-5" style={{
                position: "absolute",
                top: "5px",
                left: "0",
                width: "25%",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                opacity: "0.9"

            }}>
                <b style={{
                    color:"white",
                    width:"100%",
                    textAlign:"center"
                }}>Winning Amount</b>
            <div class="chevron-container wining">
                ₹{amount.toLocaleString()}/-
        </div>
            </div>
        </>
    )
}