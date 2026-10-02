export interface Media {
  id: string;
  authorId: string;
  title: string;
  description: string;
  posterUrl?: string;
  videoSources?: {
    src: string;
    type: "video/mp4" | "video/webm";
  }[];
  skills: string[];
}
