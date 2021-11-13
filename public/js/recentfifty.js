function favoriteNFT(event) {
    console.log(event.currentTarget.dataset);
    var body = event.currentTarget.dataset
    fetch("/api/favorites", {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
    })
}

function displayOpenseaResults() {
    const options = { method: 'GET' };
    console.log(collections);
    const URL = 'https://api.opensea.io/api/v1/assets?order_by=sale_date&order_direction=desc&offset=0&limit=50&collection=' + collections.value
    console.log(URL);
    fetch(URL, options)
        .then(response => response.json())
        .then(response => {
            resetBoard(response.assets)
            console.log(response.assets)
        }
        )
    var recentsales;
    var timerId;
    var updateInterval;
    function resetBoard(assets) {
        var $list = $("#recentsales");
        $list.find(".recentsales").remove();
        recentsales = [];
        for (let i = 0; i < assets.length; i++) {
            recentsales.push(
                {
                    token_id: assets[i].token_id,
                    price_eth: parseFloat(assets[i].last_sale.total_price * 0.000000000000000001).toFixed(3),
                    price_usd: parseFloat((assets[i].last_sale.total_price * 0.000000000000000001).toFixed(3) * 4300).toFixed(2),
                    time: assets[i].last_sale.event_timestamp,
                    icon: assets[i].image_thumbnail_url,
                    address: assets[i].asset_contract.address,
                }
            )
        }
        for (let i = 0; i < recentsales.length; i++) {
            // var $item = $(
            //     "<tr class='recentsales'>" +
            //     "<td class='icon'>" + "<button onclick='' id='toggle' class='likebtn'><i class='far fa-heart'></i></button>" + "<img src ='" + recentsales[i].icon + "'>" + "</td>" +
            //     "<td class='token_id'>" + recentsales[i].token_id + "</td>" +
            //     "<td class='price_eth'>" + recentsales[i].price_eth + "</td>" +
            //     "<td class='price_usd'>" + recentsales[i].price_usd + "</td>" +
            //     "<td class='time'>" + recentsales[i].time + "</td>" +
            //     "</tr>"
            // );
            var tr = $("<tr class='recentsales'></tr>");
                var cellOne = $("<td class='icon'> <img src ='" + recentsales[i].icon + "'> </td>") 
                var favroiteButton = $("<button id='toggle' class='likebtn' data-address='" + recentsales[i].address + "' data-token_id='" + recentsales[i].token_id + "' data-icon='" + recentsales[i].icon + "'><i class='far fa-heart'></i></button>")
                favroiteButton.on("click", favoriteNFT)
                cellOne.prepend(favroiteButton)
                var cellTwo = $("<td class='token_id'>" + recentsales[i].token_id + "</td>")
                var cellThree = $("<td class='price_eth'>" + recentsales[i].price_eth + "</td>")
                var cellFour = $("<td class='price_usd'>" + recentsales[i].price_usd + "</td>")
                var cellFive = $("<td class='time'>" + recentsales[i].time + "</td>")
            // recentsales[1].$item = $item;
                tr.append(cellOne, cellTwo, cellThree, cellFour, cellFive)
            $list.append(tr);
        }
    }
}
displayOpenseaResults();

const collectionSelectElement = document.getElementById('collections')

collectionSelectElement.addEventListener('change', (event) => {
    displayOpenseaResults();
});

console.log(collectionSelectElement)