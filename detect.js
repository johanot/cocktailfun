var playSound = function(redirectTo, playcallback)
{
    var aud = document.getElementById("sound");
    var $inner = $("#inner");

    $inner.click(function() {
        $(".hidden").hide();
        aud.play();
        if (!aud.paused) playcallback();
    });

    aud.onended = function() {
        location.href = redirectTo;
    };

    var timeout = function()
    {
        if (aud.paused)
        {
            $("#mobilehint").show("fast");
        }

    };
    setTimeout(timeout, 1000);
    $inner.click();
};
