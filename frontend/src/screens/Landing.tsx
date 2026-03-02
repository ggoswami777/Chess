
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'
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
            <Button onClick={() => navigate('/game')}/>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Landing