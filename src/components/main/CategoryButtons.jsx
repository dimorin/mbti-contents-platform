import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./CategoryButtons.module.css";
function CategoryButtons() {
    const [searchParams] = useSearchParams();
    const [language, setLanguage] = useState("Kor");
    const navigate = useNavigate();
    const onCategoryButtonClick = (category) => {
        if (category === "all") {
            navigate(`/?lang=${language}`);
        } else if(category === "love" || category === "characteristic") {
            navigate(`/?lang=${language}&cat=${category}`);
        } else {
            alert("잘못된 카테고리입니다.");
            navigate(`/?lang=${language}`);
        }  
    };
    useEffect(() => {
        const currentLang = searchParams.get("lang") || "Kor";
        setLanguage(currentLang);
    }, [searchParams]);

    return <div>
        <button className={styles.categoryButton} onClick={() => {onCategoryButtonClick("all")}}>전체</button>
        <button className={styles.categoryButton} onClick={() => {onCategoryButtonClick("love")}}>연애</button>
        <button className={styles.categoryButton} onClick={() => {onCategoryButtonClick("characteristic")}}>성격</button>
    </div>;
}        
export default CategoryButtons;