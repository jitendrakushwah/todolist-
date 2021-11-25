'use strict'
//target element; 
var maintododiv = document.getElementById('todos');
var addbutton = document.querySelector(".add-item");
var input = document.querySelector('.todo-input');
//add items;

addbutton.addEventListener('click', function (e) {
    
    
    
    if (input.value) {
        //create element;
        
        
        var ultag = document.createElement('ul');
        ultag.classList.add('ultodo');
        
        var creatediv = document.createElement('div');
        creatediv.classList.add('create-todo-div');
        
        var createlitag = document.createElement('li');
        createlitag.classList.add('create-todo-litag');
        createlitag.innerHTML = input.value;


        var buttondiv = document.createElement('div');
        buttondiv.classList.add('button');

        var editbutton = document.createElement('button');
        editbutton.classList.add('edittodo');
        editbutton.innerHTML = 'Edit';
        
        
        var deletebutton = document.createElement('button');
        deletebutton.classList.add('deletetodo');
        deletebutton.innerHTML = 'delete';
        
        
        //appendchild element;
        ultag.appendChild(creatediv);
        creatediv.appendChild(createlitag);
        creatediv.appendChild(buttondiv);
        buttondiv.appendChild(editbutton);
        buttondiv.appendChild(deletebutton);
        
        maintododiv.appendChild(ultag);
        input.value = '';
        
        
    }
    
    //delete items
    deletebutton.addEventListener('click',function(e){
        let li = this.parentElement;
        let ultag = li.parentElement;
        ultag.remove(ultag)
        //console.log(edit)
        
    })
    
    
    
    //edit here
    let edit = document.getElementsByClassName("button");
    // console.log(edit.length)
    for (let i = 0; i < edit.length; i++) {
        
        edit[i].addEventListener('click', function () {
            console.log(createlitag.innerHTML)
            
            document.getElementById("kush").value = createlitag.innerText;
            //let addbtn = document.getElementById('addbtn');
            //let savebtn=document.getElementById('savebtn');
            let savebtn = document.getElementById("savebtn");

            addbtn.style.display = "none"
            savebtn.style.display = "block"



            //edit value save here;              
            savebtn.onclick = function (e) {


                createlitag.innerHTML = document.getElementById('kush').value;


                input.value = "";

                addbtn.style.display = "block"
                savebtn.style.display = "none"

            }

        });
    }

})





//enter key ;

let input2 = document.getElementById("kush");
input2.onkeyup = function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();

        document.getElementById("addbtn").click();
    }
};





