 const imgTim = document.getElementsByClassName('timImg')
 console.log("hey")

 function random_bg_color() {
     let x = Math.floor(Math.random() * 256);
     let y = Math.floor(Math.random() * 256);
     let z = Math.floor(Math.random() * 256);
     let bgColor = "rgb(" + x + "," + y + "," + z + ")";
  console.log(bgColor);
  document.body.style.background = bgColor;
     }

imgTim.addEventListener("click", random_bg_color())