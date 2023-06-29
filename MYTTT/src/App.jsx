import React from 'react'
import Game from "./components/game"
import Square from "./components/square"
import './App.css'

function App() {
  const[cells, setCells] = React.useState(Array(9).fill(null))
 
 function handleClick(i){
  const gridCells =cells.slice()
  gridCells[i] ="X"
  setCells(gridCells)
 }
  return (
    <>
      <Game/>
      <div>
        <Square symbol={cells[0]} 
         cellClicked={()=>handleClick(0)} />
        <Square symbol={cells[1]} 
         cellClicked={()=>handleClick(1)} />
        <Square symbol={cells[2]} 
         cellClicked={()=>handleClick(2)} />
      </div>
      <div>
        <Square symbol={cells[3]} 
         cellClicked={()=>handleClick(3)} />
        <Square symbol={cells[4]} 
         cellClicked={()=>handleClick(4)} />
        <Square symbol={cells[5]} 
         cellClicked={()=>handleClick(5)} />
      </div>
      <div>
        <Square symbol={cells[6]} 
         cellClicked={()=>handleClick(6)} />
        <Square symbol={cells[7]} 
         cellClicked={()=>handleClick(7)} />
        <Square symbol={cells[8]} 
         cellClicked={()=>handleClick(8)} />
      </div>
     
    </>    
  )
}

export default App
