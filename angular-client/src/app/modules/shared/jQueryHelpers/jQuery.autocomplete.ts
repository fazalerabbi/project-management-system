declare var jQuery: any;

export class JQueryAutocomplete {
  static parent(parentArray) {
    jQuery('#parent_id').autocomplete({
      lookup: parentArray,
      appendTo: '#autocomplete-parent'
    });
  }
  static assignee(assigneeArray) {
    jQuery('#assignee').autocomplete({
      lookup: assigneeArray,
      appendTo: '#autocomplete-assignee'
    });
  }
}
