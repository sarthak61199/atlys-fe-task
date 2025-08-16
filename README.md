# foo-rum

Live URL - https://atlys-fe-task.vercel.app/

Built using ReactJS using Vite as the build tool, TypeScript and TailwindCSS without using any libraries.

## Steps to run locally

- Clone the repository `git clone https://github.com/sarthak61199/atlys-fe-task.git`
- Run `npm i` to install dependencies
- Run `npm run dev` to start the dev server

## Notes

- There are 3 pages in this app.
  - /sign-in page to login (use test accounts which were provided to sign in)
  - /sign-up page to signup
  - / which is our feed
- The user and post data is hardcoded in data.json file. New posts are kept in state and are not persisted anywhere and is lost if the user refreshes.
- Similarly the authentication state is also stored in memory and the user will have to login again if the page refreshes.

## Challenges

One challenge I faced was ensuring that the mechanism for opening the authentication dialog on the feed page, triggered by user interaction, was centralized and offered a good developer experience. I wanted to avoid prop drilling, as it can impact performance and become tedious to manage as the project grows. I think the current implementation is nice starting point to scale it further as all the logic is centralized in context.
