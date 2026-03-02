import React from 'react'

function Button({onClick}:{onClick:() => void}) {
   
  return (
    <button 
              onClick={onClick}
              className="group flex items-center justify-center gap-4 bg-[#b38b59] hover:bg-[#8d6a41] text-white px-10 py-5 rounded-xl text-3xl font-bold transition-all shadow-[0_8px_0_rgb(84,61,35)] active:shadow-none active:translate-y-[8px] w-full md:w-auto"
            >
              <svg viewBox="0 0 24 24" className="w-10 h-10 fill-white/80 group-hover:fill-white" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2a4 4 0 0 0-4 4c0 1.34.66 2.53 1.67 3.25C8.04 10.32 7 12.04 7 14v1h10v-1c0-1.96-1.04-3.68-2.67-4.75A3.99 3.99 0 0 0 16 6a4 4 0 0 0-4-4zm-5 15v2h10v-2H7z"/>
              </svg>
              Play Online
            </button>
  )
}

export default Button