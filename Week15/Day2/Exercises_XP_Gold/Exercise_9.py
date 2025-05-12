import random

guessing = True

while guessing:
    number = int(input("Enter a number between 1 to 9: "))
    
    if (number < 1 or number > 9):
        print("Enter number in range 1 to 9")
    else:
        random_number = random.randint(1, 9)
        
        if (number == random_number):
            print("Winner")
        else:
            print("Better luck")
        print(random_number)
            
    decison = input("Wnat to play agin: 'Yes' or 'No' ").lower()
        
    if decison == "no":
        guessing = False
    

