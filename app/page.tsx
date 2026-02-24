import JokeList from "@/app/components/JokeList";

export default function Home() {
  return (
    <div className="min-h-screen bg-white px-6 py-12 font-sans sm:px-12">
      <main className="mx-auto max-w-3xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Joke Browser
          </h1>
          <p className="mt-1 text-gray-500">
            Browse random jokes and save your favourites.
          </p>
        </div>
        <JokeList />
      </main>
    </div>
  );
}
