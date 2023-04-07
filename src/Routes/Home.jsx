import React from 'react'
import Card from '../Components/Card'
import { useContextGlobal } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const {dentistas} = useContextGlobal()
  console.log(dentistas)

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {
         dentistas.map(dentista => (
            <Card key={dentista.id} name={dentista.name} username={dentista.username} id={dentista.id} />
          ))
        }

      </div>
    </main>
  )
}

export default Home