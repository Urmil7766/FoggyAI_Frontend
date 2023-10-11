import React from 'react'

const Box = (props) => {
  return (
    <div className='box_data'>
        <div className='props_data1'>{props.data1}</div>
        <div className='props_data2'>{props.data2}</div>
    </div>
  )
}

export default Box