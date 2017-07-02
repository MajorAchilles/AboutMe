
// {
//   text: "Not a people person. Definitely not."
//    OR
//   children: {}
// }
var mdl_card_supportingText = {
  view: function (vnode){
    return m("div", {class: "mdl-card__supporting-text"}, vnode.attrs.text || vnode.attrs.children);
  }
}

// {
//   icon: "work"
//   line1: "Cerner Healthcare Solutions",
//   line2: "2016-present"
// }
var mdl_list_twoLine = {
  view: function (vnode) {
    return m(
      "ul",
      { class: "mdl-list"},
      m(
        "li",
        { class: "mdl-list__item mdl-list__item--two-line"},
        m(
          "span",
          { class: "mdl-list__item-primary-content" },
          [
            m("i", { class: "material-icons mdl-list__item-avatar" }, vnode.attrs.icon),
            m("span", vnode.attrs.line1),
            m("span", {class: "mdl-list__item-sub-title"}, vnode.attrs.line2)
          ]
        )
      )
    );
  }
}

// {
//   squareClass: "am-card-square-devil",
//   icon: "pet",
//   title: "Being Inhuman",
//   subtitle: "Not a people person. Definitely not."
// }
var mdl_card_square = {
  view: function(vnode) {
    return m(
      "div",
      { class: "am-card-square mdl-card mdl-shadow--2dp " + vnode.attrs.squareClass},
      [
        m(
          "div",
          { class: "mdl-card__title mdl-card--expand"},
            m(
              "h2",
              { class: "mdl-card__title-text  am-header-icon" },
              [
                m(
                  "i",
                  { class: "material-icons mdl-list__item-avatar" },
                  vnode.attrs.icon
                ),
                m("span", vnode.attrs.title)
              ]
            )
        ),
        m(mdl_card_supportingText, { text: vnode.attrs.subtitle })
      ]
    );
  }
}

// {
//   icon: "work",
//   place: "Cerner Healthcare Solutions",
//   title: "Software Engineer",
//   period: "2016 - Present",
// }
var mdl_card_twoLine = {
  view: function(vnode) {

    var twoLineList = m(mdl_list_twoLine, {
      icon: vnode.attrs.icon,
      line1: vnode.attrs.place,
      line2: vnode.attrs.period
    });

    return m(
      "div",
      { class: "am-full-width-card mdl-card mdl-shadow--2dp"},
      [
        m(
          "div",
          { class: "mdl-card__title"},
          m(
            "h2",
            { class: "mdl-card__title-text" },
            vnode.attrs.title
          )
        ),
        m(mdl_card_supportingText, { children: [twoLineList] })
      ]
    );
  }
}

var mdl_cell = {
  view: function(vnode) {
    return m(
      "div",
      { class: "mdl-cell " + vnode.attrs.cellClasses },
      vnode.attrs.children
    );
  }
}

var mdl_grid = {
  view: function(vnode) {
    return m(
      "div",
      { class: "mdl-grid" },
      vnode.attrs.children
    );
  }
}

var page_content = {
  view: function(vnode) {
    return m(
      "div",
      { class: "page-content" },
      vnode.attrs.children
    );
  }
}
