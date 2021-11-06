function openNav() {
    document.getElementById("mySidenav").style.width = "50vw";
    document.getElementById("navbackdrop").style.display = "block";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("navbackdrop").style.display = "none";
  }


  function backDrop(){
      document.getElementById("backdrop_theme").style.display = "none";
      document.getElementById("ss_website_theme").style.display = "none";
  }
  function showTheme(){
    document.getElementById("backdrop_theme").style.display = "block";
    document.getElementById("ss_website_theme").style.display = "block";
  }