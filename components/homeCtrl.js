(function() {
    "use strict";
    angular
        .module("ngHome")
        .controller("ngHomeCtrl", function($scope, $http, homeFactory, $mdSidenav, $mdToast, $mdDialog) {
            // we have the .then for promise
            homeFactory.getHome().then(function(homedetails) {
                $scope.homedetails = homedetails.data;

            });


            var userContact = {
                name: "Admin_User",
                phone: "(214) 345-9867",
                email: "admin_user@gmail.com"
            }

            // side bar open

            $scope.openSidebar = function() {
                $mdSidenav('left').open();
            }

            $scope.closeSidebar = function() {
                $mdSidenav('left').close();
            }

            $scope.saveDetails = function(homedetail) {

                if (homedetail) {

                    $scope.homedetails.push(homedetail);

                    $scope.Broker = userContact;
                    $scope.homedetail = {};
                    $scope.closeSidebar();
                    showToast("Details Saved!")

                }
            }

            $scope.editHome = function(homedetail) {
                $scope.editing = true;
                $scope.openSidebar();
                $scope.homedetail = homedetail;
            }
            $scope.saveEdit = function() {
                $scope.editing = false;
                $scope.homedetail = {};
                $scope.closeSidebar();
                showToast("edit Saved!")
            }

            $scope.deleteDetails = function(event, homedetail) {

                var confirm = $mdDialog.confirm()
                    .title('Are you sure you want to delete ' + homedetail.floor_plan + '?')
                    .ok('Yes')
                    .cancel('No')
                    .targetEvent(event);
                $mdDialog.show(confirm).then(function() {
                    var index = $scope.homedetails.indexOf(homedetail);
                    $scope.homedetails.splice(index, 1);

                }, function() {

                });

            }

            function showToast(message) {
                $mdToast.show(
                    $mdToast.simple()
                    .content(message)
                    .position('top,right')
                    .hideDelay(3000)
                );
            }
        });
})();