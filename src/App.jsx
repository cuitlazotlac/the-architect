import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import TheMethod from './pages/TheMethod'
import TheArchitect from './pages/TheArchitect'
import TheAudit from './pages/TheAudit'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import BookOnline from './pages/BookOnline'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/the-method" element={<TheMethod />} />
          <Route path="/the-architect" element={<TheArchitect />} />
          <Route path="/the-audit" element={<TheAudit />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/book-online" element={<BookOnline />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
