a_list = [3, 47, 99, -80, 22, 97, 54, -23, 5, 7] 
b_list = [44, 91, 8, 24, -6, 0, 56, 8, 100, 2] 
c_list = [3, 21, 76, 53, 9, -82, -3, 49, 1, 76] 
d_list = [18, 19, 2, 56, 33, 17, 41, -63, -82, 1]

# Print list
print("Print List")
print(a_list)
print(b_list)
print(c_list)
print(d_list)

print(" ")

# Print in descending order
print("Print in descending order")
a_list.sort(reverse=True)
print(a_list)
b_list.sort(reverse=True)
print(b_list)
c_list.sort(reverse=True)
print(c_list)
d_list.sort(reverse=True)
print(d_list)

print(" ")

# Sum of the list
print("Print sum of list")
print(sum(a_list))
print(sum(b_list))
print(sum(c_list))
print(sum(d_list))

print(" ")
# Print first and last element
print("Print first and last element")
print(a_list[0])
print(a_list[-1])
print(b_list[0])
print(b_list[-1])
print(c_list[0])
print(c_list[-1])
print(d_list[0])
print(d_list[-1])

print("")

# list with greater than 50
print("list with greater than ")
a_greater_list = []
for x in a_list:
    if x > 50:
        a_greater_list.append(x)
print(a_greater_list)

b_greater_list = []
for x in b_list:
    if x > 50:
        b_greater_list.append(x)
print(b_greater_list)

c_greater_list = []
for x in c_list:
    if x > 50:
        c_greater_list.append(x)
print(c_greater_list)

d_greater_list = []
for x in d_list:
    if x > 50:
        d_greater_list.append(x)
print(d_greater_list)

print("")

# list with smaller than 10
print("list with smaller than 10")
a_smaller_list = []
for x in a_list:
    if x < 10:
        a_smaller_list.append(x)
print(a_smaller_list)

b_smaller_list = []
for x in b_list:
    if x < 10:
        b_smaller_list.append(x)
print(b_smaller_list)

c_smaller_list = []
for x in c_list:
    if x < 10:
        c_smaller_list.append(x)
print(c_smaller_list)

d_smaller_list = []
for x in d_list:
    if x < 10:
        d_smaller_list.append(x)
print(d_smaller_list)

print("")

# square numbers
print('square numbers')
a_square_list = [x**2 for x in a_list]
print(a_square_list)

b_square_list = [x**2 for x in b_list]
print(b_square_list)

c_square_list = [x**2 for x in c_list]
print(c_square_list)

d_square_list = [x**2 for x in d_list]
print(d_square_list)

print('Without duplicates')
a_without_list = list(set(a_list))
b_without_list = list(set(b_list))
c_without_list = list(set(c_list))
d_without_list = list(set(d_list))

a_length_list = len(a_without_list)
b_length_list = len(b_without_list)
c_length_list = len(c_without_list)
d_length_list = len(d_without_list)

# Print length
print(a_length_list)
print(b_length_list)
print(c_length_list)
print(d_length_list)

print(a_without_list)
print(b_without_list)
print(c_without_list)
print(d_without_list)

print("")
# Average list
print("Average of the list")

a_average_list = sum(a_list) / len(a_list)
b_average_list = sum(b_list) / len(b_list)
c_average_list = sum(c_list) / len(c_list)
d_average_list = sum(d_list) / len(d_list)

print(a_average_list)
print(b_average_list)
print(c_average_list)
print(d_average_list)

print("")

print("max in list")
a_largest = max(a_list)
b_largest = max(b_list)
c_largest = max(c_list)
d_largest = max(d_list)

print(a_largest)
print(b_largest)
print(c_largest)
print(d_largest)

print("")

#Bonus 1 - find sum, average, largest and smallest without built-in functions
print("find sum, average, largest and smallest without built-in functions")
sum = 0
avg = 0
largest = a_list[0]
smallest = a_list[0]
count = 0

for x in a_list:
    sum += x
    if x > largest:
        largest = x
    if x < smallest:
        smallest = x
    count += 1
    
avg = avg / count

print(count)
print(avg)
print(smallest)
print(largest)
print(sum)

print("")

# Bonus2 - user input 10 numbers -100 to 100
user_list = []

for i in range(1, 11):
    user = int(input("Enter a number between -100 to 100: "))
    
    if (user < -100 or user > 100):
        print("Enter a number between -100 to 100 ")
    else:
        user_list.append(user)

print(user_list)
    
    
# Bonus 3 - 10 random number to add into list

import random

random_numbers_list = []

for i in range(1, 11):
    user = random.randint(-100, 100)
    
    random_numbers_list.append(user)

print(random_numbers_list)

# Bonus 4 - X number of numbers

random_numbers_x_number_list = []

for i in range (1, random.randint(1,50)):
    
    generate_numbers = random.randint(-100, 100)
    
    if generate_numbers >= 50:
        random_numbers_x_number_list.append(generate_numbers)
    else:
        print("Smaller than 50")
