import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import doc from "../images/doctor.jpg";

const Card = ({ name, username, id }) => {

  const [favorite, setFavorite] = useState(false)
  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    const favCardsParsed = JSON.parse(localStorage.getItem('favorites'));
    if (favCardsParsed) {
      const cardsFound = favCardsParsed.find(card => card.id === id)
      let newFav = []
      if (cardsFound) {
        newFav = favCardsParsed.filter(card => card.id !== id)
      } else {
        newFav = [...favCardsParsed, { name, username, id }]
      }
      localStorage.setItem('favorites', JSON.stringify(newFav))
    } else {
      localStorage.setItem('favorites', JSON.stringify([{ name, username, id }]))
    }
    cardFav()
  }

  const cardFav = useCallback(() => {
    const favCards = JSON.parse(localStorage.getItem('favorites'));
    if (favCards) {
      const fav = favCards.find(card => card.id === id)
      setFavorite(!!fav)
    }
  }, [id])

  useEffect(() => {
    cardFav()
  }, [cardFav])

   return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        <Link to={`/dentista/${id}`}>
        <img src={doc} alt="dentista" />
        <h4>
          {username}
        </h4>
        <p>{name}</p>
      </Link>

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
