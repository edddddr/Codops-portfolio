customers_tran = {}

with open("transaction.txt") as f:
    for line in f:
        row = line.strip()
        spilited_data = row.split(",")
        customers_tran[f"{spilited_data[0]}"] = sum([int(t) for t in spilited_data[1: len(spilited_data)-1 + 1]])
    sorting = dict(sorted(customers_tran.items()))
    print(sorting)  



prices = [100, 250, 400]





