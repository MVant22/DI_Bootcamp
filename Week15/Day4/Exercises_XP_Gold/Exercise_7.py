import random

def throw_dice():
    number = random.randint(1, 6)
    return number

def throw_until_doubles():
    nofthrows = 0
    Not_double_dice = True
    
    while Not_double_dice:
        dice1 = throw_dice()
        dice2 = throw_dice()
        nofthrows += 1
        if dice1 == dice2:
            print(f"Number of throws {nofthrows}")
            Not_double_dice = False
            print(f"Double dice, {dice1} matches {dice2}")
            return nofthrows
        
        
def main():
    results = {}
    
    count = 0
    while count <= 100:
        throws_needed = throw_until_doubles()
        results[f"results"]
        count += 1
    
    print("Results (throws needed until doubles): ")
    print(results)
    
    total_throws = sum(results)
    average_throws = sum(results) / len(results)
    print(f"total throws {total_throws}")
    print(f"Average throws {average_throws}")
    
    
    
main()
    
    
