# Frontend Interview Assignment

## Assignment: Joke Browser with Favourites

### Objective

Build a React component that fetches a list of jokes from an API, displays them in a visually appealing format, and allows users to save jokes to a favourites list.

---

### Requirements

#### 1. Fetching Jokes

- On page load (or via a button), fetch 10 random jokes from the API:
  ```
  GET https://official-joke-api.appspot.com/random_ten
  ```
- Handle loading and error states appropriately.

#### 2. Displaying Jokes

- Display the fetched jokes in a clean, well-structured layout (e.g. cards, table, grid — your choice).
- What fields you display for each joke is up to you (setup, punchline, type, id, etc.).
- The presentation should be visually polished and responsive.

#### 3. Add to Favourites

- Each joke should have an **"Add to Favourites"** button.
- Clicking it adds the joke to a separate favourites list.
- The favourites list should be visible on the page.
- Each favourite should have a **"Remove from Favourites"** button.
- Prevent duplicate jokes from being added to favourites.

---

### Follow-up (if time permits)

#### 4. Filter / Search

- Implement a search input that filters the displayed jokes by keyword.
- The filter should update results in real-time as the user types.

#### 5. Persist Favourites

- Save the favourites list to `localStorage` so it survives a page refresh.

#### 6. Load More

- Add a "Load More" button that fetches another batch of 10 jokes and appends them to the existing list (without losing the current jokes or favourites).

#### 7. Sort Jokes

- Allow users to sort the joke list (e.g. alphabetically by setup, or by type/category).

---

### What we're looking for

- Clean, readable code structure
- Effective use of React state and props
- Thoughtful UI/UX decisions
- Handling of edge cases (loading, errors, duplicates, empty states)

Good luck!

example: https://example-beta-orpin.vercel.app/