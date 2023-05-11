#futcion aan maken geef_regel 
#je krijgt een getal
#maak en list met getallen 1,2,3,4



num = int(input("voer getal in: "))

for i in range(1, num+1, 2):
    spatie = " " * ((num-i) // 2)
    nummers = str(i) * i
    print(spatie + nummers)

for i in range(num-2, 0, -2):
    spatie = " " * ((num-i)// 2)
    nummers = str(i) * i
    print(spatie + nummers)


# maak een string-.join en dan de list meegeven
# spatie = '-'.join(['1','2','3'])
# print(spatie)
