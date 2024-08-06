import { normalizeData, paginateData, DataType } from "../utils";
import { sampleResponse } from "../constants";

describe("normalizeData", () => {
  test("should normalize sample data correctly", () => {
    const expected: DataType[] = sampleResponse.map((item) => ({
      name: item.name,
      stars: item.stars,
    }));

    const normalizedData = normalizeData(sampleResponse);

    expect(normalizedData).toEqual(expected);
  });

  test("should return an empty array if input data is empty", () => {
    const normalizedData = normalizeData([]);
    expect(normalizedData).toEqual([]);
  });
});

describe("paginateData", () => {
  test("should paginate data into chunks of given size", () => {
    const data: DataType[] = Array.from({ length: 10 }, (_, i) => ({
      name: `Repo${i + 1}`,
      stars: i + 1,
    }));

    const paginatedData = paginateData(data);

    expect(paginatedData.length).toBe(2);
    expect(paginatedData[0].length).toBe(5);
    expect(paginatedData[1].length).toBe(5);
  });

  test("should handle data with fewer items than the chunk size", () => {
    const data: DataType[] = [
      { name: "Repo1", stars: 1 },
      { name: "Repo2", stars: 2 },
    ];

    const paginatedData = paginateData(data);

    expect(paginatedData.length).toBe(1);
    expect(paginatedData[0].length).toBe(2);
  });

  test("should return an empty array if input data is empty", () => {
    const paginatedData = paginateData([]);
    expect(paginatedData).toEqual([]);
  });
});
