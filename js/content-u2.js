CONTENT.push(String.raw`
=== UNIT u2 | Hafta 2 | Olasılık I | Rassal değişken, beklenen değer, ortak dağılım, kovaryans

--- LESSON u2a | Ω | Rassal değişken ve dağılım

## CARD Deney, örneklem uzayı, olay
• ==Deney (experiment)==: bir sonucun (gözlemin) elde edildiği süreç. Örnek: iki para atmak.
• ==Sonuç (outcome)==: deneyin birbirini dışlayan olası sonuçları.
• ==Örneklem uzayı (sample space)== $S$ ya da $\Omega$: tüm olası sonuçların kümesi.
• ==Olay (event)==: örneklem uzayının bir alt kümesi.
:::ornek Örnek
Tanıştığın bir sonraki kişinin cinsiyeti: $S = \{F, M\}$. Olaylar (alt kümeler): $\emptyset, \{F\}, \{M\}, S$.
İki para: $S = \{HH, HT, TH, TT\}$.
:::
==Olasılık (probability)==: o sonucun uzun vadede gerçekleşme oranı.

## CARD Rassal değişken
==Rassal değişken (random variable)==: örneklem uzayının **sayısal özeti**. Her sonucu bir gerçek sayıya eşleyen fonksiyon. Büyük harfle yazılır: $X, Y$.
:::ornek İki para
$Y$ = tura (H) sayısı. $\{Y=0\}=\{TT\}$, $\{Y=1\}=\{HT, TH\}$, $\{Y=2\}=\{HH\}$.
Adil parada: $P(Y=0)=1/4$, $P(Y=1)=1/2$, $P(Y=2)=1/4$.
:::
Türleri:
• ==Kesikli (discrete)==: sayılabilir değerler alır. Örnek: internetin kopma sayısı.
• ==Sürekli (continuous)==: sayılamaz sayıda değer alır. Örnek: mezuniyet sonrası maaş, işe gidiş süresi.
• Karma (mixed): ikisinin birleşimi.

## CARD Olasılık dağılımı ve CDF
• ==Olasılık dağılımı (probability distribution)==: kesikli değişkenin alabileceği tüm değerler ve her birinin olasılığı. Olasılıklar toplamı 1.
• ==Birikimli dağılım (cumulative distribution, CDF)==: $P(Y\le y)$, değişkenin belli bir değerden **küçük ya da eşit** olma olasılığı.
:::ornek İnternet kopma örneği (ders)
| $y$ | 0 | 1 | 2 | 3 | 4 |
| $P(Y=y)$ | 0.80 | 0.10 | 0.06 | 0.03 | 0.01 |
| $P(Y\le y)$ | 0.80 | 0.90 | 0.96 | 0.99 | 1.00 |
En az bir kopma: $P(Y\ge 1) = 1 - P(Y=0) = 0.20$.
:::
• ==Bernoulli== değişken: sadece 0 ya da 1 alır. $P(G=1)=p$, $P(G=0)=1-p$.
• Sürekli değişkende tek tek değer listelenmez. ==Olasılık yoğunluk fonksiyonu (pdf)== kullanılır: bir aralığın olasılığı, pdf'in altındaki alandır.

## Q
SRC: PS2 Q1b
EN: The sample space is:
TR: Örneklem uzayı nedir?
+ the set of all possible outcomes of an experiment
- a subset of the possible outcomes
- the probability of the most likely outcome
- a numerical summary of an outcome
EX: Tüm olası sonuçların kümesi. Bir alt küme "olay" (event), sayısal özet ise "rassal değişken" olur.

## Q
SRC: PS2 Q1c
EN: A random variable is:
TR: Rassal değişken nedir?
+ a numerical summary of the sample space, mapping each outcome to a real number
- any variable whose value is unknown to the researcher
- a subset of the sample space
- the probability that an event occurs
EX: Rassal değişken bir fonksiyondur: her sonucu bir sayıya eşler.

## Q
SRC: PS2 Q1e
EN: The cumulative probability distribution of $Y$ gives:
TR: $Y$'nin birikimli dağılımı (CDF) neyi verir?
+ $P(Y \le y)$
- $P(Y = y)$
- $P(Y > y)$
- $E(Y)$
EX: CDF "küçük ya da eşit" olasılığıdır: $P(Y\le y)$.

## Q
EN: Which of the following is a continuous random variable?
TR: Hangisi sürekli rassal değişkendir?
+ your salary in your first job after graduation
- the number of times your network connection fails
- the number of heads in two coin tosses
- the number of children in a household
EX: Maaş bir aralıktaki herhangi bir değeri alabilir (sayılamaz). Diğerleri sayılabilir (0, 1, 2...), yani kesikli.

## Q
EN: An event is:
TR: Olay (event) nedir?
+ a subset of the sample space
- the set of all possible outcomes
- a random variable that takes values 0 or 1
- the expected value of an outcome
EX: Olay, olası sonuçların bir koleksiyonu, yani örneklem uzayının bir alt kümesidir.

## GEN cdfTable

--- LESSON u2b | E | Beklenen değer ve varyans

## CARD Beklenen değer
==Beklenen değer (expected value)== $E(Y)$ ya da $\mu_Y$: olasılık ağırlıklı ortalama. Çok sayıda tekrarda ulaşılacak ortalama değer.
$$E(Y) = \mu_Y = \sum_{j=1}^{k} y_j\, P(Y = y_j)$$
:::ornek İnternet kopma örneği
$E(Y) = 0(0.80) + 1(0.10) + 2(0.06) + 3(0.03) + 4(0.01) = 0.35$
:::
Sürekli değişkende toplam yerine integral: $E(Y) = \int y f_Y(y)\,dy$.

## CARD Varyans ve standart sapma
==Varyans (variance)==: $Y$'nin ortalamadan sapmasının karesinin beklenen değeri. Dağılımın ne kadar yayıldığını gösterir.
$$\sigma_Y^2 = \text{var}(Y) = E(Y-\mu_Y)^2 = \sum_j (y_j-\mu_Y)^2 P(Y=y_j)$$
Kısayol formülü (genelde daha hızlı):
$$\text{var}(Y) = E(Y^2) - \mu_Y^2$$
==Standart sapma (standard deviation)== $\sigma_Y = \sqrt{\sigma_Y^2}$, varyansın pozitif karekökü.
:::ornek Kopma örneği
$\text{var}(Y) = (0-0.35)^2(0.80) + (1-0.35)^2(0.10) + (2-0.35)^2(0.06) + (3-0.35)^2(0.03) + (4-0.35)^2(0.01) = 0.6475$
:::

## CARD PS2 Soru 2: iki para, P(tura)=0.4
$Y$ = tura sayısı. Her para için $P(H)=0.4$, $P(T)=0.6$.
**a) Dağılım**
$P(Y=0) = P(TT) = 0.6\times 0.6 = 0.36$
$P(Y=1) = P(TH \text{ ya da } HT) = 2\times 0.6\times 0.4 = 0.48$
$P(Y=2) = P(HH) = 0.4\times 0.4 = 0.16$
**b) Ortalama ve varyans**
$E(Y) = 0(0.36) + 1(0.48) + 2(0.16) = 0.80$
$\text{var}(Y) = 0.36(0-0.8)^2 + 0.48(1-0.8)^2 + 0.16(2-0.8)^2 = 0.48$
:::ipucu Kısayol
Bu aslında binom dağılımı: $E(Y) = np = 2(0.4) = 0.8$ ve $\text{var}(Y) = np(1-p) = 2(0.4)(0.6) = 0.48$.
:::

## CARD Sürekli örnek (ders)
$f_Y(y) = 3/y^4$, $y>1$.
• Gerçek yoğunluk mu? $\int_1^\infty 3y^{-4}dy = [-y^{-3}]_1^\infty = 0-(-1) = 1$. Evet.
• $E(Y) = \int_1^\infty y\cdot 3y^{-4}dy = \int_1^\infty 3y^{-3}dy = 3/2$
• $E(Y^2) = \int_1^\infty 3y^{-2}dy = 3$
• $\text{var}(Y) = E(Y^2)-\mu^2 = 3 - (3/2)^2 = 3/4$

## Q
SRC: PS2 Q1f
EN: The expected value of a discrete random variable is:
TR: Kesikli bir rassal değişkenin beklenen değeri nedir?
+ the probability-weighted average of all possible values
- the most likely value
- the middle value when values are ordered
- the sum of all possible values
EX: $E(Y) = \sum y_j P(Y=y_j)$, yani olasılık ağırlıklı ortalama. En olası değer moddur, ortadaki değer medyandır.

## Q
EN: Which expression equals $\text{var}(Y)$?
TR: Hangisi $\text{var}(Y)$'ye eşittir?
+ $E(Y^2) - [E(Y)]^2$
- $E(Y^2) + [E(Y)]^2$
- $[E(Y)]^2$
- $E(Y) - [E(Y)]^2$
EX: $\text{var}(Y) = E(Y-\mu)^2 = E(Y^2) - 2\mu E(Y) + \mu^2 = E(Y^2) - \mu^2$.

## Q
SRC: PS2 Q2
EN: Two coins are tossed, each with $P(\text{heads}) = 0.4$. Let $Y$ be the number of heads. What is $P(Y=1)$?
TR: İki para atılıyor, her birinde tura olasılığı 0.4. $Y$ tura sayısı. $P(Y=1)$ nedir?
+ $0.48$
- $0.24$
- $0.40$
- $0.36$
EX: $Y=1$ iki şekilde olur: HT ya da TH. $2\times 0.4\times 0.6 = 0.48$. Sadece $0.4\times 0.6=0.24$ deyip 2 ile çarpmayı unutmak klasik hata.

## Q
SRC: PS2 Q2b
EN: In the same two-coin problem, the variance of $Y$ is:
TR: Aynı problemde $Y$'nin varyansı kaçtır?
+ $0.48$
- $0.80$
- $0.24$
- $0.64$
EX: $E(Y) = 0.8$. $\text{var} = 0.36(0.64) + 0.48(0.04) + 0.16(1.44) = 0.2304 + 0.0192 + 0.2304 = 0.48$. Kısayol: $np(1-p) = 2(0.4)(0.6)$.

## Q
EN: Consider $Y$ with density $f_Y(y) = 3/y^4$ for $y>1$. $E(Y)$ equals:
TR: $f_Y(y)=3/y^4$ ($y>1$) için $E(Y)$ kaçtır?
+ $1.5$
- $3$
- $0.75$
- $1$
EX: $E(Y) = \int_1^\infty 3y^{-3}dy = \left[-\tfrac32 y^{-2}\right]_1^\infty = 3/2$. 3, $E(Y^2)$'nin değeri. 0.75 ise varyans.

## Q
SRC: PS2 Q1g
EN: The standard deviation of $Y$ is:
TR: $Y$'nin standart sapması nedir?
+ the positive square root of the variance
- the square of the variance
- the average absolute value of $Y$
- $E(Y)$ divided by $n$
EX: $\sigma_Y = \sqrt{\sigma^2_Y}$. Birimi $Y$ ile aynıdır, varyansın birimi ise $Y$'nin biriminin karesidir.

## GEN twoCoins
## GEN meanVar

--- LESSON u2c | p | Bernoulli, çarpıklık, basıklık

## CARD Bernoulli değişkeninin momentleri
$X$ Bernoulli: $P(X=1)=p$, $P(X=0)=1-p$.
• $E(X) = 1\cdot p + 0\cdot(1-p) = p$
• $\text{var}(X) = p(1-p)$
• **PS2 Soru 4a:** $E(X^4) = 1^4\cdot p + 0^4\cdot(1-p) = p$. Genel olarak her $k\ge 1$ için $E(X^k)=p$, çünkü $1^k=1$ ve $0^k=0$.

## CARD Çarpıklık (skewness)
$$\text{Skewness} = \frac{E(Y-\mu_Y)^3}{\sigma_Y^3}$$
• $= 0$: ortalama etrafında simetrik (normal dağılım gibi).
• $> 0$: ==uzun sağ kuyruk== (ör. gelir ve kazanç dağılımları).
• $< 0$: uzun sol kuyruk.
• ==Birimsizdir (unit free)==: $Y$'nin birimini değiştirmek (TL→dolar) çarpıklığı değiştirmez.

## CARD Basıklık (kurtosis)
$$\text{Kurtosis} = \frac{E(Y-\mu_Y)^4}{\sigma_Y^4}$$
Kuyruklarda ne kadar olasılık kütlesi olduğunu ölçer.
• Normal dağılımın basıklığı $= 3$.
• $> 3$: ==kalın kuyruk (heavy tails)==, ==leptokurtic==. Uç değerler normalden daha olası.

## CARD PS2 Soru 4b: p = 0.53
• $\mu = p = 0.53$
• $\sigma^2 = p(1-p) = 0.53\times 0.47 = 0.2491$
• $E(X-\mu)^3 = p(1-p)^3 + (1-p)(-p)^3 = -0.0149$
• $E(X-\mu)^4 = p(1-p)^4 + (1-p)p^4 = 0.0629$
• Çarpıklık $= -0.0149 / 0.2491^{1.5} = -0.0149/0.1243 \approx -0.120$
• Basıklık $= 0.0629 / 0.2491^2 = 0.0629/0.0621 \approx 1.01$
:::dikkat Çözüm setinde yazım hatası var
Resmi çözümde $\sigma^2 = 0.2591$ yazıyor ama $0.53\times0.47 = 0.2491$. Bu yüzden orada çarpıklık $-0.113$, basıklık $0.937$ çıkmış. Doğru değerler $-0.120$ ve $1.01$. Sınavda şıklar bu ikisinden birine yakınsa mantıkla seç: işaret negatif (çünkü $p>0.5$, uzun kuyruk solda) ve basıklık 3'ten küçük.
:::
Kısayol formülleri: çarpıklık $= \frac{1-2p}{\sqrt{p(1-p)}}$, basıklık $= \frac{1}{p(1-p)} - 3$.

## Q
SRC: PS2 Q4a
EN: Let $X$ be Bernoulli with $P(X=1)=p$. Then $E(X^4)$ equals:
TR: $X$ Bernoulli ve $P(X=1)=p$. $E(X^4)$ nedir?
+ $p$
- $p^4$
- $p(1-p)$
- $4p$
EX: $E(X^4) = 1^4\cdot p + 0^4(1-p) = p$. $p^4$ tuzak: üssü olasılığa değil değere uyguluyoruz.

## Q
SRC: PS2 Q1m
EN: A distribution with a long right tail has:
TR: Uzun sağ kuyruklu bir dağılımın çarpıklığı nasıldır?
+ positive skewness
- negative skewness
- zero skewness
- kurtosis equal to zero
EX: Sağ kuyruk uzunsa çarpıklık pozitif. Örnek: kazanç dağılımı (birkaç kişi çok kazanır).

## Q
SRC: PS2 Q1n
EN: The kurtosis of a normal distribution is:
TR: Normal dağılımın basıklığı kaçtır?
+ $3$
- $0$
- $1$
- $-3$
EX: Normalin basıklığı 3. 3'ten büyük basıklık kalın kuyruk (leptokurtic) demektir.

## Q
SRC: PS2 Q1n
EN: A distribution is called leptokurtic if its kurtosis is:
TR: Basıklığı nasıl olan dağılıma leptokurtic denir?
+ greater than 3
- less than 3
- equal to 0
- negative
EX: Leptokurtic: basıklık > 3, kalın kuyruklar.

## Q
EN: If $Y$ is measured in Turkish lira and we convert it to dollars, its skewness:
TR: $Y$ TL cinsinden ölçülürken dolara çevrilirse çarpıklığı ne olur?
+ does not change
- is multiplied by the exchange rate
- becomes zero
- is divided by the exchange rate
EX: Çarpıklık ve basıklık birimsizdir. Pay ve payda aynı birim üssüyle değiştiği için birim değişikliği sonucu etkilemez.

## Q
SRC: PS2 Q4b
EN: For a Bernoulli variable with $p = 0.53$, the variance is:
TR: $p=0.53$ olan Bernoulli değişkenin varyansı kaçtır?
+ $0.2491$
- $0.53$
- $0.2809$
- $0.47$
EX: $p(1-p) = 0.53\times0.47 = 0.2491$. $0.2809 = 0.53^2$ tuzak.

## GEN bernoulli

--- LESSON u2d | ⊞ | Ortak, marjinal ve koşullu dağılım

## CARD Ortak dağılım
İki rassal değişken: ==ortak olasılık dağılımı (joint probability distribution)== $P(X=x, Y=y)$, yani ikisinin **aynı anda** belli değerleri alma olasılığı. Bütün hücreler toplamı 1.
:::ornek Ders örneği: yağmur ve işe gidiş süresi
$Y=1$ kısa yol (<20 dk), $X=0$ yağmurlu, $X=1$ yağmursuz.
| | Yağmur $X=0$ | Yağmur yok $X=1$ | Toplam |
| Uzun $Y=0$ | 0.15 | 0.07 | 0.22 |
| Kısa $Y=1$ | 0.15 | 0.63 | 0.78 |
| Toplam | 0.30 | 0.70 | 1.00 |
:::

## CARD Marjinal dağılım
==Marjinal dağılım (marginal distribution)==: tek bir değişkenin kendi dağılımı. Tabloda **satır ve sütun toplamları**:
$$P(Y=y) = \sum_{i} P(Y=y, X=x_i)$$
Örnek: $P(Y=0) = 0.15 + 0.07 = 0.22$, $P(X=0) = 0.15+0.15 = 0.30$.
"Marjinal" kelimesi sadece ortak dağılımdan ayırmak için kullanılır. Normal olasılık dağılımıyla aynı şey.

## CARD Koşullu dağılım
==Koşullu olasılık (conditional probability)==: $X=x$ olduğunu **bildiğimizde** $Y=y$ olma olasılığı.
$$P(Y=y \mid X=x) = \frac{P(Y=y,\ X=x)}{P(X=x)}$$
**Ortak hücreyi, koşul olan değişkenin marjinaline böl.**
:::ornek Örnekler
Yağmur yağarken kısa yol: $P(Y=1\mid X=0) = 0.15/0.30 = 0.50$
Kısa yol olduysa yağmur yokmuş: $P(X=1\mid Y=1) = 0.63/0.78 = 0.81$
:::
:::dikkat Ders notunda küçük hata
Slaytta ikinci örnek $0.63/0.70 = 0.90$ hesaplanmış. Doğrusu $P(Y=1)=0.78$ ile bölmek. Sınavda formüle güven: koşulun marjinaline bölünür.
:::

## Q
SRC: PS2 Q1h
EN: The joint probability distribution of two discrete random variables $X$ and $Y$ is:
TR: İki kesikli rassal değişkenin ortak dağılımı nedir?
+ the probability that $X$ and $Y$ simultaneously take on certain values $x$ and $y$
- the distribution of $Y$ alone
- the distribution of $Y$ given $X = x$
- the sum of the two marginal distributions
EX: Ortak dağılım: $P(X=x, Y=y)$, yani ikisinin aynı anda belli değerleri alması. Tüm olasılıkların toplamı 1.

## Q
SRC: PS2 Q1i
EN: The marginal probability distribution of $Y$ is:
TR: $Y$'nin marjinal dağılımı nedir?
+ the probability distribution of $Y$ alone, obtained by summing joint probabilities over values of $X$
- the probability of $Y$ given a specific value of $X$
- the product of $P(X)$ and $P(Y)$
- the joint distribution divided by $P(X)$
EX: Marjinal = tek değişkenin dağılımı. Ortak tablodaki satır ya da sütun toplamlarından bulunur.

## Q
SRC: PS2 Q3d
EN: Using the Turkish labor table ($P(X=1,Y=0)=0.009$, $P(Y=0)=0.035$, where $Y=0$ is unemployed and $X=1$ is college graduate), what is the probability that an unemployed worker is a college graduate?
TR: İşsiz ($Y=0$) bir kişinin üniversite mezunu ($X=1$) olma olasılığı nedir?
+ $0.2571$
- $0.0226$
- $0.0090$
- $0.0350$
EX: $P(X=1\mid Y=0) = P(X=1,Y=0)/P(Y=0) = 0.009/0.035 = 0.2571$. Koşul $Y=0$ olduğu için $P(Y=0)$'a bölüyoruz.

## Q
EN: The probabilities in a joint distribution table, summed over all cells, equal:
TR: Ortak dağılım tablosundaki tüm hücrelerin toplamı kaçtır?
+ $1$
- the number of cells
- $0$
- $E(XY)$
EX: Hücreler birbirini dışlayan tüm olası sonuçlar, yani örneklem uzayı. Toplamları 1.

## Q
SRC: PS2 Q1j
EN: $P(Y=y\mid X=x)$ is computed as:
TR: $P(Y=y\mid X=x)$ nasıl hesaplanır?
+ $P(Y=y, X=x)/P(X=x)$
- $P(Y=y, X=x)/P(Y=y)$
- $P(Y=y)\cdot P(X=x)$
- $P(Y=y) + P(X=x) - P(Y=y,X=x)$
EX: Ortak olasılık, koşulun marjinaline bölünür. Koşul $X=x$ olduğu için payda $P(X=x)$.

## GEN joint

--- LESSON u2e | E(·|·) | Koşullu beklenti, LIE, bağımsızlık

## CARD Koşullu beklenti
==Koşullu beklenti (conditional expectation)== $E(Y\mid X=x)$: koşullu dağılımın ortalaması.
$$E(Y\mid X=x) = \sum_j y_j\,P(Y=y_j\mid X=x)$$
$Y$ 0/1 ise kısayol: $E(Y\mid X=x) = P(Y=1\mid X=x)$.
• $E(Y\mid X=x)$ ($x$ belli) bir **sayıdır**.
• $E(Y\mid X)$ ($x$ belli değil) bir **rassal değişkendir**.
:::ornek Ders örneği
$E(Y\mid X=1) = 1\cdot P(Y=1\mid X=1) = 0.63/0.70 = 0.9$
$\text{var}(Y\mid X=1) = (1-0.9)^2(0.9) + (0-0.9)^2(0.1) = 0.09$
:::

## CARD Yinelenen beklentiler yasası (LIE)
==Law of Iterated Expectations (LIE)==: $Y$'nin genel ortalaması, koşullu ortalamaların $X$'in olasılıklarıyla ağırlıklı ortalamasıdır.
$$E(Y) = \sum_i E(Y\mid X=x_i)\,P(X=x_i) = E\big[E(Y\mid X)\big]$$
Önemli sonuç: $E(Y\mid X)=0$ ise $E(Y) = E(0) = 0$. Regresyonda $E(u\mid X)=0 \Rightarrow E(u)=0$ ispatında bunu kullanacağız.
Çok değişkenli hali: $E(Y) = E[E(Y\mid X,Z)]$.

## CARD Bağımsızlık
$X$ ve $Y$ ==bağımsız (independent)==: birinin değerini bilmek diğeri hakkında **hiç bilgi vermez**. Tüm $x, y$ için:
$$P(Y=y, X=x) = P(Y=y)\,P(X=x) \quad\text{ya da}\quad P(Y=y\mid X=x) = P(Y=y)$$
Bağımsızsa $E(Y\mid X) = E(Y)$ olur.
**Nasıl kontrol edilir?** Bir hücre seç, ortak olasılık marjinallerin çarpımına eşit mi bak. **Tek bir hücre bile tutmazsa bağımlıdır.**

## CARD PS2 Soru 3: Türkiye işgücü tablosu
$Y=1$ istihdamda, $Y=0$ işsiz. $X=1$ üniversite mezunu, $X=0$ değil.
| | $X=0$ | $X=1$ | Toplam |
| $Y=0$ | 0.026 | 0.009 | 0.035 |
| $Y=1$ | 0.576 | 0.389 | 0.965 |
| Toplam | 0.602 | 0.398 | 1 |
**a)** $E(Y) = 0(0.035) + 1(0.965) = 0.965$
**b)** $E(Y\mid X=1) = 0.389/0.398 = 0.9774$, $E(Y\mid X=0) = 0.576/0.602 = 0.9568$
**c)** İşsizlik oranı: mezunlarda $0.009/0.398 = 2.26\%$ $(=1-0.9774)$, mezun olmayanlarda $0.026/0.602 = 4.32\%$
**d)** $P(X=1\mid Y=0) = 0.009/0.035 = 0.2571$, $P(X=0\mid Y=0) = 0.7429$
**e)** $P(Y=0)P(X=0) = 0.035\times0.602 = 0.0211 \ne 0.026$, yani **bağımsız değiller**. Ayrıca $E(Y\mid X=1)\ne E(Y)$.

## Q
SRC: PS2 Q3c
EN: Using the Turkish labor table, the unemployment rate among college graduates is approximately:
TR: Türkiye tablosunda üniversite mezunlarının işsizlik oranı yaklaşık kaçtır?
+ $2.26\%$
- $0.9\%$
- $4.32\%$
- $25.71\%$
EX: Mezunlar içinde işsiz olanların oranı: $P(Y=0\mid X=1) = 0.009/0.398 = 0.0226$. 0.9% ($0.009$) ortak olasılıktır, mezunların sayısına bölmeyi unutma.

## Q
SRC: PS2 Q3b
EN: In the Turkish labor table, $E(Y\mid X=1)$ equals:
TR: Türkiye tablosunda $E(Y\mid X=1)$ kaçtır?
+ $0.9774$
- $0.389$
- $0.965$
- $0.9568$
EX: $Y$ 0/1 olduğu için $E(Y\mid X=1) = P(Y=1\mid X=1) = 0.389/0.398 = 0.9774$. 0.9568 ise $X=0$ için olan değer.

## Q
SRC: PS2 Q3e
EN: In the Turkish labor table, $P(Y=0,X=0) = 0.026$ while $P(Y=0)P(X=0) = 0.0211$. We conclude that:
TR: $P(Y=0,X=0)=0.026$ ama $P(Y=0)P(X=0)=0.0211$. Sonuç nedir?
+ education and employment status are not independent
- education and employment status are independent
- the table is invalid
- the covariance is zero
EX: Bağımsızlık her hücrede ortak = marjinallerin çarpımı gerektirir. Bir hücrede bile tutmuyorsa bağımsız değiller.

## Q
EN: The law of iterated expectations states that:
TR: Yinelenen beklentiler yasası (LIE) ne der?
+ $E(Y) = E[E(Y\mid X)]$
- $E(Y\mid X) = E(Y)$ always
- $E(XY) = E(X)E(Y)$
- $\text{var}(Y) = E[\text{var}(Y\mid X)]$
EX: LIE: koşullu beklentilerin ($X$'in dağılımına göre) beklentisi genel beklentiyi verir. İkinci şık sadece bağımsızlıkta doğru.

## Q
EN: If $X$ and $Y$ are independent, then:
TR: $X$ ve $Y$ bağımsızsa hangisi doğrudur?
+ $E(Y\mid X) = E(Y)$
- $E(Y\mid X) = 0$
- $\text{corr}(X,Y) = 1$
- $P(Y=y, X=x) = P(Y=y) + P(X=x)$
EX: Bağımsızlıkta $X$'i bilmek $Y$ hakkında bilgi vermez, koşullu ortalama genel ortalamaya eşit olur.

## Q
EN: $E(Y\mid X)$, without specifying the value of $X$, is:
TR: $X$'in değeri belirtilmeden yazılan $E(Y\mid X)$ nedir?
+ a random variable
- always a constant
- always zero
- equal to $E(X\mid Y)$
EX: $X$ rastgele olduğu için $E(Y\mid X)$ de rastgeledir. $E(Y\mid X=x)$ ise sabit bir sayıdır.

## GEN condExp

--- LESSON u2f | ρ | Kovaryans, korelasyon ve kurallar

## CARD Kovaryans
==Kovaryans (covariance)==: iki değişkenin **doğrusal** olarak birlikte hareketinin ölçüsü.
$$\text{cov}(X,Y) = \sigma_{XY} = E[(X-\mu_X)(Y-\mu_Y)] = E(XY) - \mu_X\mu_Y$$
• $\text{cov}(X,X) = \text{var}(X)$
• Bağımsızsa $\text{cov}=0$, çünkü $E(XY) = E(X)E(Y)$.
• Birimi: $X$'in birimi × $Y$'nin birimi. Bu yüzden yorumlamak zordur.
:::dikkat Tersi her zaman doğru değil
$\text{cov}=0$ bağımsızlık anlamına gelmez. Sadece **doğrusal** ilişki yok demektir.
:::

## CARD Korelasyon
==Korelasyon (correlation)==: standartlaştırılmış kovaryans.
$$\text{corr}(X,Y) = \rho_{XY} = \frac{\text{cov}(X,Y)}{\sqrt{\text{var}(X)\text{var}(Y)}} = \frac{\sigma_{XY}}{\sigma_X\sigma_Y}$$
• **Birimsiz** ve her zaman $-1 \le \rho \le 1$.
• $+1$'e yakın: güçlü pozitif doğrusal ilişki, $-1$'e yakın: güçlü negatif, $0$: doğrusal ilişki yok.
• Ders sonucu: $E(Y\mid X) = \mu_Y$ ise $\text{cov}(Y,X) = \text{corr}(Y,X) = 0$.

## CARD Hesap kuralları (ezberle)
$a, b, c$ sabit:
• $E(a + bX + cY) = a + b\mu_X + c\mu_Y$
• $\text{var}(a + bY) = b^2\sigma_Y^2$ ($a$ kaybolur!)
• $\text{var}(aX + bY) = a^2\sigma_X^2 + b^2\sigma_Y^2 + 2ab\,\sigma_{XY}$
• $E(Y^2) = \sigma_Y^2 + \mu_Y^2$
• $E(XY) = \sigma_{XY} + \mu_X\mu_Y$
• $\text{cov}(a + bX + cV,\, Y) = b\,\sigma_{XY} + c\,\sigma_{VY}$
• $|\text{corr}(X,Y)|\le 1$ ve $|\sigma_{XY}| \le \sigma_X\sigma_Y$
:::dikkat Slayttaki yazım hatası
Ders notunda $\text{var}(aX+bY)$ formülünde $2ab\sigma_X\sigma_Y$ yazıyor. Doğrusu $2ab\,\sigma_{XY}$ (kovaryans).
:::

## CARD PS3 Soru 2: ispatlar
**a)** $E(a+bX) = \sum (a+bx_i)p_i = a\sum p_i + b\sum x_ip_i = a + bE(X)$, çünkü $\sum p_i = 1$.
**b)** $\text{var}(a+bX) = E[(a+bX - a - bE(X))^2] = E[b^2(X-E(X))^2] = b^2\text{var}(X)$
**c)** $\text{cov}(Y, a+bX+cY) = E[(Y-EY)(b(X-EX)+c(Y-EY))] = b\,\text{cov}(Y,X) + c\,\text{var}(Y)$
**d)** Bağımsızsa ortak = marjinallerin çarpımı. Bu yüzden $E(X^aY^b) = E(X^a)E(Y^b)$ ve $\text{var}(X+Y) = \text{var}(X)+\text{var}(Y)$ (çapraz terim $2\text{cov}=0$).

## Q
SRC: PS3 Q2b
EN: For constants $a$ and $b$, $\text{var}(a+bX)$ equals:
TR: $a$, $b$ sabit. $\text{var}(a+bX)$ nedir?
+ $b^2\text{var}(X)$
- $a + b^2\text{var}(X)$
- $b\,\text{var}(X)$
- $a^2 + b^2\text{var}(X)$
EX: Sabit eklemek yayılımı değiştirmez, bu yüzden $a$ gider. Çarpan karesiyle çıkar: $b^2$.

## Q
SRC: PS3 Q2c
EN: $\text{cov}(Y, a + bX + cY)$ equals:
TR: $\text{cov}(Y, a + bX + cY)$ neye eşittir?
+ $b\,\text{cov}(X,Y) + c\,\text{var}(Y)$
- $a + b\,\text{cov}(X,Y) + c\,\text{var}(Y)$
- $b\,\text{var}(X) + c\,\text{var}(Y)$
- $bc\,\text{cov}(X,Y)$
EX: Sabit $a$'nın kovaryansa katkısı yok. $\text{cov}(Y,bX) = b\,\text{cov}(Y,X)$ ve $\text{cov}(Y,cY) = c\,\text{var}(Y)$.

## Q
SRC: PS2 Q1l
EN: Unlike covariance, correlation:
TR: Kovaryanstan farklı olarak korelasyon:
+ is unit free and lies between $-1$ and $1$
- is measured in the units of $X$ times the units of $Y$
- can take any real value
- measures nonlinear relationships only
EX: Korelasyon kovaryansın $\sigma_X\sigma_Y$'ye bölünmüş hâlidir. Birimsizdir ve $[-1,1]$ aralığındadır.

## Q
SRC: PS3 Q2d
EN: If $X$ and $Y$ are independent, then $\text{var}(X+Y)$ equals:
TR: $X$ ve $Y$ bağımsızsa $\text{var}(X+Y)$ nedir?
+ $\text{var}(X) + \text{var}(Y)$
- $\text{var}(X) + \text{var}(Y) + 2\,\text{cov}(X,Y)$ with $\text{cov}(X,Y) > 0$
- $\text{var}(X)\,\text{var}(Y)$
- $[\text{var}(X)+\text{var}(Y)]^2$
EX: Genel formül $\text{var}(X)+\text{var}(Y)+2\text{cov}(X,Y)$. Bağımsızlıkta $\text{cov}=0$ olduğu için çapraz terim düşer.

## Q
EN: If $\text{cov}(X,Y) = 0$, then:
TR: $\text{cov}(X,Y) = 0$ ise hangisi kesin doğrudur?
+ there is no linear association between $X$ and $Y$
- $X$ and $Y$ must be independent
- $E(Y\mid X) = 0$
- $\text{var}(X) = \text{var}(Y)$
EX: Sıfır kovaryans sadece doğrusal ilişki olmadığını söyler. Doğrusal olmayan bir ilişki olabilir, yani bağımsızlık garanti değil.

## Q
EN: The covariance between $X$ (in years) and $Y$ (in dollars) is measured in:
TR: $X$ yıl, $Y$ dolar cinsindense kovaryansın birimi nedir?
+ years × dollars
- dollars only
- years only
- it is unit free
EX: Kovaryans iki sapmanın çarpımının beklentisi, birimi de çarpım olur. Korelasyon ise birimsizdir.

## GEN linComb
## GEN corrCalc
`);
