function time() {
    Now = new Date();
    var s, s1, s2, s3, s4, s5, s6;
    s1 = Now.getDate();
    s2 = parseInt(Now.getMonth()) + 1;
    s3 = Now.getFullYear();
    s4 = Now.getHours();
    s5 = Now.getMinutes();
    s6=Now.getSeconds();
    s = s1 + "-" + s2 + "-" + s3 + ".You entered page at:" + s4 + ":" + s5 + "and" + s6 + "seconds"
    return s
}