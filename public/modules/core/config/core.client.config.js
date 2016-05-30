'use strict';

// Core module config
angular.module('core').run(['Menus',
    function (Menus) {
        // Set top bar menu items
        Menus.addMenuItem('topbar', 'Home', 'core', 'dropdown', '/', 'home');
        Menus.addMenuItem('topbar', 'Courses', 'core', 'dropdown', '/courses', 'arrow_forward');
    }
]);
