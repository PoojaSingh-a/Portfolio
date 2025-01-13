emailjs.init("2D3rE0M2lm-_7_rNM")
document.getElementById("form").addEventListener("submit",function(event){
    event.preventDefault()
    sendMail()
})
function sendMail(){
    let params = {
        name : document.getElementById("fullname").value,
        email : document.getElementById("email").value,
        msg : document.getElementById("msg").value
    }
    emailjs.send("service_uimnbjl","template_wpu9vli",params).then(function(response){
        alert("Email sent succesfully!")
    })
    .catch(function(err){
        alert("Failed to send email! Try again.")
    })
}