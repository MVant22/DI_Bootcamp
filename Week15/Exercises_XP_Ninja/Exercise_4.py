text = "New to Python or choosing between Python 2 and Python 3? Read Python 2 or Python 3."

words = text.split()

word_counts = {}

for word in words:
    word_counts[word] = word_counts.get(word,0) +1
    

for word in sorted(word_counts):
    print(f"{word}: {word_counts[word]}")