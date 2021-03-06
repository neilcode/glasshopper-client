angular.module('barModel', [])

.factory('barFactory', function($localStorage, $location, $http, $timeout) {
  return {

    findNearby: function(lng,lat,radius) {
      return $http(
              { url         : 'http://127.0.0.1:3000/api/bars/googlefetch',
                method      : 'GET',
                params      :
                  { lng     : lng,
                    lat     : lat,
                    radius  : radius }
      }).then(
        function() {
          return $http(
                      { url         : 'http://127.0.0.1:3000/api/bars/nearby',
                        method      : 'GET',
                        params      :
                          { lng     : lng,
                            lat     : lat,
                            radius  : radius }
          });
        })
    },

    get: function(barId) {
      return $http(
                  { url         : 'http://127.0.0.1:3000/api/bars/'+barId,
                    method      : 'GET'
      }).then(function(response) {
        return response.data;
      });
    }
  };
});