declare var jQuery: any;

export class JQuerySelect2 {
  static init() {
    jQuery("select.select2_multiple").select2({
      placeholder: jQuery(this).attr('placeholder'),
      allowClear: true
    });
  }
}
