import { useEffect,useState } from 'react';
import logo from './logo.svg'; // Replace with your spinner image
import './App.css'; // Custom styles for animation, etc.
import BG from './bg';
import startsound from "../src/startsound.mp3"
function Comp1(){
  return(
    <div className="relative w-100 h-screen">
      {/* Confetti canvas */}
      <canvas id="world" className="absolute top-0 left-0"></canvas>

      {/* Main content */}
      <div className="flex justify-center items-center w-full h-full z-10 relative bg-gradient-to-r from-purple-500 to-blue-600">
        <div className="bg-white secondpage  shadow-2xl rounded-lg p-10 text-center transform transition duration-500 hover:scale-105" style={{ width: "80%", height: "90vh" }}>
          {/* Title */}
          <div class="css-3d-text">KAUN BANEGA LAKHPATI</div>
           
          

          {/* Spinner */}
          <div className="relative flex justify-center items-center mt-6 mb-6">
            {/* Logo Image */}
            <img
              src={logo}
              className="App-logo h-52 w-52 animate-spin-slow"
              alt="logo"
            />
          </div>

          {/* Host Information */}
          <div className="mt-6 text-4xl font-extrabold text-gray-700 css-3d-text" style={{letterSpacing:"0.1em"}}>
            <span style={{color:"#6666ff"}}>Host:</span> Mahatma Srijunga GSSS 
          </div><br/>
          <div className="mt-6 text-4xl font-extrabold text-gray-700 css-3d-text" style={{letterSpacing:"0.1em"}}>
          Bermiok Martam, 
          </div><br/>
          <div className="mt-6 text-4xl font-extrabold text-gray-700 css-3d-text" style={{letterSpacing:"0.1em"}}>
          Gyalshing District
          </div>

        </div>
      </div>
    </div>
  )
}



function Start() {
const [bg,setbg] = useState(false);
  useEffect(() => {
    // Play audio
    const audio = new Audio(startsound);
    audio.play();
    audio.onended = () => {
      setbg(true); 
    };

    // Confetti animation logic
    const NUM_CONFETTI = 350;
    const COLORS = ['#0000e7', '#dbdb00', '#ed1c24', '#00ebeb'];

    let canvas = document.getElementById('world');
    let context = canvas.getContext('2d');
    let w = 0;
    let h = 0;

    const resizeWindow = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeWindow, false);
    resizeWindow();

    const range = (a, b) => (b - a) * Math.random() + a;

    const drawCircle = (x, y, width, height, style, deg) => {
      const rotDeg = (deg * Math.PI) / 180;
      context.beginPath();
      context.save();
      context.translate(x + width, y + height);
      context.rotate(rotDeg);
      context.fillStyle = style;
      context.fillRect(-width, -height, width, height);
      context.restore();
    };

    let xpos = 0.8;
    document.onmousemove = (e) => {
      xpos = e.pageX / w;
    };

    class Confetti {
      constructor() {
        this.style = COLORS[~~range(0, 4)];
        this.deg = range(10, 120);
        this.r = ~~range(4, 10);
        this.width = 2 * this.r;
        this.height = this.r / 2;
        this.replace();
      }

      replace() {
        this.opacity = 0;
        this.dop = 1;
        this.x = range(0, w - this.width);
        this.y = range(-(h - this.width), -this.width);
        this.xmax = w - this.r;
        this.ymax = h - this.r;
        this.vx = 0;
        this.vy = 1.1 * this.r + range(-1, 1);
      }

      draw() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.y > this.ymax) this.replace();
        if (!(0 < this.x && this.x < this.xmax)) this.x = (this.x + this.xmax) % this.xmax;
        drawCircle(~~this.x, ~~this.y, this.width, this.height, this.style, this.deg);
      }
    }

    const confetti = Array.from({ length: NUM_CONFETTI }, () => new Confetti());

    const step = () => {
      context.clearRect(0, 0, w, h);
      confetti.forEach((c) => c.draw());
      window.requestAnimationFrame(step);
    };

    step();


    return () => {
      window.removeEventListener('resize', resizeWindow);
    };
  }, []);

  return (
    <>
    {bg?<BG/>:<Comp1/>}
    </>
  );
}

export default Start;
