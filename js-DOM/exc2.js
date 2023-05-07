let head=document.createElement('h1');
head.textContent=("Heading");
document.body.appendChild(head);
let h3=document.createElement('h3');
document.body.appendChild(h3);

let p1 = document.createElement('p');
p1.textContent ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae optio dolor aliquam laboriosam laudantium qui non placeat at, sapiente facilis, aperiam error velit odit veritatis reprehenderit fugiat quos omnis nostrum? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati inventore doloribus, officiis quidem unde in distinctio ut nihil sit veritatis, voluptatibus quae. Hic facilis velit ducimus deserunt, quas quae nesciunt? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error repudiandae reiciendis exercitationem ut, amet quisquam doloremque saepe sequi accusamus quidem neque voluptas assumenda dicta tempore inventore porro dolor quod voluptatum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem nihil veniam neque cumque velit? Officia non in ipsam, ea doloribus perferendis consequatur vero laboriosam distinctio qui, suscipit tempore culpa. Vitae.";
document.body.appendChild(p1);

let link=document.createElement('a');
link.href=("https://google.com/");
link.textContent=("google");
link.style.textDecoration='none';
link.style.fontSize='30px';

document.body.appendChild(link);

let words = p1.textContent.split(' ');
let count=0;
for (let i = 0; i < words.length ; i++) {
  if (words[i].length >= 8) {
    count++;
    let span = document.createElement('span');
    span.textContent= (words[i]);
    span.style.backgroundColor = 'yellow';
    p1.innerHTML = p1.innerHTML.replace(new RegExp(words[i], 'g'), span.outerHTML);
  }
}
h3.innerHTML=`count of the words longer than eight char : ${count}`