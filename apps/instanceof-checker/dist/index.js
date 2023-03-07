"use strict";
var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// ../../packages/instanceof/src/imported-instanceof.ts
var Node2 = class {
};
__name(Node2, "Node2");
var Text2 = class extends Node2 {
};
__name(Text2, "Text2");
function isInstanceOfWhenImported() {
  const node = new Node2();
  const text = new Text2();
  console.log("Imported Text instanceof Node:", text instanceof Node2);
}
__name(isInstanceOfWhenImported, "isInstanceOfWhenImported");

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
isInstanceOfWhenImported();
isInstanceOfWhenImported();
isInstanceOfWhenImported();
isInstanceOfWhenImported();
isInstanceOfWhenImported();
//# sourceMappingURL=index.js.map