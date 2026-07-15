customers_tran = {}

with open("transaction.txt") as f:
    for line in f:
        row = line.strip()
        spilited_data = row.split(",")
        customers_tran[spilited_data[0]] = sum([int(t) for t in spilited_data[1: len(spilited_data)-1 + 1]])
        
    val = dict(sorted(customers_tran.items(), key=lambda item: item[1]))
    print(val)  



# data = {'banana': 139, 'apple': 226, 'cherry': 171}

# Sort in ascending order
sorted_by_key = dict(sorted(customers_tran.items()))
print(sorted_by_key)




# Source - https://stackoverflow.com/a/613218
# Posted by Devin Jeanpierre, modified by community. See post 'Timeline' for change history
# Retrieved 2026-07-13, License - CC BY-SA 4.0

x = {1: 2, 3: 4, 4: 3, 2: 1, 0: 0}
print({k: v for k, v in sorted(x.items(), key=lambda item: item[0])})
# {0: 0, 2: 1, 1: 2, 4: 3, 3: 4}



