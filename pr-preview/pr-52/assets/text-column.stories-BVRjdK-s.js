import{j as e}from"./iframe-FrZ6yjpt.js";import{T as o,a}from"./longform.copy-DcCsOMtY.js";import"./preload-helper-PPVm8Dsz.js";import"./cx-BDMMs1jM.js";import"./prose-NzbFOMRN.js";import"./block.module-ifZFSSN6.js";const l={Desktop:"100%",Mobile:360},h={title:"Content blocks/Text column",parameters:{layout:"fullscreen",docs:{description:{component:"Single reading column (632 wide): lead and body. Use for long-form case and article copy. Motion: block reveal."}}},argTypes:{Alignment:{control:"inline-radio",options:["Centered","Left"]},Device:{control:"inline-radio",options:["Desktop","Mobile"]}},args:{Alignment:"Centered",Device:"Desktop"},render:n=>e.jsx("div",{style:{maxWidth:l[n.Device??"Desktop"]},children:e.jsx(o,{...a,...n})})},s={},i={name:"Left",args:{Alignment:"Left"}},t={name:"Rich text body",render:n=>e.jsx("div",{style:{maxWidth:l[n.Device??"Desktop"]},children:e.jsx(o,{...n,lead:a.lead,body:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:["Quooker’s original Magento platform could not keep up with ",e.jsx("strong",{children:"17 markets"}),". Youwe moved it to a headless set-up, described in"," ",e.jsx("a",{href:"#case",children:"the full case"}),"."]}),e.jsx("h3",{children:"What changed"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Content managed in Contentful"}),e.jsx("li",{children:"Product data from Pimcore"}),e.jsx("li",{children:"Checkout on Magento Open Source"})]}),e.jsxs("ol",{children:[e.jsx("li",{children:"Measure"}),e.jsx("li",{children:"Experiment"}),e.jsx("li",{children:"Roll out per market"})]})]})})})},r={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"grid",gap:"var(--spacing-lg)"},children:[["Centered","Left"].map(n=>e.jsx("div",{style:{maxWidth:1440},children:e.jsx(o,{...a,Alignment:n})},n)),e.jsx("div",{style:{display:"flex",gap:"var(--spacing-lg)",alignItems:"start"},children:["Centered","Left"].map(n=>e.jsx("div",{style:{width:360},children:e.jsx(o,{...a,Alignment:n})},n))})]})},x=["Default","Second","RichTextBody","AllVariants"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Left',
  args: {
    Alignment: 'Left'
  }
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'Rich text body',
  render: args => <div style={{
    maxWidth: W[args.Device ?? 'Desktop']
  }}>
            <TextColumn {...args} lead={TEXT_COLUMN.lead} body={<>
                        <p>
                            Quooker’s original Magento platform could not keep
                            up with <strong>17 markets</strong>. Youwe moved it
                            to a headless set-up, described in{' '}
                            <a href="#case">the full case</a>.
                        </p>
                        <h3>What changed</h3>
                        <ul>
                            <li>Content managed in Contentful</li>
                            <li>Product data from Pimcore</li>
                            <li>Checkout on Magento Open Source</li>
                        </ul>
                        <ol>
                            <li>Measure</li>
                            <li>Experiment</li>
                            <li>Roll out per market</li>
                        </ol>
                    </>} />
        </div>
}`,...t.parameters?.docs?.source},description:{story:"CMS rich text as the body (e.g. Contentful rich text rendered to elements): links, bold, lists, H3.",...t.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'grid',
    gap: 'var(--spacing-lg)'
  }}>
            {(['Centered', 'Left'] as const).map(v => <div key={v} style={{
      maxWidth: 1440
    }}>
                    <TextColumn {...TEXT_COLUMN} {...{
        Alignment: v
      }} />
                </div>)}
            <div style={{
      display: 'flex',
      gap: 'var(--spacing-lg)',
      alignItems: 'start'
    }}>
                {(['Centered', 'Left'] as const).map(v => <div key={v} style={{
        width: 360
      }}>
                        <TextColumn {...TEXT_COLUMN} {...{
          Alignment: v
        }} />
                    </div>)}
            </div>
        </div>
}`,...r.parameters?.docs?.source},description:{story:"Every Figma variant: Device × Alignment.",...r.parameters?.docs?.description}}};export{r as AllVariants,s as Default,t as RichTextBody,i as Second,x as __namedExportsOrder,h as default};
