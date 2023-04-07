import './App.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlesPage from './pages/ArticlesPage';
import ArticlePage from './pages/ArticlePage';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <div id="page-body">
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/about" element={<AboutPage/>} />
            <Route path="/articles" element ={<ArticlesPage/>} />
            <Route path="/articles/:articleId" element = {<ArticlePage/>} />
            <Route path="*" element = {<NotFoundPage/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
