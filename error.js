fetch('https://jsonplaceholder.typicode.com/todos/')
.then((data)=>{return data.json();})
.then((objectData)=>{objectData.map((element) =>{console.log(element.title)})})