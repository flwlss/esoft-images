interface IPhotoResponse {
  limit: number;
  message: string;
  offset: number;
  photos: Photo[];
  success: boolean;
}

interface IPhoto {
  description: string;
  id: number;
  title: string;
  url: string;
  user: number;
}