<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
***
***
***
*** To avoid retyping too much info. Do a search and replace for the following:
*** github_username, repo_name, twitter_handle, email, project_title, project_description
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/github_username/repo_name">
    <img src="src/assets/AdaBotHead.png" alt="Logo" width="95" height="80">
  </a>

  <h3 align="center">Ada's Elections</h3>

  <p align="center">
    Automating the election process every year.
    <br />
    <a href="https://github.com/adas-team/ElectionsApp/wiki"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://adas-elections.netlify.app/">View Demo</a>
    ·
    <a href="https://github.com/adas-team/ElectionsApp/issues">Report Bug</a>
    ·
    <a href="https://github.com/adas-team/ElectionsApp/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

<img src="https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fuser-images.githubusercontent.com%2F23146829%2F77395696-c1e08f80-6d67-11ea-843e-10e8043b5f9e.png" alt="A screenshot of the election app's home page"/>

A web application to aid in Ada's Team annual election of the executive team.

- Minimum Viable Product (MVP) is to automate the voting process and block any ineligible voters/votes.
- Deployed Website: https://elections.adasteam.ca/

### Built With

- [React](https://reactjs.org/)
- [Firebase](https://firebase.google.com/?gclid=Cj0KCQiAv6yCBhCLARIsABqJTjbqW40uLU-mv-owpsKcqhDcsqg3pzoTJX-PALz-rRhoFrhvoQm2BiUaAmWrEALw_wcB&gclsrc=aw.ds)
- [Semantic-UI](https://semantic-ui.com/)
- [Python](https://www.python.org/)

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/adas-team/ElectionsApp.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```

<!-- ROADMAP -->

## Roadmap

See the [open issues](https://github.com/adas-team/ElectionsApp/issues) for a list of proposed features (and known issues).

<!-- ELECTIONS UPDATE INSTRUCTIONS -->

## Election Update Instructions

These instructions allow you to upload the candidate and voter information to the database, as well as upload the candidate photos.

1. Follow the instructions on [src/firebase/INSTRUCTIONS.md](https://github.com/adas-team/ElectionsApp/blob/master/src/firebase/INSTRUCTIONS.md) to update the database with the candidate and voter information.
2. Upload the candidate photos to [public/candidatePhotos](https://github.com/adas-team/ElectionsApp/blob/master/public/candidatePhotos)
3. Update the `candidates` object in [src/components/constants.js](https://github.com/adas-team/ElectionsApp/blob/master/src/components/constants.js)
4. Build and deploy to Netlify using CLI

   a. Install Netlify CLI, if not already installed:

   ```sh
   npm install netlify-cli -g
   ```

   b. Login to Ada's Team netlify (info in Account Information), if not already logged in

   ```sh
   netlify login # alternatively, use `netlify switch` if signed into another account
   ```

   c. Build the project

   ```sh
   npm run build
   ```

   d. Deploy the project

   - Use `build` as the publishing directory
   - If it asks for a site, use adas-team-elections.netlify.app

   ```sh
   netlify deploy --prod
   ```

<!-- CONTRIBUTING -->

## Contributing

Please reference the [`CONTRIBUTING.md`](https://github.com/adas-team/ElectionsApp/blob/master/.github/docs/CONTRIBUTING.md) file.

<!-- LICENSE -->

## License

Distributed under the GNU General Public License v3.0 license. See [`LICENSE`](https://github.com/adas-team/ElectionsApp/blob/master/LICENSE) for more information.

<!-- CONTACT -->

## Contact

Ada's Team - [@adas_team](https://www.instagram.com/adas_team/) - adasteam@ualberta.ca

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

- [Helen Gezahegn](https://www.linkedin.com/in/helengezahegn/)
- [Xinyue (Rex) Xiang](https://www.linkedin.com/in/xinyuexiang/)
- [Katherine Patenio](https://www.linkedin.com/in/katherine-patenio/)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/adas-team/ElectionsApp.svg?style=for-the-badge
[contributors-url]: https://github.com/adas-team/ElectionsApp/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/adas-team/ElectionsApp.svg?style=for-the-badge
[forks-url]: https://github.com/adas-team/ElectionsApp/network/members
[stars-shield]: https://img.shields.io/github/stars/adas-team/ElectionsApp.svg?style=for-the-badge
[stars-url]: https://github.com/adas-team/ElectionsApp/stargazers
[issues-shield]: https://img.shields.io/github/issues/adas-team/ElectionsApp.svg?style=for-the-badge
[issues-url]: https://github.com/github_username/repo/issues
[license-shield]: https://img.shields.io/github/license/adas-team/ElectionsApp.svg?style=for-the-badge
[license-url]: https://github.com/github_username/repo/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/company/adas-team/
