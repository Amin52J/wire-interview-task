import { sampleResponse } from "./constants";

export type DataType = {
  name: string;
  stars: number;
};

export const normalizeData = (data: typeof sampleResponse): DataType[] =>
  data.map(({ name, stars }) => ({
    name,
    stars,
  }));

export const paginateData = (data: DataType[]): DataType[][] => {
  const result: DataType[][] = [];
  const chunkSize = 5;
  for (let i = 0; i < data.length; i += chunkSize) {
    const chunk = data.slice(i, i + chunkSize);
    result.push(chunk);
  }

  return result;
};
