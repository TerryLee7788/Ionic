angular.module('starter.services', [])

.factory('Playlists', function(){
    var playlists = [
        { title: 'Reggae', id: 0 },
        { title: 'Chill', id: 1 },
        { title: 'Dubstep', id: 2 },
        { title: 'Indie', id: 3 },
        { title: 'Rap', id: 4 },
        { title: 'Cowbell', id: 5 }
    ];
    return {
        all: function(){
            return playlists;
        },
        get: function(playlistId){
            return playlists[playlistId];
        }
    };
})

.factory('Browses', function($http){
    var browseslists = [];

    $http.get('http://localhost:8100/js/test_data.json')
        .success(function(data, status, headers, config){
            console.log('***success***')
            console.log(status)
        })
        .error(function(data, status, headers, config){
            console.log('***error***')
            console.log('data: %o, status: %o', data, status)
        })
        .then(function(res){
            console.log('then')
            browseslists = res.data;
            console.log('data: ', browseslists[0].title);
        })
        console.log('test: ', browseslists)
    return {
        all: function(){
            console.log('all ', browseslists)
            return browseslists;
        },
        get: function(browsesId){
            return browseslists[browsesId];
        }
    };
});