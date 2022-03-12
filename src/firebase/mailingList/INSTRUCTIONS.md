# Instructions

- [Tutorial](#Tutorial)
- [Update Mailing List](#Update-Mailing-List)
- [Update Candidate List](#Update-Candidates-List)

### Tutorial

This functionality was added following a tutorial I found online that has been linked below. Feel free to consult it for more details.

> <a href="https://medium.com/@impaachu/how-to-upload-data-to-firebase-firestore-cloud-database-63543d7b34c5"> How to Upload Data to Firebase Firestore Cloud Database </a>

<hr>

### Update Mailing List

#### Steps

1. Export mailing list from Ada's Team MailChimp mailing list.
   - <a href="https://us18.admin.mailchimp.com/lists/members/"> Ada's Team MailChimp contacts</a>
   - Select "Export contacts"
   - Note: It will be a zip file that has multiple csv files. The one of interest is prefixed `subscribed_members_export`. Copy that file's location.
2. run `python3 jsonFilter.py` to filter the JSON to only contain the name and email.
   - The outputted file will be called `filteredMailingList.json`
3. Open up your terminal and navigate to `src/firebase`
   - run `node importToFirebase.js mail`
   - You should see a bunch of `Document <email> successfully written!` lines outputted.
4. You've successfully updated the mailing list.
   - The changes can be seen online in the Firebase console in `Database > Cloud Firestore > filteredMailingList` collection.

### Update Candidate List

#### Steps

1. Manually add the candidates to the `candidateList.json` file
2. Navigate to `src/firebase` in your terminal
   - run `node importToFirebase.js candidate`
   - You should see a bunch of `Document <position> successfully written!` lines outputted.
3. You've succesfully updated the mailing list.
   - The changes can be seen online in the Firebase console in `Database > Cloud Firestore > candidateList` collection.
