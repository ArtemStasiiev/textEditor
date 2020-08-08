let boldBtn = document.querySelector('.boldBtn');
let italicBtn = document.querySelector('.italicBtn');
let underlineBtn = document.querySelector('.underlineBtn');
let linethroughBtn = document.querySelector('.linethroughBtn');
let text = document.querySelector('.text');

boldBtn.addEventListener('click', function(){
    if(text.style.fontWeight !== 'bold'){
        text.style.fontWeight = 'bold'
    } else {
        text.style.fontWeight = 'normal'
    }
});

italicBtn.addEventListener('click', function(){
    if(text.style.fontStyle !== 'italic'){
        text.style.fontStyle = 'italic'
    } else {
        text.style.fontStyle = 'normal'
    }
});

underlineBtn.addEventListener('click', function(){
    if(text.style.textDecoration !== 'underline'){
        text.style.textDecoration = 'underline'
    } else {
        text.style.textDecoration = 'none'
    }
});

linethroughBtn.addEventListener('click', function(){
    if(text.style.textDecoration !== 'line-through'){
        text.style.textDecoration = 'line-through'
    } else {
        text.style.textDecoration = 'none'
    }
});

let alignLeftBtn = document.querySelector('.alignLeftBtn');
let alignCenterBtn = document.querySelector('.alignCenterBtn');
let alignRightBtn = document.querySelector('.alignRightBtn');
let textCon = document.querySelector('.textCon');

alignLeftBtn.addEventListener('click', function(){
    textCon.style.justifyContent = 'flex-start';
});

alignCenterBtn.addEventListener('click', function(){
    textCon.style.justifyContent = 'center';
});

alignRightBtn.addEventListener('click', function(){
    textCon.style.justifyContent = 'flex-end';
});

let fontFamilyBtn = document.querySelector('.fontFamilyBtn');
let fontFamilyCon = document.querySelector('.fontFamilyCon');
fontFamilyBtn.addEventListener('click', function(){
    if(fontFamilyCon.style.display !== 'block'){
        fontFamilyCon.style.display = 'block'
        fontSizeCon.style.display = 'none'
    } else {
        fontFamilyCon.style.display = 'none'
    }
    for(let t=0; t<fontFamilyCon.children.length; t++){
        fontFamilyCon.children[t].onclick = function(){
            switch(t){
                case 0:
                    text.style.fontFamily = "Arial, Helvetica, sans-serif"
                    break;
                case 1:
                    text.style.fontFamily = "Georgia, 'Times New Roman', Times, serif"
                    break;
                case 2:
                    text.style.fontFamily = "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif"
                    break;
                case 3:
                    text.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                    break;
                case 4:
                    text.style.fontFamily = "'Times New Roman', Times, serif"
                    break;
                case 5:
                    text.style.fontFamily = "Verdana, Geneva, Tahoma, sans-serif"
                    break;
            }
        }
    }
}); 

let fontSizeBtn = document.querySelector('.fontSizeBtn');
let fontSizeCon = document.querySelector('.fontSizeCon');
fontSizeBtn.addEventListener('click', function(){
    if(fontSizeCon.style.display !== 'block'){
        fontSizeCon.style.display = 'block'
        fontFamilyCon.style.display = 'none'
    } else {
        fontSizeCon.style.display = 'none'
    }
    for(let r=0; r<fontSizeCon.children.length; r++){
        fontSizeCon.children[r].onclick = function(){
            switch(r){
                case 0:
                    text.style.fontSize = "12px"
                    break;
                case 1:
                    text.style.fontSize = "14px"
                    break;
                case 2:
                    text.style.fontSize = "16px"
                    break;
                case 3:
                    text.style.fontSize = "18px"
                    break;
                case 4:
                    text.style.fontSize = "20px"
                    break;
                case 5:
                    text.style.fontSize = "22px"
                    break;
                case 6: 
                    text.style.fontSize = "25px"
                    break;
                case 7:
                    text.style.fontSize = "30px"
                    break;
            }
        }
    }
}); 
//set font color
let paletteBtn = document.querySelector('.paletteBtn');
let shadowCon = document.querySelector('.shadowCon');
let textColorTable = document.querySelector('.textColorTable');
let cross = document.querySelector('.fa-times'); 
let backgroundColorTable = document.querySelector('.backgroundColorTable');
let imageBtn = document.querySelector('.imageBtn');
let cross1 = document.querySelector('.cross1');
let textColorFooterCon = document.querySelector('.textColorFooterCon');

