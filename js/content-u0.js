CONTENT.push(String.raw`
=== UNIT u0 | Hafta 1 · ek | Matematik Alet Çantası | Σ, matrisler ve türev. Dersin geri kalanı bu dille yazılıyor.

--- LESSON u0a | Σ | Toplam sembolü Σ ve çarpım Π

## CARD Σ sadece "topla" demek
Ekonometride sürekli yüzlerce sayıyı toplarız. Hepsini tek tek yazmak yerine ==Σ (sigma, summation operator)== kullanırız.
$$\sum_{i=1}^{n} X_i = X_1 + X_2 + \dots + X_n$$
Altındaki $i=1$ "1. sayıdan başla", üstündeki $n$ "n. sayıda dur" demek. $i$ sadece bir sayaç.
:::ornek Örnek (ders notu)
$n=4$ ve $X_1=9,\ X_2=7.5,\ X_3=13,\ X_4=10$ olsun.
$\sum_{i=1}^{4} X_i = 9+7.5+13+10 = 39.5$
Ortalama: $\bar X = \frac{1}{4}\sum X_i = 39.5/4 = 9.875$
:::
Ortalamanın tanımından çok kullanılan bir sonuç çıkar: $\bar X = \frac1n \sum X_i$ olduğu için $\sum X_i = n\bar X$.

## CARD Üç altın kural
Bunlar sınavda "hangisi doğrudur" sorusu olarak çıkar. $c$, $a$, $b$ sabit (değişmeyen) sayılar.
• **Sabitin toplamı:** $\sum_{i=1}^{n} c = n\cdot c$. Aynı sayıyı $n$ kere topluyorsun.
• **Sabit dışarı çıkar:** $\sum c X_i = c\sum X_i$
• **Toplam dağılır:** $\sum (aX_i + bY_i) = a\sum X_i + b\sum Y_i$
:::ornek Örnek
$n=10$, $\sum X_i = 50$ ise $\sum (3 + 2X_i) = 10\cdot 3 + 2\cdot 50 = 130$.
:::
Bir de çok önemli bir kural: ortalamadan sapmaların toplamı her zaman sıfırdır.
$$\sum_{i=1}^{n} (X_i - \bar X) = n\bar X - n\bar X = 0$$

## CARD İki tuzak
Sınavda yanlış şıkları genelde bu iki tuzaktan yaparlar:
• Oranların toplamı, toplamların oranı **değildir**: $\sum (X_i/Y_i) \ne \sum X_i / \sum Y_i$
• Karelerin toplamı, toplamın karesi **değildir**: $\sum X_i^2 \ne \left(\sum X_i\right)^2$
:::ornek Sayıyla gör
$X = 1, 2, 3$ olsun. $\sum X_i^2 = 1+4+9 = 14$ ama $(\sum X_i)^2 = 6^2 = 36$.
:::
İki ekstra formül: $\sum_{j=1}^{n} j = \frac{n(n+1)}{2}$ (1'den 100'e toplam 5050) ve geometrik seri $1+X+X^2+\dots+X^n = \frac{1-X^{n+1}}{1-X}$.

## CARD Kare açılımı (PS1 Soru 2d)
Problem setinde şunu göstermen istendi:
$$\sum_{i=1}^{n}(a + bx_i + cy_i)^2 = na^2 + b^2\sum x_i^2 + c^2\sum y_i^2 + 2ab\sum x_i + 2ac\sum y_i + 2bc\sum x_i y_i$$
Mantık: önce parantezin karesini aç, $(a+bx+cy)^2 = a^2 + b^2x^2 + c^2y^2 + 2abx + 2acy + 2bcxy$. Sonra her terime Σ uygula. Sabitler dışarı çıkar. $a^2$ sabit olduğu için $\sum a^2 = na^2$ olur.
:::ipucu Sınavda
"İlk terim ne olur?" diye sorarlarsa cevap $na^2$. $a^2$ yazan şık tuzak.
:::

## CARD Çarpım sembolü Π
==Π (pi, product operator)== aynı işi çarpma için yapar: $\prod_{i=1}^{n} X_i = X_1 \times X_2 \times \dots \times X_n$
• $\prod_{i=1}^{n} c = c^n$
• $\prod X_i^p = \left(\prod X_i\right)^p$
• $\prod X_i Y_i = \left(\prod X_i\right)\left(\prod Y_i\right)$

## Q
SRC: PS1 Q2c
EN: For a constant $b$, what is $\sum_{i=1}^{n} b$?
TR: $b$ bir sabit. $\sum_{i=1}^{n} b$ neye eşittir?
+ $n\cdot b$
- $b$
- $n + b$
- $b^n$
EX: Aynı sayıyı ($b$) $n$ kere topluyorsun: $b+b+\dots+b = n\cdot b$. $b^n$ çarpım sembolü Π'nin sonucudur, karıştırma.

## Q
SRC: PS1 Q2
EN: Which of the following is **always** true?
TR: Aşağıdakilerden hangisi **her zaman** doğrudur?
+ $\sum_{i=1}^{n} aX_i = a\sum_{i=1}^{n} X_i$
- $\sum_{i=1}^{n} X_i^2 = \left(\sum_{i=1}^{n} X_i\right)^2$
- $\sum_{i=1}^{n} X_i/Y_i = \sum_{i=1}^{n} X_i \big/ \sum_{i=1}^{n} Y_i$
- $\sum_{i=1}^{n} X_iY_i = \left(\sum_{i=1}^{n} X_i\right)\left(\sum_{i=1}^{n} Y_i\right)$
EX: Sabit sayı Σ'nın dışına çıkabilir. Diğer üçü "iki tuzak" kartındaki hatalar: kareler, oranlar ve çarpımlar Σ ile böyle ayrılamaz.

## Q
EN: $\sum_{i=1}^{n} (X_i - \bar X)$ is equal to:
TR: $\sum_{i=1}^{n} (X_i - \bar X)$ neye eşittir?
+ $0$
- $n\bar X$
- $\bar X$
- $\sum_{i=1}^{n} X_i^2$
EX: $\sum X_i - \sum \bar X = n\bar X - n\bar X = 0$. Ortalamadan sapmaların toplamı her zaman sıfır. OLS konusunda bu sonucu tekrar kullanacağız.

## Q
SRC: PS1 Q2d
EN: In the expansion of $\sum_{i=1}^{n}(a+bx_i+cy_i)^2$, the term that does not involve $x_i$ or $y_i$ is:
TR: $\sum_{i=1}^{n}(a+bx_i+cy_i)^2$ açılımında $x_i$ ya da $y_i$ içermeyen terim hangisidir?
+ $na^2$
- $a^2$
- $n^2a^2$
- $2na$
EX: Parantezin karesinden $a^2$ gelir. Σ uygulayınca $\sum_{i=1}^n a^2 = na^2$ olur. Sadece $a^2$ yazmak tuzak.

## Q
EN: What is $\sum_{j=1}^{100} j$?
TR: $\sum_{j=1}^{100} j$ kaçtır?
+ $5050$
- $10000$
- $5000$
- $10100$
EX: $\frac{n(n+1)}{2} = \frac{100\cdot 101}{2} = 5050$.

## Q
EN: For a constant $c$, $\prod_{i=1}^{n} c$ equals:
TR: $c$ sabit. $\prod_{i=1}^{n} c$ neye eşittir?
+ $c^n$
- $n\cdot c$
- $c$
- $n^c$
EX: Π çarpım demek: $c\times c\times\dots\times c$ ($n$ kere) $= c^n$. $n\cdot c$ ise Σ'nın cevabı.

## GEN sumLinear
## GEN sumSquares

--- LESSON u0b | [ ] | Vektör ve matris

## CARD Vektör ve matris nedir?
==Vektör (vector)==: sayıların bir sütun ya da satır halinde dizilmesi.
• **Sütun vektörü** $n\times 1$: alt alta $n$ sayı.
• **Satır vektörü** $1\times n$: yan yana $n$ sayı.
==Matris (matrix)==: sayıların satır ve sütunlardan oluşan tablosu. Boyutu **satır × sütun** diye okunur. $n\times m$ matriste $n$ satır, $m$ sütun var.
$$A = \begin{pmatrix} 1 & 3 & 3 \\ 2 & 4 & 1 \end{pmatrix} \quad (2\times 3)$$
$a_{ij}$ = $i$. satır, $j$. sütundaki eleman. Burada $a_{12}=3$, $a_{21}=2$, $a_{23}=1$.
:::ipucu Hafıza
"Satır önce gelir": $a_{ij}$'de ilk indeks satır. Boyutta da önce satır sayısı yazılır.
:::

## CARD Matris türleri
• **Kare matris (square):** satır sayısı = sütun sayısı.
• **Simetrik (symmetric):** $a_{ij} = a_{ji}$, yani köşegene göre ayna.
• **Köşegen (diagonal):** köşegen dışındaki her şey 0.
• **Birim matris (identity) $I_n$:** köşegeni 1, gerisi 0. Sayılardaki "1" gibidir: $AI = A$.
• **Sıfır matris (null) $0$:** her elemanı 0.
• **Üst üçgen (upper triangular):** köşegenin altı 0. **Alt üçgen:** köşegenin üstü 0.

## CARD Transpoz (devrik)
==Transpoz (transpose)== $A'$ ya da $A^T$: satırlarla sütunların yer değiştirmesi.
$$A = \begin{pmatrix} 1 & 3 & 3 \\ 2 & 4 & 1 \end{pmatrix} \Rightarrow A' = \begin{pmatrix} 1 & 2 \\ 3 & 4 \\ 3 & 1 \end{pmatrix}$$
$2\times 3$ matrisin transpozu $3\times 2$ olur. $n\times 1$ sütun vektörünün transpozu $1\times n$ satır vektörü olur.
• $(A+B)' = A' + B'$
• $(AB)' = B'A'$ (sıra **ters döner**)

## CARD Toplama ve iç çarpım
• **Toplama:** sadece aynı boyuttaki matrisler toplanır, eleman eleman: $c_{ij} = a_{ij}+b_{ij}$.
• **Sayıyla çarpma:** her eleman o sayıyla çarpılır.
• **İç çarpım:** $a$ ve $b$ $n\times 1$ ise $a'b = \sum_{i=1}^n a_i b_i$ (tek bir sayı) ve $a'a = \sum a_i^2$.
:::ornek Örnek
$a = (1, 2, 3)'$, $b = (4, 0, -1)'$ ise $a'b = 1\cdot4 + 2\cdot0 + 3\cdot(-1) = 1$.
:::

## Q
EN: What is the dimension of $A = \begin{pmatrix} 1 & 3 & 3 \\ 2 & 4 & 1 \end{pmatrix}$?
TR: $A$ matrisinin boyutu nedir?
+ $2\times 3$
- $3\times 2$
- $6\times 1$
- $2\times 2$
EX: 2 satır, 3 sütun var. Boyut her zaman satır × sütun yazılır.

## Q
EN: For $A = \begin{pmatrix} 1 & 3 & 3 \\ 2 & 4 & 1 \end{pmatrix}$, what is $a_{21}$?
TR: Bu matriste $a_{21}$ elemanı kaçtır?
+ $2$
- $3$
- $4$
- $1$
EX: $a_{21}$: 2. satır, 1. sütun. 2. satır (2, 4, 1), ilk eleman 2.

## Q
EN: If $B$ is a $4\times 2$ matrix, the dimension of $B'$ is:
TR: $B$ $4\times 2$ ise $B'$ (transpoz) hangi boyuttadır?
+ $2\times 4$
- $4\times 2$
- $4\times 4$
- $2\times 2$
EX: Transpoz satır ve sütunu değiştirir: $4\times 2 \to 2\times 4$.

## Q
EN: A square matrix is called **symmetric** if:
TR: Bir kare matrise ne zaman **simetrik** denir?
+ its $(i,j)$th element equals its $(j,i)$th element for all $i, j$
- all off-diagonal elements are zero
- it has 1s on the diagonal and 0s elsewhere
- all elements below the diagonal are zero
EX: Simetrik: $a_{ij}=a_{ji}$. İkinci şık köşegen matris, üçüncüsü birim matris, dördüncüsü üst üçgen matrisin tanımı.

## Q
EN: Which property of the transpose is correct?
TR: Transpozla ilgili hangisi doğrudur?
+ $(AB)' = B'A'$
- $(AB)' = A'B'$
- $(A+B)' = A' - B'$
- $(A')' = A'$
EX: Çarpımın transpozunda sıra ters döner: $(AB)'=B'A'$. Ayrıca $(A')'=A$ olur, yani iki kere çevirince başa dönersin.

## Q
EN: If $a$ is an $n\times 1$ vector, then $a'a$ is:
TR: $a$ $n\times 1$ vektör ise $a'a$ nedir?
+ a scalar equal to $\sum_{i=1}^n a_i^2$
- an $n\times n$ matrix
- an $n\times 1$ vector
- always equal to zero
EX: $a'$ $1\times n$, $a$ $n\times 1$. Çarpım $1\times 1$, yani tek bir sayı çıkar: $\sum a_i^2$. ($aa'$ yazsaydık $n\times n$ olurdu.)

## Q
EN: The identity matrix $I_n$ is:
TR: Birim matris $I_n$ nedir?
+ a diagonal matrix with 1s on the diagonal
- a matrix with all elements equal to 1
- a matrix with all elements equal to 0
- any upper triangular matrix
EX: Birim matrisin köşegeni 1, geri kalan elemanları 0'dır. Bütün elemanları 0 olan matris sıfır (null) matristir.

## GEN dotProduct

--- LESSON u0c | × | Matris çarpımı

## CARD Ne zaman çarpılabilir?
$AB$ çarpımı sadece **$A$'nın sütun sayısı = $B$'nin satır sayısı** ise tanımlıdır. Buna ==uyumlu (conformable)== denir.
$$A_{m\times \color{#d33}{n}}\; B_{\color{#d33}{n}\times p} = C_{m\times p}$$
:::ipucu Hile
Boyutları yan yana yaz: $(m\times n)(n\times p)$. İçteki iki sayı eşitse çarpılır. Dıştaki iki sayı sonucun boyutudur.
:::

## CARD Nasıl çarpılır?
$C=AB$'nin $c_{ij}$ elemanı = $A$'nın $i$. satırı ile $B$'nin $j$. sütununun iç çarpımı:
$$c_{ij} = \sum_{k=1}^{n} a_{ik} b_{kj}$$
:::ornek Ders notu örneği
$A = \begin{pmatrix} 1 & 3 & 3 \\ 2 & 4 & 1 \end{pmatrix}$, $B = \begin{pmatrix} 2 & 4 \\ 1 & 5 \\ 6 & 2 \end{pmatrix}$
$c_{11} = 1\cdot 2 + 3\cdot 1 + 3\cdot 6 = 23$
$c_{12} = 1\cdot 4 + 3\cdot 5 + 3\cdot 2 = 25$
$c_{21} = 2\cdot 2 + 4\cdot 1 + 1\cdot 6 = 14$
$c_{22} = 2\cdot 4 + 4\cdot 5 + 1\cdot 2 = 30$
$AB = \begin{pmatrix} 23 & 25 \\ 14 & 30 \end{pmatrix}$ $(2\times 2)$
:::

## CARD AB ≠ BA
Sayılarda $3\cdot 5 = 5\cdot 3$ ama matrislerde **genelde** $AB \ne BA$. Yukarıdaki örnekte $AB$ $2\times 2$ iken $BA$ $3\times 3$ çıkar. Boyutları bile farklı.
Doğru olan kurallar:
• $A(BC) = (AB)C$
• $(A+B)C = AC + BC$
• $A_{n\times n} I_n = A$ ve $A_{n\times m}0_{m\times p} = 0_{n\times p}$
:::ipucu Regresyonda boyutlar
$X$ $n\times 2$, $Y$ $n\times 1$ ise $X'X$ $(2\times n)(n\times 2) = 2\times 2$ ve $X'Y$ $(2\times n)(n\times 1)=2\times 1$ olur.
:::

## Q
EN: In general, which of the following is **not** true for matrices?
TR: Matrisler için genel olarak hangisi **doğru değildir**?
+ $AB = BA$
- $A(BC) = (AB)C$
- $(A+B)C = AC+BC$
- $AI = A$
EX: Matris çarpımı genelde değişmeli değildir: $AB\ne BA$. Hatta boyutlar bile farklı olabilir.

## Q
EN: If $A$ is $2\times 3$ and $B$ is $2\times 3$, then $AB$:
TR: $A$ $2\times 3$ ve $B$ $2\times 3$ ise $AB$ çarpımı:
+ is not defined
- is $2\times 3$
- is $2\times 2$
- is $3\times 3$
EX: $(2\times 3)(2\times 3)$: içteki sayılar 3 ve 2, eşit değil. Çarpım tanımsız. ($AB'$ olsaydı $(2\times3)(3\times2) = 2\times 2$ olurdu.)

## Q
EN: In the lecture example, $A$ is $2\times 3$ and $B$ is $3\times 2$. What is the dimension of $BA$?
TR: Ders örneğinde $A$ $2\times 3$, $B$ $3\times 2$. $BA$ hangi boyuttadır?
+ $3\times 3$
- $2\times 2$
- $3\times 2$
- not defined
EX: $(3\times 2)(2\times 3)$: içteki 2'ler eşit, sonuç dıştakiler, yani $3\times 3$. $AB$ ise $2\times 2$ idi. İşte $AB\ne BA$.

## Q
EN: Let $X$ be an $n\times 2$ matrix and $Y$ an $n\times 1$ vector. What is the dimension of $X'Y$?
TR: $X$ $n\times 2$, $Y$ $n\times 1$. $X'Y$ hangi boyuttadır?
+ $2\times 1$
- $n\times 1$
- $2\times 2$
- $1\times 2$
EX: $X'$ $2\times n$. $(2\times n)(n\times 1) = 2\times 1$. Bu, OLS formülündeki $X'Y$ vektörü.

## Q
EN: With $A=\begin{pmatrix} 1 & 3 & 3 \\ 2 & 4 & 1 \end{pmatrix}$ and $B=\begin{pmatrix} 2 & 4 \\ 1 & 5 \\ 6 & 2 \end{pmatrix}$, the $(2,2)$ element of $AB$ is:
TR: $AB$'nin $(2,2)$ elemanı kaçtır?
+ $30$
- $25$
- $14$
- $23$
EX: 2. satır (2, 4, 1) · 2. sütun (4, 5, 2) $= 8 + 20 + 2 = 30$.

## GEN matDim
## GEN matEntry

--- LESSON u0d | |A| | Determinant ve ters matris

## CARD Determinant
==Determinant== $|A|$ ya da $\det(A)$: bir **kare** matristen hesaplanan tek bir sayı.
2×2 için:
$$\left|\begin{matrix} a_{11} & a_{12} \\ a_{21} & a_{22}\end{matrix}\right| = a_{11}a_{22} - a_{12}a_{21}$$
:::ornek Örnek
$\begin{pmatrix} 3 & 1 \\ 2 & 4 \end{pmatrix}$ için $|A| = 3\cdot4 - 1\cdot 2 = 10$.
:::
3×3 ve büyük matrislerde ==kofaktör açılımı== kullanılır: $|A| = \sum_i (-1)^{i+j} a_{ij}|M_{ij}|$. Burada $M_{ij}$, $i$. satır ve $j$. sütun silinince kalan matris (minör).
**Kısayol:** köşegen ya da üçgen matrisin determinantı = köşegendekilerin çarpımı.

## CARD Tekil matris ve ters matris
• $|A| = 0$ ise $A$ ==tekil (singular)==: tersi yoktur.
• $|A|\ne 0$ ise ==tekil olmayan (nonsingular)==: tek bir $A^{-1}$ vardır ve $AA^{-1} = A^{-1}A = I$.
2×2 tersi:
$$A^{-1} = \frac{1}{|A|}\begin{pmatrix} a_{22} & -a_{12} \\ -a_{21} & a_{11}\end{pmatrix}$$
Köşegendekiler yer değiştirir, diğer ikisinin işareti değişir, sonra hepsi $|A|$'ya bölünür.
:::ornek Örnek
$A=\begin{pmatrix} 3 & 1 \\ 2 & 4 \end{pmatrix}$, $|A| = 10$ ise $A^{-1} = \frac{1}{10}\begin{pmatrix} 4 & -1 \\ -2 & 3\end{pmatrix} = \begin{pmatrix} 0.4 & -0.1 \\ -0.2 & 0.3\end{pmatrix}$
:::

## CARD Kurallar listesi
$A, B$ $n\times n$, $c$ sayı:
| Determinant | Ters matris |
| $|A'| = |A|$ | $(cA)^{-1} = c^{-1}A^{-1}$ |
| $|cA| = c^n|A|$ | $(AB)^{-1} = B^{-1}A^{-1}$ |
| $|AB| = |A||B|$ | $(A^{-1})^{-1} = A$ |
| $|A^p| = |A|^p$ | $(A')^{-1} = (A^{-1})'$ |
| üçgen: $|A| = \prod a_{ii}$ | $|A^{-1}| = 1/|A|$ |
:::dikkat En çok karıştırılan
$|cA| = c^n|A|$, yani $c|A|$ **değil**. Her satır $c$ ile çarpılıyor ve $n$ satır var.
:::

## Q
EN: A square matrix $A$ is called singular if:
TR: Kare bir $A$ matrisine ne zaman tekil (singular) denir?
+ $|A| = 0$
- $|A| = 1$
- $A = A'$
- $A^{-1} = A$
EX: Determinant sıfırsa matris tekildir ve tersi yoktur.

## Q
EN: Which of the following is correct for nonsingular $A$ and $B$?
TR: Tekil olmayan $A$, $B$ için hangisi doğrudur?
+ $(AB)^{-1} = B^{-1}A^{-1}$
- $(AB)^{-1} = A^{-1}B^{-1}$
- $|A^{-1}| = |A|$
- $(cA)^{-1} = cA^{-1}$
EX: Transpozdaki gibi, çarpımın tersinde de sıra döner. $|A^{-1}| = 1/|A|$ ve $(cA)^{-1} = \frac1c A^{-1}$ olmalı.

## Q
EN: Let $A$ be a $3\times 3$ matrix with $|A| = 2$. What is $|2A|$?
TR: $A$ $3\times 3$ ve $|A| = 2$. $|2A|$ kaçtır?
+ $16$
- $4$
- $8$
- $12$
EX: $|cA| = c^n|A| = 2^3 \cdot 2 = 16$. Sadece $2\cdot 2=4$ demek klasik tuzak.

## Q
EN: The determinant of $\begin{pmatrix} 2 & 5 & 1 \\ 0 & 3 & 7 \\ 0 & 0 & 4\end{pmatrix}$ is:
TR: Bu üst üçgen matrisin determinantı kaçtır?
+ $24$
- $9$
- $17$
- $0$
EX: Üçgen matriste determinant köşegenlerin çarpımı: $2\cdot 3\cdot 4 = 24$.

## Q
EN: If $|A| = 5$, then $|A^{-1}|$ equals:
TR: $|A| = 5$ ise $|A^{-1}|$ kaçtır?
+ $1/5$
- $5$
- $-5$
- $25$
EX: $|A^{-1}| = 1/|A| = 1/5 = 0.2$.

## Q
EN: If $|A| = 3$ and $|B| = 4$ (both $n\times n$), then $|AB|$ is:
TR: $|A|=3$, $|B|=4$ ise $|AB|$ kaçtır?
+ $12$
- $7$
- $3/4$
- cannot be determined
EX: $|AB| = |A||B| = 12$.

## GEN det2
## GEN inv2

--- LESSON u0e | ∂ | Matris türevi ve regresyonun matris hali

## CARD Gradyan: vektöre göre türev
$f(x)$ tek bir sayı veren bir fonksiyon, $x$ ise $n\times 1$ vektör olsun. ==Gradyan==, her $x_i$'ye göre türevlerin alt alta yazılmasıdır:
$$\frac{\partial f(x)}{\partial x} = \begin{pmatrix} \partial f/\partial x_1 \\ \vdots \\ \partial f/\partial x_n \end{pmatrix}_{n\times 1}$$
Ezberlemen gereken iki kural:
$$\frac{\partial\, a'x}{\partial x} = a \qquad \frac{\partial\, x'Ax}{\partial x} = (A+A')x$$
$A$ simetrikse ikincisi $2Ax$ olur. Bunlar tek değişkenli türevin karşılığı: $ax$'in türevi $a$, $ax^2$'nin türevi $2ax$.

## CARD Regresyonu matrisle yazmak (PS1 Soru 4)
$Y_i = \beta_0 + \beta_1 X_i + u_i$ modelini $n$ gözlem için tek satırda yazabiliriz:
$$\underbrace{\begin{pmatrix} Y_1 \\ Y_2 \\ \vdots \\ Y_n\end{pmatrix}}_{Y:\ n\times 1} = \underbrace{\begin{pmatrix} 1 & X_1 \\ 1 & X_2 \\ \vdots & \vdots \\ 1 & X_n\end{pmatrix}}_{X:\ n\times 2}\underbrace{\begin{pmatrix} \beta_0 \\ \beta_1 \end{pmatrix}}_{\beta:\ 2\times 1} + \underbrace{\begin{pmatrix} u_1 \\ u_2 \\ \vdots \\ u_n\end{pmatrix}}_{u:\ n\times 1}$$
Kısaca: $Y = X\beta + u$.
:::ipucu Neden ilk sütun 1'ler?
Sabit terim $\beta_0$'ı her satırda 1 ile çarpmak için. 1. satır: $1\cdot\beta_0 + X_1\beta_1 + u_1$.
:::

## CARD OLS formülü matrisle
OLS, hataların karelerinin toplamını en küçük yapar: $SSR = (Y-Xb)'(Y-Xb) = Y'Y - 2b'X'Y + b'X'Xb$
$b$'ye göre türev alıp sıfıra eşitle: $-2X'Y + 2X'Xb = 0 \Rightarrow X'Xb = X'Y$
$$\hat\beta = (X'X)^{-1}X'Y$$
Basit regresyonda (PS5 Soru 6):
$$X'X = \begin{pmatrix} n & \sum X_i \\ \sum X_i & \sum X_i^2\end{pmatrix}, \qquad X'Y = \begin{pmatrix} \sum Y_i \\ \sum X_iY_i\end{pmatrix}$$
Bunları çarpınca tanıdık formül çıkar:
$$\hat\beta_1 = \frac{n\sum X_iY_i - \sum X_i\sum Y_i}{n\sum X_i^2 - (\sum X_i)^2} = \frac{\sum (X_i-\bar X)(Y_i-\bar Y)}{\sum (X_i-\bar X)^2}$$

## Q
EN: For vectors $a$ and $x$ (both $n\times 1$), $\partial (a'x)/\partial x$ equals:
TR: $\partial (a'x)/\partial x$ neye eşittir?
+ $a$
- $a'$
- $x$
- $2a$
EX: Kural: $\partial a'x/\partial x = a$ ($n\times 1$). $a'$, satır vektörüne göre türevin ($\partial/\partial x'$) cevabıdır.

## Q
EN: If $A$ is symmetric, then $\partial (x'Ax)/\partial x$ equals:
TR: $A$ simetrikse $\partial (x'Ax)/\partial x$ nedir?
+ $2Ax$
- $Ax$
- $x'A$
- $A + A'$
EX: Genel kural $(A+A')x$. $A$ simetrikse $A'=A$ olduğu için $2Ax$ olur.

## Q
SRC: PS1 Q4
EN: In the vector form $y = X\beta + u$ of $y_i = \beta_0 + \beta_1 x_i + u_i$ with $n$ observations, the dimension of $X$ is:
TR: $n$ gözlemli basit regresyonun matris halinde $X$ matrisinin boyutu nedir?
+ $n\times 2$
- $2\times n$
- $n\times 1$
- $2\times 2$
EX: $n$ satır (her gözlem bir satır), 2 sütun (1'ler sütunu ve $x$ sütunu).

## Q
SRC: PS1 Q4
EN: In $y = X\beta + u$, the first column of $X$ is:
TR: $X$ matrisinin ilk sütunu nedir?
+ a vector of ones, for the intercept $\beta_0$
- the vector of $y_i$ values
- the vector of error terms
- a vector of zeros
EX: İlk sütun 1'lerden oluşur. Böylece her satırda $1\cdot\beta_0$, yani sabit terim oluşur.

## Q
SRC: PS5 Q6
EN: The OLS estimator in matrix form is:
TR: OLS tahmincisinin matris formu hangisidir?
+ $\hat\beta = (X'X)^{-1}X'Y$
- $\hat\beta = X'X(X'Y)^{-1}$
- $\hat\beta = (XX')^{-1}XY$
- $\hat\beta = (X'Y)^{-1}X'X$
EX: $X'Xb = X'Y$ denkleminin iki tarafını soldan $(X'X)^{-1}$ ile çarparız.

## Q
SRC: PS5 Q6
EN: In simple regression, the $(1,1)$ element of $X'X$ is:
TR: Basit regresyonda $X'X$'in $(1,1)$ elemanı nedir?
+ $n$
- $\sum X_i$
- $\sum X_i^2$
- $\sum Y_i$
EX: 1'ler sütununun kendisiyle iç çarpımı: $1+1+\dots+1 = n$. $(1,2)$ ve $(2,1)$ elemanları $\sum X_i$, $(2,2)$ elemanı $\sum X_i^2$.

## GEN olsSums
`);
