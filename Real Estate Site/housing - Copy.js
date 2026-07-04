 const text = "YOUR HOSPITALITY IS OUR CONCERN  • ";
const circle = document.getElementById("circleText");
const radius = 100;

text.split("").forEach((char, i, arr) => {
    const span = document.createElement("span");
    span.innerText = char;
    const angle = (i / arr.length) * 360;

    span.style.transform =
        `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`;

    circle.appendChild(span);
});

 // table show
    document.querySelectorAll(".morelist").forEach(button => {
       button.addEventListener("click", function(){
        const table = this.nextElementSibling;
        if(table.style.display === "none" || table.style.display === ""){
            table.style.display = "table";
        }
        else{
            table.style.display = "none";
        }
       }); 
    });

    // Image slider for products (simple rotation)
        const productImages = document.querySelectorAll('.service-img');
        let currentImageIndex = 0;

        function rotateImages() {
            productImages.forEach((img, index) => {
                img.style.opacity = index === currentImageIndex ? '1' : '0.5';
            });
            currentImageIndex = (currentImageIndex + 1) % productImages.length;
        }

        setInterval(rotateImages, 1000);