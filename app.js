const input = document.getElementById("binary");
const result = document.querySelector(".decimal__result");

function convert(bin) {
  bin = String(bin);
  if (bin === "") {
    return "";
  }
  return parseInt(bin, 2);
}

input.addEventListener("input", function () {
  input.value = ("" + input.value).trim().replace(/[^0-1]/g, "");
  result.innerHTML = convert(input.value);
});
