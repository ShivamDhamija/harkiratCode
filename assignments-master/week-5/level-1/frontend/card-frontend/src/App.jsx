import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";
import Form from "./components/Form";
import CardForm from "./components/CreateCard";
function App() {
  const [cards, setCards] = useState([]);
  const [card, setCard] = useState(true);
  const [form, setForm] = useState(true);
  const changeCard = () => {
    setCard(!card);
  };
  const changeForm = () => {
    setForm(!form);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      // Simulating fetch data
      const response = await fetch("http://localhost:3000/getCards");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const jsonData = await response.json();
      setCards(jsonData.cards);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  return (
    <div>
      <div className="button-container">
        {form && <Form className="btn" changeCard={changeCard} />}
        {card && <CardForm className="btn" changeForm={changeForm} />}
      </div>
      <div className="container">
        {cards.map((card) => (
          <Card className="box" key={card._id} card={card} />
        ))}
      </div>
    </div>
  );
}

export default App;
