import { LitElement, html, css } from "lit-element";

const tile = html`
  <div class="item-ia" data-id="Tea_Party_Break_Up_" data-mediatype="texts">
    <div class="C234">
      <div class="item-ttl C C2">
        <a
          href="/details/Tea_Party_Break_Up_"
          title="Tea_Party_Break_Up_"
          data-event-click-tracking="GenericNonCollection|ItemTile"
        >
          <div class="tile-img">
            <img
              class="item-img "
              src="https://archive.org/services/img/tea_20200106"
              style="height:233px"
            />
          </div>
          <!--/.tile-img-->
          <div class="ttl">Tea_Party_Break_Up_</div>
        </a>
      </div>
      <div class="hidden-tiles pubdate C C3">
        <nobr class="hidden-xs">Jun 26, 2015</nobr>
        <nobr class="hidden-sm hidden-md hidden-lg">06/15</nobr>
      </div>
      <div class="by C C4">
        <span class="hidden-lists">by</span>
        <span class="byv" title="gerard arthus">gerard arthus</span>
      </div>
      <!--/.C4-->
    </div>
    <!--/.C234-->

    <div class="statbar ">
      <div class="mt-icon C C5">
        <span class="iconochive-texts" aria-hidden="true"></span
        ><span class="sr-only">texts</span>
      </div>
      <h6 class="stat ">
        <span class="iconochive-eye" aria-hidden="true"></span
        ><span class="sr-only">eye</span> <nobr>66</nobr>
      </h6>

      <h6 class="stat">
        <span class="iconochive-favorite" aria-hidden="true"></span
        ><span class="sr-only">favorite</span> 0
      </h6>
      <h6 class="stat">
        <span class="iconochive-comment" aria-hidden="true"></span
        ><span class="sr-only">comment</span>0
      </h6>
    </div>
    <!--/.statbar-->
  </div>
`;

class Tile extends LitElement {
  static get styles() {
    return css`
      a {
        color: #000;
      }
    `;
  }
  static get properties() {
    return {
      items: { type: Array }
    };
  }

  constructor() {
    super();

    this.items = [
      { type: "button", message: "hello" },
      { type: "link", url: "#", message: "world" },
      { type: "none", message: "foo" }
    ];
  }

  render() {
    return html`
      ${tile}
    `;
  }
}

customElements.define("item-tile", Tile);

class TemplateWrapping extends LitElement {
  static get properties() {
    return {
      items: { type: Array }
    };
  }

  constructor() {
    super();

    this.items = [
      { type: "button", message: "hello" },
      { type: "link", url: "#", message: "world" },
      { type: "none", message: "foo" }
    ];
  }

  render() {
    return html`
      <item-tile></item-tile>
    `;
  }
}

customElements.define("tiles-template", TemplateWrapping);
