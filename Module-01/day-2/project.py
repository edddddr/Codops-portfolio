


# def total(bill):

total = 500
customers = [
    "Almaz", 
    "Dawit", 
    "Tigist",
    "Hanna",
    "Samuel", 
]

def bill_split(total, people, tip_rate=0.10):
    return (total + (total * tip_rate)) / people


bill = bill_split(total, len(customers))

for customer in customers:
    print(f"{customer} bill's is {bill}")
