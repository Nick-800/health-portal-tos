import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import TermsOfService from './pages/TermsOfService'
import PrivacyPolicy from './pages/PrivacyPolicy'
import DataDeletion from './pages/DataDeletion'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/terms-and-services" element={<TermsOfService />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/data-deletion" element={<DataDeletion />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
