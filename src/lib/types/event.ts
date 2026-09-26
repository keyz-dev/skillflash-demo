export interface Event {
  id: number;
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
  description: string;
  ticketPrice: number;
  minGuests: number;
  maxGuests: number;
  previewImage: string;
}
