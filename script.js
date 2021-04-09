const icon = document.querySelector(".icon");
const container = document.querySelector(".container");

icon.onchange = (event) => {
  container.id = ["light", "dark"][icon.value];
};
icon.oninput = (event) => {
  icon.id = ["light-icon", "dark-icon"][icon.value];
};
icon.addEventListener("dblclick", (event) => {
  icon.value = [1, 0][icon.value];
  icon.id = ["light-icon", "dark-icon"][icon.value];
  container.id = ["light", "dark"][icon.value];
});
document.addEventListener("keydown", (event) => {
  if (["d", "l"].includes(event.key)){
  container.id = { l: "light", d: "dark" }[event.key];
  icon.value = { l: 0, d: 1 }[event.key];
  icon.id = { l: "light-icon", d: "dark-icon" }[event.key];}
});
