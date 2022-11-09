import React from 'react'
import '../../../styles/about-page.scss'

const AboutSection = () => {

  const friends = [
    {
      url:  'https://m.media-amazon.com/images/M/MV5BMTkwNjMwMDAzN15BMl5BanBnXkFtZTgwOTU3NjMwMTE@._V1_.jpg',
      name: 'Richard Hendrics',
    },
    {
      url: 'https://www.themoviedb.org/t/p/w235_and_h235_face/rRrVvBxOkyYM5XdLXimShHR1Itn.jpg',
      name: 'Erlic Bachman',
    },
    {
      url:  'https://media.npr.org/assets/img/2020/02/20/zachwoods_hbo_bullseye2020_custom-539527210f27f2329bc46b37bbffc3742de8e1f7.jpeg',
      name: 'Jared Something'
    },
    {
      url: 'https://www.themoviedb.org/t/p/w500/gNyCdend3C5gY3ucq42Zt3swfg2.jpg',
      name: 'Gilfoide Hendrics',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/AmandaCrewCropped.jpg/640px-AmandaCrewCropped.jpg',
      name: 'Jessica Hendrics',
    },
    {
      url: 'https://www.jimmycomedy.com/wp-content/uploads/jimmy-new-pic-1-online-866x1024.jpg',
      name: 'Jian Jang',
    },
    {
      url: 'https://media-cldnry.s-nbcnews.com/image/upload/newscms/2021_40/1785788/kumail-nanjiani-te-inline-211008.jpg',
      name: 'Kumail Nanjiani'
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy4lxR3QWtWv3f_Ae5xetMl3ljfq19v3i6Ej2S3xnm6X4YgGhDWtI2BSmRXxuImP0NUVk&usqp=CAU',
      name: 'Josh Brener'
    },
    {
      url: 'https://variety.com/wp-content/uploads/2013/12/christopher-evan-welch.jpg',
      name: 'Christopher Evan Welch',
    }
  ]

  return (
    <div className='container about'>
      <div className='left'>
        <div className='friends-section'>
          <div className='friends-container-text'>
            <h4>Friends</h4>
            <p>See all friends</p>
          </div>

          <div className='friends-container-images'>
            {friends.map(friend => (
              <div  key = {friend.url}t>
                <img src= {friend.url} alt = '' />
                <p>{friend.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      
      <div className='right'>
        <h4>About</h4>
      </div>
    </div>
  )
}

export default AboutSection