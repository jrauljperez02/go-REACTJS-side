import React, {useContext} from 'react'
import '../../../styles/Grid-styles.scss'
import { DOMAIN } from '../../../utils/domain'
import AuthContext from '../../../context/AuthContext'
import useApi from '../../../hooks/useApi'


const PhotosSection = () => {

  const {authTokens} = useContext(AuthContext)

  const {data} = useApi({
    url : DOMAIN + '/api/post/posts/',
    access: authTokens.access,
    method: 'GET',
 })

 const photosToRender = data.filter(item => {
  return item.post_image !== null
 })

  return (
    <div className='photos-section'>
      {photosToRender && photosToRender.map(item => <img key = {item.id} alt= ''  src = {item.post_image}/>)}
    </div>
  )
}

export default PhotosSection