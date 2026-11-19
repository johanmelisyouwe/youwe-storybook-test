import{j as o}from"./iframe-RIzWv_pe.js";import{M as l}from"./media-CZgE9nDi.js";import{c as e,v as p,a as c}from"./media-CIA0hqPx.js";import"./preload-helper-PPVm8Dsz.js";import"./card-media-CdJfsXN_.js";import"./cx-BDMMs1jM.js";import"./icon-DifRw7KX.js";import"./asset-Uklxo8LF.js";import"./block.module-ifZFSSN6.js";import"./video-player-CuGbrcws.js";import"./index-BtE9JcUf.js";import"./focus-ring.module-B3VHbehf.js";import"./text-media.module-OMNKoLnS.js";const m={Desktop:"100%",Mobile:360},k={title:"Content blocks/Media",parameters:{layout:"fullscreen",docs:{description:{component:'Image or video: Contained, Full bleed, Two-up or Two-up staggered; Gallery (code layout, v2 case gallery) takes `images` (any number, 3 columns). Every image is a URL or a CMS asset `{ src, alt }`. With `video` the frame is a Video Player and the image its poster; Autoplay "In view" (default) plays it muted while on screen, "Off" shows the play button. Motion: media clip reveal on scroll (inset 18%/8% → 0, scale 0.96 → 1).'}}},argTypes:{Layout:{control:"inline-radio",options:["Contained","Full bleed","Two-up staggered","Two-up","Gallery"]},Device:{control:"inline-radio",options:["Desktop","Mobile"]}},args:{Layout:"Contained",Device:"Desktop",image:e("fairphone","wide"),image2:e("g-star","wide"),images:[{src:e("quooker-1","wide"),alt:"Quooker tap in a kitchen"},{src:e("fairphone","wide"),alt:"Fairphone on grass"},{src:e("g-star","wide"),alt:"G-Star model in denim"},{src:e("bunzl","wide"),alt:"BunzlOne app"},{src:e("xxl","wide"),alt:"XXL Nutrition products"},{src:e("unipart","wide"),alt:"Unipart parts"}]},render:a=>o.jsx("div",{style:{maxWidth:m[a.Device??"Desktop"]},children:o.jsx(l,{...a})})},s={},n={args:{Layout:"Two-up staggered"}},r={args:{Layout:"Gallery"}},i={name:"With video",argTypes:{Layout:{control:"inline-radio",options:["Contained","Full bleed","Two-up staggered","Two-up"]},Autoplay:{control:"inline-radio",options:["In view","Off"]}},args:{Layout:"Full bleed",Autoplay:"In view"},render:({Layout:a,Autoplay:d})=>o.jsx(l,{Layout:a,Autoplay:d,image:e("xxl","wide"),video:p("xxl"),alt:"Placeholder: XXL case video",image2:c("016"),video2:p("016"),alt2:"Placeholder: abstract video"},`${a}${d}`)},t={parameters:{controls:{disable:!0}},render:()=>o.jsx("div",{style:{display:"grid",gap:"var(--spacing-lg)"},children:["Contained","Full bleed","Two-up staggered","Two-up"].map(a=>o.jsxs("div",{style:{display:"flex",gap:"var(--spacing-lg)",alignItems:"start"},children:[o.jsx("div",{style:{width:1440},children:o.jsx(l,{image:e("fairphone","wide"),image2:e("g-star","wide"),Layout:a})}),o.jsx("div",{style:{width:360},children:o.jsx(l,{image:e("fairphone","wide"),image2:e("g-star","wide"),Layout:a})})]},a))})},A=["Default","TwoUpStaggered","Gallery","WithVideo","AllVariants"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    Layout: 'Two-up staggered'
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    Layout: 'Gallery'
  }
}`,...r.parameters?.docs?.source},description:{story:"Gallery: any number of images, 3 columns (2 on mobile).",...r.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'With video',
  argTypes: {
    Layout: {
      control: 'inline-radio',
      options: ['Contained', 'Full bleed', 'Two-up staggered', 'Two-up']
    },
    Autoplay: {
      control: 'inline-radio',
      options: ['In view', 'Off']
    }
  },
  args: {
    Layout: 'Full bleed',
    Autoplay: 'In view'
  },
  render: ({
    Layout,
    Autoplay
  }) => <Media key={\`\${Layout}\${Autoplay}\`} Layout={Layout} Autoplay={Autoplay} image={caseImage('xxl', 'wide')} video={video('xxl')} alt="Placeholder: XXL case video" image2={abstract('016')} video2={video('016')} alt2="Placeholder: abstract video" />
}`,...i.parameters?.docs?.source},description:{story:"A video in the image's place (not a Figma property). The clips are placeholders made from the posters.",...i.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'grid',
    gap: 'var(--spacing-lg)'
  }}>
            {(['Contained', 'Full bleed', 'Two-up staggered', 'Two-up'] as const).map(l => <div key={l} style={{
      display: 'flex',
      gap: 'var(--spacing-lg)',
      alignItems: 'start'
    }}>
                    <div style={{
        width: 1440
      }}>
                        <Media image={caseImage('fairphone', 'wide')} image2={caseImage('g-star', 'wide')} Layout={l} />
                    </div>
                    <div style={{
        width: 360
      }}>
                        <Media image={caseImage('fairphone', 'wide')} image2={caseImage('g-star', 'wide')} Layout={l} />
                    </div>
                </div>)}
        </div>
}`,...t.parameters?.docs?.source},description:{story:"Every Figma variant: Device × Layout.",...t.parameters?.docs?.description}}};export{t as AllVariants,s as Default,r as Gallery,n as TwoUpStaggered,i as WithVideo,A as __namedExportsOrder,k as default};
