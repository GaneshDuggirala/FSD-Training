

async function weather() {
  var city = document.getElementById('city').value;
  let response = await fetch(`https://wttr.in/${city}?format=j1`);
  let data = await response.json();
  document.getElementById('cityname').innerText=`${city}`;
  document.getElementById('show').innerText=`${data.current_condition[0]['FeelsLikeC']}`;
  document.getElementById('humidity').innerText=`${data.current_condition[0]['humidity']}`;
  document.getElementById('sunrise').innerText=`${data.weather[0]['astronomy'][0]['sunrise']}`;
  document.getElementById('sunset').innerText=`${data.weather[0]['astronomy'][0]['sunset']}`;
}
