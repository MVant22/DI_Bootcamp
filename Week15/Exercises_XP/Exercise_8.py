basket = ["Banana", "Apples", "Oranges", "Blueberries"]

basket.remove('Banana')
basket.remove('Blueberries')
basket.append('Kiwi')
basket.append('Apples'[0])

count_apples = 0
for i in basket:
    if i == "Apples":
        count_apples += 1
        
basket.clear()

print(basket)
print(count_apples)