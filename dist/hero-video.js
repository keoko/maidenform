function getConfigRow(rows, name) {
  return rows.find((row) => row.children[0].textContent.toLowerCase() === name);
}
function decorateVideo(video) {
  const div = document.createElement("div");
  div.classList.add(`video-${video.type}`);
  const videoTag = document.createElement("video");
  videoTag.toggleAttribute("autoplay", true);
  videoTag.toggleAttribute("muted", true);
  videoTag.toggleAttribute("playsinline", true);
  videoTag.toggleAttribute("loop", true);
  videoTag.toggleAttribute("controls", true);
  videoTag.setAttribute("poster", video.poster);
  videoTag.setAttribute("title", video.title);
  videoTag.innerHTML = `<source src="${video.videoUrl}" type="video/mp4">`;
  div.appendChild(videoTag);
  videoTag.muted = true;
  return div;
}
function decorateOverlay(overlay, overlaySticker) {
  overlay.firstElementChild.remove();
  const overlayContent = overlay.firstElementChild;
  overlayContent.classList.add("overlay-content");
  if (overlaySticker) {
    const iconSpan = overlaySticker.querySelector("span.icon");
    const icon = iconSpan.classList[1].substring(5);
    overlay.insertAdjacentHTML(
      "beforebegin",
      `<style>.hero-video .overlay-content::before { content: url("${window.hlx.codeBasePath}/icons/${icon}.svg");}</style>`
    );
    overlaySticker.remove();
  }
  overlay.replaceWith(overlayContent);
}
function decorate(block) {
  const configRows = [...block.children];
  const mobileVideoRow = getConfigRow(configRows, "mobile");
  const desktopVideoRow = getConfigRow(configRows, "desktop");
  const overlayRow = getConfigRow(configRows, "overlay");
  const overlayStickerRow = getConfigRow(configRows, "overlay sticker");
  const [mobileVideo, desktopVideo] = [
    [mobileVideoRow, "mobile"],
    [desktopVideoRow, "desktop"]
  ].map(([row, typeHint]) => {
    var _a, _b;
    const poster = row.querySelector("img");
    let optimizedPosterSrc;
    if (poster) {
      const srcURL = new URL(poster.src);
      const srcUSP = new URLSearchParams(srcURL.search);
      srcUSP.set("format", "webply");
      srcUSP.set("width", `${typeHint === "mobile" ? 750 : 2e3}`);
      optimizedPosterSrc = `${srcURL.pathname}?${srcUSP.toString()}`;
    }
    return {
      type: typeHint,
      videoUrl: (_b = (_a = row.children[1]) == null ? void 0 : _a.children[1]) == null ? void 0 : _b.textContent,
      poster: optimizedPosterSrc,
      title: poster && poster.getAttribute("alt") || "hero video"
    };
  });
  mobileVideoRow.replaceWith(decorateVideo(mobileVideo));
  desktopVideoRow.replaceWith(decorateVideo(desktopVideo));
  if (overlayRow) {
    decorateOverlay(overlayRow, overlayStickerRow);
  }
}
export {
  decorate as default
};