paletteBtn.addEventListener('click', function(){
    shadowCon.style.display = 'block';
    textColorTable.style.display = 'block';
    backgroundColorTable.style.display = 'none';
    document.querySelector('.ulTable').style.display = 'none'
    document.querySelector('.olTable').style.display = 'none'
    document.querySelector('.createTableTable').style.display = 'none'

    for(let i=0; i<textColorFooterCon.children.length; i++){
        textColorFooterCon.children[i].onclick = function(){
            switch(i){
                case 0:
                    text.style.color = '#84BF74'
                    break;
                case 1:
                    text.style.color = '#82EF64'
                    break;
                case 2:
                    text.style.color = '#5DF932'
                    break;
                case 3:
                    text.style.color = '#25A900'
                    break;
                case 4:
                    text.style.color = '#0008BB'
                    break;
                case 5:
                    text.style.color = '#5E65FF'
                    break;
                case 6:
                    text.style.color = '#989CFF'
                    break;
                case 7: 
                    text.style.color = '#7E00C0'
                    break;
                case 8:
                    text.style.color = '#AC50DD'
                    break;
                case 9:
                    text.style.color = '#D183FB'
                    break;
                case 10:
                    text.style.color = '#F8FF00'
                    break;
                case 11: 
                    text.style.color = '#FFC500'
                    break;
                case 12:
                    text.style.color = '#FFA200'
                    break;
                case 13:
                    text.style.color = '#FF8300'
                    break;
                case 14: 
                    text.style.color = '#FF6000'
                    break;
                case 15:
                    text.style.color = '#FF2300'
                    break;
                case 16:
                    text.style.color = '#E3E3E3'
                    break;
                case 17:
                    text.style.color = '#BCBCBC'
                    break;
                case 18:
                    text.style.color = '#9A9A9A'
                    break;
                case 19:
                    text.style.color = '#707070'
                    break;
                case 20:
                    text.style.color = '#000000'
                    break;
            }
        }
    }
});
//close table for setting font color 
cross.addEventListener('click', function(){
    shadowCon.style.display = 'none';
    textColorTable.style.display = 'none';
});
//set background color
imageBtn.addEventListener('click', function(){
    shadowCon.style.display = 'block';
    backgroundColorTable.style.display = 'block';
    textColorTable.style.display = 'none';
    backgroundColorFooterCon.style.display = 'flex';
    chooseFileCon.style.display = 'none';
    imageBoxCon.style.display = 'none';
    document.querySelector('.ulTable').style.display = 'none'
    document.querySelector('.olTable').style.display = 'none'
    document.querySelector('.createTableTable').style.display = 'none'
    backgroundColorTable.style.height = '310px'

    for(let j=0; j<backgroundColorFooterCon.children.length; j++){
        backgroundColorFooterCon.children[j].onclick = function(){
            switch(j){
                case 0:
                    textCon.style.backgroundColor = '#84BF74'
                    break;
                case 1:
                    textCon.style.backgroundColor = '#82EF64'
                    break;
                case 2:
                    textCon.style.backgroundColor = '#5DF932'
                    break;
                case 3:
                    textCon.style.backgroundColor = '#25A900'
                    break;
                case 4:
                    textCon.style.backgroundColor = '#0008BB'
                    break;
                case 5:
                    textCon.style.backgroundColor = '#5E65FF'
                    break;
                case 6:
                    textCon.style.backgroundColor = '#989CFF'
                    break;
                case 7: 
                    textCon.style.backgroundColor = '#7E00C0'
                    break;
                case 8:
                    textCon.style.backgroundColor = '#AC50DD'
                    break;
                case 9:
                    textCon.style.backgroundColor = '#D183FB'
                    break;
                case 10:
                    textCon.style.backgroundColor = '#F8FF00'
                    break;
                case 11: 
                    textCon.style.backgroundColor = '#FFC500'
                    break;
                case 12:
                    textCon.style.backgroundColor = '#FFA200'
                    break;
                case 13:
                    textCon.style.backgroundColor = '#FF8300'
                    break;
                case 14: 
                    textCon.style.backgroundColor = '#FF6000'
                    break;
                case 15:
                    textCon.style.backgroundColor = '#FF2300'
                    break;
                case 16:
                    textCon.style.backgroundColor = '#E3E3E3'
                    break;
                case 17:
                    textCon.style.backgroundColor = '#BCBCBC'
                    break;
                case 18:
                    textCon.style.backgroundColor = '#9A9A9A'
                    break;
                case 19:
                    textCon.style.backgroundColor = '#707070'
                    break;
                case 20:
                    textCon.style.backgroundColor = '#000000'
                    break;
            }
        }
    }
});


