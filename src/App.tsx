import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Auth from './pages/auth'
import NotFound from './pages/404'
import Home from './pages/home'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import Problem from './pages/problem'
import Test from './pages/test'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/test" element={<Test />} />
        <Route path="/problem/:id" element={<Problem />} />
        <Route path="/" element={<Navigate to={'/home'} replace />} />
        <Route path="*" element={<NotFound />} />
        {/* <Route path="/about" element={<About />} />  */}
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  )
}

export default App
