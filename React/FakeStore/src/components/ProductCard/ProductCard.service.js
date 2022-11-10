export const numberToTime = (num) => {
  const min = Math.floor(num / 60);
  const sec = num % 60;
  if (sec / 10 < 1) {
    return `0${min}:0${sec}`;
  }
  return `0${min}:${sec}`;
};

export const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min) + min);