let colorsBtn = document.querySelector('.colorsBtn');
let imagesBtn = document.querySelector('.imagesBtn');
let filesBtn = document.querySelector('.filesBtn');
let backgroundColorFooterCon = document.querySelector('.backgroundColorFooterCon');
let imageBoxCon = document.querySelector('.imageBoxCon');
let chooseFileCon = document.querySelector('.chooseFileCon');
colorsBtn.addEventListener('click', function(){
    backgroundColorFooterCon.style.display = 'flex';
    imageBoxCon.style.display = 'none';
    chooseFileCon.style.display = 'none';
    backgroundColorTable.style.height = '310px'
});
//set image as a background
imagesBtn.addEventListener('click', function(){
    backgroundColorFooterCon.style.display = 'none';
    imageBoxCon.style.display = 'flex';
    chooseFileCon.style.display = 'none';
    backgroundColorTable.style.height = '370px';

    for(let y=0; y<imageBoxCon.children.length; y++){
        imageBoxCon.children[y].onclick = function(){
            switch(y){
                case 0:
                    textCon.style.background = "url('mountains/1_STTTVL5jx050alkYv1iq9w.jpeg')"
                    break;
                case 1:
                    textCon.style.background = "url('mountains/feat-image-1-most-beautiful-mountains-in-the-world.jpg')"
                    break;
                case 2:
                    textCon.style.background = "url('mountains/mountains-962793_1920-750x400.jpg')"
                    break;
                case 3:
                    textCon.style.background = "url('mountains/mountains-clouds-forest-fog.jpg')"
                    break;
                case 4:
                    textCon.style.background = "url('mountains/pexels-photo-338936.jpeg')"
                    break;
                case 5:
                    textCon.style.background = "url('mountains/photo-1462651567147-aa679fd1cfaf.jfif')"
                    break;
                case 6:
                    textCon.style.background = "url('mountains/photo-1463584954611-9d8ebd80dfd2.jfif')"
                    break;
                case 7: 
                    textCon.style.background = "url('mountains/photo-1466444195508-74581059a147.jfif')"
                    break;
                case 8:
                    textCon.style.background = "url('mountains/photo-1543253539-58c7d1c00c8a.jfif')"
                    break;
            }
        }
    }
});
//open table <input type="file" to set background>
filesBtn.addEventListener('click', function(){
    backgroundColorFooterCon.style.display = 'none';
    imageBoxCon.style.display = 'none';
    chooseFileCon.style.display = 'flex';
    backgroundColorTable.style.height = '150px'
});
//set background using <input type="file">
document.querySelector(".chooseFileInp").onchange = function() {
    var url = URL.createObjectURL(this.files[0]);
    textCon.style.background = "url(" + url + ")";
  }

