import React from 'react'

const MenuItem = (props) => {

  const {icon, label} = props.data;

  return (
    <div className='menu-item'>
      {icon} {label}
    </div>
  )
}

export default MenuItem