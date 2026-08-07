export function getRuntime(time: number | null) {
  if (!time) return 'N/A';
  const hours = Math.floor(time / 60);
  const minutes = time - hours * 60;

  return minutes ? `${hours}h ${minutes}min` : `${hours}h`;
}
