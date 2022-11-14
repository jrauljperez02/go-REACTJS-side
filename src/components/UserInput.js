import React, {useContext} from 'react'
import AuthContext from '../context/AuthContext'

const UserInput = () => {


  const {setInputNav} = useContext( AuthContext)

  return ( 
      <input 
        onChange={e => setInputNav(e.target.value)}
        name = 'text'
        placeholder={'Search users 🔍'}
        />
  )
}

export default UserInput