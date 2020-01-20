import { LitElement, customElement, html, property } from 'lit-element';
import style from './codesandbox-button.css';

/**
 * Custom Element that Shows a CodeSandbox demo when you click on it.
 * @element
 * @example
 * ```html
 * <codesandbox-button sandbox-id="78bip" hide-navigation module="/src/main-component.js"></codesandbox-button>
 * ```
 */
@customElement('codesandbox-button')
class CodesandboxButton extends LitElement {
  /** font size */
  @property({ type: Number, attribute: 'font-size' })
  fontSize = 14;

  /** when true, hides navigation in the iframe */
  @property({ type: Boolean, attribute: 'hide-navigation' })
  hideNavigation = false;

  /**
   * five-character id of your sandbox
   * @type {String}
   */
  @property({ type: String, attribute: 'sandbox-id' })
  sandboxId;

  /** when true, shows the CodeSandbox instead of the button */
  @property({ type: Boolean, attribute: 'show-demo', reflect: true })
  showDemo = false;

  /**
   * path to the default module to display
   * @type {String}
   */
  @property({ type: String }) module;

  /** @type {'light'|'dark'} */
  @property({ type: String }) theme = 'dark';

  /** @type {'editor'|'preview'} */
  @property({ type: String }) view;

  static styles = style;

  render() {
    return this.showDemo ? html`
      <iframe
         src="${this._getIframeSrc()}"
         style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
         allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
         sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
       ></iframe>
    ` : html`
      <button @click="${this._onClick}">
        <img alt="Edit on CodeSandbox" src="https://codesandbox.io/static/img/play-codesandbox.svg" />
      </button>
    `;
  }

  _getIframeSrc() {
    const { fontSize, hideNavigation, module, theme, view } = this;
    const hidenavigation = hideNavigation ? 1 : 0;
    const params = new URLSearchParams(Object.entries({
      fontSize,
      hidenavigation,
      module,
      theme,
      ...view && { view },
    }));
    const id = this.sandboxId.split('-').pop();
    const url = new URL(`/embed/${id}`, 'https://codesandbox.io/');
    url.search = params.toString();
    return url.toString();
  }

  _onClick() {
    this.showDemo = true;
  }
}
