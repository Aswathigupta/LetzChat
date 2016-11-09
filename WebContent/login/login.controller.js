(function () {
    'use strict';

    angular
        .module('app')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['UserService', '$location', '$rootScope', 'FlashService'];
    function LoginController(UserService, $location, $rootScope, FlashService) {
        var vm = this;

        vm.login = login;

        function login() {
            vm.dataLoading = true;
            UserService.GetAll()
                .then(function (response) {
                    if (response.success) {
                        FlashService.Success('Login successful', true);
                        $location.path('/');
                    } else {
                        FlashService.Error(response.message);
                        vm.dataLoading = false;
                    }
                });
        }
    }

})();