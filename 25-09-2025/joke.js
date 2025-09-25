
function joke(){
    fetch('https://v2.jokeapi.dev/joke/Any?type=single')
    .then((result)=>result.json())
    .then((data)=>{
        console.log(data.joke)
        document.getElementById('myjoke').innerHTML=data.joke;
    })
}
joke()
