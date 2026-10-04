export interface Event {
  id: number;
  slug: string;
  authorId: string;
  name: string;
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
  location:
    | { type: "offline"; address: string }
    | { type: "online"; link: string };
  mainSkillIds: string[];
  shortDescription: string;
  description: string;
  ticketPrice: number;
  minGuests: number;
  maxGuests: number;
  previewImage: string;
  detailImage: string;
}
