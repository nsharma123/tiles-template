import { LitElement, html, css } from "lit-element";
// import { tile } from "tile.js";
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
  static get properties() {
    return {
      items: { type: Array }
    };
  }

  static get styles() {
    return css`
      .item-ia {
        background-color: #fff;
        box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
        min-height: 20px;
        margin-bottom: 30px;
        border: 1px solid #e9e9e9;
        color: #000;
        width: 180px;
        text-align: center;
        display: inline-block;
      }
      .hidden-tiles {
        display: none !important;
      }
      .ttl {
        margin-bottom: 3px;
        padding-left: 6px;
        padding-right: 6px;
        padding-top: 10px;
        line-height: 1.2;
        max-height: 42px;
        overflow-y: hidden;
        word-wrap: break-word !important;
        text-align: left;
        font-size: 14px;
        color: #000 !important;
      }
      .by {
        margin-bottom: 3px;
        padding: 0 6px;
        line-height: 1.2;
        color: #979797;
        text-align: left;
        font-size: 10px;
        max-height: 24px;
        overflow-y: hidden;
        word-wrap: break-word !important;
      }
      .mt-icon {
        vertical-align: top;
        display: inline-block;
        padding: 0;
        margin: 4px 6px 4px 0;
        text-align: center;
        font-size: 16px;
        width: 21px;
        color: #888;
      }
      h6.stat {
        vertical-align: top;
        display: inline-block;
        margin-right: 10px;
        margin-top: 3px;
        margin-bottom: 3px;
        text-align: center;
        border-left: 1px solid #ccc;
        padding: 1px 0 1px 10px;
        font-size: 9px;
        font-weight: 200;
        color: #979797;
      }
      h6.stat span {
        display: block;
      }
      a {
        color: #000;
      }
    `;
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
      ${tile} ${tile}
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
      {
        title: "Pagan Tea Break - Introduction",
        href:
          "https://archive.org/details/podcast_melodic-galoiwin-pagan-tea-b_pagan-tea-break-introduction_1000320178546",
        img:
          "https://archive.org/services/img/podcast_melodic-galoiwin-pagan-tea-b_pagan-tea-break-introduction_1000320178546",
        by: "melodic galoiwin - pagan tea break",
        mediatype: "Texts",
        views: "1001",
        favorite: "20",
        comment: "10"
      },
      {
        title: "Pagan Tea Break - Introduction",
        href:
          "https://archive.org/details/podcast_melodic-galoiwin-pagan-tea-b_pagan-tea-break-introduction_1000320178546",
        img:
          "https://archive.org/services/img/podcast_melodic-galoiwin-pagan-tea-b_pagan-tea-break-introduction_1000320178546",
        by: "melodic galoiwin - pagan tea break",
        mediatype: "Texts",
        views: "1001",
        favorite: "20",
        comment: "10"
      },
      {
        title: "Pagan Tea Break - Introduction",
        href:
          "https://archive.org/details/podcast_melodic-galoiwin-pagan-tea-b_pagan-tea-break-introduction_1000320178546",
        img:
          "https://archive.org/services/img/podcast_melodic-galoiwin-pagan-tea-b_pagan-tea-break-introduction_1000320178546",
        by: "melodic galoiwin - pagan tea break",
        mediatype: "Texts",
        views: "1001",
        favorite: "20",
        comment: "10"
      }
    ];
  }

  render() {
    return html`
      <item-tile></item-tile>
    `;
  }
}

customElements.define("tiles-template", TemplateWrapping);
