family = {}

want_to_add = True

while want_to_add:
    name = input("Enter name of the person: ")
    age = int(input("Enter age of the person: "))
    
    family[name] = age
    
    decision = input("want to add more people? 'Yes' or 'No' ").lower()
    if decision == "no":
        want_to_add = False
    else:
        want_to_add = True
        
family_cost = {}

for member, age in family.items():
    if age < 3:
        ticket = 0
    elif age < 12:
        ticket = 10
    else:
        ticket = 15
    family_cost[member] = ticket
    print(f"{member.capitalize()} has to pay ${ticket}")

total = sum(family_cost.values())
print(f"\nTotal cost for the family: ${total}")
    


