# Instructions

- [Instructions](#instructions)
  - [Tutorial](#tutorial)
  - [Update Mailing List](#update-mailing-list)
    - [Steps](#steps)
  - [Update Candidate List](#update-candidate-list)
    - [Steps](#steps-1)

### Tutorial

This functionality was added following a tutorial I found online that has been linked below. Feel free to consult it for more details.

> <a href="https://medium.com/@impaachu/how-to-upload-data-to-firebase-firestore-cloud-database-63543d7b34c5"> How to Upload Data to Firebase Firestore Cloud Database </a>

<hr>

### Update Rubric Members

#### Important notes regarding Voter Eligibility
> **Important:** 
> - As the 2025-2026 Constitution changed voting elibility criteria, one of the changes includes eligible voters need to be registered as a Rubric member for the current Academic Year (or previous Academic Year if in a by-election). 
> - Rubric Members must re-join on an annual basis. 
> - We no longer use the mailing list as part of our voter eligiblity. 
> - **Any references to "mailing list" are legacy and now refer to Rubric Members.**

> **Important:** The 2025-2026 Constitution also introduced additional voting criteria - eligible voters need to have completed <b>at least one</b> of the following in the current Academic Year:
> <ol type="a">
> <li>Attended at least 2 events hosted by Ada's Team</li>
> <li>Volunteered with Ada's Team (e.g. tutor, mentor)</li>
> <li>Participated in an Ada's Team initiative (e.g. conference, mentorship)</li>
> <br>
> Please note that the Elections App does not validate for this as of writing - the only validation done is if they're a Rubric member. Voters declare if they have completed one of the above but ballots should be validated by the CRO and a DRO, after the voting is complete and before counting votes.

#### Steps

1. Export member list from Ada's Team Rubric account.
   - <a href="https://portal.hellorubric.com/memberships_list"> Ada's Team Rubric Members</a>
   - Select the purple download button above the table.
2. Ensure you have filtered the correct set of members before downloading. Perform steps 3-7 for each csv file you download.
   - For the regular/annual election: Above the table of members, ensure that "Active" members are selected. In the `Membership Type` column, you should see `Ada's Team Member <current school year>`. You will download one file.
   - For a Spring/Summer By-Election: You will download two files.
      - One for the "Active" members
      - One for the "Expired" members, filtering the `Membership Type` column for the previous school year
      - Example: In a May 2026 by-election, you would download the "Active" members (`Membership Type` = "Ada's Team Member 26/27") and download "Expired" members that have `Membership Type` = "Ada's Team Member 25/26" (for previous school year).
3. Filter the CSV into a JSON that only contains the name and email.
   - Be sure to be in the `src/firebase/rubricMemberList` directory.
   - Run `python3 jsonFilter.py`
   - The outputted file will be called `filteredRubricMemberList.json`
   - Note: The Election Committee decides when the cut-off for valid membership is, so **make sure you have filtered the csv file to only include members that have registered in the specified timeframe**. You can use the `Purchased` column to filter out members who have joined past the deadline.
4. Add `serviceAccountKey.json` to `src/firebase`.
   - This file contains confidential information that allows you to write to the database. **Under no circumstances should this be publicly available**. It is added to the `.gitignore` file for that reason, so be sure to never push it.
   - To get the file:
     - Navigate to the Firebase console
     - Go to the elections app
     - Go to the "Project settings" by clicking on the gear icon next to "Project Overview" in the left menu.
     - Go to "Service accounts" and select "Firebase Admin SDK".
     - Click on "Generate new private key" > "Generate key"
     - The key will be downloaded. Add the content of that file to a file called `serviceAccountKey.json` in `src/firebase`.
   - An example file with dummy data can be found in `src/firebase/serviceAccountKey_Example.json`
5. Delete existing voters in the Firebase console
   - As per constitution [changes](#important-notes-regarding-voter-eligibility), members must renew their Rubric membership with our group every year - hence the need to delete previous voters.
   - Delete the voters in the Firebase console in `Database > Cloud Firestore > filteredRubricMemberList` collection.
6. Open up your terminal and navigate to `src/firebase`
   - run `node importToFirestore.js mail`
   - You should see a bunch of `Document <email> successfully written!` lines outputted.
7. You've successfully updated the member list.
   - The changes can be seen online in the Firebase console in `Database > Cloud Firestore > filteredRubricMemberList` collection.

### Update Candidate List

#### Steps

1. Manually add the candidates to the `candidateList.json` file
2. Navigate to `src/firebase` in your terminal
   - run `node importToFirestore.js candidates`
   - You should see a bunch of `Document <position> successfully written!` lines outputted.
3. You've succesfully updated the candidate list.
   - The changes can be seen online in the Firebase console in `Database > Cloud Firestore > candidateList` collection.

### Update Winners List

#### Steps

1. Manually add the candidates to the `winnersList.json` file
2. Navigate to `src/firebase` in your terminal
   - run `node importToFirestore.js winners`
   - You should see a bunch of `Document <position> successfully written!` lines outputted.
3. You've succesfully updated the winners list.
   - The changes can be seen online in the Firebase console in `Database > Cloud Firestore > winners` collection.
