const totalScore = document.getElementById("total-score");

const reactionScore = document.getElementById('id-rea-s');
const memoryScore = document.getElementById('id-mem-s');
const verbalScore = document.getElementById('id-verb-s');
const visualScore = document.getElementById('id-vis-s');
// const icon = document.getElementsByClassName();



fetch('./data.json')
.then(response => response.json())
.then(jsonResponse => renderData(jsonResponse));

function renderData(jsonResponse) {
  
  reactionScore.innerHTML = jsonResponse[0].score;
  memoryScore.innerHTML = jsonResponse[1].score;
  verbalScore.innerHTML = jsonResponse[2].score;
  visualScore.innerHTML = jsonResponse[3].score;

  totalScore.innerHTML = Math.floor((80 + 92 + 61 + 72) / 4);

}


