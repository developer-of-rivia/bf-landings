document.addEventListener('DOMContentLoaded', () => {
  // This is the bare minimum JavaScript. You can opt to pass no arguments to setup.
  let player = new Plyr('.player');
  let player1 = new Plyr('.player1');
  let player2 = new Plyr('.player2');
  let player3 = new Plyr('.player3');

  // Expose
  window.player = player;
  window.player1 = player1;
  window.player2 = player2;
  window.player3 = player3;

});

$(".clickreg").click(function () {
  var email = $('[name=mail]').val()
  if (email != null && email != '') {
    location.href = 'https://botfaqtor.ru/register?register=' + email;
  } else {
    location.href = 'https://botfaqtor.ru/register';
  }
});

$(".clicklogin").click(function () {
    location.href = 'https://botfaqtor.ru/signin';
});

// Отправка заявке из формы
$('#forms').submit(function (e) {
  $.ajax({
    type: "POST",
    url: 'https://server.botfaqtor.ru/api/Account/send-demo-request',
    data: $('#forms').serialize(),
    success: function (data) {
      //if (data == '201') {
        $('#ok_txt').fadeIn(200).append("Спасибо, ваша заявка успешно отправлена!");
        $('#forms')[0].reset();
        $('#ok_txt').removeClass("err");
      //}
      //if (data == '202') {
        //$('#ok_txt').fadeIn(200).append("Error! Email and Full Name are required!!");
        $('#ok_txt').addClass("err");
      //}
      setTimeout(function () { $('#ok_txt').fadeOut(800); }, 4000);
      setTimeout(function () { $('#ok_txt').html(''); }, 6000);
    }
  });
  e.preventDefault();
});

/**** ACCORDION ****/


! function (n) {
  function t(r) {
    if (e[r]) return e[r].exports;
    var o = e[r] = {
      i: r,
      l: !1,
      exports: {}
    };
    return n[r].call(o.exports, o, o.exports, t), o.l = !0, o.exports
  }
  var e = {};
  t.m = n, t.c = e, t.i = function (n) {
    return n
  }, t.d = function (n, e, r) {
    t.o(n, e) || Object.defineProperty(n, e, {
      configurable: !1,
      enumerable: !0,
      get: r
    })
  }, t.n = function (n) {
    var e = n && n.__esModule ? function () {
      return n.default
    } : function () {
      return n
    };
    return t.d(e, "a", e), e
  }, t.o = function (n, t) {
    return Object.prototype.hasOwnProperty.call(n, t)
  }, t.p = "", t(t.s = 4)
}([function (n, t, e) {
  "use strict";
  ! function (n) {
    function t(n) {
      var t = n || "the-accordion";
      null !== (i = document.querySelector("#" + t)) && (a = i.querySelectorAll(".accordion-panel"), a.length > 0 && e())
    }

    function e() {
      f = u(), a.forEach(function (n) {
        n.querySelector("a").addEventListener("click", r)
      })
    }

    function r(n) {
      n.preventDefault();
      var t = n.currentTarget.parentElement.parentElement;
      f !== t && (c(), o(t))
    }

    function o(n) {
      n.classList.add(l), f = n
    }

    function c() {
      if (void 0 === f) return this;
      f.classList.remove(l)
    }

    function u() {
      for (var n = 0; n < a.length; n++)
        if (a[n].classList.contains(l)) return a[n]
    }
    var i = null,
      l = "is-active",
      a = null,
      f = null;
    n.AccordionJS = t
  }(window)
}, , , , function (n, t, e) {
  n.exports = e(0)
}]);


(function () {
  new AccordionJS();
})();



let rollNetwork = document.querySelector('.roll-network');

function getScrollPercentage() {
	let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	let windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
	let documentHeight = Math.max(
		document.body.scrollHeight, document.body.offsetHeight, document.body.clientHeight,
		document.documentElement.scrollHeight, document.documentElement.offsetHeight, document.documentElement.clientHeight
	);
	return ((scrollTop / (documentHeight - windowHeight)) * 100);
}
document.addEventListener("DOMContentLoaded", function() {
	window.onscroll = function() {
        if(getScrollPercentage() > 97){
            rollNetwork.classList.add('roll-network_scrollbottom');
        }
        if(getScrollPercentage() < 97){
            rollNetwork.classList.remove('roll-network_scrollbottom');
        }
	};
});