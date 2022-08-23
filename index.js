let names=document.getElementById('name')
let smal=document.querySelector('small')
let email=document.getElementById('email')
let num=document.getElementById('num')
let btn=document.getElementById('btns')
let pass=document.getElementById('pass')
let fail=document.getElementById('fail')
let ns=false
let el=false
let nm=false
names.addEventListener('blur',function(){
    let reg=/^[a-zA-Z]([0-9a-zA-Z]){2,10}$/
    let st=names.value
    if(reg.test(st)){
        console.log('VALID NAME')
        names.classList.remove('is-invalid')
        
        ns=true
    }
    else{
        console.log('NOT VALID NAME')
        names.classList.add('is-invalid')
        ns=false
 
    }
})
email.addEventListener('blur',function(){
    let reg=/^([_\.\-a-zA-Z0-9])+@([a-zA-Z]+)\.([a-zA-Z]){2,7}$/
    let st=email.value
    if(reg.test(st)){
        console.log('VALID EMAIL-ID')
        email.classList.remove('is-invalid')
        
        el=true
    }
    else{
        console.log('NOT VALID EMAIL')
        email.classList.add('is-invalid')
        el=false
 
    }
})
num.addEventListener('blur',function(){
    let reg=/^[0-9]{10}$/
    let st=num.value
    if(reg.test(st)){
        console.log('VALID NUMBER')
        num.classList.remove('is-invalid')
        
        nm=true
    }
    else{
        console.log('IN-VALID NUMBER')
        num.classList.add('is-invalid')
        nm=false
 
    }
})
btn.addEventListener('click',(e)=>{
    e.preventDefault()
    if(ns&&nm&&el){
        pass.classList.add('show')
        $('#fail').hide();
        $('#pass').show();
        
    }
    else{
        fail.classList.add('show')
        $('#pass').hide()
        $('#fail').show()
    }
})