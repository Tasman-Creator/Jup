"use strict";(self.webpackChunkuntitled=self.webpackChunkuntitled||[]).push([[6237],{30408:(t,e,i)=>{var n=i(34872),a=i(80164),o=(i(66864),i(44460)),r=i(45907);const s=n.AH`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: var(--wui-color-gray-glass-020);
    border-radius: var(--local-border-radius);
    border: var(--local-border);
    box-sizing: content-box;
    width: var(--local-size);
    height: var(--local-size);
    min-height: var(--local-size);
    min-width: var(--local-size);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host {
      background-color: color-mix(in srgb, var(--local-bg-value) var(--local-bg-mix), transparent);
    }
  }
`;var l=function(t,e,i,n){var a,o=arguments.length,r=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(r=(o<3?a(r):o>3?a(e,i,r):a(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r};let c=class extends n.WF{constructor(){super(...arguments),this.size="md",this.backgroundColor="accent-100",this.iconColor="accent-100",this.background="transparent",this.border=!1,this.borderColor="wui-color-bg-125",this.icon="copy"}render(){const t=this.iconSize||this.size,e="lg"===this.size,i="xl"===this.size,a=e?"12%":"16%",o=e?"xxs":i?"s":"3xl",r="gray"===this.background,s="opaque"===this.background,l="accent-100"===this.backgroundColor&&s||"success-100"===this.backgroundColor&&s||"error-100"===this.backgroundColor&&s||"inverse-100"===this.backgroundColor&&s;let c=`var(--wui-color-${this.backgroundColor})`;return l?c=`var(--wui-icon-box-bg-${this.backgroundColor})`:r&&(c=`var(--wui-color-gray-${this.backgroundColor})`),this.style.cssText=`\n       --local-bg-value: ${c};\n       --local-bg-mix: ${l||r?"100%":a};\n       --local-border-radius: var(--wui-border-radius-${o});\n       --local-size: var(--wui-icon-box-size-${this.size});\n       --local-border: ${"wui-color-bg-125"===this.borderColor?"2px":"1px"} solid ${this.border?`var(--${this.borderColor})`:"transparent"}\n   `,n.qy` <wui-icon color=${this.iconColor} size=${t} name=${this.icon}></wui-icon> `}};c.styles=[o.W5,o.fD,s],l([(0,a.MZ)()],c.prototype,"size",void 0),l([(0,a.MZ)()],c.prototype,"backgroundColor",void 0),l([(0,a.MZ)()],c.prototype,"iconColor",void 0),l([(0,a.MZ)()],c.prototype,"iconSize",void 0),l([(0,a.MZ)()],c.prototype,"background",void 0),l([(0,a.MZ)({type:Boolean})],c.prototype,"border",void 0),l([(0,a.MZ)()],c.prototype,"borderColor",void 0),l([(0,a.MZ)()],c.prototype,"icon",void 0),c=l([(0,r.E)("wui-icon-box")],c)},37568:(t,e,i)=>{var n=i(34872),a=i(80164),o=i(44460),r=i(2511),s=i(45907);const l=n.AH`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`;var c=function(t,e,i,n){var a,o=arguments.length,r=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(r=(o<3?a(r):o>3?a(e,i,r):a(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r};let h=class extends n.WF{render(){return this.style.cssText=`\n      flex-direction: ${this.flexDirection};\n      flex-wrap: ${this.flexWrap};\n      flex-basis: ${this.flexBasis};\n      flex-grow: ${this.flexGrow};\n      flex-shrink: ${this.flexShrink};\n      align-items: ${this.alignItems};\n      justify-content: ${this.justifyContent};\n      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};\n      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};\n      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};\n      padding-top: ${this.padding&&r.Z.getSpacingStyles(this.padding,0)};\n      padding-right: ${this.padding&&r.Z.getSpacingStyles(this.padding,1)};\n      padding-bottom: ${this.padding&&r.Z.getSpacingStyles(this.padding,2)};\n      padding-left: ${this.padding&&r.Z.getSpacingStyles(this.padding,3)};\n      margin-top: ${this.margin&&r.Z.getSpacingStyles(this.margin,0)};\n      margin-right: ${this.margin&&r.Z.getSpacingStyles(this.margin,1)};\n      margin-bottom: ${this.margin&&r.Z.getSpacingStyles(this.margin,2)};\n      margin-left: ${this.margin&&r.Z.getSpacingStyles(this.margin,3)};\n    `,n.qy`<slot></slot>`}};h.styles=[o.W5,l],c([(0,a.MZ)()],h.prototype,"flexDirection",void 0),c([(0,a.MZ)()],h.prototype,"flexWrap",void 0),c([(0,a.MZ)()],h.prototype,"flexBasis",void 0),c([(0,a.MZ)()],h.prototype,"flexGrow",void 0),c([(0,a.MZ)()],h.prototype,"flexShrink",void 0),c([(0,a.MZ)()],h.prototype,"alignItems",void 0),c([(0,a.MZ)()],h.prototype,"justifyContent",void 0),c([(0,a.MZ)()],h.prototype,"columnGap",void 0),c([(0,a.MZ)()],h.prototype,"rowGap",void 0),c([(0,a.MZ)()],h.prototype,"gap",void 0),c([(0,a.MZ)()],h.prototype,"padding",void 0),c([(0,a.MZ)()],h.prototype,"margin",void 0),h=c([(0,s.E)("wui-flex")],h)},47410:(t,e,i)=>{var n=i(34872),a=i(80164),o=i(55712),r=i(44460),s=i(45907);const l=n.AH`
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
`;var c=function(t,e,i,n){var a,o=arguments.length,r=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(r=(o<3?a(r):o>3?a(e,i,r):a(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r};let h=class extends n.WF{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left",this.lineClamp=void 0}render(){const t={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0,[`wui-line-clamp-${this.lineClamp}`]:!!this.lineClamp};return this.style.cssText=`\n      --local-align: ${this.align};\n      --local-color: var(--wui-color-${this.color});\n    `,n.qy`<slot class=${(0,o.H)(t)}></slot>`}};h.styles=[r.W5,l],c([(0,a.MZ)()],h.prototype,"variant",void 0),c([(0,a.MZ)()],h.prototype,"color",void 0),c([(0,a.MZ)()],h.prototype,"align",void 0),c([(0,a.MZ)()],h.prototype,"lineClamp",void 0),h=c([(0,s.E)("wui-text")],h)},55712:(t,e,i)=>{i.d(e,{H:()=>n.H});var n=i(16254)},66864:(t,e,i)=>{var n=i(34872),a=i(80164),o=i(68455);const r=new class{constructor(){this.cache=new Map}set(t,e){this.cache.set(t,e)}get(t){return this.cache.get(t)}has(t){return this.cache.has(t)}delete(t){this.cache.delete(t)}clear(){this.cache.clear()}};var s=i(44460),l=i(45907);const c=n.AH`
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
`;var h=function(t,e,i,n){var a,o=arguments.length,r=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(r=(o<3?a(r):o>3?a(e,i,r):a(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r};const d={add:async()=>(await i.e(8855).then(i.bind(i,48855))).addSvg,allWallets:async()=>(await i.e(8720).then(i.bind(i,8720))).allWalletsSvg,arrowBottomCircle:async()=>(await i.e(2378).then(i.bind(i,22378))).arrowBottomCircleSvg,appStore:async()=>(await i.e(6415).then(i.bind(i,66415))).appStoreSvg,apple:async()=>(await i.e(7176).then(i.bind(i,17176))).appleSvg,arrowBottom:async()=>(await i.e(3093).then(i.bind(i,93093))).arrowBottomSvg,arrowLeft:async()=>(await i.e(4655).then(i.bind(i,14655))).arrowLeftSvg,arrowRight:async()=>(await i.e(3262).then(i.bind(i,3262))).arrowRightSvg,arrowTop:async()=>(await i.e(8139).then(i.bind(i,8139))).arrowTopSvg,bank:async()=>(await i.e(8928).then(i.bind(i,58928))).bankSvg,browser:async()=>(await i.e(4632).then(i.bind(i,94632))).browserSvg,card:async()=>(await i.e(7816).then(i.bind(i,17816))).cardSvg,checkmark:async()=>(await i.e(4881).then(i.bind(i,84881))).checkmarkSvg,checkmarkBold:async()=>(await i.e(8997).then(i.bind(i,48997))).checkmarkBoldSvg,chevronBottom:async()=>(await i.e(131).then(i.bind(i,10131))).chevronBottomSvg,chevronLeft:async()=>(await i.e(6757).then(i.bind(i,86757))).chevronLeftSvg,chevronRight:async()=>(await i.e(6020).then(i.bind(i,26020))).chevronRightSvg,chevronTop:async()=>(await i.e(5213).then(i.bind(i,85213))).chevronTopSvg,chromeStore:async()=>(await i.e(2236).then(i.bind(i,72236))).chromeStoreSvg,clock:async()=>(await i.e(5242).then(i.bind(i,5242))).clockSvg,close:async()=>(await i.e(3076).then(i.bind(i,93076))).closeSvg,compass:async()=>(await i.e(7720).then(i.bind(i,7720))).compassSvg,coinPlaceholder:async()=>(await i.e(8734).then(i.bind(i,88734))).coinPlaceholderSvg,copy:async()=>(await i.e(3943).then(i.bind(i,63943))).copySvg,cursor:async()=>(await i.e(9144).then(i.bind(i,99144))).cursorSvg,cursorTransparent:async()=>(await i.e(6195).then(i.bind(i,86195))).cursorTransparentSvg,desktop:async()=>(await i.e(6964).then(i.bind(i,76964))).desktopSvg,disconnect:async()=>(await i.e(9004).then(i.bind(i,79004))).disconnectSvg,discord:async()=>(await i.e(504).then(i.bind(i,90504))).discordSvg,etherscan:async()=>(await i.e(7577).then(i.bind(i,87577))).etherscanSvg,extension:async()=>(await i.e(889).then(i.bind(i,889))).extensionSvg,externalLink:async()=>(await i.e(6638).then(i.bind(i,76638))).externalLinkSvg,facebook:async()=>(await i.e(7350).then(i.bind(i,37350))).facebookSvg,farcaster:async()=>(await i.e(3677).then(i.bind(i,93677))).farcasterSvg,filters:async()=>(await i.e(7487).then(i.bind(i,57487))).filtersSvg,github:async()=>(await i.e(3265).then(i.bind(i,33265))).githubSvg,google:async()=>(await i.e(7197).then(i.bind(i,77197))).googleSvg,helpCircle:async()=>(await i.e(3806).then(i.bind(i,53806))).helpCircleSvg,image:async()=>(await i.e(2169).then(i.bind(i,2169))).imageSvg,id:async()=>(await i.e(5931).then(i.bind(i,45931))).idSvg,infoCircle:async()=>(await i.e(4079).then(i.bind(i,74079))).infoCircleSvg,lightbulb:async()=>(await i.e(9015).then(i.bind(i,49015))).lightbulbSvg,mail:async()=>(await i.e(7301).then(i.bind(i,37301))).mailSvg,mobile:async()=>(await i.e(1456).then(i.bind(i,61456))).mobileSvg,more:async()=>(await i.e(9915).then(i.bind(i,19915))).moreSvg,networkPlaceholder:async()=>(await i.e(1626).then(i.bind(i,1626))).networkPlaceholderSvg,nftPlaceholder:async()=>(await i.e(1883).then(i.bind(i,21883))).nftPlaceholderSvg,off:async()=>(await i.e(8089).then(i.bind(i,18089))).offSvg,playStore:async()=>(await i.e(8732).then(i.bind(i,48732))).playStoreSvg,plus:async()=>(await i.e(5330).then(i.bind(i,65330))).plusSvg,qrCode:async()=>(await i.e(8935).then(i.bind(i,98935))).qrCodeIcon,recycleHorizontal:async()=>(await i.e(1138).then(i.bind(i,81138))).recycleHorizontalSvg,refresh:async()=>(await i.e(4167).then(i.bind(i,96548))).refreshSvg,search:async()=>(await i.e(9870).then(i.bind(i,19870))).searchSvg,send:async()=>(await i.e(5352).then(i.bind(i,25352))).sendSvg,swapHorizontal:async()=>(await i.e(5601).then(i.bind(i,15601))).swapHorizontalSvg,swapHorizontalMedium:async()=>(await i.e(8230).then(i.bind(i,18230))).swapHorizontalMediumSvg,swapHorizontalBold:async()=>(await i.e(2946).then(i.bind(i,12946))).swapHorizontalBoldSvg,swapHorizontalRoundedBold:async()=>(await i.e(2471).then(i.bind(i,2471))).swapHorizontalRoundedBoldSvg,swapVertical:async()=>(await i.e(2871).then(i.bind(i,22871))).swapVerticalSvg,telegram:async()=>(await i.e(9885).then(i.bind(i,69885))).telegramSvg,threeDots:async()=>(await i.e(6109).then(i.bind(i,56109))).threeDotsSvg,twitch:async()=>(await i.e(7145).then(i.bind(i,47145))).twitchSvg,twitter:async()=>(await i.e(9792).then(i.bind(i,29792))).xSvg,twitterIcon:async()=>(await i.e(5602).then(i.bind(i,85602))).twitterIconSvg,verify:async()=>(await i.e(8743).then(i.bind(i,48743))).verifySvg,verifyFilled:async()=>(await i.e(2460).then(i.bind(i,32460))).verifyFilledSvg,wallet:async()=>(await i.e(4303).then(i.bind(i,84303))).walletSvg,walletConnect:async()=>(await i.e(8689).then(i.bind(i,18689))).walletConnectSvg,walletConnectLightBrown:async()=>(await i.e(8689).then(i.bind(i,18689))).walletConnectLightBrownSvg,walletConnectBrown:async()=>(await i.e(8689).then(i.bind(i,18689))).walletConnectBrownSvg,walletPlaceholder:async()=>(await i.e(3467).then(i.bind(i,53467))).walletPlaceholderSvg,warningCircle:async()=>(await i.e(9445).then(i.bind(i,59445))).warningCircleSvg,x:async()=>(await i.e(9792).then(i.bind(i,29792))).xSvg,info:async()=>(await i.e(7570).then(i.bind(i,97570))).infoSvg,exclamationTriangle:async()=>(await i.e(8062).then(i.bind(i,48062))).exclamationTriangleSvg,reown:async()=>(await i.e(6563).then(i.bind(i,96563))).reownSvg};let g=class extends n.WF{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300",this.aspectRatio="1 / 1"}render(){return this.style.cssText=`\n      --local-color: var(--wui-color-${this.color});\n      --local-width: var(--wui-icon-size-${this.size});\n      --local-aspect-ratio: ${this.aspectRatio}\n    `,n.qy`${(0,o.T)(async function(t){if(r.has(t))return r.get(t);const e=(d[t]??d.copy)();return r.set(t,e),e}(this.name),n.qy`<div class="fallback"></div>`)}`}};g.styles=[s.W5,s.ck,c],h([(0,a.MZ)()],g.prototype,"size",void 0),h([(0,a.MZ)()],g.prototype,"name",void 0),h([(0,a.MZ)()],g.prototype,"color",void 0),h([(0,a.MZ)()],g.prototype,"aspectRatio",void 0),g=h([(0,l.E)("wui-icon")],g)},68161:(t,e,i)=>{i(47410)},79024:(t,e,i)=>{i.d(e,{J:()=>n.J});var n=i(54674)},80164:(t,e,i)=>{i.d(e,{MZ:()=>n.M,wk:()=>a.w});var n=i(21075),a=i(80157)},99437:(t,e,i)=>{i(37568)}}]);
//# sourceMappingURL=6237.f02aa4db.chunk.js.map