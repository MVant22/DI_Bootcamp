def sum(number):
    number = str(number)
    result = int(number) + int(number*2) + int(number*3) + int(number*4)
    return result

print(sum(4))