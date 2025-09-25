var $ = jQuery.noConflict();
window.___ = function (key) {
    return bx_license.i18n[key] || key;
}
$(document).ready( function(){
    $('.expand-act-box').click( function() {
        var collapse_content_selector = $(this).attr('id');
        var toggle_switch = $(this);
        $(collapse_content_selector).toggle( function() {
            if($(this).css('display')=='none') {
                toggle_switch.html('<i class="dashicons dashicons-unlock"></i> '+toggle_switch.text());
            } else {
                toggle_switch.html('<i class="dashicons dashicons-dismiss"></i> '+toggle_switch.text());
            }
            $('html, body').animate({
                scrollTop: $(collapse_content_selector).offset().top - 100
            }, 500);
        });
    });


    $('#update-license').click( () => {
        $('#update-license').text('Updating...')
        var action = $('#update-license').data('action')
        $.ajax({
            type: 'POST',
            url: bx_license.ajax_url,
            dataType: 'json',
            data: {
                action: action
            },
            success: (res) => {
                console.log(res);
                $('#update-license').text('Update License')
                if(res.message) {
                    $('.license-msg').show().text(res.message).css('color', 'red')
                } else {
                    $('.license-msg').show().text('License updated successfully').css('color', 'green')
                }
                setTimeout( () => {
                    window.location.reload();
                }, 1500)
            }
        });
    });

    $('#activate-license').click( () => {
        var license_key = $('input[name="license_key"]').val(),
            action = $('#activate-license').data('action')

        if(!license_key) {
            alert('Please enter license code')
            return
        }
        $('#activate-license').text('Activating...')
        $.ajax({
            type: 'POST',
            url: bx_license.ajax_url,
            dataType: 'json',
            data: {
                action: action,
                license_key: license_key
            },
            success: (res) => {
                if(res.status) {
                    $('.license-msg').hide().text(res.message).css('color', 'green').fadeIn();
                    $('#activate-license').text('Activated')
                    $('.license_status').removeClass('license_invalid')
                    $('.license_invalid i').addClass('dashicons-yes-alt').removeClass('dashicons-dismiss')
                    $('.license_status .txt').text('Your license is valid')
                    setTimeout( () => {
                        window.location.reload();
                    }, 1200)
                } else {
                    $('.license-msg').hide().text(res.message).css('color', 'red').fadeIn();
                    $('#activate-license').text('Activate License')
                }
            }
        });
    });

    $('#deactivate-license').click( () => {
        $('#deactivate-license').text('Deactivating...')
        var action = $('#deactivate-license').data('action')
        $.ajax({
            type: 'POST',
            url: bx_license.ajax_url,
            dataType: 'json',
            data: {
                action: action
            },
            success: (res) => {
                if(res.status) {
                    $('#deactivate-license').text('Deactivated')
                    $('.license-msg').hide().text(res.message).css('color', 'red').fadeIn();
                    $('.license_status').addClass('license_invalid')
                    $('.license_invalid i').removeClass('dashicons-yes-alt').addClass('dashicons-dismiss')
                    $('.license_status .txt').text('Your license is invalid')
                    setTimeout( () => {
                        window.location.reload();
                    }, 1200)
                } else {
                    setTimeout( () => {
                        window.location.reload();
                    }, 1200)
                }
            }
        });
    });
});

function isValidEmailAddress(emailAddress) {
    var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return pattern.test(emailAddress);
}

jQuery(document).ready(function($) {
    function appendModalIfNotExists(modalId, title, message, buttonText) {
        if (!$(`#${modalId}`).length) {
            $('body').append(`
                <div class="modal" id="${modalId}" tabindex="-1" role="dialog" aria-modal="true" aria-labelledby="${modalId}Label">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="${modalId}Label">${___(title)}</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="${___('Close')}"></button>
                            </div>
                            <div class="modal-body">
                                <p>${___(message)}</p>
                                <div id="${modalId.replace('modal', 'message')}"></div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="button csf-warning-primary action-button">${___(buttonText)}</button>&ensp;
                                <button type="button" class="button button-primary" data-bs-dismiss="modal">${___('Cancel')}</button>
                            </div>
                        </div>
                    </div>
                </div>
            `);
        }
    }

    if ($('.buxt_createpage, .buxt_createmenu, .buxt_createwidgets, .buxt_importthemes').length > 0) {
        appendModalIfNotExists('create_page_modal', 'Create Page', 'Are you sure you want to create pages like in the demo?', 'Yes, Create Pages');
        appendModalIfNotExists('create_menu_modal', 'Create Menu', 'Are you sure you want to create menus like in the demo?', 'Yes, Create Menus');
        appendModalIfNotExists('create_widgets_modal', 'Create Widgets', 'Are you sure you want to create widgets like in the demo?', 'Yes, Create Widgets');
        appendModalIfNotExists('import_themes_modal', 'Import Theme Demo', 'Are you sure you want to import theme demo content? This will import posts, pages, and settings from the demo.', 'Yes, Import Demo');
    }

    function handleAjaxAction(modalId, messageId, action, successText) {
        $(`#${modalId} .action-button`).on('click', function() {
            const modal = bootstrap.Modal.getInstance(document.getElementById(modalId));
            $(`#${messageId}`).html(`
                <div class="csf-notice csf-notice-info">
                    ${___('dataimport')}
                </div>
            `);

            $.ajax({
                type: 'POST',
                url: bx_license.ajax_url,
                dataType: 'text',
                data: {
                    action: action,
                    nonce: bx_license.nonce
                },
                beforeSend: function() {
                    modal.hide();
                },
                success: function(response) {
                    $(`#${messageId}`).html(`
                        <div class="csf-notice csf-notice-info">
                            <strong>${___(successText)}</strong> ${___('havefun')}
                        </div>
                    `);
                },
                error: function(xhr, status, error) {
                    $(`#${messageId}`).html(`
                        <div class="csf-notice csf-notice-danger">
                            ${___('error_occurred')}
                        </div>
                    `);
                }
            });
        });
    }
    function initModal(buttonSelector, modalId) {
        const $button = $(buttonSelector);
        const $modal = $(`#${modalId}`);
        let modal = null;

        $button.on('click', function() {
            modal = new bootstrap.Modal($modal[0], {
                backdrop: 'static',
                keyboard: false,
                focus: true
            });
            
            // Store the trigger button for focus restoration
            $modal.data('returnFocus', this);
            
            modal.show();
        });

        // Handle proper focus management
        $modal.on('shown.bs.modal', function() {
            $(this).find('.action-button').focus();
        });

        $modal.on('hidden.bs.modal', function() {
            const returnFocus = $(this).data('returnFocus');
            if (returnFocus) {
                $(returnFocus).focus();
            }
        });

        return modal;
    }

    initModal('.buxt_createpage', 'create_page_modal');
    initModal('.buxt_createmenu', 'create_menu_modal');
    initModal('.buxt_createwidgets', 'create_widgets_modal');
    initModal('.buxt_importthemes', 'import_themes_modal');

    handleAjaxAction('create_page_modal', 'create_page_message', 'buxt_createpage', 'page');
    handleAjaxAction('create_menu_modal', 'create_menu_message', 'buxt_createmenu', 'menu');
    handleAjaxAction('create_widgets_modal', 'create_widgets_message', 'buxt_createwidgets', 'widgets');
    handleAjaxAction('import_themes_modal', 'import_themes_message', 'buxt_importthemes', 'theme');
});
