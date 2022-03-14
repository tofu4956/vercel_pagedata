import Script from "next/script";
import { useRef } from "react";

const Test = () => {
  const containerElem = useRef(null);
  return (
    <Script
      id="twitter-embed"
      strategy="afterInteractive"
      onLoad={() => {
        (window as any).twttr.widgets.load(containerElem.current);
      }}
    >
      (window as any).twttr ={" "}
      {(function (d, s, id) {
        const fjs = d.getElementsByTagName(s)[0];
        const t = (window as any).twttr || {};
        if (d.getElementById(id)) return t;
        const js = d.createElement(s) as HTMLScriptElement;
        js.id = id;
        js.src = "https://platform.twitter.com/widgets.js";
        if (fjs.parentNode === null)
          throw new Error("[twitter-embed script] fjs.parentNode is null");
        fjs.parentNode.insertBefore(js, fjs);
        t._e = [];
        t.ready = function (f: any) {
          t._e.push(f);
        };
        return t;
      })(document, "script", "twitter-wjs")}
      ;
    </Script>
  );
};

export default Test;
