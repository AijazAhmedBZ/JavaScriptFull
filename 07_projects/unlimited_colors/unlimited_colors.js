//generate a random color, search google for color hex code range

const randomColor = () => {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
let interValId;
const startChangingColor = () => {
  changebgColor = () => {
    document.body.style.backgroundColor = randomColor();
  };
  if (!interValId) {
  }
  interValId = setInterval(changebgColor, 1000);
};

const stopChangingColor = () => {
  clearInterval(interValId);
  interValId = null;
};

document.querySelector("#start").addEventListener("click", startChangingColor);
document.querySelector("#stop").addEventListener("click", stopChangingColor);
