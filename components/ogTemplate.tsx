export interface Props {
  title: string;
}

export const OgTemplate = (props: Props) => {
  const css = `
.title {
  
}

  `;

  return (
    <html>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <body>
        <h1>{props.title}</h1>
        <p>blog tofu4956</p>
      </body>
    </html>
  );
};
