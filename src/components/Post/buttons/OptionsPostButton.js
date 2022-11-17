import { useContext } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import AuthContext from '../../../context/AuthContext';

import { DOMAIN } from '../../../utils/domain';

import {BsTrashFill} from 'react-icons/bs'

const OptionsPostButton = (props) => {

    const {postId} = props;

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
                <Dropdown.Item 
                  eventKey="2"
                  style={{display: 'flex', alignItems: 'center', gap: 5}}
                  onClick={() => {deletePost(postId)}}
                  ><BsTrashFill/>Eliminar</Dropdown.Item>
                
              </DropdownButton>
            ),
          )}
        </>
      );
}

export default OptionsPostButton