type Props = {
  id: string;
};

export const CodePen = ({ id }: Props) => {
  return (
    <iframe
      height="300"
      style={{ width: "100%", backgroundColor: "transparent" }}
      scrolling="no"
      title="Untitled"
      src={`https://codepen.io/tofu4956/embed/${id}?default-tab=html%2Cresult`}
      frameBorder="no"
      loading="lazy"
      allowFullScreen={true}
    >
      See the Pen <a href={`https://codepen.io/tofu4956/pen/${id}`}>Untitled</a>{" "}
      by tofu4956 (<a href="https://codepen.io/tofu4956">@tofu4956</a>) on{" "}
      <a href="https://codepen.io">CodePen</a>.
    </iframe>
  );
};
