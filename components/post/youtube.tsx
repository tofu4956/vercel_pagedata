type Props = {
  width: number;
  height: number;
  id: string;
  autoplay: number;
};

export const YouTube = ({ width, height, id, autoplay }: Props) => {
  return (
    <div className="relative pt-[56.25%] w-[100%]">
      <iframe
        id="ytplayer"
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: "0",
          margin: "0",
        }}
        width={width}
        height={height}
        src={`https://www.youtube.com/embed/${id}?autoplay=${autoplay}`}
        loading="lazy"
      />
    </div>
  );
};
