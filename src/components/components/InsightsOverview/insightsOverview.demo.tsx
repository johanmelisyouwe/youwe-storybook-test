import { useState } from 'react';
import { InsightsOverview, type InsightItem, type InsightType } from './InsightsOverview';
import { abstract } from '../../../media/media';

/*
  Figma copy for the Insights overview (desktop "All insights" grid, Page / Insights) and a small demo
  wrapper for the story and the template: type filters filter the 12 sample cards, Show more repeats the
  samples of that type up to the type's total (a CMS would page real insights here).
*/

export const INSIGHT_TYPES: InsightType[] = [
  { label: 'All', count: 174 }, { label: 'Blog', count: 64 }, { label: 'Whitepaper', count: 67 },
  { label: 'Event', count: 32 }, { label: 'Video', count: 4 }, { label: 'News', count: 7 },
];

const IMAGES = ['001', '003', '004', '006', '007', '008', '009', '011', '015', '016', '005', '001'];
const hover = { 'Hover CTA': 'Read the whitepaper', 'Hover context': '6 min read' };
const card = (Type: string, Title: string, Meta?: string): Omit<InsightItem, 'image' | 'href'> => ({ Type, Title, Meta, ...hover });

export const INSIGHTS: InsightItem[] = [
  card('Event', 'Higher Ground online: what’s next for product data', 'January 21, 2027 · Online'),
  card('Event', 'Higher Ground: what’s next for product data', 'December 3, 2026 · SnowWorld Zoetermeer'),
  card('Event', 'aiGrunn & Youwe Business Track', 'November 13, 2026 · Forum Groningen'),
  card('Event', 'PIM Clinic Sessions: 28 October 2026', 'October 28, 2026 · Online session'),
  card('News', 'Stay Ahead and Go Beyond Newsletter'),
  card('News', 'Newsletter Stay Ahead and Go Beyond Edition 3'),
  card('News', 'Newsletter Stay Ahead and Go Beyond Edition 2'),
  card('Whitepaper', 'Guide: where margin leaks, and how pricing intelligence finds it'),
  card('Whitepaper', 'What has to be in place before a PIM pays off'),
  card('Blog', 'The Wennink report: what it means for your AI and digital plans'),
  card('Blog', 'Pimcore named a Visionary in the 2026 Gartner® Magic Quadrant™ for Product Information Management Solutions'),
  card('Whitepaper', 'Digital Product Passport'),
].map((c, i) => ({ ...c, image: abstract(IMAGES[i]), href: '#' }));

const PAGE = 12;

export function InsightsOverviewDemo({ Device = 'Desktop' }: { Device?: 'Desktop' | 'Mobile' }) {
  const [type, setType] = useState('All');
  const [shown, setShown] = useState(PAGE);
  const total = INSIGHT_TYPES.find((t) => t.label === type)?.count ?? 0;
  const pool = type === 'All' ? INSIGHTS : INSIGHTS.filter((i) => i.Type === type);
  const items = pool.length ? Array.from({ length: Math.min(shown, total) }, (_, i) => pool[i % pool.length]) : [];
  return (
    <InsightsOverview
      Device={Device}
      types={INSIGHT_TYPES}
      type={type}
      onTypeChange={(t) => { setType(t); setShown(PAGE); }}
      items={items}
      total={pool.length ? total : 0}
      onShowMore={() => setShown((n) => n + PAGE)}
      empty="No videos in this preview yet."
    />
  );
}
