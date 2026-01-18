import { useQuery } from "@tanstack/react-query";
import words from "../data/words";
import { getWords } from "../services/api-client";

export let useWords = (from: number, to: number) =>
  useQuery({
    queryKey: ["words", from, to],
    queryFn: () => {
      console.log("run getWords()");
      return getWords(from, to);
    },

    initialData: words,
  });
