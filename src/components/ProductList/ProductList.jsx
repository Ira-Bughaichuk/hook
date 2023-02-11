
import React from 'react'

export const ProductList = ({items, onClick}) => {
  return (
      <ul>
          {items.map((item) => {
              const { name, price, id } = item
              return <li key={id} onClick={()=>onClick(id)} >
                  <p>{name}: ${price}</p>
                  
              </li>
          })}
    </ul>
  )
}

