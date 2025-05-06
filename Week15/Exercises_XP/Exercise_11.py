# ticket = 0
# to_continue = True

# while to_continue:
    
#     person_age = int(input("Enter age of person: "))

#     if person_age < 3:
#         ticket += 0
#     elif person_age < 12:
#         ticket += 10
#     else:
#         ticket += 15
    
#     answer = input("Want to add more age: ").lower()
    
#     if answer == "no":
#         to_continue = False

# print(f"The total tickets price is {ticket}")

names = ["Alica", "Beth", "Tommy", "Lucy", "Trent"]
permitted = []
for name in names:
    age = int(input(f"Enter your age {name}: "))
    
    if (16 <= age <= 21):
        permitted.append(name)
    
print(permitted)
