CONTENT.push(String.raw`
=== UNIT u0 | Hafta 1 · ek | Matematik Alet Çantası | Σ, matrisler ve türev. Dersin geri kalanı bu dille yazılıyor.

--- LESSON u0a | Σ | Toplam sembolü Σ ve çarpım Π

## CARD Σ sadece "topla" demek
Ekonometride sürekli yüzlerce sayıyı toplarız: 420 okulun puanı, 1.000 kişinin maaşı. Hepsini tek tek yazmak yerine ==Σ (sigma, summation operator)== kullanırız.
$$\sum_{i=1}^{n} X_i = X_1 + X_2 + \dots + X_n$$
Sembolün parçalarını oku:
• Altındaki $i=1$: "1. sayıdan başla".
• Üstündeki $n$: "$n$. sayıda dur".
• Sağdaki $X_i$: "her adımda $i$. sayıyı al".
• $i$ sadece bir **sayaç**; adı önemsiz. $\sum_{i=1}^n X_i$ ile $\sum_{j=1}^n X_j$ aynı şeydir.
:::ornek Örnek (ders notu)
$n=4$ ve $X_1=9,\ X_2=7.5,\ X_3=13,\ X_4=10$ olsun.
$\sum_{i=1}^{4} X_i = 9+7.5+13+10 = 39.5$
Ortalama: $\bar X = \frac{1}{4}\sum X_i = 39.5/4 = 9.875$
Sadece ilk iki terim: $\sum_{i=1}^{2} X_i = 9 + 7.5 = 16.5$
:::
Ortalamanın tanımından çok kullanılan bir sonuç çıkar:
$$\bar X = \frac1n \sum_{i=1}^n X_i \quad\Longrightarrow\quad \sum_{i=1}^n X_i = n\bar X$$
Yani **toplam = gözlem sayısı × ortalama**. Sınavda "ortalama 8, $n=25$, toplam kaç?" diye sorulursa cevap $25\times 8 = 200$.

## CARD Üç altın kural
Bunlar sınavda "hangisi doğrudur" sorusu olarak çıkar. $c$, $a$, $b$ sabit (değişmeyen) sayılar.
**1. Sabitin toplamı:** $\sum_{i=1}^{n} c = n\cdot c$
Aynı sayıyı $n$ kere topluyorsun: $c + c + \dots + c$. Örnek: $\sum_{i=1}^{5} 3 = 3+3+3+3+3 = 15 = 5\cdot 3$.
**2. Sabit dışarı çıkar:** $\sum c X_i = c\sum X_i$
Her terim $c$ ile çarpılıyorsa $c$'yi ortak paranteze alırsın: $cX_1 + cX_2 + \dots = c(X_1 + X_2 + \dots)$.
**3. Toplam dağılır:** $\sum (aX_i + bY_i) = a\sum X_i + b\sum Y_i$
Toplamanın sırası değişebilir: önce $X$'leri, sonra $Y$'leri toplayabilirsin.
:::ornek Üç kural birlikte
$n=10$, $\sum X_i = 50$ ise $\sum (3 + 2X_i)$ kaç?
1. Dağıt: $\sum 3 + \sum 2X_i$
2. Sabitin toplamı: $\sum 3 = 10\cdot 3 = 30$
3. Sabit dışarı: $\sum 2X_i = 2\cdot 50 = 100$
4. Topla: $30 + 100 = 130$
En sık hata: $\sum 3$'ü $3$ sanmak ve $3 + 100 = 103$ bulmak.
:::
**Çok önemli bir sonuç:** ortalamadan sapmaların toplamı her zaman sıfırdır.
$$\sum_{i=1}^{n} (X_i - \bar X) = \sum X_i - \sum \bar X = n\bar X - n\bar X = 0$$
Burada $\bar X$ bir sabit (tek bir sayı) olduğu için $\sum \bar X = n\bar X$. Sezgi: ortalamanın üstündekilerin fazlası, altındakilerin eksiğini tam kapatır. OLS konusunda bu sonuç tekrar karşına çıkacak.

## CARD İki tuzak
Sınavda yanlış şıkları genelde bu tuzaklardan yaparlar. Σ toplamayla dağılır ama **çarpma, bölme ve kare almayla dağılmaz.**
• Karelerin toplamı, toplamın karesi **değildir**: $\sum X_i^2 \ne \left(\sum X_i\right)^2$
• Oranların toplamı, toplamların oranı **değildir**: $\sum (X_i/Y_i) \ne \sum X_i / \sum Y_i$
• Çarpımların toplamı, toplamların çarpımı **değildir**: $\sum X_iY_i \ne \left(\sum X_i\right)\left(\sum Y_i\right)$
:::ornek Sayıyla gör
$X = 1, 2, 3$ ve $Y = 1, 1, 2$ olsun.
• $\sum X_i^2 = 1+4+9 = 14$ ama $(\sum X_i)^2 = 6^2 = 36$.
• $\sum X_iY_i = 1+2+6 = 9$ ama $(\sum X_i)(\sum Y_i) = 6\cdot 4 = 24$.
Tek bir karşı örnek, kuralın "her zaman" doğru olmadığını gösterir.
:::
**İki ekstra formül:**
• 1'den $n$'ye kadar sayıların toplamı: $\sum_{j=1}^{n} j = \frac{n(n+1)}{2}$. Örnek: 1'den 100'e toplam $\frac{100\cdot 101}{2} = 5050$.
• Geometrik seri: $1+X+X^2+\dots+X^n = \frac{1-X^{n+1}}{1-X}$ ($X\ne 1$).

## CARD Kare açılımı (PS1 Soru 2d)
Problem setinde şunu göstermen istendi:
$$\sum_{i=1}^{n}(a + bx_i + cy_i)^2 = na^2 + b^2\sum x_i^2 + c^2\sum y_i^2 + 2ab\sum x_i + 2ac\sum y_i + 2bc\sum x_i y_i$$
**Adım 1: parantezin karesini aç.** Üç terimin karesi: her terimin karesi + her ikilinin iki katı çarpımı.
$$(a+bx+cy)^2 = a^2 + b^2x^2 + c^2y^2 + 2abx + 2acy + 2bcxy$$
**Adım 2: her terime Σ uygula** (toplam dağılır):
$$\sum a^2 + \sum b^2x_i^2 + \sum c^2y_i^2 + \sum 2abx_i + \sum 2acy_i + \sum 2bcx_iy_i$$
**Adım 3: sabitleri dışarı çıkar.** $a, b, c$ sabit:
• $\sum a^2 = na^2$ (sabitin toplamı!)
• $\sum b^2x_i^2 = b^2\sum x_i^2$, $\sum 2abx_i = 2ab\sum x_i$, ...
:::ipucu Sınavda
"İçinde $x_i$ ya da $y_i$ olmayan terim ne olur?" diye sorarlarsa cevap $na^2$. Sadece $a^2$ yazan şık tuzak: $a^2$'yi $n$ kere topladığını unutmuşsun.
:::

## CARD Çarpım sembolü Π
==Π (pi, product operator)== aynı işi çarpma için yapar:
$$\prod_{i=1}^{n} X_i = X_1 \times X_2 \times \dots \times X_n$$
Kurallar Σ'nınkilere benzer ama toplama yerine çarpma:
• $\prod_{i=1}^{n} c = c^n$ (aynı sayıyı $n$ kere çarpıyorsun). Örnek: $\prod_{i=1}^{3} 2 = 2\cdot 2\cdot 2 = 8 = 2^3$.
• $\prod X_i^p = \left(\prod X_i\right)^p$
• $\prod X_i Y_i = \left(\prod X_i\right)\left(\prod Y_i\right)$ (çarpımda bu doğru, toplamda yanlıştı!)
:::dikkat Karıştırma
$\sum_{i=1}^n c = nc$ ama $\prod_{i=1}^n c = c^n$. Sınavda ikisi aynı soruda şık olarak verilir.
:::

## Q
SRC: PS1 Q2c
EN: For a constant $b$, what is $\sum_{i=1}^{n} b$?
TR: $b$ bir sabit. $\sum_{i=1}^{n} b$ neye eşittir?
+ $n\cdot b$
- $b$
- $n + b$
- $b^n$
EX: **Doğru cevap: $n\cdot b$.**
$\sum_{i=1}^n b$ demek "$i=1$'den $n$'ye kadar her adımda $b$ ekle" demek. Toplanan şeyde $i$ yok, yani her adımda aynı sayı ekleniyor:
$$\underbrace{b + b + \dots + b}_{n \text{ kere}} = n\cdot b$$
Sayıyla: $n=4$, $b=5$ ise $5+5+5+5 = 20 = 4\cdot 5$.
**Diğer şıklar neden yanlış?**
• $b$: sadece bir kere toplamışsın. Σ'nın $n$ kere topladığını unutmak en sık hata.
• $n+b$: toplama ile çarpmayı karıştırmak.
• $b^n$: bu çarpım sembolü Π'nin cevabı: $\prod_{i=1}^n b = b^n$.

## Q
SRC: PS1 Q2
EN: Which of the following is **always** true?
TR: Aşağıdakilerden hangisi **her zaman** doğrudur?
+ $\sum_{i=1}^{n} aX_i = a\sum_{i=1}^{n} X_i$
- $\sum_{i=1}^{n} X_i^2 = \left(\sum_{i=1}^{n} X_i\right)^2$
- $\sum_{i=1}^{n} X_i/Y_i = \sum_{i=1}^{n} X_i \big/ \sum_{i=1}^{n} Y_i$
- $\sum_{i=1}^{n} X_iY_i = \left(\sum_{i=1}^{n} X_i\right)\left(\sum_{i=1}^{n} Y_i\right)$
EX: **Doğru cevap: sabit sayı Σ'nın dışına çıkar,** $\sum aX_i = a\sum X_i$.
Neden: $aX_1 + aX_2 + \dots + aX_n$ yazınca her terimde $a$ var, ortak paranteze alırsın: $a(X_1 + \dots + X_n)$.
**Diğer üçü neden her zaman doğru değil?** Bir karşı örnek yeter: $X = 1, 2$ ve $Y = 1, 2$.
• Kareler: $\sum X_i^2 = 1 + 4 = 5$, ama $(\sum X_i)^2 = 3^2 = 9$. Eşit değil.
• Oranlar: $\sum X_i/Y_i = 1/1 + 2/2 = 2$, ama $\sum X_i/\sum Y_i = 3/3 = 1$. Eşit değil.
• Çarpımlar: $\sum X_iY_i = 1 + 4 = 5$, ama $(\sum X_i)(\sum Y_i) = 3\cdot 3 = 9$. Eşit değil.
:::ipucu Kural
Σ toplamaya ve sabitle çarpmaya "geçer". Kareye, bölmeye ve iki değişkenin çarpımına geçmez.
:::

## Q
EN: $\sum_{i=1}^{n} (X_i - \bar X)$ is equal to:
TR: $\sum_{i=1}^{n} (X_i - \bar X)$ neye eşittir?
+ $0$
- $n\bar X$
- $\bar X$
- $\sum_{i=1}^{n} X_i^2$
EX: **Doğru cevap: 0.**
Adım adım:
1. Toplamı dağıt: $\sum (X_i - \bar X) = \sum X_i - \sum \bar X$
2. $\bar X$ tek bir sayı (sabit), $n$ kere toplanır: $\sum \bar X = n\bar X$
3. Ortalamanın tanımından $\sum X_i = n\bar X$
4. Sonuç: $n\bar X - n\bar X = 0$
Sayıyla: $X = 2, 4, 9$ ise $\bar X = 5$. Sapmalar $-3, -1, +4$; toplamları $0$.
**Diğer şıklar neden yanlış?**
• $n\bar X$: bu sadece $\sum X_i$. $\sum \bar X$'i çıkarmayı unutmuşsun.
• $\bar X$ ve $\sum X_i^2$: hiçbir adımda ortaya çıkmaz.
OLS konusunda "kalıntıların toplamı sıfır" sonucu aynı mantığa dayanır.

## Q
SRC: PS1 Q2d
EN: In the expansion of $\sum_{i=1}^{n}(a+bx_i+cy_i)^2$, the term that does not involve $x_i$ or $y_i$ is:
TR: $\sum_{i=1}^{n}(a+bx_i+cy_i)^2$ açılımında $x_i$ ya da $y_i$ içermeyen terim hangisidir?
+ $na^2$
- $a^2$
- $n^2a^2$
- $2na$
EX: **Doğru cevap: $na^2$.**
1. Parantezin karesini aç: $(a + bx_i + cy_i)^2 = a^2 + b^2x_i^2 + c^2y_i^2 + 2abx_i + 2acy_i + 2bcx_iy_i$
2. İçinde $x_i$ ya da $y_i$ olmayan tek terim: $a^2$.
3. Σ uygula: $\sum_{i=1}^n a^2$. $a^2$ sabit, $n$ kere toplanır: $na^2$.
**Diğer şıklar neden yanlış?**
• $a^2$: Σ'yı uygulamayı unutmuşsun. Açılımdaki $a^2$ her $i$ için bir kere gelir, toplamda $n$ tane var.
• $n^2a^2$: $n$'nin de karesini almışsın. $n$ parantezin içinde değil, Σ'dan geliyor.
• $2na$: $(a+\dots)^2$'den tek başına $2a$ terimi çıkmaz; $2ab x_i$ gibi çapraz terimlerde hep $x$ ya da $y$ var.

## Q
EN: What is $\sum_{j=1}^{100} j$?
TR: $\sum_{j=1}^{100} j$ kaçtır?
+ $5050$
- $10000$
- $5000$
- $10100$
EX: **Doğru cevap: 5050.**
Formül: $\sum_{j=1}^{n} j = \frac{n(n+1)}{2}$. $n = 100$ koy:
$$\frac{100\cdot 101}{2} = 5050$$
Formülün mantığı (Gauss'un hilesi): sayıları baştan ve sondan eşle: $1+100 = 101$, $2 + 99 = 101$, ... 50 tane çift var, her biri 101: $50 \times 101 = 5050$.
**Diğer şıklar neden yanlış?**
• 10000: $100^2$. Formül $n^2$ değil.
• 5000: $\frac{100\cdot 100}{2}$; $n+1$ yerine $n$ kullanmışsın.
• 10100: $100\cdot 101$; 2'ye bölmeyi unutmuşsun.

## Q
EN: For a constant $c$, $\prod_{i=1}^{n} c$ equals:
TR: $c$ sabit. $\prod_{i=1}^{n} c$ neye eşittir?
+ $c^n$
- $n\cdot c$
- $c$
- $n^c$
EX: **Doğru cevap: $c^n$.**
Π "çarp" demek. Aynı sayıyı $n$ kere çarpıyorsun:
$$\underbrace{c\times c\times\dots\times c}_{n \text{ kere}} = c^n$$
Sayıyla: $c = 2$, $n = 3$ ise $2\times2\times2 = 8 = 2^3$.
**Diğer şıklar neden yanlış?**
• $n\cdot c$: bu Σ'nın cevabı ($\sum c = nc$). Toplama ile çarpımı karıştırmak.
• $c$: sadece bir kere almışsın.
• $n^c$: taban ile üs yer değiştirmiş. Taban çarpılan sayı ($c$), üs kaç kere çarpıldığı ($n$).

## GEN sumLinear
## GEN sumSquares

--- LESSON u0b | [ ] | Vektör ve matris

## CARD Vektör ve matris nedir?
Regresyonu kısa yazmak için sayıları tablolara koyarız.
==Vektör (vector)==: sayıların tek bir sütun ya da satır halinde dizilmesi.
• **Sütun vektörü** ($n\times 1$): alt alta $n$ sayı. Örnek: 5 öğrencinin puanları.
• **Satır vektörü** ($1\times n$): yan yana $n$ sayı.
==Matris (matrix)==: sayıların satır ve sütunlardan oluşan tablosu. Boyutu **satır × sütun** diye okunur. $n\times m$ matriste $n$ satır, $m$ sütun vardır ve toplam $n\cdot m$ eleman bulunur.
$$A = \begin{pmatrix} 1 & 3 & 3 \\ 2 & 4 & 1 \end{pmatrix} \quad (2\times 3)$$
Bu matrisin 2 satırı (yatay), 3 sütunu (dikey) var.
**Elemanları adlandırmak:** $a_{ij}$ = $i$. satır, $j$. sütundaki eleman.
• $a_{12}$: 1. satır (1, 3, 3), 2. sütun → $3$
• $a_{21}$: 2. satır (2, 4, 1), 1. sütun → $2$
• $a_{23}$: 2. satır, 3. sütun → $1$
:::ipucu Hafıza
"Satır önce gelir." $a_{ij}$'de ilk indeks satır, ikinci sütun. Boyutta da önce satır sayısı yazılır. Bir binada önce kat (satır), sonra daire (sütun) dersin.
:::

## CARD Matris türleri
Sınavda tanım sorusu olarak gelir. Her birini küçük örnekle tanı:
• **Kare matris (square):** satır sayısı = sütun sayısı. $\begin{pmatrix} 1 & 2 \\ 3 & 4\end{pmatrix}$ ($2\times 2$). Determinant ve ters matris sadece kare matrislerde tanımlı.
• **Simetrik (symmetric):** $a_{ij} = a_{ji}$, yani köşegene göre ayna. $\begin{pmatrix} 1 & 5 \\ 5 & 2\end{pmatrix}$: sağ üstteki 5 ile sol alttaki 5 aynı. Simetrikse $A' = A$.
• **Köşegen (diagonal):** köşegen dışındaki her şey 0. $\begin{pmatrix} 3 & 0 \\ 0 & 7\end{pmatrix}$
• **Birim matris (identity) $I_n$:** köşegeni 1, gerisi 0. $I_2 = \begin{pmatrix} 1 & 0 \\ 0 & 1\end{pmatrix}$. Sayılardaki "1" gibidir: $AI = IA = A$.
• **Sıfır matris (null) $0$:** her elemanı 0.
• **Üst üçgen (upper triangular):** köşegenin **altı** 0. $\begin{pmatrix} 2 & 5 \\ 0 & 3\end{pmatrix}$. **Alt üçgen:** köşegenin **üstü** 0.
:::dikkat Karıştırılan ikili
Birim matriste sadece köşegen 1'dir. "Bütün elemanları 1" olan matris birim matris değildir.
:::

## CARD Transpoz (devrik)
==Transpoz (transpose)== $A'$ ya da $A^T$: satırlarla sütunların yer değiştirmesi. 1. satır 1. sütun olur, 2. satır 2. sütun olur.
$$A = \begin{pmatrix} 1 & 3 & 3 \\ 2 & 4 & 1 \end{pmatrix} \Rightarrow A' = \begin{pmatrix} 1 & 2 \\ 3 & 4 \\ 3 & 1 \end{pmatrix}$$
• Boyut ters döner: $2\times 3$ matrisin transpozu $3\times 2$ olur.
• $n\times 1$ sütun vektörünün transpozu $1\times n$ satır vektörüdür.
• Eleman olarak: $A'$'nin $(i,j)$ elemanı, $A$'nın $(j,i)$ elemanıdır.
Kurallar:
• $(A')' = A$: iki kere çevirince başa dönersin.
• $(A+B)' = A' + B'$
• $(AB)' = B'A'$: sıra **ters döner**. Çorap-ayakkabı kuralı: önce çorap sonra ayakkabı giyersin; çıkarırken önce ayakkabı sonra çorap.

## CARD Toplama ve iç çarpım
• **Toplama:** sadece **aynı boyuttaki** matrisler toplanır, eleman eleman: $c_{ij} = a_{ij}+b_{ij}$.
$\begin{pmatrix} 1 & 2 \\ 3 & 4\end{pmatrix} + \begin{pmatrix} 5 & 0 \\ 1 & 1\end{pmatrix} = \begin{pmatrix} 6 & 2 \\ 4 & 5\end{pmatrix}$
• **Sayıyla çarpma:** her eleman o sayıyla çarpılır: $2\begin{pmatrix} 1 & 2 \\ 3 & 4\end{pmatrix} = \begin{pmatrix} 2 & 4 \\ 6 & 8\end{pmatrix}$
• **İç çarpım (inner product):** $a$ ve $b$ $n\times 1$ ise
$$a'b = \sum_{i=1}^n a_i b_i \qquad a'a = \sum_{i=1}^n a_i^2$$
Sonuç **tek bir sayıdır** (skaler). Boyut kontrolü: $(1\times n)(n\times 1) = 1\times 1$.
:::ornek Örnek
$a = (1, 2, 3)'$, $b = (4, 0, -1)'$ ise
$a'b = 1\cdot4 + 2\cdot0 + 3\cdot(-1) = 4 + 0 - 3 = 1$
$a'a = 1 + 4 + 9 = 14$
:::
:::dikkat $a'a$ ile $aa'$ farklı
$a'a$: $(1\times n)(n\times 1) = 1\times 1$, tek sayı. $aa'$: $(n\times 1)(1\times n) = n\times n$, koca bir matris.
:::

## Q
EN: What is the dimension of $A = \begin{pmatrix} 1 & 3 & 3 \\ 2 & 4 & 1 \end{pmatrix}$?
TR: $A$ matrisinin boyutu nedir?
+ $2\times 3$
- $3\times 2$
- $6\times 1$
- $2\times 2$
EX: **Doğru cevap: $2\times 3$.**
Say: yatay sıralar (satırlar): (1, 3, 3) ve (2, 4, 1) → **2 satır**. Dikey sıralar (sütunlar): (1,2), (3,4), (3,1) → **3 sütun**. Boyut her zaman **satır × sütun** yazılır: $2\times 3$.
**Diğer şıklar neden yanlış?**
• $3\times 2$: sırayı ters yazmışsın. Bu, transpozun boyutu.
• $6\times 1$: eleman sayısı 6 ama matris tek sütun değil.
• $2\times 2$: sütun sayısını yanlış saymışsın.

## Q
EN: For $A = \begin{pmatrix} 1 & 3 & 3 \\ 2 & 4 & 1 \end{pmatrix}$, what is $a_{21}$?
TR: Bu matriste $a_{21}$ elemanı kaçtır?
+ $2$
- $3$
- $4$
- $1$
EX: **Doğru cevap: 2.**
$a_{21}$: ilk indeks satır, ikinci indeks sütun.
1. **2. satıra** git: (2, 4, 1)
2. Bu satırın **1. elemanını** al: $2$
**Diğer şıklar neden yanlış?**
• 3: bu $a_{12}$ (1. satır, 2. sütun). İndeksleri ters okumuşsun.
• 4: bu $a_{22}$.
• 1: bu $a_{11}$ ya da $a_{23}$.

## Q
EN: If $B$ is a $4\times 2$ matrix, the dimension of $B'$ is:
TR: $B$ $4\times 2$ ise $B'$ (transpoz) hangi boyuttadır?
+ $2\times 4$
- $4\times 2$
- $4\times 4$
- $2\times 2$
EX: **Doğru cevap: $2\times 4$.**
Transpoz satırları sütun, sütunları satır yapar. $B$'nin 4 satırı $B'$'nin 4 sütunu olur, 2 sütunu da 2 satırı olur: $4\times 2 \to 2\times 4$.
**Diğer şıklar neden yanlış?**
• $4\times 2$: boyut değişmemiş olurdu; bu sadece kare matrislerde olur.
• $4\times 4$ ve $2\times 2$: bunlar $BB'$ ve $B'B$ çarpımlarının boyutları, transpozun değil.

## Q
EN: A square matrix is called **symmetric** if:
TR: Bir kare matrise ne zaman **simetrik** denir?
+ its $(i,j)$th element equals its $(j,i)$th element for all $i, j$
- all off-diagonal elements are zero
- it has 1s on the diagonal and 0s elsewhere
- all elements below the diagonal are zero
EX: **Doğru cevap:** her $i, j$ için $a_{ij}=a_{ji}$.
Köşegene ayna gibi bakarsın: sağ üstteki eleman sol alttaki elemana eşit. Örnek: $\begin{pmatrix} 1 & 5 \\ 5 & 2\end{pmatrix}$. Simetrik matris kendi transpozuna eşittir: $A' = A$. Regresyondaki $X'X$ matrisi hep simetriktir.
**Diğer şıklar hangi matrisin tanımı?**
• "Köşegen dışı her şey 0": **köşegen (diagonal)** matris.
• "Köşegende 1, gerisi 0": **birim (identity)** matris.
• "Köşegenin altı 0": **üst üçgen** matris.
Köşegen ve birim matrisler aslında simetriktir, ama simetrinin **tanımı** bu değildir; simetrik matrisin köşegen dışı elemanları sıfır olmak zorunda değil.

## Q
EN: Which property of the transpose is correct?
TR: Transpozla ilgili hangisi doğrudur?
+ $(AB)' = B'A'$
- $(AB)' = A'B'$
- $(A+B)' = A' - B'$
- $(A')' = A'$
EX: **Doğru cevap: $(AB)' = B'A'$.** Çarpımın transpozunda sıra ters döner.
Boyutla kontrol et: $A$ $2\times 3$, $B$ $3\times 4$ olsun. $AB$ $2\times 4$, yani $(AB)'$ $4\times 2$.
• $B'A'$: $(4\times 3)(3\times 2) = 4\times 2$ ✓
• $A'B'$: $(3\times 2)(4\times 3)$: içteki 2 ve 4 eşit değil, çarpım tanımsız bile!
**Diğer şıklar neden yanlış?**
• $(A+B)' = A' - B'$: toplamın transpozu transpozların **toplamıdır**: $A' + B'$.
• $(A')' = A'$: iki kere çevirince başa dönersin: $(A')' = A$.

## Q
EN: If $a$ is an $n\times 1$ vector, then $a'a$ is:
TR: $a$ $n\times 1$ vektör ise $a'a$ nedir?
+ a scalar equal to $\sum_{i=1}^n a_i^2$
- an $n\times n$ matrix
- an $n\times 1$ vector
- always equal to zero
EX: **Doğru cevap:** tek bir sayı (skaler), $\sum a_i^2$.
Boyut kontrolü: $a'$ $1\times n$, $a$ $n\times 1$. $(1\times n)(n\times 1) = 1\times 1$, yani tek sayı.
Hesap: satır ile sütunun iç çarpımı $a_1\cdot a_1 + a_2\cdot a_2 + \dots = \sum a_i^2$. Örnek: $a = (1, 2, 3)'$ ise $a'a = 1 + 4 + 9 = 14$.
**Diğer şıklar neden yanlış?**
• $n\times n$ matris: bu $aa'$ olurdu: $(n\times 1)(1\times n)$. Sıra önemli!
• $n\times 1$ vektör: boyut kuralına uymuyor.
• Her zaman 0: kareler toplamı ancak bütün $a_i = 0$ ise sıfır olur.

## Q
EN: The identity matrix $I_n$ is:
TR: Birim matris $I_n$ nedir?
+ a diagonal matrix with 1s on the diagonal
- a matrix with all elements equal to 1
- a matrix with all elements equal to 0
- any upper triangular matrix
EX: **Doğru cevap:** köşegeni 1, geri kalanı 0 olan köşegen matris.
$I_3 = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1\end{pmatrix}$. Sayılardaki 1 gibi davranır: $AI = IA = A$. Ters matrisin tanımı da buna dayanır: $AA^{-1} = I$.
**Diğer şıklar neden yanlış?**
• "Bütün elemanları 1": bu bir "birler matrisi", birim matris değil. $A$ ile çarpınca $A$'yı vermez.
• "Bütün elemanları 0": bu **sıfır (null)** matris.
• "Herhangi bir üst üçgen matris": birim matris üst üçgendir, ama her üst üçgen matris birim matris değildir.

## GEN dotProduct

--- LESSON u0c | × | Matris çarpımı

## CARD Ne zaman çarpılabilir?
$AB$ çarpımı sadece **$A$'nın sütun sayısı = $B$'nin satır sayısı** ise tanımlıdır. Buna ==uyumlu (conformable)== denir.
$$A_{m\times \color{#d33}{n}}\; B_{\color{#d33}{n}\times p} = C_{m\times p}$$
:::ipucu Domino hilesi
Boyutları yan yana yaz: $(m\times n)(n\times p)$.
• **İçteki** iki sayı eşitse çarpılır (domino taşları gibi uç uca eklenir).
• **Dıştaki** iki sayı sonucun boyutudur.
:::
:::ornek Örnekler
• $(2\times 3)(3\times 2)$: içteki 3 = 3 ✓, sonuç $2\times 2$.
• $(3\times 2)(2\times 3)$: içteki 2 = 2 ✓, sonuç $3\times 3$.
• $(2\times 3)(2\times 3)$: içteki 3 ≠ 2 ✗, çarpım **tanımsız**.
• $(1\times n)(n\times 1)$: sonuç $1\times 1$, tek sayı (iç çarpım).
:::

## CARD Nasıl çarpılır?
$C=AB$'nin $c_{ij}$ elemanı = $A$'nın **$i$. satırı** ile $B$'nin **$j$. sütununun** iç çarpımı:
$$c_{ij} = \sum_{k=1}^{n} a_{ik} b_{kj}$$
Yani satırdaki 1. sayı × sütundaki 1. sayı + satırdaki 2. sayı × sütundaki 2. sayı + ...
:::ornek Ders notu örneği
$A = \begin{pmatrix} 1 & 3 & 3 \\ 2 & 4 & 1 \end{pmatrix}$ ($2\times 3$), $B = \begin{pmatrix} 2 & 4 \\ 1 & 5 \\ 6 & 2 \end{pmatrix}$ ($3\times 2$). Sonuç $2\times 2$ olacak.
$c_{11}$: 1. satır (1, 3, 3) · 1. sütun (2, 1, 6) $= 1\cdot 2 + 3\cdot 1 + 3\cdot 6 = 2 + 3 + 18 = 23$
$c_{12}$: 1. satır (1, 3, 3) · 2. sütun (4, 5, 2) $= 1\cdot 4 + 3\cdot 5 + 3\cdot 2 = 4 + 15 + 6 = 25$
$c_{21}$: 2. satır (2, 4, 1) · 1. sütun (2, 1, 6) $= 2\cdot 2 + 4\cdot 1 + 1\cdot 6 = 4 + 4 + 6 = 14$
$c_{22}$: 2. satır (2, 4, 1) · 2. sütun (4, 5, 2) $= 2\cdot 4 + 4\cdot 5 + 1\cdot 2 = 8 + 20 + 2 = 30$
$AB = \begin{pmatrix} 23 & 25 \\ 14 & 30 \end{pmatrix}$
:::
:::ipucu Sınavda tek eleman sorulur
"$AB$'nin $(2,1)$ elemanı kaç?" sorusunda bütün matrisi hesaplama. Sadece 2. satır ile 1. sütunu çarp.
:::

## CARD AB ≠ BA
Sayılarda $3\cdot 5 = 5\cdot 3$ ama matrislerde **genelde** $AB \ne BA$. Yukarıdaki örnekte $AB$ $2\times 2$ iken $BA$ $(3\times 2)(2\times 3) = 3\times 3$ çıkar. Boyutları bile farklı! Bazen biri tanımlı, diğeri tanımsız bile olabilir.
Doğru olan kurallar:
• Birleşme: $A(BC) = (AB)C$
• Dağılma: $A(B+C) = AB + AC$ ve $(A+B)C = AC + BC$
• Birim matris: $A_{n\times n} I_n = I_nA = A$
• Sıfır matris: $A_{n\times m}0_{m\times p} = 0_{n\times p}$
:::ipucu Regresyonda boyutlar
$X$ $n\times 2$, $Y$ $n\times 1$ ise:
• $X'X$: $(2\times n)(n\times 2) = 2\times 2$
• $X'Y$: $(2\times n)(n\times 1)=2\times 1$
• $(X'X)^{-1}X'Y$: $(2\times 2)(2\times 1) = 2\times 1$ → iki katsayı, $\hat\beta_0$ ve $\hat\beta_1$. Mantıklı!
:::

## Q
EN: In general, which of the following is **not** true for matrices?
TR: Matrisler için genel olarak hangisi **doğru değildir**?
+ $AB = BA$
- $A(BC) = (AB)C$
- $(A+B)C = AC+BC$
- $AI = A$
EX: **Doğru cevap (yani yanlış olan): $AB = BA$.**
Matris çarpımı genelde **değişmeli değildir**. Örnek: $A$ $2\times 3$, $B$ $3\times 2$ ise $AB$ $2\times 2$, $BA$ $3\times 3$ olur. Boyutları farklı matrisler eşit olamaz. Kare matrislerde bile genelde farklı sonuç çıkar.
**Diğer üçü her zaman doğru:**
• $A(BC) = (AB)C$: birleşme özelliği. Hangi çarpımı önce yaptığın önemli değil (sıra değişmediği sürece).
• $(A+B)C = AC + BC$: dağılma özelliği.
• $AI = A$: birim matris çarpmada "1" gibi davranır.
:::dikkat Soruyu dikkatli oku
"Which is **not** true" soruyor. Doğru kuralları değil, yanlış olanı arıyorsun.
:::

## Q
EN: If $A$ is $2\times 3$ and $B$ is $2\times 3$, then $AB$:
TR: $A$ $2\times 3$ ve $B$ $2\times 3$ ise $AB$ çarpımı:
+ is not defined
- is $2\times 3$
- is $2\times 2$
- is $3\times 3$
EX: **Doğru cevap: tanımsız.**
Domino hilesi: $(2\times \mathbf{3})(\mathbf{2}\times 3)$. İçteki sayılar 3 ve 2, eşit değil. $A$'nın her satırında 3 sayı var ama $B$'nin her sütununda 2 sayı var; iç çarpım yapılamaz.
**Diğer şıklar neden yanlış?** Çarpım yoksa boyutu da yoktur.
• $2\times 2$: bu $AB'$ olurdu: $(2\times 3)(3\times 2) = 2\times 2$.
• $3\times 3$: bu $A'B$ olurdu: $(3\times 2)(2\times 3) = 3\times 3$.
• $2\times 3$: aynı boyutlu matrisler **toplanabilir**, ama çarpılamaz.

## Q
EN: In the lecture example, $A$ is $2\times 3$ and $B$ is $3\times 2$. What is the dimension of $BA$?
TR: Ders örneğinde $A$ $2\times 3$, $B$ $3\times 2$. $BA$ hangi boyuttadır?
+ $3\times 3$
- $2\times 2$
- $3\times 2$
- not defined
EX: **Doğru cevap: $3\times 3$.**
Sıraya dikkat: önce $B$, sonra $A$. $(3\times \mathbf{2})(\mathbf{2}\times 3)$: içteki 2'ler eşit, çarpım tanımlı. Sonuç dıştaki sayılar: $3\times 3$.
**Diğer şıklar neden yanlış?**
• $2\times 2$: bu $AB$'nin boyutu. Sırayı ters okumuşsun. İşte $AB\ne BA$'nın kanıtı: biri $2\times 2$, diğeri $3\times 3$.
• $3\times 2$: bu $B$'nin kendi boyutu.
• Tanımsız: içteki sayılar eşit olduğu için tanımlı.

## Q
EN: Let $X$ be an $n\times 2$ matrix and $Y$ an $n\times 1$ vector. What is the dimension of $X'Y$?
TR: $X$ $n\times 2$, $Y$ $n\times 1$. $X'Y$ hangi boyuttadır?
+ $2\times 1$
- $n\times 1$
- $2\times 2$
- $1\times 2$
EX: **Doğru cevap: $2\times 1$.**
1. Önce transpoz: $X$ $n\times 2$ ise $X'$ $2\times n$.
2. Domino: $(2\times \mathbf{n})(\mathbf{n}\times 1)$. İçteki $n$'ler eşit ✓.
3. Sonuç dıştakiler: $2\times 1$.
Bu, OLS formülündeki $X'Y = \begin{pmatrix} \sum Y_i \\ \sum X_iY_i\end{pmatrix}$ vektörü: iki eleman, alt alta.
**Diğer şıklar neden yanlış?**
• $n\times 1$: transpozu unutup $XY$ gibi düşünmüşsün (o da tanımsız olurdu).
• $2\times 2$: bu $X'X$'in boyutu.
• $1\times 2$: bu $Y'X$'in boyutu: $(1\times n)(n\times 2)$.

## Q
EN: With $A=\begin{pmatrix} 1 & 3 & 3 \\ 2 & 4 & 1 \end{pmatrix}$ and $B=\begin{pmatrix} 2 & 4 \\ 1 & 5 \\ 6 & 2 \end{pmatrix}$, the $(2,2)$ element of $AB$ is:
TR: $AB$'nin $(2,2)$ elemanı kaçtır?
+ $30$
- $25$
- $14$
- $23$
EX: **Doğru cevap: 30.**
$(2,2)$ elemanı = $A$'nın **2. satırı** · $B$'nin **2. sütunu**.
1. $A$'nın 2. satırı: (2, 4, 1)
2. $B$'nin 2. sütunu: (4, 5, 2)
3. Eşleşen sayıları çarp ve topla: $2\cdot 4 + 4\cdot 5 + 1\cdot 2 = 8 + 20 + 2 = 30$
**Diğer şıklar hangi eleman?**
• 23: $(1,1)$ elemanı (1. satır · 1. sütun).
• 25: $(1,2)$ elemanı (1. satır · 2. sütun).
• 14: $(2,1)$ elemanı (2. satır · 1. sütun).
Yanlış satır ya da sütunu seçmek en sık hata; önce "hangi satır, hangi sütun" yaz.

## GEN matDim
## GEN matEntry

--- LESSON u0d | |A| | Determinant ve ters matris

## CARD Determinant
==Determinant== $|A|$ ya da $\det(A)$: bir **kare** matristen hesaplanan **tek bir sayı**. Matrisin tersinin olup olmadığını söyler.
**2×2 için formül:** ana köşegen çarpımı eksi ters köşegen çarpımı.
$$\left|\begin{matrix} a_{11} & a_{12} \\ a_{21} & a_{22}\end{matrix}\right| = a_{11}a_{22} - a_{12}a_{21}$$
:::ornek Örnek
$A = \begin{pmatrix} 3 & 1 \\ 2 & 4 \end{pmatrix}$
1. Ana köşegen (sol üst → sağ alt): $3\cdot 4 = 12$
2. Ters köşegen (sağ üst → sol alt): $1\cdot 2 = 2$
3. Fark: $|A| = 12 - 2 = 10$
:::
**3×3 ve büyük matrisler:** ==kofaktör açılımı== kullanılır: bir satır seçilir, her eleman kendi ==minörünün== determinantıyla çarpılır, işaretler $+,-,+$ diye değişir:
$$|A| = \sum_j (-1)^{i+j} a_{ij}|M_{ij}|$$
$M_{ij}$: $i$. satır ve $j$. sütun silinince kalan küçük matris.
**Kısayol (sınavda çok işe yarar):** köşegen ya da üçgen matrisin determinantı = köşegendeki sayıların çarpımı. $\begin{pmatrix} 2 & 5 & 1 \\ 0 & 3 & 7 \\ 0 & 0 & 4\end{pmatrix}$ için $|A| = 2\cdot 3\cdot 4 = 24$.

## CARD Tekil matris ve ters matris
==Ters matris (inverse)== $A^{-1}$: $A$ ile çarpınca birim matrisi veren matris. Sayılardaki "bir bölü" gibi: $5 \times \frac15 = 1$.
$$AA^{-1} = A^{-1}A = I$$
• $|A| = 0$ ise $A$ ==tekil (singular)==: tersi **yoktur** (sıfıra bölemezsin).
• $|A|\ne 0$ ise ==tekil olmayan (nonsingular, invertible)==: tek bir $A^{-1}$ vardır.
**2×2 tersi formülü:**
$$A^{-1} = \frac{1}{|A|}\begin{pmatrix} a_{22} & -a_{12} \\ -a_{21} & a_{11}\end{pmatrix}$$
Üç adım: (1) köşegendekiler **yer değiştirir**, (2) diğer ikisinin **işareti değişir**, (3) hepsi $|A|$'ya **bölünür**.
:::ornek Örnek
$A=\begin{pmatrix} 3 & 1 \\ 2 & 4 \end{pmatrix}$, $|A| = 10$.
1. Köşegenleri değiştir: 3 ile 4 yer değiştirir.
2. Diğerlerinin işaretini değiştir: 1 → −1, 2 → −2.
3. 10'a böl:
$A^{-1} = \frac{1}{10}\begin{pmatrix} 4 & -1 \\ -2 & 3\end{pmatrix} = \begin{pmatrix} 0.4 & -0.1 \\ -0.2 & 0.3\end{pmatrix}$
Kontrol: $AA^{-1}$'in $(1,1)$ elemanı $3(0.4) + 1(-0.2) = 1.2 - 0.2 = 1$ ✓
:::
OLS formülünde $(X'X)^{-1}$ var. $X'X$ tekilse (örneğin bütün $X$ değerleri aynıysa) OLS hesaplanamaz.

## CARD Kurallar listesi
$A, B$ $n\times n$, $c$ bir sayı:
| Determinant | Ters matris |
| $|A'| = |A|$ | $(cA)^{-1} = c^{-1}A^{-1}$ |
| $|cA| = c^n|A|$ | $(AB)^{-1} = B^{-1}A^{-1}$ |
| $|AB| = |A||B|$ | $(A^{-1})^{-1} = A$ |
| $|A^p| = |A|^p$ | $(A')^{-1} = (A^{-1})'$ |
| üçgen: $|A| = \prod a_{ii}$ | $|A^{-1}| = 1/|A|$ |
**Kuralların mantığı:**
• $|AB| = |A||B|$: determinant çarpımla dağılır. (Toplamla dağılmaz: $|A+B| \ne |A|+|B|$.)
• $|A^{-1}| = 1/|A|$: çünkü $|A||A^{-1}| = |AA^{-1}| = |I| = 1$.
• $(AB)^{-1} = B^{-1}A^{-1}$: transpozdaki gibi sıra döner (çorap-ayakkabı).
:::dikkat En çok karıştırılan: $|cA| = c^n|A|$
$cA$'da **her satır** $c$ ile çarpılır ve her satır determinantı $c$ kat büyütür. $n$ satır olduğu için $c^n$ kat büyür. Örnek: $3\times 3$ matris, $|A| = 2$ ise $|2A| = 2^3\cdot 2 = 16$; $2\cdot 2 = 4$ değil.
:::

## Q
EN: A square matrix $A$ is called singular if:
TR: Kare bir $A$ matrisine ne zaman tekil (singular) denir?
+ $|A| = 0$
- $|A| = 1$
- $A = A'$
- $A^{-1} = A$
EX: **Doğru cevap: $|A| = 0$.**
Ters matris formülünde $\frac{1}{|A|}$ var. Determinant sıfırsa sıfıra bölmen gerekir; bu imkânsız, yani tersi yoktur. Tersi olmayan matrise tekil denir.
Örnek: $\begin{pmatrix} 1 & 2 \\ 2 & 4\end{pmatrix}$: $|A| = 4 - 4 = 0$. İkinci satır birincinin iki katı; matris tekil.
**Diğer şıklar neden yanlış?**
• $|A| = 1$: determinant 1 ise tersi kesinlikle vardır (birim matris gibi).
• $A = A'$: bu **simetrik** matrisin tanımı.
• $A^{-1} = A$: kendi tersi olan matris; tekil olamaz çünkü tersi var.

## Q
EN: Which of the following is correct for nonsingular $A$ and $B$?
TR: Tekil olmayan $A$, $B$ için hangisi doğrudur?
+ $(AB)^{-1} = B^{-1}A^{-1}$
- $(AB)^{-1} = A^{-1}B^{-1}$
- $|A^{-1}| = |A|$
- $(cA)^{-1} = cA^{-1}$
EX: **Doğru cevap: $(AB)^{-1} = B^{-1}A^{-1}$.**
Kontrol: $(AB)(B^{-1}A^{-1}) = A(BB^{-1})A^{-1} = AIA^{-1} = AA^{-1} = I$ ✓. Ortadaki $B$ ile $B^{-1}$ yan yana gelip birbirini götürür. Sıra ters olmalı ki bu olsun.
**Diğer şıklar neden yanlış?**
• $(AB)^{-1} = A^{-1}B^{-1}$: $(AB)(A^{-1}B^{-1})$'de $B$ ile $A^{-1}$ yan yana gelir, birbirini götürmez. Matris çarpımı değişmeli değil.
• $|A^{-1}| = |A|$: doğrusu $1/|A|$. Örnek: $|A| = 5$ ise $|A^{-1}| = 0.2$.
• $(cA)^{-1} = cA^{-1}$: doğrusu $\frac1c A^{-1}$. Bir şeyi $c$ kat büyütürsen tersi $c$ kat küçülür.

## Q
EN: Let $A$ be a $3\times 3$ matrix with $|A| = 2$. What is $|2A|$?
TR: $A$ $3\times 3$ ve $|A| = 2$. $|2A|$ kaçtır?
+ $16$
- $4$
- $8$
- $12$
EX: **Doğru cevap: 16.**
Kural: $|cA| = c^n|A|$. Burada $c = 2$, $n = 3$ (matris $3\times 3$), $|A| = 2$:
$$2^3 \cdot 2 = 16$$
Neden $c^n$? $2A$'da her satır 2 ile çarpılır. Bir satırı 2 ile çarpmak determinantı 2 katına çıkarır. 3 satır var: $2\times 2\times 2 = 8$ kat büyür. $8 \times 2 = 16$.
**Diğer şıklar neden yanlış?**
• 4: $c|A| = 2\cdot 2$. Klasik tuzak, üssü unutmuşsun.
• 8: sadece $c^n = 2^3$; $|A|$ ile çarpmayı unutmuşsun.
• 12: $|A|\cdot 2\cdot 3$; anlamsız bir karışım.

## Q
EN: The determinant of $\begin{pmatrix} 2 & 5 & 1 \\ 0 & 3 & 7 \\ 0 & 0 & 4\end{pmatrix}$ is:
TR: Bu üst üçgen matrisin determinantı kaçtır?
+ $24$
- $9$
- $17$
- $0$
EX: **Doğru cevap: 24.**
Matrise bak: köşegenin altındaki her şey 0. Bu bir **üst üçgen** matris. Kısayol: üçgen matrisin determinantı köşegendeki sayıların çarpımıdır:
$$2\cdot 3\cdot 4 = 24$$
Köşegen dışındaki 5, 1, 7 sonucu hiç etkilemez. Kofaktör açılımıyla da aynı sonuç çıkar ama çok daha uzun sürer.
**Diğer şıklar neden yanlış?**
• 9: köşegeni toplamışsın ($2+3+4$). Bu "iz" (trace), determinant değil.
• 17: köşegen dışını da işin içine katmışsın.
• 0: matrisin içinde sıfırlar olması determinantı sıfır yapmaz. Köşegende sıfır olsaydı 0 olurdu.

## Q
EN: If $|A| = 5$, then $|A^{-1}|$ equals:
TR: $|A| = 5$ ise $|A^{-1}|$ kaçtır?
+ $1/5$
- $5$
- $-5$
- $25$
EX: **Doğru cevap: $1/5$.**
Neden: $AA^{-1} = I$. İki tarafın determinantını al ve $|AB| = |A||B|$ kuralını kullan:
$$|A|\cdot|A^{-1}| = |I| = 1 \quad\Rightarrow\quad |A^{-1}| = \frac{1}{|A|} = \frac15 = 0.2$$
**Diğer şıklar neden yanlış?**
• 5: tersin determinantı aynı kalmaz, tersine döner.
• −5: "ters" kelimesini "eksi" sanmak. Ters matris, sayılardaki "bir bölü" gibidir.
• 25: $|A|^2$; ilgisiz.

## Q
EN: If $|A| = 3$ and $|B| = 4$ (both $n\times n$), then $|AB|$ is:
TR: $|A|=3$, $|B|=4$ ise $|AB|$ kaçtır?
+ $12$
- $7$
- $3/4$
- cannot be determined
EX: **Doğru cevap: 12.**
Kural: çarpımın determinantı determinantların çarpımıdır: $|AB| = |A||B|$.
$$|AB| = 3\times 4 = 12$$
Bu kural $n$'den bağımsızdır; matrislerin büyüklüğünü bilmene gerek yok.
**Diğer şıklar neden yanlış?**
• 7: toplamışsın. Determinant toplamla değil, çarpımla dağılır.
• $3/4$: bölmüşsün. Bu $|AB^{-1}|$ olurdu.
• "Belirlenemez": kural her kare matris için geçerli, yeterli bilgi var.

## GEN det2
## GEN inv2

--- LESSON u0e | ∂ | Matris türevi ve regresyonun matris hali

## CARD Gradyan: vektöre göre türev
Tek değişkende türev, fonksiyonun ne kadar hızlı değiştiğini söyler: $f(x) = 3x^2$ ise $f'(x) = 6x$. OLS'de en küçük değeri bulmak için türevi sıfıra eşitleriz.
Matris halinde $x$ bir vektör ($n\times 1$), $f(x)$ ise tek bir sayı. ==Gradyan==, her $x_i$'ye göre türevlerin **alt alta** yazılmasıdır:
$$\frac{\partial f(x)}{\partial x} = \begin{pmatrix} \partial f/\partial x_1 \\ \vdots \\ \partial f/\partial x_n \end{pmatrix}_{n\times 1}$$
Ezberlemen gereken iki kural ve tek değişkenli karşılıkları:
| Matris | Tek değişken karşılığı |
| $\frac{\partial\, a'x}{\partial x} = a$ | $\frac{d}{dx}(ax) = a$ |
| $\frac{\partial\, x'Ax}{\partial x} = (A+A')x$ | $\frac{d}{dx}(ax^2) = 2ax$ |
$A$ **simetrikse** $A' = A$ olduğu için ikinci kural $2Ax$ olur. Tek değişkendeki $2ax$'in tıpatıp aynısı.
:::ornek Küçük kontrol
$a = (2, 5)'$, $x = (x_1, x_2)'$ ise $a'x = 2x_1 + 5x_2$. $x_1$'e göre türev 2, $x_2$'ye göre 5. Alt alta: $(2, 5)' = a$ ✓
:::

## CARD Regresyonu matrisle yazmak (PS1 Soru 4)
$Y_i = \beta_0 + \beta_1 X_i + u_i$ modelini $n$ gözlem için tek tek yazmak yerine tek satırda yazabiliriz:
$$\underbrace{\begin{pmatrix} Y_1 \\ Y_2 \\ \vdots \\ Y_n\end{pmatrix}}_{Y:\ n\times 1} = \underbrace{\begin{pmatrix} 1 & X_1 \\ 1 & X_2 \\ \vdots & \vdots \\ 1 & X_n\end{pmatrix}}_{X:\ n\times 2}\underbrace{\begin{pmatrix} \beta_0 \\ \beta_1 \end{pmatrix}}_{\beta:\ 2\times 1} + \underbrace{\begin{pmatrix} u_1 \\ u_2 \\ \vdots \\ u_n\end{pmatrix}}_{u:\ n\times 1}$$
Kısaca: $Y = X\beta + u$.
**Boyutları kontrol et:** $X\beta$: $(n\times 2)(2\times 1) = n\times 1$. $Y$ ve $u$ de $n\times 1$. Hepsi uyumlu ✓.
**Her parça ne?**
• $Y$: $n$ gözlemin bağımlı değişkeni, alt alta.
• $X$: her gözlem bir **satır**. Satırda iki sayı var: 1 ve $X_i$. Yani $n$ satır, 2 sütun.
• $\beta$: bilinmeyen iki katsayı.
• $u$: $n$ hata terimi.
:::ipucu Neden ilk sütun 1'ler?
Sabit terim $\beta_0$'ı her satırda 1 ile çarpmak için. 1. satırı çarp: $1\cdot\beta_0 + X_1\beta_1 + u_1 = Y_1$. Tam olarak 1. gözlemin denklemi! 1'ler sütunu olmasaydı modelde sabit terim olmazdı.
:::

## CARD OLS formülü matrisle
OLS, hataların karelerinin toplamını (SSR) en küçük yapan $b$'yi bulur:
$$SSR = (Y-Xb)'(Y-Xb) = Y'Y - 2b'X'Y + b'X'Xb$$
**Adım 1:** $b$'ye göre türev al (gradyan kurallarıyla):
• $Y'Y$ $b$ içermez → türevi 0.
• $-2b'X'Y$ → $a'x$ kuralı, türevi $-2X'Y$.
• $b'X'Xb$ → $x'Ax$ kuralı, $X'X$ simetrik, türevi $2X'Xb$.
**Adım 2:** sıfıra eşitle: $-2X'Y + 2X'Xb = 0 \Rightarrow X'Xb = X'Y$ (==normal denklemler==).
**Adım 3:** iki tarafı soldan $(X'X)^{-1}$ ile çarp:
$$\hat\beta = (X'X)^{-1}X'Y$$
Basit regresyonda (PS5 Soru 6) bu matrisler şöyle görünür:
$$X'X = \begin{pmatrix} n & \sum X_i \\ \sum X_i & \sum X_i^2\end{pmatrix}, \qquad X'Y = \begin{pmatrix} \sum Y_i \\ \sum X_iY_i\end{pmatrix}$$
**Nereden geliyor?** $X'X$'in $(1,1)$ elemanı: 1'ler sütununun kendisiyle iç çarpımı $= 1+1+\dots+1 = n$. $(1,2)$: 1'ler · $X$ sütunu $= \sum X_i$. $(2,2)$: $X$ · $X$ $= \sum X_i^2$.
Tersini alıp çarpınca tanıdık formül çıkar:
$$\hat\beta_1 = \frac{n\sum X_iY_i - \sum X_i\sum Y_i}{n\sum X_i^2 - (\sum X_i)^2} = \frac{\sum (X_i-\bar X)(Y_i-\bar Y)}{\sum (X_i-\bar X)^2}$$

## Q
EN: For vectors $a$ and $x$ (both $n\times 1$), $\partial (a'x)/\partial x$ equals:
TR: $\partial (a'x)/\partial x$ neye eşittir?
+ $a$
- $a'$
- $x$
- $2a$
EX: **Doğru cevap: $a$.**
$a'x = a_1x_1 + a_2x_2 + \dots + a_nx_n$ (tek sayı). Her $x_i$'ye göre türev al:
• $\partial/\partial x_1 = a_1$, $\partial/\partial x_2 = a_2$, ...
Bunları alt alta yaz: $(a_1, a_2, \dots, a_n)' = a$. Tek değişkendeki $\frac{d}{dx}(ax) = a$ ile aynı.
**Diğer şıklar neden yanlış?**
• $a'$: satır vektörü. Sütun vektörü $x$'e göre türev sütun olarak yazılır. $a'$, $\partial/\partial x'$'nün cevabı.
• $x$: türev alınan değişken sonuçta kalmaz (fonksiyon $x$'te doğrusal).
• $2a$: 2 katsayısı kare terimden ($x'Ax$) gelir; burada kare yok.

## Q
EN: If $A$ is symmetric, then $\partial (x'Ax)/\partial x$ equals:
TR: $A$ simetrikse $\partial (x'Ax)/\partial x$ nedir?
+ $2Ax$
- $Ax$
- $x'A$
- $A + A'$
EX: **Doğru cevap: $2Ax$.**
Genel kural: $\frac{\partial\, x'Ax}{\partial x} = (A + A')x$. $A$ simetrikse $A' = A$, yani $(A + A)x = 2Ax$.
Tek değişkendeki karşılığı: $ax^2$'nin türevi $2ax$. $x'Ax$ "matris hâlinde kare"dir.
**Diğer şıklar neden yanlış?**
• $Ax$: 2'yi unutmuşsun ($x^2$'nin türevi $x$ değil $2x$).
• $x'A$: satır vektörü ve 2 eksik.
• $A + A'$: $x$ ile çarpmayı unutmuşsun; sonuç $n\times n$ matris olur, ama gradyan $n\times 1$ olmalı.
OLS'de $b'X'Xb$ teriminin türevi bu kuralla $2X'Xb$ çıkar ($X'X$ hep simetrik).

## Q
SRC: PS1 Q4
EN: In the vector form $y = X\beta + u$ of $y_i = \beta_0 + \beta_1 x_i + u_i$ with $n$ observations, the dimension of $X$ is:
TR: $n$ gözlemli basit regresyonun matris halinde $X$ matrisinin boyutu nedir?
+ $n\times 2$
- $2\times n$
- $n\times 1$
- $2\times 2$
EX: **Doğru cevap: $n\times 2$.**
• **Satır sayısı:** her gözlem bir satır, $n$ gözlem → $n$ satır.
• **Sütun sayısı:** her satırda iki sayı var: 1 (sabit terim için) ve $x_i$ → 2 sütun.
Boyut kontrolü: $X\beta$ $(n\times 2)(2\times 1) = n\times 1$, $y$ ile aynı ✓.
**Diğer şıklar neden yanlış?**
• $2\times n$: bu $X'$'nün boyutu.
• $n\times 1$: 1'ler sütununu unutmuşsun; o zaman sabit terim olmazdı.
• $2\times 2$: bu $X'X$'in boyutu.

## Q
SRC: PS1 Q4
EN: In $y = X\beta + u$, the first column of $X$ is:
TR: $X$ matrisinin ilk sütunu nedir?
+ a vector of ones, for the intercept $\beta_0$
- the vector of $y_i$ values
- the vector of error terms
- a vector of zeros
EX: **Doğru cevap:** 1'lerden oluşan vektör, sabit terim $\beta_0$ için.
$X\beta$'nın $i$. satırını hesapla: $1\cdot\beta_0 + x_i\cdot\beta_1$. Bu tam olarak $\beta_0 + \beta_1x_i$, yani modelin kendisi. İlk sütundaki 1'ler $\beta_0$'ı her gözleme ekler.
**Diğer şıklar neden yanlış?**
• $y_i$ değerleri: $y$ eşitliğin sol tarafında, ayrı bir vektör.
• Hata terimleri: $u$ ayrı bir vektör, $X$'in içinde değil.
• Sıfırlar: sıfır sütunu olsaydı $\beta_0\cdot 0 = 0$ olur, sabit terim yok olurdu.

## Q
SRC: PS5 Q6
EN: The OLS estimator in matrix form is:
TR: OLS tahmincisinin matris formu hangisidir?
+ $\hat\beta = (X'X)^{-1}X'Y$
- $\hat\beta = X'X(X'Y)^{-1}$
- $\hat\beta = (XX')^{-1}XY$
- $\hat\beta = (X'Y)^{-1}X'X$
EX: **Doğru cevap: $\hat\beta = (X'X)^{-1}X'Y$.**
Türetme: normal denklemler $X'Xb = X'Y$. İki tarafı soldan $(X'X)^{-1}$ ile çarp: $(X'X)^{-1}X'Xb = Ib = b$. Sonuç $b = (X'X)^{-1}X'Y$.
Boyut kontrolü (basit regresyon): $(X'X)^{-1}$ $2\times 2$, $X'Y$ $2\times 1$ → sonuç $2\times 1$: iki katsayı ✓.
**Diğer şıklar neden yanlış?**
• $X'X(X'Y)^{-1}$: $X'Y$ $2\times 1$ bir vektör; vektörün tersi olmaz.
• $(XX')^{-1}XY$: $XX'$ $n\times n$ ve tekil; $XY$ de tanımsız $(n\times 2)(n\times 1)$.
• $(X'Y)^{-1}X'X$: yine vektörün tersi var, tanımsız.
:::ipucu Hafıza
Tek değişkende $\hat\beta_1 = \frac{\sum xy}{\sum x^2}$ gibi düşün: "$X'Y$ bölü $X'X$". Matriste bölme yerine ters matrisle soldan çarparız.
:::

## Q
SRC: PS5 Q6
EN: In simple regression, the $(1,1)$ element of $X'X$ is:
TR: Basit regresyonda $X'X$'in $(1,1)$ elemanı nedir?
+ $n$
- $\sum X_i$
- $\sum X_i^2$
- $\sum Y_i$
EX: **Doğru cevap: $n$.**
$X'X$'in $(1,1)$ elemanı = $X'$'nün 1. satırı · $X$'in 1. sütunu = 1'ler sütununun kendisiyle iç çarpımı:
$$1\cdot 1 + 1\cdot 1 + \dots + 1\cdot 1 = n$$
Tüm $X'X$: $\begin{pmatrix} n & \sum X_i \\ \sum X_i & \sum X_i^2\end{pmatrix}$
**Diğer şıklar hangi eleman?**
• $\sum X_i$: $(1,2)$ ve $(2,1)$ elemanları (1'ler · $X$ sütunu).
• $\sum X_i^2$: $(2,2)$ elemanı ($X$ sütununun kendisiyle iç çarpımı).
• $\sum Y_i$: $X'X$'te değil, $X'Y$'nin ilk elemanı.

## GEN olsSums
`);
