// function xyz (a) {
//     document.getElementById ('abc').value = a;
// }


function calculator (a){

    document.getElementById ('cl') .value += a;
}

function eql () {
    a = document.getElementById ('cl');
    a.value = eval(a.value);

}

function ac (){
    document.getElementById  ('cl').value=' ';
}

function slc (){
    a=document.getElementById  ('cl');
    a.value= a.value.slice(0,-1);

}

function mode (){
    a=document.getElementById  ('cl');
    a.value= a.value =+ '%'

}

