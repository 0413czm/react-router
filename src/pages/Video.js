import React from 'react'
import { Route,Link} from 'react-router-dom'
import ReactPage from './video/React'
import VuePage from './video/Vue'
import FlutterPage from './video/Flutter'
function VideoPage(){
    return(
      <div> 
        <div className='topNav'>
          <ul>
            <li><Link to='/video/React' >React教程</Link></li>
            <li><Link to= '/video/Vue'>Vue教程</Link></li>
            <li><Link to= '/video/Flutter'>Flutter教程</Link></li>
          </ul>
        </div>
        <div>
          <div>视频教程</div>
              <Route path="/video/React" exact component={ReactPage}></Route>
              <Route path="/video/Vue"  component={ VuePage }></Route>
              <Route path="/video/Flutter"  component={ FlutterPage }></Route>
        </div>
      </div>
    )
}
export default VideoPage