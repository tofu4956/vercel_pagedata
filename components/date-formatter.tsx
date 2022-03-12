import { parseISO, format } from "date-fns";

type Props = {
  dateString: string;
};

const DateFormatter = ({ dateString }: Props): JSX.Element => {
  const date = parseISO(dateString);
  return (
    <time dateTime={dateString} className="pr-8">
      {format(date, "yyyy/LL/dd kk:mm:ss")}
    </time>
  );
};

export default DateFormatter;
