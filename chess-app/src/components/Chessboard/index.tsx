// import React from 'react'
import Tile from '../Tile'

import './styles.css'

const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"]
const verticalAxis = [1, 2, 3, 4, 5, 6, 7, 8].reverse()

interface Piece {
   image: string,
   x: number,
   y: number
}



const pieces: Piece[] = [];

verticalAxis.map(i => {
   pieces.push({ image: "/images/pawn_b.png", x: i - 1, y: 7 })
   pieces.push({ image: "/images/pawn_w.png", x: i - 1, y: 2 })
})
pieces.push({ image: "/images/rook_b.png", x: 0, y: 8 })
pieces.push({ image: "/images/rook_b.png", x: 7, y: 8 })
pieces.push({ image: "/images/knight_b.png", x: 6, y: 8 })
pieces.push({ image: "/images/knight_b.png", x: 1, y: 8 })
pieces.push({ image: "/images/bishop_b.png", x: 2, y: 8 })
pieces.push({ image: "/images/bishop_b.png", x: 5, y: 8 })
pieces.push({ image: "/images/queen_b.png", x: 3, y: 8 })
pieces.push({ image: "/images/king_b.png", x: 4, y: 8 })

pieces.push({ image: "/images/rook_w.png", x: 0, y: 1 })
pieces.push({ image: "/images/rook_w.png", x: 7, y: 1 })
pieces.push({ image: "/images/knight_w.png", x: 6, y: 1 })
pieces.push({ image: "/images/knight_w.png", x: 1, y: 1 })
pieces.push({ image: "/images/bishop_w.png", x: 2, y: 1 })
pieces.push({ image: "/images/bishop_w.png", x: 5, y: 1 })
pieces.push({ image: "/images/queen_w.png", x: 3, y: 1 })
pieces.push({ image: "/images/king_w.png", x: 4, y: 1 })


export default function index() {

   let board: any = []

   verticalAxis.map((yAxis, yIndex) => {
      horizontalAxis.map((xAxis, xIndex) => {

         let image = undefined
         // let tileColor = (xIndex + yIndex + 2) % 2 === 0 ? 'black-tile' : 'white-tile'

         pieces.map(piece => {
            if (piece.x === xIndex && piece.y === yAxis) {
               image = piece.image
            }
         })

         // board.push(<div className={`tile ${tileColor}`}> [{xAxis}{vAxis}]</div>)
         board.push(<Tile image={image} xIndex={xIndex} yIndex={yIndex} text={`${yAxis} ${xAxis}`} />)

      })
   })


   return (
      <div id="chessboard">
         {board}
      </div>
   )
}
