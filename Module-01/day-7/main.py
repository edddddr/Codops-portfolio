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


stack = []
stack.append(x) # push — O(1)
stack.pop() 


from collections import deque
q = deque()
q.append(x) # enqueue — O(1), joins the back
q.popleft()
