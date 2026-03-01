import React from 'react'
import { useNavigate } from 'react-router-dom'

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-[#0a0a0a] flex items-center justify-center m-0 p-0 overflow-hidden">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6">
        
        <div className="flex justify-center md:justify-end order-2 md:order-1">
          <div className="w-full max-w-[440px] border-[12px] border-[#262421] rounded shadow-2xl shadow-black">
            <img 
              src="/chessboard.png" 
              alt="Chess Board" 
              className="w-full h-auto block transform hover:scale-[1.01] transition-transform" 
            />
          </div>
        </div>

        <div className="text-center md:text-left space-y-8 order-1 md:order-2">
          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white leading-[1.1]">
            PLAY CHESS <br />
            <span className="text-[#b38b59]">ONLINE</span>
          </h1>

          <div className="flex flex-col items-center md:items-start">
            <button 
              onClick={() => navigate('/game')}
              className="group flex items-center justify-center gap-4 bg-[#b38b59] hover:bg-[#8d6a41] text-white px-10 py-5 rounded-xl text-3xl font-bold transition-all shadow-[0_8px_0_rgb(84,61,35)] active:shadow-none active:translate-y-[8px] w-full md:w-auto"
            >
              <svg viewBox="0 0 24 24" className="w-10 h-10 fill-white/80 group-hover:fill-white" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2a4 4 0 0 0-4 4c0 1.34.66 2.53 1.67 3.25C8.04 10.32 7 12.04 7 14v1h10v-1c0-1.96-1.04-3.68-2.67-4.75A3.99 3.99 0 0 0 16 6a4 4 0 0 0-4-4zm-5 15v2h10v-2H7z"/>
              </svg>
              Play Online
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Landing