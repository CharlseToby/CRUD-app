import './App.scss';
import { Routes, Route } from 'react-router-dom';
import ReadPost from './pages/ReadPosts';
import CreatePost from './pages/CreatePost';
import UpdatePost from './pages/UpdatePost';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<ReadPost/>}/>
        <Route path='/readposts' element={<ReadPost/>} />
        <Route path='/create' element={<CreatePost/>} />
        <Route path='/readposts/:id' element={<UpdatePost/>} />
      </Routes>
    </div>
  );
}

export default App;
