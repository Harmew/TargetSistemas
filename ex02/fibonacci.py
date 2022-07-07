print("-"*30)
print('Sequência de Fibonacci')
print("-"*30)

NUMBER = int(input('Insira um numero para gerar a sequência de Fibonnaci: '))
PREVIUS = 0
NEXT = 1
CURRENT = 1
result = []

print("-"*30)

for n in range(0,NUMBER+1):
    result.append(NEXT)

    CURRENT=NEXT+PREVIUS
    PREVIUS=NEXT
    NEXT=CURRENT

    if CURRENT > NUMBER:
        break
    if NUMBER in result:
        break
        
print(result)
if NUMBER in result:
    print("Existe na sequencia")
else:
    print("Não existe na sequencia")