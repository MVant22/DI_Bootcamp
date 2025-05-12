longest_length = 0
longest_sentence = ""

while True:
    sentence = input("Enter the longest sentence you can without the letter 'A': ")
    
    if 'a' in sentence.lower():
        print("Oops! The sentence contains the letter 'A'. Try again.")
        continue
    
    if len(sentence) > longest_length:
        longest_length = len(sentence)
        longest_sentence = sentence
        print("Congratulations! That's the new longest sentence without the letter 'A'!")
        print(f"Length: {longest_length}")
    elif len(sentence) == longest_length:
        print("Nice try, sentence same length as previous")
    else:
        print("Good try, but not longer than the previous one.")