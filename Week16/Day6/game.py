import random

class Game():
    def __init__(self):
        pass
    
    def get_user_item(self):
        valid_items = ['rock', 'paper', 'scissors']
        while True:
            user_input = input("Select an item (rock/paper/scissors):")
            if user_input in valid_items:
                return user_input
            else:
                print("You must choose between (rock/paper/scissors)")
    
    def get_computer_item(self):
        computer_choice = ['rock', 'paper', 'scissors']
        return random.choice(computer_choice)
    
    def get_game_result(self, user_item, computer_item):
        if user_item == computer_item:
            return "draw"
        elif(
            (user_item == "rock" and computer_item == "scissors") or
            (user_item == "paper" and computer_item == "rock") or
            (user_item == "scissors" and computer_item == "paper")
        ):
            return "win"
        else:
            return "loss"
        
    def play(self):
        user_item = self.get_user_item()
        computer_item = self.get_computer_item()
        result = self.get_game_result(user_item, computer_item)  # pass both arguments here

        if result == "win":
            print(f"You selected {user_item}. The computer selected {computer_item}. You won")
        elif result == "draw":
            print(f"You selected {user_item}. The computer selected {computer_item}. it's a draw")
        else:
            print(f"You selected {user_item}. The computer selected {computer_item}. You lost")

        return result
