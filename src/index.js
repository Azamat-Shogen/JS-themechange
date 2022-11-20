import "./styles.css";

function changeTheme(color) {
  return () => {
    document.body.style.background = color;
  };
}

const colors = ["black", "green", "tomato", "yellow", "blue"];

const load = function (numberOfButtons, colors) {
  if (numberOfButtons !== colors.length) {
    throw new Error("colors and buttons should be equal");
  }

  for (let i = 0; i < numberOfButtons; i++) {
    const b = document.createElement("button");
    b.innerHTML = `${colors[i]}`;

    b.onclick = changeTheme(colors[i]);

    document.body.appendChild(b);
  }
};

load(5, colors);
