'use strict';
// filter code based on unique filter from angular-ui
var filters = angular.module('ui.filters',[]);

filters.filter('unique', function () {

  return function (items, filterOn, removeNulls) {

    if(!removeNulls) removeNulls = false;

    if (filterOn === false) {
      return items;
    }

    if ((filterOn || angular.isUndefined(filterOn)) && angular.isArray(items)) {
      var hashCheck = {}, newItems = [];

      var extractValueToCompare = function (item) {
        if (angular.isObject(item) && angular.isString(filterOn)) {
          return item[filterOn];
        } else {
          return item;
        }
      };

      angular.forEach(items, function (item) {
        var valueToCheck, isDuplicate = false;

        for (var i = 0; i < newItems.length; i++) {
          if (angular.equals(extractValueToCompare(newItems[i]), extractValueToCompare(item))) {
            isDuplicate = true;
            break;
          }
        }
        if (removeNulls) {
          if (!isDuplicate && item[filterOn]) {
            newItems.push(item);
          }
        } else {
          if (!isDuplicate) {
            newItems.push(item)
          }
        }

      });

      items = newItems;

    }
    return items;
  };
});