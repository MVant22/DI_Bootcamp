import string

paragraph = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

count_characters = len(paragraph)

count_sentences = len(paragraph.split("."))

clean_paragraph = paragraph.translate(str.maketrans("", "", string.punctuation)).lower()

# Split into words and count unique ones
words = clean_paragraph.split()
unique_words = set(words)
count_unique_words = len(unique_words)

print(count_characters)
print(count_sentences)
print("Unique word count:", count_unique_words)