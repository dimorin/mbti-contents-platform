import React from 'react';
import { base_url } from "../../App.jsx";
import { useCopyToClipboard } from "@uidotdev/usehooks";
import { LinkOutlined, RedoOutlined, HomeOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import styles from "./resultButtonGroup.module.css";
const ResultButtonGroup = ({ testParam, resultParam }) => {
  const navigate = useNavigate();
  const [copiedText, copy] = useCopyToClipboard();   
  const onClickRedoButton = () => {
    navigate(`/${testParam}`);
  }
  const onClickHomeButton = () => {
    navigate("/");
  }
  return (
    <div className={styles.mainDiv}>
      <div className={styles.upperDiv}>
        <button className={styles.upperButton} onClick={() => {
                  copy(`${base_url}/${testParam}/result/${resultParam}`);
                  alert("URL복사 완료");
                }}><LinkOutlined />&nbsp;링크 복사</button>
        <button className={styles.upperButton} onClick={onClickRedoButton }><RedoOutlined />&nbsp;다시 하기</button>
      </div>
      <div className={styles.bottomDiv}><button className={styles.bottomButton }  onClick={onClickHomeButton}><HomeOutlined />&nbsp;다른 테스트 하러 가기</button></div>
    </div>
  )
}

export default ResultButtonGroup