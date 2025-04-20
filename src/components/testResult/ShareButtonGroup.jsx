import React from 'react';
import {FacebookIcon, FacebookShareButton, XIcon, TwitterShareButton  } from "react-share";
import { base_url } from "../../App.jsx";
import styles from "./shareButtonGroup.module.css";
import { useCopyToClipboard } from "@uidotdev/usehooks";
const ShareButtonGroup = ({ testParam, resultParam, renderTestInfo }) => {
  const [copiedText, copy] = useCopyToClipboard();  
  copiedText && console.log(copiedText);
  return (
    <div>
      <h3>친구에게 공유하기</h3>
      <div className={styles.shareButtonDiv}>
        <FacebookShareButton
          url={`${base_url}/${testParam}/result/${resultParam}`}
          hashtag={`#${renderTestInfo?.info?.mainTitle}`}
        >
          <FacebookIcon
            round={true}
          size={48}    
            className={styles.socialMediaIcon}
          />
        </FacebookShareButton>
        <TwitterShareButton
          title={renderTestInfo?.info?.mainTitle}
          url={`${base_url}/${testParam}/result/${resultParam}`}
          hashtags={[renderTestInfo?.info?.mainTitle]}
        >
          <XIcon round={true} size={48} className={styles.socialMediaIcon}  />
        </TwitterShareButton>
        <button className={styles.urlShareButton} onClick={() => {
          copy(`${base_url}/${testParam}/result/${resultParam}`);
          alert("URL복사 완료");
        }}>URL</button>        
      </div>
    </div>
  );
};

export default ShareButtonGroup