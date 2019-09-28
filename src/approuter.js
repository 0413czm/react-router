import React from 'react';
import { BrowserRouter as Router, Route,Link } from 'react-router-dom'
import Index from './pages/Index'
import Video from './pages/Video'
import Worker from './pages/Worker'
import './index.css'
function AppRouter(){
    return(
      <Router>
        <div className='mainDiv'>
          <div className='leftNav'>
            <ul>
              <h1>一级导航</h1>
              <li><Link to={'/'}>首页创新</Link></li>
              <li><Link to={'/video'}>视频教程</Link></li>
              <li><Link to={'/work'}>工作乐趣</Link></li>
            </ul>
          </div>
          <div className='rightMain'>
            <Route path={'/'} exact component={Index}></Route>
            <Route path={'/video'}  component={Video}></Route>
            <Route path={'/work'}  component={Worker}></Route>
          </div>
        </div>
      </Router>
    )
}
export default AppRouter