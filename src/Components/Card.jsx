import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import doc from "../images/doctor.jpg";
import { useContextGlobal } from "./utils/global.context";


const Card = ({ name, username, id }) => {
  const [favorite, setFavorite] = useState(false)
  const {favDispatch} = useContextGlobal()
  const {dentistas} = useContextGlobal()
  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage

    favDispatch({type: 'ADD_FAV', payload:dentistas})

}

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
