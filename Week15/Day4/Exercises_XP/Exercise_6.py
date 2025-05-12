import random

# 1
def get_random_temp(season):
    if season.lower() == "winter":
        return random.uniform(-10.0, 16.0)
    elif season.lower() == "spring":
        return random.uniform(17.0, 23.0)
    elif season.lower() == "summer":
        return random.uniform(24.0, 32.0)
    elif season.lower() == "fall" or season.lower() == "autumn":
        return random.uniform(10.0, 20.0)
    else:
        return None

# 2
def main():
    
    season = input("Type a season - 'summer', ''fall', 'winter', 'spring' : ").lower()
    
    temperature = get_random_temp(season)
    
    if temperature is None:
        print("Invalid season")
        return
    
    print(f"The temperature right now is {temperature}")
    # 3
    if temperature < 0:
        print("Brrr, that’s freezing! Wear some extra layers today.")
    elif 0 <= temperature <= 16:
        print("Quite chilly! Don’t forget your coat.")
    elif 17 <= temperature <= 23:
        print("Pleasant weather.")
    elif 24 <= temperature <= 32:
        print("Quite warm, stay hydrated!")
    elif 33 <= temperature <= 40:
        print("Very hot! Use sunscreen.")
    else:
        print("Extreme weather! Be cautious.")

main()