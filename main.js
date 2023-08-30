var typed=new Typed(".this-text",{
    strings: ["Java-Developer","Web-Designer","Cricket Enthusiast"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});
document.addEventListener("DOMContentLoaded", function () {
    const downloadButton = document.getElementById("downloadButton");

    downloadButton.addEventListener("click", function () {
        
        const pdfFilePath = 'resume.pdf';

        const a = document.createElement('a');
        a.href = pdfFilePath;
        a.download = 'resume.pdf'; 

        
        a.click();
    });
});