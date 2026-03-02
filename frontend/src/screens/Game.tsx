import React, { useEffect, useState } from 'react'

import { useSocket } from '../hooks/useSocket';
import Button from '../components/Button';
import { Chess } from 'chess.js';
import { ChessBoard } from '../components/ChessBoard';

export const INIT_GAME="init_game";
export const MOVE="move";
export const GAME_OVER="game_over";
function Game() {
    const socket=useSocket();
    const [chess,setChess]=useState(new Chess());
    const [board,setBoard]=useState(chess.board());
  
    useEffect(() => {
      if (!socket) return;
      socket.onmessage=(event)=>{
        const message=JSON.parse(event.data);
       
        switch(message.type){
            case INIT_GAME:
                setChess(new Chess());
                setBoard(chess.board());
                console.log("Game initialized");
                break;
            case MOVE:
                const move=message.payload;
                chess.move(move);
                setBoard(chess.board());
                console.log("Move made");
                break;
            case GAME_OVER:
                console.log("Game over");
                break;
        }
      }
    
      
    }, [socket])
    if (!socket) return <div className="text-white bg-[#0a0a0a] min-h-screen flex items-center justify-center">Connecting to server...</div>
  return (
  <div className="flex justify-center bg-[#302e2b] min-h-screen">
    <div className="pt-8 max-w-screen-xl w-full px-4">
      <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
        
        <div className="md:col-span-4 flex justify-center items-start">
          <ChessBoard socket={socket} board={board} />
        </div>
        <div className="md:col-span-2 bg-[#262421] rounded-lg p-6 shadow-lg h-fit border border-white/5">
          <div className="flex flex-col gap-6">
            <h2 className="text-white text-2xl font-bold text-center border-b border-white/10 pb-4">
              Chess Room
            </h2>
            
            <div className="space-y-4">
              <Button 
                onClick={() => socket.send(JSON.stringify({ type: INIT_GAME }))}
               
             />   
              <p className="text-gray-400 text-sm text-center font-medium italic">
                Waiting for game to start...
              </p>
            </div>
            <div className="bg-[#1e1c1a] p-4 rounded-md space-y-2">
              <div className="flex justify-between text-gray-300 text-sm">
                <span>Game Mode</span>
                <span className="text-white font-bold">Standard</span>
              </div>
              <div className="flex justify-between text-gray-300 text-sm">
                <span>Server Status</span>
                <span className="text-green-500 font-bold">Online</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
)
}

export default Game