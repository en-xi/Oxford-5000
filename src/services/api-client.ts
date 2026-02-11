import { Word } from "../entities/Word";
import supabase from "./supabase";

export let getWords = async (from: number, to: number): Promise<Word[]> => {
  const res = await supabase
    .from("words")
    .select()
    .range(from, to)
    .order("id", { ascending: true });
  return res.data as Word[];
};

export const getTotal = async (): Promise<number> => {
  const res = await supabase
    .from("words")
    .select("id", { count: "exact", head: true });
  if (res.error) throw res.error;
  return res.count ?? 0;
};
