import { Chess } from "chess.js";
import type WebSocket from "ws";
import { GAME_OVER, MOVE } from "./messages.js";

export class Game{
    public player1:WebSocket;
    public player2:WebSocket;
    public board:Chess;
    private moves:string[];
    private startTime:Date;
    constructor(player1:WebSocket,player2:WebSocket){
        this.player1=player1;
        this.player2=player2;
        this.board=new Chess();
        this.moves=[];
        this.startTime=new Date();
    }
    makeMove(socket:WebSocket,move:{
        from:string;
        to:string;
    }){
        // validation
        if(this.board.moves.length%2===0 && socket!==this.player1){
            return;
        }
        if(this.board.moves.length%2===1 && socket!==this.player2){
            return;
        }
        try {
            this.board.move(move);
        } catch (e) {
            return
        }
        
        // check if game is over
        if(this.board.isGameOver()){
            this.player1.emit(JSON.stringify({
                type:GAME_OVER,
                payload:{
                    winner:this.board.turn()==='w'?"black":"White"
                }
            }))
            return;
        }
        if(this.board.moves.length%2===0){
            this.player2.emit(JSON.stringify({
                type:MOVE,
                payload:MOVE
            }))
        }else{
            this.player1.emit(JSON.stringify({
                type:MOVE,
                payload:MOVE
            }))
        }
        // send the updated board to both players
        
    }
}