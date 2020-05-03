function countrySelection()
{
$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $(".dropdown-menu li").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});
}

function countrySelection1()
{
$(document).ready(function(){
  $("#myInput1").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $(".dropdown-menu li").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});
}

/* for login form*/
function openForm() {
  document.getElementById("myForm").style.display = "block";
  document.getElementById("changeOpacity").style.opacity = "0.1";
  document.getElementById("changeOpacity1").style.opacity = "0.1";
  document.getElementById("changeOpacity2").style.opacity = "0.1";
}


function closeForm() {
  document.getElementById("myForm").style.display = "none";
  document.getElementById("changeOpacity").style.opacity = "1";
  document.getElementById("changeOpacity1").style.opacity = "1";
  document.getElementById("changeOpacity2").style.opacity = "1";
}

function open_signup() {
  document.getElementById("myForm1").style.display = "block";
  document.getElementById("changeOpacity").style.opacity = "0.1";
  document.getElementById("changeOpacity1").style.opacity = "0.1";
  document.getElementById("changeOpacity2").style.opacity = "0.1";
}
function about() {
  document.getElementById("about").style.display = "block";
  document.getElementById("changeOpacity").style.opacity = "0.1";
  document.getElementById("changeOpacity1").style.opacity = "0.1";
  document.getElementById("changeOpacity2").style.opacity = "0.1";
}
function blog() {
  document.getElementById("blog").style.display = "block";
  document.getElementById("changeOpacity").style.opacity = "0.1";
  document.getElementById("changeOpacity1").style.opacity = "0.1";
  document.getElementById("changeOpacity2").style.opacity = "0.1";
}
function faq() {
  document.getElementById("faq").style.display = "block";
  document.getElementById("changeOpacity").style.opacity = "0.1";
  document.getElementById("changeOpacity1").style.opacity = "0.1";
  document.getElementById("changeOpacity2").style.opacity = "0.1";
}
function contact() {
  document.getElementById("contact").style.display = "block";
  document.getElementById("changeOpacity").style.opacity = "0.1";
  document.getElementById("changeOpacity1").style.opacity = "0.1";
  document.getElementById("changeOpacity2").style.opacity = "0.1";
}
function closeAbout(){
  document.getElementById("about").style.display = "none";
  document.getElementById("changeOpacity").style.opacity = "1";
  document.getElementById("changeOpacity1").style.opacity = "1";
  document.getElementById("changeOpacity2").style.opacity = "1";
}
function closeBlog(){
  document.getElementById("blog").style.display = "none";
  document.getElementById("changeOpacity").style.opacity = "1";
  document.getElementById("changeOpacity1").style.opacity = "1";
  document.getElementById("changeOpacity2").style.opacity = "1";
}
function closeFaq(){
  document.getElementById("faq").style.display = "none";
  document.getElementById("changeOpacity").style.opacity = "1";
  document.getElementById("changeOpacity1").style.opacity = "1";
  document.getElementById("changeOpacity2").style.opacity = "1";
}
function closeContact(){
  document.getElementById("contact").style.display = "none";
  document.getElementById("changeOpacity").style.opacity = "1";
  document.getElementById("changeOpacity1").style.opacity = "1";
  document.getElementById("changeOpacity2").style.opacity = "1";
}
function close_signup() {
  document.getElementById("myForm1").style.display = "none";
  document.getElementById("changeOpacity").style.opacity = "1";
  document.getElementById("changeOpacity1").style.opacity = "1";
  document.getElementById("changeOpacity2").style.opacity = "1";
}
