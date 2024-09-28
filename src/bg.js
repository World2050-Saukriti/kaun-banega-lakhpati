import Cash from "./components/Cash";
import Qsn from "./components/Qsn";
import Winning from "./components/Winning";
import SemiCircleTimer from "./components/Timer";
import LifelineButtons from "./components/Lifeline";
import { useState, useEffect, useContext } from "react";
import { DataContext } from "./context";
import VisionariesProfileCards from "./components/Profile";
export default function BG() {
  const [cash, setCash] = useState(false);
  const [qsn, setQsn] = useState(false);
  const [start, setStart] = useState(false);
  //const [questionIndex, setQuestionIndex] = useState(0); // State to track current question index
  const { jsonData } = useContext(DataContext);
  // const {qnum,setQnum} = useContext(qsnContext)
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "A" && e.shiftKey) {
        setCash((prevCash) => !prevCash); // Toggle cash state
      }
      if (e.key === "S" && e.shiftKey) {
        setQsn((prevQsn) => !prevQsn);
      }
      if (e.key === "X" && e.shiftKey) {
        setStart((prevStart) => !prevStart); // Toggle timer state
      }
    };

    document.addEventListener("keypress", handleKeyPress);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      document.removeEventListener("keypress", handleKeyPress);
    };
  }, [jsonData]);

  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        backgroundImage: 'url("bg.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
      }}
    >
      <div style={{
        position:"absolute",
        bottom:"0",
        left:"25%"
      }}>
            {!cash&&<VisionariesProfileCards/>}
      </div>
      {cash && <Winning />}
      {cash && <Cash />}
      {qsn && <Qsn/>} {/* Pass current question index */}
      {start && <SemiCircleTimer />}
      {qsn && <LifelineButtons />}
    </div>
  );
}
