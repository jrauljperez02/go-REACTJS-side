import React from 'react'


const VideosSection = () => {

  const urlVideos = [
    'https://player.vimeo.com/external/430014215.sd.mp4?s=2c2fedb46aa038dcc4664ad42ef6a0e002bf312a&profile_id=165&oauth2_token_id=57447761',
    'https://player.vimeo.com/external/420239207.sd.mp4?s=2b5a6633c37af1a6fb0beb02c06bdc376fdfcce2&profile_id=165&oauth2_token_id=57447761',
    'https://player.vimeo.com/external/420234573.sd.mp4?s=1ee7e9aafcd3fdd3b3675b35f2a8b2f97f342ac8&profile_id=165&oauth2_token_id=57447761',
    'https://player.vimeo.com/external/484732151.sd.mp4?s=920e951e2eb3ff30c108209d9bf1f4a95c80918f&profile_id=165&oauth2_token_id=57447761',
    'https://player.vimeo.com/external/353226442.sd.mp4?s=ed709010e22497aeffa2977fa3fa32b7573ebcc0&profile_id=165&oauth2_token_id=57447761',
    'https://player.vimeo.com/external/398518760.hd.mp4?s=d27e3d698f8dc07ece5fc0e1eb7b8c2404353dac&profile_id=174&oauth2_token_id=57447761',
    'https://player.vimeo.com/external/402571180.sd.mp4?s=ce6aef8e9259c29cde79e3db0caf87c0ac213d86&profile_id=165&oauth2_token_id=57447761',
    'https://player.vimeo.com/external/403270649.hd.mp4?s=b85f22f7ffd137bd50331c1881c0d82631f1f0e7&profile_id=174&oauth2_token_id=57447761',
  ]

  return (
    <div className='videos-section'>
      {urlVideos.map(video => (
        <video key = {video} autoPlay muted controls>
          <source src = {video} />
        </video>
      ))}
    </div>
  )
}

export default VideosSection