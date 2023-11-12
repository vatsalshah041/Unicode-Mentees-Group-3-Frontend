fetch('https://jsonplaceholder.typicode.com/todos/1').then((data)=> data.json());
.then((objectData)=>{
objectData.forEach((todo)=>{
  console.log(todo.title);
});
});
.catch((error)=>{
  console.error("Error data",error);
});

 
