import { LitElement, css, customElement, html, property } from 'lit-element';
import { ifDefined } from 'lit-html/directives/if-defined';

/**
 * Custom Element that Shows a CodeSandbox demo when you click on it.
 * @element
 * @example
 * ```html
 * <codesandbox-button sandbox-id="78bip" hide-navigation module="/src/main-component.js"></codesandbox-button>
 * ```
 */
@customElement('codesandbox-button')
export class CodesandboxButton extends LitElement {
  /** font size */
  @property({ type: Number, attribute: 'font-size' }) fontSize = 14;

  /** when true, hides navigation in the iframe */
  @property({ type: Boolean, attribute: 'hide-navigation' }) hideNavigation = false;

  /** five-character id of your sandbox */
  @property({ type: String, attribute: 'sandbox-id' }) sandboxId: string;

  /** when true, shows the CodeSandbox instead of the button */
  @property({ type: Boolean, attribute: 'show-demo', reflect: true }) showDemo = false;

  /** path to the default module to display */
  @property({ type: String }) module: string;

  @property({ type: String }) theme: 'light'|'dark' = 'dark';

  @property({ type: String }) view: 'editor'|'preview';

  static get styles() {
    return css`
      :host { display: block; }

      button {
        background: none;
        border: none;
        transition: filter 0.2s ease-in-out;
      }

      button:hover,
      button:focus {
        filter:
          brightness(1.1)
          drop-shadow(2px 2px 2px grey);
      }
    `;
  }

  render() {
    return this.showDemo ? html`
      <iframe
         src="${ifDefined(this.getIframeSrc())}"
         style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
         allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
         sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
       ></iframe>
    ` : html`
      <button @click="${this.onClick}">
        <slot name="button">
          <img alt="Edit on CodeSandbox" src="https://codesandbox.io/static/img/play-codesandbox.svg" />
        </slot>
      </button>
    `;
  }

  private getIframeSrc() {
    const { hideNavigation, module, theme, view } = this;
    const fontSize = this.fontSize.toString();
    const hidenavigation = (hideNavigation ? 1 : 0).toString();
    const params = new URLSearchParams(Object.entries({
      fontSize,
      hidenavigation,
      module,
      theme,
      ...view && { view },
    }));
    if (!this.sandboxId) return;
    const id = this.sandboxId?.split('-').pop();
    const url = new URL(`/embed/${id}`, 'https://codesandbox.io/');
    url.search = params.toString();
    return url.toString();
  }

  private onClick() {
    this.showDemo = true;
  }
}
