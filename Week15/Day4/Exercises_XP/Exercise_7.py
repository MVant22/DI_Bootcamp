data = [
    {
        "question": "What is Baby Yoda's real name?",
        "answer": "Grogu"
    },
    {
        "question": "Where did Obi-Wan take Luke after his birth?",
        "answer": "Tatooine"
    },
    {
        "question": "What year did the first Star Wars movie come out?",
        "answer": "1977"
    },
    {
        "question": "Who built C-3PO?",
        "answer": "Anakin Skywalker"
    },
    {
        "question": "Anakin Skywalker grew up to be who?",
        "answer": "Darth Vader"
    },
    {
        "question": "What species is Chewbacca?",
        "answer": "Wookiee"
    }
]



def questions(data):
    wrong_answers = []
    correct = 0
    incorrect = 0
    
    for item in data:
        user_answer = input(item['question'] + " ").strip()
        
        if user_answer.lower() == item['answer'].lower():
            print("Correct!\n")
            correct += 1
        else:
            print("Incorrect!\n")
            incorrect += 1
            wrong_answers.append({
                'question':item['question'],
                'your_answer': user_answer,
                'correct_answer': item['answer']
            })
    print("Quiz completed")
    print(f"Correct answer : {correct}")
    print(f"Incorrect answer : {incorrect}")
    
    if wrong_answers:
        print("\nHere are the questions you got wrong:")
        for wa in wrong_answers:
            print(f"- {wa['question']}")
            print(f"  Your answer: {wa['your_answer']}")
            print(f"  Correct answer: {wa['correct_answer']}\n")

questions(data)