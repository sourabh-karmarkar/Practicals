$(document).ready(function () {
    console.log("loaded")
    $.material.init();
    $(document).on("submit", "#register-form", function (e) {
        e.preventDefault();
        let form = $('#register-form').serialize();
        $.ajax({
            url: '/postregistration',
            type: 'POST',
            data: form,
            success: function (response) {
                console.log(response);
            }
        })
    })

    $(document).on("submit", "#login-form", function (e) {
        e.preventDefault();
        let form = $(this).serialize();
        console.log("post request called")
        $.ajax({
            url: '/check-login',
            type: 'POST',
            data: form,
            success: function (res) {
                if (res == "error") {
                    alert("Could not login");
                }
                else {
                    alert("Logged in as", res);
                    window.location.href = "/";
                }
                console.log(res);
            }
        })
    })

    $(document).on('click', "#logout-link", function (e) {
        e.preventDefault();
        $.ajax({
            url: '/logout',
            type: 'GET',
            success: function (res) {
                if (res == 'success') {
                    window.location.href = "/login";
                }
                else {
                    alert("Something went wrong.");
                }
            }
        })
    })
})

