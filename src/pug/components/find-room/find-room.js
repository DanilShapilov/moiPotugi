var findRoomDateStart = $('.date-start');
var findRoomDateEnd = $('.date-end');

findRoomDateStart.datepicker({
  minDate: new Date(),
  range: true,
  toggleSelected: false,
  multipleDatesSeparator: ' - ',
  classes: 'custom',
  // inline: true,
  onShow: function(dp, animationCompleted){
    findRoomDateEnd.addClass('focused')
  },
  onHide: function(dp, animationCompleted){
    findRoomDateEnd.removeClass('focused')
  },

  // set different data in inputs value
  onSelect: function (fd, date,ins) {
    function getDateForInput(index) {
      if (date[index] !== undefined){
        function checkIfShouldStartWithZero(num) {
          num = num.toString();
          return num.length === 1 ? '0' + num : num;
        }
        var day = checkIfShouldStartWithZero(date[index].getDate());
        var month = checkIfShouldStartWithZero(date[index].getMonth());
        
        return day + '.' + month + '.' + date[index].getFullYear();
      }
    }
    findRoomDateStart.val(getDateForInput(0))
    findRoomDateEnd.val(getDateForInput(1))
  }
}).data('datepicker');

findRoomDateEnd.click(function () {
  findRoomDateStart.focus();
})

