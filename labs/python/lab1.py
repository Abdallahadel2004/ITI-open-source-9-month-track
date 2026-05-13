#task1
start=0
end=10
my_num=7
if(my_num>start and my_num<=end):
    print(True)
else:
    print(False)

#task2
age=13
hav_cupoon=True
if(age<18 or age>65 or hav_cupoon):
    print(True)
else:
    print(False)

#task3
message="Hello,{name}!"
print(message.format(name="Abdallah"))

#task4
full_name="Abdallah adel"
names = full_name.split()
first_name = names[0][0]
last_name = names[-1][0]
print(first_name + last_name)

#task5
age=22
Name="Abdallah"
print(f"{Name} is {age} years old")

#task6
vowels = ['a', 'o', 'e', 'i', 'u', 'A', 'O', 'E', 'I', 'U']
word = "mobile"
brief= "".join([char for char in word if char not in vowels])
print(brief)

#task7
list=[]
elgomla="this is javaScript"
for i in range(len(elgomla)):
    if elgomla[i]=="i":
        list.append(i)
print(list)

        

    