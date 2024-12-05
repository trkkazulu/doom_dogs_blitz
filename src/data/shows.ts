export interface Show {
  date: Date;
  venue: string;
  city: string;
  country: string;
  ticketLink: string;
}

export const upcomingShows: Show[] = [
  {
    date: new Date('2024-12-19'),
    venue: 'The Downstairs',
    city: 'Ithaca, NY',
    country: 'USA',
    ticketLink: 'https://www.eventbrite.com/e/doom-dogs-gabrels-kane-parker-wells-in-ithaca-ny-1218-the-downstairs-tickets-1092595866649?aff=oddtdtcreator&fbclid=IwY2xjawG8hf1leHRuA2FlbQIxMAABHWYw-KLGAUYS0bh2PwCfbxViNJYwRwJAz-FXd5JKE2G_UIY-Cfpqg-9n6g_aem_G5byZzEIiG6-SuqiRnt1WA'
  },
  {
    date: new Date('2025-01-09'),
    venue: 'Troy Savings Bank Music Hall',
    city: 'Troy, NY',
    country: 'USA',
    ticketLink: 'https://www.troymusichall.org/events/2855/sophia-subbayya-vastek/'
  },
  {
    date: new Date('2025-01-12'),
    venue: "Kelly's Logan House",
    city: 'Wilmington, DE',
    country: 'USA',
    ticketLink: 'https://www.troymusichall.org/events/2855/sophia-subbayya-vastek/'
  }
];