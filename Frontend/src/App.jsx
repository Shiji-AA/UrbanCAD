
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import HomePage from './Pages/User/HomePage'
import Civil from './Components/Users/Cources/Civil'
import Electrical from './Components/Users/Cources/Electrical'
import Mechanical from './Components/Users/Cources/Mechanical'
import DataScience from './Components/Users/Cources/DataScience'

function App() {
  return (
  <Router>
    <Routes>

      <Route>
      <Route path="/" element={<HomePage/>} />
      <Route path="/civil" element={<Civil/>}/>
      <Route path="/electrical" element={<Electrical/>}/>
      <Route path="/mechanical" element={<Mechanical/>} />
      <Route path="/datascience" element={<DataScience/>}/>
  
      </Route>
    </Routes>
  
  </Router>
  )
}

export default App
