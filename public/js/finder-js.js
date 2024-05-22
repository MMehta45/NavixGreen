// https://www.energystar.gov/productfinder/advanced

var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.7.1.min.js';
document.getElementsByTagName('head')[0].appendChild(script);


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


        const light_card = document.createElement("div");
        light_card.className = "light-info-card card";

        const light_div = document.createElement("div");
        light_div.className = "card-body"
        
        const brand_name = document.createElement("h3");
        brand_name.innerHTML = model["brand_name"];
        brand_name.className = "brand-name card-title";

        const model_name = document.createElement("h4");
        model_name.innerHTML = model["model_name"];
        model_name.className = "model-name card-title";


        const light_data_div = document.createElement("div");
        light_data_div.className = "light-data-grid card-body";

        let light_data = [
            ["Model #", model["model_number"]],
            ["Brightness", model["brightness_lumens"] + " lumens"],
            ["Efficacy", model["efficacy_lumens_watt"] + " lumens / watt"],
            ["Wattage", model["wattage_equivalency_watts"] + " watts"]
        ];

        light_data.forEach(element => {
            let header = element[0];
            let data = element[1];

            const current_header = document.createElement("h3");
            current_header.innerHTML = header;
            current_header.className = "light-header";

            const current_data = document.createElement("p");
            current_data.innerHTML = data;
            current_data.className = "light-data";

            light_data_div.appendChild(current_header);
            light_data_div.appendChild(current_data);
        });


        
        light_div.appendChild(brand_name);
        light_div.appendChild(model_name);
        light_div.appendChild(light_data_div);

        light_card.appendChild(light_div)

        document.getElementById("light-card-grid").appendChild(light_card);
    }
    });
}

window.onload = function() {
    // for (let i = 0; i < 8; i++) {
    get_products(6);
    // }
  };

function refresh_data() {
    let grid_div = document.getElementById("light-card-grid");
    while(grid_div.firstChild){
        grid_div.removeChild(grid_div.firstChild);
    }
    get_products(6)
};
