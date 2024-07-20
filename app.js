const submit = document.querySelector(".submit");
const ratingNumber=document.querySelectorAll(".btn");
let checkClick=false;
let index;
ratingNumber.forEach((e,i,a)=>{
    e.addEventListener("click",
            function(){
                e.classList.add("forClicked");
                checkClick=true;
                index=i;
            }
        )


})




submit.addEventListener("click",
    function(event){
        event.preventDefault();
        check();
    }
)
function check(){
    console.log(checkClick);
    if(checkClick){
        console.log("working");
        const firstcontent=document.querySelector(".container");
        firstcontent.classList.add("hide");
        const btncontent=document.querySelector("#ratingMeasure");
        btncontent.innerText=`You selected ${ratingNumber[index].innerText} out of 5`;
        const seconddiv=document.querySelector(".afterSubmit");
        seconddiv.classList.remove('hide')
        seconddiv.classList.add("show");
    }
}