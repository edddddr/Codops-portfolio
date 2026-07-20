def binary(list, target):
    lo, hi = 0, len(list) -1

    while(lo <= hi):
        mid= hi // 2

        if(list[mid] == target):
            print("yest it's here")
        elif(list[mid] > target):
            hi = mid -1
        elif(list[mid] < target):
            lo = mid + 1
        # else