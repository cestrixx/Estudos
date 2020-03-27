# C++
# Escrever na Tela
```
#include <iostream>
using namespace std;
int main()
{
cout << "Bom Dia";
//<< endl;
return 0;
}

```
# Captura de Variáveis
```
#include <iostream>
using namespace std;
int main()
{
float val1,val2,soma;
cout << "Informe o valor1";
cin >> val1;
cout << "Informe o valor2";
cin >> val2;
soma= val1+val2;
cout << soma;
return 0;
}

```
# IF
```
#include <iostream>
using namespace std;
int main()
{
float n1,n2,n3,n4,media;
cout << "Informe a nota1";
cin >> n1;
cout << "Informe a nota2";
cin >> n2;
cout << "Informe a nota3";
cin >> n3;
cout << "Informe a nota4";
cin >> n4;
media=(n1+n2+n3+n4)/4;
if(media>=6){
cout << "aprovado";
}
else{
cout << "reprovado";
}
return 0;
}

```
# Switch Case
```
#include <iostream>
using namespace std;
int main()
{
int num;
cout << "Informe um numero";
cin >> num;
switch (num){
case 1:
cout << "escolheu 1";
break;
case 2:
cout << "escolheu 2";
break;
default:
cout << "valor incorreto";
break;
}
return 0;
}

```

# While
```
#include <iostream>
using namespace std;
int main()
{
int vali,valf,soma;
cout << "informe o valor inicial";
cin >> vali;
cout << "informe o valor final";
cin >> valf;
while (vali<valf){
vali = vali+1;
soma=soma+vali;
}
cout << soma;
return 0;
}

```
# For
```
#include <iostream>
using namespace std;
int main()
{
int n;
for(n=0;n<=10;n++){
cout << n << endl;
}
return 0;
}

```

# Vetor
```
#include <iostream>   
int main(void) {
 int i;
  float notas[5] = {7, 8, 9.5, 9.9, 5.2}; 
    cout << "Exibindo os Valores do Vetor \n\n ";   
    for( i = 0 ; i <= 4; i++){
	  cout << “notas["<<i<<"]=” << notas[i] << endl;
     }
return 0;
}

```
# Matriz
```
#include <iostream>

using namespace std;

int main(void)
{
	//cout << "Hello world!" << endl;
	int t, i, num[3][4];
	for (t = 0; t < 3; ++t)
    	for (i = 0; i < 4; i++)
        	num[t][i] = (t * 4) + i + 1;

	// Exibindo os dados
	for (t = 0; t < 3; ++t) {
    	for (i = 0; i < 4; ++i)
        	//printf("%3d ", num[t][i]);
        	cout << num[t][i];
        	cout << "\n ";
    	//printf("\n");
	}

	return 0;
}

```
