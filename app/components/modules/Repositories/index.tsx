"use client";

import { useState, useRef, useEffect } from "react";

import Input from "@Components/elements/Input";

import {
  Alert,
  Pagination,
  PaginationItem,
  SearchResult,
  Table,
  TableHead,
} from "./styles";
import { initialSortMethod, sampleResponse } from "./constants";
import { DataType, normalizeData, paginateData } from "./utils";

export default function Repositories() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<DataType[] | null>(null);
  const [paginatedResults, setPaginatedResults] = useState<DataType[][] | null>(
    null,
  );
  const [errorMessage, setErrorMessage] = useState("");
  const [pagination, setPagination] = useState(1);
  const [sortMethod, setSortMethod] = useState(initialSortMethod);
  const debounce = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setPagination(1);

    if (results && results.length > 0) {
      const direction = sortMethod.direction === "asc" ? 1 : -1;

      const sortedResults = results.sort((a, b) => {
        if (sortMethod.method === "name") {
          return direction * a.name.localeCompare(b.name);
        } else {
          return direction * (a.stars - b.stars);
        }
      });

      setPaginatedResults(paginateData(sortedResults));
    } else {
      setPaginatedResults(null);
    }
  }, [sortMethod, results]);

  const onQueryChange = (e: React.FormEvent<HTMLInputElement>) => {
    const query = e.currentTarget.value;
    setQuery(query);

    if (debounce.current) {
      clearTimeout(debounce.current);
    }

    debounce.current = setTimeout(async () => {
      debounce.current = null;

      if (query.trim()) {
        setResults(null);
        setErrorMessage("Loading search results...");
        setSortMethod(initialSortMethod);

        try {
          const apiUrl = process.env.NEXT_PUBLIC_API_URL;
          const apiKey = process.env.NEXT_PUBLIC_API_KEY;

          if (!apiUrl || !apiKey) {
            throw new Error("No API key provided");
          }

          const response = await fetch(
            `${apiUrl}?q=${query.trim()}&api_key=${apiKey}`,
          );
          const data = await response.json();
          if (data.length > 0) {
            setResults(normalizeData(data));
            setErrorMessage("");
          } else {
            setErrorMessage("Could not find any results.");
          }
        } catch (error) {
          // For testing purpose only, if the env variables are not available or the API is faulty
          // TODO: Remove next line before going to production
          setResults(normalizeData(sampleResponse));

          setErrorMessage(
            "Sorry, there was an error while fetching repositories",
          );
        }
      } else {
        setResults(null);
        setErrorMessage("");
      }
    }, 800);
  };

  const onSortMethodChange = (method: "name" | "stars") => () => {
    setSortMethod({
      method,
      direction:
        sortMethod.method === method && sortMethod.direction === "desc"
          ? "asc"
          : "desc",
    });
  };

  return (
    <div>
      <Input
        autoComplete="off"
        type="search"
        placeholder="Search..."
        value={query}
        onChange={onQueryChange}
      />
      <SearchResult>
        <Table>
          <thead>
            <tr>
              <TableHead
                onClick={onSortMethodChange("name")}
                title="Name"
                sortMethod={sortMethod}
              />
              <TableHead
                onClick={onSortMethodChange("stars")}
                title="Stars"
                sortMethod={sortMethod}
              />
            </tr>
          </thead>
          <tbody>
            {paginatedResults?.[pagination - 1]?.map(
              ({ name, stars }, index) => (
                <tr key={`result_${name}_${stars}_${index}`}>
                  <td>{name}</td>
                  <td>{stars}</td>
                </tr>
              ),
            )}
          </tbody>
        </Table>
        <Pagination>
          {paginatedResults?.map((_, index) => (
            <PaginationItem
              key={`paginationItem_${index}`}
              $isActive={index + 1 === pagination}
              onClick={() => {
                if (index + 1 !== pagination) {
                  setPagination(index + 1);
                }
              }}
            >
              {index + 1}
            </PaginationItem>
          ))}
        </Pagination>
        {(!paginatedResults || paginatedResults.length === 0) && (
          <Alert>{errorMessage || "Search for the name of a package."}</Alert>
        )}
      </SearchResult>
    </div>
  );
}
