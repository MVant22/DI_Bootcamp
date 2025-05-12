def get_full_name(first_name, middle_name,  last_name):
    
    # first_name = input("Enter your first name: ")
    # last_name = input("Enter your last name: ")
    # middle_name = input("Enter your middle name: ")
    
    if middle_name == "" :
        return f"{first_name} {middle_name} {last_name}"
    else:
        return f"{first_name} {last_name}"
    
print(get_full_name(first_name="John", middle_name="Jack", last_name="Smith"))