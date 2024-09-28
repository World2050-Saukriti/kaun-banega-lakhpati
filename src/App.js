import { useState, useEffect,useRef } from 'react';
import * as XLSX from 'xlsx';
import * as d3 from 'd3';
import './App.css';
import Start from './Start';
import { DataContext,qsnContext,winContext } from './context';
function App() {
  const [showCurtain, setShowCurtain] = useState(false);
const [jsonData, setJsonData] = useState([]);
const [qnum,setQnum] = useState([]);
const [amount,setAmount] = useState(0);
const lc = useRef();
let rc = useRef();
  const handleStart = () => {
    lc.current.style.width="0px";
    rc.current.style.width="0px";
setTimeout(() => {
  setShowCurtain(true);
}, 1000);
  };

  useEffect(() => {
    if (showCurtain) {
      // Select left and right curtains
      const leftCurtain = d3.select("#left-curtain");
      const rightCurtain = d3.select("#right-curtain");

      // Animate left curtain to move to the left
      leftCurtain.transition()
        .duration(2000)
        .style("transform", "translateX(-100%)");  // Move the left curtain off-screen to the left

      // Animate right curtain to move to the right
      rightCurtain.transition()
        .duration(2000)
        .style("transform", "translateX(100%)")  // Move the right curtain off-screen to the right
        .on("end", () => {
          // Once animation completes, hide curtains, and show main content
          leftCurtain.style("display", "none");
          rightCurtain.style("display", "none");
        });
    }
  }, [showCurtain]);
  
    // Fetch and parse the Excel file
    useEffect(() => {
      const fetchExcelData = async () => {
        try {
          const response = await fetch('/questions.xlsx'); // Excel file in public folder
          const blob = await response.blob();
          const fileReader = new FileReader();
  
          fileReader.onload = (event) => {
            const binaryStr = event.target.result;
            const workbook = XLSX.read(binaryStr, { type: 'binary' });
  
            // Assuming you're reading the first sheet
            const sheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[sheetName];
  
            // Convert sheet data to JSON
            const json = XLSX.utils.sheet_to_json(worksheet);
  
            // Update context state with the JSON data
            setJsonData(json);
          };
  
          fileReader.readAsBinaryString(blob);
        } catch (error) {
          console.error('Error fetching or parsing Excel file:', error);
        }
      };
  
      fetchExcelData();
    }, []); 

  return (
    <winContext.Provider value={{amount,setAmount}}>
    <DataContext.Provider value={{jsonData,setJsonData}}>
    <qsnContext.Provider value={{qnum,setQnum}}>
    <div className="App relative w-full h-screen flex items-center justify-center bg-white overflow-hidden">
      {/* Curtains */}
      {!showCurtain && (
        <>
          {/* This curtain should move from right to left */}
          <div id="left-curtain" className="curtain left-curtain" ref={lc}></div>
          {/* This curtain should move from left to right */}
          <div id="right-curtain" className="curtain right-curtain" ref={rc}></div>
        </>
      )}

      {/* Start Button */}
      {!showCurtain && (
        <button
          className="start-btn text-3xl font-bold text-white py-4 px-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full shadow-lg hover:from-purple-600 hover:to-blue-700 transition duration-300 ease-in-out z-10"
          onClick={handleStart}
        >
          Start
        </button>
      )}

      {/* Main Content (show after curtain opens) */}
      {showCurtain && (
        <div style={{width:"100%"}}>
          <Start />
        </div>
      )}
    </div>
    </qsnContext.Provider>
    </DataContext.Provider>
    </winContext.Provider>
  );
}

export default App;
