import React from 'react'
import $ from 'jquery'

$(document).ready(function() {

    $(".toast .toast-header .close").click(function() {
        $(this).closest('.toast').hide();
    });

    $("body").bind('DOMSubtreeModified', function(){
        $(".toast").show().delay(2000).fadeOut();
    });    

});

export default function Error(props) {
    return (
        <div className="notices">
            <div role="alert" aria-live="assertive" aria-atomic="true" class="toast" data-autohide="true">
                <div class="toast-header">
                    <div class="toast-title">Error :(</div>
                    <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="toast-body">
                    {props.content}
		        </div>
            </div>
        </div>
    )
}
