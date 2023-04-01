import React from 'react'
import './list.css'
export const ListBestseller = (props) => {
  return (
    <div>
        <div className="card" >
        <img src={props.image} alt="" className='imglist' />
        <span>{props.title} : {props.dongia}</span>
        
        <a href="#" className="btn btn-primary">Add to card</a>
        </div>
      </div>
     
  )
}
export default ListBestseller;