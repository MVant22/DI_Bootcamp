count = 0
names = []

while count < 5:
    user = input("Enter a name: ")
    names.append(user)
    count += 1
    
letter = input("Enter a letter: ")

found = False
for i, name in enumerate(names):
    if letter.lower() in name.lower():  # case-insensitive check
        print(f"The letter '{letter}' is found in '{name}' at index {i}")
        found = True
        break

if not found:
    print(f"The letter '{letter}' is not found in any names")
    
print(names)    