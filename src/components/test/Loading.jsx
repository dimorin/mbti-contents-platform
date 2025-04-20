import Lottie from "react-lottie"
import * as animationData from "../../assets/loading-animation.json"
import { useState,useEffect } from "react"
import { useNavigate } from "react-router-dom"
function Loading({ mbtiScore, currentTest }) {
  const navigate = useNavigate();
  const [finalQuery, setFinalQuery] = useState("");
  const defaultOption = {
    loop: true,
    autoplay:true,
    animationData: animationData.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  }
  const loadingTime = 3700;
  useEffect(() => {
    const mbtiPairs = [
      ["E", "I"],
      ["S", "N"],
      ["T", "F"],
      ["J", "P"]
    ];
    let resultType = "";
    for(let pair of mbtiPairs) {
      let firstType = pair[0];
      let secondType = pair[1];
      let firstTypeScore = mbtiScore[firstType];
      let secondTypeScore = mbtiScore[secondType];
      firstTypeScore > secondTypeScore ?
        (resultType += firstType) :
        (resultType += secondType);
    }
    const resultQuery = currentTest?.results?.find((result) => (
      result?.type === resultType
    ))?.query; 
    setFinalQuery(resultQuery);
  }, [mbtiScore, currentTest]);
  useEffect(() => {
    let timeout = setTimeout(() => {
      finalQuery && navigate(`/${currentTest?.info?.mainUrl}/result/${finalQuery}`);
    }, loadingTime);
    return () => clearTimeout(timeout);
  }, [loadingTime, navigate, finalQuery, currentTest?.info?.mainUrl]);
  return (
    <Lottie
      options={defaultOption}
      width={280}
      height={280}
      style={{marginTop:"10rem"} }
    />
  )  
}
  
export default Loading;