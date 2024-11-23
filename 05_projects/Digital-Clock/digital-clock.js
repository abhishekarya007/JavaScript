setInterval(() => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const clock = document.querySelector("#clock");

  //   clock.innerHTML = date.toLocaleTimeString();
  const timing = hours > 12 ? " PM" : " AM";

  clock.innerHTML = `${hours}:${minutes}:${seconds}` + timing;
}, 1000);
