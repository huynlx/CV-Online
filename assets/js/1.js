$(document).ready(function() {
    $(".dropdown-toggle").click(function() {
        $(this).next().toggleClass("clicked");
    });

    // $(".owl-carousel").on("initialized.owl.carousel", () => {
    //     setTimeout(() => {
    //         $(".owl-item.active .owl-slide-animated").addClass("is-transitioned");
    //         $("section").show();
    //     }, 200);
    // });

    // const $owlCarousel = $(".owl-carousel").owlCarousel({
    //     items: 1,
    //     loop: true,
    //     nav: true,
    //     navText: [
    //         '<svg width="50" height="50" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg>',
    //         '<svg width="50" height="50" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>' /* icons from https://iconmonstr.com */
    //     ]
    // });

    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        // navText: ['<i class="fas fa-chevron-left" aria-hidden="true"></i>', '<i class="fas fa-chevron-right" aria-hidden="true"></i>']
        navText: ['<svg width="50" height="50" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg>', '<svg width="50" height="50" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>']
    });

    // $owlCarousel.on("changed.owl.carousel", e => {
    //     $(".owl-slide-animated").removeClass("is-transitioned");

    //     const $currentOwlItem = $(".owl-item").eq(e.item.index);
    //     $currentOwlItem.find(".owl-slide-animated").addClass("is-transitioned");

    //     const $target = $currentOwlItem.find(".owl-slide-text");
    //     doDotsCalculations($target);
    // });

    // $owlCarousel.on("resize.owl.carousel", () => {
    //     setTimeout(() => {
    //         setOwlDotsPosition();
    //     }, 50);
    // });

    // /*if there isn't content underneath the carousel*/
    // //$owlCarousel.trigger("refresh.owl.carousel");

    // setOwlDotsPosition();

    // function setOwlDotsPosition() {
    //     const $target = $(".owl-item.active .owl-slide-text");
    //     doDotsCalculations($target);
    // }

    // function doDotsCalculations(el) {
    //     const height = el.height();
    //     const {
    //         top,
    //         left
    //     } = el.position();
    //     const res = height + top + 250;

    //     $(".owl-carousel .owl-dots").css({
    //         top: `${res}px`,
    //         left: `46%`,

    //     });
    // }
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true

    });
    owl.trigger('play.owl.autoplay', [3000]);

    var scrollTrigger = 400; // px
    backToTop = function() {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > scrollTrigger) {
            $('#back-to-top').show();
            alert("cc");
           
        } else {
            $('#back-to-top').hide();
        }
    };
    $(window).on('scroll', function() {
        backToTop();
    });
    $('#back-to-top').on('click', function(e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });


    var base_url = window.location.origin;
    console.log(base_url);

    //dan_toc
    var enthicBase_url = base_url + '/gt1/Sources/assets/json/enthic.json';
    $.getJSON(enthicBase_url, function(data) {
        $.each(data, function(index, value) {
            // for (i in value) {
            //console.log(value[i].TEN);    
            //$('#sel2').append('<option value="' + value[i].code + '">' + value[i].TEN + '</option>');
            $('#selDanTocAddHsxt').append('<option value="' + value.TEN + '">' + value.TEN + '</option>');
            // }
        });
    });

    // //xa_phuong
    // var ward_url = base_url + '/gt1/assets/json/xa_phuong.json';
    // $.getJSON(ward_url, function(data) {
    //     $.each(data, function(index, value) {
    //         // for (i in value) {
    //         //console.log(value[i].TEN);    
    //         //$('#sel2').append('<option value="' + value[i].code + '">' + value[i].TEN + '</option>');
    //         $('#selXaPhuongAddHsxt').append('<option value="' + value.name_with_type + '">' + value.name_with_type + '</option>');
    //         // }
    //     });
    // });

    var provinceBase_url = base_url + '/gt1/Sources/assets/json/Province.json';
    // base_url + '/CongTuyenSinhDHTL/Sources/assets/json/Province.json';
    $.getJSON(provinceBase_url, function(data) {
        $.each(data, function(index, value) {
            //console.log(index);
            $('#selNoiSinhAddHsxt').append('<option value="' + value.CityName + '">' + value.CityName + '</option>');
            $('#selTinhThanhPhoAddHsxt').append('<option value="' + value.CityName + '">' + value.CityName + '</option>');
            // $('#seltinhthanhphocsdt').append('<option value="' + value.CityName + '">' + value.CityName + '</option>');
            $('#selTinhThanhPhoLop10AddHsxt').append('<option value="' + value.CityName + '">' + value.CityName + '</option>');
            $('#selTinhThanhPhoLop11AddHsxt').append('<option value="' + value.CityName + '">' + value.CityName + '</option>');
            $('#selTinhThanhPhoLop12AddHsxt').append('<option value="' + value.CityName + '">' + value.CityName + '</option>');
        });
    });

    $('#selTinhThanhPhoAddHsxt').change(function() {
        //console.log("afdasdfa");
        //$("#selquanhuyencsdt").val([]);
        //$("#selquanhuyencsdt").val();

        //document.getElementById("selquanhuyencsdt").empty();
        var districtBase_url = base_url + '/gt1/Sources/assets/json/District.json';
        var selTinhThanhPhoAddHsxtValue = selTinhThanhPhoAddHsxt.value;
        // console.log(selTinhThanhPhoAddHsxtValue);
        //console.log(seltinhthanhphocsdtValue);
        $.getJSON(districtBase_url, function(data) {
            var code = [];
            $.each(data, function(index, value) {
                if (value.CityName == selTinhThanhPhoAddHsxtValue) {
                    //console.log(value.DistrictName);
                    $('#selQuanHuyenAddHsxt').append('<option value="' + value.DistrictName + '">' + value.DistrictName + '</option>');

                }
            });
        });
        var select = document.getElementById("selQuanHuyenAddHsxt");
        var length = select.options.length;
        for (i = 0; i < length; i++) {
            select.options[i] = null;
        }
    });
    //xa_phuong
    // var ward_url = base_url + '/gt1/assets/json/xa_phuong.json';
    $('#selQuanHuyenAddHsxt').change(function() {

        var select = document.getElementById("selXaPhuongAddHsxt");
        var length = select.options.length;
        for (i = length - 1; i >= 0; i--) {
            select.options[i] = null;
        }
        //document.getElementById("selquanhuyencsdt").empty();
        var ward_url = base_url + '/gt1/Sources/assets/json/ward.json';
        var selQuanHuyenAddHsxtValue = selQuanHuyenAddHsxt.value;
        //console.log(seltinhthanhphocsdtValue);
        $.getJSON(ward_url, function(data) {
            var code = [];
            $.each(data, function(index, value) {
                // var str = value.path_with_type;
                // var myStrings = str.split(",");
                // var marco = myStrings[1];
                // console.log(marco);
                if (value['Quận Huyện'] == selQuanHuyenAddHsxtValue) {
                    //console.log(value.SchoolName);
                    $('#selXaPhuongAddHsxt').append('<option value="' + value['Phường Xã'] + '">' + value['Phường Xã'] + '</option>');

                }
            });
        });
    });





    $('#selTinhThanhPhoLop10AddHsxt').change(function() {
        var select = document.getElementById("selQuanHuyenLop10AddHsxt");
        var length = select.options.length;
        for (i = length - 1; i >= 0; i--) {
            select.options[i] = null;
        }

        var districtBase_url = base_url + '/gt1/Sources/assets/json/District.json';
        var selTinhThanhPhoLop10AddHsxtValue = selTinhThanhPhoLop10AddHsxt.value;

        $.getJSON(districtBase_url, function(data) {
            var code = [];
            $.each(data, function(index, value) {
                if (value.CityName == selTinhThanhPhoLop10AddHsxtValue) {

                    $('#selQuanHuyenLop10AddHsxt').append('<option value="' + value.DistrictName + '">' + value.DistrictName + '</option>');

                }
            });
        });
    });

    $('#selQuanHuyenLop10AddHsxt').change(function() {

        var select = document.getElementById("selTruongThptLop10AddHsxt");
        var length = select.options.length;
        for (i = length - 1; i >= 0; i--) {
            select.options[i] = null;
        }
        //document.getElementById("selquanhuyencsdt").empty();
        var schoolBase_url = base_url + '/gt1/Sources/assets/json/School.json';
        var selQuanHuyenLop10AddHsxtValue = selQuanHuyenLop10AddHsxt.value;
        //console.log(seltinhthanhphocsdtValue);
        $.getJSON(schoolBase_url, function(data) {
            var code = [];
            $.each(data, function(index, value) {
                if (value.DistrictName == selQuanHuyenLop10AddHsxtValue) {
                    //console.log(value.SchoolName);
                    $('#selTruongThptLop10AddHsxt').append('<option value="' + value.SchoolName + '">' + value.SchoolName + '</option>');

                }
            });
        });
    });

    $('#selTinhThanhPhoLop11AddHsxt').change(function() {
        var select = document.getElementById("selQuanHuyenLop11AddHsxt");
        var length = select.options.length;
        for (i = length - 1; i >= 0; i--) {
            select.options[i] = null;
        }
        var districtBase_url = base_url + '/gt1/Sources/assets/json/District.json';
        var selTinhThanhPhoLop11AddHsxtValue = selTinhThanhPhoLop11AddHsxt.value;

        $.getJSON(districtBase_url, function(data) {
            var code = [];
            $.each(data, function(index, value) {
                if (value.CityName == selTinhThanhPhoLop11AddHsxtValue) {

                    $('#selQuanHuyenLop11AddHsxt').append('<option value="' + value.DistrictName + '">' + value.DistrictName + '</option>');

                }
            });
        });
    });

    $('#selQuanHuyenLop11AddHsxt').change(function() {

        var select = document.getElementById("selTruongThptLop11AddHsxt");
        var length = select.options.length;
        for (i = length - 1; i >= 0; i--) {
            select.options[i] = null;
        }

        var schoolBase_url = base_url + '/gt1/Sources/assets/json/School.json';
        var selQuanHuyenLop11AddHsxtValue = selQuanHuyenLop11AddHsxt.value;

        $.getJSON(schoolBase_url, function(data) {
            var code = [];
            $.each(data, function(index, value) {
                if (value.DistrictName == selQuanHuyenLop11AddHsxtValue) {

                    $('#selTruongThptLop11AddHsxt').append('<option value="' + value.SchoolName + '">' + value.SchoolName + '</option>');

                }
            });
        });
    });

    $('#selTinhThanhPhoLop12AddHsxt').change(function() {
        var select = document.getElementById("selQuanHuyenLop12AddHsxt");
        var length = select.options.length;
        for (i = length - 1; i >= 0; i--) {
            select.options[i] = null;
        }
        var districtBase_url = base_url + '/gt1/Sources/assets/json/District.json';
        var selTinhThanhPhoLop12AddHsxtValue = selTinhThanhPhoLop12AddHsxt.value;

        $.getJSON(districtBase_url, function(data) {
            var code = [];
            $.each(data, function(index, value) {
                if (value.CityName == selTinhThanhPhoLop12AddHsxtValue) {

                    $('#selQuanHuyenLop12AddHsxt').append('<option value="' + value.DistrictName + '">' + value.DistrictName + '</option>');

                }
            });
        });
    });

    $('#selQuanHuyenLop12AddHsxt').change(function() {

        var select = document.getElementById("selTruongThptLop12AddHsxt");
        var length = select.options.length;
        for (i = length - 1; i >= 0; i--) {
            select.options[i] = null;
        }

        var schoolBase_url = base_url + '/gt1/Sources/assets/json/School.json';
        var selQuanHuyenLop12AddHsxtValue = selQuanHuyenLop12AddHsxt.value;

        $.getJSON(schoolBase_url, function(data) {
            var code = [];
            $.each(data, function(index, value) {
                if (value.DistrictName == selQuanHuyenLop12AddHsxtValue) {

                    $('#selTruongThptLop12AddHsxt').append('<option value="' + value.SchoolName + '">' + value.SchoolName + '</option>');

                }
            });
        });
    });
    // var str = "Angelo,Marco,Paul";
    // var str2 = "Phường Cái Khế, Quận Ninh Kiều, Thành phố Cần Thơ"
    // var myStrings = str2.split(",");
    // var marco = myStrings[1];
    // console.log(marco);

    $('#themnguyenvongdangky').click(function() {
        var text = $(this).text();
        if (text === "+ Nguyện vọng đăng ký") {
            $(this).text("- Nguyện vọng đăng ký");
            $("#searchContent").show();
        } else {
            $(this).text("+ Nguyện vọng đăng ký");
            $("#searchContent").hide();
        }
    });

    $("#csdt_edit_ts").change(function() {
        // e.preventDefault();
        var csdt_edit_ts = $("#csdt_edit_ts");
        var url = base_url + "/gt1/Sources/index.php/home/nhom_ndt";
        var depart_id = csdt_edit_ts.val();
        // alert(depart_id);
        $.ajax({
            url: '' + url + '', // gọi đến file server articles.php để xử lý;
            data: { id: depart_id }, //lấy toàn thông tin các fields trong form bằng hàm serialize của jquery
            type: 'POST', // phương thức dữ liệu được truyền đi
            datatype: 'json', // định dạng dữ liệu trả về là json
            success: function(res) { //kết quả trả về từ server nếu gửi thành công
                // alert("cc");
                // var option = "";
                $("#nhomnganhxettuyen").empty();
                $("#nhomnganhxettuyen").append("<option value=''>" + '- Chọn ngành -' + "</option>");
                $.each($.parseJSON(res), function(key, value) {

                    //option += "<option value='"+value['id']+"'>"+value['title']+"</option>"
                    // console.log(value.length);
                    // var 
                    // for (var key in value) {
                    //if (key=='tennguyenvong')
                    console.log(value);
                    // }
                    // $('#myTable').append("<tr><td>" + value['ten_nguyen_vong'] + "</td><td>" + value['ma_ndt'] + "</td><td>" + value['ma_thm'] + "</td><td>" + value['trang_thai'] + "</td></tr>");
                    //console.log(value[tennguyenvong]);

                    $("#nhomnganhxettuyen").append("<option value='" + value['ma_ndt'] + "'>" + value['ten_ndt'] + "</option>");
                    // $("#maxettuyen").val(value['ma_ndt']);
                })

                // $("#staff").empty();

                // for (var i = 0; i < res.length; i++) {
                //     var id = res[i]['id'];
                //     var name = res[i]['name'];
                //     $("#staff").append("<option value='" + id + "'>" + name + "</option>");
                // }

                //console.log(data['tennguyenvong']);
                //   $("#sub_category").html(option);
                //console.log(data);
                // $.each($.parseJSON(data),function(key, value){
                //         console.log(key+" "+value);
                // })
                //$(table).append("<tr><th>x</th><th>Mã xét tuyển</th><th>Tổ hợp xét tuyển</th><th>Trạng thái</th><th>#</th></tr>");
                //
                // var row = 
                // "<th>$x</th><th>Mã xét tuyển</th><th>Tổ hợp xét tuyển</th><th>Trạng thái</th><th>#</th>"

                //     //Add row
                //     table.append(row.compose({
                //         'id': 3,
                //         'name': 'Lee',
                //         'phone': '123 456 789'
                //     }));
                //console.log(data);
                // ĐỌc dữ liệu

                // $("#form_file_minh_chung").show();
            }
        });
    });

    $('#nhomnganhxettuyen').change(function() {
        //console.log(nhomnganhxettuyen.value);
        $value = $('#nhomnganhxettuyen').val();
        $("#maxettuyen").val($value);
        // alert($value);
        // $("#maxettuyen").val() = nhomnganhxettuyen.val();
        // console.log(nhomnganhxettuyen.val());

        // $date = "123";
        // $.ajax({
        //     url: './admin/add_hsxt/x', 
        //     type: "POST",
        //     dataType:'text', 
        //     data: ({'date': $date}),
        //     success: function(data){
        //         console.log($date);
        //     }
        // }); 
    });

    var btnNguyenVong = $("#btnNguyenVong");
    $(btnNguyenVong).click(function(e) {
        e.preventDefault();
        // console.log(aa + "," + bb);


        var url = base_url + "/gt1/Sources/home/pro_add_nguyen_vong";
        console.log("Nhay vao day: " + url);
        var csdt_edit_ts = $("#csdt_edit_ts").val();
        console.log(csdt_edit_ts);
        var tennguyenvong = $("#tennguyenvong").val();
        console.log(tennguyenvong);
        var nhomnganhxettuyen = $("#nhomnganhxettuyen").val();
        console.log(nhomnganhxettuyen);
        var tohopxettuyen = $("#tohopxettuyen").val();
        console.log(tohopxettuyen);
        var ma_hsxt = $("#ma_hsxt").val();
        console.log(ma_hsxt);
        if (csdt_edit_ts != '' && nhomnganhxettuyen != '') {
            $.ajax({
                url: '' + url + '', // gọi đến file server articles.php để xử lý;
                data: { ma_hsxt: ma_hsxt, tennguyenvong: tennguyenvong, nhomnganhxettuyen: nhomnganhxettuyen, csdt_edit_ts: csdt_edit_ts, tohopxettuyen: tohopxettuyen }, //lấy toàn thông tin các fields trong form bằng hàm serialize của jquery
                type: 'POST', // phương thức dữ liệu được truyền đi
                datatype: 'json', // định dạng dữ liệu trả về là json
                success: function(data) { //kết quả trả về từ server nếu gửi thành công
                    //   var option = "";
                    // $("#MyTable tr#table").empty();
                    $.each($.parseJSON(data), function(key, value) {
                        if (key == "alert" && value == "1") {
                            alert('Nguyện vọng đã tồn tại!!!');
                        } else {
                            $('#myTable').append("<tr id='table'><td class='text-center'>" + value['ten_nguyen_vong'] + "</td><td class='text-center'>" + value['ma_ndt'] + "</td><td class='text-center'>" + value['ma_thm'] + "</td><td class='text-center'>" + value['trang_thai'] + "</td></tr>");

                        }
                        // $("#myTable").remove();

                        //option += "<option value='"+value['id']+"'>"+value['title']+"</option>"
                        //console.log(value.length);
                        // var 
                        // for (var key in value) {
                        //     //if (key=='tennguyenvong')
                        //     console.log(value);
                        // }
                        //console.log(value[tennguyenvong]);
                    })

                    //console.log(data['tennguyenvong']);
                    //   $("#sub_category").html(option);
                    //console.log(data);
                    // $.each($.parseJSON(data),function(key, value){
                    //         console.log(key+" "+value);
                    // })
                    //$(table).append("<tr><th>x</th><th>Mã xét tuyển</th><th>Tổ hợp xét tuyển</th><th>Trạng thái</th><th>#</th></tr>");
                    //
                    // var row = 
                    // "<th>$x</th><th>Mã xét tuyển</th><th>Tổ hợp xét tuyển</th><th>Trạng thái</th><th>#</th>"

                    //     //Add row
                    //     table.append(row.compose({
                    //         'id': 3,
                    //         'name': 'Lee',
                    //         'phone': '123 456 789'
                    //     }));
                    //console.log(data);
                    // ĐỌc dữ liệu
                    $("#form_file_minh_chung").slideDown(300);
                }
            });
        }
    });

    $("#labelnopkemfileminhchung").click(function() {
        var text = $(this).text();
        if (text === "+Nộp kèm file minh chứng và hoàn thành hồ sơ") {
            $(this).text("-Nộp kèm file minh chứng và hoàn thành hồ sơ");
            //$("#searchContent").show();
            $('#nopkemfileminhchungDiv').show();
        } else {
            $(this).text("+Nộp kèm file minh chứng và hoàn thành hồ sơ");
            $("#nopkemfileminhchungDiv").hide();
        }
    });


    var form_minh_chung = $("#form_minh_chung");
    var btn_luu_file_minh_chung = $("#btn_luu_file_minh_chung");
    var countXM1 = 1;
    $(btn_luu_file_minh_chung).click(function(e) {
        e.preventDefault();
        var url = base_url + "/gt1/Sources/home/pro_luu_file_minh_chung";
        console.log("Nhay vao day: " + url);
        // var countXM = 1;
        var inputFile = $("input[name=file]");
        //console.log(inputFile);
        // var countXM1 = 1;
        var fileToUpLoad = inputFile[0].files[0];
        //console.log(fileToUpLoad);

        var formData = new FormData();
        var ma_hsxt = $("#ma_hsxt").val();
        formData.append("file", fileToUpLoad);
        formData.append("ma_hsxt", ma_hsxt);

        $.ajax({
            type: "POST",
            url: url,
            data: formData,
            processData: false,
            contentType: false,
            success: function(data) {
                // alert("ok");
                //console.log(data);
                $.each($.parseJSON(data), function(key, value) {
                    //console.log(key + ": " + value);
                    if (key == "status" && value == "success") {
                        console.log("Fi le successfully uploaded");

                        //console.log(fileToUpLoad);
                        console.log("name: " + fileToUpLoad["name"]);
                        console.log("size: " + fileToUpLoad["size"] + " byte");

                        $(form_minh_chung).append('<tr id="file"><td class="text-center "><input type="text" max="100" class="form-control" ng-model="file.FileDescription" placeholder="..."></td><td class="text-center ">' + fileToUpLoad["name"] + '</td><td class="text-center ">' + fileToUpLoad["size"] + ' byte</td><td class="text-center "><button class="btn bg-danger" onclick=ccc() id="ccc" >Xoá</button></td></tr>');
                        countXM1++;
                    }



                    // Mở nút hoàn thành
                    $("#btnHoanThanhHS").show();

                });

            }
        });
    });

    // var countXM2 = 1;
    // $('#btn').on('click', function(e) {
    //     alert("Your values are :" + $(this).data("value"));
    // });
    ccc = function() {
        // console.log(name);
        if (confirm("Are you sure delete?")) {
            // var inputFile = $("input[name=file]");
            // var fileToUpLoad = inputFile[0].files[0];
            // var name = fileToUpLoad["name"];

            var countXM2 = 1;
            var ma_hsxt = $("#ma_hsxt").val();
            console.log($(this).data("value"));
            // alert(ma_hsxt);
            var url = base_url + "/gt1/Sources/home/xoa_file";
            // window.location.href = 'delete.php?id=' + id;
            // txt = "You pressed OK!";
            $.ajax({
                type: "POST",
                url: '' + url + '',
                data: { ma_hsxt: ma_hsxt },
                datatype: 'json',
                success: function(data) {
                    // alert("ok");
                    //console.log(data);
                    $("#form_minh_chung tr#file").empty();
                    $.each($.parseJSON(data), function(key, value) {

                        console.log(key + ": " + value);
                        // console.log(key);
                        // if (key == "status" && value == "success") {
                        //     console.log("Fi le successfully uploaded");

                        //     //console.log(fileToUpLoad);
                        //     console.log("name: " + fileToUpLoad["name"]);
                        //     console.log("size: " + fileToUpLoad["size"] + " byte");

                        $(form_minh_chung).append('<tr id="file"><td class="text-center "><input type="text" max="100" class="form-control" ng-model="file.FileDescription" placeholder="..."></td><td class="text-center ">' + value["ten_file"] + '</td><td class="text-center ">' + value["dung_luong"] + ' byte</td><td class="text-center "><button class="btn bg-danger" onclick=ccc() id="ccc" >Xoá</button></td></tr>');
                        // }
                        countXM2++;


                        // Mở nút hoàn thành
                        // $("#btnHoanThanhHS").show();
                    });
                }
            });
        }
    }



    // login

    // $('.me-form-login').hide();

    $('.btn-close').click(function() {
        $(".me-form-login").hide();
    })

    $(".btnDangNhap").click(function() {
        $(".me-form-login").toggle();
    });




});