(function judgeTime() {
  function timeRange(beginTime, endTime) {
    var img = document.getElementsByClassName("img")[0];

    var strb = beginTime.split(":");
    if (strb.length != 2) return false;

    var stre = endTime.split(":");
    if (stre.length != 2) return false;
  
    var b = new Date();
    var e = new Date();
    var n = new Date();
  
    b.setHours(strb[0]);
    b.setMinutes(strb[1]);
    e.setHours(stre[0]);
    e.setMinutes(stre[1]);
    var t = parseInt(e.getTime());
    if (b.getTime() > e.getTime()) t = t + 24 * 60 * 60 * 1000;

    (n.getTime() - b.getTime() > 0 && parseInt(n.getTime()) - t < 0)
      ? img.setAttribute('src', '1.png')
      : img.setAttribute('src', '2.png');
  }
  timeRange("13:00", "8:00");
})();// 的说法就是大部分几百万