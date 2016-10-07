Ctrl = function($scope, $http) {
  $scope.lang = 'EN';
  $scope.dataset = [];
  
  angular.element(
    document.getElementById('searchBox')
  ).bind(
    'keyup',
    function() {
      /* Init */
      var query = this.value,
          lang = $scope.lang;
      
      /* Empty? */
      if ( !query ) {
        return;
      }
      
      /* Fire */
      $http.jsonp(
        'https://clients1.google.com/complete/search?client=youtube&hl=en&gl=in&sugexp=ytd3_arm_12&gs_rn=23&gs_ri=youtube&tok=PB_SThggiQuYiZHchxBiJw&ds=yt&cp=2&gs_id=6&q=' +
        encodeURIComponent(query) +
        '&callback=JSON_CALLBACK&gs_gbg=gj17zIW4Cx5lHs1'
      ).success(
        function(data) {
          $scope.dataset = data[1] || [];
        }
      );
    }
  );
}