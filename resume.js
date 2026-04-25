document.getElementById("resume_btn")
.addEventListener("click", function () {
    const link = document.createElement("a");
    link.href = "./resume/SARAHANA_PANDE_RESUME.pdf";
    link.download = "SARAHANA_PANDE_RESUME.pdf";
    link.click();
});