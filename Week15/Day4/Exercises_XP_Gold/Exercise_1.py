birthdays = {
    'mesonne' : "2000/4/22",
    'rachel' : "2006/1/13",
    'stephanie' : "1978/11/28",
    'gerardo' : "1973/1/18",
    "ethan": "1998/02/28"
}

print("Welcome to the list of birthdays")

for keys in birthdays:
    print(f" {keys}")


adding = True
while adding:
    want_to_add_user = input("want to add person into list? 'Yes' or 'No' ").lower()

    if want_to_add_user == 'yes':
        person_name = input("Enter person's name: ")
        if person_name in birthdays:
            print(f"Person name already in the list, {birthdays[person_name]}")
        else:
            person_birthday = input("Enter person birthday's in format 'YYYY/MM/DD' :")
            birthdays[person_name] = person_birthday
    else:
        adding = False
    
name = input("Enter a person`s name: ").lower()

if name in birthdays:
    print(f"{name}'s birthday is on {birthdays[name]}")
else:
    print(f'Sorry this person name {name} not in list')


