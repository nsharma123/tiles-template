import { LitElement, html, css } from "lit-element";

// export default StyleSheet.create({
//   container: {
//     padding: 10,
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "#43a1c9"
//   },
//   buttonText: { fontSize: 20, textAlign: "center" }
// });

export const sharedStyle = css`
  .item-ia {
    background-color: #fff;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
    border: 1px solid #e9e9e9;
    text-align: center;
    display: inline-block;
    margin: 10px;
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
  .item-img {
    width: 180px;
    max-width: 180px;
    max-height: 250px;
  }
  .by {
    margin-bottom: 5px;
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
    color: #888;
  }
  h6.stat span {
    display: block;
  }
  a {
    color: #000;
  }
`;
