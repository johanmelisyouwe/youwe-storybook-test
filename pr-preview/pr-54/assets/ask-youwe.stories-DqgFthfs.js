import{j as e,r as E}from"./iframe-CNsxMot_.js";import{A as o,a as x,b as T,c as w,d as i,e as M,f as P,g as F}from"./ask-youwe-5s9T64r5.js";import{M as a}from"./mode-frame-Cw51_w0W.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BtE9JcUf.js";import"./icon-B5n_Fust.js";import"./card-media-A-VNXiA9.js";import"./cx-BDMMs1jM.js";import"./asset-BlY91uqP.js";import"./ask-TSUM1JqL.js";import"./prose-D2DpnkSK.js";import"./focus-ring.module-B3VHbehf.js";const r={Question:"Which service fits my problem?",Answer:"It depends on where it hurts. Disconnected platforms point to Digital Infrastructure, slow manual processes to Operational Optimization, and unreliable product or customer data to Data and Integration.",Source:"Based on Services › Digital Infrastructure",followUp:"Which results did you get for clients?",cta:{label:"Contact an expert",href:"#"}},y='What does "Build it" include?',f={Desktop:716,Mobile:358},X={title:"Components/Ask Youwe",parameters:{layout:"centered",docs:{description:{component:'Ask Youwe: Default (bar with breathing aura, ⌘K focuses it), Contextual (bar widens, page question chip fades in), Active (answer panel opens from the bar with a clip reveal; Esc closes). Snippets are in-page entry points. Answer service: AskDock takes `onAsk(question, locale, { signal })` returning `{ text, sources, followUps, cta }`, with loading, error and fallback states (see "Dock with answer service" and Introduction / CMS integration).'}}},argTypes:{State:{control:"inline-radio",options:["Default","Contextual","Docked","Active"]},Device:{control:"inline-radio",options:["Desktop","Mobile"]},Mode:{control:"inline-radio",options:["Dark","Light"]}},args:{State:"Default",Device:"Desktop",Mode:"Dark"},render:({State:s,Device:n,Mode:t})=>e.jsx(a,{Mode:t,padding:48,children:e.jsx("div",{style:{width:f[n]},children:e.jsx(o,{State:s,Device:n,context:y,...r},s)})})},h={},A={args:{State:"Contextual"}},c={args:{State:"Docked"}},S={args:{State:"Active"}},l={parameters:{controls:{include:["Mode"]}},render:({Mode:s})=>{const[n,t]=E.useState(null);return e.jsx(a,{Mode:s,padding:48,children:e.jsx("div",{style:{width:716,minHeight:480},children:n?e.jsx(o,{State:"Active",...r,Question:n,onClose:()=>t(null),onAsk:t}):e.jsx(o,{State:"Contextual",context:y,onAsk:t})})})}},D=[{title:"Kingspan: AI order intake in SAP",url:"#kingspan"},{title:"ACI Weave",url:"#aci-weave"}],d={name:"Answer states",parameters:{controls:{include:["Mode"]}},render:({Mode:s})=>e.jsx(a,{Mode:s,padding:48,children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 560px)",gap:32},children:[e.jsx(o,{State:"Active",Question:r.Question,status:"loading"}),e.jsx(o,{State:"Active",Question:r.Question,answerText:`Kingspan Insulated Panels turns order emails into SAP orders with ACI Weave.

A person approves each order before it is booked.`,sources:D,followUps:["What does it cost?","How long does it take?"]}),e.jsx(o,{State:"Active",Question:r.Question,status:"error",onRetry:()=>{}}),e.jsx(o,{State:"Active",Question:r.Question,status:"unavailable"})]})})},p={name:"Dock with answer service",parameters:{controls:{include:["Mode"]},layout:"fullscreen"},render:({Mode:s})=>{const n=(t,C,{signal:j})=>new Promise((Q,b)=>{const I=setTimeout(()=>{/unavailable/i.test(t)?b(new F):/fail/i.test(t)?b(new Error("500")):Q({text:`You asked (${C}): “${t}”.

This answer comes from the mock service.`,sources:D,followUps:["Tell me more about ACI Weave"]})},1e3);j.addEventListener("abort",()=>clearTimeout(I))});return e.jsx(a,{Mode:s,padding:48,children:e.jsx("div",{style:{minHeight:"120vh"},children:e.jsx(T,{after:-1,locale:"en",context:y,onAsk:n})})})}},u={name:"Dock without service (fallback)",parameters:{controls:{include:["Mode"]},layout:"fullscreen"},render:({Mode:s})=>e.jsx(a,{Mode:s,padding:48,children:e.jsx("div",{style:{minHeight:"120vh"},children:e.jsx(T,{after:-1,context:y})})})},W={Question:"How did Kingspan connect its systems with AI agents?",Nudge:"Scaling to new countries? See how Quooker expanded to 17.",Case:"Scaling smart: Quooker’s expansion to 17 countries"},m={argTypes:{Type:{control:"inline-radio",options:["Question","Nudge","Case"]}},args:{Type:"Question"},render:({Type:s,Device:n,Mode:t})=>e.jsx(a,{Mode:t,padding:48,children:e.jsx("div",{style:{width:n==="Mobile"?358:600},children:e.jsx(x,{Device:n,Type:s,Title:W[s],Meta:"Case · Quooker"})})})},g={parameters:{controls:{include:["Device","Mode"]}},render:({Device:s,Mode:n})=>e.jsx(a,{Mode:n,padding:48,children:e.jsxs("div",{style:{display:"grid",gap:"var(--spacing-lg)",width:s==="Mobile"?358:600},children:[e.jsx(x,{Device:s,Type:"Question",Title:"How did Kingspan connect its systems with AI agents?"}),e.jsx(x,{Device:s,Type:"Nudge",Title:"Scaling to new countries? See how Quooker expanded to 17."}),e.jsx(x,{Device:s,Type:"Case",Title:"Scaling smart: Quooker’s expansion to 17 countries",Meta:"Case · Quooker"})]})})},v={parameters:{controls:{include:["Mode"]}},render:({Mode:s})=>e.jsx(a,{Mode:s,padding:32,children:e.jsxs("div",{style:{display:"grid",gap:"var(--spacing-md)",justifyItems:"start"},children:[e.jsxs("div",{style:{display:"flex",gap:"var(--spacing-sm)",alignItems:"center"},children:[e.jsx(w,{Size:"S"}),e.jsx(w,{Size:"M"}),e.jsx(w,{Size:"L"})]}),e.jsxs("div",{style:{display:"flex",gap:"var(--spacing-2xs)",alignItems:"center"},children:[e.jsx(i,{Variant:"Primary",label:"Contact us"}),e.jsx(i,{label:"Contact us"}),e.jsx(i,{Type:"Icon",Variant:"Glass",icon:"close",label:"Close"}),e.jsx(i,{Type:"Icon",Variant:"Primary",label:"Ask"}),e.jsx(i,{Type:"Icon",Variant:"Disabled",label:"Send"}),e.jsx(i,{Type:"Icon",Size:"S",icon:"close",label:"Close"})]}),e.jsxs("div",{style:{display:"flex",gap:"var(--spacing-2xs)",alignItems:"center"},children:[e.jsx(M,{label:"Which service fits my problem?"}),e.jsx(M,{Type:"Context",label:"Platforms, processes and data, connected."}),e.jsx(M,{Type:"Key",label:"⌘K"})]}),e.jsx(P,{label:"Ask Youwe · Up next for you"})]})})},k={parameters:{layout:"padded",controls:{disable:!0}},render:()=>e.jsx("div",{style:{display:"grid",gap:"var(--spacing-lg)"},children:["Dark","Light"].map(s=>e.jsx(a,{Mode:s,padding:48,children:e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--spacing-xl)",alignItems:"start"},children:[["Desktop","Mobile"].flatMap(n=>["Default","Contextual","Docked","Active"].map(t=>e.jsx("div",{style:{width:f[n]},children:e.jsx(o,{State:t,Device:n,context:y,...r})},n+t))),["Desktop","Mobile"].flatMap(n=>["Question","Nudge","Case"].map(t=>e.jsx("div",{style:{width:n==="Mobile"?358:600},children:e.jsx(x,{Device:n,Type:t,Title:t==="Question"?"How did Kingspan connect its systems with AI agents?":t==="Nudge"?"Scaling to new countries? See how Quooker expanded to 17.":"Scaling smart: Quooker’s expansion to 17 countries",Meta:"Case · Quooker"})},n+t)))]})},s))})},_=["Default","Contextual","Docked","Active","Interactive","AnswerStates","DockWithService","DockWithoutService","Snippet","Snippets","Parts","AllVariants"];h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:"{}",...h.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    State: 'Contextual'
  }
}`,...A.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    State: 'Docked'
  }
}`,...c.parameters?.docs?.source},description:{story:"The sticky bar's look (AskDock): Contextual on frosted glass.",...c.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    State: 'Active'
  }
}`,...S.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: ['Mode']
    }
  },
  render: ({
    Mode
  }) => {
    const [q, setQ] = useState<string | null>(null);
    return <ModeFrame Mode={Mode} padding={48}>
                <div style={{
        width: 716,
        minHeight: 480
      }}>
                    {q ? <AskYouwe State="Active" {...ACTIVE} Question={q} onClose={() => setQ(null)} onAsk={setQ} /> : <AskYouwe State="Contextual" context={CONTEXT} onAsk={setQ} />}
                </div>
            </ModeFrame>;
  }
}`,...l.parameters?.docs?.source},description:{story:"Click the bar's suggestion, type and press Enter to open the panel; Esc or close goes back to the bar.",...l.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Answer states',
  parameters: {
    controls: {
      include: ['Mode']
    }
  },
  render: ({
    Mode
  }) => <ModeFrame Mode={Mode} padding={48}>
            <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 560px)',
      gap: 32
    }}>
                <AskYouwe State="Active" Question={ACTIVE.Question} status="loading" />
                <AskYouwe State="Active" Question={ACTIVE.Question} answerText={'Kingspan Insulated Panels turns order emails into SAP orders with ACI Weave.\\n\\nA person approves each order before it is booked.'} sources={SOURCES} followUps={['What does it cost?', 'How long does it take?']} />
                <AskYouwe State="Active" Question={ACTIVE.Question} status="error" onRetry={() => {}} />
                <AskYouwe State="Active" Question={ACTIVE.Question} status="unavailable" />
            </div>
        </ModeFrame>
}`,...d.parameters?.docs?.source},description:{story:"The panel's states for the answer service: loading, answer with source links, error, no service yet.",...d.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Dock with answer service',
  parameters: {
    controls: {
      include: ['Mode']
    },
    layout: 'fullscreen'
  },
  render: ({
    Mode
  }) => {
    const onAsk: AskHandler = (question, locale, {
      signal
    }) => new Promise((resolve, reject) => {
      const t = setTimeout(() => {
        if (/unavailable/i.test(question)) reject(new AskUnavailableError());else if (/fail/i.test(question)) reject(new Error('500'));else resolve({
          text: \`You asked (\${locale}): “\${question}”.\\n\\nThis answer comes from the mock service.\`,
          sources: SOURCES,
          followUps: ['Tell me more about ACI Weave']
        });
      }, 1000);
      signal.addEventListener('abort', () => clearTimeout(t));
    });
    return <ModeFrame Mode={Mode} padding={48}>
                <div style={{
        minHeight: '120vh'
      }}>
                    <AskDock after={-1} locale="en" context={CONTEXT} onAsk={onAsk} />
                </div>
            </ModeFrame>;
  }
}`,...p.parameters?.docs?.source},description:{story:'AskDock with an answer service: a mock `onAsk` that answers after a second (ask something with "fail" in\nit to see the error, "unavailable" for the fallback). On the site, onAsk calls its own API route.',...p.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Dock without service (fallback)',
  parameters: {
    controls: {
      include: ['Mode']
    },
    layout: 'fullscreen'
  },
  render: ({
    Mode
  }) => <ModeFrame Mode={Mode} padding={48}>
            <div style={{
      minHeight: '120vh'
    }}>
                <AskDock after={-1} context={CONTEXT} />
            </div>
        </ModeFrame>
}`,...u.parameters?.docs?.source},description:{story:"AskDock without a service yet: every question shows the fallback text (labels.unavailable, or `fallback`).",...u.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  argTypes: {
    Type: {
      control: 'inline-radio',
      options: ['Question', 'Nudge', 'Case']
    }
  },
  args: {
    Type: 'Question'
  },
  render: ({
    Type,
    Device,
    Mode
  }) => <ModeFrame Mode={Mode} padding={48}>
            <div style={{
      width: Device === 'Mobile' ? 358 : 600
    }}>
                <AskSnippet Device={Device} Type={Type} Title={SNIPPET_TITLE[Type]} Meta="Case · Quooker" />
            </div>
        </ModeFrame>
}`,...m.parameters?.docs?.source},description:{story:"Ask Youwe/Snippet with its Figma Type axis as a control.",...m.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: ['Device', 'Mode']
    }
  },
  render: ({
    Device,
    Mode
  }) => <ModeFrame Mode={Mode} padding={48}>
            <div style={{
      display: 'grid',
      gap: 'var(--spacing-lg)',
      width: Device === 'Mobile' ? 358 : 600
    }}>
                <AskSnippet Device={Device} Type="Question" Title="How did Kingspan connect its systems with AI agents?" />
                <AskSnippet Device={Device} Type="Nudge" Title="Scaling to new countries? See how Quooker expanded to 17." />
                <AskSnippet Device={Device} Type="Case" Title="Scaling smart: Quooker’s expansion to 17 countries" Meta="Case · Quooker" />
            </div>
        </ModeFrame>
}`,...g.parameters?.docs?.source},description:{story:"Ask Youwe/Snippet: Question, Nudge and Case (Figma copy).",...g.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: ['Mode']
    }
  },
  render: ({
    Mode
  }) => <ModeFrame Mode={Mode} padding={32}>
            <div style={{
      display: 'grid',
      gap: 'var(--spacing-md)',
      justifyItems: 'start'
    }}>
                <div style={{
        display: 'flex',
        gap: 'var(--spacing-sm)',
        alignItems: 'center'
      }}>
                    <AskOrb Size="S" />
                    <AskOrb Size="M" />
                    <AskOrb Size="L" />
                </div>
                <div style={{
        display: 'flex',
        gap: 'var(--spacing-2xs)',
        alignItems: 'center'
      }}>
                    <AskButton Variant="Primary" label="Contact us" />
                    <AskButton label="Contact us" />
                    <AskButton Type="Icon" Variant="Glass" icon="close" label="Close" />
                    <AskButton Type="Icon" Variant="Primary" label="Ask" />
                    <AskButton Type="Icon" Variant="Disabled" label="Send" />
                    <AskButton Type="Icon" Size="S" icon="close" label="Close" />
                </div>
                <div style={{
        display: 'flex',
        gap: 'var(--spacing-2xs)',
        alignItems: 'center'
      }}>
                    <AskChip label="Which service fits my problem?" />
                    <AskChip Type="Context" label="Platforms, processes and data, connected." />
                    <AskChip Type="Key" label="⌘K" />
                </div>
                <AskLabel label="Ask Youwe · Up next for you" />
            </div>
        </ModeFrame>
}`,...v.parameters?.docs?.source},description:{story:"The internal parts: Orb (S/M/L), Button (Label/Icon × Primary/Glass/Disabled), Chip (Suggestion/Context/Key), Label.",...v.parameters?.docs?.description}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded',
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'grid',
    gap: 'var(--spacing-lg)'
  }}>
            {(['Dark', 'Light'] as Mode[]).map(m => <ModeFrame key={m} Mode={m} padding={48}>
                    <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 'var(--spacing-xl)',
        alignItems: 'start'
      }}>
                        {(['Desktop', 'Mobile'] as const).flatMap(d => (['Default', 'Contextual', 'Docked', 'Active'] as State[]).map(s => <div key={d + s} style={{
          width: W[d]
        }}>
                                    <AskYouwe State={s} Device={d} context={CONTEXT} {...ACTIVE} />
                                </div>))}
                        {(['Desktop', 'Mobile'] as const).flatMap(d => (['Question', 'Nudge', 'Case'] as const).map(t => <div key={d + t} style={{
          width: d === 'Mobile' ? 358 : 600
        }}>
                                        <AskSnippet Device={d} Type={t} Title={t === 'Question' ? 'How did Kingspan connect its systems with AI agents?' : t === 'Nudge' ? 'Scaling to new countries? See how Quooker expanded to 17.' : 'Scaling smart: Quooker’s expansion to 17 countries'} Meta="Case · Quooker" />
                                    </div>))}
                    </div>
                </ModeFrame>)}
        </div>
}`,...k.parameters?.docs?.source},description:{story:"Every Figma variant: Ask Youwe State × Device × Mode, and Snippet Type × Device × Mode.",...k.parameters?.docs?.description}}};export{S as Active,k as AllVariants,d as AnswerStates,A as Contextual,h as Default,p as DockWithService,u as DockWithoutService,c as Docked,l as Interactive,v as Parts,m as Snippet,g as Snippets,_ as __namedExportsOrder,X as default};
