angular.module('swagShop').component('detailsComponent', {
    templateUrl: 'app/details/details.template.html',
    controllerAs: 'detailsCtrl',
    controller: function (swagSrvc, cartSrvc, $stateParams) {
        this.swag = swagSrvc.swag

        if ($stateParams.id) {
        this.swag.map( item => {
            if (item.id === $stateParams.id) {
                this.item = item
            }
        })}

        this.addToCart = item => cartSrvc.add(item)
    }
})