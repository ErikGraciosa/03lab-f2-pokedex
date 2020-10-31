# 03lab-f2-pokedex

Looking For | Points (10)
:--|--:
[x] In README.md, show a screenshot of diagram of Component Hierarchy, labeling the flow of `props` and location of `state` | 1
[x] Deployed on Netlify, nice looking CSS | 1
[x] `PokeList` component that takes in (as props) a list of pokemon and filters, renders a list of `PokeItem` components on load and after searches | 2
[x] `Searchbar` component (input and submit button) that takes a callback to manage App.js state (successfully filters pokemon on the screen) | 3
[x] Working `Sort` component with TWO dropdowns for sorting pokemon in ascending/descending order by a given category | 3
[] Add a SearchCategory (with a callback) with a group of radio button to search for pokemon by different categories | + 1

# LAB 04
Looking For | Points (10)
:--|--:
[x]Refactor App.js as home page with `react-router` where `/` is your home page and `/list` (or whatever) points to your poke list. | 2
[x]Styled ListPage Component (with react-router) that fetches characters by name on load (use `componentDidMount`) | 2
[x]Add a `fetchPokemon` method to your List page. It should use state to make the correct fetch, based on the user's current selections. | 2
[x]Fetch pokemon on Search (should sort and filter correctly, using the API) | 3
[x]Add loading spinner to List page (on mount and on search) | 1

# LAB 05

Looking For | Points (10)
:--|--:
[]Add pagination (next/prev buttons that conditionally render) for queries that return more than 20 results | 3
[]On List page, each ListItem has a `react router` `Link` to its Detail page | 2
[]Styled Detail Page Component that uses `this.props.match.params.whatever` to make fetch on `componentDidMount` | 4
[]Add loading spinner to Detail page | 1
[]STRETCH: Sync the list page initial fetch/inputs with the params in URL (url injects term into input on load and fetches the correct pokemon, and the correct page with info from the URL) | +2
[]STRETCH: When I make a search in the app (or when I change the page with the pagination buttons), update the URL to sync the URL with the form UI | +1