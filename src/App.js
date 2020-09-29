import React from "react";
import "./style.css";
import "./css/tailwind.css"
import Bank from './pages/bank'

export default function App() {
  const[index, setIndex] = React.useState(0)
  const page = (v)=>{
      switch(v){
        case 0:
          return <Main navigate={(e)=>setIndex(e)}/>;
          case 1:
            return <Bank/>;
        default:
          return <Main navigate={setIndex}/>;  
      }
  }
  return (
    <div className="w-screen h-screen">
     {page(index)}
    </div>
  );
}

const allSites  = ["Bank Page","Facebook", "Twitter", "Apple"]

function Main(props){
  return (
    <div className="w-screen h-screen flex flex-col">
      <header className="w-full h-64 bg-black flex flex-col justify-center items-center">
          <h1 className="text-2xl lg:text-4xl font-bold text-white">All sites built with tailwind</h1>
          <small className="text-sm text-white">By Augustus Otu</small>
      </header>
      <main className="w-full grid grid-cols-2 lg:grid-cols-4 gap-4 p-6">
            {allSites.map((x,i)=>(<Card key={i} click={()=>props.navigate(allSites.indexOf(x)+1)} site={x}/>))}
      </main>
    </div>
  )
}


function Card(props){
  return (
    <div onClick={()=>props.click()} className=" cursor-pointer w-full rounded-lg  h-16 flex flex-row justify-center items-center bg-black">
        <h2 className="font-bold text-white text-lg">{props.site}</h2>
    </div>
  )
}
