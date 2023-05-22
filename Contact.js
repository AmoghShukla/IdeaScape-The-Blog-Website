function sendmail(){
    var params = {
        name: document.getElementById('name'),
        phone: document.getElementById('phone'),
        email: document.getElementById('E-mail'),
    }

    const serviceID = "service_l8aw0je";
    const templateID = "template_mlj0fwa";

    emailjs
        .send(serviceID, templateID, params)
        .then((res) => {
            document.getElementById('name').value = '';
            document.getElementById('E-mail').value = '';
            document.getElementById('text').value = '';
            console.log(res);
            alert("your message sent successfully");
        })
        .catch((err) => console.log(err));
}