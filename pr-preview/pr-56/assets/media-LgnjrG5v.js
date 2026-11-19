import{j as a}from"./iframe-CpGyGIXI.js";import{C as g}from"./card-media-Cf5QqkmU.js";import{c as p}from"./cx-BDMMs1jM.js";import{b as c}from"./block.module-ifZFSSN6.js";import{V as b}from"./video-player--6PbCmNg.js";import{s as r}from"./text-media.module-OMNKoLnS.js";function q({Layout:e="Contained",image:s,image2:y,alt:l,alt2:f,video:m,video2:v,Autoplay:w="In view",images:h}){const o=e==="Two-up"||e==="Two-up staggered",n=(i,t,d,u)=>t?a.jsx(b,{src:t,poster:i,title:d||"Video",Autoplay:w,ratio:u,className:r["clip-reveal"]}):a.jsx(g,{src:i,alt:d,ratio:u,className:r["clip-reveal"]});return a.jsx("section",{"data-full":e==="Full bleed"||void 0,"data-staggered":e==="Two-up staggered"||void 0,className:p(c.root,r.media),children:a.jsx("div",{className:p(c.inner,r.inner),style:e==="Contained"||e==="Gallery"||o?{paddingBlock:"var(--spacing-4xl)"}:void 0,children:e==="Gallery"?a.jsx("ul",{className:r["media-gallery"],children:(h??[]).map((i,t)=>a.jsx("li",{children:a.jsx(g,{src:i,ratio:"4 / 3",className:r["clip-reveal"]})},t))}):o?a.jsxs("div",{className:r["media-two"],children:[n(s,m,l,"632 / 736"),n(y,v,f,"632 / 736")]}):n(s,m,l,e==="Full bleed"?"16 / 9":"1280 / 666")})})}q.__docgenInfo={description:"",methods:[],displayName:"Media",props:{Layout:{required:!1,tsType:{name:"union",raw:`| 'Contained'
| 'Full bleed'
| 'Two-up staggered'
| 'Two-up'
| 'Gallery'`,elements:[{name:"literal",value:"'Contained'"},{name:"literal",value:"'Full bleed'"},{name:"literal",value:"'Two-up staggered'"},{name:"literal",value:"'Two-up'"},{name:"literal",value:"'Gallery'"}]},description:"Figma: Layout. Gallery (code layout, v2 case gallery): any number of images in a 3-column grid (2 on mobile)",defaultValue:{value:"'Contained'",computed:!1}},Device:{required:!1,tsType:{name:"union",raw:"'Desktop' | 'Mobile'",elements:[{name:"literal",value:"'Desktop'"},{name:"literal",value:"'Mobile'"}]},description:"Figma: Device (layout follows the block width)"},image:{required:!1,tsType:{name:"union",raw:"string | ImageAsset",elements:[{name:"string"},{name:"signature",type:"object",raw:`{
    src: string
    /** Alt text; empty string for decorative images */
    alt?: string
    width?: number
    height?: number
}`,signature:{properties:[{key:"src",value:{name:"string",required:!0}},{key:"alt",value:{name:"string",required:!1},description:"Alt text; empty string for decorative images"},{key:"width",value:{name:"number",required:!1}},{key:"height",value:{name:"number",required:!1}}]}}]},description:"Figma: Image / Image 2"},image2:{required:!1,tsType:{name:"union",raw:"string | ImageAsset",elements:[{name:"string"},{name:"signature",type:"object",raw:`{
    src: string
    /** Alt text; empty string for decorative images */
    alt?: string
    width?: number
    height?: number
}`,signature:{properties:[{key:"src",value:{name:"string",required:!0}},{key:"alt",value:{name:"string",required:!1},description:"Alt text; empty string for decorative images"},{key:"width",value:{name:"number",required:!1}},{key:"height",value:{name:"number",required:!1}}]}}]},description:""},images:{required:!1,tsType:{name:"Array",elements:[{name:"union",raw:"string | ImageAsset",elements:[{name:"string"},{name:"signature",type:"object",raw:`{
    src: string
    /** Alt text; empty string for decorative images */
    alt?: string
    width?: number
    height?: number
}`,signature:{properties:[{key:"src",value:{name:"string",required:!0}},{key:"alt",value:{name:"string",required:!1},description:"Alt text; empty string for decorative images"},{key:"width",value:{name:"number",required:!1}},{key:"height",value:{name:"number",required:!1}}]}}]}],raw:"ImageInput[]"},description:"Gallery: the images (URL or { src, alt })"},alt:{required:!1,tsType:{name:"string"},description:""},alt2:{required:!1,tsType:{name:"string"},description:""},video:{required:!1,tsType:{name:"string"},description:"Video in place of Image (Image becomes the poster); not a Figma property"},video2:{required:!1,tsType:{name:"string"},description:""},Autoplay:{required:!1,tsType:{name:"union",raw:"VideoPlayerProps['Autoplay']"},description:"Video Player autoplay for video / video2",defaultValue:{value:"'In view'",computed:!1}}}};export{q as M};
