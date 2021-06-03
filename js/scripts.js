$(document).ready(function() {
  $("form#celebrity").submit(function(event) {
    const age = parseInt($("input#age").val());
    const gender = $("select#gender").val();

    if (age) {
      let person;
      if(gender==='female') {
        if(age < 18){
          person = "Mickey Mouse";
        }
        else if(age <50) {
          person = "Tom Cruise";
        }
        else {
          person = "Bill Clinton";
        }
      }
      else {
        if(age < 18){
          person = "Tinkerbell";
        }
        else if(age <50) {
          person = "Megan Fox";
        }
        else {
          person = "Kate Winslet";
        }
      }

      $("#match").text(person);
      $("#result").show();
    } else {
      alert('Please enter your age.');
    }
    

    event.preventDefault();
  });
});