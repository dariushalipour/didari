const dom = require('../lib/dom')

// TODO: insertBefore, insertAfter, replaceText

test('createText', () => {
  const text = dom.createText('Hello, World!')
  expect(text).not.toBeNull()
})

test('createElement', () => {
  const element = dom.createElement('div', [['id', 'example']])
  expect(element.id).toEqual('example')
  expect(element).not.toBeNull()
})

test('setAttribute', () => {
  const element = dom.createElement('div', [['id', 'example']])
  dom.setAttribute(element, 'id', 'root')
  expect(element.id).toEqual('root')
})

test('append', () => {
  const root = dom.createElement('p', [['id', 'root']])
  const helloText = dom.createText('Hello from ')
  const name = dom.createElement('span', [['class', 'name']])
  const didariText = dom.createText('Didari')

  dom.append(helloText, root)
  dom.append(didariText, name)
  dom.append(name, root)

  document.body.appendChild(root)

  expect(document.querySelector('#root')).toEqual(root)
  expect(document.querySelector('.name')).toEqual(name)

  document.body.innerHTML = ''
})

test('remove', () => {
  const root = dom.createElement('p', [['id', 'root']])
  const name = dom.createElement('span', [['class', 'name']])

  dom.append(name, root)

  document.body.appendChild(root)

  expect(document.querySelector('#root')).toEqual(root)
  expect(document.querySelector('.name')).toEqual(name)

  dom.remove(name)
  expect(document.querySelector('.name')).toBeNull()

  document.body.innerHTML = ''
})
