import React, { useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Tour = ({id, name, info, image, price, removeTour }) => {

    const [ readMore, setReadMore ] = useState(false)

    return (
        <article className='single-tour'>
            <LazyLoadImage
                effect='blur' 
                src={image}
                alt={name}
            />
            <footer>
                <div className="tour-info">
                    <h4>{name}</h4>
                    <h4 className='tour-price'>$ {price}</h4>
                </div>
                <p>
                    { readMore 
                        ?
                        info
                        : `${info.substring(0, 150)}...`
                    }
                    <button onClick={()=> setReadMore(!readMore)}>
                        { readMore
                            ? 'SHOW LESS'
                            : 'READ MORE...'
                        }
                    </button>
                </p>
                <button className='delete-btn' onClick={()=> removeTour(id)}>Remove Tour</button>
            </footer>
        </article>
    )
}

export default Tour
