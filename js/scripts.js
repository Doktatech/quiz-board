function completeQuiz(){
  var rewel =0 ;
  for(var i = 1; i<=5;i++){
    var radios= document.getElementsByName('question'+i);
    for (var z=0; z< radios.length; z++){
      var radio = radios[z];
      if(radio.value == "correct" && radio.checked){
        rewel++;
      }
    }
  }
      alert("You got" + " "+ rewel + " "+ "correct");
}
