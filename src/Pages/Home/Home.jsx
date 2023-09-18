import React from 'react'
import Navbar from '../../component/Navbar/Navbar'
import './home.scss'
import RightBar from '../../component/rightBar/RightBar'
import Feed from '../../component/feed/Feed'
import Sidebar from '../../component/Sidebar/Sidebar'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <div className="homeContainer">
          <Sidebar/>
          <Feed/>
          <RightBar/>
        </div>
    </div>
  )
}

export default Home