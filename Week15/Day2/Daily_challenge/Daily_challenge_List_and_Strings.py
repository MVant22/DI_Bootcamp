# Challenge 1 - Multiples of a number

number = int(input("Enter a number: "))
length = int(input("Enter a length: "))

multiple = []

for num in range(0, length):
    result = number * num
    multiple.append(result)

print(multiple)
    
    
# Challenge 2 - Remove Consective Duplicate Letters

user_string = input("Enter a word: ")

result = ""
previous_char = ""

for char in user_string:
    if char != previous_char:
        result += char
    previous_char = char

print(result)