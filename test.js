function databasecompleted(data) {
    if (data.result == "expiredate") {
        var r = confirm("Ứng dụng BigPen của bạn đã hết hạn xin vui lòng liên hệ thanh toán");
        if (r == true) {
            $("#bigpen")
                .remove()
        } else {
            $("#bigpen")
                .remove()
        }
    } else if (data.result == "notfound") {
        var r = confirm("Bạn chưa đăng ký sử dụng PigPen xin vui lòng đăng ký để sử dụng dịch vụ");
        if (r == true) {
            $("#bigpen")
                .remove()
        } else {
            $("#bigpen")
                .remove()
        }
    } else {
        bigpeninstall();
    }
}
databasecompleted(true)
/*function callGoogleScript() {
    var url = "https://script.google.com/macros/s/AKfycbxeFvSatsgAn8pdyhd5l7B_2cvLCpyaOejodIB1-yT5Oe-B_ilr/exec?callback=databasecompleted&action=checkdomain&admindomain="+window.location.hostname;
    var request = jQuery.ajax({
url:url,
      crossDomain: true,
      method: "GET",
      dataType: "jsonp"
    });
  };callGoogleScript();*/


function bigpeninstall() {

    window.onbeforeunload = function (e) {
        e = e || window.event;


        if (e) {
            e.returnValue = 'Sure?';
        }


        return 'Sure?';
    };


    String.prototype.replaceAll = function (search, replacement) {
        var target = this;
        return target.replace(new RegExp(search, "g"), replacement);
    };

    $.get("//bigpage.myharavan.com/collections.json", function (data) {
        var colections = data.collections;
        colections.reverse();
        $(colections).each(function (i, d) {
            if (d.products_count > 0) {
                var title = d.title;
                var handle = d.handle;
                $('.hara-select-template').append('<option value="' + handle + '">' + title + '</option>');
            }
        })
    });






