import React, {useContext} from 'react'
import InputContext from '../context/InputContext'

const UserInput = () => {

  const {setInputNav} = useContext(InputContext)

  return ( 
      <input 
        onChange={e => setInputNav(e.target.value)}
        name = 'text'
        placeholder={'Search users 🔍'}
        />
  )
}

export default UserInput