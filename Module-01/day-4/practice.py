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
# class Account:
#     def __init__(self, balance):
#         self.__balance = balance # private
#     def withdraw(self, amount):
#         if amount > self.__balance:
#             print("Insufficient funds")
#             return
#         self.__balance -= amount

# getter and setter
# class Account:
#  def __init__(self, balance):
#     self.__balance = balance
#     @property
#     def balance(self): # getter
#         return self.__balance
#     @balance.setter
#     def balance(self, value): # setter with validation
#         if value < 0:
#             raise ValueError("No negative balance")
#         self.__balance = value
# a = Account(1500)
# a.balance # 1500 (runs the getter)
# a.balance = 2000 # ok (runs the setter)
# a.balance = -5 # ValueError


class Book:
    def __init__(self, title, author, page):
        self.title = title
        self.__author = author
        self.page = page
    
    def describe(self):
        print(f"Book: {self.title}, author {self.__author}, pages {self.page}")

    @property
    def author(self):
        return self.__author



Book1 = Book("Harry Poter", "Lina", 1003)
Book2 = Book("Deep work", "Evan", 103)
