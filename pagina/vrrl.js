<div role="form" class="wpcf7" id="wpcf7-f508-p1478-o1" lang="en-US" dir="ltr">
<div class="screen-reader-response">
    <p role="status" aria-live="polite" aria-atomic="true"></p> <ul></ul></div>
<form action="#wpcf7-f508-p1478-o1" method="post" class="wpcf7-form init" novalidate="novalidate" data-status="init">
<div style="display: none;">
<input type="hidden" name="_wpcf7" value="508">
<input type="hidden" name="_wpcf7_version" value="5.4.1">
<input type="hidden" name="_wpcf7_locale" value="en_US">
<input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f508-p1478-o1">
<input type="hidden" name="_wpcf7_container_post" value="1478">
<input type="hidden" name="_wpcf7_posted_data_hash" value="">
<input type="hidden" name="_wpcf7_recaptcha_response" value="">
</div>


(function($){
    "use strict";
    var spacingID = 'stm-spacing-6174528fa88dd',
        lgSpacing = '40px',
        mdSpacing = '20px',
        smSpacing = '20px',
        xsSpacing = '20px';

    function stmSpacing() {
        if ( window.matchMedia("(min-width: 1200px)").matches && lgSpacing ) {
            $( '#' + spacingID ).css ( "height", lgSpacing );
        } else if ( window.matchMedia("(max-width: 1199px) and (min-width: 992px )").matches && mdSpacing ) {
            $( '#' + spacingID ).css ( "height", mdSpacing );
        } else if ( window.matchMedia("(max-width: 991px) and (min-width: 768px )").matches && smSpacing ) {
            $( '#' + spacingID ).css ( "height", smSpacing );
        } else if ( window.matchMedia("(max-width: 767px)").matches && xsSpacing ) {
            $( '#' + spacingID ).css ( "height", xsSpacing );
        } else {
            $( '#' + spacingID ).css ( "height", "" );
        }
