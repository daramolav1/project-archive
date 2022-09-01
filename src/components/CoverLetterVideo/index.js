import React from "react";
import "./styles.css";

function CoverLetterVideo() {
  return (
    <div>
      <div className="wistia_responsive_padding">
        <div className="wistia_responsive_wrapper">
          <iframe
            src="https://fast.wistia.net/embed/iframe/mfmysrj9hz?videoFoam=true"
            title=" [Example Video] Wistia Video Essentials"
            allow="autoplay; fullscreen"
            allowtransparency="true"
            frameBorder="0"
            scrolling="no"
            className="wistia_embed"
            name="wistia_embed"
          ></iframe>
        </div>
      </div>
      <script
        src="https://fast.wistia.net/assets/external/E-v1.js"
        async
      ></script>
    </div>
  );
}

export default CoverLetterVideo;
