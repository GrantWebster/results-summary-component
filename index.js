const totalScore = document.getElementById("total-score");

const reactionScore = document.getElementById('id-rea-s');
const memoryScore = document.getElementById('id-mem-s');
const verbalScore = document.getElementById('id-verb-s');
const visualScore = document.getElementById('id-vis-s');

const reactionLabel = document.getElementById('rea-label');
const memoryLabel = document.getElementById('mem-label');
const verbalLabel = document.getElementById('ver-label');
const visualLabel = document.getElementById('vis-label');


fetch('./data.json')
.then(response => {
  if (response.ok) {
    return response.json();
  }
  throw new Error('Request failed!');
}, networkError => {
  console.log(networkError.message)
}).then((jsonResponse) => {
  renderData(jsonResponse);
})


function renderData(jsonResponse) {
  
  // console.log(jsonResponse);

  reactionLabel.innerHTML = jsonResponse[0].category;
  memoryLabel.innerHTML = jsonResponse[1].category;
  verbalLabel.innerHTML = jsonResponse[2].category;
  visualLabel.innerHTML = jsonResponse[3].category;

  reactionScore.innerHTML = jsonResponse[0].score;
  memoryScore.innerHTML = jsonResponse[1].score;
  verbalScore.innerHTML = jsonResponse[2].score;
  visualScore.innerHTML = jsonResponse[3].score;

  const calcScore = Math.floor((jsonResponse[0].score + jsonResponse[1].score + jsonResponse[2].score + jsonResponse[3].score) / jsonResponse.length);
  totalScore.innerHTML = calcScore; 

}


