import React from 'react'
import '../styles/Loading.scss'

const Loading = () => {
  return (
    <div className="lds-ellipsis" >
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

export default Loading