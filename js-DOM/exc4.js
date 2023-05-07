const arrayNameScore=[];


function Add__toArray(){
    let name=document.getElementById("Name").value;
    let score=document.getElementById("Score").value;
    // console.log(name);
    // console.log(score);
   
    if(!isNaN(score) && score.trim() !== ''&& score>=0 &&  /^[A-Za-z\s]+$/.test(name) &&  name.trim() !== ''){
      let my_obj={
       Name : name,
       Score: score
      }
      arrayNameScore.push(my_obj);
      alert("added to array");
    }
    else{
      alert("invalid input");
    }
    Name.value=' ';
    Name.focus();
    Score.value=' ';
    Score.focus();
}

function Display__Result(){


    let averageElement=document.getElementById("average");
    let High_scoreElement=document.getElementById("score");
    let sum=0;
    let large_element=arrayNameScore[0].Score;
    let large_score_person=arrayNameScore[0].Name;

    for(let person of arrayNameScore){
        // console.log(person.Name+ " " +person.Score );
        if(parseInt(person.Score)>=large_element){
            large_element= parseInt(person.Score);
            large_score_person=person.Name;
        }
        sum += parseInt(person.Score);
        }
    let average=sum/arrayNameScore.length;
    averageElement.innerHTML+= `Average score : ${average}`;
    High_scoreElement.innerHTML+=`High score : ${large_score_person} with score ${large_element}`;
}

function Display__score(){
    let div_table=document.getElementById("TableScore");
    for(let person of arrayNameScore){

        let name=person.Name;
        let score=person.Score;
        div_table.innerHTML+=`<tr id="Row__data">
        <td id="name__data">${name}</td>
        <td id="score__data">${score}</td>
   </tr>`
    }
}