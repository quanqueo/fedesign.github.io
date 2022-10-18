
$().ready(function () {

    // Validate Username
    $("#usercheck").hide();
    let usernameError = true;
    $("#usernames").keyup(function () {
        validateUsername();
    });

    function validateUsername() {
        let usernameValue = $("#usernames").val();
        if (usernameValue.length == "") {
            $("#usercheck").show();
            usernameError = false;
            return false;
        } else if (usernameValue.length < 3 || usernameValue.length > 10) {
            $("#usercheck").show();
            $("#usercheck").html("**length of username must be between 3 and 10");
            usernameError = false;
            return false;
        } else {
            $("#usercheck").hide();
        }
    }

    // Validate Email

    const email = document.getElementById("r-email");
    email.addEventListener("blur", () => {
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let s = email.value;
    if (regex.test(s)) {
      email.classList.remove("is-invalid");
      emailError = true;
    } else {
      email.classList.add("is-invalid");
      emailError = false;
    }
    // $('#r-email').blur(function () {
    //     validateEmail();
    // });

    // function validateEmail() {
    //     const email = document.getElementById("r-email");
    //     let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    //     let s = email.value;
    //     if (regex.test(s)) {
    //         email.classList.remove("is-invalid");
    //         emailError = true;
    //     } else {
    //         email.classList.add("is-invalid");
    //         emailError = false;
    //     }
    // }

    // Validate Password
    $("#passcheck").hide();
    let passwordError = true;
    $("#r-password").keyup(function () {
        validatePassword();
    });
    function validatePassword() {
        let passwordValue = $("#r-password").val();
        if (passwordValue.length == "") {
            $("#passcheck").show();
            passwordError = false;
            return false;
        }
        if (passwordValue.length < 6) {
            $("#passcheck").show();
            $("#passcheck").html(
                "**độ dài mật khẩu của bạn phải từ 6 trở lên"
            );
            $("#passcheck").css("color", "red");
            passwordError = false;
            return false;
        } else {
            $("#passcheck").hide();
        }
    }

    // Validate Confirm Password
    $("#conpasscheck").hide();
    let confirmPasswordError = true;
    $("#re-r-password").keyup(function () {
        validateConfirmPassword();
    });
    function validateConfirmPassword() {
        let confirmPasswordValue = $("#re-r-password").val();
        let passwordValue = $("#r-password").val();
        if (passwordValue != confirmPasswordValue) {
            $("#conpasscheck").show();
            $("#conpasscheck").html("**Mật khẩu không trùng khớp");
            $("#conpasscheck").css("color", "red");
            confirmPasswordError = false;
            return false;
        } else {
            $("#conpasscheck").hide();
        }
    }

    // Submit button
    $("#registerbtn").click(function () {
        // validateUsername();
        validatePassword();
        validateConfirmPassword();
        // validateEmail();
        email.blur();
        if (
            passwordError == true &&
            confirmPasswordError == true &&
            emailError == true
        ) {
            console.log("success")
            return true;
        } else {
            return false;
        }
    });
});
