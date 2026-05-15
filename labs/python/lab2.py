#task1
result = []
number = int(input("enter a number: "))
for i in range(1, number + 1):
    result.append([i * j for j in range(1, i + 1)])
print(result)




#task2
def area(shape, par1, par2=None):
    if shape == "t":
        return 0.5 * par1 * par2
    elif shape == "r":
        if par2 is None:
            return par1 * par1
        else:
            return par1 * par2
    elif shape == "c":
        return 3.14 * (par1**2)
    else:
        print("invalid shape")
        return 0

shape = input("enter a shape (t/r/c): ")
par1 = int(input("enter the first dimension: "))
par2 = None

if shape == "t":
    par2 = int(input("enter the height: "))
elif shape == "r":
    is_rect = input("Is it a rectangle? (y/n): ")
    if is_rect.lower() == "y":
        par2 = int(input("enter the second dimension: "))

print("Area:", area(shape, par1, par2))


#task 3
names = ["abdallah", "fatma", "ibrahim"]
result_dict = {}
for name in names:
    first_letter = name[0].lower()
    if first_letter not in result_dict:
        result_dict[first_letter] = []
    result_dict[first_letter].append(name)

sorted_dict = dict(sorted(result_dict.items()))
print(sorted_dict)


#task 4
number1=int(input("enter a number: "))
for i in range(number1):
    print(" "*(number1-i-1)+"*"*(i+1))









