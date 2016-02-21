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

    this.cities = ['Киев','Днепропетровск','Донецк','Запорожье','Кривой Рог','Львов','Луганск','Мариуполь','Николаев','Одесса','Севастополь','Симферополь','Харьков','Винница','Чернигов', 'Луцк'];
    
}]);