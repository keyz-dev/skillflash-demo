import type { Expert } from "./expert";
import type { Event } from "./event";
import type { Article } from "./article";
import type { Media } from "./media";
import type { Team } from "./team";

export type ResultItem =
  | { type: "expert"; data: Expert }
  | { type: "event"; data: Event }
  | { type: "article"; data: Article }
  | { type: "media"; data: Media }
  | { type: "team"; data: Team };
