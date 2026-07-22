account = {"owner": "Almaz", "balance": 1500}
def deposit(acc, amount):
 acc["balance"] += amount
# With OOP — the account knows how to change itself
class Account:
 def __init__(self, owner, balance):
    self.owner = owner
    self.balance = balance


 def deposit(self, amount):
    self.balance += amount


almaz = Account("Almaz Bekele", 1500) # one object
dawit = Account("Dawit Tesfaye", 800)



class Account:
 def __init__(self, owner, balance):
    self.owner = owner # store data on the object
    self.balance = balance
almaz = Account("Almaz", 1500) # __init__ runs, self = almaz
print(almaz.owner) 

class Account:
 def __init__(self, owner, balance):
    self.owner = owner
    self.balance = balance
 def deposit(self, amount): # a method
    self.balance += amount
 def statement(self):
    print(f"{self.owner}: {self.balance} ETB")

    
almaz = Account("Almaz", 1500)
almaz.deposit(500) # call a method with dot notation
almaz.statement() 