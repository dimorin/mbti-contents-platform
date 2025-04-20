import IntroButtonGroup from "./IntroButtonGroup";
function Intro({ info, setMode }) {
    return <div>
        <h1>{info?.mainTitle}</h1>
        <h3>{info?.subTitle}</h3>
        <img
            onClick={() => setMode("quiz")}
            style={{width:"100%", cursor:"pointer"} }
            src={info?.mainImage}
            alt={info?.mainUrl}
        />   
        <p>{info?.mainTitle}로 여러분의 성향을 알아보세요!</p>
        <IntroButtonGroup />
    </div>;
}

export default Intro;