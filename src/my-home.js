/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';

class Home extends PolymerElement {
  constructor() {
    super();

    this.value = 'Welcome to Polymer Graph YaY!';
  }
  ready() {
    super.ready();
    console.log(this.value)
  }
  toggle(string) {
    if(string === '') {
      this.value = 'Welcome to Polymer Graph YaY!';
    }else {
      this.value = string;
    }
  }
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;
        }
        h1 {
          font-size: 1.5em;
          text-align: center;
          color: palevioletred;
        }
      </style>

      <div class="card">
        <h1>{{ toggle(searchString) }} {{ value }} 🤘</h1>
      </div>

      <div class="card">
        <label>Change the title</label><br/>
        <input value="{{searchString::input}}">
      </div>

    `;
  }
}

window.customElements.define('my-home', Home);
