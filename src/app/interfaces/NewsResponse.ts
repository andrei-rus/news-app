import { Article } from "./Articles";

export interface NewsResponse {
    status: string;
    totalResults: number;
    articles: Article[];
}