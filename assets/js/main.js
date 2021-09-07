$(document).ready(function ($) {
  var url_hash = getUrlHash();
  setUrl(url_hash);
  loadTab();
  var dwidth = checkWidth();
  $("html,body").animate({
    scrollTop:
      url_hash && url_hash != ""
        ? $(".themestyle").offset().top
        : $("html,body").offset().top,
  });
  $(".fixed-scroll-table")
    .clone(true)
    .appendTo(".table-scroll")
    .addClass("clone");
  $(".fixed-scroll-table-x")
    .clone(true)
    .appendTo(".table-scroll-x")
    .addClass("clone");
  $(".fixed-scroll-table-y")
    .clone(true)
    .appendTo(".table-scroll-y")
    .addClass("clone");
  $(".hide-menu").click(function () {
    $(".navbar-collapse").removeClass("in");
  });

  $(window).resize(function () {
    var windowSize = checkWidth();
    if (windowSize > 769) {
      $(".navbar-collapse,.navbar-collapse-inner").removeClass("in");
      $(".navbar-collapse").addClass("");
      $(
        "#navbar-toggle,#navbar-toggle-1,#navbar-toggle-2,#navbar-toggle-3,#navbar-toggle-4,#navbar-toggle-5"
      ).addClass("collapsed");
      $("#mobile-menu").removeClass("mobile-menu-open");
      $("#mobile-header").removeClass("mobile-header-open");
      $("#black-overlay").removeClass("display");
    }
    loadTab();
  });
  $('a[data-toggle="tab"]').click(function (e) {
    var hash = $(this).attr("href").split("#")[1];
    var windowSize = checkWidth();
    if (windowSize > 769) {
      if (hash == "aspire-1-and-aspire-2") {
        $('#aspire-1-and-aspire-2 a[href="#overview"]').tab("show");
        hash = "overview";
      }
      if (hash == "abbreviation-references") {
        $('#abbreviation-references a[href="#Abbreviations"]').tab(
          "show"
        );
        hash = "Abbreviations";
      }
      if (hash == "study-design-endpoint") {
        $('#study-design-endpoint a[href="#Study-design"]').tab("show");
        hash = "Study-design";
      }
      if (hash == "efficacy-results") {
        $('#efficacy-results a[href="#Primary-Aspire-1"]').tab("show");
        hash = "Primary-Aspire-1";
      }
      if (hash == "safety-results") {
        $('#safety-results a[href="#Adverse-Events"]').tab("show");
        hash = "Adverse-Events";
      }
    } else {
      $(".nav-tabs>li").removeClass("active");
      $('a[href="#' + hash + '"]')
        .parents("li")
        .addClass("active");
      $("#mobile-header").html(
        $('a[href="#' + hash + '"]').attr("title")
      );
      $(".tab-pane").removeClass("active in");
      $("#" + hash)
        .parents(".tab-pane")
        .addClass("active in");
      $("#" + hash).addClass("active in");
      $("html,body").animate({
        scrollTop: $(".themestyle").offset().top,
      });
    }
    setUrl(hash);
  });

  /* for mobile view navbar */

  $(".nav > li > a").click(function () {
    $(".navbar-collapse,.navbar-collapse-inner").removeClass("in");
    $(".navbar-collapse").addClass("");
    $(
      "#navbar-toggle,#navbar-toggle-1,#navbar-toggle-2,#navbar-toggle-3,#navbar-toggle-4,#navbar-toggle-5"
    ).addClass("collapsed");
    $("#mobile-menu").removeClass("mobile-menu-open");
    $("#mobile-header").removeClass("mobile-header-open");
    $("#black-overlay").removeClass("display");
  });

  $("#black-overlay").click(function () {
    $(".navbar-collapse,.navbar-collapse-inner").removeClass("in");
    $(".navbar-collapse").addClass("");
    $(
      "#navbar-toggle,#navbar-toggle-1,#navbar-toggle-2,#navbar-toggle-3,#navbar-toggle-4,#navbar-toggle-5"
    ).addClass("collapsed");
    $("#mobile-menu").removeClass("mobile-menu-open");
    $("#mobile-header").removeClass("mobile-header-open");
    $("#black-overlay").removeClass("display");
  });

  $(
    "#bs-example-navbar-collapse-2, #bs-example-navbar-collapse-3, #bs-example-navbar-collapse-4,#bs-example-navbar-collapse-5,#bs-example-navbar-collapse-6"
  ).on("show.bs.collapse hide.bs.collapse", function (e) {
    if (e.target == e.currentTarget) {
      $(this).toggleClass("collapsed");
    }
  });

  $("#bs-example-navbar-collapse-1").on(
    "show.bs.collapse hide.bs.collapse",
    function (e) {
      if (e.target == e.currentTarget) {
        $("#mobile-menu").toggleClass("mobile-menu-open");
        $("#mobile-header").toggleClass("mobile-header-open");
        $("#black-overlay").toggleClass("display");
        $(".navbar-collapse-inner").removeClass("in");
        $(
          "#navbar-toggle-1,#navbar-toggle-2,#navbar-toggle-3,#navbar-toggle-4,#navbar-toggle-5"
        ).addClass("collapsed");
      }
    }
  );

  /* end mobile nav bar */

  /* functions */

  function getUrlHash() {
    return window.location.href.split("#")[1];
  }
  function checkWidth() {
    return window.innerWidth;
  }
  function setUrl(urlhash) {
    if (urlhash && urlhash != "") {
      history.replaceState(null, "", "#" + urlhash);
    } else {
      history.replaceState(null, "", window.location.href.split("#")[0]);
    }
  }

  function loadTab() {
    var urlhash = getUrlHash();
    var set_hash =
      urlhash && urlhash != "" ? urlhash : "executive-summary";
    var $elem = $('.myTab a[href="#' + set_hash + '"]');
    var parent_divs = $elem.parents("div.tab-pane");
    var $cur_div = $("#" + set_hash);
    var parent_len = parent_divs.length;
    if (parent_len) {
      for (var i = 0; i < parent_len; i++) {
        var $parent_div = $(parent_divs[i]);
        var parent_id = $parent_div.attr("id");
        var $tab_link = $('.nav-tabs a[href="#' + parent_id + '"]');
        $tab_link.closest("li").addClass("active");
        $parent_div.addClass("active in");
      }
    }
    $elem.closest("li").addClass("active");
    $cur_div.addClass("active in");
    $("#mobile-header").text($elem.attr("title"));
    $("#cssmenu-1 .nav-tabs > li").removeClass("active");
    $('#cssmenu-1 a[href="#' + set_hash + '"]')
      .parents("li")
      .addClass("active");
  }
});
