app.service('StaticDataSrvc', [function() {

    // Categories and subcategories. Field categ in each of subcategories is needed for proper displayingrp puose. @Andrfas
    this.categories = [
        {
            name: 'IT',
            subcategories: [
                {categ: 'IT', subCateg:'Desktop Software Development'},
                {categ: 'IT', subCateg:'Ecommerce Development'},
                {categ: 'IT', subCateg:'Game Development'},
                {categ: 'IT', subCateg:'Mobile Development'},
                {categ: 'IT', subCateg:'Product Management'},
                {categ: 'IT', subCateg:'QA & Testing'},
                {categ: 'IT', subCateg:'Scripts & Utilities'},
                {categ: 'IT', subCateg:'Web Development'},
                {categ: 'IT', subCateg:'Web & Mobile Design'},
                {categ: 'IT', subCateg:'Other - Software Development'}
            ]
        }        
    ]

    this.cities = ['Kyiv','Dnepropetrovsk','Donetsk','Zaporozh\'e','Krivoy Rog','L\'vov',
            'Luhansk','Mariupol','Nikolaev','Odessa',
            'Sevastopl','Simferopl','Kharkiv','Vinnitsya','Chernihiv', 'Lutsk'];

    this.emplTypes = ['fulltime', 'underemployment', 'distant_work'];
    this.hoursPerWeek = ['more_than_30', 'less_than_30 ', 'of_necessity'];
    this.languages = ['Ukrainian', 'Russian', 'English', 'German', 'French'];
    
}]);