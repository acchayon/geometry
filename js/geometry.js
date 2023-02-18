let serial = 0;

// --------------- triangle -------------------- //
document.getElementById('triangle-btn').addEventListener('click', function(){
    serial += 1;

    const productName = document.getElementById('triangle-name').innerText;
    const productFirstInput = document.getElementById('triangle-first-input').value;
    const productSecondInput = document.getElementById('triangle-second-input').value;
    const productArea = parseFloat(0.5 * productFirstInput * productSecondInput).toFixed(2);


    displayData(serial, productName, productArea);
       
})


// -------------- rectangle ------------------- //
document.getElementById('rectangle-btn').addEventListener('click', function(){
    serial += 1;

    const productName = document.getElementById('rectangle-name').innerText;
    const productFirstInput = document.getElementById('rectangle-first-input').value;
    const productSecondInput = document.getElementById('rectangle-second-input').value;
    const productArea = parseFloat(productFirstInput * productSecondInput).toFixed(2);
    



    displayData(serial, productName, productArea);
       
})

// -------------- parallelogram ------------------ //
document.getElementById('parallel-btn').addEventListener('click', function(){
    serial += 1;

    const productName = document.getElementById('parallelogram-name').innerText;
    const productFirstInput = document.getElementById('parallel-first-input').value;
    const productSecondInput = document.getElementById('parallel-second-input').value;
    const productArea = parseFloat(productFirstInput * productSecondInput).toFixed(2);

    showData(serial, productName, productArea);
       
})


// --------------- Rhombos -------------------- //
document.getElementById('rhombos-btn').addEventListener('click', function(){
    serial += 1;

    const productName = document.getElementById('rhombos-name').innerText;
    const productFirstInput = document.getElementById('rhombos-first-input').value;
    const productSecondInput = document.getElementById('rhombos-second-input').value;
    const productArea = parseFloat(0.5 * productFirstInput * productSecondInput).toFixed(2);

    displayData(serial, productName, productArea);
       
})

// ------------------- Pentagon --------------------- //
document.getElementById('pentagon-btn').addEventListener('click', function(){
    serial += 1;

    const productName = document.getElementById('pentagon-name').innerText;
    const productFirstInput = document.getElementById('pentagon-first-input').value;
    const productSecondInput = document.getElementById('pentagon-second-input').value;
    const productArea = parseFloat(0.5 * productFirstInput * productSecondInput).toFixed(2);

    displayData(serial, productName, productArea);
       
})


// ------------------- ellipse ----------------- //
document.getElementById('ellipse-btn').addEventListener('click', function(){
    serial += 1;

    const productName = document.getElementById('ellipse-name').innerText;
    const productFirstInput = document.getElementById('ellipse-first-input').value;
    const productSecondInput = document.getElementById('ellipse-second-input').value;
    const pi = 3.14;
    const productArea = parseFloat(pi * productFirstInput * productSecondInput).toFixed(2);

    showData(serial, productName, productArea);
       
})



// ----------- common function 1 ---------------- //
function displayData(serial, productName, productArea){
    const container = document.getElementById('table-container');
    

    const tr = document.createElement('tr');
    tr.innerHTML=`
    <td>${serial}</td>  
    <td>${productName}</td>   
    <td>${productArea}cm<sup>2</sup></td>
    <td><button class="btn btn-primary">Convert to m<sup>2</sup></button></td>`; 
    container.appendChild(tr);
}


// ---------------- common function 2 ---------------//
function showData(serial, productName, productArea){
    const container = document.getElementById('table-container');
    

    const tr = document.createElement('tr');
    tr.innerHTML=`
    <td>${serial}</td>  
    <td>${productName}</td>   
    <td>${productArea}cm<sup>2</sup></td>
    <td><button class="btn btn-primary">Convert to m<sup>2</sup></button></td>`; 
    container.appendChild(tr);
}


// ----------- blog btn for blog questions-------------------- //
document.getElementById('blog-btn').addEventListener('click', function(){
    window.location.href = 'blog.html';
})




// ----------- random bg color for all cards -------------- //

    function cardColor(getClass){
        const randomCard = document.getElementsByClassName(getClass);
        for(const card of randomCard){
            card.addEventListener('mouseover', function(){
                const red = Math.floor(Math.random() * 256);
                const green = Math.floor(Math.random() * 256);
                const blue = Math.floor(Math.random() * 256);
                card.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
            })
        }
    }

    cardColor('random-card');