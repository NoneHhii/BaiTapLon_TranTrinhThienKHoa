var open = false;
function openA(contain) {
    // console.log(contain);
    var cont = document.querySelector(contain);
    var cnt = cont.querySelector('.content');
    var slt = cont.querySelector('.select-down');
    var btn = cont.querySelector('.btn');

    if(!open) {
        cnt.classList.toggle('active');
        cnt.classList.remove('actived');
        slt.style.display = 'block';
        btn.style.border = '1px solid blue';
    }else {
        cnt.classList.toggle('actived');
        cnt.classList.remove('active');
        slt.style.display = 'none';
        btn.style.border = '1px solid #caced1';
    }
    open =!open;
}