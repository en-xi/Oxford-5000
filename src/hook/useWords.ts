import { useQuery } from "@tanstack/react-query";
import { getTotal, getWords } from "../services/api-client";

export let useWords = (from: number, to: number) =>
  useQuery({
    queryKey: ["words", from, to],
    queryFn: () => {
      console.log("run getWords()");
      return getWords(from, to);
    },
  });

export let useTotal = () =>
  useQuery({
    queryKey: ["total"],
    queryFn: async () => {
      let total = await getTotal();
      console.log("total: ", total);
      return total;
    },
  });
