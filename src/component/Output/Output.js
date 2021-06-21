import React from 'react'

export default function Output({weather}) {
    return (
        <div>

            {weather?
          <>
          <div className='tempr'>
          <h3>name:{weather.name}</h3>
          <h3>temp:{weather.main.temp}</h3>
          <h3>country{weather.sys.country}</h3>
          <h3>wind speed:{weather.wind.speed}</h3>
          <h3>clouds{weather.clouds.all}</h3>
          </div>
          </>  
        
        
        
        
        
        : <h3>EMPTY.....</h3>
        }

     </div>
    )
}