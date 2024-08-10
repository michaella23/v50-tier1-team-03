import { useState } from 'react'
import { useParams } from "react-router-dom"

import Header from "./components/Header.jsx"
import FeaturedItem from "./components/FeaturedItem.jsx"
import menu from "../menu.json"
import Footer from "./components/Footer.jsx"
import Section from "./components/Section"
import MenuNav from "./components/MenuNav.jsx"
import Modifications from './components/menuComponents/Modifications.jsx'
import Options from './components/menuComponents/Options.jsx'
import AmountAddToCart from './components/menuComponents/AmountAddToCart.jsx'
// import { Link } from "react-router-dom"

function App() {

  const [ modalShowing, setModalShowing ] = useState(false)
  const [item, setItem] = useState({
    modifications:[], 
    addOns:[],
    amount: 0,
})
// const param = useParams()

// function isItem(item){
//     return item.url === param.itemId
// }

  // const menuItem = menu.meals.find(isItem) || menu.drinks.find(isItem)|| menu.desserts.find(isItem)

  let modal = ''

  const showModal = (id) => {
    setModalShowing(prevModalShowing => !prevModalShowing)
    // const menuItem = menu.meals.find((item) => item.id == id) || 
    //                   menu.drinks.find((item) => item.id == id)|| 
    //                   menu.desserts.find((item) => item.id == id)
    // console.log(menuItem.name)

    //   modal =
    //     <dialog style={{display}} className="modal-box">
    //       <h1>{menuItem.name}</h1> 
    //       <img src={menuItem.image} alt={menuItem.name} />
    //       <h2>{menuItem.name}</h2>
    //       <p>{menuItem.description}</p>

    //       <Modifications 
    //           modifications={menuItem.modifiers} 
    //           item={item}
    //           setItem={setItem}/>

    //       <Options 
    //           addOns={menuItem.addOns} 
    //           item={item}
    //           setItem={setItem}/>

    //       <AmountAddToCart />
    //     </dialog>
    // console.log(modal)
  }

  const display = modalShowing ? "block" : "none"

  const meals = menu.meals.slice(-6)
  const sides = menu.meals.slice(33,40)
  const drinks = menu.drinks.slice(-6,-1)
  const desserts = menu.desserts.slice(0,6)

  function renderMenuItems(type) {
    const menuItem = type.map((item) => {
      return (
        // <Link key={item.id} to={`/menu/${item.url}`}>
          <div className="flex menu-item-card" key={item.id}>
            <div className="img-container">
              <img src={item.image} alt={item.name} className="menu-img" />
            </div>
            <div className="item-info">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p>{item.price}</p>
            </div>
            <button onClick={() => showModal()}>click me</button>
            <div style={{display}}>{item.modifiers}</div>
            <div style={{display}}>{item.addOns}</div>
            <div style={{display}}>
            <button className="quantity-btn">
               {/* onClick={handleAmountDecrease} */}
                {/* <div> */}
                    -
                {/* </div>  */}
            </button>
            <span className="item-amount">{item.amount}</span>
            <button className="quantity-btn">
            {/* onClick={handleAmountIncrease} */}
                {/* <div> */}
                      +
                {/* </div> */}
            </button>
            <button className="add-to-cart-btn">Add to Cart | ${item.price*item.amount}</button>
        </div>
          {/* <Modifications 
              modifications={menuItem.modifiers} 
              item={item}
              setItem={setItem}/>

          <Options 
              addOns={menuItem.addOns} 
              item={item}
              setItem={setItem}/> */}

          {/* <AmountAddToCart/> */}
          </div>
        // </Link>
      )
    })
    return menuItem
  }

  const bbqItems = renderMenuItems(meals)
  const sideItems = renderMenuItems(sides)
  const drinkItems = renderMenuItems(drinks)
  const dessertItems = renderMenuItems(desserts)

  return (
    <>
      <Header />
      <FeaturedItem />
      <MenuNav/>
      <main>
        {modalShowing && modal}
        <Section 
          className="meals-section"
          id="bbq-meals" 
          heading="BBQ Meals"
          content={bbqItems}
        />
        <Section 
          className="sides-section" 
          id="sides"
          heading="Sides"
          content={sideItems}
        />
        <Section 
          className="drinks-section" 
          id="drinks"
          heading="Drinks"
          content={drinkItems}
        />
        <Section 
          className="desserts-section" 
          id="desserts"
          heading="Desserts"
          content={dessertItems}
        />
      </main>
      <Footer />
    </>
  )
}

export default App
