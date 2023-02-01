"""
DJenabou Diallo
Tuesday, jan 31
Activity 17: conditional statements and loops
"""
# example 1
print('-----example1)-------')
age = int(input('Enter age:'))
if age >=21:
    print('ADULT')
else:
    print('UNDER AGE!')
print('Age check point!')
# example 2
print('-----example2) if elif.... else  using and and operator-------')
grades = int( input('Enter a grades:'))
if grades >= 90 and grades <= 100:
    print ('GPA = A')
elif grades >=80 and grades < 90:
    print('GPA =B')
elif grades >=70 and grades < 80:
    print('GPA = C')
elif grades >=60 and grades < 70:
    print('GPA = D')
elif grades >=0 and grades <60:
    print('GPA = F')
else :
    print('INVALID!')
# example 3
print('-----example 3) if elif.... else using an or operator -------')
kidAge =int(input('Enter an age between 5 and 10:'))
if kidAge == 5 or kidAge == 6:
    print('Eat pasta')
elif kidAge == 7 or kidAge == 8:
    print('Eat fish')
elif kidAge == 9 or kidAge == 10:
    print('Eat ice-cream')
else :
    print ('wrong age!')
# example 4
print('-----example 4) for loops -------')
for x in range(0,5):
    print('counting:', x)
# example 5
print('-----example 5) for loops in a list -------')
animals = ['fish','dog','cat','bear','pig']
for i in animals:
    print(i)
# example 6
print('-----example 6) for loops with different increment of drcrement-------')
for m in range(3,30,2):
    print('print before break')
    if m == 17:
        continue
    print('m=', m)
#decreasing order
for n in range(10,0,-1):
    print('n=',n)

