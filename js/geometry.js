let serial = 0;

// --------------- triangle -------------------- //
document.getElementById('triangle-btn').addEventListener('click', function(){
    serial += 1;

    const productName = document.getElementById('triangle-name').innerText;
    const productFirstInput = document.getElementById('triangle-first-input').value;
    const productSecondInput = document.getElementById('triangle-second-input').value;
    const productArea = 0.5 * productFirstInput * productSecondInput;

    displayData(serial, productName, productArea);
       
})






// ----------- common function ---------------- //
function displayData(serial, productName, productArea){
    const container = document.getElementById('table-container');
    

    const tr = document.createElement('tr');
    tr.innerHTML=`
    <td>${serial}</td>  
    <td>${productName}</td>   
    <td>${productArea}cm<sup>2</sup></td>`; 
    container.appendChild(tr);
}

