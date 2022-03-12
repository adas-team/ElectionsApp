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
2. Filter the CSV into a JSON that only contains the name and email.
   - Be sure to be in the `src/firebase/mailingList` directory.
   - Run `python3 jsonFilter.py`
   - The outputted file will be called `filteredMailingList.json`
   - Note: As per constitution criteria, this should only include members who joined 2 weeks before the election date. The script filters out anyone who joined after 14 days, so **make sure to run it on election day, or otherwise change the `bufferPeriod` in `jsonFilter.py`**
3. Add `serviceAccountKey.json` to `src/firebase`.
   - This file contains confidential information that allows you to write to the database. **Under no circumstances should this be publicly available**. It is added to the `.gitignore` file for that reason, so be sure to never push it.
   - To get the file:
     - Navigate to the Firebase console
     - Go to the elections app
     - Go to the "Project settings" by clicking on the gear icon next to "Project Overview" in the left menu.
     - Go to "Service accounts" and select "Firebase Admin SDK".
     - Click on "Generate new private key" > "Generate key"
     - The key will be downloaded. Add the content of that file to a file called `serviceAccountKey.json` in `src/firebase`.
   - An example file with dummy data can be found in `src/firebase/serviceAccountKey_Example.json`
4. Open up your terminal and navigate to `src/firebase`
   - run `node importToFirebase.js mail`
   - You should see a bunch of `Document <email> successfully written!` lines outputted.
5. You've successfully updated the mailing list.
   - The changes can be seen online in the Firebase console in `Database > Cloud Firestore > filteredMailingList` collection.

### Update Candidate List

#### Steps

1. Manually add the candidates to the `candidateList.json` file
2. Navigate to `src/firebase` in your terminal
   - run `node importToFirebase.js candidate`
   - You should see a bunch of `Document <position> successfully written!` lines outputted.
3. You've succesfully updated the mailing list.
   - The changes can be seen online in the Firebase console in `Database > Cloud Firestore > candidateList` collection.
