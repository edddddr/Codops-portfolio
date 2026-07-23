# class Account:
#  def __init__(self, notifier: Notifier):
#     self.notifier = notifier 


class BankConfig:
 _instance = None
 def __new__(cls):
    if cls._instance is None:
        cls._instance = super().__new__(cls)
        cls._instance.interest_rate = 0.05
        cls._instance.overdraft_limit = 1000
        return cls._instance


BankConfig() is BankConfig()




class AccountFactory:
 @staticmethod
 def create(kind, owner, number, balance=0):
    if kind == "savings":
        return SavingsAccount(owner, number, balance)
    if kind == "current":
        return CurrentAccount(owner, number, balance)
    raise ValueError(f"Unknown type: {kind}")

    
acc = AccountFactory.create("savings", "Almaz", "CBE-1", 1500)

