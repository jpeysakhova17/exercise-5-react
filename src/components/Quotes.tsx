import axios from "axios";
import Quote from "../models/QuotesModel";

export function findQuote(): Promise<Quote[]> {
  return axios
    .get("https://grandcircusco.github.io/demo-apis/quotes.json")
    .then((response) => {
      return response.data;
    });
}
