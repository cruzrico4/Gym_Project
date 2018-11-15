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
      var imgURL = localStorage.getItem("ProfilePic");
      document.getElementById("profileThumbnail").src = imgURL;

    var theme = localStorage.getItem("Theme");
    var arrows = $('.dropArrow');

    if(theme=="classic") {
      document.documentElement.style.setProperty('--bg-color', '#4B7498');
      document.documentElement.style.setProperty('--grd-color', '#4E6E8A');
      document.documentElement.style.setProperty('--pg-color', 'white');
      document.documentElement.style.setProperty('--txt-color', 'black');
      document.documentElement.style.setProperty('--hvr-color', '#5E88AD');

      try {
      for(i in arrows)
        arrows[i].style.filter = "invert(0)";
      } catch(err){}
    }
    if(theme=="dark") {
      document.documentElement.style.setProperty('--bg-color', '#252525');
      document.documentElement.style.setProperty('--grd-color', '#121212');
      document.documentElement.style.setProperty('--pg-color', 'black');
      document.documentElement.style.setProperty('--txt-color', '#949393');
      document.documentElement.style.setProperty('--hvr-color', '#606060');

      try {
      for(i in arrows)
        arrows[i].style.filter = "invert(1)";
      } catch(err){}
    }
    if(theme=="triton") {
      document.documentElement.style.setProperty('--bg-color', '#182B49');
      document.documentElement.style.setProperty('--grd-color', '#16253B');
      document.documentElement.style.setProperty('--pg-color', '#006A96');
      document.documentElement.style.setProperty('--txt-color', '#C69214');
      document.documentElement.style.setProperty('--hvr-color', '#006A96');

      try {
      for(i in arrows)
        arrows[i].style.filter = "invert(0)";
      } catch(err){}
    }

}

$(document).ready(function() {
    $( "#profilePic.toggle" ).click( function() {
        $("#profilePicArrow").toggleClass('flip');

        $("#profilePicOptions").toggleClass('drop');
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

function generateGradientColor(bgColor){
  var bgHex = (parseInt(bgColor, 16) + parseInt("0f0f0f",16)).toString(16);
  document.documentElement.style.setProperty('--grd-color', bgHex);
}

window.onload = setTheme();
