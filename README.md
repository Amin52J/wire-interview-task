## Running The Project

Run the following commands:

```bash
yarn install
yarn start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Calling libraries.io Server

- Create a `.env` file in the root of the project
- Copy the content of `.env.template` to `.env`
- Use your API Key from libraries.io for `NEXT_PUBLIC_API_KEY`
- Put the URL for the API without the query parameters as the value for `NEXT_PUBLIC_API_URL`

In the case that you skip the steps above or if the API is down or has any problems, you will receive a sample data which is stored locally.

## Running The Tests

```bash
yarn test
```

## Notes

- The API doesn't return an owner for the packages so I removed it from the table.
- I didn't find enough time to implement E2E testing but I think it'd be beneficial to the project.
- I thought about implementing a middleware kind of API to fetch navigation and footer data but I made it into constants for simplicity.
- There are minor differences between my implementation and the actual bower UI (mostly on mobile version) and that's mostly because of the inconsistencies in their design system.
