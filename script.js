
//   const form = document.querySelector(".formlarem")  
// function cliqueiNoBottao(){
// form.style.left = "50%"
// form.style.transform = "translateX(-50%)"

// }

const form = document.querySelector('.fale-conosco')
    const background = document.querySelector('.mascara-form')
    function cliqueiNoBottao(){
    // function showForm(){
        form.style.left = '50%'
        form.style.transform = 'translateX(-50%)'
        background.style.visibility = 'visible'
    // } 
}
    function hideForm() {
        form.style.left = '-330px'
        form.style.transform = 'translateX(0)'
        background.style.visibility = 'hidden'
    }