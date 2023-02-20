var iphone = ["pic3.jpg","1.jpg","2.jpg"]
var i = 0;
setInterval(changeImage1, 2000);
function changeImage1() {
  document.getElementById("iphone").src = iphone[i];
  if (i < iphone.length - 1) {
    i++;
  } else {
    i = 0;
  }
}
function openNav() {
      document.getElementById("mySidenav").style.width = "250px";
    }

    function closeNav() {
      document.getElementById("mySidenav").style.width = "0";
    }