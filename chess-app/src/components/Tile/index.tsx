import './styles.css'

// interface Props {
//    number: Number,

// }

export default function index(props: any) {
   const { number, xIndex, yIndex, image, text } = props

   let tileColor = (xIndex + yIndex + 2) % 2 === 0 ? 'black-tile' : 'white-tile'

   return (
      <div className={`tile ${tileColor}`}>
         <img className="chess-piece-image" src={image} />
         {/* <p>{text}</p> */}
      </div>
   )
}
