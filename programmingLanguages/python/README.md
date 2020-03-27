# Python
# Escrever na Tela
```
print "Bom dia"

```
# Captura de Variáveis
```
val1 = float(raw_input('Informe o valor1'))
val2 = float(raw_input('Informe o valor2'))
soma = val1+val2
print '%d' % soma

```
# IF
```
n1 = float(raw_input('Informe o valor1'))
n2 = float(raw_input('Informe o valor2'))
n3 = float(raw_input('Informe o valor3'))
n4 = float(raw_input('Informe o valor4'))
media = (n1+n2+n3+n4)/4
if media >= 6:
	print "Aprovado"
else:
	print "Reprovado"

```
# Switch Case
```
#num = int(raw_input('Informe um numero'))
def case_1():
print 'Digitou 1'
def case_2():
print 'Digitou 2'
def case_default():
print 'Valor nao existente'

dict = {1 : case_1, 2 : case_2}

def switch(num):
try:
dict[num]()
except:
case_default()
try:
switch(raw_input('Informe um numero'))
except:
print 'O valor digitado não é um número'

```
# While
```
n = 0
while n < 10:
	n = n + 1
	print n

```
# For
```
for n in range(0,10):
	print(n)

```
# Vetor
```
notas = [10, 5, 6.7, 2, 7.5]
for i in range(5):
    print(notas [i])

```

# Matriz
