export function remove(node: Node) {
  const parent = node.parentNode
  if (parent === null) return
  parent.removeChild(node)
}

export function append(node: Node, parentElement: Element) {
  parentElement.appendChild(node)
}

export function insertBefore(node: Node, before: Node) {
  const parent = before.parentNode
  if (parent === null) return
  parent.insertBefore(node, before)
}

export function insertAfter(node: Node, after: Node) {
  const parent = after.parentNode
  if (parent === null) return
  parent.insertBefore(node, after.nextSibling)
}

export function replaceText(oldText: Text, newText: Text) {
  const parent = oldText.parentNode
  if (parent === null) return
  parent.insertBefore(newText, oldText)
  remove(oldText)
}

export function setAttribute(element: Element, key: string, value: string) {
  element.setAttribute(key, value)
}

export function createText(data: string): Text {
  return document.createTextNode(data)
}

export function createElement(tag: string, attrs: [[string, string]], isSelfClosing: boolean): Element {
  const element = document.createElement(tag)

  for (var index in attrs) {
    var attr = attrs[index]
    setAttribute(element, attr[0], attr[1])
  }

  return element
}
