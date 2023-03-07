class Node2 {

}

class Text2 extends Node2 {

}

export function isInstanceOfWhenImported() {
    const node = new Node2()
    const text = new Text2()
    console.log("Imported Text instanceof Node:", text instanceof Node2)
}
