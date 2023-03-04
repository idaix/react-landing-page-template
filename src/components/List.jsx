import React from 'react'

const List = ({ title, items }) => {
  return (
    <div className='text-sm'>
        <h6 className="text-gray-200 font-medium mb-1">{title}</h6>
        <ul>
            {items?.map((item, i)=>(
                <li key={i} className='cursor-pointer mb-1 text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out'>{item}</li>
            ))}
        </ul>
    </div>
  )
}

export default List