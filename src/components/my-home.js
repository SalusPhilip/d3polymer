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
import { connect } from 'pwa-helpers/connect-mixin.js';
import './my-donut.js';
import { changetitle } from '../actions/changetitle';
import { store } from '../store';
import '../shared-styles.js';

class Home extends connect(store)(PolymerElement) {
  constructor() {
    super();

    this.value = store.getState().changetitle.title;
    localStorage.setItem('homeTitle', JSON.stringify(store.getState().changetitle.title));
  }
  ready() {
    super.ready();
  }
  toggle(string) {
    if(!string) {
      this.value = JSON.parse(localStorage.getItem('homeTitle'));
    }else {
      this.value = store.dispatch(changetitle(string)).title;
    }
  }
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;
        }
      </style>

      <div class="card imgcard">
        <h1>{{ toggle(searchString) }} {{ value }} </h1>
        <img src="../../images/logo.png" width="20px" />
      </div>

      <div class="card">
        <label>Change the title </label>
        <input class="inputStyle" value="{{searchString::input}}">
      </div>
      
      <my-donut width="960" height="500"></my-donut>
    `;
  }

  static get properties() { return {
    // This is the data from the store.
    _title: { type: String }
  }}

  // This is called every time something is updated in the store.
  _stateChanged(state) {
    this._title = state.changetitle.title;
  }

}

window.customElements.define('my-home', Home);
