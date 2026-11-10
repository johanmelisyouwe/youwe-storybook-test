import type { AciWeaveProps } from './AciWeave';
import { abstract } from '../../../media/media';

/** Figma desktop copy (Home, Frame 6), shared by the story and the Home template. */
export const ACI_WEAVE: Omit<AciWeaveProps, 'Device'> = {
  kicker: 'ACI Weave',
  title: 'AI agents that work inside your systems',
  body: 'ACI Weave by Youwe is an AI platform that organizations use to build and run AI agents connected to their ERP, PIM, CRM and commerce platform, with access to more than 25,000 AI models.\nYour rules decide what an agent may do. A person approves where it counts, and every change and approval is logged.',
  snippet: { Title: 'How at Kingspan Insulated Panels, order emails become SAP orders once a person approves them by using ACI Weave.', href: '#' },
  button: { label: 'Explore ACI Weave', href: '#' },
  videos: [
    { caption: 'Demo: ACI Weave in action', poster: abstract('011') },
    { caption: 'Workflows, approvals and audit log', poster: abstract('015') },
    { caption: 'Agents connected to ERP, PIM, CRM and commerce', poster: abstract('016') },
  ],
};
