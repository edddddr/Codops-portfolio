class Account:
    def __init__(self, owner, account_number, balance = 0):
        self.owner = owner
        self.account_number = account_number
        self.__balance = balance
    
    @property
    def balance(self):
        return self.__balance
    
    def deposit(self, amount):
        if amount <= 0:
            raise ValueError("Please enter positive integer")
        self.__balance += amount
    def withdraw(self, amount):
        if amount > self.__balance:
            raise ValueError("Insufficient balance")
        self.__balance -= amount
    def statement(self):
        print(f"Name: {self.owner}\nAcc_no: {self.account_number}\nAmount: {self.__balance} ETB")


almaz = Account("almaz", 200)
leul = Account("leul", 100)
# lists = [almaz, leul]


# for list in lists: 
#     print(list.owner)

class Account_registery:
    # list = []
    def __init__(self):
        self.lists = []

    def addAcc(self, account):
        self.lists.append(account)
        
    def searchAcc(self, account_number):
        for list in self.lists:
            if list.account_number == account_number:
                print(list.account_number, list.owner)


    def listAccounts(self):
        for list in self.lists:
            print(list.owner)

list = [1,2,3,4,5]          





register_account = Account_registery()
register_account.addAcc(almaz)
register_account.addAcc(leul)
register_account.searchAcc(200)
# register_account.listAccounts()
