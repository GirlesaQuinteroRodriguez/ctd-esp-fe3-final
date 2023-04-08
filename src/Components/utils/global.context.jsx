import { useContext } from "react";
import { createContext, useEffect, useState, useReducer } from "react";

const themes = {
  dark: {
    theme: false,
    bgColor: 'gray',
    color: 'white'
  },
  light: {
    theme: true,
    bgColor: 'white',
    color: 'black'
  }
}

export const initialThemeState = themes.light
export const themeReducer = (state, action) => {

  switch (action.type) {
    case "SWITCH_DARK":
      return themes.dark
    case "SWITCH_LIGHT":
      return themes.light
    default:
      throw new Error();
  }
}
const initialFavState = JSON.parse(localStorage.getItem('favs'))||[];

const favReducer = (state, action) => {
  switch(action.type){
    case 'ADD_FAV' :
      return [...state, action.payload]
      default:
         throw new Error()
  }

}

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  const url = "https://jsonplaceholder.typicode.com/users"
  const [dentistas, setDentistas] = useState([])
  const [themeState, themeDispatch] = useReducer(themeReducer, initialThemeState);
  const [favState, favDispatch] = useReducer(favReducer, initialFavState )

  useEffect(() => {
    localStorage.setItem('favs', JSON.stringify(favState))
  }, [favState])
 
  useEffect(() => {
    try {
      const fetchData = async () => {
        let res = await fetch(url)
        let data = await res.json()
        setDentistas(data)
      }
      fetchData()
    } catch (err) {
      console.log(err)
    }
  }, [])

  return (
    <ContextGlobal.Provider value={{ themeState, themeDispatch, dentistas, favState, favDispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider
export const useContextGlobal = () => useContext(ContextGlobal)