import React from 'react'
import Tour from './Tour'


const Tours = ({tours, removeTour}) => {
    return (
        
        <div>
            <section>
                <div className="title">
                    <h2>Available Tours</h2>
                    <div className="underline"></div>
                </div>
                {
                    tours.map((tour) => (
                        <Tour key={tour.id} {...tour} removeTour={removeTour}/>
                    ))
                }
            </section>
        </div>
    )
}

export default Tours
