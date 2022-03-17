/* eslint-disable react/no-unescaped-entities */
/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable @next/next/no-head-element */
export interface Props {
  title: string;
  excerpt: string;
}
// eslint
export const OgTemplate = (props: Props) => {
  const css = `
  @import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@700&family=Noto+Sans+JP:wght@500&display=swap');
  html {
    width: 1200px;
    height: 675px;
  }
  body {
    position: relative;
    margin: 80px;
    padding: 0;
    background-color: #f0fafa;
  }
  
  .ogp-body {
    padding: 0;
    margin: 0;
    align-items: left;
    font-family: 'M PLUS Rounded 1c', sans-serif;
  }
  
  .ogp-title {
    font-size: 100px;
    margin-bottom: 20px;
  }
  
  .ogp-excerpt {
    margin-top: 0;
    font-size: 32px;
    color: #bdbdbd;
    font-family: 'M PLUS Rounded 1c', sans-serif;
  }
  
  .ogp-credit {
    position: absolute;
    font-size: 32px;
    color: #bdbdbd;
    bottom: 0;
    right: 0;
    padding: 0;
    font-family: 'M PLUS Rounded 1c', sans-serif;
  }  
  `;

  return (
    <html>
      <head>
        <style dangerouslySetInnerHTML={{ __html: css }} />
      </head>
      <body>
        <div className="ogp-body">
          <h1 className="ogp-title">{props.title}</h1>
          <p className="ogp-excerpt">{props.excerpt}</p>
        </div>
        <div className="ogp-credit">
          <p> Blog | tofu4956 </p>
        </div>
      </body>
    </html>
  );
};
