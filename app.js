let inputdata = document.getElementById("inputdata");
let alertbox = document.getElementById("alertbox");

let btn = document.getElementById("btn");

let dangertemplate = `<div class="alert danger">
You Have a Dangerous Bug in your system 🐛
</div>`;

let primarytemplate = `<div class="alert primary">
You Have a Primary Bug in your system 😅
</div>`;

let successtemplate = `<div class="alert success">
You Have a Success Bug in your system 🍏
</div>`;

let warningtemplate = `
<div class="alert warning">
You Have a Warning Bug in your system 💛
</div>`;

let nfoundtemplate = `
<div class="alert nfound">
404 Not Found Template 😆
</div>`;

btn.addEventListener("click", () => {
  let check = inputdata.value;
  if (check == "primary") {
    alertbox.innerHTML = primarytemplate;
  } else if (check == "success") {
    alertbox.innerHTML = successtemplate;
  } else if (check == "danger") {
    alertbox.innerHTML = dangertemplate;
  } else if (check == "warning") {
    alertbox.innerHTML = warningtemplate;
  } else {
    alertbox.innerHTML = nfoundtemplate;
  }
  inputdata.value = "";
});
