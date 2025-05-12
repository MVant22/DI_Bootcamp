import math

C = 50
H = 30

D = input("Enter a comma-separated string numbers: ")
d_list = [int(num) for num in D.split(",")]

Q = [round(math.sqrt((2 * C * d) / H)) for d in d_list]

print(Q)