import { decorateIcons } from "../scripts/lib-franklin.js";
const mobileBreakpoint = 1024;
let globalWindowWidth = window.innerWidth;
function addDropdownIcon(element) {
  const dropdownArrow = document.createElement("span");
  dropdownArrow.classList.add("icon", "icon-dropdown");
  element.append(dropdownArrow);
}
function wrapChildren(element, newType) {
  const wrapper = document.createElement(newType);
  wrapper.innerHTML = element.innerHTML;
  element.innerHTML = "";
  element.append(wrapper);
}
function menuHasNoContent(menu) {
  return [...menu.children].slice(0, 5).reduce((prev, curr) => {
    var _a, _b;
    return prev && (((_b = (_a = curr.children[0]) == null ? void 0 : _a.children) == null ? void 0 : _b.length) ?? 0) === 0;
  }, true);
}
function collapseAllSubmenus(menu) {
  menu.querySelectorAll('*[aria-expanded="true"]').forEach((el) => el.setAttribute("aria-expanded", "false"));
}
function addEventListenersMobile() {
  document.querySelectorAll(".menu-expandable").forEach((title) => {
    title.addEventListener("click", (e) => {
      e.stopPropagation();
      const expanded = title.getAttribute("aria-expanded") === "true";
      collapseAllSubmenus(title.closest("li"));
      title.setAttribute("aria-expanded", expanded ? "false" : "true");
    });
  });
  document.querySelectorAll(".m-expandable-title").forEach((title) => {
    title.addEventListener("click", (e) => {
      e.stopPropagation();
      const expanded = title.getAttribute("aria-expanded") === "true";
      collapseAllSubmenus(title.closest("li"));
      title.setAttribute("aria-expanded", expanded ? "false" : "true");
    });
  });
  document.querySelector("form .search-button").addEventListener("click", (e) => {
    const form = e.target.closest("form");
    if (!form.hasAttribute("aria-expanded")) {
      e.preventDefault();
      e.stopPropagation();
      form.setAttribute("aria-expanded", "true");
    }
  });
  document.querySelector("form .close-button").addEventListener("click", (e) => {
    const form = e.target.closest("form");
    if (form.hasAttribute("aria-expanded")) {
      e.preventDefault();
      e.stopPropagation();
      form.removeAttribute("aria-expanded");
    }
  });
}
function addEventListenersDesktop() {
  document.querySelectorAll(".nav-menu > ul > li").forEach((title) => {
    title.addEventListener("mouseenter", (e) => {
      e.stopPropagation();
      const expanded = title.getAttribute("aria-expanded") === "true";
      collapseAllSubmenus(title.closest("ul"));
      title.setAttribute("aria-expanded", expanded ? "false" : "true");
    });
  });
  document.querySelectorAll(".nav-menu > ul > li").forEach((title) => {
    title.addEventListener("mouseleave", () => {
      collapseAllSubmenus(document.querySelector("nav"));
    });
  });
  const searchButton = document.querySelector(".nav-tools form");
  if (searchButton.hasAttribute("aria-expanded"))
    searchButton.removeAttribute("aria-expanded");
}
function reAttachEventListeners() {
  if (window.innerWidth < mobileBreakpoint) {
    addEventListenersMobile();
  } else {
    addEventListenersDesktop();
  }
}
async function decorate(block) {
  var _a, _b;
  block.innerHTML = "";
  const resp = await fetch("/nav.plain.html");
  if (resp.ok) {
    const html = await resp.text();
    const nav = document.createElement("nav");
    nav.innerHTML = html;
    const hamburger = document.createElement("div");
    hamburger.classList.add("nav-hamburger");
    hamburger.innerHTML = '<span class="icon icon-mobile-menu"></span>';
    hamburger.addEventListener("click", () => {
      const expanded = nav.getAttribute("aria-expanded") === "true";
      document.body.style.overflowY = expanded ? "" : "hidden";
      nav.setAttribute("aria-expanded", expanded ? "false" : "true");
    });
    nav.querySelector(":scope > div").append(hamburger);
    nav.setAttribute("aria-expanded", "false");
    const toolContainer = nav.querySelector(".nav-tools");
    ["heart", "minicart"].forEach((tool) => {
      const icon = document.createElement("span");
      icon.classList.add("icon", `icon-${tool}`);
      toolContainer.append(icon);
    });
    const searchBar = document.createElement("form");
    searchBar.innerHTML = `
      <input name="query" type="text" placeholder="Search" />
      <button class="search-button" aria-label="submit search query"><span class="icon icon-search" /></button>
      <span class="icon icon-x-lg close-button" />
    `;
    toolContainer.append(searchBar);
    const login = document.createElement("a");
    login.classList.add("sign-in-link-desktop");
    login.innerText = "Sign In";
    toolContainer.prepend(login);
    const navMenuUl = document.createElement("ul");
    const menus = [...nav.querySelectorAll(".nav-menu > div")];
    for (let i = 0; i < menus.length - 1; i += 2) {
      const li = document.createElement("li");
      const menuTitle = menus[i];
      const menuDropdownList = menus[i + 1];
      menuTitle.classList.add("menu-nav-category");
      menuDropdownList.classList.add("menu-nav-dropdown");
      if (menuHasNoContent(menuDropdownList)) {
        li.append(menuTitle);
        navMenuUl.append(li);
        continue;
      }
      addDropdownIcon(menuTitle);
      li.append(menuTitle);
      li.classList.add("menu-expandable");
      ["m-col-featured", "m-col-2", "m-col-3", "m-feat-img", "m-bg-img"].forEach((category, j) => {
        const node = menuDropdownList.querySelector(`:scope > div:nth-child(${j + 1})`);
        node == null ? void 0 : node.classList.add(category, "column");
        if ((node == null ? void 0 : node.children.length) === 0) {
          node == null ? void 0 : node.classList.add("empty");
        }
      });
      li.append(menuDropdownList);
      navMenuUl.append(li);
      if (((_a = li.querySelector(".m-col-featured")) == null ? void 0 : _a.children.length) > 0) {
        const featuredP = document.createElement("p");
        featuredP.innerText = "featured";
        (_b = li.querySelector(".m-col-featured")) == null ? void 0 : _b.prepend(featuredP);
      }
      li.querySelectorAll("p + ul").forEach((subDropdown) => {
        const subDropdownTitle = subDropdown.previousElementSibling;
        subDropdownTitle.setAttribute("aria-expanded", "false");
        subDropdownTitle.classList.add("m-expandable-title");
        wrapChildren(subDropdownTitle, "span");
        subDropdown.classList.add("m-expandable-list");
        addDropdownIcon(subDropdownTitle);
      });
      li.querySelectorAll(".m-feat-img picture + a").forEach((link) => {
        const picture = link.previousElementSibling;
        const newLink = link.cloneNode();
        newLink.innerHTML = picture.outerHTML;
        picture.remove();
        link.parentElement.append(newLink);
        newLink.classList.add("linked-picture-desktop");
      });
      const backgroundImg = li.querySelector(".m-bg-img picture img");
      if (backgroundImg && backgroundImg.getAttribute("src")) {
        menuDropdownList.style.background = `url(${backgroundImg.getAttribute("src")})`;
        menuDropdownList.style.backgroundSize = "cover";
      }
    }
    const loginMobile = document.createElement("li");
    loginMobile.classList.add("sign-in-link-mobile", "menu-nav-category");
    loginMobile.innerHTML = "<a>Sign In</a>";
    navMenuUl.prepend(loginMobile);
    nav.querySelector(".nav-menu").innerHTML = navMenuUl.outerHTML;
    decorateIcons(nav);
    block.append(nav);
    const removeAllEventListeners = (element) => {
      element.replaceWith(element.cloneNode(true));
    };
    const shouldResize = () => {
      const resize = window.innerWidth > mobileBreakpoint && globalWindowWidth <= mobileBreakpoint || window.innerWidth < mobileBreakpoint && globalWindowWidth >= mobileBreakpoint;
      globalWindowWidth = window.innerWidth;
      return resize;
    };
    window.addEventListener("resize", () => {
      if (shouldResize()) {
        nav.setAttribute("aria-expanded", "false");
        removeAllEventListeners(document.querySelector(".nav-menu"));
        removeAllEventListeners(document.querySelector(".nav-tools"));
        collapseAllSubmenus(block);
        reAttachEventListeners();
      }
    });
    reAttachEventListeners();
  }
}
export {
  decorate as default
};
