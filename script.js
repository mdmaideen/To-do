  let add = document.getElementById('add');
let todoList = document.getElementById('todoList');
let input = document.getElementById('input');


let todos =[];

window.onload = ()=>{
    todos =  JSON.parse(localStorage.getItem('todos')) || []
    todos.forEach(todo=>addtodo(todo))
 }
 
add.addEventListener('click',()=>{
    todos.push(input.value)
    localStorage.setItem('todos',JSON.stringify(todos))
    console.log(todos)
    addtodo(input.value)
    input.value=''
})

function addtodo(todo  ){ //todo  
   let para = document.createElement('h4');
   para.innerText=todo  ;//todo
   todoList.appendChild(para)
  
   para.addEventListener('click',()=>{
    para.style.textDecoration = 'line-through'
    remove(todo)
})
   para.addEventListener('dblclick',()=>{
   todoList.removeChild(para)
    remove(todo)
    
   })
}


function remove(todo){
    let  index = todos.indexOf(todo)
    if(index > -1){
         todos.splice(index,1);
}
localStorage.setItem('todos',JSON.stringify(todos))
}