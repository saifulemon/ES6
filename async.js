// fetch('http://api.icndb.com/jokes/random/5000')
// .then(response => console.log(response.json()))
// .then(data => console.log(data))

console.log('Hello World');


// async await
async function getJokes() {
    let response = await fetch('http://api.icndb.com/jokes/random/5000');
    let data = await response.json();
    return data;
}

getJokes().then(jokes => {
    console.log(jokes);
})