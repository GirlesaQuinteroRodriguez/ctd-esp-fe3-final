import React from 'react'
import { useContext } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { ContextGlobal } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const { id } = useParams()
  const navigate = useNavigate()
  const { dentistas } = useContext(ContextGlobal)

  const getDentista = () => {
    return dentistas.find(dentista => dentista.id === parseInt(id))
  }

  const dentistaId = getDentista()

  if (!dentistaId) {
    return <Navigate to="/home" />
  }
  const goBack = () => {
    navigate(-1)
  }
  return (
    <>
      <h1>Detail Dentist id </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <div>
        <ul>
          <li>{dentistaId.name}</li>
          <li>{dentistaId.email}</li>
          <li>{dentistaId.telefono}</li>
          <li>{dentistaId.website}</li>
        </ul>
      </div>
      <button onClick={goBack}>Regresar</button>
    </>
  )
}

export default Detail