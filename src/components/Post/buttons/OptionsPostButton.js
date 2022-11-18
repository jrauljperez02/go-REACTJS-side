import { useContext } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import AuthContext from '../../../context/AuthContext';

import { DOMAIN } from '../../../utils/domain';

import {BsTrashFill} from 'react-icons/bs'
import {BiHide} from 'react-icons/bi'

import UserContext from '../../../context/UserContext';

const OptionsPostButton = (props) => {

    const {postId, userId} = props;
    const {me} = useContext(UserContext)


    const {authTokens} = useContext(AuthContext)

    const deletePost = async(postId) => {
      if(window.confirm(`Estas seguro de borrar esta publicacion?`)){
          const response = await fetch(`${DOMAIN}/api/post/posts/${postId}/`,{
              method: 'DELETE',
              headers: {
                  Accept: 'application/json',
                  'Authorization' : `Bearer ${authTokens.access}`,
              }
          })
          if(response.status === 204){
              alert("Publicacion borrada exitosamente!")
          }
      }
    }


    const deletePostButton = (
      <Dropdown.Item 
        eventKey="2"
        style={{display: 'flex', alignItems: 'center', gap: 5}}
        onClick={() => {deletePost(postId)}}
        ><BsTrashFill/>Eliminar</Dropdown.Item>
    )


    const hidePostButton = (
      <Dropdown.Item 
        eventKey="2"
        style={{display: 'flex', alignItems: 'center', gap: 5}}
        onClick={() => {deletePost(postId)}}
        ><BiHide/>Ocultar publicacion</Dropdown.Item>
    )
    

    return (
        <>
        
          {[''].map(
            (variant) => (
              <DropdownButton
                as={ButtonGroup}
                key={variant}
                id={`dropdown-variants-${variant}`}
                variant={variant.toLowerCase()}
                title={variant}
              >

                {me.id === userId ? deletePostButton: hidePostButton}
                
                
              </DropdownButton>
            ),
          )}
        </>
      );
}

export default OptionsPostButton