import { useEffect, useState } from "react";
import { TESTS } from "../../data/TESTS";   
import { Link, useSearchParams } from "react-router-dom";
import {base_url} from "../../App.jsx";
function ThumbnailList() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [testList, setTestList] = useState(TESTS);
    useEffect(() => {
        const currentLanguage = searchParams.get("lang") || "Kor";
        const currentCategory = searchParams.get("cat");
        if (currentCategory) {
            const filteredTests = TESTS.filter(
                (test) => (test?.info?.lang === currentLanguage && test?.info?.category === currentCategory));
            setTestList(filteredTests);
        } else {
            const filteredTests = TESTS.filter(
                (test) => (test?.info?.lang === currentLanguage));
            setTestList(filteredTests);
        }
    },[searchParams]);
    return <div>
        {/* 썸네일을 클릭시 해당 테스트 인트로로 넘어간다.
        base_url/:testName */}
        {/* JSX 안에서 JavaScript 표현식을 쓸 때 중괄호를 쓴다. 주석은 이런 식으로 단다. */}
        {/* 'testList?.'뜻 : testList가 undefined 또는 null이 아닌 경우에만 .map(...)을 실행해 */}
        {/* a 태그 대신 react에서 제공하는 Link를 쓰는 이유는 a 태그는 클릭시 기본적으로 새로고침 되기 때문이다.*/}
        {/* JSX에서 inline style은 객체로 작성해야 하기 때문에 중괄호가 두 개 겹쳐진다.*/ }
        {testList?.map((test) => (  
            <Link to={`${base_url}/${test?.info?.mainUrl}`} key={test?.info?.mainUrl}>
                <img
                    style={{width:"100%"} }
                    src={test?.info?.thumbImage }
                    alt={test?.info?.mainUrl }                
                />   
            </Link>
        ))}
    </div>;
}

export default ThumbnailList;