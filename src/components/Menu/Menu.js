import React from 'react'
import MenuItem from './MenuItem'
import {BsFillChatFill} from 'react-icons/bs'
import {RiGalleryFill} from 'react-icons/ri'
import {AiOutlineUsergroupDelete} from 'react-icons/ai'
import {GiOctopus} from 'react-icons/gi'

const Menu = () => {

    const options = [
        {
            icon: <BsFillChatFill/>,
            label: 'Mensajes',
            id: 0
        },
        {
            icon: <RiGalleryFill/>,
            label: 'Galeria',
            id: 1,
        },
        {   
            icon: <AiOutlineUsergroupDelete/>,
            id: 2,
            label: 'Grupos'
        },
        {
            icon: <GiOctopus/>,
            id: 3,
            label: 'Tendencias'
        }
    ]

  return (
    <div className='menu'>
        {options.map(option => <MenuItem key = {option.id} data = {option} />)}
    </div>
  )
}

export default Menu