import { useEffect, useState } from 'react'
import './App.css'

function App() {

  let [meanings, setMeanings] = useState([])
  let [userInput, setUserInput] = useState("")
  const fetchData = () => {
    fetch(`https://freedictionaryapi.com/api/v1/entries/en/${userInput}`)
      .then(res => {
        return res.json()
      })
      .then(data => {
        console.log(data.entries)
        setMeanings(data.entries)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <h1>Dictonary-App</h1>
      <h1>Searching Word : {userInput}</h1>
      <input onChange={(e)=>setUserInput(e.target.value)} />
      <button onClick={()=>fetchData()}>Search</button>

      <div>
        <ul>
          {
            meanings[0]?.senses.map((word)=>{
              return(
                <li>{word.definition}</li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default App