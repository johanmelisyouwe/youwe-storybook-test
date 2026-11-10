/*
  Media exported from Figma (images not yet from the CMS). Paths are relative so they work in Storybook
  locally and on GitHub Pages (served from public/ via staticDirs). When the CMS arrives, components keep
  taking a plain URL; only this lookup is replaced.

  Source: Figma components "Case/Portrait/*" (480×560), "Case/Wide/*" (1440×720), "Abstract new *"
  (library backgrounds) and the "Clients/*" and "Technologies/*" logos. Photos are WebP (portrait 720 wide,
  wide and abstract 1920 wide); logos are the Figma vectors as SVG with currentColor.
*/

const BASE = 'media/';

/** Case photo by the Figma image name, e.g. caseImage('quooker-1') or caseImage('xxl', 'wide'). */
export const caseImage = (key: string, kind: 'portrait' | 'wide' = 'portrait') => `${BASE}cases/${kind}-${key}.webp`;

/** Abstract background by the Figma number, e.g. abstract('016'). */
export const abstract = (n: string) => `${BASE}abstract/abstract-${n}.webp`;

/** The portrait photo the Figma templates use per client (Case/Portrait/<key>). */
const CLIENT_PHOTO: Record<string, string> = {
  BunzlOne: 'bunzl', 'Chadwicks Group': 'chadwicks', Chadwicks: 'chadwicks', 'Kingspan Insulated Panels': 'kingspan-1', Kingspan: 'kingspan-1',
  Quooker: 'quooker-1', Symson: 'symson', 'Booking.com': 'booking', Heidelberg: 'heidelberg', PostNL: 'postnl',
  'G-Star RAW': 'g-star', 'G-Star': 'g-star', Fairphone: 'fairphone', 'Schneider Electric': 'schneider-electric-1',
  'PePe Parts': 'pepe-parts', Glenway: 'glenway', 'JC-Electronics': 'jc-electronics', 'Unipart Autoparts': 'unipart', Unipart: 'unipart',
  Elektrototaalmarkt: 'elektrototaalmarkt', 'XXL Nutrition': 'xxl', Advania: 'advania', Adyen: 'adyen', Amac: 'amac', Azerty: 'azerty',
  Beeckestijn: 'beeckestijn', UMCG: 'umcg',
};
export const clientPhoto = (client: string, kind: 'portrait' | 'wide' = 'portrait') => {
  const key = CLIENT_PHOTO[client];
  return key ? caseImage(key, kind) : undefined;
};

/*
  Logos keep the Figma logo box (decided 2026-11-10): Clients/* and Technologies/* are 190×100 frames with
  the logo placed inside with its margins; the partner logos on Tech Partners (Logos/*) are 120×40 frames.
  The SVG files are those frames, so a logo is drawn at the slot size and the margins come with it.
*/
const FRAME = 190 / 100;
const PARTNER = 120 / 40;

/** Clients/* and Technologies/* (190×100 frame) by display name → file. */
const LOGO_FILES: Record<string, string> = {
  'ACI Weave': 'aci-weave', Adobe: 'adobe', Alumio: 'alumio', AWS: 'aws', 'Booking.com': 'booking', BunzlOne: 'bunzlone',
  Chadwicks: 'chadwicks', Commercetools: 'commercetools', Drupal: 'drupal', Elektrototaalmarkt: 'elektrototaalmarkt', Exigent: 'exigent',
  Fairphone: 'fairphone', 'G-Star': 'g-star', Glenway: 'glenway', GoCardless: 'gocardless', Heidelberg: 'heidelberg', HubSpot: 'hubspot',
  'Hyvä': 'hyva', ING: 'ing', 'JC-Electronics': 'jc-electronics', Kingspan: 'kingspan', LaSalle: 'lasalle', 'Munich Re': 'munich-re',
  Newland: 'newland', 'PePe Parts': 'pepe-parts', Pimcore: 'pimcore', PostNL: 'postnl', Quooker: 'quooker',
  'Schneider Electric': 'schneider-electric', Shopify: 'shopify', Storyblok: 'storyblok', Subway: 'subway', Symson: 'symson',
  'XXL Nutrition': 'xxl-nutrition',
};

/** Logos/* partner logos (120×40 frame) by display name → file. */
const PARTNER_FILES: Record<string, string> = {
  'ACI Weave': 'partner-aci-weave', Adobe: 'partner-adobe', Adyen: 'partner-adyen', Algolia: 'partner-algolia', Alumio: 'partner-alumio',
  AWS: 'partner-aws', Buckaroo: 'partner-buckaroo', Channable: 'partner-channable', Commercetools: 'partner-commercetools',
  Contentful: 'partner-contentful', Databricks: 'partner-databricks', DotDigital: 'partner-dotdigital', Drupal: 'partner-drupal',
  'Google Cloud': 'partner-google-cloud', HubSpot: 'partner-hubspot', Hypernode: 'partner-hypernode', 'Hyvä': 'partner-hyva',
  Klaviyo: 'partner-klaviyo', Klevu: 'partner-klevu', 'Microsoft Fabric': 'partner-microsoft-fabric', Mollie: 'partner-mollie',
  n8n: 'partner-n8n', OpenAI: 'partner-openai', Pimcore: 'partner-pimcore', Salesforce: 'partner-salesforce', Sendcloud: 'partner-sendcloud',
  Shopify: 'partner-shopify', Spryker: 'partner-spryker', Symson: 'partner-symson', Tweakwise: 'partner-tweakwise',
};

/** Name variants used in copy → logo key. */
const ALIASES: Record<string, string> = {
  Booking: 'Booking.com', 'Chadwicks Group': 'Chadwicks', 'Kingspan Insulated Panels': 'Kingspan', 'G-Star RAW': 'G-Star', Hubspot: 'HubSpot',
  'HubSpot Customer Platform': 'HubSpot', Hyva: 'Hyvä', 'Hyvä Magento themes': 'Hyvä', 'Shopify Plus': 'Shopify', 'Munich-Re': 'Munich Re',
  'Schneider-Electric': 'Schneider Electric', 'PePe-Parts': 'PePe Parts', 'XXL-Nutrition': 'XXL Nutrition',
};

export type LogoKind = 'client' | 'partner';
/** The logo file and its frame ratio; partner logos fall back to the client frame and the other way round. */
export const logoFor = (name: string, kind: LogoKind = 'client') => {
  const key = ALIASES[name] ?? name;
  const order: [Record<string, string>, number][] = kind === 'partner' ? [[PARTNER_FILES, PARTNER], [LOGO_FILES, FRAME]] : [[LOGO_FILES, FRAME], [PARTNER_FILES, PARTNER]];
  for (const [files, ratio] of order) if (files[key]) return { src: `${BASE}logos/${files[key]}.svg`, ratio };
  return undefined;
};
