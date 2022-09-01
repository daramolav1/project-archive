import React from "react";
import "./styles.css";

function CoverLetterVideo() {
  return (
    <>
      <div className="wistia_responsive_padding">
        <div className="wistia_responsive_wrapper">
          <iframe
            src="https://fast.wistia.net/embed/iframe/qdru1w8d7j?videoFoam=true"
            title="Video Cover Letter on 9-1-22 at 1.44 PM"
            allow="autoplay; fullscreen"
            allowtransparency="true"
            frameBorder="0"
            scrolling="no"
            className="wistia_embed"
            name="wistia_embed"
            msallowfullscreen
            width="100%"
            height="100%"
          ></iframe>
        </div>
      </div>
      <script
        src="https://fast.wistia.net/assets/external/E-v1.js"
        async
      ></script>
    </>
  );
}

export default CoverLetterVideo;
