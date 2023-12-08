import React, { useEffect, useState } from "react";
import {v4 as uuid} from "uuid";
import PlayingCard from "./PlayingCard";
import "./PlayingCardList.css";
import { useAxios } from "./hooks";

/* Renders a list of playing cards.
 * Can also add a new card at random. */
function CardTable() {
  const [cards, setCards] = useState([]);
  const [data, setData] = useAxios("https://deckofcardsapi.com/api/deck/new/draw/");
  useEffect(()=>{
    setCards(cards=>Object.keys(data).length!==0?[...cards, {...data, id:uuid()}]:cards);
  },[data]);
  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={evt=>setData()}>Add a playing card!</button>
      </div>
      <div className="PlayingCardList-card-area">
        {cards.map(cardData => (
          <PlayingCard key={cardData.id} front={cardData.cards[0].image} />
        ))}
      </div>
    </div>
  );
}

CardTable.defaultProps = {};

export default CardTable;
