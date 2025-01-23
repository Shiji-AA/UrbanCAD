
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import HomePage from './Pages/User/HomePage'
import Civil from './Components/Users/Cources/Civil'
import Electrical from './Components/Users/Cources/Electrical'
import Mechanical from './Components/Users/Cources/Mechanical'
import DataScience from './Components/Users/Cources/DataScience'
import AdminLogin from './Components/Admin/AdminLogin'
import AdminDashboard from './Components/Admin/AdminDashboard'
import AdminRegister from './Components/Admin/AdminRegister'
import AdminEnquiryData from './Components/Admin/AdminEnquiryData'

function App() {
  return (
  <Router>
    <Routes>   
      <Route>
     {/* UserSide   */}  
      <Route path="/" element={<HomePage/>} />
      <Route path="/civil" element={<Civil/>}/>
      <Route path="/electrical" element={<Electrical/>}/>
      <Route path="/mechanical" element={<Mechanical/>} />
      <Route path="/datascience" element={<DataScience/>}/>
    {/* AdminSide   */}  
      <Route path="/adminregister" element={<AdminRegister />} /> 
      <Route path="/admin" element={<AdminLogin />} />  
      <Route path="/admindashboard" element={<AdminDashboard />} /> 
      <Route path="/enquirydata" element={<AdminEnquiryData />} /> 
      
      </Route>
    </Routes>
  
  </Router>
  )
}

export default App
