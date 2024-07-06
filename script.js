 let btns=document.querySelectorAll("button")

//  btns.style.fontSize="25px";

function insertvalue(value){
    document.getElementById('res').value+=value;
}
function clearvalue(){
    document.getElementById('res').value='';

}
function calculaterresult(){
    try{
        document.getElementById('res').value=eval(document.getElementById('res').value);
    }
    catch(error){
        document.getElementById('res').value="error";
    }

}