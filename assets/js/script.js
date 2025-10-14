function actionButton(){
    var button = document.querySelector('.button');
    button.classList.toggle('active');
}

function openNav(){
    document.querySelector(".nav").style.display = 'flex';
    document.querySelector(".closebtn").style.display = 'block';
}

function closeNav(){
    document.querySelector(".nav").style.display = 'none';
    document.querySelector(".closebtn").style.display = 'none';
}
