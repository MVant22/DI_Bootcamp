my_fav_numbers = {3, 6, 99}

my_fav_numbers.add(4)
my_fav_numbers.add(5)
print(my_fav_numbers)

my_fav_numbers.pop()
print(my_fav_numbers)

friend_fav_numbers = {1, 2, 4} 
our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)
print(our_fav_numbers)