//close table for setting background 
cross1.addEventListener('click', function(){
    shadowCon.style.display = 'none';
    backgroundColorTable.style.display = 'none';
});

//open signIn table
let lockBtn = document.querySelector('.lockBtn');
let signInTable = document.querySelector('.signInTable');
let signInBtn = document.querySelector('.signInBtn');
let loginInp = document.querySelector('.loginInp');
let passwordInp = document.querySelector('.passwordInp');
let emptyValWarning1 = document.querySelector('.emptyValWarning1');
let emptyValWarning2 = document.querySelector('.emptyValWarning2');
lockBtn.addEventListener('click', function(){
    shadowCon.style.display = 'block';
    backgroundColorTable.style.display = 'none';
    textColorTable.style.display = 'none';
    signInTable.style.display = 'block'
    loginInp.value = '';  
    passwordInp.value = '';
    document.querySelector('.ulTable').style.display = 'none'
    document.querySelector('.olTable').style.display = 'none'
    document.querySelector('.createTableTable').style.display = 'none'
});
//validation of input values in sign in table
//login - admin, password - admin
signInBtn.addEventListener('click', function(){
    if(loginInp.value == '' && passwordInp.value == ''){
        emptyValWarning1.style.display = 'block';
        emptyValWarning2.style.display = 'block';
    }
    else if(loginInp.value !== 'admin' && passwordInp.value !== 'admin'){
        loginInp.style.border = '1px solid red'
        passwordInp.style.border = '1px solid red'
        emptyValWarning1.style.display = 'none';
        emptyValWarning2.style.display = 'none';
    } 
    else if(loginInp.value == 'admin' && passwordInp.value == 'admin'){
        loginInp.style.border = '1px solid black'
        passwordInp.style.border = '1px solid black'
        emptyValWarning1.style.display = 'none';
        emptyValWarning2.style.display = 'none';
        shadowCon.style.display = 'none';
        signInTable.style.display = 'none';
    }
});
//assign text.innerHTML to editTextarea.value
let editTextarea = document.querySelector('#editTextarea');
editTextarea.value = text.innerHTML;

//close container and open editContainer
let editBtn = document.querySelector('.editBtn');
let saveBtn = document.querySelector('.saveBtn');
let container = document.querySelector('.container');
let editContainer = document.querySelector('.editContainer')
editBtn.addEventListener('click', function(){
    container.style.display = 'none';
    editContainer.style.display = 'block';
});
//save changes from editContainer, close it and open container
saveBtn.addEventListener('click', function(){
    container.style.display = 'block';
    editContainer.style.display = 'none';
    text.innerHTML = editTextarea.value;
    olTable.style.display = 'none'
});

//open table
let tableBtn = document.querySelector('.tableBtn');
let createTableTable = document.querySelector('.createTableTable');
let cross2 = document.querySelector('.cross2');
tableBtn.addEventListener('click', function(){
    shadowCon.style.display = 'block';
    createTableTable.style.display = 'block';
    olTable.style.display = 'none'
    ulTable.style.display = 'none'
});
//close table
cross2.addEventListener('click', function(){
    shadowCon.style.display = 'none';
    createTableTable.style.display = 'none';
});
//create table
let resetBtn = document.querySelector('.resetBtn');
let createBtn = document.querySelector('.createBtn');
let tableForm = document.querySelector('#tableForm');
createBtn.addEventListener('click', function(){
    createTableTable.style.display = 'none';
    shadowCon.style.display = 'none';
    editContainer.style.display = 'none';
    container.style.display = 'block';
//create  table dynamically
    let countTRInp = document.querySelector('.countTRInp').value;
    let widthTDInp = document.querySelector('.widthTDInp').value;
    let widthInp = document.querySelector('.widthInp').value;
    let countTDInp = document.querySelector('.countTDInp').value;
    let heightTDInp = document.querySelector('.heightTDInp').value;
    let borderStyleSel = document.querySelector('#borderStyleSel').value;
    let borderColorSel = document.querySelector('#borderColorSel').value;
    let table = document.createElement('table');
    let tableBody = document.createElement('tbody');
    table.appendChild(tableBody);

    for(let a=0; a<countTRInp; a++){
        let tr = document.createElement('tr');
        tableBody.appendChild(tr);

        for(let b=0; b<countTDInp; b++){
            let td = document.createElement('td');
            td.style.width = widthTDInp + 'px';
            td.style.height = heightTDInp + 'px';
            td.style.borderWidth = widthInp + 'px';
            td.style.borderStyle = borderStyleSel;
            td.style.borderColor = borderColorSel;
            td.appendChild(document.createTextNode('TD'));
            tr.appendChild(td);
        }
    }
    text.appendChild(table);
    table.style.padding = '10px 0 0 0'
});
//reset input values from table creation table
resetBtn.addEventListener('click', function(){
    tableForm.reset()
});

