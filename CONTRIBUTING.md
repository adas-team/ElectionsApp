# CONTRIBUTING

### Local Git Setup

To make pull requests properly:

1. Fork (make your own copy of) the repo and clone it locally.
2. In your terminal, `git remote add upstream <git-clone-link>`.
   - `upstream` means the actual repo and not your fork/copy.
   - `origin` refers to your fork.
   - run command `git remote -vv` and check if the output looks like this:
   ```
   origin  https://github.com/HelenGezahegn/ElectionsApp.git (fetch)
   origin  https://github.com/HelenGezahegn/ElectionsApp.git (push)
   upstream        https://github.com/adas-team/ElectionsApp.git (fetch)
   upstream        https://github.com/adas-team/ElectionsApp.git (push)
   ```
   - Now, whenever you push a new branch, it will be sent to your fork. By doing this, all your work/changes/branches will be contained wihin your fork.
   - Once you push a new branch and you're ready to make a **P**ull **R**equest (PR), go the upstream repo and it'll prompt you to create it. From there, you can request admins of the repo to review your PR.

### Local Environment Setup

1. Run `npm install` to obtain the needed libraries (which will be located within the `node_modules` folder).
2. Run `npm start` to start the local server. Navigate to `localhost:3000` to view the app live as you make changes.

### UI Contributions

You'll notice that all our UI components have been made with `Semantic UI React`. Depending on what you want to add to the UI, you can visit the official docs linked below.

> <a href="https://react.semantic-ui.com/"> Official Semantic UI React Docs </a>

### Firebase

#### Update Database Rules

Overall, the `database.rules.json` controls who can read/write/access the realtime database. The way that your data can be accessed is configurable and can be stated in that file (e.g. "indexOn").

After you've made your changes to `database.rules.json`:

- Navigate to the JSON's path.
- run `firebase deploy --only database` to push the changes up.

**TODO**

- Terminology
- To add entries
- To delete entries
- How to verify on Firebase console
- To update mailing list -- reference INSTRUCTIONS.md in `src/firebase/mailingList`
- We don't have login/signup authentication at this time and allow users to write directly into the database. This was defined in the `database.rules.json` file.
- For firebase, it is already have the firebase config file. If you wanna use it, put "import Firebase, { FirebaseContext } from './components/Firebase';" in your target js file.
