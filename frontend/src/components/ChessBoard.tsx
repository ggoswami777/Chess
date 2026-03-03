import { type PieceSymbol, type Square, type Color } from "chess.js";
import { useState } from "react";
import { MOVE } from "../screens/Game";

export const ChessBoard = ({
  chess,
  board,
  socket,
  setBoard,
}: {
  board: ({ square: Square; type: PieceSymbol; color: Color } | null)[][];
  socket: WebSocket;
  setBoard: any;
  chess: any;
}) => {
  const [from, setFrom] = useState<Square | null>(null);

  return (
    <div className="border-[8px] border-[#262421] rounded-sm shadow-2xl">
      {board.map((row, i) => {
        return (
          <div key={i} className="flex">
            {row.map((square, j) => {
              const squareRepresentation = (String.fromCharCode(97 + j) + (8 - i)) as Square;
              const isDark = (i + j) % 2 !== 0;

              return (
                <div
                  key={j}
                  onClick={() => {
                    if (!from) {
                      setFrom(squareRepresentation);
                    } else {
                      socket.send(
                        JSON.stringify({
                          type: MOVE,
                          payload: {
                            move: { from, to: squareRepresentation },
                          },
                        })
                      );
                      setFrom(null);
                      chess.move({ from, to: squareRepresentation });
                      setBoard(chess.board());
                    }
                  }}
                  className={`w-16 h-16 flex items-center justify-center cursor-pointer 
                            ${isDark ? "bg-[#b58863]" : "bg-[#f0d9b5]"}`}
                >
                  {square ? (
                    <img
                      src={`/${square.color}${square.type}.png`}
                      alt=""
                      className="w-12 h-12 object-contain"
                      onError={(e) => {
                       
                        console.error(`Failed to load: /${square.color}${square.type}.png`);
                      }}
                    />
                  ) : null}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};