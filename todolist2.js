function addItem2() {
    //pulls from value info from the todoinput element
    const newItem = document.createElement("div");
    newItem.innerHTML = document.getElementById("todoinput2").value;
    newItem.onclick = removeItem;
    document.getElementById("list4").appendChild(newItem);
    saveList4();
    }
//this removes the item you click on. by reomving this.
function removeItem() {
    document.getElementById("list4").removeChild(this);
}
//this saves when you close the list
function saveList4() {
    localStorage.storedList4 = document.getElementById("list4").innerHTML;
}
//this will load the list when you reload the page
function loadList4() {
document.getElementById("list4").innerHTML = localStorage.storedList4;
for(let i = 0; i < list.children.length; i++) {
    list4.children[i].onclick = removeItem; }
}

//checks for local stored info, and applys it
if(localStorage.storedList4) {
    loadList4();
}