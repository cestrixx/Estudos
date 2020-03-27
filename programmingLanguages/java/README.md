# JAVA
# Escrever na Tela
```
public class main {
	public static void main(String[] args) {
		System.out.print("Bom dia");
	}
}

```
# Captura de Variáveis
```
package exercicio2;
import java.util.Scanner;
public class main {
	public static void main(String[] args) {
		Scanner entrada = new Scanner(System.in);
		float val1, val2,soma;
		System.out.print("Informe o valor1");
		val1 = Float.parseFloat(entrada.nextLine());
		System.out.print("Informe o valor2");
		val2 = Float.parseFloat(entrada.nextLine());
		soma=val1+val2;
		System.out.print(soma);
	}
}

```

# IF
```
package exercicio3;
import java.util.Scanner;
public class exe3 {
	public static void main(String[] args) {
		Scanner entrada = new Scanner(System.in);
		float n1,n2,n3,n4,media;
		System.out.println("Informe nota1");
		n1 = Float.parseFloat(entrada.nextLine());
		System.out.println("Informe nota2");
		n2 = Float.parseFloat(entrada.nextLine());
		
		System.out.println("Informe nota3");
		n3 = Float.parseFloat(entrada.nextLine());
		System.out.println("Informe nota4");
		n4 = Float.parseFloat(entrada.nextLine());
		media=(n1+n2+n3+n4)/4;
			if(media>=6){
				System.out.println("aprovado");
			}
			else{
				System.out.println("reprovado");
			}
		}
}

```
# Switch Case
```
package exercicio7;
import java.util.Scanner;
public class exe7 {
	public static void main(String[] args) {
		Scanner entrada = new Scanner(System.in);
		
		int num;
		System.out.println("Informe um numero");
		num = Integer.parseInt(entrada.nextLine());
		
		switch(num){
			case 1:
					System.out.println("1");
					break;
			case 2:
					System.out.println("2");
					break;
			default:
					System.out.println("Valor incorreto");
					break;
		}
		
	}

}

```
# While
```
package exercicio9;
import java.util.Scanner;
public class exe9 {
	public static void main(String[] args) {
		Scanner entrada = new Scanner(System.in);
		int vali,valf,soma;
		System.out.println("Informe o valor inicial");
		vali=Integer.parseInt(entrada.nextLine());
		System.out.println("Informe o valor final");
		valf=Integer.parseInt(entrada.nextLine());
		soma=vali;
		while(vali<valf){
			vali=vali+1;
			soma=soma+vali;
		}
		System.out.println(soma);
	}
}

```
# For
```
package exercicio13;
import java.util.Scanner;
public class exe13 {
	public static void main(String[] args) {
		Scanner entrada = new Scanner(System.in);
		int n;
		for(n=0;n<=10;n++){
			System.out.println(n);
		}

	}

}


```

# Vetor
```
public class Vet{
	public static void main(String[] args){
		int i;
		double notas[] = {7, 8, 9.5, 9.9, 5.2};
		System.out.println("Exibindo os Valores do Vetor \n\n ");
		for( i = 0 ; i <= 4; i++){
     		System.out.println(notas[i]); 
  		}
	}
}

```
# Matriz
```
package matriz;
import java.util.Scanner;
public class matriz {
	public static void main(String[] args) {
		int t, i, num[3][4];
		for (t = 0; t < 3; ++t){
    			for (i = 0; i < 4; i++){
        			num[t][i] = (t * 4) + i + 1;
			}
		}

		for (t = 0; t < 3; ++t) {
    			for (i = 0; i < 4; ++i){
				System.out.println(num[t][i]);
    				System.out.println("\n");
			}
		}
	}
}

```
