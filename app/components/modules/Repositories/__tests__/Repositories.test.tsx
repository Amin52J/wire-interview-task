import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";

import Repositories from "@Components/modules/Repositories";
import { sampleResponse } from "../constants";
import { normalizeData } from "../utils";
import Providers from "@/test-utils/Providers";

jest.mock("../utils", () => ({
  ...jest.requireActual("../utils"),
  normalizeData: jest.fn((data) => data),
}));

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(sampleResponse),
  }),
) as jest.Mock;

describe("Repositories Component", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("displays loading message and results after search", async () => {
    render(<Repositories />, { wrapper: Providers });
    const input = screen.getByPlaceholderText(/search.../i);

    fireEvent.change(input, { target: { value: "grunt" } });

    setTimeout(async () => {
      const loadingMessage = await screen.findByText(
        /loading search results.../i,
      );
      expect(loadingMessage).toBeInTheDocument();

      await waitFor(() => {
        expect(fetch).toHaveBeenCalledWith(expect.stringContaining("grunt"));
      });

      const results = normalizeData(sampleResponse);
      results.forEach((result) => {
        expect(screen.getByText(result.name)).toBeInTheDocument();
        expect(screen.getByText(result.stars.toString())).toBeInTheDocument();
      });
    }, 1000);
  });

  test("displays an error message if the API call fails", async () => {
    (global.fetch as jest.Mock).mockImplementationOnce(() =>
      Promise.reject(new Error("API is down")),
    );

    render(<Repositories />, { wrapper: Providers });
    const input = screen.getByPlaceholderText(/search.../i);

    fireEvent.change(input, { target: { value: "grunt" } });

    setTimeout(async () => {
      const errorMessage = await screen.findByText(
        /sorry, there was an error while fetching repositories/i,
      );
      expect(errorMessage).toBeInTheDocument();
    }, 1000);
  });

  test("sorts results by name or stars", async () => {
    render(<Repositories />, { wrapper: Providers });
    const input = screen.getByPlaceholderText(/search.../i);

    fireEvent.change(input, { target: { value: "grunt" } });
    setTimeout(async () => {
      await waitFor(() => screen.getByText(sampleResponse[0].name));

      const sortByName = screen.getByText(/name/i);
      const sortByStars = screen.getByText(/stars/i);

      fireEvent.click(sortByName);
      const sortedByName = sampleResponse.sort((a, b) =>
        a.name.localeCompare(b.name),
      );
      expect(screen.getByText(sortedByName[0].name)).toBeInTheDocument();

      fireEvent.click(sortByStars);
      const sortedByStars = sampleResponse.sort((a, b) => b.stars - a.stars);
      expect(screen.getByText(sortedByStars[0].name)).toBeInTheDocument();
    }, 1000);
  });

  test("paginates results correctly", async () => {
    render(<Repositories />, { wrapper: Providers });
    const input = screen.getByPlaceholderText(/search.../i);

    fireEvent.change(input, { target: { value: "grunt" } });
    setTimeout(async () => {
      await waitFor(() => screen.getByText(sampleResponse[0].name));

      const paginationItem = screen.getByText("2");
      fireEvent.click(paginationItem);

      expect(screen.getByText(sampleResponse[10].name)).toBeInTheDocument();
    }, 1000);
  });
});
