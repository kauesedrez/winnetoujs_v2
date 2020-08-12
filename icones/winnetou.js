import {
  WinnetouBase
} from "./node_modules/winnetoujs/src/_winnetouBase.js";

/**
 * WinnetouJs Main Class
 * 
 */
//@ts-ignore
class _Winnetou extends WinnetouBase {
  constructor() {
    super();



    /**
     * Object containing all available constructos. 
     * @private */
    this.Constructos = {
      icons_delete: this.icons_delete,
      icons_tropical: this.icons_tropical,
      coloredIcons_tropical: this.coloredIcons_tropical,
      divSimples: this.divSimples,
      divSimples2: this.divSimples2,
      slideScreen: this.slideScreen,
      screen: this.screen
    }
  }

  // ========================================




  /**
   * Create an icon **icons_delete**
   * @param {object} [elements]
   * @param {any=} elements.class Class for the icon
   * @param {object} [options]
   * @param {any=} options.identifier
   * @private
   */
  icons_delete = (elements, options) => {

    let identifier = this._getIdentifier(options ? options.identifier || 'notSet' : 'notSet');

    elements = this._test(identifier, 'icons_delete', `icons_delete-win-${identifier}`, elements);
    let component;
    let obj = {
      code(elements) {
        return `
  <svg viewBox="0 0 448 512" id="icons_delete-win-${identifier}" class="winIcons ${(elements?.class || "")}">
  <path data-fill="currentColor" d="M432 80h-82.4l-34-56.7A48 48 0 0 0 274.4 0H173.6a48 48 0 0 0-41.2 23.3L98.4 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16l21.2 339a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM173.6 48h100.8l19.2 32H154.4zm173.3 416H101.11l-21-336h287.8z" class=""></path>
</svg>`
      },

      /**
       * Create Winnetou Constructo        
       * @param  {string} output The node or list of nodes where the component will be created
       * @param  {object} [options] Options to control how the construct is inserted. Optional.
       * @param  {boolean} [options.clear] Clean the node before inserting the construct
       * @param  {boolean} [options.reverse] Place the construct in front of other constructs
       */

      "create": (output, options) => {
        this.create(component, output, options);
        return {
          ids: {
            icons_delete: `icons_delete-win-${identifier}`,
          },
        }
      }
    }
    component = obj.code(elements);
    return obj;
  }

  // ========================================




