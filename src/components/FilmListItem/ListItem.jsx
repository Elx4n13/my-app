import "./ListItem.scss"
import React from 'react'

const ListItem = (props) => {

  return (
    <>
    <div className="movie">
      <div className="cardPoster">
        <img src="https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg" alt="" />
      </div>
      <div className="cardInfo">
        <div className="cardTitle">
        Harry Potter and the Deathly Hallows: Part 2
        </div>
        <div className="cardButton">
          <button>Add favourite</button>
        </div>
      </div>
    </div>
     <div className="movie">
     <div className="cardPoster">
       <img src="https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg" alt="" />
     </div>
     <div className="cardInfo">
       <div className="cardTitle">
       Harry Potter and the Deathly Hallows: Part 2
       </div>
       <div className="cardButton">
         <button>Add favourite</button>
       </div>
     </div>
   </div>
   </>
  )
}

export default ListItem