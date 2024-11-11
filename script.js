const output= document.querySelector("#output")
const btn = document.querySelectorAll('.col')
let ans=''
btn.forEach((e)=>{
console.log(e);


e.addEventListener('click',(btn)=>{

if(btn.target.textContent.trim()=== 'AC'){
    ans=''
    output.textContent=ans
}

else if(btn.target.textContent.trim()=== 'DEL'){
    ans = ans.substring(0, str.length - 1);
    output.textContent=ans

}

else if(btn.target.textContent.trim()=== '='){
    ans=eval(ans)
    output.textContent=ans
}
else{
    console.log('clicked');
    ans+=btn.target.textContent.trim()
    output.textContent=ans
}

// const number= Number(btn.textContent)
//   const currentValue=Number(output.textContent)
//         output.textContent=currentValue+number


}


)


})