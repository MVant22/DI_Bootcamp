from datetime import datetime

birthday_input = int(input("Enter your birth year: "))

age = 2025 - birthday_input

candle_count = age % 10

print(f"         ___{candle_count}___")
print("      |:H:a:p:p:y:|")
print("    __|___________|__")
print("   |^^^^^^^^^^^^^^^^^|")
print("   |:B:i:r:t:h:d:a:y:|")
print("   |                 |")
print("   ~~~~~~~~~~~~~~~~~~~")


