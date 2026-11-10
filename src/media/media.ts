/*
  Media exported from Figma (images not yet from the CMS). Paths are relative so they work in Storybook
  locally and on GitHub Pages (served from public/ via staticDirs). When the CMS arrives, components keep
  taking a plain URL; only this lookup is replaced.

  Source: Figma components "Case/Portrait/*" (480×560), "Case/Wide/*" (1440×720), "Abstract new *"
  (library backgrounds) and the "Clients/*" and "Technologies/*" logos. Photos are WebP (portrait 720 wide,
  wide and abstract 1920 wide); logos are the Figma vectors as SVG with currentColor.
*/

const BASE = 'media/'

/** Case photo by the Figma image name, e.g. caseImage('quooker-1') or caseImage('xxl', 'wide'). */
export const caseImage = (
    key: string,
    kind: 'portrait' | 'wide' = 'portrait'
) => `${BASE}cases/${kind}-${key}.webp`

/** Abstract background by the Figma number, e.g. abstract('016'). */
export const abstract = (n: string) => `${BASE}abstract/abstract-${n}.webp`

/** The portrait photo the Figma templates use per client (Case/Portrait/<key>). */
const CLIENT_PHOTO: Record<string, string> = {
    BunzlOne: 'bunzl',
    'Chadwicks Group': 'chadwicks',
    Chadwicks: 'chadwicks',
    'Kingspan Insulated Panels': 'kingspan-1',
    Kingspan: 'kingspan-1',
    Quooker: 'quooker-1',
    Symson: 'symson',
    'Booking.com': 'booking',
    Heidelberg: 'heidelberg',
    PostNL: 'postnl',
    'G-Star RAW': 'g-star',
    'G-Star': 'g-star',
    Fairphone: 'fairphone',
    'Schneider Electric': 'schneider-electric-1',
    'PePe Parts': 'pepe-parts',
    Glenway: 'glenway',
    'JC-Electronics': 'jc-electronics',
    'Unipart Autoparts': 'unipart',
    Unipart: 'unipart',
    Elektrototaalmarkt: 'elektrototaalmarkt',
    'XXL Nutrition': 'xxl',
    Advania: 'advania',
    Adyen: 'adyen',
    Amac: 'amac',
    Azerty: 'azerty',
    Beeckestijn: 'beeckestijn',
    UMCG: 'umcg',
}
export const clientPhoto = (
    client: string,
    kind: 'portrait' | 'wide' = 'portrait'
) => {
    const key = CLIENT_PHOTO[client]
    return key ? caseImage(key, kind) : undefined
}

/** Logo files (public/media/logos) and their aspect ratio (width / height of the vector). */
export const LOGOS: Record<string, { file: string; ratio: number }> = {
    'ACI Weave': { file: 'aci-weave', ratio: 5.567 },
    Adobe: { file: 'adobe', ratio: 3.962 },
    Alumio: { file: 'alumio', ratio: 4.824 },
    AWS: { file: 'aws', ratio: 1.691 },
    'Booking.com': { file: 'booking', ratio: 6.099 },
    BunzlOne: { file: 'bunzlone', ratio: 8.091 },
    Chadwicks: { file: 'chadwicks', ratio: 2.424 },
    Commercetools: { file: 'commercetools', ratio: 3.64 },
    Drupal: { file: 'drupal', ratio: 4.01 },
    Elektrototaalmarkt: { file: 'elektrototaalmarkt', ratio: 11.625 },
    Exigent: { file: 'exigent', ratio: 2.752 },
    Fairphone: { file: 'fairphone', ratio: 4.46 },
    'G-Star': { file: 'g-star', ratio: 11.067 },
    Glenway: { file: 'glenway', ratio: 3.35 },
    GoCardless: { file: 'gocardless', ratio: 6.822 },
    Heidelberg: { file: 'heidelberg', ratio: 8.973 },
    HubSpot: { file: 'hubspot', ratio: 3.517 },
    Hyvä: { file: 'hyva', ratio: 2.213 },
    ING: { file: 'ing', ratio: 3.912 },
    'JC-Electronics': { file: 'jc-electronics', ratio: 5.454 },
    Kingspan: { file: 'kingspan', ratio: 2.061 },
    LaSalle: { file: 'lasalle', ratio: 4.062 },
    'Munich Re': { file: 'munich-re', ratio: 4.333 },
    Newland: { file: 'newland', ratio: 3.768 },
    'PePe Parts': { file: 'pepe-parts', ratio: 1.941 },
    Pimcore: { file: 'pimcore', ratio: 5.714 },
    PostNL: { file: 'postnl', ratio: 1.011 },
    Quooker: { file: 'quooker', ratio: 3.949 },
    'Schneider Electric': { file: 'schneider-electric', ratio: 3.395 },
    Shopify: { file: 'shopify', ratio: 3.51 },
    Storyblok: { file: 'storyblok', ratio: 4.857 },
    Subway: { file: 'subway', ratio: 5.235 },
    Symson: { file: 'symson', ratio: 4.719 },
    'XXL Nutrition': { file: 'xxl-nutrition', ratio: 1.735 },
}

/** Name variants used in copy → logo key. */
const ALIASES: Record<string, string> = {
    Booking: 'Booking.com',
    'Chadwicks Group': 'Chadwicks',
    'Kingspan Insulated Panels': 'Kingspan',
    'G-Star RAW': 'G-Star',
    Hubspot: 'HubSpot',
    'HubSpot Customer Platform': 'HubSpot',
    Hyva: 'Hyvä',
    'Hyvä Magento themes': 'Hyvä',
    'Shopify Plus': 'Shopify',
    'Munich-Re': 'Munich Re',
    'Unipart Autoparts': 'Unipart',
    'Schneider-Electric': 'Schneider Electric',
    'PePe-Parts': 'PePe Parts',
    'XXL-Nutrition': 'XXL Nutrition',
}
export const logoFor = (name: string) => {
    const entry = LOGOS[ALIASES[name] ?? name]
    return entry
        ? { src: `${BASE}logos/${entry.file}.svg`, ratio: entry.ratio }
        : undefined
}
