type Props = {
  width: number;
  height: number;
  id: string;
  autoplay: number;
};

export const YouTube = ({ width, height, id, autoplay }: Props) => {
  return (
    <iframe
      id="ytplayer"
      width={width}
      height={height}
      src={`https://www.youtube.com/embed/${id}?autoplay=${autoplay}`}
    />
  );
};
