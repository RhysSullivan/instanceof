class Node {

}

class Text extends Node {

}
export * from './src/imported-instanceof'
export function isInstanceOf() {
    const node = new Node()
    const text = new Text()
    console.log("Text instanceof Node", text instanceof Node)
}
