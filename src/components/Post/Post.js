import React from 'react'
import PostHeader from './PostHeader'
import ReactionIcons from './ReactionIcons'
import CommentBar from './CommentBar'
import dateFormat from 'dateformat';

import PostSlider from './slider/PostSlider';

const Post = (props) => {

   const {post} = props;


   const textWithQuotes = (description) => (
      <div className="timeline-content">
         <p className="lead">
            <i className="fa fa-quote-left fa-fw pull-left"></i>
            {description}
            <i className="fa fa-quote-right fa-fw pull-right"></i>
         </p>
      </div>
   )

   const hour = post.publish_date.split('T')[1].split('.')[0].split(':')[0]
   const minute = post.publish_date.split('T')[1].split('.')[0].split(':')[1]

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
         <span className="date">{dateFormat(post.publish_date, "mmmm dS, yyyy")}</span>
         <span className="time">{hour}:{minute}</span>
      </div>

      <div className="timeline-icon">
         <a href="javascript">&nbsp;</a>
      </div>

      <div className="timeline-body">
         <PostHeader 
            user = {post.user}
            id = {post.id}
            />
         {post.description !== null ? textWithQuotes(post.description): textWithoutQuotes(post.description)}
         {post.post_image === null ? null:  <PostSlider data = {post.post_image}/>}
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