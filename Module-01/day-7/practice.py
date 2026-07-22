def binary(list, target):
    lo, hi = 0, len(list) -1

    while lo <= hi:
        mid= (lo + hi) // 2

        if list[mid] == target:
            return "yest it's here"
        elif list[mid] > target:
            hi = mid -1
        elif list[mid] < target:
            lo = mid + 1

    return -1



# def binary_search(items, target):
#  lo, hi = 0, len(items) - 1
#  while lo <= hi:
#     mid = (lo + hi) // 2
#     if items[mid] == target:
#         return mid
#     elif items[mid] < target:
#         lo = mid + 1 # go right
#     else:
#         hi = mid - 1 # go left
#  return -1

#  linear_search(items, target):
def linear_search(items, target):
 for i, x in enumerate(items):
    if x == target:
        return i # found
 return -1 


list = [1,2,3,4,5,6,7]

print(binary(list, 1))
# binary_search(list, 4)