$(function () {
  // jQuery goes here...
  // Uncomment this line to fade out the red box on page load
  // $(".red-box").fadeOut(2000);
  // $(".green-box").fadeOut(2000);
  // $(".red-box").fadeIn(2000);
  // $(".red-box").fadeTo(2000, 0.2);
  // $(".green-box").fadeTo(2000, 0.5);
  // $(".blue-box").fadeTo(1000, 0.8);
  // $(".green-box").fadeToggle();
  // $(".green-box").fadeToggle();
  // $(".green-box").toggle();
  // $(".green-box").hide(1000);
  // $(".green-box").show(1000);
  // $(".blue-box").slideUp(2000);
  // $(".blue-box").slideDown(2000);
  // $("p").hide();
  // $("p").slideDown(1000);
  // $(".blue-box").animate(
  //   {
  //     marginLeft: "+=200px",
  //     opacity: 0,
  //     height: "50px",
  //     with: "50px",
  //     marginTop: "25px",
  //   },
  //   1000,
  //   "linear"
  // );
  // $("p").animate(
  //   {
  //     fontSize: "20px",
  //   },
  //   1000
  // );
  //chaining functions
  // $(".red-box").fadeTo(1000, 0.2);
  // $(".green-box").delay(1000).fadeTo(1000, 0.5);
  // $(".blue-box").delay(2000).fadeTo(1000, 0.8).fadeOut().delay(500).fadeIn();
  //callback animation
  // $(".red-box").fadeTo(1000, 0, function () {
  //   alert("Hello, a callback animation");
  // });
  //fadein a lightbox signup
  // $(".lightbox").delay(500).fadeIn(1000);
  //Using CSS selectors in jQuery
  // $("#list").css("background-color", "rgb(180, 180, 30, 0.8)");
  // $("li:first").css("background-color", "rgb(180, 180, 30, 0.8)");
  // $("input:text").css("background-color", "rgb(180, 180, 30, 0.8)");
  //JQuery Traversal
  // $("#list").find("li").css("background-color", "rgb(180, 180, 30, 0.8)");
  // $("#list").children("li").css("background-color", "rgb(180, 180, 30, 0.8)");
  // $("#list").parents("div").css("background-color", "rgb(180, 180, 30, 0.8)");
  // $("#list").parent().css("background-color", "rgb(180, 180, 30, 0.8)");
  // $("#list")
  //   .siblings(":header")
  //   .css("background-color", "rgb(180, 180, 30, 0.8)");
  //jQuery Filter
  // $("#list")
  //   .find("li")
  //   .filter(":even")
  //   .css("background-color", "rgb(180, 180, 30, 0.8)");
  // $("li")
  //   .filter(function (index) {
  //     return index % 3 === 1;
  //   })
  //   .css("background-color", "rgb(180, 180, 30, 0.8)");
  // $("li").first().css("background-color", "rgb(180, 180, 30, 0.8)");
  // $("li").last().css("background-color", "rgb(180, 180, 30, 0.8)");
  // $("li").eq(-2).css("background-color", "rgb(180, 180, 30, 0.8)");
  $("li")
    .not(function (index) {
      return index % 3 === 2;
    })
    .css("background-color", "rgb(180, 180, 30, 0.8)");
});
