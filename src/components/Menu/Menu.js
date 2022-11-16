import React from 'react'
import MenuItem from './MenuItem'
import {BsFillChatFill} from 'react-icons/bs'
import {GrGallery} from 'react-icons/gr'
import {AiOutlineUsergroupDelete} from 'react-icons/ai'
import {GiOctopus} from 'react-icons/gi'

const Menu = () => {

    const options = [
        {
            icon: <BsFillChatFill/>,
            label: 'Messages',
            id: 0
        },
        {
            icon: <GrGallery/>,
            label: 'Gallery',
            id: 1,
        },
        {   
            icon: <AiOutlineUsergroupDelete/>,
            id: 2,
            label: 'Groups'
        },
        {
            icon: <GiOctopus/>,
            id: 3,
            label: 'Top'
        }
    ]

  return (
    <div className='menu'>
        {options.map(option => <MenuItem key = {option.id} data = {option} />)}
    </div>
  )
}

export default Menu