//open ordered list table
let olBtn = document.querySelector('.olBtn');
let olTable = document.querySelector('.olTable');
let cross3 = document.querySelector('.cross3');
olBtn.addEventListener('click', function(){
    shadowCon.style.display = 'block';
    olTable.style.display = 'block';
    createTableTable.style.display = 'none';
    ulTable.style.display = 'none';
});
//close ordered list table
cross3.addEventListener('click', function(){
    shadowCon.style.display = 'none';
    olTable.style.display = 'none';
});
//create  unordered list
let resetOLBtn = document.querySelector('.resetOLBtn');
let createOLBtn = document.querySelector('.createOLBtn');
let createOLForm = document.querySelector('#createOLForm');
createOLBtn.addEventListener('click', function(){
    createTableTable.style.display = 'none';
    shadowCon.style.display = 'none';
    editContainer.style.display = 'none';
    container.style.display = 'block';
//create  unordered list dynamically
    let countLIInp = document.querySelector('.countLIInp').value;
    let markSelect = document.querySelector('#markSelect').value;
    let list = document.createElement('list');
    let listBody = document.createElement('lbody');
    list.appendChild(listBody);

    for(let i=0; i<countLIInp; i++){
        let li = document.createElement('li');
        listBody.appendChild(li);
        li.appendChild(document.createTextNode('LI'));
        li.style.listStyleType = markSelect;
    }
    text.appendChild(list);
    list.style.padding = '100px'
});
//reset input values from ordered list table
resetOLBtn.addEventListener('click', function(){
    createOLForm.reset()
});
//open unordered list table
let ulBtn = document.querySelector('.ulBtn');
let ulTable = document.querySelector('.ulTable');
let cross4 = document.querySelector('.cross4');
ulBtn.addEventListener('click', function(){
    shadowCon.style.display = 'block';
    ulTable.style.display = 'block';
    createTableTable.style.display = 'none';
    olTable.style.display = 'none';
});
//close unordered list table
cross4.addEventListener('click', function(){
    shadowCon.style.display = 'none';
    ulTable.style.display = 'none';
});
//create  unordered list
let resetULBtn = document.querySelector('.resetULBtn');
let createULBtn = document.querySelector('.createULBtn');
let createULForm = document.querySelector('#createULForm');

createULBtn.addEventListener('click', function(){
    createTableTable.style.display = 'none';
    shadowCon.style.display = 'none';
    editContainer.style.display = 'none';
    container.style.display = 'block';
//create unordered list dynamically
    let countLIInp1 = document.querySelector('.countLIInp1').value;
    let markSelectUL = document.querySelector('#markSelectUL').value;
    let list = document.createElement('list');
    let listBody = document.createElement('lbody');
    list.appendChild(listBody);

    for(let i=0; i<countLIInp1; i++){
        let li = document.createElement('li');
        listBody.appendChild(li);
        li.appendChild(document.createTextNode('LI'));
        li.style.listStyleType = markSelectUL;
    }
    text.appendChild(list);
    list.style.padding = '100px'
});
//reset input values from unordered list table
resetULBtn.addEventListener('click', function(){
    createULForm.reset()
});