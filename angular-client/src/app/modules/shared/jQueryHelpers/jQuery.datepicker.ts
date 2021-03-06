declare const jQuery: any;

export class JQueryDatepicker {
  static init() {
    jQuery('.date-picker').daterangepicker({
      singleDatePicker: true,
      calender_style: "picker_4"
    }, function(start, end, label) {
      console.log(start.toISOString(), end.toISOString(), label);
    });
  }
}
