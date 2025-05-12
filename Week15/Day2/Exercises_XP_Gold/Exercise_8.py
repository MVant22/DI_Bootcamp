input_values = input("Enter a sequence of coma_separated numbers: ")

numbers_list = [int(num) for num in input_values.split(",")]

numbers_tuple = tuple(numbers_list)

print("List:", numbers_list)
print("Tuple:", numbers_tuple)