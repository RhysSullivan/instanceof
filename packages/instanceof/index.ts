class Node {

}

class Text extends Node {

}

export function isInstanceOf() {
    const node = new Node()
    const text = new Text()
    return text instanceof Node
}
