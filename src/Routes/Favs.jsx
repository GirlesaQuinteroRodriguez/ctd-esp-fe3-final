import React from "react";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const dentistasFavoritos = localStorage.getItem('favs')
  const dentistasFavoritosParsed = JSON.parse(dentistasFavoritos)
  const cards = dentistasFavoritosParsed ? dentistasFavoritosParsed : []

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {
          cards.map(card => (
           <Card key={card.id} name={card.name} username={card.username} id={card.id} showButtonFav={ false}/>
          ))
        }
      </div>
    </>
  );
};

export default Favs;
