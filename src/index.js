const menuIcon = document.getElementById("btn");
const menu = document.getElementById("menu");

menuIcon.addEventListener("click",()=>{
    menu.classList.toggle("hidden")
})


const cursor = new MouseFollower({
    container: document.body,
    speed: 0.3
});


const btt = document.getElementById("btt");

btt.addEventListener("click", e=>{
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const description = document.getElementById("d").value;
    const body = "name : " + name +"<br/> email : " + email + "<br/> description :" +description;  

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "deepanb777@gmail.com",
        Password : "1C1323F3E8FEBD1F48539D07A71449FB0C81",
        To : 'deepanb777@gmail.com',
        From : email,
        Subject : "This is the subject",
        Body : body
    }).then(
      message => alert(message)
    );

})