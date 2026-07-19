# class Account():
#     def __init__(self, owner, balance):
#         self.owner = owner
#         self.balance = balance

#     def deposite(self, amount):
#         self.balance += amount



# selam = Account("selam", 2000)

# print(selam.balance)
# selam.deposite(20)
# print(selam.balance)



# private and protected
class Account:
    def __init__(self, balance):
        self.__balance = balance # private
    def withdraw(self, amount):
        if amount > self.__balance:
            print("Insufficient funds")
            return
        self.__balance -= amount

