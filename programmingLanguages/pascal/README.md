# Pascal
# Escrever na Tela
```
Program exe1;
Begin
writeln('Bom dia');
End.

```
# Captura de Variáveis
```
Program exe2;
var val1,val2,soma:real;
Begin
writeln('Informe o valor 1');
readln(val1);
writeln('Informe o valor 2');
readln(val2);
soma:=val1+val2;
writeln(soma);
End.

```

# IF
```
Program exe3;
var n1,n2,n3,n4,media:real;
Begin
writeln('Informe nota1');
readln(n1);
writeln('Informe nota2');
readln(n2);
writeln('informe nota3');
readln(n3);
writeln('informe nota4');
readln(n4);
media:=(n1+n2+n3+n4)/4;
if (media>=6) then
writeln('aprovado')
else
writeln('reprovado');
End.

```

# Switch Case
```
Program exe7;
var num: integer;
Begin
writeln('Informe um numero');
readln(num);
case num of
1:writeln('Vc informou 1');
2:writeln('Vc informou 2');
else
writeln('invalido');
end;
End.

```
# While
```
Program exe8;
var vali, valf, soma: integer;
Begin
writeln('informe valor inicial');
readln(vali);
writeln('informe valor final');
readln(valf);
soma:= vali;
while(vali<valf) do
begin
vali:=vali+1;
soma:=soma+vali;
end;
writeln(soma);
End.

```
# For
```
Program exe13;
var n:integer;
Begin
for n:=0 to 10 do
begin
writeln(n);
end;
End.

```
# Vetor
```
program vet;
var
   notas:array[1..5] of real;
   i:integer;
Begin
	notas[1]:= 7;
	notas[2]:= 8;
	notas[3]:= 9.5;
	notas[4]:= 9.9;
	notas[5]:= 5.2;
 	writeln('Exibindo os Valores do Vetor');
 	for i:=1 to 5 do
     	begin
         	writeln('notas[‘,i,’]=',notas[i]);
         end;
end.

```
# Matriz
```
Program matriz;
var num: array [1..3,1..4] of integer;
      t,i: integer;
 Begin
	for t:=1 to 3 do Begin
		for i:=1 to 4 do Begin
			num[t][i] := (t * 4) + i + 1;
		End;
   	End;
	for t:=1 to 3 do Begin
    		for i:=1 to 4 do Begin
			writeln(num[t][i]);
			writeln();
		End;
	End;
end.

```
