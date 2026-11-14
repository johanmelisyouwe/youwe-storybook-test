import type { Quote } from './testimonial'

/** Home "In their words" (Testimonial Layout Tabs): the four client quotes from the v2 site. */
export const IN_THEIR_WORDS: Quote[] = [
    {
        client: 'BunzlOne',
        Quote: '“We turned the vision into a platform. Now we’re adding new customers and suppliers.”',
        Name: 'Frank Daamen',
        Role: 'Digital Director Bunzl & Founder of BunzlOne',
        cta: { label: 'Read the case', href: '#' },
    },
    {
        client: 'Chadwicks Group',
        Quote: '“We have found Youwe to be very professional and innovative partners in this journey with our recent AI pilot on data collection a great example.”',
        Name: 'Andrew Hewat',
        Role: 'Head of Innovation & Digital Transformation, Chadwicks Group',
        cta: { label: 'Read the case', href: '#' },
    },
    {
        client: 'Thomas Telford',
        Quote: '“The platform brings to life the NEC value of collaboration by enabling clients, consultants, law firms to work together on contracts.”',
        Name: 'Iain Jeffries',
        Role: 'Head of Products, Thomas Telford',
        cta: { label: 'Read the case', href: '#' },
    },
    {
        client: 'Symson',
        Quote: '“With Youwe as strategic AI partner, Symson now automates the critical linking of market signals to actionable pricing.”',
        Name: 'Vincent Gelink',
        Role: 'CEO, Symson',
        cta: { label: 'Read the case', href: '#' },
    },
]
