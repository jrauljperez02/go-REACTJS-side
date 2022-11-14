import React from 'react'
import { AuthProvider } from './AuthContext'
import { UserProvider } from './UserContext';
import { InputProvider } from './InputContext';
import { PostProvider } from './PostContext';

const IndexContext = ({children}) => {
  return (
    <AuthProvider>
      <UserProvider>
        <InputProvider>
          <PostProvider>
            {children}
          </PostProvider>
        </InputProvider>
      </UserProvider>
    </AuthProvider>
  )
}

export default IndexContext