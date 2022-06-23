// animation on scrolling

AOS.init({
  offset: 50,
  duration: 1000,
});

// form-validation javascript

function validation() {
  var firstname = document.getElementById("first_name").value;
  var lastname = document.getElementById("last_name").value;
  var subject = document.getElementById("subject").value;
  var email = document.getElementById("email").value;

  if (firstname == "") {
    document.getElementById("yourfirstname").innerHTML = "<i class='fa fa-warning'></i> This field is required<br><br>";
    return false;
  }
  if (lastname == "") {
    document.getElementById("yourlastname").innerHTML = "<i class='fa fa-warning'></i> This field is required<br><br>";
    return false;
  }
  if (subject == "") {
    document.getElementById("yoursubject").innerHTML = "<i class='fa fa-warning'></i> This field is required<br><br>";
    return false;
  }
  if (email == "") {
    document.getElementById("youremail").innerHTML = "<i class='fa fa-warning'></i> This field is required<br><br>";
    return false;
  }
  else {
    document.write("<h2>Congratulations form submitted!</h2>");
  
  }
}

// for navigation

$(".nav-btn").click(function(){
  $("ul").slideToggle();
});