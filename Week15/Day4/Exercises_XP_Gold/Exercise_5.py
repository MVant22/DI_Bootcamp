def get_age(year, month, day):
    current_year = 2025
    current_month = 5
    current_day = 12
    
    age = current_year - year
    
    if current_month < month or (current_month == month and current_day < day):
        age -= 1
        
    return age

def can_retire(gender, date_of_birth):
    
    year, month, day = map(int, date_of_birth.split('/'))
    age = get_age(year, month, day)
    
    if gender.lower() == 'male' and age >= 67:
        return True
    elif gender.lower() == 'female' and age >= 62:
        return True
    else:
        return False
    
gender = input("Enter gender 'male' or 'female' : ")
date_of_birth = input("Enter your date of birth in format yyyy/mm/dd: ")

if can_retire(gender,date_of_birth):
    print("You can retire")
else:
    print("You cannot retire")