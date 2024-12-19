import React, { useEffect } from "react";

function Quantango() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.mjs";
    script.type = "module";
    document.body.appendChild(script);
  }, []);

  return (
    <div>
      <main className="main-wrapper absolute top-[30%] left-0">
        <section className="section-cta bg-[hsla(260,40%,5%,1)]">
          {/* <dotlottie-player
            src="https://cdn.prod.website-files.com/66449829f3a54e01060b3697/665f0fc7a18f159c652139e1_Block_5.json"
            background="transparent"
            speed="1"
            style={{ width: "100%", height: "600px" }}
            direction="1"
            playMode="normal"
            loop
            autoplay
          ></dotlottie-player> */}
        </section>
      </main>
    </div>
  );
}

export default Quantango;
