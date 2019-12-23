


const timeConverter = (time) => {

  const hours = Math.floor(time / 60);
  const minutes = time - (hours * 60);
  console.log(hours + "h " + minutes + "min");

  return minutes ? `${hours}h ${minutes}min` : `${hours}h`;
}

export default timeConverter;