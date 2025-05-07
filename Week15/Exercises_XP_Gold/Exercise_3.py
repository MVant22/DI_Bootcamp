names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']

user = input("Enter your name: ")

if user in names:
    index = names.index(user)
    print(f"Welcome, {user}! Your name is at index {index}.")
else:
    print("Name not recognized.")