# Copy the following string into your code: "Volkswagen, Toyota, Ford Motor, Honda, Chevrolet".
new_string = "Volkswagen, Toyota, Ford Motor, Honda, Chevrolet"

# 2 Convert it into a list using Python (don’t do it by hand!).
string_list = new_string.split()

# 3 Print out a message saying how many manufacturers/companies are in the list.
print(f"Number of manufacturers are : {len(string_list)}")

# 4 Print the list of manufacturers in reverse/descending order (Z-A).
print(f"The reverse order of the list : {list(reversed(string_list))}")

# 5 Using loops or list comprehension: Find out how many manufacturers’ names have the letter ‘o’ in them.
letter_o = 'o'
number_of_o = 0

for element in string_list:
    if letter_o in element.lower():
        number_of_o += element.count(letter_o)

print(f"The number of o in words {number_of_o}")

# Find out how many manufacturers’ names do not have the letter ‘i’ in them.
letter_to_check = 'i'
count = 0

for name in string_list:
    if letter_to_check not in name.lower():
        count += 1
    
print(f"The number of name do not have i {count}")

# 6 Bonus: There are a few duplicates in this list
# Print out the companies without duplicates, in a comma-separated string with no line-breaks
new_list = ["Honda","Volkswagen", "Toyota", "Ford Motor", "Honda", "Chevrolet", "Toyota"]
new_list = list(set(new_list))

# also print out a message saying how many companies are now in the list.
print(f"The number of companies in the list is : {len(new_list)}")

# 7 Print out the list of manufacturers in ascending order (A-Z), but reverse the letters of each manufacturer’s name.

reversed_names = [name[::-1] for name in sorted(new_list)]

for manufacturer in reversed_names:
    print(manufacturer)

