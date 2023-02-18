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


// -------------- rectangle ------------------- //
document.getElementById('rectangle-btn').addEventListener('click', function(){
    serial += 1;

    const productName = document.getElementById('rectangle-name').innerText;
    const productFirstInput = document.getElementById('rectangle-first-input').value;
    const productSecondInput = document.getElementById('rectangle-second-input').value;
    const productArea = productFirstInput * productSecondInput;

    displayData(serial, productName, productArea);
       
})

// -------------- parallelogram ------------------ //
document.getElementById('parallel-btn').addEventListener('click', function(){
    serial += 1;

    const productName = document.getElementById('parallelogram-name').innerText;
    const productFirstInput = document.getElementById('parallel-first-input').value;
    const productSecondInput = document.getElementById('parallel-second-input').value;
    const productArea = productFirstInput * productSecondInput;

    showData(serial, productName, productArea);
       
})


// --------------- Rhombos -------------------- //
document.getElementById('rhombos-btn').addEventListener('click', function(){
    serial += 1;

    const productName = document.getElementById('rhombos-name').innerText;
    const productFirstInput = document.getElementById('rhombos-first-input').value;
    const productSecondInput = document.getElementById('rhombos-second-input').value;
    const productArea = 0.5 * productFirstInput * productSecondInput;

    displayData(serial, productName, productArea);
       
})

// ------------------- Pentagon --------------------- //
document.getElementById('pentagon-btn').addEventListener('click', function(){
    serial += 1;

    const productName = document.getElementById('pentagon-name').innerText;
    const productFirstInput = document.getElementById('pentagon-first-input').value;
    const productSecondInput = document.getElementById('pentagon-second-input').value;
    const productArea = 0.5 * productFirstInput * productSecondInput;

    displayData(serial, productName, productArea);
       
})


// ------------------- ellipse ----------------- //




// ----------- common function 1 ---------------- //
function displayData(serial, productName, productArea){
    const container = document.getElementById('table-container');
    

    const tr = document.createElement('tr');
    tr.innerHTML=`
    <td>${serial}</td>  
    <td>${productName}</td>   
    <td>${productArea}cm<sup>2</sup></td>`; 
    container.appendChild(tr);
}


// ---------------- common function 2 ---------------//
function showData(serial, productName, productArea){
    const container = document.getElementById('table-container');
    

    const tr = document.createElement('tr');
    tr.innerHTML=`
    <td>${serial}</td>  
    <td>${productName}</td>   
    <td>${productArea}cm<sup>2</sup></td>`; 
    container.appendChild(tr);
}
