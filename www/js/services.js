angular.module('devangelist.services', [])

.service('Developers', function ($http, $q) {

  var allData = [];

  this.getData = function() {
    var d = $q.defer();

    $http.get('github-users-stats.json').success(function(data) {

      var PHP = _.filter(data, function(result) {
        return result.language === "PHP";
      });

      var JS = _.filter(data, function(result) {
        return result.language === "JavaScript";
      });

      d.resolve({
        "PHP": PHP.slice(0,10),
        "JS": JS.slice(0,10)
      });

    }).error(function(data) {
      d.reject(data);
    });

    return d.promise;
  };

  this.getMoreData = function(end) {
    var d = $q.defer();

    $http.get('github-users-stats.json').success(function(data) {

      var PHP = _.filter(data, function(result) {
        return result.language === "PHP";
      });

      var JS = _.filter(data, function(result) {
        return result.language === "JavaScript";
      });

      d.resolve({
        "PHP": PHP.slice(0, end),
        "JS": JS.slice(0, end)
      });

    }).error(function(data) {
      d.reject(data);
    });

    return d.promise;
  };

});

// .service('Agenda', function ($http, $q){

//   this.get = function() {
//     var dfd = $q.defer();

//     $http.get('agenda.json')
//     .success(function(data) {

//       var day1 = _.filter(data, function(event){ return event.date =="day1" }),
//           day2 = _.filter(data, function(event){ return event.date =="day2" });

//       dfd.resolve({
//         "day1": day1,
//         "day2": day2
//       });
//     })
//     .error(function(data) {
//       dfd.reject(data);
//     });

//     return dfd.promise;
//   };
