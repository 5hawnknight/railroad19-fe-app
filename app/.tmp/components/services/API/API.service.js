'use strict';

angular.module('projectDashboardApp').factory('API', function ($http) {

  // Public API here
  return {
    getMockData: function getMockData() {
      return $http.get('json/mockData.json').then(function (data) {
        return data.data;
      });
    }
  };
});
//# sourceMappingURL=API.service.js.map
