// import { useState } from 'react'
import menu from "../menu.json"

function App() {
  const meals = menu.meals 
  const bbqItems = meals.map((item) => {
    if (item.category.includes("bbq")) {
      return (
        <img src={item.image} alt={item.name} className="menu-img" />
      )       
    }
  })

  return (
    <>
      {bbqItems}
    </>
  )
}

export default App