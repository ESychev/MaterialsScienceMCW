function startTest() {
    document.tests.reset;
    window.open(document.tests.choise.value, "_blank", "");
    window.close("index.html");
}

function testHtml() {
    var result = 0;

    function test1() {
        var mark = 0;

        if (document.testH.test1[0].checked) {
            mark = 1;
        }

        return mark;
    }

    function test2() {
        var mark = 0;

        if (document.testH.test2[0].checked) {
            mark = 1;
        }

        return mark;
    }

    function test3() {
        var mark = 0;

        var mark = 0;

        if (document.testH.test3[0].checked) {
            mark = 1;
        }

        return mark;
    }

    function test4() {
        var mark = 0;

        if (document.testH.test4[0].checked) {
            mark = 1;
        }

        return mark;
    }

    function test5() {
        var mark = 0;

        if (document.testH.test5[0].checked) {
            mark = 1;
        }

        return mark;
    }

    function test6() {
        var mark = 0;

        if (document.testH.test6[0].checked) {
            mark = 1;
        }

        return mark;
    }

    function test7() {
        var mark = 0;

        if (document.testH.test7[0].checked) {
            mark = 1;
        }

        return mark;
    }

    function test8() {
        var mark = 0;

        if (document.testH.test8[0].checked) {
            mark = 1;
        }

        return mark;
    }

    function test9() {
        var mark = 0;

        if (document.testH.test9[0].checked) {
            mark = 1;
        }

        return mark;
    }

    function test10() {
        var mark = 0;

        if (document.testH.test10[0].checked) {
            mark = 1;
        }

        return mark;
    }

    function test11() {
        var mark = 0;

        if (document.testH.test11[0].checked) {
            mark = 1;
        }

        return mark;
    }

    function test12() {
        var mark = 0;

        if (document.testH.test12[0].checked) {
            mark = 1;
        }

        return mark;
    }

    function test13() {
        var mark = 0;

        if (document.testH.test13[0].checked) {
            mark = 1;
        }

        return mark;
    }

    function test14() {
        var mark = 0;

        if (document.testH.test14[0].checked) {
            mark = 1;
        }

        return mark;
    }

    function test15() {
        var mark = 0;

        if (document.testH.test15[0].checked) {
            mark = 1;
        }

        return mark;
    }

    result = test1() + test2() + test3() + test4() + test5() + test6() + test7() + test8() + test9() + test10() + test11() + test12() + test13() + test14() + test15();
    alert(" Количество верных ответов из 15  = " + result);

    document.getElementById('result_multi').innerHTML = result;

}


$(function qrprint() {
    $(window).bind('beforeprint', function qrprint() {
        if ($("#print-qr").length == 0) {
            $('body').append(
                '<style>@media screen {#print-qr{display: none;}}</style>' +
                '<p id="print-qr"><img src="https://chart.googleapis.com/chart?cht=qr&chs=200x200&choe=UTF-8&chld=H&chl=https://esychev.github.io/MaterialsScienceMCW/index.html' + window.location.href + '"></p>'
            );
        }
    });
});