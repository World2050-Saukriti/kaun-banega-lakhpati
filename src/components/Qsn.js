import { useContext, useState, useEffect } from "react";
import { DataContext, winContext,timerContext ,timeAudioContext} from "../context";
import { useNavigate } from "react-router-dom";
const alist = [1000, 2000, 5000, 10000, 15000, 20000, 30000, 50000, 70000, 100000];
export default function Qsn() {
    const {timeOn,setTimeOn} = useContext(timerContext)
    const {setTimeAudio} = useContext(timeAudioContext);
    const navigate = useNavigate();
    const { jsonData } = useContext(DataContext);
    const [curq, setCurq] = useState(0);
    const [done, setDone] = useState(false);
    const[firstClicked,setFirstClicked] = useState(false)
    const { setAmount } = useContext(winContext);
    const currentQuestion = jsonData[curq];
    const options = currentQuestion["Options Comma Seperated"].split(',');
    function handleFirstClick(selectedOption,element){
        setTimeAudio(false);
        if(!firstClicked&&timeOn){
            setFirstClicked(true)
            element.style.backgroundColor="orange";
        setTimeOn(false); 
        function nest(e){
            if (e.shiftKey && e.key === "Q") {
            element.style.backgroundColor="";
            document.removeEventListener("keypress",nest)
            handlecorrect(selectedOption, element)
            }
        }
        document.addEventListener("keypress",nest)
        }
    }
    function handlecorrect(selectedOption, element) {
        if (!done) {
            const correctAnswer = currentQuestion["Correct Answers"].trim();
            const userAnswer = selectedOption.trim();

            if (userAnswer === correctAnswer) {
                element.classList.add("correctchevron");
                element.classList.remove("wrongchevron");
                setAmount((prevAmount) => alist[curq]); // Update the amount
            } else {
                element.classList.add("wrongchevron");
                element.classList.remove("correctchevron");
            }
            setDone(true); // Mark this question as done
        }
    }

    useEffect(() => {
        
       try{
        const ids = ["id0", "id1", "id2", "id3", "id4", "id5", "id6", "id7", "id8", "id9"];
        ids.forEach((id) => document.querySelector(`.${id}`).classList?.remove("slidechevron"));
        document.querySelector(`.${ids[curq]}`).classList?.add("slidechevron");

        const handleKeyPress = (e) => {
            if (e.shiftKey && e.key === "D" && done) {
            setFirstClicked(false)
            setTimeAudio(true);
                if(curq===9){
                    // window.location.redirect("/won")
                    return navigate("/won")
                }else{
                setCurq((prev) => (prev < 9 ? prev + 1 : 0)); // Move to the next question
                Array.from(document.querySelectorAll(".chevron-container")).forEach((el) => {
                    el.classList?.remove("wrongchevron", "correctchevron");
                });
                setDone(false);
                ids.forEach((id) => document.querySelector(`.${id}`).classList?.remove("slidechevron"));
                document.querySelector(`.${ids[curq + 1]}`).classList?.add("slidechevron");
            }
            }
        };

        document.addEventListener("keypress", handleKeyPress);

        // Cleanup function to remove event listener on component unmount
        return () => {
            document.removeEventListener("keypress", handleKeyPress);
        };
       }catch(err){
        console.log(err.message)
       }
    }, [curq, done,navigate]);

    return (
        <>
            <div
                className="bg-blue-800 pt-5"
                style={{
                    position: "absolute",
                    bottom: "0",
                    left: "0",
                    height: "35vh",
                    width: "75%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                    opacity: "0.9",
                }}
            >
                <div
                    className="question text-center text-4xl"
                    style={{
                        color: "white",
                        textAlign: "center",
                        width: "100%",
                    }}
                >
                    <span className="qnum">{curq + 1}.</span>
                    <span className="qsn mb-8">{currentQuestion.Questions}</span>
                    <hr className="mt-4" />
                    <div className="flex justify-evenly items-center" style={{ flexDirection: "column" }}>
                        <div className="flex justify-evenly items-center" style={{ width: "100%" }}>
                            <div
                                className="chevron-container winchevron a lock"
                                onClick={(e) => handleFirstClick(options[0], e.target)}
                            >
                                {options[0]}
                            </div>
                            <div
                                className="chevron-container winchevron b lock"
                                onClick={(e) => handleFirstClick(options[1], e.target)}
                            >
                                {options[1]}
                            </div>
                        </div>
                        <div className="flex justify-evenly items-center" style={{ width: "100%" }}>
                            <div
                                className="chevron-container winchevron c lock"
                                onClick={(e) => handleFirstClick(options[2], e.target)}
                            >
                                {options[2]}
                            </div>
                            <div
                                className="chevron-container winchevron d lock"
                                onClick={(e) => handleFirstClick(options[3], e.target)}
                            >
                                {options[3]}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
