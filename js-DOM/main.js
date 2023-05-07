let div=document.createElement('div');
div.className="my_class";
div.id="div1";

let p=document.createElement('p');
p.textContent=("about me");
p.style.width="5%";
div.appendChild(p);
p.id="paragraph1";
p.style.backgroundColor='yellow'

let h1=document.createElement('h1');
h1.textContent=("my name is nadeen");
div.appendChild(h1);

// var br = document.createElement("br");
// div.appendChild(br);

let h2=document.createElement('h1');
h2.textContent=("studied cis");
div.appendChild(h2);

let button=document.createElement('button');
button.textContent=("click me");


div.appendChild(button);
document.body.appendChild(div);

button.onclick = function(){
    let changeColorP=document.getElementById("paragraph1");
    changeColorP.style.backgroundColor='red';
}
//let name=document.createElement('p');
