

def temperature_label(temp):

    if(temp > 15):
        print("Cold")
    elif(temp > 15 and temp < 28):
        print("Warm")
    else:
        print("Hot")
    


temperature_label(10)