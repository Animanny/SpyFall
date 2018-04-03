document.getElementById('creategame').onclick = function () {
    var x = document.getElementById('start');
    var y = document.getElementById('create');
    x.style.display = "none";
    y.style.display = "block";

}

document.getElementById('joingame').onclick = function () {
    var x = document.getElementById('start');
    var y = document.getElementById('join');
    x.style.display = "none";
    y.style.display = "block";

}

document.getElementById('back1').onclick = function () {

    document.getElementById('create').style.display = "none";
    document.getElementById('join').style.display = "none";
    document.getElementById('start').style.display = "block";

}

document.getElementById('back2').onclick = function () {

    document.getElementById('create').style.display = "none";
    document.getElementById('join').style.display = "none";
    document.getElementById('start').style.display = "block";

}
