#Ref:
#https://stackoverflow.com/questions/27189892/how-to-filter-json-array-in-python
#https://www.programiz.com/python-programming/json
#https://thispointer.com/python-filter-a-dictionary-by-conditions-on-keys-or-values/


import json

#open the exit json file and it is the list format in python
with open('./mailingList.json') as f:
    source_data = json.load(f)
#print(source_data[0])

#init a list for new filtered data
filtered_data = []

#Every one part like source_data[0] in the whole list is a dict
#{'Email': 'aaali@ualberta.ca', 'Nickname': 'Asma Omar', 'Group status': 'member', 'Email status': '', 'Email preference': 'email', 'Posting permissions': 'not allowed', 'Join year': 2018, 'Join month': 4, 'Join day': 10, 'Join hour': 18, 'Join minute': 54, 'Join second': 7, 'Time zone': 'Mountain Daylight Time'}

#Using for loop to go through every part
#Filter the dict one by one

for i in source_data:
#every item is one dict
    newDict = dict()
    for (key, value) in i.items():
       # Check if key is even then add pair to new dictionary
       #print(key)
       #print(value)
       if key == 'Email' or key == 'Nickname':
        newDict[key] = value
    print(newDict)
    filtered_data.append(newDict)
print(filtered_data)

#aminerFile = open(r'./mailingList.json','r')
with open(r'./filtered_mailList.json','w') as jsonFile:
    json.dump(filtered_data, jsonFile)

