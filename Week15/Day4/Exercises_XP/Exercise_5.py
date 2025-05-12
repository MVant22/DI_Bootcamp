import random

def generated_random(num1):
    num2 = random.randint(1,100)
    print(f"num1: {num1}, num2: {num2}")
    
    if num1 == num2:
        print("Sucess")
    else:
        print("fail")

generated_random(num1 = random.randint(1, 100))