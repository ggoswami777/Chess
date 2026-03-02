import {type PieceSymbol, type Square, type Color } from 'chess.js';
import { useState } from 'react';
import { MOVE } from '../screens/Game';

export const ChessBoard = ({board,socket}:{
    board:({square:Square;type:PieceSymbol,color:Color,} | null)[][]  
    socket:WebSocket;

}) => {
  const [from,setFrom]=useState<Square | null>(null);
  const [to,setTo]=useState<Square | null>(null);
  return (
    <div className="border-[8px] border-[#262421] rounded-sm shadow-2xl">
        {board.map((row, i) => {
            return <div key={i} className='flex'>
                {row.map((square, j) => {
                    const isDark = (i + j) % 2 !== 0;                
                    return <div 
                        key={j} 
                        onClick={()=>{
                          if(!from){
                            setFrom(square?.square ?? null);
                          }else{
                            setTo(square?.square ?? null);
                            socket.send(JSON.stringify({
                              type:MOVE,
                              payload:{
                                from,
                                to
                              }
                            }))
                            console.log(from,
                                to)
                          }
                        }}
                        className={`w-16 h-16 flex items-center justify-center text-3xl font-bold 
                            ${isDark ? 'bg-[#b58863]' : 'bg-[#f0d9b5]'}`}
                    >
                        <span className={square?.color === 'b' ? 'text-[#1a1a1a]' : 'text-white drop-shadow-md'}>
                            {square?.type}
                        </span>
                    </div>
                })}
            </div>
        })}
    </div>
  )
}