import { parseISO, format } from 'date-fns'

type Props = {
  dateString: string
}

const DateFormatter = ({ dateString }: Props): JSX.Element => {
  const date = parseISO(dateString)
  console.log(date)
  return <time dateTime={dateString}>{format(date, 'yyyy/LL/dd kk:mm:ss')}</time>
}

export default DateFormatter
