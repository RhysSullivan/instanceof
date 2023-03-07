"use strict";
var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// ../../packages/instanceof/index.ts
var Node = class {
};
__name(Node, "Node");
var Text = class extends Node {
};
__name(Text, "Text");
function isInstanceOf() {
  const node = new Node();
  const text = new Text();
  console.log("Text instanceof Node", text instanceof Node);
}
__name(isInstanceOf, "isInstanceOf");

// index.ts
isInstanceOf();
isInstanceOf();
isInstanceOf();
isInstanceOf();
isInstanceOf();
isInstanceOf();
//# sourceMappingURL=index.js.map