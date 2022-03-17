import { css } from "@emotion/css";

type Props = {
  src: string;
  title: string;
}

const sdcss = css`
border: 0px; background: padding-box padding-box rgba(255, 255, 255, 0.1); margin: 0px; padding: 0px; border-radius: 6px; box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 40px; width: 768px; height: 432px;`

export const SpeakerDeck = ({src, title }: Props) => {
  return (
    <iframe className={sdcss} frameBorder="0" src={src} title={title}  data-ratio="1.7777777777777777" allowFullScreen={true}  ></iframe>
  )
}