export interface Plant {
  id: number;
  common_name: string;
  scientific_name: string[];
  cycle: string;
  watering: string;
  default_image: {
    medium_url: string;
    thumbnail: string;
  }
}
