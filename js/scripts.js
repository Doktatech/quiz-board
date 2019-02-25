$(document).ready(function(){
 $("#quizlet").submit(function(event) {
   event.preventDefault();
   var question1 = parseInt($("input:radio[name=question1]:checked").val());
   var question2 = parseInt($("input:radio[name=question2]:checked").val());
   var question3 = parseInt($("input:radio[name=question3]:checked").val());
   var question4 = parseInt($("input:radio[name=question4]:checked").val());
   var question5 = parseInt($("input:radio[name=question5]:checked").val());
   var total = (question1+question2+question3+question4+question5);
    var percentageScore = ((total / 5) * 100);
      alert("You have scored " + percentageScore + "%");
     //document.getElementById('score-results').innerHTML="You have scored " + percentageScore + "%";
   //$("#score-results").append("You have scored " + percentageScore + "%");

   if (percentageScore  > 80) {
    alert ("Congratulations,You have excellently Passed!");
  }else if ((percentageScore  > 50) && (percentageScore  < 79)) {
    alert ("Fair score.You are almost there");
   }else {
    alert ("Failed. Consider retaking the course!");
   }
 });
});
