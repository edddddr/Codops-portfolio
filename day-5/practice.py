
# Inheritance
class Account:
 def __init__(self, owner, balance=0):
    self.owner = owner
    self.balance = balance
 def deposit(self, amount):
    self.balance += amount

# class SavingsAccount(Account): # child inherits everything
#  pass


# s = SavingsAccount("Almaz", 1500)
# s.deposit(500) # inherit

# Super and child class
class SavingsAccount(Account):
 def __init__(self, owner, balance=0, rate=0.05):
    super().__init__(owner, balance) # parent setup

    self.rate = rate # the extra
    def add_interest(self):
        self.deposit(self.balance * self.rate) # reuse parent