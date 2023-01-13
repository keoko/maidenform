import { U, l as le, o, i as ie } from "./fre-564466a4.js";
function App() {
  const [count, setCount] = o(0);
  return /* @__PURE__ */ le(ie, null, /* @__PURE__ */ le("h1", null, count), /* @__PURE__ */ le("button", { onClick: () => setCount(count + 1) }, "+"));
}
function renderComponent(block) {
  U(/* @__PURE__ */ le(App, null), block);
}
function decorate(block) {
  renderComponent(block);
}
export {
  decorate as default
};
