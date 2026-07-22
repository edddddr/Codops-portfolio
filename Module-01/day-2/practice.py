

# def temperature_label(temp):

#     if(temp > 15):
#         print("Cold")
#     elif(temp > 15 and temp < 28):
#         print("Warm")
#     else:
#         print("Hot")
    


# temperature_label(10)

# for n in range(1, 10):
#     print(f"Receipt #{n}")


# for n in range(1, 21):
#     if(n % 2 == 0):
#         print(n)



# def apply_discount(price, percent=10):
#     return price - (1-(percent / 100)) 

# print(apply_discount(1000))   



def count_down(n=5):
    while(1 <= n):
        print(n)
        n -=1
    print("Liftoff!")    

count_down()