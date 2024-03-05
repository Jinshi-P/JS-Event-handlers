let box= document.getElementById('box');

box.addEventListener('mouseover',()=>{
   

        box.style.backgroundColor='black'
    
});
box.addEventListener('mouseleave',()=>{
   
    box.style.backgroundColor='blue'
});
function clickHere(){
 fetch('./users.json')
 .then(res=>res.json())
 .then(data=>{
    document.getElementById('new').innerHTML="welcome  "+data.users[0].name
 });
}