import React from "react";

function VideoBanner() {
  return (
    <div class="home-page-iframe">
      <iframe
        class="w-full h-96"
        src="https://www.youtube-nocookie.com/embed/IxTyLks2bAY?controls=0"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default VideoBanner;
