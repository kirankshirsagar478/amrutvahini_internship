$(document).ready(function() {
        $('#userReference').select2();
        $('#countrySelect').select2();
        $('#userEducationStatus').select2();
        $('#userDegree').select2();
        $('#userFieldOfStudy').select2();
        $('#e4').select2();
        $('#e8').select2();
        $('#e90').select2();
    });

    function getCookie(cookieName) {
        const name = cookieName + "=";
        const decodedCookie = decodeURIComponent(document.cookie);
        const cookieArray = decodedCookie.split(';');
        
        for (let i = 0; i < cookieArray.length; i++) {
            let cookie = cookieArray[i];
            while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1);
            }
            if (cookie.indexOf(name) === 0) {
            return cookie.substring(name.length, cookie.length);
            }
        }
        return "";
    }

    function setCookie(name, value, daysToExpire) {
        var cookie = name + "=" + encodeURIComponent(value);

        if (daysToExpire) {
            var expirationDate = new Date();
            expirationDate.setDate(expirationDate.getDate() + daysToExpire);
            cookie += "; expires=" + expirationDate.toUTCString();
        }

        document.cookie = cookie;
    }

    // JavaScript to populate the country <select> using the Rest Countries API

