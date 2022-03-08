let inputs = document.querySelectorAll("input");
inputs.forEach((inp) => {
  inp.addEventListener("change", handleChange);
  inp.addEventListener("mousemove", handleChange);
});
function handleChange(e) {
  var unit = this.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + unit
  );
}
