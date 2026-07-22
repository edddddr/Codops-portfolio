class Account:
 def __init__(self, owner, balance=0):
    self.owner = owner
    self.balance = balance
 def deposit(self, amount):
    self.balance += amount


class SavingsAccount(Account): # child inherits everything
 pass


s = SavingsAccount("Almaz", 1500)
s.deposit(500) # inherited method just works
print(s.balance) 


class SavingsAccount(Account):
 def __init__(self, owner, balance=0, rate=0.05):
    super().__init__(owner, balance) # parent setup
    self.rate = rate # the extra

 def add_interest(self):
    self.deposit(self.balance * self.rate)



class Account:
 def statement(self):
    print(f"{self.owner}: {self.balance} ETB")


class CurrentAccount(Account):
 def statement(self): # override
    print(f"[Current] {self.owner}: {self.balance} ETB")




# polymorphism
accounts = [
 Account("Hanna", 1500),
 SavingsAccount("Almaz", 1500),
 CurrentAccount("Dawit", 800),
]
for acc in accounts:
 acc.statemen



# Duck typing
def show_balance(item):
 print(item.statments) # only needs a .balance attribute


show_balance(SavingsAccount) # works
show_balance(CurrentAccount) 




from abc import ABC, abstractmethod
class Account(ABC):
 @abstractmethod
 def calculate_interest(self):
   pass


class SavingsAccount(Account):
 def calculate_interest(self): # fulfils the contract
    return self.balance * 0.05
    
class CurrentAccount(Account):
 def calculate_interest(self): # a different rule
    return 0 
    