  /**
   * Create an icon **icons_tropical**
   * @param {object} [elements]
   * @param {any=} elements.class Class for the icon
   * @param {object} [options]
   * @param {any=} options.identifier
   * @private
   */
  icons_tropical = (elements, options) => {

    let identifier = this._getIdentifier(options ? options.identifier || 'notSet' : 'notSet');

    elements = this._test(identifier, 'icons_tropical', `icons_tropical-win-${identifier}`, elements);
    let component;
    let obj = {
      code(elements) {
        return `
<svg viewBox="0 0 510 510" id="icons_tropical-win-${identifier}" class="winIcons ${(elements?.class || "")}"><linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="222.5" x2="379.454" y1="281.383" y2="281.383"><stop offset="0" stop-color="#ffdcbd"></stop><stop offset=".0028" stop-color="#ffdcbd"></stop><stop offset="1" stop-color="#ffa9b1"></stop></linearGradient><linearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1="222.5" x2="379.456" y1="281.38" y2="281.38"><stop offset="0" stop-color="#ffc2b5"></stop><stop offset=".2597" stop-color="#ffb9b3"></stop><stop offset=".6898" stop-color="#ff9fad"></stop><stop offset="1" stop-color="#ff89a8"></stop></linearGradient><linearGradient id="SVGID_3_" gradientUnits="userSpaceOnUse" x1="87" x2="486.037" y1="463.436" y2="463.436"><stop offset="0" stop-color="#ffe177"></stop><stop offset="1" stop-color="#fd6930"></stop></linearGradient><linearGradient id="lg1"><stop offset="0" stop-color="#918291"></stop><stop offset=".7487" stop-color="#7a6d79"></stop><stop offset="1" stop-color="#554e56"></stop></linearGradient><linearGradient id="SVGID_4_" gradientUnits="userSpaceOnUse" x1="155.659" x2="245.412" xlink:href="#lg1" y1="416.871" y2="416.871"></linearGradient><linearGradient id="SVGID_5_" gradientUnits="userSpaceOnUse" x1="207.667" x2="297.419" xlink:href="#lg1" y1="406.793" y2="406.793"></linearGradient><linearGradient id="SVGID_6_" gradientUnits="userSpaceOnUse" x1="199.667" x2="269.029" xlink:href="#lg1" y1="406.793" y2="406.793"></linearGradient><linearGradient id="lg2"><stop offset="0" stop-color="#fff3de"></stop><stop offset=".593" stop-color="#ffd15b"></stop><stop offset="1" stop-color="#fe7d43"></stop></linearGradient><linearGradient id="SVGID_7_" gradientUnits="userSpaceOnUse" x1="26.942" x2="341.475" xlink:href="#lg2" y1="455.647" y2="455.647"></linearGradient><linearGradient id="SVGID_8_" gradientUnits="userSpaceOnUse" x1="-71.366" x2="322" xlink:href="#lg2" y1="455.647" y2="455.647"></linearGradient><linearGradient id="lg3"><stop offset="0" stop-color="#9cf8d2"></stop><stop offset=".7542" stop-color="#00c285"></stop><stop offset="1" stop-color="#006e66"></stop></linearGradient><linearGradient id="SVGID_9_" gradientUnits="userSpaceOnUse" x1="217.333" x2="433.507" xlink:href="#lg3" y1="66.468" y2="66.468"></linearGradient><linearGradient id="SVGID_10_" gradientUnits="userSpaceOnUse" x1="167" x2="423.909" xlink:href="#lg3" y1="66.468" y2="66.468"></linearGradient><linearGradient id="SVGID_11_" gradientUnits="userSpaceOnUse" x1="68.667" x2="298.605" xlink:href="#lg3" y1="66.468" y2="66.468"></linearGradient><linearGradient id="SVGID_12_" gradientUnits="userSpaceOnUse" x1="62.5" x2="282.501" xlink:href="#lg3" y1="66.467" y2="66.467"></linearGradient><linearGradient id="SVGID_13_" gradientUnits="userSpaceOnUse" x1="41.792" x2="390.526" xlink:href="#lg3" y1="152.741" y2="152.741"></linearGradient><linearGradient id="SVGID_14_" gradientUnits="userSpaceOnUse" x1="79.5" x2="282.5" xlink:href="#lg3" y1="122.443" y2="122.443"></linearGradient><linearGradient id="SVGID_15_" gradientUnits="userSpaceOnUse" x1="168.48" x2="530.261" xlink:href="#lg3" y1="152.741" y2="152.741"></linearGradient><linearGradient id="SVGID_16_" gradientUnits="userSpaceOnUse" x1="176" x2="289.369" xlink:href="#lg3" y1="127.438" y2="127.438"></linearGradient><linearGradient id="SVGID_17_" gradientUnits="userSpaceOnUse" x1="133" x2="463.006" y1="152.739" y2="152.739"><stop offset="0" stop-color="#9cf8d2"></stop><stop offset=".703" stop-color="#00c285"></stop><stop offset="1" stop-color="#006e66"></stop></linearGradient><linearGradient id="SVGID_18_" gradientUnits="userSpaceOnUse" x1="178.667" x2="269.959" xlink:href="#lg1" y1="182.21" y2="182.21"></linearGradient><linearGradient id="SVGID_19_" gradientUnits="userSpaceOnUse" x1="164.667" x2="249.375" xlink:href="#lg1" y1="182.196" y2="182.196"></linearGradient><linearGradient id="SVGID_20_" gradientUnits="userSpaceOnUse" x1="246.667" x2="329.658" xlink:href="#lg1" y1="201.314" y2="201.314"></linearGradient><linearGradient id="SVGID_21_" gradientUnits="userSpaceOnUse" x1="200.5" x2="312.002" xlink:href="#lg1" y1="201.315" y2="201.315"></linearGradient><linearGradient id="SVGID_22_" gradientUnits="userSpaceOnUse" x1="224" x2="313.753" xlink:href="#lg1" y1="142.708" y2="142.708"></linearGradient><linearGradient id="SVGID_23_" gradientUnits="userSpaceOnUse" x1="216" x2="285.362" xlink:href="#lg1" y1="142.708" y2="142.708"></linearGradient><g><path d="m346.954 479.772c-8.318 0-16.635-3.172-22.981-9.519l-24.419-24.419c-24.553-24.553-43.74-53.268-57.028-85.349-13.288-32.08-20.026-65.952-20.026-100.676v-144.316c0-17.949 14.551-32.5 32.5-32.5s32.5 14.551 32.5 32.5v144.315c0 26.144 5.073 51.647 15.078 75.801s24.451 45.774 42.938 64.261l24.42 24.419c12.691 12.692 12.691 33.271-.001 45.962-6.345 6.347-14.665 9.521-22.981 9.521z" data-fill="url(#SVGID_1_)"></path><path d="m369.94 424.29-24.42-24.42c-18.49-18.49-32.94-40.11-42.94-64.26-10.01-24.15-15.08-49.66-15.08-75.8v-143.673c0-17.748-13.959-32.711-31.702-33.138-4.72-.114-9.228.785-13.298 2.48-11.75 4.9-20 16.49-20 30.01v123.19c2.133-.765 4.184-1.712 6.132-2.82 1.717-.977 3.866-.181 4.572 1.664 4.675 12.208 14.819 17.846 21.848 20.367 4.397 1.577 7.417 5.665 7.613 10.331.376 8.979 1.363 17.873 2.94 26.653-11.776 1.881-20.46 1.624-20.576 1.624-4.14-.14-7.62 3.08-7.77 7.22-.16 4.13 3.08 7.61 7.21 7.77.14 0 .84.03 2.01.03.807 0 1.839-.011 3.069-.047 11.102-.325 21.304 6.368 25.145 16.789.908 2.463 1.866 4.912 2.876 7.348.103.249.214.493.318.741-11.947 1.938-20.791 1.679-20.908 1.679-4.14-.14-7.62 3.07-7.77 7.21s3.08 7.62 7.22 7.78c.14 0 .83.02 2 .02 2.055 0 5.562-.073 10.066-.438 9.57-.777 18.839 3.736 23.91 11.889 2.6 4.18 5.355 8.26 8.263 12.234-13.648 2.603-24.214 2.286-24.349 2.286-4.15-.15-7.62 3.08-7.77 7.22s3.08 7.62 7.22 7.77c.14 0 .84.03 2.01.03 3.425 0 10.907-.201 20.32-1.637 8.186-1.249 16.473 1.542 22.324 7.402l.075.076 24.42 24.42c12.7 12.69 12.7 33.27 0 45.96-3.09 3.09-6.66 5.43-10.47 7.02 3.99 1.67 8.25 2.5 12.5 2.5 8.32 0 16.64-3.17 22.98-9.52 12.702-12.69 12.702-33.27.012-45.96z" fill="url(#SVGID_2_)"></path><path d="m472.678 510h-281.848c-19.128 0-31.22-17.763-21.613-31.933 24.206-35.705 87.843-61.195 162.537-61.195s138.331 25.49 162.537 61.195c9.606 14.17-2.485 31.933-21.613 31.933z" fill="url(#SVGID_3_)"></path><g><circle cx="193.661" cy="416.871" fill="url(#SVGID_4_)" r="39.502"></circle><circle cx="245.668" cy="406.793" fill="url(#SVGID_5_)" r="39.502"></circle><path d="m245.668 367.291c-4.372 0-8.574.721-12.505 2.033 15.685 5.233 26.996 20.025 26.996 37.469s-11.312 32.236-26.996 37.469c3.931 1.312 8.133 2.033 12.505 2.033 21.816 0 39.502-17.686 39.502-39.502s-17.685-39.502-39.502-39.502z" fill="url(#SVGID_6_)"></path></g><path d="m319.17 510h-281.848c-19.128 0-31.22-20.734-21.613-37.274 24.206-41.677 87.843-71.431 162.537-71.431s138.331 29.754 162.537 71.431c9.607 16.54-2.485 37.274-21.613 37.274z" fill="url(#SVGID_7_)"></path><path d="m340.783 472.725c-24.206-41.677-87.843-71.431-162.537-71.431-6.768 0-13.444.248-20.01.723 65.892 4.77 120.514 32.807 142.527 70.708 9.607 16.541-2.485 37.275-21.613 37.275h40.02c19.128 0 31.22-20.734 21.613-37.275z" fill="url(#SVGID_8_)"></path><g><path d="m421.633 94c0 51.915-188 51.915-188 0s42.085-94 94-94 94 42.085 94 94z" fill="url(#SVGID_9_)"></path><path d="m327.633 0c-6.868 0-13.561.743-20.01 2.142 42.3 9.172 73.99 46.811 73.99 91.858 0 22.248-34.528 34.961-73.99 38.14 52.619 4.239 114.01-8.473 114.01-38.14 0-51.915-42.085-94-94-94z" fill="url(#SVGID_10_)"></path><path d="m276.366 94c0 51.915-188 51.915-188 0s42.085-94 94-94 94 42.085 94 94z" fill="url(#SVGID_11_)"></path><path d="m182.366 0c-4.24 0-8.414.286-12.505.83 46.002 6.116 81.495 45.496 81.495 93.17 0 23.649-39.013 36.523-81.495 38.626 50.775 2.514 106.505-10.36 106.505-38.626 0-51.915-42.085-94-94-94z" fill="url(#SVGID_12_)"></path><path d="m256.702 143.241c20.452 0 40.228 2.892 58.948 8.277-22.716-50.652-73.606-85.921-132.73-85.851-80.147.095-145.506 65.944-145.027 146.09.004.6.011 1.2.022 1.798.46 25.348 32.819 35.89 47.958 15.554 38.794-52.113 100.869-85.868 170.829-85.868z" fill="url(#SVGID_13_)"></path><path d="m229.812 87.483c-26.346 17.151-47.506 43.29-60.154 74.329 26.573-11.926 56.031-18.571 87.045-18.571 20.452 0 40.228 2.892 58.948 8.277-11.963-26.677-31.745-49.08-56.426-64.306-9.057-5.587-20.496-5.534-29.413.271z" fill="url(#SVGID_14_)"></path><path d="m253.298 144.241c-20.452 0-39.228 2.895-57.948 8.28 22.716-50.652 72.606-86.924 131.73-86.854 80.147.095 145.506 65.944 145.027 146.09-.004.6-.011 1.2-.022 1.798-.46 25.348-32.819 35.89-47.958 15.554-38.794-52.113-100.869-84.868-170.829-84.868z" fill="url(#SVGID_15_)"></path><path d="m198.396 151.67c17.715-4.836 35.558-7.429 54.902-7.429 7.761 0 15.417.426 22.963 1.214.062-.908.106-1.822.106-2.746 0-21.816-17.686-39.502-39.502-39.502-2.212 0-4.378.19-6.491.54-13.41 12.396-24.538 27.275-32.7 43.843.17 1.384.412 2.744.722 4.08z" fill="url(#SVGID_16_)"></path><path d="m327.08 65.666c-6.811-.008-13.505.488-20.067 1.41.063.009.126.018.189.027 10.537 1.492 18.298 10.645 18.298 21.287v37.616c0 4.107 3.165 7.688 7.27 7.811 4.247.127 7.73-3.278 7.73-7.497v-50.32c2.379.953 4.727 1.966 7.042 3.039 7.603 3.523 12.458 11.155 12.458 19.534v49.494c0 4.107 3.165 7.688 7.27 7.811 4.247.127 7.73-3.278 7.73-7.497v-52.714c4.512 3.464 8.815 7.185 12.889 11.142 4.203 4.083 6.611 9.67 6.611 15.529v52.788c0 4.107 3.165 7.688 7.27 7.811 4.247.127 7.73-3.278 7.73-7.497v-42.096c14.44 22.706 22.759 49.635 22.587 78.411-.003.6-.011 1.2-.022 1.798-.126 6.97-2.673 12.811-6.602 17.208 15.621 18.063 46.175 7.419 46.622-17.208.011-.599.018-1.198.022-1.798.478-80.145-64.88-145.994-145.027-146.089z" fill="url(#SVGID_17_)"></path></g><circle cx="216.272" cy="182.21" fill="url(#SVGID_18_)" r="39.502"></circle><path d="m217.383 221.684c21.301-.59 38.391-18.03 38.391-39.474 0-21.816-17.686-39.502-39.502-39.502-6.731 0-13.065 1.688-18.612 4.656 1.588 13.494 9.959 24.909 21.629 30.719-4.75 6.521-7.56 14.545-7.56 23.23 0 7.454 2.066 14.423 5.654 20.371z" fill="url(#SVGID_19_)"></path><circle cx="276.366" cy="201.314" fill="url(#SVGID_20_)" r="39.502"></circle><path d="m315.87 201.31c0 21.82-17.69 39.51-39.5 39.51-4.4 0-8.64-.72-12.59-2.05 15.65-5.26 26.92-20.04 26.92-37.46 0-.048 0-.096 0-.144-.021-5.975-6.358-9.932-11.754-7.366-5.136 2.442-10.881 3.811-16.946 3.811-8.78 0-16.9-2.87-23.46-7.72 3.69-12.24 13.16-21.97 25.24-26.03 3.95-1.33 8.19-2.05 12.59-2.05 8.78 0 16.9 2.87 23.45 7.72 9.74 7.189 16.05 18.749 16.05 31.779z" fill="url(#SVGID_21_)"></path><circle cx="262.002" cy="142.708" fill="url(#SVGID_22_)" r="39.502"></circle><path d="m262.002 103.206c-4.372 0-8.574.721-12.505 2.033 15.685 5.233 26.996 20.025 26.996 37.469s-11.312 32.236-26.996 37.469c3.931 1.312 8.133 2.033 12.505 2.033 21.816 0 39.502-17.686 39.502-39.502s-17.686-39.502-39.502-39.502z" fill="url(#SVGID_23_)"></path></g></svg>`
      },

      /**
       * Create Winnetou Constructo        
       * @param  {string} output The node or list of nodes where the component will be created
       * @param  {object} [options] Options to control how the construct is inserted. Optional.
       * @param  {boolean} [options.clear] Clean the node before inserting the construct
       * @param  {boolean} [options.reverse] Place the construct in front of other constructs
       */

      "create": (output, options) => {
        this.create(component, output, options);
        return {
          ids: {
            icons_tropical: `icons_tropical-win-${identifier}`,
          },
        }
      }
    }
    component = obj.code(elements);
    return obj;
  }

