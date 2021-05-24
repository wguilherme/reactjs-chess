import React from 'react'
import './styles.css'

const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"]
const verticalAxis = [1, 2, 3, 4, 5, 6, 7, 8]

export default function index() {

   let board: any = []

   verticalAxis?.reverse().map((vAxis, vIndex) => {
      horizontalAxis?.map((xAxis, xIndex) => {

         let tileColor = (xIndex + vIndex + 2) % 2 === 0 ? 'black-tile' : 'white-tile'


         board.push(<div className={`tile ${tileColor}`}> [{xAxis}{vAxis}]</div>)

      })
   })


   return (
      <div id="chessboard">
         {board}
      </div>
   )
}
