import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './page/Main.jsx';
import Test from './page/Test.jsx';
import TestResult from './page/TestResult.jsx';

//export const base_url = "http://localhost:5173";
export const base_url = "http://ikinye.net";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:testParam" element={<Test />} />
        <Route path="/:testParam/result/:resultParam" element={<TestResult />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
