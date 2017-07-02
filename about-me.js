function switchToTab(tabName) {
    $(".mdl-layout__tab").each(function (index, tab) {
        $(tab).removeClass("is-active");
    });

    $(".mdl-layout__tab-panel").each(function (index, tab) {
       $(tab).removeClass("is-active");
    });

    $(".mdl-layout__drawer").removeClass("is-visible");
    $(".mdl-layout__obfuscator").removeClass("is-visible");

    $("#tab_link_" + tabName).addClass("is-active");
    $("#fixed-tab-" + tabName).addClass("is-active");
}


$(document).ready(function switchTabHandlers() {
    renderWithMithril();

    $("#link_bio").click(function () {
        switchToTab("bio");
    });

    $("#link_edu").click(function () {
        switchToTab("edu");
    });

    $("#link_car").click(function () {
        switchToTab("car");
    });

    $("#link_int").click(function () {
        switchToTab("int");
    });
});


function renderWithMithril() {
  renderEducation();
  renderCareer();
  renderInterests();
}

function renderEducation() {
  var root = document.getElementById("fixed-tab-edu");

  var cell_pg = m(mdl_cell, {
    cellClasses: "mdl-cell--6-col mdl-cell--12-col-tablet",
    children: [
        m(mdl_card_twoLine,  {
          icon: "school",
          place: "Christ University",
          title: "Post Graduation - MSc(CS)",
          period: "2016",
        })
    ]
  });

  var cell_ug = m(mdl_cell, {
    cellClasses: "mdl-cell--6-col mdl-cell--12-col-tablet",
    children: [
        m(mdl_card_twoLine,  {
          icon: "school",
          place: "Kuvempu University",
          title: "Graduation - BSc(IT)",
          period: "2012",
        })
    ]
  });

  var cell_12 = m(mdl_cell, {
    cellClasses: "mdl-cell--6-col mdl-cell--12-col-tablet",
    children: [
        m(mdl_card_twoLine,  {
          icon: "school",
          place: "RBSE",
          title: "12th Board",
          period: "2009",
        })
    ]
  });

  var cell_10 = m(mdl_cell, {
    cellClasses: "mdl-cell--6-col mdl-cell--12-col-tablet",
    children: [
        m(mdl_card_twoLine,  {
          icon: "school",
          place: "SEBA",
          title: "10th Board",
          period: "2006",
        })
    ]
  });

  var grid = m(mdl_grid, { children: [cell_pg, cell_ug, cell_12, cell_10]});

  var pageContent = m(page_content, { children: [grid] });

  m.mount(root, {
    view: function(){
      return pageContent;
    }
  });
}

function renderCareer() {
  var root = document.getElementById("fixed-tab-car");

  var cell_freelance = m(mdl_cell, {
    cellClasses: "mdl-cell--6-col mdl-cell--12-col-tablet",
    children: [
        m(mdl_card_twoLine,  {
          icon: "work",
          place: "Don Bosco High School, Mangaldai",
          title: "Freelance Developer",
          period: "2012 - 2014",
        })
    ]
  });

  var cell_cerner = m(mdl_cell, {
    cellClasses: "mdl-cell--6-col mdl-cell--12-col-tablet",
    children: [
        m(mdl_card_twoLine,  {
          icon: "work",
          place: "Cerner Healthcare Solutions",
          title: "Software Engineer",
          period: "2016 - Present",
        })
    ]
  });

  var grid = m(mdl_grid, { children: [cell_freelance, cell_cerner]});

  var pageContent = m(page_content, { children: [grid] });

  m.mount(root, {
    view: function(){
      return pageContent;
    }
  });
}

function renderInterests() {
  var root = document.getElementById("fixed-tab-int");

  var cell_bike = m(mdl_cell, {
    cellClasses: "mdl-cell--6-col mdl-cell--12-col-tablet",
    children: [
        m(mdl_card_square, {
        squareClass: "am-card-square-bike",
        icon: "motorcycle",
        title: "Solo Riding",
        subtitle: "For if I have to run, why not chase the mountains?"
      })
    ]
  });

  var cell_camera = m(mdl_cell, {
    cellClasses: "mdl-cell--6-col mdl-cell--12-col-tablet",
    children: [
        m(mdl_card_square, {
        squareClass: "am-card-square-camera",
        icon: "camera",
        title: "Photography",
        subtitle: "Helping reopen wounds that fading memories had swept under the rugs."
      })
    ]
  });

  var cell_game = m(mdl_cell, {
    cellClasses: "mdl-cell--6-col mdl-cell--12-col-tablet",
    children: [
        m(mdl_card_square, {
        squareClass: "am-card-square-game",
        icon: "gamepad",
        title: "Video Games",
        subtitle: "Escaping reality before 8-bit was cool."
      })
    ]
  });

  var cell_devil = m(mdl_cell, {
    cellClasses: "mdl-cell--6-col mdl-cell--12-col-tablet",
    children: [
        m(mdl_card_square, {
        squareClass: "am-card-square-devil",
        icon: "pets",
        title: "Being Inhuman",
        subtitle: "Not a people person. Definitely not."
      })
    ]
  });

  var grid = m(mdl_grid, { children: [cell_bike, cell_camera, cell_game, cell_devil]});

  var pageContent = m(page_content, { children: [grid] });

  m.mount(root, {
    view: function(){
      return pageContent;
    }
  });
}
