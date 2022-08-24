let count = 0;
timeSet = () => {
  count++;
  document.getElementById("counter").innerHTML = count;
  if (count == 100) {
    count = 0;
    document.getElementById("counter").innerHTML = count;
  }
};

counterStart = () => {
  interVal = setInterval(timeSet, 150);
};

counterStop = () => {
  clearInterval(interVal);
  count = 0;
  document.getElementById("counter").innerHTML = count;
};
