let count = 0;

function updateCount() {
    count = count + 1;
    document.getElementById("secondCounter").innerHTML = count; 
    setTimeout(updateCount, 1000);
}
updateCount();