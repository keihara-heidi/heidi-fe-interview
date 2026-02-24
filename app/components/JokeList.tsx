"use client";

import { useEffect, useState } from "react";
import { fetchJokes, Joke } from "@/app/actions/jokes";
import JokeCard from "./JokeCard";

export default function JokeList() {
  const [jokes, setJokes] = useState<Joke[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  async function loadJokes() {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchJokes();
      setJokes(data);
    } catch {
      setError("Failed to load jokes. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadJokes();
  }, []);

  if (loading) {
    return <p className="text-gray-500">Loading jokes...</p>;
  }

  if (error) {
    return (
      <div className="flex flex-col items-start gap-3">
        <p className="text-red-600">{error}</p>
        <button
          onClick={loadJokes}
          className="rounded-full border border-gray-200 px-4 py-2 text-sm font-medium hover:bg-gray-50"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {jokes.map((joke) => (
        <JokeCard key={joke.id} joke={joke} />
      ))}
    </div>
  );
}
