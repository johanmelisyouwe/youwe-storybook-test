/*
  Copy for the Tech Partners detail template (ACI Weave), from Figma "Tech Partners detail" (26906:10343,
  Templates page). Product screenshots and the Wickey photo come from the same frame
  (public/media/products). Not used: the hero stock photo (an abstract background instead), the
  "Industries we serve" kicker above the FAQ (a leftover; "FAQ" instead) and the "Default" tags on the
  G-Star case card (placeholders).
*/

export const HERO = {
    title: 'ACI Weave',
    body: 'ACI Weave is Youwe’s own AI platform. It gives access to over 25,000 AI models and chains them into governed workflows that connect to your PIM, ERP, CRM and commerce systems. Guardrails, audit trails and human approval keep people in control.',
    buttons: [
        { label: 'Talk to an ACI Weave expert', href: '#' },
        { label: 'Get in touch', href: '#' },
    ],
}

export const WHAT = {
    heading: 'What ACI Weave is',
    body: 'ACI Weave by Youwe is an AI platform that organizations use to build and run AI agents connected to their ERP, PIM, CRM and commerce platform, with access to more than 25,000 AI models. Youwe connects data, systems, models, prompts, rules and human control into agent workflows. We design those workflows with your teams and link them to the systems where the work already happens, such as Pimcore, your ERP and your commerce platform. Those systems stay your source of truth, and your teams set the rules each workflow follows.',
}

export const CAPABILITIES: {
    Title: string
    Description: string
    tags: string[]
}[] = [
    {
        Title: 'Workflow orchestration',
        Description:
            'ACI Weave chains multiple AI models, business rules and integrations into one controlled process. Each workflow is designed around your own steps, from data input to approved output.',
        tags: ['Multi-step workflows', 'Business rules', 'Integrations'],
    },
    {
        Title: 'Model choice per step',
        Description:
            'The platform gives access to over 25,000 AI models for language, vision and data tasks. We choose the model per step, based on quality, speed, cost and data requirements.',
        tags: ['Language models', 'Computer vision', 'Data analysis'],
    },
    {
        Title: 'Product data enrichment',
        Description:
            'ACI Weave validates, enriches, translates and structures product data. Spider, the content enrichment agent in ACI Weave, gathers and structures product data from online sources before it returns to your PIM.',
        tags: ['Product enrichment', 'Translations', 'Data validation'],
    },
    {
        Title: 'Document and order intake',
        Description:
            'Read emails and documents, extract the data, check it against your own rules and pass approved results to systems such as your ERP. A person approves before anything is posted.',
        tags: ['Document extraction', 'Rules engine', 'Human approval'],
    },
    {
        Title: 'Connected to your systems',
        Description:
            'ACI Weave integrates natively with Pimcore through Pimcore Copilot and connects to ERP, CRM, commerce and marketing automation systems through the Alumio integration platform.',
        tags: ['Pimcore', 'Alumio', 'ERP and CRM'],
    },
    {
        Title: 'Governance and security',
        Description:
            'Prompts are managed and versioned centrally. Role-based access, usage tracking and audit logging keep AI use visible and traceable.',
        tags: ['Prompt management', 'Role-based access', 'Audit logging'],
    },
]

export const FAQ = [
    [
        'What is ACI Weave?',
        'ACI Weave by Youwe is an AI platform that organizations use to build and run AI agents connected to their ERP, PIM, CRM and commerce platform, with access to more than 25,000 AI models. Youwe designs each workflow together with the teams that will use it. Your ERP, PIM and CRM stay the place where your data is managed, and you decide which rules and approval steps apply.',
    ],
    [
        'What does ACI stand for?',
        'ACI stands for Artificial Corporate Intelligence. ACI Weave is the platform that orchestrates agents between your data layer, such as ERP, CRM, PIM, a data lake and file shares, and the places where work happens, such as email, your website and documents. Agents for specific processes run on top of it.',
    ],
    [
        'Which AI models does ACI Weave use?',
        'ACI Weave gives access to more than 25,000 open and closed source models through one standardized API. For every step in a workflow, Youwe selects the model that fits the task, weighing quality, speed and the requirements for your data. When a better model becomes available, the model or prompt for that step can be replaced.',
    ],
    [
        'How does ACI Weave keep AI use secure and controlled?',
        'Access is role based, prompts are managed centrally with version control, and usage and audit logs show who used which workflow and which data. Monitoring follows model usage, latency and response quality. Agents only use data sources that you have approved. Youwe is ISO 27001 certified.',
    ],
    [
        'When does a person approve the work of an agent?',
        'At the steps you choose. For each workflow you decide which steps need approval from an employee. The agent prepares proposals, checks or drafts, and your team reviews them. At Kingspan Insulated Panels, no order reaches SAP until a person has approved it.',
    ],
    [
        'What results has ACI Weave delivered so far?',
        'Since August 2026, Kingspan Insulated Panels has processed incoming order emails and attachments on ACI Weave. The platform extracts the order data, tests it against rules the team owns and passes orders to SAP once a person approves them. At Chadwicks, product data and images are enriched in a workflow from Pimcore to ACI Weave and back. The wider enrichment program at Chadwicks delivered 20,000 enriched products, a 43% larger marketable catalog and 3,360 hours of manual work saved.',
    ],
    [
        'What makes ACI Weave different from a general AI assistant?',
        'A general AI assistant mostly helps one person with one task at a time. ACI Weave is built to run processes: agents connect to your ERP, PIM and CRM, carry out workflows in several steps with your business rules and approval steps, and can choose from more than 25,000 models. The two can be used side by side.',
    ],
    [
        'Can ACI Weave connect to our existing systems?',
        'Yes. For Pimcore there is a native connection through Pimcore Copilot. Other systems, such as your ERP, CRM, marketing automation or commerce platform, are linked through the Alumio integration platform. Data platforms, DAM, service desk tools and custom applications can be connected too. Your systems stay in place, and agents work with the context they already hold.',
    ],
    [
        'Does our data need to be perfect before we start?',
        'No. Start with a process where enough data is available to show value, and improve quality, structure and ownership step by step during the implementation. Workflows in ACI Weave can contain steps that validate and enrich data. In the Kingspan order platform, missing or doubtful fields are flagged for the team before an order moves on.',
    ],
    [
        'How do we get from a first agent to production?',
        'In three stages, with success criteria agreed before the start. First, one process with a clear business case proves its value. Next, integrations, data checks, governance and monitoring are strengthened and the workflow goes into production. After that, it scales to more teams or processes. How long this takes depends on the process and the integrations.',
    ],
].map(([label, content]) => ({ label, content }))

