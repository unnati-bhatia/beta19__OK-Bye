jQuery(document).ready(function() {
    $(function() {
        $('#defaultCountdown').countdown({
            until: new Date(2023, 4, 20, 8)
        }); // year, month, date, hour
    });
});