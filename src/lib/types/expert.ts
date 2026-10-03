export interface Expert {
  id: string;
  slug: string;
  name: string;
  handle: string;
  bio: string;
  location: string;
  skills: string[];
  socials: {
    platform: "linkedin" | "instagram" | "youtube" | "github" | "facebook";
    url: string;
  }[];
  yearsExperience: number;
  avatarUrl: string;
}
