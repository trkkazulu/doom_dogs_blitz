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
    ticketLink: '#'
  },
  {
    date: new Date('2025-01-09'),
    venue: 'Troy Savings Bank Music Hall',
    city: 'Troy, NY',
    country: 'USA',
    ticketLink: '#'
  },
  {
    date: new Date('2025-01-12'),
    venue: "Kelly's Logan House",
    city: 'Wilmington, DE',
    country: 'USA',
    ticketLink: '#'
  }
];