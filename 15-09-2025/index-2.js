let correctAnswer;
let data;

async function quiz() {
  // fetch(`https://opentdb.com/api.php?amount=1`)
  //   .then((res) => res.json())
  //   .then((d) => (data = d));
  // console.log(data);
  let response = await fetch(`https://opentdb.com/api.php?amount=1`);
  data = await response.json();
 console.log(data);


  if (data) {
    randomArr = [
      data.results[0].correct_answer,
      data.results[0].incorrect_answers[0],
      data.results[0].incorrect_answers[1],
      data.results[0].incorrect_answers[2],
    ];
    for (let i = 0; i < randomArr.length; i++) {
      newRandomArr[i] = randomArr[Math.random() * randomArr.length];
    }

    //newRandomArr = randomArr.sort();
  }

  // document.getElementById("question").innerHTML = data.results[0].question;

  // document.getElementById("o1").innerHTML = newRandomArr[0];
  // document.getElementById("o2").innerHTML = newRandomArr[1];
  // document.getElementById("o3").innerHTML = newRandomArr[2];
  // document.getElementById("o4").innerHTML = newRandomArr[3];
}

function showData() {
  if (correctAnswer) {
    document.querySelector(".showans").innerHTML =
      "Correct Answer: " + correctAnswer;
  } else {
    document.querySelector(".showans").innerHTML =
      "Please wait, data not loaded yet.";
  }
}

quiz();
