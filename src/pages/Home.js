import React, {useContext} from 'react'
import Layout from '../components/Layout/Layout'
import '../styles/Home.scss'
import Posts from '../components/Post/Posts'
import PostContext from '../context/PostContext'
import Following from '../components/Following/Following'

const Home = () => {

  const {allPosts} = useContext(PostContext)

  return (
    <Layout>
        <div className='grid'>
          <div className='grid-left'>
            
          </div>
          <div className='grid-mid'>
            <Posts data = {allPosts}/>
          </div>
          <div className=''>
            <Following/>
          </div>
        </div>
    </Layout>
  )
}

export default Home