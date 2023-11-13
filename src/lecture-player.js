import { LitElement, html, css } from 'lit';

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;
import "@lrnwebcomponents/video-player/video-player.js";
class LecturePlayer extends LitElement {
  static properties = {
  }

  static styles = css`
    :host {
      display: block;
      margin: 20px;
      padding: 40px;
      background-color: #eeeeee;
    }
    .grid-container 
      { 
      display: grid;
      grid-template-columns: 1fr 2fr;
      background-color: lightgrey;
      padding: 10px;
      gap: 10px;
      }
    .grid-item 
    {
      background-color: white;
      border: 1px solid rgba(0, 0, 0, 0.8);
      padding: 20px;
      font-size: 30px;
      text-align: center;
    }
  `;

  constructor() {
    super();
    this.header = 'My app';
  }

  render() {
    return html`
      <div class="grid-container">
      <div class="grid-item">1
      </div>
      <div class="grid-item">2
      </div>
    </div>
    `;
  }
}

customElements.define('lecture-player', LecturePlayer);