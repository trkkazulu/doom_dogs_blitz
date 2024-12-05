export interface MediaItem {
  type: 'image' | 'video';
  thumbnail: string;
  title: string;
  date: string;
  url?: string;
}

export const mediaItems: MediaItem[] = [
  {
    type: 'video',
    thumbnail: '/images/gallery/video1.jpg',
    title: 'DOOM DOGS TRAILER OFFICIAL',
    date: 'March 15, 2024',
    url: 'https://youtu.be/3ozFKFY1G5I'
  },
  /*{
    type: 'image',
    thumbnail: '/images/gallery/show1.jpg',
    title: 'Live at Metal Arena',
    date: 'March 10, 2024'
  },
  {
    type: 'image',
    thumbnail: '/images/gallery/show2.jpg',
    title: 'Backstage Moments',
    date: 'March 1, 2024'
  }*/
];