export const GIVES = [
    {
        Title: 'One governed platform',
        Description:
            'Instead of a separate AI tool per team, ACI Weave gives you one place where workflows and agents are built, managed and scaled. Guardrails, audit trails, prompt management and capacity stay under control on one foundation.',
    },
    {
        Title: 'Clear governance over AI use',
        Description:
            'Role-based access, usage tracking and audit logging show who uses which workflow and which data, and your teams set the rules each workflow follows.',
    },
    {
        Title: 'Built for real processes',
        Description:
            'We design workflows around processes in commerce, supply chain, ERP and customer operations. Live examples include product enrichment for Chadwicks and content workflows for Wickey.',
    },
]

export const AGENTS = [
    [
        'Product data enrichment agent',
        'Uses supplier files, the data already in your PIM, market information and brand guidelines to complete product records. The agent flags missing attributes, suggests standardized values and prepares content for each channel, ready for your team to review.',
    ],
    [
        'Pricing and margin agent',
        'Follows demand signals, competitor prices, stock levels, purchasing costs and your commercial guardrails. The agent proposes price changes and shows the expected effect on margin or revenue, so your team can decide before anything is updated.',
    ],
    [
        'Customer service knowledge agent',
        'Gives service teams checked answers drawn from order data, CRM history, manuals, policies and knowledge bases. The agent drafts replies, summarizes cases, suggests a next step and hands sensitive questions to a colleague.',
    ],
    [
        'Contract review and obligations agent',
        'Checks contracts for renewal dates, obligations, missing terms, risky clauses and compliance requirements. Legal, procurement and commercial teams spend less time on each review and keep every decision in their own hands.',
    ],
    [
        'Supply chain risk agent',
        'Watches supplier updates, shipping signals, regulatory changes, quality issues and external risk indicators. The agent points out where disruption is likely and proposes actions before it affects your operations.',
    ],
    [
        'ESG and compliance evidence agent',
        'Gathers, structures and checks certificates, sustainability data, product passport details and audit evidence from your systems and suppliers. That gives your teams a firmer footing for CSRD, ESG and compliance reports.',
    ],
    [
        'Quote and RFP response agent',
        'Helps sales and bid teams answer quote requests and tenders faster and more consistently. The agent combines product data, commercial rules, case references, legal terms and approved brand messaging in one controlled workflow.',
    ],
    [
        'Order exception agent',
        'Spots stuck orders, invoice mismatches, returns, missing details and fulfillment exceptions. The agent prepares a solution, sends the task to the right team and keeps customers or partners up to date.',
    ],
    [
        'Product lifecycle agent',
        'Brings data from PIM, PLM, ERP and commerce together, so teams have a clearer view when they plan product launches, assortment changes, end of life decisions and quality improvements.',
    ],
    [
        'Content localization agent',
        'Turns approved source content into translations, SEO copy, product descriptions and campaign material for each market, while respecting your terminology, tone of voice, review steps and compliance rules.',
    ],
].map(([Title, Description]) => ({ Title, Description }))

export const DEPLOYMENT = [
    {
        Title: 'Set up around your data',
        Description:
            'Youwe sets up each workflow around how sensitive your data is and what your organization needs: which data sources agents may use, who has access and where a person approves.',
    },
    {
        Title: 'Data quality and readiness',
        Description:
            'Agents work with data that has been validated, enriched and structured first, so their output rests on reliable information instead of scattered or incomplete input. In the Kingspan order platform, every extracted value stays linked to the email or document it came from.',
    },
]

export const GET_IN_TOUCH = {
    Kicker: 'Get in touch',
    Title: 'Talk to Youwe about ACI Weave',
    Body: 'Tell us which processes you want to improve. Youwe looks at your processes, your data and your priorities with you, and shows where ACI Weave agents can help and how they connect to your systems.',
}

export const PROOF_QUOTE = {
    Quote: 'Kingspan Insulated Panels uses an AI order intake platform on ACI Weave that reads order emails and documents, checks the data against its own rules and sends approved orders to SAP, live since August 2026.',
    Name: 'Kingspan Insulated Panels',
    button: { label: 'How ACI Weave agents work', href: '#' },
}

export const SUB_FOOTER = {
    title: 'Get in touch with our experts',
    body: 'Ready to take the next step? Feel free to contact us. You can reach our experts personally or call us at our general phone number:',
    phone: '+31 10 466 86 38',
    submit: 'Get in touch',
}
