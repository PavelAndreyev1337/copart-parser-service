const SELECTOR = {
    carInformation: {
        title: `#lot-details > div > div.container-fluid.lot-details-header > div 
        > div > div.col-md-7.col-sm-12.clearfix.lot-details-heading.p-0.mb-5 > div:nth-child(1) > h1`,
        lot: `#lot-details > div > div.container-fluid.lot-details-description 
        > div > div > div:nth-child(1) > div.col-lg-9.col-md-8.col-xs-12.image-location.p-0 
        > div.d-flex > div.d-flex.flex-dir-col.lot-detail-section 
        > div.p-0.lot-information.d-flex.f-g1 > div > ul > li.active > a > h3 > span`,
        vin: `#vinDiv > span`,
        'doc_type': `#lot-details > div > div.container-fluid.lot-details-description 
        > div > div > div:nth-child(1) > div.col-lg-9.col-md-8.col-xs-12.image-location.p-0 
        > div.d-flex > div.d-flex.flex-dir-col.lot-detail-section > div.p-0.lot-information.d-flex.f-g1 
        > div > div.tab-content.f-g1.d-f > div.panel-content.clearfix.f-g1.d-flex-column.full-width 
        > div > div:nth-child(3) > span > p`,
        odometer: `#lot-details > div > div.container-fluid.lot-details-description > div 
        > div > div:nth-child(1) > div.col-lg-9.col-md-8.col-xs-12.image-location.p-0 > div.d-flex 
        > div.d-flex.flex-dir-col.lot-detail-section > div.p-0.lot-information.d-flex.f-g1 > div 
        > div.tab-content.f-g1.d-f > div.panel-content.clearfix.f-g1.d-flex-column.full-width 
        > div > div:nth-child(4) > div > span > p`,
        highlights: `#lot-details > div > div.container-fluid.lot-details-description > div 
        > div > div:nth-child(1) > div.col-lg-9.col-md-8.col-xs-12.image-location.p-0 
        > div.d-flex > div.d-flex.flex-dir-col.lot-detail-section > div.p-0.lot-information.d-flex.f-g1 
        > div > div.tab-content.f-g1.d-f > div.panel-content.clearfix.f-g1.d-flex-column.full-width 
        > div > div:nth-child(7) > div > span`,
        seller: `#lot-details > div > div.container-fluid.lot-details-description > div > div > div:nth-child(1) 
        > div.col-lg-9.col-md-8.col-xs-12.image-location.p-0 > div.d-flex > div.d-flex.flex-dir-col.lot-detail-section 
        > div.p-0.lot-information.d-flex.f-g1 > div > div.tab-content.f-g1.d-f 
        > div.panel-content.clearfix.f-g1.d-flex-column.full-width > div > div:nth-child(8) > div > span 
        > div.lot-details-desc.right.inlinediv`,
        primaryDamage: `#lot-details > div > div.container-fluid.lot-details-description > div 
        > div > div:nth-child(1) > div.col-lg-9.col-md-8.col-xs-12.image-location.p-0 > div.d-flex 
        > div.d-flex.flex-dir-col.lot-detail-section > div.p-0.lot-information.d-flex.f-g1 > div 
        > div.tab-content.f-g1.d-f > div.panel-content.clearfix.f-g1.d-flex-column.full-width > div 
        > div:nth-child(9) > span`,
        secondaryDamage: `#lot-details > div > div.container-fluid.lot-details-description 
        > div > div > div:nth-child(1) > div.col-lg-9.col-md-8.col-xs-12.image-location.p-0 
        > div.d-flex > div.d-flex.flex-dir-col.lot-detail-section > div.p-0.lot-information.d-flex.f-g1 
        > div > div.tab-content.f-g1.d-f > div.panel-content.clearfix.f-g1.d-flex-column.full-width 
        > div > div:nth-child(10) > span`,
        estRetailValue: `#lot-details > div > div.container-fluid.lot-details-description > div > div 
        > div:nth-child(1) > div.col-lg-9.col-md-8.col-xs-12.image-location.p-0 > div.d-flex 
        > div.d-flex.flex-dir-col.lot-detail-section > div.p-0.lot-information.d-flex.f-g1 > div 
        > div.tab-content.f-g1.d-f > div.panel-content.clearfix.f-g1.d-flex-column.full-width 
        > div > div:nth-child(11) > div > span`,
        bodyStyle: `#lot-details > div > div.container-fluid.lot-details-description > div > div 
        > div:nth-child(1) > div.col-lg-9.col-md-8.col-xs-12.image-location.p-0 > div.d-flex 
        > div.d-flex.flex-dir-col.lot-detail-section > div.p-0.lot-information.d-flex.f-g1 > div 
        > div.tab-content.f-g1.d-f > div.panel-content.clearfix.f-g1.d-flex-column.full-width 
        > div > div:nth-child(16) > div > span`,
        vehicleType: `#lot-details > div > div.container-fluid.lot-details-description > div 
        > div > div:nth-child(1) > div.col-lg-9.col-md-8.col-xs-12.image-location.p-0 > div.d-flex 
        > div.d-flex.flex-dir-col.lot-detail-section > div.p-0.lot-information.d-flex.f-g1 > div 
        > div.tab-content.f-g1.d-f > div.panel-content.clearfix.f-g1.d-flex-column.full-width > div 
        > div:nth-child(17) > div > span`,
        colors: `#lot-details > div > div.container-fluid.lot-details-description > div > div 
        > div:nth-child(1) > div.col-lg-9.col-md-8.col-xs-12.image-location.p-0 > div.d-flex 
        > div.d-flex.flex-dir-col.lot-detail-section > div.p-0.lot-information.d-flex.f-g1 > div 
        > div.tab-content.f-g1.d-f > div.panel-content.clearfix.f-g1.d-flex-column.full-width 
        > div > div:nth-child(18) > div > span`,
        engineType: `#lot-details > div > div.container-fluid.lot-details-description > div 
        > div > div:nth-child(1) > div.col-lg-9.col-md-8.col-xs-12.image-location.p-0 > div.d-flex 
        > div.d-flex.flex-dir-col.lot-detail-section > div.p-0.lot-information.d-flex.f-g1 > div 
        > div.tab-content.f-g1.d-f > div.panel-content.clearfix.f-g1.d-flex-column.full-width 
        > div > div:nth-child(19) > div > span`,
        cylinders: `#lot-details > div > div.container-fluid.lot-details-description > div 
        > div > div:nth-child(1) > div.col-lg-9.col-md-8.col-xs-12.image-location.p-0 > div.d-flex 
        > div.d-flex.flex-dir-col.lot-detail-section > div.p-0.lot-information.d-flex.f-g1 > div 
        > div.tab-content.f-g1.d-f > div.panel-content.clearfix.f-g1.d-flex-column.full-width 
        > div > div:nth-child(23) > div > span`,
        transmission: `#lot-details > div > div.container-fluid.lot-details-description > div 
        > div > div:nth-child(1) > div.col-lg-9.col-md-8.col-xs-12.image-location.p-0 > div.d-flex 
        > div.d-flex.flex-dir-col.lot-detail-section > div.p-0.lot-information.d-flex.f-g1 > div 
        > div.tab-content.f-g1.d-f > div.panel-content.clearfix.f-g1.d-flex-column.full-width 
        > div > div:nth-child(24) > div > span`,
        drive: `#lot-details > div > div.container-fluid.lot-details-description > div > div 
        > div:nth-child(1) > div.col-lg-9.col-md-8.col-xs-12.image-location.p-0 > div.d-flex 
        > div.d-flex.flex-dir-col.lot-detail-section > div.p-0.lot-information.d-flex.f-g1 > div 
        > div.tab-content.f-g1.d-f > div.panel-content.clearfix.f-g1.d-flex-column.full-width 
        > div > div:nth-child(25) > div > span`,
        fuel: `#lot-details > div > div.container-fluid.lot-details-description > div > div 
        > div:nth-child(1) > div.col-lg-9.col-md-8.col-xs-12.image-location.p-0 > div.d-flex 
        > div.d-flex.flex-dir-col.lot-detail-section > div.p-0.lot-information.d-flex.f-g1 > div 
        > div.tab-content.f-g1.d-f > div.panel-content.clearfix.f-g1.d-flex-column.full-width 
        > div > div:nth-child(26) > div > span`,
        keys: `#lot-details > div > div.container-fluid.lot-details-description > div > div 
        > div:nth-child(1) > div.col-lg-9.col-md-8.col-xs-12.image-location.p-0 > div.d-flex 
        > div.d-flex.flex-dir-col.lot-detail-section > div.p-0.lot-information.d-flex.f-g1 > div 
        > div.tab-content.f-g1.d-f > div.panel-content.clearfix.f-g1.d-flex-column.full-width 
        > div > div:nth-child(27) > div > span`,
        notes: `#lot-details > div > div.container-fluid.lot-details-description > div 
        > div > div:nth-child(1) > div.col-lg-9.col-md-8.col-xs-12.image-location.p-0 > div.d-flex 
        > div.d-flex.flex-dir-col.lot-detail-section > div.p-0.lot-information.d-flex.f-g1 > div 
        > div.tab-content.f-g1.d-f > div.panel-content.clearfix.f-g1.d-flex-column.full-width 
        > div > div:nth-child(39) > div > div`,
    },
    photos: [
        `#lot-details > div > div.container-fluid.lot-details-description > div > div 
        > div:nth-child(1) > div.col-lg-9.col-md-8.col-xs-12.image-location.p-0 > div.d-flex 
        > div.lot-images-section.p-0 > div.image-galleria_wrap > div.spZoomViewer 
        > div.view-all-pic > span.download-image > a`,
    ],
    bidInformation: {
        currentBid: `#bid-information-id > div:nth-child(1) > div > div.bid-info-content > div 
        > div > div > div > div > div > div > div > div > form > div:nth-child(4) > div:nth-child(1) > span`,
    },
    saleInformation: {
        location: `#bid-information-id > div:nth-child(4) > div.panel-content > div:nth-child(1) > span > a`,
        saleDate: `#bid-information-id > div:nth-child(4) > div.panel-content > div:nth-child(2) > div > div > span > a`,
        saleName: `#bid-information-id > div:nth-child(4) > div.panel-content > div:nth-child(3) > span > a`,
        laneItemGridRow: `#bid-information-id > div:nth-child(4) > div.panel-content > div:nth-child(4) > span`,
        lastUpdated: `#bid-information-id > div:nth-child(4) > div.panel-content > div:nth-child(5) > span`
    }
}

module.exports = SELECTOR
