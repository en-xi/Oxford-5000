import { Defcn } from "./Defcn";
import { Detail } from "./Detail";

export type Word = {
  name: string;
  def_cn: Defcn[];
  phonetic_us: string;
  phonetic_uk: string;
  audio_us: string;
  audio_uk: string;
  level: string;
  is_3000: number;
  details: Detail[];
};
