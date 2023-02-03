"""
Djenabou Diallo
activity 18:
wgile loops
Feb 2,2023
"""
# Example 1
print('------ Example 1: counting using while loop -------')
i = 0
while i<7:
    print('i = ', i)
    i += 1
# Example 2
print('------ Example 2: check point using while loop -------')
number = int(input('Enter a number between 0 and 10:'))
#creat a while loop asking the user to enter a new number if the number is not between 0 and 10.
while number<0 or number>10:
    number = int(input('invalid, Enter again:'))
print ('Entered Number=', number)
# Example 3 print add number between 12 1nd 30
print('------ Example 3: nest if statement in a while loop-------')
y = 12
while y<30:
    if y%2!=0:
        print('y = ',y)
    y += 1
#optional way to write example 3 using the countiue keyword
y = 12
while y<30:
    y +=1
    if y%2 == 0:
        continue
    print('again =', y)
# Example 4: else statement in a while loop
print('------ Example 3: else statement in a while loop-------')
m = 10
while m>0:
    print('m =',m)
    m -=1
print('Happy New Year!')
# Example 5:  while loop
print('------ Example 5: while loop-------')
number1 =int(input('Enter number 1 :'))
number2= int(input('Enter number 2 :'))
add = number1 + number2
while add<30:
    print('number 1: ', number1, 'number2:', number2, ',sum=', add)
    number1 +=1
    number +=2
    add = number1 + number2
print('number 1: ', number1, 'number2:', number2, ',sum=', add)
# Example 6:  build in functionj
print('------ Example 6: Math build in function-------')
import math
radius = int(input('Enter a radius: '))
area = math.pow(radius,2 )*math.pi
area = round(area,2)
print('the area with radius %s is %s' %(radius, area))
# Example 7:  build in functionj
print('------ Example 7: define( functionn-------')
def example7 ():
    print("------ Example7-----")
    print('define fundtions')
example7()
def example8 (name):
    print('------ Example 8-------')
    print(' Welcome to function ' + name)
example8 (' Djenabou Diallo ')
def example9 (num1, num2):
    print('------ Example9-------')
    total=num1+num2
    return total
n1 = int(input('Enter num1 ='))
n2 = int(input('Enter num2 ='))
ex9_result =example9(n1,n2)
print(' the sum of %s and %s is %s' %(n1,n2,ex9_result))
def is_divisible (x,y):
    print('------ Example 10-------')
    if x%y ==0:
        return True
    else:
        return False
print('is %s and %s divisible? %s' %(n1,n2, is_divisible(n1,n2)))