  // ========================================




  /**
   * Create an colored icon **coloredIcons_tropical**
   * @param {object} [elements]
   * @param {any=} elements.class Class for the colored icon
   * @param {object} [options]
   * @param {any=} options.identifier
   * @private
   */
  coloredIcons_tropical = (elements, options) => {

    let identifier = this._getIdentifier(options ? options.identifier || 'notSet' : 'notSet');

    elements = this._test(identifier, 'coloredIcons_tropical', `coloredIcons_tropical-win-${identifier}`, elements);
    let component;
    let obj = {
      code(elements) {
        return `
<svg viewBox="0 0 510 510" id="coloredIcons_tropical-win-${identifier}" class="winColoredIcons ${(elements?.class || "")}"><linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="222.5" x2="379.454" y1="281.383" y2="281.383"><stop offset="0" stop-color="#ffdcbd"></stop><stop offset=".0028" stop-color="#ffdcbd"></stop><stop offset="1" stop-color="#ffa9b1"></stop></linearGradient><linearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1="222.5" x2="379.456" y1="281.38" y2="281.38"><stop offset="0" stop-color="#ffc2b5"></stop><stop offset=".2597" stop-color="#ffb9b3"></stop><stop offset=".6898" stop-color="#ff9fad"></stop><stop offset="1" stop-color="#ff89a8"></stop></linearGradient><linearGradient id="SVGID_3_" gradientUnits="userSpaceOnUse" x1="87" x2="486.037" y1="463.436" y2="463.436"><stop offset="0" stop-color="#ffe177"></stop><stop offset="1" stop-color="#fd6930"></stop></linearGradient><linearGradient id="lg1"><stop offset="0" stop-color="#918291"></stop><stop offset=".7487" stop-color="#7a6d79"></stop><stop offset="1" stop-color="#554e56"></stop></linearGradient><linearGradient id="SVGID_4_" gradientUnits="userSpaceOnUse" x1="155.659" x2="245.412" xlink:href="#lg1" y1="416.871" y2="416.871"></linearGradient><linearGradient id="SVGID_5_" gradientUnits="userSpaceOnUse" x1="207.667" x2="297.419" xlink:href="#lg1" y1="406.793" y2="406.793"></linearGradient><linearGradient id="SVGID_6_" gradientUnits="userSpaceOnUse" x1="199.667" x2="269.029" xlink:href="#lg1" y1="406.793" y2="406.793"></linearGradient><linearGradient id="lg2"><stop offset="0" stop-color="#fff3de"></stop><stop offset=".593" stop-color="#ffd15b"></stop><stop offset="1" stop-color="#fe7d43"></stop></linearGradient><linearGradient id="SVGID_7_" gradientUnits="userSpaceOnUse" x1="26.942" x2="341.475" xlink:href="#lg2" y1="455.647" y2="455.647"></linearGradient><linearGradient id="SVGID_8_" gradientUnits="userSpaceOnUse" x1="-71.366" x2="322" xlink:href="#lg2" y1="455.647" y2="455.647"></linearGradient><linearGradient id="lg3"><stop offset="0" stop-color="#9cf8d2"></stop><stop offset=".7542" stop-color="#00c285"></stop><stop offset="1" stop-color="#006e66"></stop></linearGradient><linearGradient id="SVGID_9_" gradientUnits="userSpaceOnUse" x1="217.333" x2="433.507" xlink:href="#lg3" y1="66.468" y2="66.468"></linearGradient><linearGradient id="SVGID_10_" gradientUnits="userSpaceOnUse" x1="167" x2="423.909" xlink:href="#lg3" y1="66.468" y2="66.468"></linearGradient><linearGradient id="SVGID_11_" gradientUnits="userSpaceOnUse" x1="68.667" x2="298.605" xlink:href="#lg3" y1="66.468" y2="66.468"></linearGradient><linearGradient id="SVGID_12_" gradientUnits="userSpaceOnUse" x1="62.5" x2="282.501" xlink:href="#lg3" y1="66.467" y2="66.467"></linearGradient><linearGradient id="SVGID_13_" gradientUnits="userSpaceOnUse" x1="41.792" x2="390.526" xlink:href="#lg3" y1="152.741" y2="152.741"></linearGradient><linearGradient id="SVGID_14_" gradientUnits="userSpaceOnUse" x1="79.5" x2="282.5" xlink:href="#lg3" y1="122.443" y2="122.443"></linearGradient><linearGradient id="SVGID_15_" gradientUnits="userSpaceOnUse" x1="168.48" x2="530.261" xlink:href="#lg3" y1="152.741" y2="152.741"></linearGradient><linearGradient id="SVGID_16_" gradientUnits="userSpaceOnUse" x1="176" x2="289.369" xlink:href="#lg3" y1="127.438" y2="127.438"></linearGradient><linearGradient id="SVGID_17_" gradientUnits="userSpaceOnUse" x1="133" x2="463.006" y1="152.739" y2="152.739"><stop offset="0" stop-color="#9cf8d2"></stop><stop offset=".703" stop-color="#00c285"></stop><stop offset="1" stop-color="#006e66"></stop></linearGradient><linearGradient id="SVGID_18_" gradientUnits="userSpaceOnUse" x1="178.667" x2="269.959" xlink:href="#lg1" y1="182.21" y2="182.21"></linearGradient><linearGradient id="SVGID_19_" gradientUnits="userSpaceOnUse" x1="164.667" x2="249.375" xlink:href="#lg1" y1="182.196" y2="182.196"></linearGradient><linearGradient id="SVGID_20_" gradientUnits="userSpaceOnUse" x1="246.667" x2="329.658" xlink:href="#lg1" y1="201.314" y2="201.314"></linearGradient><linearGradient id="SVGID_21_" gradientUnits="userSpaceOnUse" x1="200.5" x2="312.002" xlink:href="#lg1" y1="201.315" y2="201.315"></linearGradient><linearGradient id="SVGID_22_" gradientUnits="userSpaceOnUse" x1="224" x2="313.753" xlink:href="#lg1" y1="142.708" y2="142.708"></linearGradient><linearGradient id="SVGID_23_" gradientUnits="userSpaceOnUse" x1="216" x2="285.362" xlink:href="#lg1" y1="142.708" y2="142.708"></linearGradient><g><path d="m346.954 479.772c-8.318 0-16.635-3.172-22.981-9.519l-24.419-24.419c-24.553-24.553-43.74-53.268-57.028-85.349-13.288-32.08-20.026-65.952-20.026-100.676v-144.316c0-17.949 14.551-32.5 32.5-32.5s32.5 14.551 32.5 32.5v144.315c0 26.144 5.073 51.647 15.078 75.801s24.451 45.774 42.938 64.261l24.42 24.419c12.691 12.692 12.691 33.271-.001 45.962-6.345 6.347-14.665 9.521-22.981 9.521z" fill="url(#SVGID_1_)"></path><path d="m369.94 424.29-24.42-24.42c-18.49-18.49-32.94-40.11-42.94-64.26-10.01-24.15-15.08-49.66-15.08-75.8v-143.673c0-17.748-13.959-32.711-31.702-33.138-4.72-.114-9.228.785-13.298 2.48-11.75 4.9-20 16.49-20 30.01v123.19c2.133-.765 4.184-1.712 6.132-2.82 1.717-.977 3.866-.181 4.572 1.664 4.675 12.208 14.819 17.846 21.848 20.367 4.397 1.577 7.417 5.665 7.613 10.331.376 8.979 1.363 17.873 2.94 26.653-11.776 1.881-20.46 1.624-20.576 1.624-4.14-.14-7.62 3.08-7.77 7.22-.16 4.13 3.08 7.61 7.21 7.77.14 0 .84.03 2.01.03.807 0 1.839-.011 3.069-.047 11.102-.325 21.304 6.368 25.145 16.789.908 2.463 1.866 4.912 2.876 7.348.103.249.214.493.318.741-11.947 1.938-20.791 1.679-20.908 1.679-4.14-.14-7.62 3.07-7.77 7.21s3.08 7.62 7.22 7.78c.14 0 .83.02 2 .02 2.055 0 5.562-.073 10.066-.438 9.57-.777 18.839 3.736 23.91 11.889 2.6 4.18 5.355 8.26 8.263 12.234-13.648 2.603-24.214 2.286-24.349 2.286-4.15-.15-7.62 3.08-7.77 7.22s3.08 7.62 7.22 7.77c.14 0 .84.03 2.01.03 3.425 0 10.907-.201 20.32-1.637 8.186-1.249 16.473 1.542 22.324 7.402l.075.076 24.42 24.42c12.7 12.69 12.7 33.27 0 45.96-3.09 3.09-6.66 5.43-10.47 7.02 3.99 1.67 8.25 2.5 12.5 2.5 8.32 0 16.64-3.17 22.98-9.52 12.702-12.69 12.702-33.27.012-45.96z" fill="url(#SVGID_2_)"></path><path d="m472.678 510h-281.848c-19.128 0-31.22-17.763-21.613-31.933 24.206-35.705 87.843-61.195 162.537-61.195s138.331 25.49 162.537 61.195c9.606 14.17-2.485 31.933-21.613 31.933z" fill="url(#SVGID_3_)"></path><g><circle cx="193.661" cy="416.871" fill="url(#SVGID_4_)" r="39.502"></circle><circle cx="245.668" cy="406.793" fill="url(#SVGID_5_)" r="39.502"></circle><path d="m245.668 367.291c-4.372 0-8.574.721-12.505 2.033 15.685 5.233 26.996 20.025 26.996 37.469s-11.312 32.236-26.996 37.469c3.931 1.312 8.133 2.033 12.505 2.033 21.816 0 39.502-17.686 39.502-39.502s-17.685-39.502-39.502-39.502z" fill="url(#SVGID_6_)"></path></g><path d="m319.17 510h-281.848c-19.128 0-31.22-20.734-21.613-37.274 24.206-41.677 87.843-71.431 162.537-71.431s138.331 29.754 162.537 71.431c9.607 16.54-2.485 37.274-21.613 37.274z" fill="url(#SVGID_7_)"></path><path d="m340.783 472.725c-24.206-41.677-87.843-71.431-162.537-71.431-6.768 0-13.444.248-20.01.723 65.892 4.77 120.514 32.807 142.527 70.708 9.607 16.541-2.485 37.275-21.613 37.275h40.02c19.128 0 31.22-20.734 21.613-37.275z" fill="url(#SVGID_8_)"></path><g><path d="m421.633 94c0 51.915-188 51.915-188 0s42.085-94 94-94 94 42.085 94 94z" fill="url(#SVGID_9_)"></path><path d="m327.633 0c-6.868 0-13.561.743-20.01 2.142 42.3 9.172 73.99 46.811 73.99 91.858 0 22.248-34.528 34.961-73.99 38.14 52.619 4.239 114.01-8.473 114.01-38.14 0-51.915-42.085-94-94-94z" fill="url(#SVGID_10_)"></path><path d="m276.366 94c0 51.915-188 51.915-188 0s42.085-94 94-94 94 42.085 94 94z" fill="url(#SVGID_11_)"></path><path d="m182.366 0c-4.24 0-8.414.286-12.505.83 46.002 6.116 81.495 45.496 81.495 93.17 0 23.649-39.013 36.523-81.495 38.626 50.775 2.514 106.505-10.36 106.505-38.626 0-51.915-42.085-94-94-94z" fill="url(#SVGID_12_)"></path><path d="m256.702 143.241c20.452 0 40.228 2.892 58.948 8.277-22.716-50.652-73.606-85.921-132.73-85.851-80.147.095-145.506 65.944-145.027 146.09.004.6.011 1.2.022 1.798.46 25.348 32.819 35.89 47.958 15.554 38.794-52.113 100.869-85.868 170.829-85.868z" fill="url(#SVGID_13_)"></path><path d="m229.812 87.483c-26.346 17.151-47.506 43.29-60.154 74.329 26.573-11.926 56.031-18.571 87.045-18.571 20.452 0 40.228 2.892 58.948 8.277-11.963-26.677-31.745-49.08-56.426-64.306-9.057-5.587-20.496-5.534-29.413.271z" fill="url(#SVGID_14_)"></path><path d="m253.298 144.241c-20.452 0-39.228 2.895-57.948 8.28 22.716-50.652 72.606-86.924 131.73-86.854 80.147.095 145.506 65.944 145.027 146.09-.004.6-.011 1.2-.022 1.798-.46 25.348-32.819 35.89-47.958 15.554-38.794-52.113-100.869-84.868-170.829-84.868z" fill="url(#SVGID_15_)"></path><path d="m198.396 151.67c17.715-4.836 35.558-7.429 54.902-7.429 7.761 0 15.417.426 22.963 1.214.062-.908.106-1.822.106-2.746 0-21.816-17.686-39.502-39.502-39.502-2.212 0-4.378.19-6.491.54-13.41 12.396-24.538 27.275-32.7 43.843.17 1.384.412 2.744.722 4.08z" fill="url(#SVGID_16_)"></path><path d="m327.08 65.666c-6.811-.008-13.505.488-20.067 1.41.063.009.126.018.189.027 10.537 1.492 18.298 10.645 18.298 21.287v37.616c0 4.107 3.165 7.688 7.27 7.811 4.247.127 7.73-3.278 7.73-7.497v-50.32c2.379.953 4.727 1.966 7.042 3.039 7.603 3.523 12.458 11.155 12.458 19.534v49.494c0 4.107 3.165 7.688 7.27 7.811 4.247.127 7.73-3.278 7.73-7.497v-52.714c4.512 3.464 8.815 7.185 12.889 11.142 4.203 4.083 6.611 9.67 6.611 15.529v52.788c0 4.107 3.165 7.688 7.27 7.811 4.247.127 7.73-3.278 7.73-7.497v-42.096c14.44 22.706 22.759 49.635 22.587 78.411-.003.6-.011 1.2-.022 1.798-.126 6.97-2.673 12.811-6.602 17.208 15.621 18.063 46.175 7.419 46.622-17.208.011-.599.018-1.198.022-1.798.478-80.145-64.88-145.994-145.027-146.089z" fill="url(#SVGID_17_)"></path></g><circle cx="216.272" cy="182.21" fill="url(#SVGID_18_)" r="39.502"></circle><path d="m217.383 221.684c21.301-.59 38.391-18.03 38.391-39.474 0-21.816-17.686-39.502-39.502-39.502-6.731 0-13.065 1.688-18.612 4.656 1.588 13.494 9.959 24.909 21.629 30.719-4.75 6.521-7.56 14.545-7.56 23.23 0 7.454 2.066 14.423 5.654 20.371z" fill="url(#SVGID_19_)"></path><circle cx="276.366" cy="201.314" fill="url(#SVGID_20_)" r="39.502"></circle><path d="m315.87 201.31c0 21.82-17.69 39.51-39.5 39.51-4.4 0-8.64-.72-12.59-2.05 15.65-5.26 26.92-20.04 26.92-37.46 0-.048 0-.096 0-.144-.021-5.975-6.358-9.932-11.754-7.366-5.136 2.442-10.881 3.811-16.946 3.811-8.78 0-16.9-2.87-23.46-7.72 3.69-12.24 13.16-21.97 25.24-26.03 3.95-1.33 8.19-2.05 12.59-2.05 8.78 0 16.9 2.87 23.45 7.72 9.74 7.189 16.05 18.749 16.05 31.779z" fill="url(#SVGID_21_)"></path><circle cx="262.002" cy="142.708" fill="url(#SVGID_22_)" r="39.502"></circle><path d="m262.002 103.206c-4.372 0-8.574.721-12.505 2.033 15.685 5.233 26.996 20.025 26.996 37.469s-11.312 32.236-26.996 37.469c3.931 1.312 8.133 2.033 12.505 2.033 21.816 0 39.502-17.686 39.502-39.502s-17.686-39.502-39.502-39.502z" fill="url(#SVGID_23_)"></path></g></svg>`
      },

      /**
       * Create Winnetou Constructo        
       * @param  {string} output The node or list of nodes where the component will be created
       * @param  {object} [options] Options to control how the construct is inserted. Optional.
       * @param  {boolean} [options.clear] Clean the node before inserting the construct
       * @param  {boolean} [options.reverse] Place the construct in front of other constructs
       */

      "create": (output, options) => {
        this.create(component, output, options);
        return {
          ids: {
            coloredIcons_tropical: `coloredIcons_tropical-win-${identifier}`,
          },
        }
      }
    }
    component = obj.code(elements);
    return obj;
  } // ========================================




