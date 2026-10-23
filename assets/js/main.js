(function () {
  "use strict";

  var data = window.ECOBIN_DATA;
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function $(selector, root) { return (root || document).querySelector(selector); }
  function $all(selector, root) { return Array.prototype.slice.call((root || document).querySelectorAll(selector)); }

  function escapeHtml(text) {
    return String(text)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }

  function icon(name) {
    return '<svg class="icon" aria-hidden="true"><use href="#i-' + name + '"/></svg>';
  }

  function formatNumber(value) {
    return Math.round(value).toLocaleString("id-ID");
  }

  function initials(name) {
    return name.replace(/[^A-Za-z ]/g, "").split(" ").filter(Boolean).slice(0, 2)
      .map(function (part) { return part[0]; }).join("").toUpperCase();
  }

  function render(selector, items, template) {
    var el = $(selector);
    if (el) el.innerHTML = items.map(template).join("");
  }

  /* ---------- Isi halaman dari data.js ---------- */

  function renderContent() {
    var highlight = data.stats.filter(function (s) { return s.highlight; })[0] || data.stats[0];
    $("[data-hero-stat]").innerHTML =
      '<span class="hero-stat-value" data-count="' + highlight.value + '" data-suffix="' + escapeHtml(highlight.suffix) + '">' +
        formatNumber(highlight.value) + escapeHtml(highlight.suffix) + "</span>" +
      '<span class="hero-stat-label">' + escapeHtml(highlight.label) + "</span>";

    render("[data-sdgs]", data.sdgs, function (sdg) {
      return '<li class="sdg">' +
        '<span class="sdg-badge" aria-hidden="true"><small>SDG</small><strong>' + sdg.number + "</strong></span>" +
        "<div><h4>SDG " + sdg.number + ": " + escapeHtml(sdg.title) + "</h4><p>" + escapeHtml(sdg.text) + "</p></div>" +
      "</li>";
    });

    var benefitIcons = { pengguna: ["store", "scan", "coin", "chart"], mitra: ["store", "factory", "chart"] };
    Object.keys(benefitIcons).forEach(function (group) {
      render('[data-benefits="' + group + '"]', data.benefits[group], function (item, i) {
        return '<li class="benefit"><span class="benefit-icon">' + icon(benefitIcons[group][i] || "leaf") + "</span>" +
          "<h3>" + escapeHtml(item.title) + "</h3><p>" + escapeHtml(item.text) + "</p></li>";
      });
    });

    var stepIcons = ["sort", "qr", "drop", "scan", "coin", "ticket"];
    render("[data-steps]", data.steps, function (step, i) {
      return '<li class="step"><span class="step-marker">' + icon(stepIcons[i] || "leaf") + "</span>" +
        "<h3>" + escapeHtml(step.title) + "</h3><p>" + escapeHtml(step.text) + "</p></li>";
    });

    var backstageIcons = ["gauge", "truck", "recycle"];
    render("[data-backstage]", data.behindTheScenes, function (item, i) {
      return '<li class="backstage-item">' + icon(backstageIcons[i] || "leaf") +
        "<div><h4>" + escapeHtml(item.title) + "</h4><p>" + escapeHtml(item.text) + "</p></div></li>";
    });

    render("[data-waste]", data.wasteTypes, function (type) {
      return '<li class="waste waste--' + escapeHtml(type.id) + '">' +
        '<div class="waste-head"><span class="waste-slot" aria-hidden="true"></span><h3>' + escapeHtml(type.name) + "</h3></div>" +
        '<div class="waste-body">' +
          '<div><p class="waste-label">Contoh</p><ul class="waste-examples">' +
            type.examples.map(function (ex) { return "<li>" + escapeHtml(ex) + "</li>"; }).join("") +
          "</ul></div>" +
          '<p class="waste-tip"><strong>Tips:</strong> ' + escapeHtml(type.tip) + "</p>" +
        "</div></li>";
    });

    render("[data-impact]", data.stats, function (stat) {
      return '<li class="impact"><span class="impact-value" data-count="' + stat.value + '" data-suffix="' + escapeHtml(stat.suffix) + '">' +
        formatNumber(stat.value) + escapeHtml(stat.suffix) + '</span><span class="impact-label">' + escapeHtml(stat.label) + "</span></li>";
    });

    render("[data-locations]", data.locations, function (loc) {
      var status = loc.status === "aktif"
        ? '<span class="tag tag--active">Aktif</span>'
        : '<span class="tag tag--soon">Segera Hadir</span>';
      return '<li class="location">' +
        '<span class="location-icon">' + icon("store") + "</span>" +
        "<div><h3>" + escapeHtml(loc.name) + "</h3><p>" + escapeHtml(loc.address) + "</p>" + status + "</div></li>";
    });

    var serviceIcons = { station: "bin", app: "qr", dashboard: "chart", csr: "leaf" };
    render("[data-services]", data.services, function (service) {
      return '<li class="service"><span class="service-icon">' + icon(serviceIcons[service.id] || "leaf") + "</span>" +
        "<h3>" + escapeHtml(service.title) + "</h3><p>" + escapeHtml(service.text) + "</p>" +
        (service.link ? '<a class="service-link" href="' + escapeHtml(service.link.href) + '">' + escapeHtml(service.link.label) + icon("next") + "</a>" : "") +
        "</li>";
    });

    render("[data-partners]", data.partners, function (partner) {
      return '<li class="partner"><span class="partner-mark" aria-hidden="true">' + initials(partner.name) + "</span>" +
        "<span><strong>" + escapeHtml(partner.name) + "</strong><span>" + escapeHtml(partner.role) + "</span></span></li>";
    });

    render("[data-testimonials]", data.testimonials, function (t) {
      return '<li><figure class="testimonial"><blockquote>' + escapeHtml(t.quote) + "</blockquote>" +
        '<figcaption><span class="avatar" aria-hidden="true">' + initials(t.name) + "</span>" +
        "<span><strong>" + escapeHtml(t.name) + "</strong><span>" + escapeHtml(t.role) + " · contoh</span></span></figcaption></figure></li>";
    });

    render("[data-faqs]", data.faqs, function (faq) {
      return '<details class="faq-item"><summary>' + escapeHtml(faq.q) + icon("plus") + "</summary><p>" + escapeHtml(faq.a) + "</p></details>";
    });

    var select = $("[data-partnership-types]");
    data.partnershipTypes.forEach(function (type) {
      var option = document.createElement("option");
      option.value = type;
      option.textContent = type;
      select.appendChild(option);
    });

    var c = data.contact;
    var waNumber = "62" + c.whatsapp.replace(/\D/g, "").replace(/^0/, "");
    var contactItems = [
      { icon: "mail", html: '<a href="mailto:' + escapeHtml(c.email) + '">' + escapeHtml(c.email) + "</a>" },
      { icon: "phone", html: '<a href="https://wa.me/' + waNumber + '">' + escapeHtml(c.whatsapp) + " (WhatsApp)</a>" },
      { icon: "pin", html: "<span>" + escapeHtml(c.address) + "</span>" }
    ];
    var contactHtml = contactItems.map(function (item) { return "<li>" + icon(item.icon) + item.html + "</li>"; }).join("");
    $("[data-contact]").innerHTML = contactHtml;
    $("[data-footer-contact]").innerHTML = contactHtml;

    render("[data-socials]", data.socials, function (s) {
      return '<li><a href="' + escapeHtml(s.href) + '">' + icon(s.id) + '<span class="visually-hidden">' + escapeHtml(s.label) + "</span></a></li>";
    });

    $("[data-year]").textContent = new Date().getFullYear();
  }

  /* ---------- Header dan menu ---------- */

  function initHeader() {
    var header = $("[data-header]");
    var toggle = $("[data-nav-toggle]");
    var nav = $("[data-nav]");
    var label = $(".visually-hidden", toggle);

    function onScroll() { header.classList.toggle("is-solid", window.scrollY > 24); }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    function setOpen(open) {
      toggle.setAttribute("aria-expanded", String(open));
      nav.classList.toggle("is-open", open);
      header.classList.toggle("menu-open", open);
      label.textContent = open ? "Tutup menu" : "Buka menu";
      $("use", toggle).setAttribute("href", open ? "#i-x" : "#i-menu");
    }

    toggle.addEventListener("click", function () { setOpen(toggle.getAttribute("aria-expanded") !== "true"); });
    $all("a", nav).forEach(function (a) { a.addEventListener("click", function () { setOpen(false); }); });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("is-open")) { setOpen(false); toggle.focus(); }
    });
    window.matchMedia("(min-width: 961px)").addEventListener("change", function (e) { if (e.matches) setOpen(false); });

    // Tandai menu sesuai section yang sedang dibaca
    if (!("IntersectionObserver" in window)) return;
    var links = $all(".nav-links a");
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        links.forEach(function (link) {
          link.setAttribute("aria-current", String(link.getAttribute("href") === "#" + entry.target.id));
        });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    links.forEach(function (link) {
      var target = $(link.getAttribute("href"));
      if (target) observer.observe(target);
    });
  }

  /* ---------- Tab Pengguna / Mitra ---------- */

  function initTabs() {
    var tabs = $all('[role="tab"]');

    function select(tab) {
      tabs.forEach(function (t) {
        var selected = t === tab;
        t.setAttribute("aria-selected", String(selected));
        t.tabIndex = selected ? 0 : -1;
        document.getElementById(t.getAttribute("aria-controls")).hidden = !selected;
      });
    }

    tabs.forEach(function (tab, i) {
      tab.addEventListener("click", function () { select(tab); });
      tab.addEventListener("keydown", function (e) {
        var next = null;
        if (e.key === "ArrowRight") next = tabs[(i + 1) % tabs.length];
        if (e.key === "ArrowLeft") next = tabs[(i - 1 + tabs.length) % tabs.length];
        if (e.key === "Home") next = tabs[0];
        if (e.key === "End") next = tabs[tabs.length - 1];
        if (next) { e.preventDefault(); select(next); next.focus(); }
      });
    });
  }

  /* ---------- Slider testimoni ---------- */

  function initSlider() {
    var track = $("[data-testimonials]");
    var prev = $('[data-slide="prev"]');
    var next = $('[data-slide="next"]');

    function step() {
      var item = track.firstElementChild;
      var gap = parseFloat(getComputedStyle(track).columnGap) || 0;
      return item ? item.getBoundingClientRect().width + gap : track.clientWidth;
    }
    function update() {
      prev.disabled = track.scrollLeft <= 4;
      next.disabled = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
    }

    prev.addEventListener("click", function () { track.scrollBy({ left: -step(), behavior: reduceMotion ? "auto" : "smooth" }); });
    next.addEventListener("click", function () { track.scrollBy({ left: step(), behavior: reduceMotion ? "auto" : "smooth" }); });
    track.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();
  }

  /* ---------- Angka menghitung naik ---------- */

  function initCounters() {
    var counters = $all("[data-count]");
    if (reduceMotion || !("IntersectionObserver" in window)) return;

    function run(el) {
      var target = Number(el.dataset.count);
      var suffix = el.dataset.suffix || "";
      var start = null;
      var duration = 1400;
      function frame(time) {
        if (start === null) start = time;
        var progress = Math.min((time - start) / duration, 1);
        var eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = formatNumber(target * eased) + suffix;
        if (progress < 1) requestAnimationFrame(frame);
      }
      requestAnimationFrame(frame);
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        observer.unobserve(entry.target);
        run(entry.target);
      });
    }, { threshold: 0.6 });

    counters.forEach(function (el) {
      el.textContent = "0" + (el.dataset.suffix || "");
      observer.observe(el);
    });
  }

  /* ---------- Muncul saat di-scroll ---------- */

  function initReveal() {
    if (reduceMotion || !("IntersectionObserver" in window)) return;
    var targets = $all(".section .container > *, .cta-grid > *");
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -8% 0px" });
    targets.forEach(function (el) {
      el.classList.add("reveal");
      observer.observe(el);
    });
  }

  /* ---------- Form kemitraan (simulasi) ---------- */

  function initForm() {
    var form = $("[data-form]");
    var success = $("[data-form-success]");
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    var rules = {
      nama: function (v) { return v ? "" : "Isi nama lengkap Anda."; },
      instansi: function (v) { return v ? "" : "Isi nama instansi atau perusahaan Anda."; },
      email: function (v) {
        if (!v) return "Isi email agar tim kami bisa membalas.";
        return emailPattern.test(v) ? "" : "Format email belum benar. Contoh: nama@perusahaan.com";
      },
      jenis: function (v) { return v ? "" : "Pilih jenis kerja sama."; },
      pesan: function (v) {
        if (!v) return "Tulis rencana kerja sama Anda.";
        return v.length >= 20 ? "" : "Tulis minimal 20 karakter agar kami memahami kebutuhan Anda.";
      }
    };

    function check(name) {
      var field = form.elements[name];
      var message = rules[name](field.value.trim());
      field.setAttribute("aria-invalid", String(Boolean(message)));
      $('[data-error-for="' + name + '"]', form).textContent = message;
      return !message;
    }

    Object.keys(rules).forEach(function (name) {
      form.elements[name].addEventListener("blur", function () {
        if (form.elements[name].value.trim() || form.elements[name].getAttribute("aria-invalid") === "true") check(name);
      });
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var firstInvalid = null;
      Object.keys(rules).forEach(function (name) {
        if (!check(name) && !firstInvalid) firstInvalid = form.elements[name];
      });
      if (firstInvalid) { firstInvalid.focus(); return; }

      form.classList.add("is-sent");
      success.hidden = false;
      success.focus();
    });

    $("[data-form-reset]").addEventListener("click", function () {
      form.reset();
      Object.keys(rules).forEach(function (name) { form.elements[name].removeAttribute("aria-invalid"); });
      form.classList.remove("is-sent");
      success.hidden = true;
      form.elements.nama.focus();
    });
  }

  renderContent();
  initHeader();
  initTabs();
  initSlider();
  initCounters();
  initReveal();
  initForm();
})();
