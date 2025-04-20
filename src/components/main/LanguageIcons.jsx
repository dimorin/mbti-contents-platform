import { CircleFlag } from "react-circle-flags";
import { useNavigate } from "react-router-dom";
import styles from "./LanguageIcons.module.css";

function LanguageIcons() {
    const navigate = useNavigate();
    const onButtonClick = (lang) => {
        navigate(`/?lang=${lang}`);
    }
    return <div>
        <CircleFlag className={styles.flagIcon} onClick={() => onButtonClick("Kor")} countryCode="kr" height={48} />
        <CircleFlag className={styles.flagIcon} onClick={() => onButtonClick("Eng")} countryCode="us" height={48} />
        <CircleFlag className={styles.flagIcon} onClick={() => onButtonClick("JP")} countryCode="jp" height={48} />
    </div>;
}    
export default LanguageIcons;