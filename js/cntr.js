var artistcontrollers=angular.module("artistcontrollers",['ngAnimate']);
artistcontrollers.controller("ListController",["$scope","$http","$log",function($scope,$http,$log){
    $scope.artistorder="name"
    $scope.artists=[
        {
            "id":"1",
            "name":"Barot Bellingham",
        "shortname":"Barot_Bellingham",
        "reknown":"Royal Acadamy Of Paintiri",
        "bio":"Barto Has just Finishsd ala bala"
    },
    {"id":"2",
        "name":"Jhon Wicket",
        "shortname":"Jhon_Wicket",
        "reknown":"Royal Acadamy Of Paintiri 1",
        "bio":"Barto Has just Finishsd ala bala 1"
    },
    {"id":"3",
        "name":"Jhony Deep",
        "shortname":"Jhony_Deep",
        "reknown":"Royal Acadamy Of Paintiri 2",
        "bio":"Barto Has just Finishsd ala bala 2"
    },{"id":"4",
        "name":"Tom Cruise",
        "shortname":"Tom_Cruise",
        "reknown":"Royal Acadamy Of Paintiri 3",
        "bio":"Barto Has just Finishsd ala bala 3"
    },
    {
        "id":"5",
        "name":"Robert Joseph",
        "shortname":"Robert_Joseph",
        "reknown":"Royal Acadamy Of Paintiri 4",
        "bio":"Barto Has just Finishsd ala bala 4"
    },{
        "id":"6","name":"Adam Miller",
        "shortname":"Adam_Miller",
        "reknown":"Royal Acadamy Of Paintiri 5",
        "bio":"Barto Has just Finishsd ala bala 5"
    },{
        "id":"7","name":"Angelina Jolly",
        "shortname":"Angelina_Jolly",
        "reknown":"Royal Acadamy Of Paintiri 6",
        "bio":"Barto Has just Finishsd ala bala 6"
    },{
        "id":"8","name":"Serina Viliam",
        "shortname":"Serina_Viliam",
        "reknown":"Royal Acadamy Of Paintiri 7",
        "bio":"Barto Has just Finishsd ala bala 7"
    },{
        "id":"9",
        "name":"Maria Sharpova",
        "shortname":"Maria_Sharpova",
        "reknown":"Royal Acadamy Of Paintiri 8",
        "bio":"Barto Has just Finishsd ala bala 8"
    }
    ]
     
  }]
);


artistcontrollers.controller("DetailsController",["$scope","$routeParams",function($scope,$routeParams){
    $scope.whichItem=$routeParams.itemId;
    $scope.artists=[
        {
            "id":"1",
            "name":"Barot Bellingham",
        "shortname":"Barot_Bellingham",
        "reknown":"Royal Acadamy Of Paintiri",
        "bio":"Barto Has just Finishsd ala bala"
    },
    {"id":"2",
        "name":"Jhon Wicket",
        "shortname":"Jhon_Wicket",
        "reknown":"Royal Acadamy Of Paintiri 1",
        "bio":"Barto Has just Finishsd ala bala 1"
    },
    {"id":"3",
        "name":"Jhony Deep",
        "shortname":"Jhony_Deep",
        "reknown":"Royal Acadamy Of Paintiri 2",
        "bio":"Barto Has just Finishsd ala bala 2"
    },{"id":"4",
        "name":"Tom Cruise",
        "shortname":"Tom_Cruise",
        "reknown":"Royal Acadamy Of Paintiri 3",
        "bio":"Barto Has just Finishsd ala bala 3"
    },
    {
        "id":"5",
        "name":"Robert Joseph",
        "shortname":"Robert_Joseph",
        "reknown":"Royal Acadamy Of Paintiri 4",
        "bio":"Barto Has just Finishsd ala bala 4"
    },{
        "id":"6","name":"Adam Miller",
        "shortname":"Adam_Miller",
        "reknown":"Royal Acadamy Of Paintiri 5",
        "bio":"Barto Has just Finishsd ala bala 5"
    },{
        "id":"7","name":"Angelina Jolly",
        "shortname":"Angelina_Jolly",
        "reknown":"Royal Acadamy Of Paintiri 6",
        "bio":"Barto Has just Finishsd ala bala 6"
    },{
        "id":"8","name":"Serina Viliam",
        "shortname":"Serina_Viliam",
        "reknown":"Royal Acadamy Of Paintiri 7",
        "bio":"Barto Has just Finishsd ala bala 7"
    },{
        "id":"9",
        "name":"Maria Sharpova",
        "shortname":"Maria_Sharpova",
        "reknown":"Royal Acadamy Of Paintiri 8",
        "bio":"Barto Has just Finishsd ala bala 8"
    }
    ]
     
  }]
)