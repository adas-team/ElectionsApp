#Ref:
#https://stackoverflow.com/questions/27189892/how-to-filter-json-array-in-python
#https://www.programiz.com/python-programming/json
#https://thispointer.com/python-filter-a-dictionary-by-conditions-on-keys-or-values/


import json

# open the existing json file and it is the list format in python
with open('./mailingList.json') as f:
    source_data = json.load(f)
# for testing: print(source_data[0])

# init a list for new filtered data\
mailingList= {}
filteredData = [mailingList]

# Every one part like source_data[0] in the whole list is a dict
#{'Email': 'aaali@ualberta.ca', 'Nickname': 'Asma Omar', 'Group status': 'member', 'Email status': '', 'Email preference': 'email', 'Posting permissions': 'not allowed', 'Join year': 2018, 'Join month': 4, 'Join day': 10, 'Join hour': 18, 'Join minute': 54, 'Join second': 7, 'Time zone': 'Mountain Daylight Time'}

# Using for loop to go through every part
# Filter the dict one by one
for i in source_data:
    currentMember = dict()
    for (key, value) in i.items():
       # Check if key is even then add pair to new dictionary
       if key == 'Email' or key == 'Nickname':
        currentMember[key] = value
    emailKey = currentMember["Email"]
    mailingList[emailKey] = currentMember

""" Now, each entry in JSON looks like:  
    "example@ualberta.ca": {
        "Email": "example@ualberta.ca",
        "Nickname": "FirstName LastName"
    }
"""

with open(r'./filteredMailingList.json','w') as jsonFile:
    json.dump(filteredData, jsonFile)