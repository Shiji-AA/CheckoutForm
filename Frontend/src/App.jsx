import CheckoutForm from "./Components/CheckoutForm"
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { Toaster } from "react-hot-toast"
import Thankyou from "./Components/Thankyou"

function App() {
  return (
     
  
   <Router>
     <Toaster position="top-right" />
    <Routes>
      <Route path="/" element={<CheckoutForm/>}/>
      <Route path="/postcheckout" element={<Thankyou/>}/>
    </Routes>
   </Router>

   
  )
}

export default App
