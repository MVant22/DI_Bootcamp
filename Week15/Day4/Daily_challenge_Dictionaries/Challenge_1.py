user = input("Enter word : ")

char_dict = {}

for index, char in enumerate(user):
    if char in char_dict:
        char_dict[char].append(index)
    else:
        char_dict[char] = [index]


print(char_dict)