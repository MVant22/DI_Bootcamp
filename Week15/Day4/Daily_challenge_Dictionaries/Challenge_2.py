items_purchase = {"Water": "$1", "Bread": "$3", "TV": "$1,000", "Fertilizer": "$20"}
item2 = {}
wallet = "$300"

wallet = int(wallet.strip('$'))

affordable_items = []

for item, price_str in items_purchase.items():
    price = int(price_str.strip('$').replace(',', ''))
    if price <= wallet:
        affordable_items.append(item)
        
if not affordable_items:
    result = "Nothing"
else:
    result = sorted(affordable_items)


print(affordable_items)