function showSideMenu() {
  document.getElementById("sideMenu").style.width="400px";
}

function hideSideMenu() {
  document.getElementById("sideMenu").style.width="0px";
}

function searchableMenu() {
    // Declare variables
    var input, filter, ul, li, a, i;
    input = document.getElementById("mySearch");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myMenu");
    li = ul.getElementsByTagName("li");

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}



function setTheme() {

    /*Set Profile Picture*/
    var fileName = location.href.split("/").slice(-1);
    if(!localStorage.getItem("ProfilePic")){
      localStorage.setItem("ProfilePic", "../images/profile_pic.png");
    }
    if(!(document.getElementById("profileThumbnail") == null)){
      var imgURL = localStorage.getItem("ProfilePic");
      document.getElementById("profileThumbnail").src = imgURL;
    }
    var theme = localStorage.getItem("Theme");
    var arrows = $('.dropArrow');

    if(theme=="classic") {
      document.documentElement.style.setProperty('--bg-color', '#39B6FF');
      document.documentElement.style.setProperty('--grd-color', '#299BDF');
      document.documentElement.style.setProperty('--clk-color', '#2678A9');
      document.documentElement.style.setProperty('--pg-color', 'white');
      document.documentElement.style.setProperty('--txt-color', 'black');
      document.documentElement.style.setProperty('--sec-txt-color', 'black');
      document.documentElement.style.setProperty('--hvr-color', '#BAE5FF');

      try {
      for(i in arrows)
        arrows[i].style.filter = "invert(0)";
      } catch(err){}
    }
    else if(theme=="dark") {
      document.documentElement.style.setProperty('--bg-color', '#252525');
      document.documentElement.style.setProperty('--grd-color', '#121212');
      document.documentElement.style.setProperty('--clk-color', '#171717');
      document.documentElement.style.setProperty('--pg-color', 'black');
      document.documentElement.style.setProperty('--txt-color', '#949393');
      document.documentElement.style.setProperty('--sec-txt-color', '#6F6F6F');
      document.documentElement.style.setProperty('--hvr-color', '#606060');

      try {
      for(i in arrows)
        arrows[i].style.filter = "invert(1)";
      } catch(err){}
    }
    else if(theme=="triton") {
      document.documentElement.style.setProperty('--bg-color', '#182B49');
      document.documentElement.style.setProperty('--grd-color', '#16253B');
      document.documentElement.style.setProperty('--clk-color', '#17263F');
      document.documentElement.style.setProperty('--pg-color', '#006A96');
      document.documentElement.style.setProperty('--txt-color', '#C69214');
      document.documentElement.style.setProperty('--sec-txt-color', '#B98E23');
      document.documentElement.style.setProperty('--hvr-color', '#006A96');

      try {
      for(i in arrows)
        arrows[i].style.filter = "invert(0)";
      } catch(err){}
    }
    else {
      document.documentElement.style.setProperty('--bg-color', '#39B6FF');
      document.documentElement.style.setProperty('--grd-color', '#299BDF');
      document.documentElement.style.setProperty('--clk-color', '#2678A9');
      document.documentElement.style.setProperty('--pg-color', 'white');
      document.documentElement.style.setProperty('--txt-color', 'black');
      document.documentElement.style.setProperty('--sec-txt-color', 'black');
      document.documentElement.style.setProperty('--hvr-color', '#BAE5FF');
    }

}

$(document).ready(function() {
    $( "#profilePic.toggle" ).click( function() {
        $("#profilePicArrow").toggleClass('flip');

        $("#profilePicOptions").toggleClass('drop');
    });
});

$(document).ready(function() {
    $( "#drop1.toggle" ).click( function() {
        $("#dropArrow1").toggleClass('flip');

        $("#dropArrow1Options").toggleClass('drop');
    });
});

$(document).ready(function() {
    $( "#colorTheme.toggle" ).click( function() {
        $("#themeArrow").toggleClass('flip');

        $("#themeOptions").toggleClass('drop');
    });
});

function setExercise(exerciseName){
  window.localStorage.exercise = exerciseName;
}

/** Start User data Code **/
var username = localStorage.getItem("username");
var exists = $('#username').length;
if(username&&exists) {
    document.getElementById("username").innerHTML = username;
}

window.onload = setTheme();