  /**
   * 
   * @param {object} elements
   * @param {any} elements.texto 
   * @param {object} [options]
   * @param {any=} options.identifier
   * @private
   */
  divSimples = (elements, options) => {

    let identifier = this._getIdentifier(options ? options.identifier || 'notSet' : 'notSet');

    elements = this._test(identifier, 'divSimples', `divSimples-win-${identifier}`, elements);
    let component;
    let obj = {
      code(elements) {
        return `
  <div id="divSimples-win-${identifier}">
    ${(elements?.texto)}
  </div>
`
      },

      /**
       * Create Winnetou Constructo        
       * @param  {string} output The node or list of nodes where the component will be created
       * @param  {object} [options] Options to control how the construct is inserted. Optional.
       * @param  {boolean} [options.clear] Clean the node before inserting the construct
       * @param  {boolean} [options.reverse] Place the construct in front of other constructs
       */

      "create": (output, options) => {
        this.create(component, output, options);
        return {
          ids: {
            divSimples: `divSimples-win-${identifier}`,
          },
        }
      }
    }
    component = obj.code(elements);
    return obj;
  } // ========================================




  /**
   * 
   * @param {object} elements
   * @param {any} elements.texto 
   * @param {object} [options]
   * @param {any=} options.identifier
   * @private
   */
  divSimples2 = (elements, options) => {

    let identifier = this._getIdentifier(options ? options.identifier || 'notSet' : 'notSet');

    elements = this._test(identifier, 'divSimples2', `divSimples2-win-${identifier}`, elements);
    let component;
    let obj = {
      code(elements) {
        return `
  <div id="divSimples2-win-${identifier}">
    ${(elements?.texto)}
  </div>
`
      },

      /**
       * Create Winnetou Constructo        
       * @param  {string} output The node or list of nodes where the component will be created
       * @param  {object} [options] Options to control how the construct is inserted. Optional.
       * @param  {boolean} [options.clear] Clean the node before inserting the construct
       * @param  {boolean} [options.reverse] Place the construct in front of other constructs
       */

      "create": (output, options) => {
        this.create(component, output, options);
        return {
          ids: {
            divSimples2: `divSimples2-win-${identifier}`,
          },
        }
      }
    }
    component = obj.code(elements);
    return obj;
  } // ========================================




