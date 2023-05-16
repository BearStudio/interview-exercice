# Interview exercise

## Provided content

This NextJS project was created from create-next-app, and includes Chakra-UI and React-Query.

3 types are provided :

- Show: props in common between movies and tv shows.
- Movie: props of a movie.
- TvShow: props of a tv show.

The endpoint `/api/marvel` allows to recover all marvel movies and tv shows. It returns an array of `Movie | TvShow`
This endpoint accepts a query param `type=movie` or `type=tvShow` to filter by type.

The endpoint `/api/marvel/{id}` allows to recover movie or tv show information. It returns `Movie | TvShow`
This endpoint accepts a query param `type=movie` or `type=tvShow` to filter by type.

## Exercise

You have to build a listing of Marvel movies and tv shows.
The list must be able to be filtered by type.

Clicking on an item in the list triggers a navigation to a new details page for the selected item.

This exercice must be done using the given stack (NextJS, Chakra UI, TanstackQuery)
