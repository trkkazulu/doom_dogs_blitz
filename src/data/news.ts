export interface NewsItem {
  date: Date;
  title: string;
  excerpt: string;
  slug: string;
  content?: string;
}

export const newsItems: NewsItem[] = [
  {
    date: new Date('2024-03-15'),
    title: 'New Album Announcement',
    excerpt: 'Doom Dogs enters the studio with legendary producer Bob Musso to record their first album with Jonathan Kane on drums...',
    slug: 'new-album-announcement',
    content: `
      Doom Dogs has entered the studio with Bob Musso, the legendary producer known for his three-decade collaboration with Bill Laswell, to record their first full-length album featuring Jonathan Kane on drums.

      The recording sessions capture the raw energy and spontaneous creativity that fans have come to expect from Doom Dogs' live performances. The band is recording live in the studio, maintaining the same improvisational approach that has made their concerts such powerful experiences.

      "Working with Bob Musso was a natural choice," explains bassist Jair-Rohm Parker Wells, who previously collaborated with Musso during his Machine Gun days. "Bob has this incredible ability to capture the energy of improvised music while maintaining absolute clarity and power in the mix."

      Musso's approach to recording and production, honed through countless sessions with experimental and avant-garde artists, perfectly complements Doom Dogs' genre-free aesthetic. His experience working with both improvised music and heavy sounds makes him the ideal producer for capturing the band's unique sonic landscape.

      The album will feature extended improvisations that showcase the telepathic interplay between Reeves Gabrels' innovative guitar work, Jonathan Kane's hypnotic drumming, and Jair-Rohm Parker Wells' foundation-shaking bass lines.

      Stay tuned for more updates as the album progresses through the production phase.
    `
  },
  {
    date: new Date('2024-03-10'),
    title: 'East Coast Tour Dates Announced',
    excerpt: 'Doom Dogs announces a series of exciting shows across the East Coast this winter...',
    slug: 'east-coast-tour-dates',
    content: `
      Doom Dogs is thrilled to announce a series of performances across the East Coast this winter. The band will be bringing their powerful improvisational experience to several iconic venues.

      The tour kicks off at The Downstairs in Ithaca, NY on December 18th, 2024. This intimate venue provides the perfect setting for the band's intense musical explorations.

      Following the holiday break, Doom Dogs will perform at the historic Troy Savings Bank Music Hall in Troy, NY on January 8th, 2025. Known for its exceptional acoustics, this venue will allow the band to fully showcase their dynamic range.

      The tour concludes at Kelly's Logan House in Wilmington, DE on January 11th, 2025, bringing the band's genre-defying sound to Delaware's music lovers.

      Don't miss these opportunities to experience Doom Dogs' unique blend of experimental rock, improvised music, and sonic exploration. Tickets are available now for all shows.
    `
  }
];