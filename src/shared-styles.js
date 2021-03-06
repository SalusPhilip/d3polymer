/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import '@polymer/polymer/polymer-element.js';

const $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = `<dom-module id="shared-styles">
  <template>
    <style>
      html, body {
        width:  100%;
        height: 100%;
        margin: 0px;
      }

      .imgcard {
        display: flex;
        justify-content: center;
        align-items: center;
        word-break: break-word;
      }
      .imgcard img {
        margin-left: 5px;
      }
      .card {
        margin: 24px;
        padding: 16px;
        color: #757575;
        border-radius: 5px;
        background-color: #fff;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
      }

      .circle {
        display: inline-block;
        width: 64px;
        height: 64px;
        text-align: center;
        color: #555;
        border-radius: 50%;
        background: #ddd;
        font-size: 30px;
        line-height: 64px;
      }

      h1 {
        font-size: 1.5em;
        text-align: center;
        color: palevioletred;
      }

      .inputStyle {
        height: 38px;
        border-radius: 8px;
        border: 1px solid #ccc;
        width: calc(100% - 134px);
        line-height: 1.5;
        font-size: 18px;
        padding: 0 5px;
      }
      .inputStyle:focus {
        outline: none;
      }
    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
