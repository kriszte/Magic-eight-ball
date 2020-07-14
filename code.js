var answers = [
  'Fuck Yes!',
  'Maybe Baby...',
  'God I hope Not...',
  'Maybe, If you\'re not a prick...',
  'In your fucken dreams',
  'Yaaaas Queen!',
  'You don\'t deserve it you donkey',
  'Only if Gordon Ramsay says Yes',
  'You should be ashamed to even ask that',
  'Fuck.No',
  'Well yes... But no',
  'You\'d like that, wouldn\'t you',
  'Sacrifice a goat and you should be good',
  'Just let it go already',
  'My mom says Yes'];

  window.onload = function() {
 /*relates my JS to the html elements*/
    var eight = document.getElementById("eight");
    var answer = document.getElementById("answer");
    var eightball = document.getElementById("eight-ball");
    var question = document.getElementById("question");

  eightball.addEventListener("click", function() {
    if (question.value.length < 1) {
      alert('What\'s the question you donkey?!');
    } else {
      eight.innerText = "";
      var num = Math.floor(Math.random() * Math.floor(answers.length));
      answer.innerText = answers[num];
    }
  });
};
