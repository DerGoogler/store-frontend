interface DetailsProps {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  download: string;
  isSliderEnabled: boolean;
  isDeveloperEnabled: boolean;
  screenshots: any;
  className?: string;
  // Dev shit
  devName: string;
  devEmail?: string;
  devWebsite?: string;
}

interface DetailsState {
  isOpen: boolean;
}

interface DetailsListing {
  id: string | number;
  title: string;
  category: string;
  description: string;
  image: string;
  download: string;
  screenshots?: ScreenshotsDetailsMap;
  developer?: DeveloperDetailMap;
}

interface DeveloperDetailMap {
  enabled: boolean;
  name: string;
  email?: string;
  website?: string;
}

interface ScreenshotsDetailsMap {
  enabled: boolean;
  data: any;
}

export { DetailsProps, DetailsState, DetailsListing };
