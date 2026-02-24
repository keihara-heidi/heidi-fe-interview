"use server";

export type Joke = {
  id: number;
  type: string;
  setup: string;
  punchline: string;
};

export async function fetchJokes(): Promise<Joke[]> {
  const response = await fetch(
    "https://official-joke-api.appspot.com/random_ten"
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch jokes: ${response.status}`);
  }

  return response.json();
}
