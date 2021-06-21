function collapseNav() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
      document.getElementsByTagName('nav')[0].style.backgroundColor = "";
    } else {
      x.style.display = "block";
      document.getElementsByTagName('nav')[0].style.backgroundColor = "white";
    }
  }