import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './pages/signup'
import Signin from './pages/signin'
import Post from './pages/post'
import Posts from './pages/posts'
import Publish from './pages/publish'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
           <Route path="/signup" element={<Signup />} />
           <Route path="/signin" element={<Signin />} />
           <Route path="/post/:id" element={<Post />} />        
           <Route path="/posts" element={<Posts />} />   
           <Route path="/publish" element={<Publish />} />     
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
