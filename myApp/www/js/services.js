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
    var factory = {},
        localAPI = 'http://localhost:8100/js/test_data.json';

    factory.getData = function(callback){
            $http.get(localAPI)
                .success(callback)
                .error(function(data, status, headers, config){
                    console.log('***error***')
                    console.log('data: %o, status: %o', data, status)
                })
    };
    
    return factory;
});