
$().ready(function () {

    // Validate Email
    $('#r-email').blur(function () {
        validateEmail();
    });
    let emailError = true;
    function validateEmail() {
        const email = document.getElementById("r-email");
        let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
        let s = email.value;
        if (regex.test(s)) {
            email.classList.remove("is-invalid");
            emailError = true;
        } else {
            email.classList.add("is-invalid");
            emailError = false;
        }
    }

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
            $("#passcheck").html("**vui lòng nhập trường này!")
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
            passwordError = true;
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
        let isEmpty = (confirmPasswordValue == "") ? true : false;
        let isnotEqual = (passwordValue != confirmPasswordValue) ? true : false;
        if (isEmpty || isnotEqual) {
            $("#conpasscheck").show();
            $("#conpasscheck").css("color", "red");
            if (isEmpty) $("#conpasscheck").html("**vui lòng nhập trường này!");
            else $("#conpasscheck").html("**Mật khẩu không trùng khớp");
            confirmPasswordError = false;
            return false;
        } else {
            confirmPasswordError = true;
            $("#conpasscheck").hide();
        }
    }

    // Submit button
    $("#registerbtn").click(function () {
        validatePassword();
        validateConfirmPassword();
        validateEmail();
        if (
            passwordError == true &&
            confirmPasswordError == true &&
            emailError == true
        ) {
            alert("Đăng ký thành công, chuyển về trang đăng nhập!");
            $("#ToLoginForm").click();
            return true;
        } else {
            return false;
        }
    });

    $("#ToRegisterForm").click(function (e) {
        $("#section-login").removeClass("d-flex").addClass("d-none");
        $("#section-register").removeClass("d-none").addClass("d-flex");
        document.title = "Đăng ký tài khoản mới";
        e.preventDefault();
    })

    $("#ToLoginForm").click(function (e) {
        $("#section-register").removeClass("d-flex").addClass("d-none");
        $("#section-login").removeClass("d-none").addClass("d-flex");
        document.title = "Đăng nhập";
        e.preventDefault();
    })
});
