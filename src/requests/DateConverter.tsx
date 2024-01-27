const DateConverter = ({date} : {date: string}) => {
  const convertedDate = new Date(date);

  return(
      <>{convertedDate.getMonth() + 1}/{convertedDate.getDate()}/{convertedDate.getFullYear()}</>
  )
}

export default DateConverter;