function deleteCookie(name) {
    var d = new Date();
    d.setTime(d.getTime() - (60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = name + "=;" + expires + ";path=/";
}

module.exports = {deleteCookie};