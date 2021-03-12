import json

mailingList= {}
filteredData = [mailingList]

with open('./mailingList.json') as f:
    source_data = json.load(f)

""" Convert each entry in JSON to:  
    "example@ualberta.ca": {
        "Email": "example@ualberta.ca",
        "Nickname": "FirstName LastName"
    }
"""
for i in source_data:
    currentMember = dict()
    for (key, value) in i.items():
       if key == 'Email Address' or key == 'First Name' or key == 'Last Name':
        currentMember[key] = value
    emailKey = currentMember["Email Address"]
    nicknameKey = currentMember["First Name"] + " " + currentMember["Last Name"]
    mailingList[emailKey] = {"Email": emailKey, "Nickname": nicknameKey}
    

with open(r'./filteredMailingList.json','w') as jsonFile:
    json.dump(filteredData, jsonFile)