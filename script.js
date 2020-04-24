var app = angular.module('movieApp', []);
app.controller('movieController', function ($scope, $window) {
    $scope.movies = [{
            "Title": "The Incredibles",
            "Image": "https://m.media-amazon.com/images/M/MV5BMTY5OTU0OTc2NV5BMl5BanBnXkFtZTcwMzU4MDcyMQ@@._V1_.jpg",
            "Plot": "A family of undercover superheroes, while trying to live the quiet suburban life, are forced into action to save the world."
        },
        {
            "Title": "Finding Nemo",
            "Image": "https://www.joblo.com/assets/images/oldsite/posters/images/full/2003-finding_nemo-3.jpg",
            "Plot": "After his son is captured in the Great Barrier Reef and taken to Sydney, a timid clownfish sets out on a journey to bring him home."
        },
        {
            "Title": "Monsters Inc.",
            "Image": "https://vignette.wikia.nocookie.net/monstersincmovies/images/c/c3/Movie_poster_monsters_inc_2.jpg/revision/latest/scale-to-width-down/340?cb=20130515200627",
            "Plot": "In order to power the city, monsters have to scare children so that they scream. However, the children are toxic to the monsters, and after a child gets through, 2 monsters realize things may not be what they think."
        },
        {
            "Title": "Avengers: Endgame",
            "Image": "https://i.etsystatic.com/15963200/r/il/b10de2/1833903984/il_570xN.1833903984_yjpb.jpg",
            "Plot": "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe."
        },
        {
            "Title": "Onward",
            "Image": "https://lumiere-a.akamaihd.net/v1/images/p_onward_19024_dbb512d5.jpeg",
            "Plot": "Two elven brothers embark on a quest to bring their father back for one day."
        },
        {
            "Title": "Toy Story 4",
            "Image": "https://cdn.europosters.eu/image/750/posters/toy-story-4-adventure-of-a-lifetime-i74240.jpg",
            "Plot": "When a new toy called \"Forky\" joins Woody and the gang, a road trip alongside old and new friends reveals how big the world can be for a toy."
        }
    ];
    $scope.movieCache = $scope.movies;

    $scope.screenTimes = function() {    
        var minutes = moment().format("mm");

        if (minutes <= 28) {
            var screentimeMinute = 30

            var screenTime = `${moment().format("hh")} : ${screentimeMinute}`;

        } else {
            var screenTime = `${parseInt(moment().format("hh")) + 12 + 1}:00`;
        }
        return screenTime;
    }


    $scope.click = function (movie) {
        movie.selected = true;
        $scope.displayGoBack = true;

        $scope.movies = $scope.movies.filter(x => x.selected == true);
    }
    // reset selected movies to default state, display all movies.
    $scope.goBack = function () {
        console.log("I am going back");
        $scope.movies = $scope.movieCache;
        $scope.displayGoBack = false;

        $scope.movies.filter(x => x.selected == true).forEach(x => x.selected = false);
    };

    $scope.buyTickets = function (movie) {
        Swal.fire({
            title: 'Confirm selection',
            text: 'Do you want to buy tickets for the ' + $scope.screenTimes() + ' showing of ' + movie.Title + '?',
            icon: 'question',
            confirmButtonText: 'Yes!',
            showCancelButton: true,
            cancelButtonText: 'No.',
            reverseButtons: true
        }).then((result) => {
            if (result.value == true) {
                Swal.fire(
                    'Success!',
                    'Please collect your tickets from the ticket booth. (Kitchen Gate)',
                    'success'
                ).then((result) => {
                    console.log(result);
                    if (result.value == true) {
                        $window.location.reload();
                    }
                })
            }
        })
    }

});

app.controller('foodController', function($scope, $window) {
    $scope.foods = [
        {
            "Title": "Hot Diggety Dog",
            "Icon": "🌭",
            "Options": ["Onions", "Tomato Sauce", "Mustard"],
            "Count": 0
        },
        {
            "Title": "Bacon Roll",
            "Icon": "🥪",
            "Options": ["Butter", "Tomato Sauce"],
            "Count": 0
        },
        {
            "Title": "Fries",
            "Icon": "🍟",
            "Count": 0
        }
    ];

    $scope.incrementItem = function(food, value) {
        $scope.foods.filter(x => x == food)[0].Count += value;
    }
    
});