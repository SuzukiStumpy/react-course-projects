import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';

const pizzaData = [
    {
        name: "Focaccia",
        ingredients: "Bread with italian olive oil and rosemary",
        price: 6,
        photoName: "pizzas/focaccia.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Margherita",
        ingredients: "Tomato and mozarella",
        price: 10,
        photoName: "pizzas/margherita.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Spinaci",
        ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
        price: 12,
        photoName: "pizzas/spinaci.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Funghi",
        ingredients: "Tomato, mozarella, mushrooms, and onion",
        price: 12,
        photoName: "pizzas/funghi.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Salamino",
        ingredients: "Tomato, mozarella, and pepperoni",
        price: 15,
        photoName: "pizzas/salamino.jpg",
        soldOut: true,
    },
    {
        name: "Pizza Prosciutto",
        ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
        price: 18,
        photoName: "pizzas/prosciutto.jpg",
        soldOut: false,
    },
];


function App() {
    return (
        <div className="container">
            <Header />
            <Menu />
            <Footer />
        </div>
    );
}

// Header component
function Header() {
    return (
        <header className="header">
            <h1>Fast React Pizza Co.</h1>
        </header>
    );
}


// Menu commponent
function Menu() {
    // const pizzaData = [];
    return (
        <main className="menu">
            <h2>Our menu</h2>

            {
                pizzaData.length > 0 ?
                    <>
                        <p>
                            Authentic Italian cusine. {pizzaData.length} creative dishes to choose from.
                            All from our stone oven, all organic, all delicious.
                        </p>
                        <ul className="pizzas">
                            {pizzaData.map((pizza) => (
                                <Pizza pizzaObj={pizza} key={pizza.name} />
                            ))}
                        </ul>
                    </>
                    :
                    <p>Sorry, but we're still working on our menu!</p>
            }
        </main>
    )
}

// Pizza component
function Pizza({ pizzaObj, key }) {
    return (
        <li className={`pizza ${pizzaObj.soldOut ? 'sold-out' : ''}`}>
            <img src={pizzaObj.photoName} alt={pizzaObj.name} />
            <div>
                <h3>{pizzaObj.name}</h3>
                <p>{pizzaObj.ingredients}</p>
                <span>{pizzaObj.soldOut ? 'SOLD OUT' : pizzaObj.price}</span>
            </div>
        </li>
    )
}

// Footer component
function Footer() {
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 24;
    const isOpen = (hour >= openHour && hour < closeHour);

    return (
        <footer className="footer">
            {isOpen ?
                <Order openHour={openHour} closeHour={closeHour} />
                :
                <p>Sorry, but we're closed until {openHour}:00</p>
            }
        </footer>
    );
}


function Order({ openHour, closeHour }) {
    return (
        <div className="order">
            <p>We're open from {openHour}:00 to {closeHour}:00, and happy to take your order.</p>
            <button className="btn">Order</button>
        </div>
    );
}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);