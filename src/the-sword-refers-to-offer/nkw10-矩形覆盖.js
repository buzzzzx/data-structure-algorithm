function rectCover(number) {
  if (number === 0) {
    return 0;
  }

  if (number === 1 || number === 2) {
    return number;
  }

  return rectCover(number - 1) + rectCover(number - 2);
}
