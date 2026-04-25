let form = document.getElementById("form_section");

function handleSubmit(e) {
    e.preventDefault;
    let data = {
        Name: e.target.Name.value,
        Email: e.target.Email.value,
        Subject: e.target.Subject.value,
        Message: e.target.Message.value
    };

    const form_data = JSON.parse(localStorage.getItem("Formdata")) || [];
    form_data.push(data);
    localStorage.setItem("Formdata", JSON.stringify(form_data));
    form.reset();
    console.log(form_data);
}
