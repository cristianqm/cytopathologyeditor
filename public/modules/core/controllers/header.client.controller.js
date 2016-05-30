'use strict';

angular.module('core').controller('HeaderController', ['$rootScope', '$scope', '$location', 'Authentication', 'Menus', '$timeout', '$mdSidenav', '$mdUtil', '$log', 'QueryParams',
    function ($rootScope, $scope, $location, Authentication, Menus, $timeout, $mdSidenav, $mdUtil, $log, QueryParams) {
        $scope.authentication = Authentication;
        $scope.isCollapsed = false;
        $scope.menu = Menus.getMenu('topbar');

        $scope.value = 'Cytopathology Challenge';

        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
            console.log('toState', JSON.stringify(toState, null, '  '));
            console.log('toParams', JSON.stringify(toParams, null, '  '));
            console.log('fromState', JSON.stringify(fromState, null, '  '));
            console.log('fromParams', JSON.stringify(fromParams, null, '  '));

            $scope.value = toState.toolbarName;

        });

        $scope.toggleCollapsibleMenu = function () {
            $scope.isCollapsed = !$scope.isCollapsed;
        };

        // Collapsing the menu after navigation
        $scope.$on('$stateChangeSuccess', function () {
            $scope.isCollapsed = false;
        });

        $scope.go = function (path) {
            $location.path(path);
        };
        /**
         * Build handler to open/close a SideNav; when animation finishes
         * report completion in console
         */
        function buildToggler(navID) {
            var debounceFn = $mdUtil.debounce(function () {
                $mdSidenav(navID)
                    .toggle()
                    .then(function () {
                        $log.debug('toggle ' + navID + ' is done');
                    });
            }, 300);
            return debounceFn;
        }

        $scope.toggleLeft = buildToggler('left');
        $scope.toggleRight = buildToggler('right');
    }
])
    .controller('LeftCtrl', function ($scope, $timeout, $mdSidenav, $log) {
        $scope.close = function () {
            $mdSidenav('left').close()
                .then(function () {
                    $log.debug('close LEFT is done');
                });
        };
    })
    .controller('RightCtrl', function ($scope, $timeout, $mdSidenav, $log) {
        $scope.close = function () {
            $mdSidenav('right').close()
                .then(function () {
                    $log.debug('close RIGHT is done');
                });
        };
    });
