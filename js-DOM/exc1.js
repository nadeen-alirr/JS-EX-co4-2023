let mainDiv = document.createElement('div');

let form =document.createElement('form');

form.setAttribute('name', 'Form');

let div1Head=document.createElement('div');

let h1=document.createElement('h1');
h1.textContent=("Registration Form");
div1Head.appendChild(h1);
form.appendChild(div1Head);

//div label +input user
let DivTitleUsername=document.createElement('div');
DivTitleUsername.style.display = 'flex';
DivTitleUsername.style.flexDirection = 'column';

//label usr
let labelUser =document.createElement('label');
labelUser.textContent=("Username :");
DivTitleUsername.appendChild(labelUser);

//input user

let InputUser = document.createElement('input');
InputUser.type = 'text';
InputUser.required = true;
InputUser.id='user';
InputUser.style.width = '40%';
InputUser.style.marginTop = '1%';
InputUser.addEventListener('input', checkFormValidity);
DivTitleUsername.appendChild(InputUser);

//hide text(red) 1
let paragraphHide=document.createElement('p');
paragraphHide.className='hidden-para1';
paragraphHide.id='para1';
paragraphHide.style.color='red';
DivTitleUsername.appendChild(paragraphHide);
form.appendChild(DivTitleUsername);

form.appendChild(DivTitleUsername);
//.......................................
//div label +input pass
let DivTitlePassword=document.createElement('div');
DivTitlePassword.style.display = 'flex';
DivTitlePassword.style.flexDirection = 'column';

//label pass

let labelPassword =document.createElement('label');
labelPassword.textContent=("Password :");
DivTitlePassword.appendChild(labelPassword);

//input pass

let InputPassword = document.createElement('input');
InputPassword.type = 'Password';
InputPassword.id='pass'
InputPassword.required = true;
InputPassword.style.width = '40%';
InputPassword.style.marginTop = '1%';
InputPassword.addEventListener('input', checkFormValidity);
DivTitlePassword.appendChild(InputPassword);

//hide text(red) 2
let paragraphHide2=document.createElement('p');
paragraphHide2.id='para2';
paragraphHide2.className='hidden-para1';
paragraphHide2.style.color='red';
DivTitlePassword.appendChild(paragraphHide2);
form.appendChild(DivTitlePassword);
 //...........................................................

//div label +input ConfirmPass
let DivTitle_ConfirmPassword=document.createElement('div');
DivTitle_ConfirmPassword.style.display = 'flex';
DivTitle_ConfirmPassword.style.flexDirection = 'column';

//label ConfirmPass

let labelConfirmPassword =document.createElement('label');
labelConfirmPassword .textContent=("Confirm Password :");
DivTitle_ConfirmPassword.appendChild(labelConfirmPassword );

//input ConfirmPass

let Input_c_Password = document.createElement('input');
Input_c_Password.type = 'Password';
Input_c_Password.id ='pass2'
Input_c_Password.required = true;
Input_c_Password.style.width = '40%';
Input_c_Password.style.marginTop = '1%';
Input_c_Password.addEventListener('input', checkFormValidity);
DivTitle_ConfirmPassword.appendChild(Input_c_Password);

//hide text(red) 2
let paragraphHide3=document.createElement('p');

paragraphHide3.id='para3';
paragraphHide3.className='hidden-para1';
paragraphHide3.style.color='red';
DivTitle_ConfirmPassword.appendChild(paragraphHide3);
form.appendChild(DivTitle_ConfirmPassword);

//...................................................

//Button

let divButton=document.createElement('div');
divButton.style.display='flex';
divButton.style.flexDirection='column';
let button =document.createElement('input');
button.textContent=("Register");
button.type='submit';
button.style.color='white';
button.style.backgroundColor='#8DC6E9';
button.value='Register';
button.style.width= '40%';
button.disabled = true;
divButton.appendChild(button);
form.appendChild(divButton);


mainDiv.appendChild(form);
document.body.appendChild(mainDiv);


function checkFormValidity(){
    const validate_user=InputUser.checkValidity();
    const validate_pass=InputPassword.checkValidity();
    const validate_conf_pass=Input_c_Password.checkValidity();
    
    if(validate_user ){
        button.disabled=false;
    }
    else{
        button.disabled=true;
    }
    if(  validate_pass ){
        button.disabled=false;
    }
    else{
        button.disabled=true;
    }
    if( validate_conf_pass){
        button.disabled=false;
    }
    else{
        button.disabled=true;
    }
}
const users=[
    { username :"nadeen",password: 123456789, password_conf:123456789 },
    { username :"yousef",password: 987654321, password_conf:987654321},
    { username :"nareen",password: 2233445566, password_conf:2233445566},
    { username :"laren",password: 2143658799, password_conf:2143658799},
    { username :"sima",password: 998877665544,password_conf:998877665544},
    { username :"sabi",password: 112233445566, password_conf:112233445566},
]

button.onclick =function(){
    let name=document.getElementById("user").value;
    let password=document.getElementById("pass").value;
    let con_pass=document.getElementById("pass2").value;
    let txt='Required*';

    for (let user of users) {
        if (name ==user.username && password == user.password && con_pass == user.password_conf) {
            alert(`Welcome ${name}`);
            return; 
        }
             else{
                alert(' invalid user or password');
                return;
             }
                if(name === ''){
                    document.getElementById("para1").innerHTML=txt;
                }

                if(password === ''){
                    document.getElementById("para2").innerHTML=txt;
                }

                if(con_pass === ''){
                    document.getElementById("para3").innerHTML=txt;
                }
            }
    
    
        }
    

