import React from 'react'
import '../style/main.css'
import { NavLink } from 'react-router-dom'



const Main = () => {
  return (
    <div>
          <div className='container'>
          <NavLink to='products'>
      <button
     
      type="button"  className="btn btn-secondary btn-lg btn-block ">
    
        Product Page
    
        </button>
        </NavLink>
        <NavLink to='/stockin'>
       <button
  
        type="button" className="btn btn-secondary btn-lg btn-block">
       
            Stock In Page
          
            </button>
            </NavLink>
            <NavLink to='/stockout'>
       <button
      
     
        type="button" className="btn btn-secondary btn-lg btn-block">
             
            Stock Out Page
           
            </button>
            </NavLink>
       </div>
      
    </div>
  )
}

export default Main
