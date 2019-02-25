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
      $("#score-results").text("You have scored " + percentageScore + "%");
   if (percentageScore  > 80) {
      $("#remark").text("Congratulations,You have excellently Passed!");
  }else if ((percentageScore  > 50) && (percentageScore  < 79)) {
      $("#remark").text("Fair score.You are almost there");
   }else {
      $("#remark").text("Failed. Consider retaking the course!");
   }
 });
});
