// https://www.energystar.gov/productfinder/advanced

var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.7.1.min.js';
document.getElementsByTagName('head')[0].appendChild(script);

function get_random_product(){
    $.ajax({
        url: "https://data.energystar.gov/resource/ebgj-qsf7.json",
        type: "GET",
        data: {"$limit" : 5000}

    }).done(function(data) {

    let rand = Math.floor(Math.random() * data.length);

    let model = data[rand];
    console.log(model);

    let name = model["brand_name"] + " " + model["model_number"];

    const para = document.createElement("p");
    para.innerHTML = name;
    document.getElementById("api-container").appendChild(para);

    });
}

window.onload = function() {
    get_random_product();
  };

function AddMultiple() {
    let img = document.getElementById('img');
    let imageURLS = [
        ""
    ];
    // Fetch random images and append to the DOM
    for (let i = 0; i < 5; i++) {
        let randomImage = new Image();
        randomImage.src = imageURLS[i];
        randomImage.alt = "Random Image";
        randomImage.width = 100;
        randomImage.height = 100;
        // Add right and left margin to the image
        randomImage.style.marginRight = "10px";
        randomImage.style.marginLeft = "10px";
        img.appendChild(randomImage);
    }
}

