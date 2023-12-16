
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import SolveList from './pages/SolveList';
import QuestionDetail from './pages/QuestionDetail';
import QuestionCreate from './pages/QuestionCreate';
import SolutionCreate from './pages/SolutionCreate';
import Question from './pages/Question';
import Ranking from './pages/Ranking';
import Header from './Header';
import Footer from './components/footer/Footer';
import NotFound from './components/notfound/NotFound';

import './components/common.css';

function App() {
  return (
    <BrowserRouter>
    <Header />
    <main className="flex flex-auto min-h-[calc(100vh-180px)]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/problem/:id" element={<SolveList />} />
        <Route path="/question/:id" element={<QuestionDetail />} />
        <Route path="/question/create" element={<QuestionCreate />} />
        <Route path="/question" element={<Question />} />
        <Route path="/ranking" element={<Ranking />} />
        <Route path="/solution/:id/create" element={<SolutionCreate />} />
        {/* 
        <Route path="/mypage/:id/*" element={<MyPage />} />
        
        
        
        <Route path="/question/update/:id" element={<QuestionUpdate />} /> */}

        {/* 잘못된 주소로 접근한 경우 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
    <Footer />
    <div id="toast"></div>
  </BrowserRouter>
  );
}

export default App;
