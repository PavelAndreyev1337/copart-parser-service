const SELECTOR = {
    vehicleInformation: {
        stock: `body > section > main > section > div > div.data-container > div 
        > div > div > div.tile-body > ul > li:contains("Stock #:") 
        > span.data-list__value > strong`,
        sellingBranch: `body > section > main > section > div > div.data-container 
        > div > div > div > div.tile-body > ul > li:contains("Selling Branch:") 
        > span.data-list__value`,
        vin: `#VIN_VehInfo`,
        status: `body > section > main > section > div > div.data-container > div 
        > div > div > div.tile-body > ul > li:contains("VIN (Status):") > span > strong > span:nth-child(2)`,
        loss: `body > section > main > section > div > div.data-container > div 
        > div > div > div.tile-body > ul > li:contains("Loss:") > span.data-list__value`,
        primaryDamage: `body > section > main > section > div > div.data-container 
        > div > div > div > div.tile-body > ul > li:contains("Primary Damage:")
        > span.data-list__value`,
        secondDamage: `body > section > main > section > div > div.data-container 
        > div > div > div > div.tile-body > ul > li:contains("Secondary Damage:")
        > span.data-list__value`,
        titleSaleDoc: `body > section > main > section > div > div.data-container 
        > div > div > div > div.tile-body > ul > li:contains("Title/Sale Doc:")
        > span.data-list__value`,
        startCode: `#startcodeengine_novideo`,
        key: `#key_image`,
        odometer: `body > section > main > section > div > div.data-container > div 
        > div > div > div.tile-body > ul > li:contains("Odometer:") > span.data-list__value`,
        airbags: `body > section > main > section > div > div.data-container > div > div 
        > div > div.tile-body > ul > li:contains("Airbags:") > span.data-list__value`,
        photo: `#js-MoreActionDropdown > ul > li.dropdown-menu__item.dropdown-menu__item--download > a`,
    },
    photos: [
        `#js-DownloadImages`,
        `#js-MoreActionDropdown > a`,
        `#js-MoreActionDropdown > ul > li.dropdown-menu__item.dropdown-menu__item--download > a`,
    ],
    vechicleDescription: {
        vinStatus: `#waypoint-trigger > div.tile-body > ul > li:contains("VIN (Status):") > span:nth-child(2)`,
        vehicle: `#waypoint-trigger > div.tile-body > ul > li:contains("Vehicle:") > span.data-list__value`,
        bodyStyle: `#waypoint-trigger > div.tile-body > ul > li:contains("Body Style:") > span.data-list__value`,
        engine: `#ingine_image`,
        transmission: `#waypoint-trigger > div.tile-body > ul > li:contains("Transmission:") > span.data-list__value`,
        driverLineType: `#waypoint-trigger > div.tile-body > ul > li:contains("Drive Line Type:") > span.data-list__value`,
        fuelType: `#waypoint-trigger > div.tile-body > ul > li:contains("Fuel Type:") > span.data-list__value`,
        cylinders: `#waypoint-trigger > div.tile-body > ul > li:contains("Cylinders:") > span.data-list__value`,
        restraintSystem: `#waypoint-trigger > div.tile-body > ul > li:contains("Restraint System:") > span.data-list__value`,
        exteriorInterior: `#waypoint-trigger > div.tile-body > ul > li:contains("Exterior/Interior:") > span.data-list__value`,
        options: `#waypoint-trigger > div.tile-body > ul > li:contains("Options:") > span.data-list__value`,
        manufacturedIn: `#waypoint-trigger > div.tile-body > ul > li:contains("Manufactured In") > span.data-list__value`,
        vehicleClass: `#waypoint-trigger > div.tile-body > ul > li:contains("Vehicle Class:") > span.data-list__value`,
        model: `#waypoint-trigger > div.tile-body > ul > li:contains("Model:") > span.data-list__value`,
        series: `#waypoint-trigger > div.tile-body > ul > li:contains("Series:") > span.data-list__value`,
    },
    bidInformation: {
        buyNowPrice: `body > section > main > section > div > div.data-container > div > div > div.action-area 
        > div.action-area__content > div > div.action-area__secondary-info > ul > li:contains("Buy Now Price:") 
        > span.data-list__value`,
        startingBid: `body > section > main > section > div > div.data-container > div 
        > div > div.action-area > div.action-area__content > div > div.action-area__secondary-info 
        > ul > li:contains("Starting Bid:") > span.data-list__value`,
        currentBid: `body > section > main > section > div > div.data-container > div 
        > div > div.action-area > div.action-area__content > div > div.action-area__secondary-info 
        > ul > li:contains("Current Bid:") > span.data-list__value`,
    },
    saleInformation: {
        sellingBranch: `body > section > main > section > div > div.data-container > div 
        > div > div > div.tile-body > ul > li:contains("Selling Branch:") > span.data-list__value > a`,
        vehicleLocation: `body > section > main > section > div > div.data-container > div 
        > div > div > div.tile-body > ul > li:contains("Vehicle Location:") > div`,
        auctionDateAndTime: `body > section > main > section > div > div.data-container > div 
        > div > div > div.tile-body > ul > li:contains("Auction Date and Time:") > a`,
        laneRun: `body > section > main > section > div > div.data-container > div > div 
        > div > div.tile-body > ul > li:contains("Lane/Run #:") > span.data-list__value`,
        aisleStall: `body > section > main > section > div > div.data-container > div > div 
        > div > div.tile-body > ul > li:contains("Aisle/Stall:") > span.data-list__value`,
        actualCashValue: `body > section > main > section > div > div.data-container > div > div
        > div > div.tile-body > ul > li:contains("Actual Cash Value:") > span.data-list__value`,
        seller: `#SellerName_SaleInfo > span`,
        estimatedRepairCost: `body > section > main > section > div > div.data-container > div > div 
        > div > div.tile-body > ul > li:contains("Estimated Repair Cost:") > span.data-list__value`,
        titleSaleDoc: `body > section > main > section > div > div.data-container > div > div 
        > div > div.tile-body > ul > li:contains("Title/Sale Doc:") > span.data-list__value`,
        titleSaleDocBrand: `body > section > main > section > div > div.data-container > div > div 
         > div > div.tile-body > ul > li:contains("Title/Sale Doc Brand:") > span.data-list__value`,
    }
}

module.exports = SELECTOR