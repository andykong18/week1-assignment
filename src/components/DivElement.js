// Import HTMLElement here
import HTMLElement from './HTMLElement';
// Define class here
class DivElement extends HTMLElement {
  constructor(content) {
    super('div', content);
    this.content = content;
  }
  render() {
    const divElement = new HTMLElement('div', this.content);
    return divElement.render();
  }
}
// Export class here
export default DivElement;