fetch('https://jsonplaceholder.typicode.com/todos/1').then((data)=>
{  return data.json();
}).then((objectData)=>{
  objectData.forEach((todo)=>{
    console.log(todo.title);
  });
});
.catch((error)=>{
  console.error("Error fetching data:',error);
                });
