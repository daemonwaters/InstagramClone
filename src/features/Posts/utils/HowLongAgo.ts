export const HowLongAgo = (createdAt: number) => {
  const gap = new Date().getTime() - createdAt;
  const day = Math.floor(gap / (1000 * 60 * 60 * 24));
  const hour = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const min = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));

  if (day >= 1) {
    return `${day}d`;
  }
  if (hour >= 1) {
    return `${hour}h`;
  }
  if (min >= 1) {
    return `${min}m`;
  }
  return `just now`;
};
