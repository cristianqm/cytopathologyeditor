'use strict';

angular.module('core')
    .service('sharedProperties', function () {
        var currentChallenge = {};

        return {
            getChallenge: function () {
                return currentChallenge;
            },
            setChallenge: function (value) {
                currentChallenge = value;
            },
            getCourse: function () {
                return currentChallenge;
            },
            setCourse: function (value) {
                currentChallenge = value;
            }
        };
    }).factory('Challenges', ['$resource',
        function ($resource) {
            return $resource('/challenges/:id', {
                id: '@_id'
            }, {
                update: {
                    method: 'PUT'
                },
                query: {method: 'GET', isArray: false},

                get: {method: 'GET', isArray: true}
            });
        }
    ]).factory('Courses', ['$resource',
        function ($resource) {
            return $resource('/courses/:id', {
                id: '@_id'
            }, {
                update: {
                    method: 'PUT'
                },
                query: {method: 'GET', isArray: false},

                get: {method: 'GET', isArray: true}
            });
        }
    ]).factory('QueryParams', [
        function () {

            return {
                getChallengeId: function () {
                    var result = window.location.hash.substr(19, 24);

                    return result;
                },
                getCourseId: function () {
                    var result = window.location.hash.substr(14, 24);

                    return result;
                }
            };
        }
    ]);
