# C
# Escrever na Tela
```
#include <stdio.h>
#include <stdlib.h>
int main()
{
printf("Bom Dia");
return 0;
}

```
# Captura de Variáveis
```
#include <stdio.h>
#include <stdlib.h>
int main()
{
float val1, val2, soma;
printf("Informe o valor1 ");
scanf("%f", &val1);
printf("Informe o valor2 ");
scanf("%f", &val2);
soma=val1+val2;
printf("%f",soma);
return 0;
}

```
# IF
```
#include <stdio.h>
#include <stdlib.h>
int main()
{
float n1,n2,n3,n4,media;
printf("Informe a nota1 ");
scanf("%f",&n1);
printf("Informe a nota2 ");
scanf("%f",&n2);
printf("Informe a nota3 ");
scanf("%f",&n3);
printf("Informe a nota4 ");
scanf("%f",&n4);
media=(n1+n2+n3+n4)/4;
if(media>=6){
printf("Aprovado");
}
else{
printf("Reprovado");
}
return 0;
}

```
# Switch Case
```
#include <stdio.h>
#include <stdlib.h>
int main()
{
int num;
printf("Informe um numero ");
scanf("%d",&num);
switch(num){
case 1:
printf("Digitou 1");
break;
case 2:
printf("Digitou 2");
break;
default:
printf("Valor nao existente");
break;
}
return 0;
}

```
# While
```
#include <stdio.h>
#include <stdlib.h>
int main()
{
int vali,valf,soma;
printf("Informe o valor inicial ");
scanf("%d",&vali);
printf("Informe o valor final ");
scanf("%d",&valf);
soma=vali;
while(vali<valf){
vali=vali+1;
soma=soma+vali;
}
printf("Soma %d",&soma);
return 0;
}

```
# For
```
#include <stdio.h>
#include <stdlib.h>
int main()
{
int n;
for(n=0;n<=10;n++){
printf("%d\n",n);
}
return 0;
}

```
# Vetor
```
#include<stdio.h>
#include<conio.h>
int main(void){
  int i;
  float notas[5] = {7, 8, 9.5, 9.9, 5.2}; 
  printf("Exibindo os Valores do Vetor \n\n");
  for( i = 0 ; i <= 4; i++){
     printf("notas[%d] = %.1f\n",i, notas[i]); 
  }
  getch();
  return 0;
}

```
# Matriz
```
#include <stdio.h>
#include <stdlib.h>

void main(void) {
	int t, i, num[3][4];

	for (t = 0; t < 3; ++t)
    	for (i = 0; i < 4; i++)
        	num[t][i] = (t * 4) + i + 1;

	// Exibindo os dados
	for (t = 0; t < 3; ++t) {
    	for (i = 0; i < 4; ++i)
        	printf("%3d ", num[t][i]);
    	printf("\n");
	}
}

```
