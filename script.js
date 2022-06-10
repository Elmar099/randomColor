let btn = document.getElementById('change')
let count = document.getElementById('count')
let dis = 0
    btn.addEventListener('click', function(){
        dis += 1
        count.innerHTML = dis;
        const randomColor = Math.ceil(Math.random()*16777215).toString(16);
        document.body.style.backgroundColor = "#" + randomColor;
        color.innerHTML = "#" + randomColor; 
    })
