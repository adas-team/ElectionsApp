import json, csv
from datetime import datetime

bufferPeriod = 14 # number of days required to be subscribed
now = datetime.now()
mailingList= {}
filteredData = [mailingList]

def validSubscribePeriod(optin_string):
    optin_date = datetime.strptime(optin_string, '%Y-%m-%d %H:%M:%S')
    return (now - optin_date).days >= bufferPeriod

print(
    """- Go to: https://us18.admin.mailchimp.com/lists/members/
- Select "Export contacts"
- It will download a zip file that has multiple csv files. The one of interest is prefixed `subscribed_members_export`.
- Copy that file's location and paste it below.
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
            if key in ('Email Address', 'First Name', 'Last Name', 'OPTIN_TIME'):
                currentMember[key] = value
        if validSubscribePeriod(currentMember["OPTIN_TIME"]):
            # Verify that the opt-in time is before the grace period
            print(currentMember["Email Address"])
            mailingList[currentMember["Email Address"]] = {
                "Email": currentMember["Email Address"],
                "Nickname": currentMember["First Name"] + " " + currentMember["Last Name"],
            }
    

with open(r'./filteredMailingList.json','w') as jsonFile:
    json.dump(filteredData, jsonFile)

print("\n\nSubscribed contacts successfully updated to ./filteredMailingList.json")