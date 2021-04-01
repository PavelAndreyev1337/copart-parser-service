const SELECTOR = {
    vehicleInformation: {
        stock: `body > section > main > section:nth-child(17) > div > div.data-container > div 
        > div:nth-child(1) > div:nth-child(1) > div.tile-body > ul > li:nth-child(1) 
        > span.data-list__value > strong`,
        sellingBranch: `body > section > main > section:nth-child(17) > div > div.data-container 
        > div > div:nth-child(1) > div:nth-child(1) > div.tile-body > ul > li:nth-child(2) 
        > span.data-list__value`,
        vin: `#VIN_VehInfo`,
        status: `body > section > main > section:nth-child(17) > div > div.data-container > div 
        > div:nth-child(1) > div:nth-child(1) > div.tile-body > ul > li:nth-child(3) > span:nth-child(2) > strong > span:nth-child(2)`,
        loss: `body > section > main > section:nth-child(17) > div > div.data-container > div 
        > div:nth-child(1) > div:nth-child(1) > div.tile-body > ul > li:nth-child(4) 
        > span.data-list__value`,
        primaryDamage: `body > section > main > section:nth-child(17) > div > div.data-container 
        > div > div:nth-child(1) > div:nth-child(1) > div.tile-body > ul > li:nth-child(5) 
        > span.data-list__value`,
        secondDamage: `body > section > main > section:nth-child(17) > div > div.data-container 
        > div > div:nth-child(1) > div:nth-child(1) > div.tile-body > ul > li:nth-child(6) 
        > span.data-list__value`,
        titleSaleDoc: `body > section > main > section:nth-child(17) > div > div.data-container 
        > div > div:nth-child(1) > div:nth-child(1) > div.tile-body > ul > li:nth-child(7) 
        > span.data-list__value`,
        startCode: `#startcodeengine_novideo`,
        key: `#key_image`,
        odometer: `body > section > main > section:nth-child(17) > div > div.data-container > div 
        > div:nth-child(1) > div:nth-child(1) > div.tile-body > ul > li:nth-child(10) > span.data-list__value`,
        airbags: `body > section > main > section:nth-child(17) > div > div.data-container > div > div:nth-child(1) 
        > div:nth-child(1) > div.tile-body > ul > li:nth-child(11) > span.data-list__value`
    },
    photos: [
        `#js-MoreActionDropdown > a`,
        `#js-MoreActionDropdown > ul > li.dropdown-menu__item.dropdown-menu__item--download > a`,
    ],
    vechicleDescription: {
        vinStatus: `#waypoint-trigger > div.tile-body > ul > li:nth-child(1) > span:nth-child(2)`,
        vehicle: `#waypoint-trigger > div.tile-body > ul > li:nth-child(2) > span.data-list__value`,
        bodyStyle: `#waypoint-trigger > div.tile-body > ul > li:nth-child(3) > span.data-list__value`,
        engine: `#engine_novideo`,
        transmission: `#waypoint-trigger > div.tile-body > ul > li:nth-child(5) > span.data-list__value`,
        driverLineType: `#waypoint-trigger > div.tile-body > ul > li:nth-child(6) > span.data-list__value`,
        fuelType: `#waypoint-trigger > div.tile-body > ul > li:nth-child(7) > span.data-list__value`,
        cylinders: `#waypoint-trigger > div.tile-body > ul > li:nth-child(8) > span.data-list__value`,
        restraintSystem: `#waypoint-trigger > div.tile-body > ul > li:nth-child(9) > span.data-list__value`,
        exteriorInterior: `#waypoint-trigger > div.tile-body > ul > li:nth-child(10) > span.data-list__value`,
        options: `#waypoint-trigger > div.tile-body > ul > li:nth-child(11) > span.data-list__value`,
        manufacturedIn: `#waypoint-trigger > div.tile-body > ul > li:nth-child(12) > span.data-list__value`,
        vehicleClass: `#waypoint-trigger > div.tile-body > ul > li:nth-child(13) > span.data-list__value`,
        model: `#waypoint-trigger > div.tile-body > ul > li:nth-child(14) > span.data-list__value`,
        series: `#waypoint-trigger > div.tile-body > ul > li:nth-child(15) > span.data-list__value`,
    },
    bidInformation: {
        currentBid: `body > section > main > section:nth-child(17) > div > div.data-container > div 
        > div:nth-child(2) > div.action-area > div.action-area__content > div > div.action-area__secondary-info 
        > ul > li > span.data-list__value`,
    },
    saleInformation: {
        sellingBranch: `body > section > main > section:nth-child(17) > div > div.data-container > div 
        > div:nth-child(2) > div:nth-child(4) > div.tile-body > ul > li:nth-child(1) > span.data-list__value > a`,
        vehicleLocation: `body > section > main > section:nth-child(17) > div > div.data-container > div 
        > div:nth-child(2) > div:nth-child(4) > div.tile-body > ul > li:nth-child(2) > div > ul`,
        auctionDateAndTime: `body > section > main > section:nth-child(17) > div > div.data-container > div 
        > div:nth-child(2) > div:nth-child(4) > div.tile-body > ul > li:nth-child(3) > a`,
        laneRun: `body > section > main > section:nth-child(17) > div > div.data-container > div > div:nth-child(2) 
        > div:nth-child(4) > div.tile-body > ul > li:nth-child(4) > span.data-list__value`,
        aisleStall: `body > section > main > section:nth-child(17) > div > div.data-container > div > div:nth-child(2) 
        > div:nth-child(4) > div.tile-body > ul > li:nth-child(5) > span.data-list__value`,
        actualCashValue: `body > section > main > section:nth-child(17) > div > div.data-container > div > div:nth-child(2) 
        > div:nth-child(4) > div.tile-body > ul > li:nth-child(6) > span.data-list__value`,
        seller: `#SellerName_SaleInfo > span`,
        titleSaleDoc: `body > section > main > section:nth-child(17) > div > div.data-container > div > div:nth-child(2) 
        > div:nth-child(4) > div.tile-body > ul > li:nth-child(9) > span.data-list__value`,
    }
}

module.exports = SELECTOR