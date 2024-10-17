som = 0 
aantalkeer = 0
for x in range(1 ,50):
    aantalkeer +=1
    if som > 1000:
        break
    else:
        print(f"{x} + {x+aantalkeer} = {som}  ")