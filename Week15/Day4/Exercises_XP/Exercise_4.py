users = ["Mickey","Minnie","Donald","Ariel","Pluto"]

# 1
disney_users_A = {}
for index, name in enumerate(users):
    disney_users_A[name] = index

# 2 
disney_users_B = {}
for index,name in enumerate(users):
    disney_users_B[index] = name 

# 3
disney_users_C = {}
for index, name in enumerate(sorted(users)):
    disney_users_C[name] = index

# 4
disney_users_i = {}
i = 0
for name in users:
    if "i" in name.lower():
        disney_users_i[name] = i
        i += 1
        

# 5 
disney_user_mp = {}
i = 0
for name in users:
    if name.lower().startswith(("m", "p")):
        disney_user_mp[name] = i
        i += 1
         
print(disney_users_A)
print(disney_users_B)
print(disney_users_C)
print(disney_users_i)
print(disney_user_mp)