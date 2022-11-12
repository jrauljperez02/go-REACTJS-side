import React from 'react'
import PostHeader from './PostHeader'
import ReactionIcons from './ReactionIcons'
import CommentBar from './CommentBar'

const Post = (props) => {

   const {post} = props;
   console.log(post)


   const textWithQuotes = (description) => (
      <div className="timeline-content">
         <p className="lead">
            <i className="fa fa-quote-left fa-fw pull-left"></i>
            {description}
            <i className="fa fa-quote-right fa-fw pull-right"></i>
         </p>
      </div>
   )

   const textWithoutQuotes = (description) => (
      <div className="timeline-content">
          <p>
            {description}
          </p>
       </div>
   )


  return (
    <li>
      <div className="timeline-time">
         <span className="date">{post.publish_date}</span>
         <span className="time">04:20</span>
      </div>

      <div className="timeline-icon">
         <a href="javascript">&nbsp;</a>
      </div>

      <div className="timeline-body">
         <PostHeader/>
         {post.post_image.length === 0 ? textWithQuotes(post.description): textWithoutQuotes(post.description)}
         <img alt='' src={post.post_image} style = {{marginBottom: 20, borderRadius: 10}} />
         <div className="timeline-likes">
            <div className="stats-right">
               <span className="stats-text">259 Shares</span>
               <span className="stats-text">21 Comments</span>
            </div>
            <div className="stats">
               <span className="fa-stack fa-fw stats-icon">
               <i className="fa fa-circle fa-stack-2x text-danger"></i>
               <i className="fa fa-heart fa-stack-1x fa-inverse t-plus-1"></i>
               </span>
               <span className="fa-stack fa-fw stats-icon">
               <i className="fa fa-circle fa-stack-2x text-primary"></i>
               <i className="fa fa-thumbs-up fa-stack-1x fa-inverse"></i>
               </span>
               <span className="stats-total">4.3k</span>
            </div>
         </div>
         <ReactionIcons/>
         <CommentBar/>
      </div>
   </li>
  )
}

export default Post