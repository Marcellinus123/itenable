(function () {
  'use strict';

  /* Hamburger: swap menu / close icon and keep aria in sync */
  var menu = document.getElementById('mainNav');
  var toggle = document.querySelector('.menu-toggle');
  if (menu && toggle) {
    var icon = toggle.querySelector('.material-icons');
    menu.addEventListener('show.bs.collapse', function () { icon.textContent = 'close'; });
    menu.addEventListener('hide.bs.collapse', function () { icon.textContent = 'menu'; });
  }

  /* Portfolio filter */
  var filters = document.querySelectorAll('.filter');
  var items = document.querySelectorAll('.work-item');
  filters.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var f = btn.getAttribute('data-filter');
      filters.forEach(function (b) { b.classList.toggle('active', b === btn); });
      items.forEach(function (it) {
        it.classList.toggle('is-hidden', f !== 'all' && it.getAttribute('data-cat') !== f);
      });
    });
  });

  /* Contact form */
  var form = document.getElementById('contactForm');
  if (form) {
    var btn = document.getElementById('sendBtn');
    var status = document.getElementById('formStatus');
    var endpoint = form.getAttribute('data-endpoint');

    function notice(ok, html) {
      if (!status) return;
      status.innerHTML = '<div class="notice ' + (ok ? 'notice-ok' : 'notice-err') + '" role="' + (ok ? 'status' : 'alert') + '">' +
        '<span class="material-icons" aria-hidden="true">' + (ok ? 'check_circle' : 'error') + '</span><div>' + html + '</div></div>';
      status.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    form.addEventListener('submit', function (ev) {
      if (!form.checkValidity()) return;
      if (btn) { btn.disabled = true; btn.lastChild.textContent = ' Sending...'; }
      if (!endpoint) return;                 // PHP build: normal post
      ev.preventDefault();                   // static build: send in the background
      var data = {};
      new FormData(form).forEach(function (v, k) { data[k] = v; });
      fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(data)
      }).then(function (r) { return r.json().catch(function () { return {}; }); })
        .then(function (res) {
          if (res.success === 'true' || res.success === true) {
            form.reset();
            notice(true, '<strong>Message sent.</strong> Thank you, we will get back to you shortly.');
          } else {
            throw new Error(res.message || 'failed');
          }
        })
        .catch(function () {
          notice(false, '<strong>Sorry, the message could not be sent.</strong> Please call or WhatsApp us on ' +
            (form.getAttribute('data-phone') || 'the numbers on this page') + '.');
        })
        .then(function () {
          if (btn) { btn.disabled = false; btn.lastChild.textContent = ' Send Message'; }
        });
    });
  }
})();
