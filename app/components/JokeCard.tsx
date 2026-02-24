import { Joke } from "@/app/actions/jokes";

type JokeCardProps = {
  joke: Joke;
};

export default function JokeCard({ joke }: JokeCardProps) {
  return (
    <div className="rounded-xl border border-gray-200 p-5 flex flex-col gap-4">
      <div className="flex items-start justify-between gap-3">
        <p className="font-medium text-gray-900">{joke.setup}</p>
        <span className="shrink-0 rounded-full bg-gray-100 px-3 py-0.5 text-xs text-gray-600">
          {joke.type}
        </span>
      </div>
      <p className="text-gray-500 italic">{joke.punchline}</p>
    </div>
  );
}
