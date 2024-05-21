// https://www.energystar.gov/productfinder/advanced

var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.7.1.min.js';
document.getElementsByTagName('head')[0].appendChild(script);

product_count = 0

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

    const light_info_div = document.createElement("div");
    light_info_div.className = "light-info"
    light_info_div.id = "product" + String(product_count)
    console.log(light_info_div.id)
    product_count = product_count + 1
    
    const light_name = document.createTextNode(name)

    light_info_div.appendChild(light_name)

    // light_info_div.innerHTML = "hi";
    document.getElementById("api-container").appendChild(light_info_div);

    });
}

window.onload = function() {
    get_random_product();
  };
