let inputbox = document.getElementById("inputbox")

function numshow(num){
    inputbox.value += num;
}

function Clear(){
    inputbox.value = "";
}

function del(){
    inputbox.value = inputbox.value.slice(0, -1);
}

function Calculate(){
  let x = inputbox.value;
  let y = eval(x);
  inputbox.value = y;
}

