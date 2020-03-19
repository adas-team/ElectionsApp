# Instructions

### Tutorial

This functionality was added following a tutorial I found online that has been linked below. Feel free to consult it for more details.

> <a href="https://medium.com/@impaachu/how-to-upload-data-to-firebase-firestore-cloud-database-63543d7b34c5"> How to Upload Data to Firebase Firestore Cloud Database </a>

<hr>

### To Update Mailing List

#### Steps

1. Export mailing list from Ada's Team google group.
   - <a href=""> Ada's Team Google Group. </a>
     - Don't worry, the permissions of the google group make it so the link cannot be accessed by the public. You must be signed into Ada's Team google account to see the members.
   - Note: It will be in a csv format.
2. <a href="https://www.csvjson.com/csv2json"> Convert the csv file to JSON </a>
     - ***Copy and paste*** the csv file! Don't import the file as it doesn't read all the fields correctly.
3. Update `mailingList.json` 
    - If having trouble finding it, it's in `src/firebase/mailingList/mailingList.json`
    - Replace the file's content with the converted JSON from step 2.
   - Delete the first element in the JSON that look like this (otherwise, node will spit out a parsing error):
   ```json
   {
       "Members for group Ada's Team": "Email address",
        "": "Nickname",
        "__1": "Group status",
        "__2": "Email status",
        "__3": "Email preference",
        "__4": "Posting permissions",
        "__5": "Join year",
        "__6": "Join month",
        "__7": "Join day",
        "__8": "Join hour",
        "__9": "Join minute",
        "__10": "Join second",
        "__11": "Time zone"
   }
   ```
   - In your text editor, change all the `"_X":` JSON keys to their actual names. 
        - For instance, the key `"":` should be `"Nickname"` and the key `"_1":` should be `"Group Status"`. 
    - In the end, it should look like this for each element. 
    ```json 
    {
        "Email": "example@ualberta.ca",
        "Nickname": "FirstName LastName",
        "Group status": "member",
        "Email status": "",
        "Email preference": "email",
        "Posting permissions": "not allowed",
        "Join year": 2018,
        "Join month": 4,
        "Join day": 10,
        "Join hour": 18,
        "Join minute": 54,
        "Join second": 7,
        "Time zone": "Mountain Daylight Time"
    }
    ```

4. Open up your terminal and navigate to `src/firebase/mailingList`
    - run `node importToFirebase.js`
    - You should see a bunch of `Document X successfully written!` lines outputted.
5. You're succesfully updated the mailing list.
    - The changes can be seen online in the Firebase console in `Database > Cloud Firestore > mailingList` collection.
