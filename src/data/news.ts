export interface NewsItem {
  date: Date;
  title: string;
  excerpt: string;
  slug: string;
}

export const newsItems: NewsItem[] = [
  {
    date: new Date('2024-03-15'),
    title: 'New Album Announcement',
    excerpt: 'Exciting news! Our new album "Hellhound Symphony" drops next month...',
    slug: 'new-album-announcement'
  },
  {
    date: new Date('2024-03-10'),
    title: 'European Tour 2024',
    excerpt: 'Get ready Europe! Doom Dogs are coming to tear up the stage...',
    slug: 'european-tour-2024'
  }
];