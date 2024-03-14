ndice = "qedhjwzafp"
lettre = "xWl_]k~[k|"
i = 0
titi = ''
while i < len(ndice):
    if ord(ndice[i]) < 109:
       titi=titi+chr(ord(lettre[i])+10)
    else:
        titi=titi+chr(ord(lettre[i])-10)


print(titi)
print("coucou")
