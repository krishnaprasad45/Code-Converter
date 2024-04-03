import ReactDOM from 'react-dom/client'
import './index.css'
import AllRoutes from './Pages/AllRoutes.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <AllRoutes/>
  </BrowserRouter>,
)
