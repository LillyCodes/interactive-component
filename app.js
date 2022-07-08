const allNums = document.querySelectorAll(".numbers");
const submitBtn = document.querySelector(".btn");
const thankEl = document.querySelector(".thankyou-container")
const msgEl = document.querySelector(".msg");

allNums.forEach((nums, i)=>{    //i is the index(the position of the numbers)
    nums.addEventListener("click", ()=>{
        let currentRating = i + 1
        msgEl.innerText = `You selected ${currentRating
} of 5`
        console.log(currentRating);
        allNums.forEach((nums, j)=>{    //j is the total numbers
            console.log(j + 1);
        if(currentRating >= j +  1){
            nums.style.backgroundColor = "#FF6600"
        }else{
            nums.style.backgroundColor = "#999999"
        }
        })
    })
})

submitBtn.addEventListener("click", ()=>{
   thankEl.classList.remove("active");
})