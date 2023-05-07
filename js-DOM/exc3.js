function Add_Item(){
    let item =document.getElementById("input__items").value;
    //console.log(item);
    let container_item=document.getElementById("container__Item");
    if(item.trim() === ''){
       return;
    }
    else{
        container_item.innerHTML += 
        `<li style="padding-top: 1%;">${item}    <button value="Delete" id="delete__item" onclick="DeleteItem(this)">Delete</button></li>
        <br> `
    }
    input__items.value =' ';
    input__items.focus();
}

function DeleteItem(button) {
    button.parentNode.remove();
}