//Check if request status is OK
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

//Check if Pantry API path variable is used in the URL
pm.test("Pantry API path variable used", function () {
    pm.expect(String(pm.request.url)).to.include(pm.variables.get("pantry_api_path"));
});

//Check if Pantry ID variable is used in the URL
pm.test("Pantry id variable used", function () {
    pm.expect(String(pm.request.url)).to.include(pm.variables.get("pantry_id"));
});

//Check if Basket name variable is used in the URL
//The .search() method returns -1 by default if no match found for "basket" in the URL (e.g. for getting account details)
 if(String(pm.request.url).search("basket") != -1){
pm.test("Basket name variable used when needed", function () {
    pm.expect(String(pm.request.url)).to.include(pm.variables.get("basket_name"));
    });
}