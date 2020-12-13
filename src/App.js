import React, { useState, useEffect } from 'react'
import Tours from './components/Tours'
import { useFetch } from './utils/useFetch'
import Loading from './components/Loading'

const url = 'https://my-react-projects-fake-api.herokuapp.com/tours'

function App() {

  const { isLoading, products } = useFetch(url)
  const [ tours, setTours ] = useState([])

  useEffect(() => {
    setTours(products)
  },[products])

  const removeTour = (id) => {
    const selectedTour = tours.filter((tour) => tour.id !== id)
    setTours(selectedTour)
  }

  const handleReset = () => {
      setTours(products)
  }

  return (
    isLoading 
      ? 
        (
         <Loading />
        )
      : tours.length === 0 
      ? 
        (
          <main>
            <div className="title">
              <h2 className='no-tours'>All tours removed</h2>
              <button onClick={() => handleReset()}>RESET</button>
            </div>
          </main>
        )
      :  
      <main>
        <Tours tours={tours} removeTour={removeTour}/>
      </main>
  )
}

export default App;
