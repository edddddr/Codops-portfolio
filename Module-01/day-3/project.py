stock = {}



try:
 with open("stock.txt") as f:
    for line in f:
        item, qty = line.strip().split(",")
        stock[item] = int(qty)
except FileNotFoundError:
 print("No stock file yet — starting empty")



def adjust(item, amount, action):
 
 if action == 'put':
    stock[item] = stock.get(item, 0) + amount
 else:
   if stock[item] < 10:
     print("low sltock:", stock[item])
   else:
    stock[item] = stock[item] - amount
    
 low = [item for item, qty in stock.items() if qty < 10]
 print("Low stock:", low)

 try:
    with open("stock.txt", "w") as f:
        for item, qty in stock.items():
            f.write(f"{item}, {qty} \n")
            print(item, qty)
 except FileNotFoundError:
    print("No stock file yet — starting empty")



    
adjust('Amoxicillin', 10, 'put')