  /**
   * 
   * @param {object} [elements]
   * @param {object} [options]
   * @param {any=} options.identifier
   * @private
   */
  slideScreen = (elements, options) => {

    let identifier = this._getIdentifier(options ? options.identifier || 'notSet' : 'notSet');

    elements = this._test(identifier, 'slideScreen', `slideScreen-win-${identifier}`, elements);
    let component;
    let obj = {
      code(elements) {
        return `
  <div class="slideScreen" id="slideScreen-win-${identifier}"></div>
`
      },

      /**
       * Create Winnetou Constructo        
       * @param  {string} output The node or list of nodes where the component will be created
       * @param  {object} [options] Options to control how the construct is inserted. Optional.
       * @param  {boolean} [options.clear] Clean the node before inserting the construct
       * @param  {boolean} [options.reverse] Place the construct in front of other constructs
       */

      "create": (output, options) => {
        this.create(component, output, options);
        return {
          ids: {
            slideScreen: `slideScreen-win-${identifier}`,
          },
        }
      }
    }
    component = obj.code(elements);
    return obj;
  }

  // ========================================




  /**
   * 
   * @param {object} [elements]
   * @param {object} [options]
   * @param {any=} options.identifier
   * @private
   */
  screen = (elements, options) => {

    let identifier = this._getIdentifier(options ? options.identifier || 'notSet' : 'notSet');

    elements = this._test(identifier, 'screen', `screen-win-${identifier}`, elements);
    let component;
    let obj = {
      code(elements) {
        return `
  <div class="screen" id="screen-win-${identifier}"></div>
`
      },

      /**
       * Create Winnetou Constructo        
       * @param  {string} output The node or list of nodes where the component will be created
       * @param  {object} [options] Options to control how the construct is inserted. Optional.
       * @param  {boolean} [options.clear] Clean the node before inserting the construct
       * @param  {boolean} [options.reverse] Place the construct in front of other constructs
       */

      "create": (output, options) => {
        this.create(component, output, options);
        return {
          ids: {
            screen: `screen-win-${identifier}`,
          },
        }
      }
    }
    component = obj.code(elements);
    return obj;
  }

}

// @ts-ignore
export const Winnetou = new _Winnetou();
// @ts-ignore
export const Constructos = Winnetou.Constructos;
/**
 * Object containing all available constructos. 

*/
// @ts-ignore
export const Strings = Winnetou.strings;