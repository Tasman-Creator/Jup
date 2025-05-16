"use strict";(self.webpackChunkuntitled=self.webpackChunkuntitled||[]).push([[2934],{34338:(t,e,i)=>{var a=i(34872),n=i(80164),o=(i(66864),i(2038),i(47410),i(44460)),r=i(45907);const s=a.AH`
  button {
    border: none;
    border-radius: var(--wui-border-radius-3xl);
  }

  button[data-variant='main'] {
    background-color: var(--wui-color-accent-100);
    color: var(--wui-color-inverse-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='accent'] {
    background-color: var(--wui-color-accent-glass-010);
    color: var(--wui-color-accent-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  button[data-variant='gray'] {
    background-color: transparent;
    color: var(--wui-color-fg-200);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='shade'] {
    background-color: transparent;
    color: var(--wui-color-accent-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-size='sm'] {
    height: 32px;
    padding: 0 var(--wui-spacing-s);
  }

  button[data-size='md'] {
    height: 40px;
    padding: 0 var(--wui-spacing-l);
  }

  button[data-size='sm'] > wui-image {
    width: 16px;
    height: 16px;
  }

  button[data-size='md'] > wui-image {
    width: 24px;
    height: 24px;
  }

  button[data-size='sm'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  button[data-size='md'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  button.disabled > wui-icon,
  button.disabled > wui-image {
    filter: grayscale(1);
  }

  button[data-variant='main'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-accent-090);
  }

  button[data-variant='shade'] > wui-image,
  button[data-variant='gray'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  @media (hover: hover) and (pointer: fine) {
    button[data-variant='main']:focus-visible {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:active:enabled {
      background-color: var(--wui-color-accent-080);
    }

    button[data-variant='accent']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }

    button[data-variant='accent']:active:enabled {
      background-color: var(--wui-color-accent-glass-020);
    }

    button[data-variant='shade']:focus-visible,
    button[data-variant='gray']:focus-visible,
    button[data-variant='shade']:hover,
    button[data-variant='gray']:hover {
      background-color: var(--wui-color-gray-glass-002);
    }

    button[data-variant='gray']:active,
    button[data-variant='shade']:active {
      background-color: var(--wui-color-gray-glass-005);
    }
  }

  button.disabled {
    color: var(--wui-color-gray-glass-020);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    pointer-events: none;
  }
`;var c=function(t,e,i,a){var n,o=arguments.length,r=o<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,i):a;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(t,e,i,a);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(r=(o<3?n(r):o>3?n(e,i,r):n(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r};let l=class extends a.WF{constructor(){super(...arguments),this.variant="accent",this.imageSrc="",this.disabled=!1,this.icon="externalLink",this.size="md",this.text=""}render(){const t="sm"===this.size?"small-600":"paragraph-600";return a.qy`
      <button
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
        data-size=${this.size}
      >
        ${this.imageSrc?a.qy`<wui-image src=${this.imageSrc}></wui-image>`:null}
        <wui-text variant=${t} color="inherit"> ${this.text} </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </button>
    `}};l.styles=[o.W5,o.fD,s],c([(0,n.MZ)()],l.prototype,"variant",void 0),c([(0,n.MZ)()],l.prototype,"imageSrc",void 0),c([(0,n.MZ)({type:Boolean})],l.prototype,"disabled",void 0),c([(0,n.MZ)()],l.prototype,"icon",void 0),c([(0,n.MZ)()],l.prototype,"size",void 0),c([(0,n.MZ)()],l.prototype,"text",void 0),l=c([(0,r.E)("wui-chip-button")],l)},37568:(t,e,i)=>{var a=i(34872),n=i(80164),o=i(44460),r=i(2511),s=i(45907);const c=a.AH`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`;var l=function(t,e,i,a){var n,o=arguments.length,r=o<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,i):a;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(t,e,i,a);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(r=(o<3?n(r):o>3?n(e,i,r):n(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r};let d=class extends a.WF{render(){return this.style.cssText=`\n      flex-direction: ${this.flexDirection};\n      flex-wrap: ${this.flexWrap};\n      flex-basis: ${this.flexBasis};\n      flex-grow: ${this.flexGrow};\n      flex-shrink: ${this.flexShrink};\n      align-items: ${this.alignItems};\n      justify-content: ${this.justifyContent};\n      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};\n      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};\n      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};\n      padding-top: ${this.padding&&r.Z.getSpacingStyles(this.padding,0)};\n      padding-right: ${this.padding&&r.Z.getSpacingStyles(this.padding,1)};\n      padding-bottom: ${this.padding&&r.Z.getSpacingStyles(this.padding,2)};\n      padding-left: ${this.padding&&r.Z.getSpacingStyles(this.padding,3)};\n      margin-top: ${this.margin&&r.Z.getSpacingStyles(this.margin,0)};\n      margin-right: ${this.margin&&r.Z.getSpacingStyles(this.margin,1)};\n      margin-bottom: ${this.margin&&r.Z.getSpacingStyles(this.margin,2)};\n      margin-left: ${this.margin&&r.Z.getSpacingStyles(this.margin,3)};\n    `,a.qy`<slot></slot>`}};d.styles=[o.W5,c],l([(0,n.MZ)()],d.prototype,"flexDirection",void 0),l([(0,n.MZ)()],d.prototype,"flexWrap",void 0),l([(0,n.MZ)()],d.prototype,"flexBasis",void 0),l([(0,n.MZ)()],d.prototype,"flexGrow",void 0),l([(0,n.MZ)()],d.prototype,"flexShrink",void 0),l([(0,n.MZ)()],d.prototype,"alignItems",void 0),l([(0,n.MZ)()],d.prototype,"justifyContent",void 0),l([(0,n.MZ)()],d.prototype,"columnGap",void 0),l([(0,n.MZ)()],d.prototype,"rowGap",void 0),l([(0,n.MZ)()],d.prototype,"gap",void 0),l([(0,n.MZ)()],d.prototype,"padding",void 0),l([(0,n.MZ)()],d.prototype,"margin",void 0),d=l([(0,s.E)("wui-flex")],d)},47410:(t,e,i)=>{var a=i(34872),n=i(80164),o=i(55712),r=i(44460),s=i(45907);const c=a.AH`
  :host {
    display: inline-flex !important;
  }

  slot {
    width: 100%;
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-line-clamp-1 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  .wui-line-clamp-2 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .wui-font-medium-400 {
    font-size: var(--wui-font-size-medium);
    font-weight: var(--wui-font-weight-light);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-medium-600 {
    font-size: var(--wui-font-size-medium);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-title-600 {
    font-size: var(--wui-font-size-title);
    letter-spacing: var(--wui-letter-spacing-title);
  }

  .wui-font-title-6-600 {
    font-size: var(--wui-font-size-title-6);
    letter-spacing: var(--wui-letter-spacing-title-6);
  }

  .wui-font-mini-700 {
    font-size: var(--wui-font-size-mini);
    letter-spacing: var(--wui-letter-spacing-mini);
    text-transform: uppercase;
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-2xl-500,
  .wui-font-2xl-600,
  .wui-font-2xl-700 {
    font-size: var(--wui-font-size-2xl);
    letter-spacing: var(--wui-letter-spacing-2xl);
  }

  .wui-font-paragraph-400,
  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-400,
  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-400,
  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-tiny-400,
  .wui-font-small-400,
  .wui-font-medium-400,
  .wui-font-paragraph-400 {
    font-weight: var(--wui-font-weight-light);
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700,
  .wui-font-mini-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-medium-600,
  .wui-font-medium-title-600,
  .wui-font-title-6-600,
  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }

  :host([disabled]) {
    opacity: 0.4;
  }
`;var l=function(t,e,i,a){var n,o=arguments.length,r=o<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,i):a;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(t,e,i,a);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(r=(o<3?n(r):o>3?n(e,i,r):n(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r};let d=class extends a.WF{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left",this.lineClamp=void 0}render(){const t={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0,[`wui-line-clamp-${this.lineClamp}`]:!!this.lineClamp};return this.style.cssText=`\n      --local-align: ${this.align};\n      --local-color: var(--wui-color-${this.color});\n    `,a.qy`<slot class=${(0,o.H)(t)}></slot>`}};d.styles=[r.W5,c],l([(0,n.MZ)()],d.prototype,"variant",void 0),l([(0,n.MZ)()],d.prototype,"color",void 0),l([(0,n.MZ)()],d.prototype,"align",void 0),l([(0,n.MZ)()],d.prototype,"lineClamp",void 0),d=l([(0,s.E)("wui-text")],d)},55712:(t,e,i)=>{i.d(e,{H:()=>a.H});var a=i(16254)},66864:(t,e,i)=>{var a=i(34872),n=i(80164),o=i(68455);const r=new class{constructor(){this.cache=new Map}set(t,e){this.cache.set(t,e)}get(t){return this.cache.get(t)}has(t){return this.cache.has(t)}delete(t){this.cache.delete(t)}clear(){this.cache.clear()}};var s=i(44460),c=i(45907);const l=a.AH`
  :host {
    display: flex;
    aspect-ratio: var(--local-aspect-ratio);
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }

  .fallback {
    width: var(--local-width);
    height: var(--local-height);
  }
`;var d=function(t,e,i,a){var n,o=arguments.length,r=o<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,i):a;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(t,e,i,a);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(r=(o<3?n(r):o>3?n(e,i,r):n(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r};const w={add:async()=>(await i.e(8855).then(i.bind(i,48855))).addSvg,allWallets:async()=>(await i.e(8720).then(i.bind(i,8720))).allWalletsSvg,arrowBottomCircle:async()=>(await i.e(2378).then(i.bind(i,22378))).arrowBottomCircleSvg,appStore:async()=>(await i.e(6415).then(i.bind(i,66415))).appStoreSvg,apple:async()=>(await i.e(7176).then(i.bind(i,17176))).appleSvg,arrowBottom:async()=>(await i.e(3093).then(i.bind(i,93093))).arrowBottomSvg,arrowLeft:async()=>(await i.e(4655).then(i.bind(i,14655))).arrowLeftSvg,arrowRight:async()=>(await i.e(3262).then(i.bind(i,3262))).arrowRightSvg,arrowTop:async()=>(await i.e(8139).then(i.bind(i,8139))).arrowTopSvg,bank:async()=>(await i.e(8928).then(i.bind(i,58928))).bankSvg,browser:async()=>(await i.e(4632).then(i.bind(i,94632))).browserSvg,card:async()=>(await i.e(7816).then(i.bind(i,17816))).cardSvg,checkmark:async()=>(await i.e(4881).then(i.bind(i,84881))).checkmarkSvg,checkmarkBold:async()=>(await i.e(8997).then(i.bind(i,48997))).checkmarkBoldSvg,chevronBottom:async()=>(await i.e(131).then(i.bind(i,10131))).chevronBottomSvg,chevronLeft:async()=>(await i.e(6757).then(i.bind(i,86757))).chevronLeftSvg,chevronRight:async()=>(await i.e(6020).then(i.bind(i,26020))).chevronRightSvg,chevronTop:async()=>(await i.e(5213).then(i.bind(i,85213))).chevronTopSvg,chromeStore:async()=>(await i.e(2236).then(i.bind(i,72236))).chromeStoreSvg,clock:async()=>(await i.e(5242).then(i.bind(i,5242))).clockSvg,close:async()=>(await i.e(3076).then(i.bind(i,93076))).closeSvg,compass:async()=>(await i.e(7720).then(i.bind(i,7720))).compassSvg,coinPlaceholder:async()=>(await i.e(8734).then(i.bind(i,88734))).coinPlaceholderSvg,copy:async()=>(await i.e(3943).then(i.bind(i,63943))).copySvg,cursor:async()=>(await i.e(9144).then(i.bind(i,99144))).cursorSvg,cursorTransparent:async()=>(await i.e(6195).then(i.bind(i,86195))).cursorTransparentSvg,desktop:async()=>(await i.e(6964).then(i.bind(i,76964))).desktopSvg,disconnect:async()=>(await i.e(9004).then(i.bind(i,79004))).disconnectSvg,discord:async()=>(await i.e(504).then(i.bind(i,90504))).discordSvg,etherscan:async()=>(await i.e(7577).then(i.bind(i,87577))).etherscanSvg,extension:async()=>(await i.e(889).then(i.bind(i,889))).extensionSvg,externalLink:async()=>(await i.e(6638).then(i.bind(i,76638))).externalLinkSvg,facebook:async()=>(await i.e(7350).then(i.bind(i,37350))).facebookSvg,farcaster:async()=>(await i.e(3677).then(i.bind(i,93677))).farcasterSvg,filters:async()=>(await i.e(7487).then(i.bind(i,57487))).filtersSvg,github:async()=>(await i.e(3265).then(i.bind(i,33265))).githubSvg,google:async()=>(await i.e(7197).then(i.bind(i,77197))).googleSvg,helpCircle:async()=>(await i.e(3806).then(i.bind(i,53806))).helpCircleSvg,image:async()=>(await i.e(2169).then(i.bind(i,2169))).imageSvg,id:async()=>(await i.e(5931).then(i.bind(i,45931))).idSvg,infoCircle:async()=>(await i.e(4079).then(i.bind(i,74079))).infoCircleSvg,lightbulb:async()=>(await i.e(9015).then(i.bind(i,49015))).lightbulbSvg,mail:async()=>(await i.e(7301).then(i.bind(i,37301))).mailSvg,mobile:async()=>(await i.e(1456).then(i.bind(i,61456))).mobileSvg,more:async()=>(await i.e(9915).then(i.bind(i,19915))).moreSvg,networkPlaceholder:async()=>(await i.e(1626).then(i.bind(i,1626))).networkPlaceholderSvg,nftPlaceholder:async()=>(await i.e(1883).then(i.bind(i,21883))).nftPlaceholderSvg,off:async()=>(await i.e(8089).then(i.bind(i,18089))).offSvg,playStore:async()=>(await i.e(8732).then(i.bind(i,48732))).playStoreSvg,plus:async()=>(await i.e(5330).then(i.bind(i,65330))).plusSvg,qrCode:async()=>(await i.e(8935).then(i.bind(i,98935))).qrCodeIcon,recycleHorizontal:async()=>(await i.e(1138).then(i.bind(i,81138))).recycleHorizontalSvg,refresh:async()=>(await i.e(4167).then(i.bind(i,96548))).refreshSvg,search:async()=>(await i.e(9870).then(i.bind(i,19870))).searchSvg,send:async()=>(await i.e(5352).then(i.bind(i,25352))).sendSvg,swapHorizontal:async()=>(await i.e(5601).then(i.bind(i,15601))).swapHorizontalSvg,swapHorizontalMedium:async()=>(await i.e(8230).then(i.bind(i,18230))).swapHorizontalMediumSvg,swapHorizontalBold:async()=>(await i.e(2946).then(i.bind(i,12946))).swapHorizontalBoldSvg,swapHorizontalRoundedBold:async()=>(await i.e(2471).then(i.bind(i,2471))).swapHorizontalRoundedBoldSvg,swapVertical:async()=>(await i.e(2871).then(i.bind(i,22871))).swapVerticalSvg,telegram:async()=>(await i.e(9885).then(i.bind(i,69885))).telegramSvg,threeDots:async()=>(await i.e(6109).then(i.bind(i,56109))).threeDotsSvg,twitch:async()=>(await i.e(7145).then(i.bind(i,47145))).twitchSvg,twitter:async()=>(await i.e(9792).then(i.bind(i,29792))).xSvg,twitterIcon:async()=>(await i.e(5602).then(i.bind(i,85602))).twitterIconSvg,verify:async()=>(await i.e(8743).then(i.bind(i,48743))).verifySvg,verifyFilled:async()=>(await i.e(2460).then(i.bind(i,32460))).verifyFilledSvg,wallet:async()=>(await i.e(4303).then(i.bind(i,84303))).walletSvg,walletConnect:async()=>(await i.e(8689).then(i.bind(i,18689))).walletConnectSvg,walletConnectLightBrown:async()=>(await i.e(8689).then(i.bind(i,18689))).walletConnectLightBrownSvg,walletConnectBrown:async()=>(await i.e(8689).then(i.bind(i,18689))).walletConnectBrownSvg,walletPlaceholder:async()=>(await i.e(3467).then(i.bind(i,53467))).walletPlaceholderSvg,warningCircle:async()=>(await i.e(9445).then(i.bind(i,59445))).warningCircleSvg,x:async()=>(await i.e(9792).then(i.bind(i,29792))).xSvg,info:async()=>(await i.e(7570).then(i.bind(i,97570))).infoSvg,exclamationTriangle:async()=>(await i.e(8062).then(i.bind(i,48062))).exclamationTriangleSvg,reown:async()=>(await i.e(6563).then(i.bind(i,96563))).reownSvg};let h=class extends a.WF{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300",this.aspectRatio="1 / 1"}render(){return this.style.cssText=`\n      --local-color: var(--wui-color-${this.color});\n      --local-width: var(--wui-icon-size-${this.size});\n      --local-aspect-ratio: ${this.aspectRatio}\n    `,a.qy`${(0,o.T)(async function(t){if(r.has(t))return r.get(t);const e=(w[t]??w.copy)();return r.set(t,e),e}(this.name),a.qy`<div class="fallback"></div>`)}`}};h.styles=[s.W5,s.ck,l],d([(0,n.MZ)()],h.prototype,"size",void 0),d([(0,n.MZ)()],h.prototype,"name",void 0),d([(0,n.MZ)()],h.prototype,"color",void 0),d([(0,n.MZ)()],h.prototype,"aspectRatio",void 0),h=d([(0,c.E)("wui-icon")],h)},68161:(t,e,i)=>{i(47410)},72934:(t,e,i)=>{i.r(e),i.d(e,{W3mWalletReceiveView:()=>S});var a=i(34872),n=i(80164),o=i(79024),r=i(71137),s=i(37825),c=i(21672),l=i(37162),d=i(62643),w=i(51785),h=i(33155),g=i(82606),p=(i(34338),i(66864),i(2038),i(47410),i(37568),i(44460)),u=i(45907);const v=a.AH`
  button {
    display: flex;
    gap: var(--wui-spacing-xl);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    padding: var(--wui-spacing-m) var(--wui-spacing-s);
  }

  wui-text {
    width: 100%;
  }

  wui-flex {
    width: auto;
  }

  .network-icon {
    width: var(--wui-spacing-2l);
    height: var(--wui-spacing-2l);
    border-radius: calc(var(--wui-spacing-2l) / 2);
    overflow: hidden;
    box-shadow:
      0 0 0 3px var(--wui-color-gray-glass-002),
      0 0 0 3px var(--wui-color-modal-bg);
  }
`;var f=function(t,e,i,a){var n,o=arguments.length,r=o<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,i):a;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(t,e,i,a);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(r=(o<3?n(r):o>3?n(e,i,r):n(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r};let b=class extends a.WF{constructor(){super(...arguments),this.networkImages=[""],this.text=""}render(){return a.qy`
      <button>
        <wui-text variant="small-400" color="fg-200">${this.text}</wui-text>
        <wui-flex gap="3xs" alignItems="center">
          ${this.networksTemplate()}
          <wui-icon name="chevronRight" size="sm" color="fg-200"></wui-icon>
        </wui-flex>
      </button>
    `}networksTemplate(){const t=this.networkImages.slice(0,5);return a.qy` <wui-flex class="networks">
      ${t?.map((t=>a.qy` <wui-flex class="network-icon"> <wui-image src=${t}></wui-image> </wui-flex>`))}
    </wui-flex>`}};b.styles=[p.W5,p.fD,v],f([(0,n.MZ)({type:Array})],b.prototype,"networkImages",void 0),f([(0,n.MZ)()],b.prototype,"text",void 0),b=f([(0,u.E)("wui-compatible-network")],b);i(99437),i(93999),i(68161);var y=i(32797);const m=a.AH`
  wui-compatible-network {
    margin-top: var(--wui-spacing-l);
  }
`;var x=function(t,e,i,a){var n,o=arguments.length,r=o<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,i):a;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(t,e,i,a);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(r=(o<3?n(r):o>3?n(e,i,r):n(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r};let S=class extends a.WF{constructor(){super(),this.unsubscribe=[],this.address=r.U.state.address,this.profileName=r.U.state.profileName,this.network=s.W.state.activeCaipNetwork,this.preferredAccountType=r.U.state.preferredAccountType,this.unsubscribe.push(r.U.subscribe((t=>{t.address?(this.address=t.address,this.profileName=t.profileName,this.preferredAccountType=t.preferredAccountType):c.P.showError("Account not found")})),s.W.subscribeKey("activeCaipNetwork",(t=>{t?.id&&(this.network=t)})))}disconnectedCallback(){this.unsubscribe.forEach((t=>t()))}render(){if(!this.address)throw new Error("w3m-wallet-receive-view: No account provided");const t=l.$.getNetworkImage(this.network);return a.qy` <wui-flex
      flexDirection="column"
      .padding=${["0","l","l","l"]}
      alignItems="center"
    >
      <wui-chip-button
        data-testid="receive-address-copy-button"
        @click=${this.onCopyClick.bind(this)}
        text=${g.Zv.getTruncateString({string:this.profileName||this.address||"",charsStart:this.profileName?18:4,charsEnd:this.profileName?0:4,truncate:this.profileName?"end":"middle"})}
        icon="copy"
        size="sm"
        imageSrc=${t||""}
        variant="gray"
      ></wui-chip-button>
      <wui-flex
        flexDirection="column"
        .padding=${["l","0","0","0"]}
        alignItems="center"
        gap="s"
      >
        <wui-qr-code
          size=${232}
          theme=${d.W.state.themeMode}
          uri=${this.address}
          ?arenaClear=${!0}
          color=${(0,o.J)(d.W.state.themeVariables["--w3m-qr-color"])}
          data-testid="wui-qr-code"
        ></wui-qr-code>
        <wui-text variant="paragraph-500" color="fg-100" align="center">
          Copy your address or scan this QR code
        </wui-text>
      </wui-flex>
      ${this.networkTemplate()}
    </wui-flex>`}networkTemplate(){const t=s.W.getAllRequestedCaipNetworks(),e=s.W.checkIfSmartAccountEnabled(),i=s.W.state.activeCaipNetwork;if(this.preferredAccountType===y.Vl.ACCOUNT_TYPES.SMART_ACCOUNT&&e)return i?a.qy`<wui-compatible-network
        @click=${this.onReceiveClick.bind(this)}
        text="Only receive assets on this network"
        .networkImages=${[l.$.getNetworkImage(i)??""]}
      ></wui-compatible-network>`:null;const n=t?.filter((t=>t?.assets?.imageId))?.slice(0,5),o=n.map(l.$.getNetworkImage).filter(Boolean);return a.qy`<wui-compatible-network
      @click=${this.onReceiveClick.bind(this)}
      text="Only receive assets on these networks"
      .networkImages=${o}
    ></wui-compatible-network>`}onReceiveClick(){w.I.push("WalletCompatibleNetworks")}onCopyClick(){try{this.address&&(h.w.copyToClopboard(this.address),c.P.showSuccess("Address copied"))}catch{c.P.showError("Failed to copy")}}};S.styles=m,x([(0,n.wk)()],S.prototype,"address",void 0),x([(0,n.wk)()],S.prototype,"profileName",void 0),x([(0,n.wk)()],S.prototype,"network",void 0),x([(0,n.wk)()],S.prototype,"preferredAccountType",void 0),S=x([(0,g.EM)("w3m-wallet-receive-view")],S)},79024:(t,e,i)=>{i.d(e,{J:()=>a.J});var a=i(54674)},80164:(t,e,i)=>{i.d(e,{MZ:()=>a.M,wk:()=>n.w});var a=i(21075),n=i(80157)},99437:(t,e,i)=>{i(37568)}}]);
//# sourceMappingURL=2934.6e9009bd.chunk.js.map