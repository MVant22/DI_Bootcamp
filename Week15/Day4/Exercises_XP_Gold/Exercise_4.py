# items = {
#     "banana": 4,
#     "apple": 2,
#     "orange": 1.5,
#     "pear": 3
# }

# for keys, value in items.items():
#     print(f" {keys} : {value}")
    

items = {
    "banana": {"price": 4 , "stock":10},
    "apple": {"price": 2, "stock":5},
    "orange": {"price": 1.5 , "stock":24},
    "pear": {"price": 3 , "stock":1}
}

total_cost = 0

for keys, value in items.items():
    cost = value['price'] * value['stock']
    total_cost += cost

print(f"The total cost to buy everything is {total_cost}")