import {Routes, Route } from 'react-router-dom'
import App from '../App'
// import WelcomePage from '../Components/WelcomePage'

const AllRoutes = () => {
  return (
    <div>
          <Routes>
            <Route path='/' element = {<App/>}/>
          </Routes>  

    </div>
  )
}

export default AllRoutes