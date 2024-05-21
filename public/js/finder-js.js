// https://www.energystar.gov/productfinder/advanced

var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.7.1.min.js';
document.getElementsByTagName('head')[0].appendChild(script);

product_count = 0

function get_products(amount) {
    $.ajax({
        url: "https://data.energystar.gov/resource/ebgj-qsf7.json",
        type: "GET",
        data: {"$limit" : 5000}

    }).done(function(data) {

    for (let i = 0; i < amount; i++) {
        let rand = Math.floor(Math.random() * data.length);
        let model = data[rand];
        console.log(model);


        const light_info_div = document.createElement("div");
        let current_div_id = "product" + String(product_count)
        light_info_div.className = "light-info card"
        light_info_div.id = current_div_id
        
        const model_name = document.createElement("p")
        model_name.innerHTML = model["model_name"] + "\n"

        const light_name = document.createElement("p")
        light_name.innerHTML = model["brand_name"] + "\n"

        const model_number = document.createElement("p")
        model_number.innerHTML = model["model_number"] + "\n"
        
        const brightness = document.createElement("p")
        brightness.innerHTML = model["brightness_lumens"]

        light_info_div.appendChild(light_name)
        light_info_div.appendChild(model_name)
        light_info_div.appendChild(model_number)
        light_info_div.appendChild(brightness)
        product_count ++

        document.getElementById("api-container").appendChild(light_info_div);
    }
    });
}

window.onload = function() {
    // for (let i = 0; i < 8; i++) {
    get_products(15);
    // }
  };
