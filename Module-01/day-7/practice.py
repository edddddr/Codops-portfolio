# def binary(list, target):
#     lo, hi = 0, len(list) -1

#     while lo <= hi:
#         mid= (lo + hi) // 2

#         if list[mid] == target:
#             return "yest it's here"
#         elif list[mid] > target:
#             hi = mid -1
#         elif list[mid] < target:
#             lo = mid + 1

#     return -1



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
# def linear_search(items, target):
#  for i, x in enumerate(items):
#     if x == target:
#         return i # found
#  return -1 


# list = [1,2,3,4,5,6,7]

# print(binary(list, 1))
# binary_search(list, 4)

class Account:
 def __init__(self, owner, balance):
    self.owner = owner
    self.balance = balance


 def deposit(self, amount):
    self.balance += amount


acc = Account()
acc0 = Account()
acc1 = Account()
acc2 = Account()
x= Account()


accounts = [acc0, acc1, acc2]
accounts[2] # O(1) — jump straight to it
accounts.append(acc) # O(1)* — amortised (occasionally resizes)
accounts.insert(0, x) # O(n) — every later item shifts


accounts = {"CBE-1": acc1, "CBE-2": acc2}
accounts["CBE-1"] # O(1) — look up by key
accounts["CBE-3"] = x # O(1) — insert
"CBE-1" in accounts # O(1) — membership on keys
del accounts["CBE-1"] 

# x in accounts 


class Node:
  def __init__(self, node, next):
    self.node = node
    self.next = next


head = Node(acc)
head.next = Node(acc0)
head.next.next = Node(acc1)
