import { useState } from "react";
import Intro from "./Intro.jsx";
import Quiz from "./Quiz.jsx";
import Loading
    from "./Loading.jsx";
function IntroRenderer({ currentTest }) {
    const [mbtiScore, setMbtiScore] = useState({
        E: 0,
        I: 0,
        S: 0,
        N: 0,
        T: 0,
        F: 0,
        J: 0,
        P: 0
    });
    const [mode, setMode] = useState("intro");//intro, quiz, loading
    if (mode === 'intro') {
        return <Intro info={currentTest?.info} setMode={setMode } />;
    }else if(mode === 'quiz') {
        return <Quiz setMode={setMode} questions={currentTest?.questions} mbtiScore={mbtiScore} setMbtiScore={setMbtiScore} />;    
    } else if (mode === 'loading') {
        return <Loading mbtiScore={mbtiScore} currentTest={currentTest} />;    
    } else {
        return <div>잘못된 페이지입니다.</div>;
    }      
    
}    
export default IntroRenderer;