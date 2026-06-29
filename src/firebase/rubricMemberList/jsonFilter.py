import json, csv
from datetime import datetime

rubricMemberList= {}
filteredData = [rubricMemberList]

print(
    """- Go to: https://portal.hellorubric.com/memberships_list
- Download the member list files as specified in INSTRUCTIONS.md
- It will download a csv file that will be of interest.
- Copy that file's location and paste it below.
- If you need to download more than one csv file, repeat this process for the other csv files.
- Note: This python script does not filter people who have joined within a specific timeframe. Please check and filter the csv file manually using the `Purchased` column.
    """
)

csvFilePath = input("Subscribed Contact CSV File Location: ")

print("Processing file...")

with open(csvFilePath, encoding='utf-8') as f:
    source_data = csv.DictReader(f)

    """ Convert each entry in JSON to:  
        "example@ualberta.ca": {
            "Email": "example@ualberta.ca",
            "Nickname": "FirstName LastName",
            "SubscribeDate": "YYYY-MM-DD HH:MM:SS"
        }
    """
    for entry in source_data:
        currentMember = dict()
        for (key, value) in entry.items():
            if key in ('Membership Email Address', 'Full Name'):
                currentMember[key] = value
        print(currentMember["Membership Email Address"])
        rubricMemberList[currentMember["Membership Email Address"]] = {
            "Email": currentMember["Membership Email Address"],
            "Nickname": currentMember["Full Name"],
        }
    

with open(r'./filteredRubricMemberList.json','w') as jsonFile:
    json.dump(filteredData, jsonFile)

print("\n\nSubscribed contacts successfully updated to ./filteredRubricMemberList.json")