import { useEffect, useState } from 'react'
import './App.css'
import Dice from "./assets/icon-dice.svg"
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"

function App() {
  const [advice, setAdvice] = useState(null);

  const handleAdvice = async () => {
    try {
      const res = await axios.get("https://api.adviceslip.com/advice");
      setAdvice(res.data.slip);
    } catch (error) {
      toast.error(error, {position: "bottom-left"})
    }
  };

  return (
    <div className="min-h-screen w-full bg-main pt-24">
      <div className="p-4 m-auto w-72 h-56 gap-2 bg-box flex justify-center items-center flex-col text-center rounded-xl">
        <p className="text-md font-[500] text-button">
          ADVICE #{!advice ? "117" : advice.id}
        </p>
        <p className="text-primary text-lg">
          {!advice
            ? "It is easy to sit up and take notice, what's difficult is getting up and taking action."
            : advice.advice}
        </p>
        <hr />
        <div className="bg-button cursor-pointer" onClick={handleAdvice}>
          <img src={Dice} alt="" />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App
