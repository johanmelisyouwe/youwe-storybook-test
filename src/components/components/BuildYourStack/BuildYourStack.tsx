import { useState } from 'react';
import { TabGroup } from '../Tabs/Tabs';
import { TechnologyCard, type TechnologyCardProps } from '../TechnologyCard/TechnologyCard';
import { CaseCard, type CaseCardProps } from '../CaseCard/CaseCard';
import '../../shared/block.css';
import '../AccordionList/AccordionList.css';

/* Content blocks/Build your stack — Figma 26851:1491. Styles in AccordionList.css (batch 9 blocks). */

export type StackGoal = {
  /** Tab label, e.g. "Sell B2B online" */
  label: string;
  /** e.g. "05  Drive revenue" */
  system?: string;
  intro?: string;
  partners?: TechnologyCardProps[];
  case?: CaseCardProps;
};

export type BuildYourStackProps = {
  /** Figma: Device (layout follows the block width) */
  Device?: 'Desktop' | 'Mobile';
  kicker: string;
  title: string;
  body: string;
  goals: StackGoal[];
  /** Initially selected goal */
  selected?: number;
};

export function BuildYourStack({ kicker, title, body, goals, selected = 0 }: BuildYourStackProps) {
  const [tab, setTab] = useState(selected);
  return (
    <section className="yw-block yw-stack" aria-label={title}>
      <div className="yw-block__inner">
        <div className="yw-stack__header">
          <h2 className="yw-stack__title"><span className="yw-kicker yw-body-sm-bold">{kicker}</span><span className="yw-heading-xl">{title}</span></h2>
          <p className="yw-body-md-reg">{body}</p>
        </div>
        <TabGroup
          label="Goals"
          tabs={goals.map((g) => g.label)}
          {...{ 'Trailing action': false }}
          selected={tab}
          onChange={setTab}
          panels={goals.map((g) => (
            <div key={g.label} className="yw-stack__goal">
              <div className="yw-stack__goal-intro">
                {g.system && <span className="yw-stack__system yw-body-xs-bold">{g.system}</span>}
                {g.intro && <p className="yw-body-lg-reg">{g.intro}</p>}
              </div>
              {g.partners && <ul className="yw-stack__partners">{g.partners.map((p) => <li key={p.Name}><TechnologyCard {...p} Layout="Vertical" /></li>)}</ul>}
              {g.case && <CaseCard {...g.case} Size="Full" />}
            </div>
          ))}
        />
      </div>
    </section>
  );
}
