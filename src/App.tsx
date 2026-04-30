import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import TermsOfService from './pages/TermsOfService'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/terms-and-services" element={<TermsOfService />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
