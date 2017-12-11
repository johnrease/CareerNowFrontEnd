angular.module('CNBApp', [])
  .controller('CNBListController', function() {
    var CNBList = this;
    CNBList.CNBitems = [
      {heading:'Sample heading 1', lorem:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', image:"Lava.jpg"},
      {heading:'Sample heading 2', lorem:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', image:""},
      {heading:'Sample heading 3', lorem:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', image:""},
      {heading:'Sample heading 4', lorem:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', image:""}];
  });