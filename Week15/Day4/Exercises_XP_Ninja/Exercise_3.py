MORSE_CODE_DICT = {
    'A': '.-',     'B': '-...',   'C': '-.-.',
    'D': '-..',    'E': '.',      'F': '..-.',
    'G': '--.',    'H': '....',   'I': '..',
    'J': '.---',   'K': '-.-',    'L': '.-..',
    'M': '--',     'N': '-.',     'O': '---',
    'P': '.--.',   'Q': '--.-',   'R': '.-.',
    'S': '...',    'T': '-',      'U': '..-',
    'V': '...-',   'W': '.--',    'X': '-..-',
    'Y': '-.--',   'Z': '--..',
    '0': '-----',  '1': '.----',  '2': '..---',
    '3': '...--',  '4': '....-',  '5': '.....',
    '6': '-....',  '7': '--...',  '8': '---..',
    '9': '----.',
    ' ': '/'
}

def text_to_morse(text):
    text = text.upper()
    morse = [MORSE_CODE_DICT.get(char, '') for char in text]
    return ''.join(morse)

def morse_to_text(morse):
    reverse_dict = {v: k for k, v in MORSE_CODE_DICT.items()}
    words = morse.split(' / ')
    decoded_words = []

    for word in words:
        letters = word.split()
        decoded_word = ''.join([reverse_dict.get(letter, '') for letter in letters])
        decoded_words.append(decoded_word)

    return ' '.join(decoded_words)

print(text_to_morse("Messon"))
print(morse_to_text("-- . ... ... --- -."))