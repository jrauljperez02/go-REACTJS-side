import React, {useContext} from 'react'
import UserContext from '../../../context/UserContext'
import '../../../styles/About-section.scss'

import default_profile_picture from '../../../images/default_profile_picture.jpg'
import { useNavigate } from 'react-router-dom'


const AboutSection = () => {

  const {allUsersAsArray} = useContext(UserContext)

  const navigate = useNavigate()
  
  return (

<div class="container bootdey">
<div class="row">
   <div class="col-md-4">

      <div class="panel widget">
         <div class="half-float">
            <img src="https://bootdey.com/img/Content/bg1.jpg" alt="" class="img-responsive"/>
            <div class="half-float-bottom">
               <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="" class="img-thumbnail img-circle thumb128"/>
            </div>
         </div>
         <div class="panel-body text-center">
            <h3 class="m0">Clark Kentman</h3>
            <p class="text-muted">Lead director</p>
            <p>Proin metus justo, commodo in ultrices at, lobortis sit amet dui. Fusce dolor purus, adipiscing a tempus at, gravida vel purus.</p>
         </div>
         <div class="panel-body text-center bg-gray-dark">
            <div class="row row-table">
               <div class="col-xs-4">
                  <h3 class="m0">400</h3>
                  <p class="m0">Photos</p>
               </div>
               <div class="col-xs-4">
                  <h3 class="m0">2000</h3>
                  <p class="m0">Likes</p>
               </div>
               <div class="col-xs-4">
                  <h3 class="m0">500</h3>
                  <p class="m0">Following</p>
               </div>
            </div>
         </div>
      </div>

   </div>
   <div class="col-md-4">

      <div class="panel widget">
         <div class="half-float">
            <img src="https://bootdey.com/img/Content/bg1.jpg" alt="" class="img-responsive"/>
            <div class="half-float-bottom">
               <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" class="img-thumbnail img-circle thumb128"/>
            </div>
         </div>
         <div class="panel-body text-center">
            <h3 class="m0">Maria Berriut</h3>
            <p class="text-muted">Lead director</p>
            <p>Proin metus justo, commodo in ultrices at, lobortis sit amet dui. Fusce dolor purus, adipiscing a tempus at, gravida vel purus.</p>
         </div>
         <div class="panel-body text-center bg-gray-dark">
            <div class="row row-table">
               <div class="col-xs-4">
                  <h3 class="m0">400</h3>
                  <p class="m0">Photos</p>
               </div>
               <div class="col-xs-4">
                  <h3 class="m0">2000</h3>
                  <p class="m0">Likes</p>
               </div>
               <div class="col-xs-4">
                  <h3 class="m0">500</h3>
                  <p class="m0">Following</p>
               </div>
            </div>
         </div>
      </div>

   </div>
   <div class="col-md-4">

      <div class="panel widget">
         <div class="half-float">
            <img src="https://bootdey.com/img/Content/bg1.jpg" alt="" class="img-responsive"/>
            <div class="half-float-bottom">
               <img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="" class="img-thumbnail img-circle thumb128"/>
            </div>
         </div>
         <div class="panel-body text-center">
            <h3 class="m0">Mark planty</h3>
            <p class="text-muted">Lead director</p>
            <p>Proin metus justo, commodo in ultrices at, lobortis sit amet dui. Fusce dolor purus, adipiscing a tempus at, gravida vel purus.</p>
         </div>
         <div class="panel-body text-center bg-gray-dark">
            <div class="row row-table">
               <div class="col-xs-4">
                  <h3 class="m0">400</h3>
                  <p class="m0">Photos</p>
               </div>
               <div class="col-xs-4">
                  <h3 class="m0">2000</h3>
                  <p class="m0">Likes</p>
               </div>
               <div class="col-xs-4">
                  <h3 class="m0">500</h3>
                  <p class="m0">Following</p>
               </div>
            </div>
         </div>
      </div>

   </div>
</div>
</div>
  )
}

export default AboutSection