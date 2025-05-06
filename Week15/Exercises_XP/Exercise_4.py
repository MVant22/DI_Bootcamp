height_inches = int(input("Enter your height in inches: "))

height_cm = height_inches * 2.54

if height_cm > 145:
    print("Tall enough to ride")
else:
    print("Need to grow some more to ride")