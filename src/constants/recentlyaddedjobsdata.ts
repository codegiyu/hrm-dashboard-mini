import figmaIcon from '@/assets/icon.png';
import spotifyIcon from '@/assets/icon2.png';
import iosIcon from '@/assets/Icon3.png';
import behanceIcon from '@/assets/Icon4.png';


type Job = {
  logo: string;
  title: string;
  location: string;
  datePosted: string;
};

export const jobs: Job[] = [
  {
    logo: figmaIcon,
    title: "Jr Frontend Engineer",
    location: "Spotify, Singapore",
    datePosted: "2 Days ago",
  },
  {
    logo: spotifyIcon,
    title: "Product Designer",
    location: "Spotify, Singapore",
    datePosted: "6 hours ago",
  },
  {
    logo: iosIcon,
    title: "ios Developer",
    location: "San Francisco, CA",
    datePosted: "2 Days ago",
  },
  {
    logo: behanceIcon,
    title: "Brand Strategist",
    location: "Newyork, US",
    datePosted: "2 Days ago",
  },
];