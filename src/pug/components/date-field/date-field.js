let datePicker = $('.date').datepicker({
  minDate: new Date(),
  range: true,
  toggleSelected: false,
  multipleDatesSeparator: ' - ',
  classes: 'custom',
  // inline: true
}).data('datepicker');


// class DatePickerClass{
//   constructor(elementClass){
//     $(elementClass + '').datepicker({
//       // minDate: new Date(),
//       range: true,
//       toggleSelected: false,
//       multipleDatesSeparator: ' - ',
//       classes: 'custom',
//       inline: true
//     })
//   }
// }