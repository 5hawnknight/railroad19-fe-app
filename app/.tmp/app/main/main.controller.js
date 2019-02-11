'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

(function () {
    var MainController = function MainController(API, lodash, $scope, $mdToast) {
        var _this = this;

        _classCallCheck(this, MainController);

        this.projects = [];
        //just incase we want to add a button to search instead of on click
        this.search = function (searchParam) {
            this.filters = searchParam;
        };
        this.gatherStatus = function (records) {
            this.statusForRecords = {
                divisions: {},
                status: {}
            };
            this.statusForRecords.divisions = lodash.countBy(records, function (n) {
                return n['division'];
            });
            this.statusForRecords.status = lodash.countBy(records, function (n) {
                return n['status'];
            });
        };
        $scope.$on('changedRecord', function (message, content) {
            console.log(message, content);
            $mdToast.show($mdToast.simple().textContent(content).position('right top').capsule(true).hideDelay(3000));
        });
        //get the data from the mock data factory
        API.getMockData().then(function (response) {
            _this.projects = response;
            _this.gatherStatus(_this.projects);
        });
    };

    angular.module('projectDashboardApp').controller('MainController', MainController);
})();
//# sourceMappingURL=main.controller.js.map
