// https://www.energystar.gov/productfinder/advanced

var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.7.1.min.js';
document.getElementsByTagName('head')[0].appendChild(script);


function get_lights(amount) {
    $.ajax({
        url: "https://data.energystar.gov/resource/ebgj-qsf7.json",
        type: "GET",
        data: {"$limit" : 5000}

    }).done(function(data) {

    for (let i = 0; i < amount; i++) {
        let rand = Math.floor(Math.random() * data.length);
        let model = data[rand];


        const light_card = document.createElement("div");
        light_card.className = "custom-info-card card";

        const light_div = document.createElement("div");
        light_div.className = "card-body"
        
        const brand_name = document.createElement("h3");
        brand_name.innerHTML = model["brand_name"];
        brand_name.className = "brand-name card-title";

        const model_name = document.createElement("h4");
        model_name.innerHTML = model["model_name"];
        model_name.className = "model-name card-title";


        const light_data_div = document.createElement("div");
        light_data_div.className = "custom-data-grid card-body";

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
            current_header.className = "custom-header";

            const current_data = document.createElement("p");
            current_data.innerHTML = data;
            current_data.className = "custom-data";

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

// window.onload = function() {
//     // for (let i = 0; i < 8; i++) {
//     get_lights(6);
//     // }
//   };

function refresh_lights() {
    let grid_div = document.getElementById("light-card-grid");
    while(grid_div.firstChild){
        grid_div.removeChild(grid_div.firstChild);
    }
    get_lights(6)
};


function get_washers(amount) {
    $.ajax({
        url: "https://data.energystar.gov/resource/bghd-e2wd.json",
        type: "GET",
        data: {"$limit" : 5000}

    }).done(function(data) {

    for (let i = 0; i < amount; i++) {
        let rand = Math.floor(Math.random() * data.length);
        let model = data[rand];

        const washer_card = document.createElement("div");
        washer_card.className = "custom-info-card card";

        const washer_div = document.createElement("div");
        washer_div.className = "card-body";
        
        const brand_name = document.createElement("h3");
        brand_name.innerHTML = model["brand_name"];
        brand_name.className = "brand-name card-title";

        const model_name = document.createElement("h4");
        model_name.innerHTML = model["model_number"];
        model_name.className = "model-name card-title";


        const washer_data_div = document.createElement("div");
        washer_data_div.className = "custom-data-grid card-body";

        let washer_data = [
            ["Volume", model["volume_cubic_feet"] + " ft&#179"],
            ["Annual Energy Use", model["annual_energy_use_kwh_year"] + " kWh / yr"],
            ["Annual Water Use", model["annual_water_use_gallons_year"] + " gallons / yr"],
        ];

        washer_data.forEach(element => {
            let header = element[0];
            let data = element[1];

            const current_header = document.createElement("h3");
            current_header.innerHTML = header;
            current_header.className = "custom-header";

            const current_data = document.createElement("p");
            current_data.innerHTML = data;
            current_data.className = "custom-data";

            washer_data_div.appendChild(current_header);
            washer_data_div.appendChild(current_data);
        });


        
        washer_div.appendChild(brand_name);
        washer_div.appendChild(model_name);
        washer_div.appendChild(washer_data_div);

        washer_card.appendChild(washer_div)

        document.getElementById("washer-card-grid").appendChild(washer_card);
    }
    });
}

function refresh_washers() {
    let grid_div = document.getElementById("washer-card-grid");
    while(grid_div.firstChild){
        grid_div.removeChild(grid_div.firstChild);
    }
    get_washers(6)
};



function get_dryers(amount) {
    $.ajax({
        url: "https://data.energystar.gov/resource/t9u7-4d2j.json",
        type: "GET",
        data: {"$limit" : 5000}

    }).done(function(data) {

    for (let i = 0; i < amount; i++) {
        let rand = Math.floor(Math.random() * data.length);
        let model = data[rand];
        console.log(model);

        const dryer_card = document.createElement("div");
        dryer_card.className = "custom-info-card card";

        const dryer_div = document.createElement("div");
        dryer_div.className = "card-body";
        
        const brand_name = document.createElement("h3");
        brand_name.innerHTML = model["brand_name"];
        brand_name.className = "brand-name card-title";

        const model_name = document.createElement("h4");
        model_name.innerHTML = model["model_name"];
        model_name.className = "model-name card-title";


        const dryer_data_div = document.createElement("div");
        dryer_data_div.className = "custom-data-grid card-body";

        let dryer_data = [
            ["Model #", model["model_number"]],
            ["Capacity", model["drum_capacity_cu_ft"] + " ft&#179"],
            ["Annual Energy Use", model["estimated_annual_energy_use_kwh_yr"] + " kWh / yr"],
            ["CEF", model["combined_energy_factor_cef"]],
        ];

        dryer_data.forEach(element => {
            let header = element[0];
            let data = element[1];

            const current_header = document.createElement("h3");
            current_header.innerHTML = header;
            current_header.className = "custom-header";

            const current_data = document.createElement("p");
            current_data.innerHTML = data;
            current_data.className = "custom-data";

            dryer_data_div.appendChild(current_header);
            dryer_data_div.appendChild(current_data);
        });


        
        dryer_div.appendChild(brand_name);
        dryer_div.appendChild(model_name);
        dryer_div.appendChild(dryer_data_div);

        dryer_card.appendChild(dryer_div)

        document.getElementById("dryer-card-grid").appendChild(dryer_card);
    }
    });
}

function refresh_dryers() {
    let grid_div = document.getElementById("dryer-card-grid");
    while(grid_div.firstChild){
        grid_div.removeChild(grid_div.firstChild);
    }
    get_dryers(6)
};