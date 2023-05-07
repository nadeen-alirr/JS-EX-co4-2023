let form=document.createElement('form');
form.id="form1";
form.className="LoginForm";
form.setAttribute('name' ,'RegForm');

form.setAttribute('method' ,'post');


let br=document.createElement('br');

let h1=document.createElement('h1');
h1.textContent=("Login Form");
form.appendChild(h1);
//username title 

let div1=document.createElement('div');
let label1=document.createElement('label');
label1.textContent=("Username : ");
div1.appendChild(label1);


//input  (username)

let inputUser=document.createElement('input');
inputUser.setAttribute('id',"inputUser");
inputUser.setAttribute('className',"");
inputUser.setAttribute('name','Name');
inputUser.style.width="20%";
inputUser.required = true;
div1.appendChild(inputUser);
form.appendChild(div1);
form.appendChild(br);

//password title
let div2=document.createElement('div');
let label2=document.createElement('label');
label2.textContent=("Password : ");
div2.appendChild(label2);

//input  (password)
let username=document.createElement('input');
username.setAttribute('id','user');
username.setAttribute('className','userInput');
username.setAttribute('name','Password');
username.style.width="20%";
username
div2.appendChild(username);
form.appendChild(div2);


//button

let div3=document.createElement('div');
let button1=document.createElement('input');
button1.textContent=("Login");
button1.setAttribute('id','button-submit');
button1.setAttribute('className','button1');
button1.setAttribute('type','submit');
button1.setAttribute('value','Submit')
div3.appendChild(button1);
div3.style.paddingTop="1%";
form.appendChild(div3);
document.body.appendChild(form);


const users=[
    { username :"nadeen",password: 123456789},//0
    { username :"yousef",password: 987654321},//1
    { username :"nareen",password: 2233445566},//2
    { username :"laren",password: 2143658799},//3
    { username :"sima",password: 998877665544},//4
    { username :"sabi",password: 112233445566},//5
]

button1.onclick =function(){
let name = document.forms["RegForm"]["Name"].value;
let password = document.forms["RegForm"]["Password"].value;
  for( user of users){
    if(user.username ==name && user.password == password){
        alert(`welcome ${name}`);
      return;
    }
    else{
        alert('invalid username or password');
        return;
    }
  }
}



