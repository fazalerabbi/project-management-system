declare var jQuery: any;

export class JQueryEditor {
  static init() {
    JQueryEditor.initToolbarBootstrapBindings();
    jQuery('#editor').wysiwyg({
      fileUploadError: JQueryEditor.showErrorAlert
    });
  }

  static showErrorAlert(reason, detail) {
    let msg = '';
    if (reason === 'unsupported-file-type') {
      msg = "Unsupported format " + detail;
    } else {
      console.log("error uploading file", reason, detail);
    }
    jQuery('<div class="alert"> <button type="button" class="close" data-dismiss="alert">&times;</button>' +
      '<strong>File upload error</strong> ' + msg + ' </div>').prependTo('#alerts');
  }

  static initToolbarBootstrapBindings() {
    const fonts = ['Serif', 'Sans', 'Arial', 'Arial Black', 'Courier',
        'Courier New', 'Comic Sans MS', 'Helvetica', 'Impact', 'Lucida Grande', 'Lucida Sans', 'Tahoma', 'Times',
        'Times New Roman', 'Verdana'
      ],
      fontTarget = jQuery('[title=Font]').siblings('.dropdown-menu');
    jQuery.each(fonts, function(idx, fontName) {
      fontTarget.append(jQuery('<li><a data-edit="fontName ' + fontName + '" style="font-family:\''
        + fontName + '\'">' + fontName + '</a></li>'));
    });
    jQuery('a[title]').tooltip({
      container: 'body'
    });
    jQuery('.dropdown-menu input').click(function() {
      return false;
    })
      .change(function() {
        jQuery(this).parent('.dropdown-menu').siblings('.dropdown-toggle').dropdown('toggle');
      })
      .keydown('esc', function() {
        this.value = '';
        jQuery(this).change();
      });

    jQuery('[data-role=magic-overlay]').each(function() {
      const overlay = jQuery(this),
        target = jQuery(overlay.data('target'));
      overlay.css('opacity', 0).css('position', 'absolute').offset(target.offset())
        .width(target.outerWidth()).height(target.outerHeight());
    });
    if ("onwebkitspeechchange" in document.createElement("input")) {
      const editorOffset = jQuery('#editor').offset();
      jQuery('#voiceBtn').css('position', 'absolute').offset({
        top: editorOffset.top,
        left: editorOffset.left + jQuery('#editor').innerWidth() - 35
      });
    } else {
      jQuery('#voiceBtn').hide();
    }
  }
}
