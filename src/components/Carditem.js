import React from 'react'
import { Link } from 'react-router-dom'

function Carditem(props) {
    return (
        <>
            <div className = "cards__item">
               
                 
                    <div className='cards__item__info'>
                        <h5 className='cards__item__text'>{props.text}</h5>
                    </div>
                    <div className='cards_extra_info'>
                        <p className = "cards__para">{props.para}</p>
                    </div>
              
            </div>
        </>
    )
}

export default Carditem
