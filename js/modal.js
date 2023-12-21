const myButtonModals = document.querySelectorAll(".modal-send");
const myModals = document.querySelectorAll(".modal");
const myOverlays = document.querySelectorAll(".overlay");

//const closeBtn = document.querySelector(".close");


for(let index = 0; index < myButtonModals.length; index ++){
  myButtonModals[index].addEventListener("click", ()=>{
    myModals[index].style.display = "block";
    myOverlays[index].style.display = "block";

  })

}

for(let index = 0; index < myOverlays.length; index ++){
  myOverlays[index].addEventListener('click', ()=>{
    myModals[index].style.display = 'none';
    myOverlays[index].style.display = 'none';
  })
}



// closeBtn.addEventListener("click", function() {
 
//   myModal.style.display = "none";
//   myOverlay.style.display = "none";
// });



