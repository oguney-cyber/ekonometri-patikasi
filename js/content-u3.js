CONTENT.push(String.raw`
=== UNIT u3 | Hafta 3 | Olasılık II | Normal, ki-kare, t, F, örneklem ortalaması, BBK ve MLT

--- LESSON u3a | N | Normal dağılım

## CARD Çan eğrisi
$Y\sim N(\mu_Y, \sigma_Y^2)$: ortalaması $\mu$, **varyansı** $\sigma^2$ olan ==normal dağılım==. Çan şeklinde ve $\mu$ etrafında simetrik.
==Standart normal (standard normal)==: $Z\sim N(0,1)$. CDF'ine $\Phi$ denir: $\Phi(z) = P(Z\le z)$. Kapalı formülü yok, değerleri tablodan (Z-table) ya da bilgisayardan okunur.
:::dikkat En çok yapılan hata
$N(1, 4)$'teki 4 **varyans**. Standart sapma $\sigma = \sqrt4 = 2$. Standartlaştırırken $\sigma$'ya bölünür, varyansa değil.
:::

## CARD Standartlaştırma
Her normal soruyu $Z$'ye çevirip çözeriz:
$$Z = \frac{Y-\mu}{\sigma} \qquad P(Y\le c) = \Phi\!\left(\frac{c-\mu}{\sigma}\right)$$
• $P(Y > c) = 1 - \Phi\!\left(\frac{c-\mu}{\sigma}\right)$
• $P(a\le Y\le b) = \Phi\!\left(\frac{b-\mu}{\sigma}\right) - \Phi\!\left(\frac{a-\mu}{\sigma}\right)$
• Simetri: $\Phi(-z) = 1-\Phi(z)$
:::ornek Ders örneği
$Y\sim N(1,4)$, $P(Y\le 2) = P\left(Z\le \frac{2-1}{2}\right) = \Phi(0.5) = 0.691$
:::

## CARD Ezberlenecek değerler
| $z$ | 0 | 1 | 1.28 | 1.645 | 1.96 | 2 | 2.33 | 2.576 |
| $\Phi(z)$ | 0.5 | 0.8413 | 0.90 | 0.95 | 0.975 | 0.9772 | 0.99 | 0.995 |
• $P(-1\le Z\le 1) = 0.6827$
• $P(-1.96\le Z\le 1.96) = 0.95$
• $P(-2.576\le Z\le 2.576) = 0.99$
Diğer değerler için **Tablolar** sekmesindeki Z tablosunu kullan.

## CARD PS3 Soru 3 çözümü
**a)** $Y\sim N(1,4)$: $P(Y\le 3) = \Phi\left(\frac{3-1}{2}\right) = \Phi(1) = 0.8413$
**b)** $Y\sim N(3,9)$: $P(Y>0) = 1-\Phi\left(\frac{0-3}{3}\right) = 1-\Phi(-1) = \Phi(1) = 0.8413$
**c)** $Y\sim N(50,25)$, $\sigma=5$: $P(40\le Y\le 52) = \Phi(0.4) - \Phi(-2) = 0.6554 - 0.0228 = 0.6327$

## Q
SRC: PS3 Q3a
EN: If $Y\sim N(1,4)$, find $P(Y\le 3)$.
TR: $Y\sim N(1,4)$ ise $P(Y\le 3)$ nedir?
+ $0.8413$
- $0.6915$
- $0.9772$
- $0.1587$
EX: $\sigma = \sqrt4 = 2$. $z = (3-1)/2 = 1$, $\Phi(1) = 0.8413$. 4'e bölüp $z=0.5$ bulursan 0.6915 çıkar, tuzak bu.

## Q
SRC: PS3 Q3b
EN: If $Y\sim N(3,9)$, find $P(Y>0)$.
TR: $Y\sim N(3,9)$ ise $P(Y>0)$ nedir?
+ $0.8413$
- $0.1587$
- $0.6293$
- $0.5000$
EX: $\sigma=3$. $z = (0-3)/3 = -1$. $P(Y>0) = 1-\Phi(-1) = \Phi(1) = 0.8413$.

## Q
SRC: PS3 Q3c
EN: If $Y\sim N(50,25)$, find $P(40\le Y\le 52)$.
TR: $Y\sim N(50,25)$ ise $P(40\le Y\le 52)$ nedir?
+ $0.6327$
- $0.6554$
- $0.0228$
- $0.9544$
EX: $\sigma = 5$. $z_1 = (40-50)/5 = -2$, $z_2 = (52-50)/5 = 0.4$. $\Phi(0.4)-\Phi(-2) = 0.6554-0.0228 = 0.6327$.

## Q
EN: For $Z\sim N(0,1)$, $\Phi(-1.96)$ equals approximately:
TR: $Z\sim N(0,1)$ için $\Phi(-1.96)$ yaklaşık kaçtır?
+ $0.025$
- $0.05$
- $0.975$
- $-0.975$
EX: $\Phi(1.96) = 0.975$, simetriden $\Phi(-1.96) = 1-0.975 = 0.025$. Olasılık negatif olamaz.

## Q
SRC: PS3 Q1a
EN: If $Y\sim N(\mu, \sigma^2)$, then $(Y-\mu)/\sigma$ has a:
TR: $Y\sim N(\mu,\sigma^2)$ ise $(Y-\mu)/\sigma$ hangi dağılıma sahiptir?
+ standard normal distribution, $N(0,1)$
- chi-squared distribution with 1 degree of freedom
- $N(\mu, 1)$ distribution
- $N(0, \sigma^2)$ distribution
EX: Ortalamayı çıkarıp standart sapmaya bölmek standartlaştırmadır. Sonuç $N(0,1)$.

## GEN normalProb

--- LESSON u3b | χ² | Ki-kare, t ve F dağılımları

## CARD Ki-kare (χ²)
$Z_1, \dots, Z_m$ bağımsız $N(0,1)$ olsun:
$$Z_1^2 + Z_2^2 + \dots + Z_m^2 \sim \chi^2_m$$
$m$ = ==serbestlik derecesi (degrees of freedom)==.
• Her zaman pozitif, sağa çarpık.
• $E(\chi^2_m) = m$, $\text{var}(\chi^2_m) = 2m$
• Özel durum: $\chi^2_1 = Z^2$. Bu yüzden $P(\chi^2_1\le 1) = P(-1\le Z\le 1) = 0.6827$ ve $\chi^2_1$'in %95 kritik değeri $1.96^2 = 3.84$.

## CARD Student t
$Z\sim N(0,1)$ ve $W\sim\chi^2_m$ bağımsız olsun:
$$\frac{Z}{\sqrt{W/m}} \sim t_m$$
• Normal gibi çan şeklinde ama **kuyrukları daha kalın** (fatter tails).
• $m\ge 30$ iken normale çok yakın. $t_\infty = N(0,1)$.
:::ornek Ders örneği 3
$t_{90}$ için $P(-1.99\le Y\le 1.99) = 0.9504$, $N(0,1)$ için $0.9534$. Neden neredeyse aynı? 90 serbestlik derecesi büyük, $t_{90}\approx N(0,1)$.
:::

## CARD F dağılımı
$W\sim\chi^2_m$, $V\sim\chi^2_n$ bağımsız olsun:
$$\frac{W/m}{V/n} \sim F_{m,n}$$
Önemli özel durum: payda serbestlik derecesi sonsuz olunca $V/n\to 1$:
$$F_{m,\infty} = \frac{\chi^2_m}{m}$$
:::ornek PS3 Soru 4c-d
$Y\sim F_{10,\infty}$: $P(Y>1.831) = P\left(\frac{W}{10} > 1.831\right) = P(W > 18.31) = 0.05$, $W\sim\chi^2_{10}$.
Bu yüzden 4b ($\chi^2_{10}$, $P(W>18.31)$) ile 4c'nin cevabı aynı.
:::

## CARD PS3 Soru 4: cevaplar
**a)** $Y\sim\chi^2_4$: $P(Y\le 7.78) = 0.90$ (7.78, $\chi^2_4$'ün %90 değeri)
**b)** $W\sim\chi^2_{10}$: $P(W>18.31) = 0.05$
**c)** $Y\sim F_{10,\infty}$: $P(Y>1.831) = 0.05$
**d)** Aynılar, çünkü $F_{10,\infty} = \chi^2_{10}/10$ ve $1.831\times10 = 18.31$.
**e)** $Y\sim\chi^2_1$: $P(Y\le1) = P(Z^2\le 1) = P(-1\le Z\le 1) = 0.6827$
Sınavda bunlar için **Tablolar** sekmesindeki ki-kare ve F tablolarına bak.

## Q
SRC: PS3 Q1b
EN: The chi-squared distribution with $m$ degrees of freedom is the distribution of:
TR: $m$ serbestlik dereceli ki-kare dağılımı neyin dağılımıdır?
+ the sum of $m$ squared independent standard normal random variables
- the sum of $m$ independent standard normal random variables
- the ratio of two independent normal variables
- the square of a $t_m$ random variable
EX: $\chi^2_m = Z_1^2+\dots+Z_m^2$. Karelerin toplamı, toplamın karesi değil.

## Q
SRC: PS3 Q1c
EN: The Student $t$ distribution with $m$ degrees of freedom is the distribution of:
TR: $t_m$ dağılımı neyin dağılımıdır?
+ $Z/\sqrt{W/m}$, where $Z\sim N(0,1)$ and $W\sim\chi^2_m$ are independent
- $W/m$, where $W\sim\chi^2_m$
- $(W/m)/(V/n)$, where $W$ and $V$ are independent chi-squared variables
- $Z^2$, where $Z\sim N(0,1)$
EX: t: standart normal bölü (bağımsız ki-kare / serbestlik derecesi)'nin karekökü. Üçüncü şık F'nin tanımı.

## Q
SRC: PS3 Q1d
EN: If $W\sim\chi^2_m$ and $V\sim\chi^2_n$ are independent, then $\frac{W/m}{V/n}$ has a:
TR: $W\sim\chi^2_m$, $V\sim\chi^2_n$ bağımsız. $\frac{W/m}{V/n}$ hangi dağılımdadır?
+ $F_{m,n}$ distribution
- $t_{m+n}$ distribution
- $\chi^2_{m+n}$ distribution
- $N(0,1)$ distribution
EX: F tanımı: iki bağımsız ki-karenin, kendi serbestlik derecelerine bölünmüş oranı.

## Q
SRC: PS3 Q4a
EN: If $Y\sim\chi^2_4$, then $P(Y\le 7.78)$ is approximately:
TR: $Y\sim\chi^2_4$ ise $P(Y\le 7.78)$ yaklaşık kaçtır?
+ $0.90$
- $0.95$
- $0.10$
- $0.99$
EX: Ki-kare tablosunda 4 serbestlik derecesi satırında 7.78, %10 üst kuyruk değeridir. $P(Y\le 7.78) = 0.90$.

## Q
SRC: PS3 Q4d
EN: Why is $P(Y > 1.831)$ for $Y\sim F_{10,\infty}$ the same as $P(W > 18.31)$ for $W\sim\chi^2_{10}$?
TR: $F_{10,\infty}$ için $P(Y>1.831)$ neden $\chi^2_{10}$ için $P(W>18.31)$ ile aynı?
+ because $F_{10,\infty}$ is distributed as $\chi^2_{10}/10$
- because the $F$ and $\chi^2$ distributions are always identical
- because $1.831^2 = 18.31$
- because both are symmetric distributions
EX: $F_{m,\infty} = \chi^2_m/m$. $P(W/10 > 1.831) = P(W > 18.31)$. İkisi de simetrik değil.

## Q
SRC: PS3 Q4e
EN: If $Y\sim\chi^2_1$, then $P(Y\le 1)$ equals:
TR: $Y\sim\chi^2_1$ ise $P(Y\le 1)$ kaçtır?
+ $0.6827$
- $0.8413$
- $0.5000$
- $0.3173$
EX: $\chi^2_1 = Z^2$. $P(Z^2\le 1) = P(-1\le Z\le 1) = 0.6827$. $0.8413 = \Phi(1)$ tek taraf, tuzak.

## Q
EN: Compared with the standard normal distribution, the $t$ distribution:
TR: Standart normale göre t dağılımı:
+ has fatter tails, and approaches $N(0,1)$ as the degrees of freedom increase
- has thinner tails and is skewed to the right
- is always identical to $N(0,1)$
- can only take positive values
EX: t'nin kuyrukları daha kalındır. Serbestlik derecesi arttıkça normale yaklaşır, $t_\infty = N(0,1)$.

## GEN chiF
## GEN chiMoments

--- LESSON u3c | Ȳ | Rastgele örnekleme ve Ȳ'nın dağılımı

## CARD Basit rastgele örneklem ve i.i.d.
==Basit rastgele örneklemede (simple random sampling)== anakütleden $n$ birim, her biri eşit olasılıkla seçilir. Sonuç: $Y_1, \dots, Y_n$
• Örneklem çekilmeden önce değerleri bilinmez, yani her biri **rassal değişken**.
• Rastgele seçildikleri için **bağımsız** (independently distributed).
• Aynı anakütleden geldikleri için **aynı dağılımlı** (identically distributed).
Kısaca ==i.i.d.== (independently and identically distributed).

## CARD Ȳ de bir rassal değişken
Her yeni örneklemde $\bar Y$ farklı çıkar. $\bar Y$'nin tüm olası örneklemler üzerindeki dağılımına ==örnekleme dağılımı (sampling distribution)== denir.
$Y_i$ i.i.d., ortalama $\mu_Y$, varyans $\sigma_Y^2$ ise:
$$E(\bar Y) = \mu_Y \qquad \text{var}(\bar Y) = \frac{\sigma_Y^2}{n} \qquad \text{sd}(\bar Y) = \frac{\sigma_Y}{\sqrt n}$$
• $\bar Y$, $\mu_Y$'nin ==yansız (unbiased)== tahmincisi.
• Varyans $n$ ile **ters orantılı**: daha büyük örneklem, daha az belirsizlik.
• $Y$ normalse $\bar Y\sim N(\mu_Y, \sigma_Y^2/n)$ **tam olarak** geçerli.

## CARD PS3 Soru 5: n büyüdükçe
$Y_i \sim N(10, 4)$ i.i.d. olsun, yani $\bar Y\sim N(10, 4/n)$. $P(9.6\le\bar Y\le 10.4)$:
| $n$ | $\text{var}(\bar Y)$ | $\text{sd}(\bar Y)$ | Olasılık |
| 20 | 0.2 | 0.4472 | 0.6289 |
| 100 | 0.04 | 0.2 | 0.9545 |
| 1000 | 0.004 | 0.0632 | ≈ 1.0000 |
**b)** Herhangi bir $c>0$ için $P(10-c\le\bar Y\le 10+c) = P\left(-\frac{c\sqrt n}{2}\le Z\le\frac{c\sqrt n}{2}\right) \to 1$ ($n\to\infty$)
**c)** Bu tam olarak $\bar Y \xrightarrow{p} 10$ demek: $\bar Y$ olasılıkta 10'a yakınsar.

## Q
SRC: PS3 Q1e
EN: $Y_1,\dots,Y_n$ are i.i.d. means that they are:
TR: $Y_1,\dots,Y_n$'nin i.i.d. olması ne demektir?
+ independent and have the same distribution
- identical in value
- independent but with different means
- normally distributed with mean zero
EX: i.i.d. = independently and identically distributed: bağımsız ve aynı dağılımlı. Değerleri aynı demek değil.

## Q
SRC: PS3 Q1f
EN: The sampling distribution of a sample statistic is:
TR: Bir örneklem istatistiğinin örnekleme dağılımı nedir?
+ the distribution of the statistic over all possible samples
- the distribution of the population
- the histogram of a single sample
- the distribution of the error term
EX: Her olası örneklemde istatistik farklı değer alır. Bu değerlerin dağılımı örnekleme dağılımıdır.

## Q
EN: If $Y_i$ are i.i.d. with variance $\sigma_Y^2$, then $\text{var}(\bar Y)$ equals:
TR: $Y_i$ i.i.d. ve varyansı $\sigma^2_Y$ ise $\text{var}(\bar Y)$ nedir?
+ $\sigma_Y^2/n$
- $\sigma_Y^2$
- $\sigma_Y/\sqrt n$
- $n\sigma_Y^2$
EX: $\text{var}(\bar Y) = \frac{1}{n^2}\sum\text{var}(Y_i) = \frac{n\sigma^2}{n^2} = \sigma^2/n$. $\sigma/\sqrt n$ ise standart sapma, varyans değil.

## Q
SRC: PS3 Q5a
EN: $Y_i\sim N(10,4)$ i.i.d. With $n=100$, $P(9.6\le\bar Y\le 10.4)$ is approximately:
TR: $Y_i\sim N(10,4)$, $n=100$. $P(9.6\le\bar Y\le 10.4)$ yaklaşık kaçtır?
+ $0.9545$
- $0.6289$
- $0.1585$
- $0.9999$
EX: $\text{sd}(\bar Y) = \sqrt{4/100} = 0.2$. $z = \pm0.4/0.2 = \pm 2$. $P(-2\le Z\le 2) = 0.9545$.

## Q
EN: As the sample size $n$ increases, the variance of $\bar Y$:
TR: Örneklem büyüdükçe $\bar Y$'nin varyansı ne olur?
+ decreases, because it is inversely proportional to $n$
- increases
- stays the same
- becomes equal to $\sigma_Y^2$
EX: $\sigma^2/n$, $n$ büyüdükçe küçülür ve sıfıra gider. Bu tutarlılığın (consistency) temeli.

## GEN ybarVar
## GEN ybarProb

--- LESSON u3d | ⟿ | Büyük sayılar yasası ve merkezi limit teoremi

## CARD Olasılıkta yakınsama ve BBK
==Olasılıkta yakınsama (convergence in probability)==: $\bar Y$'nin $(\mu_Y-c, \mu_Y+c)$ aralığında olma olasılığı, **her** $c>0$ için $n$ büyüdükçe 1'e yaklaşır. Gösterim: $\bar Y\xrightarrow{p}\mu_Y$.
==Büyük sayılar yasası (Law of Large Numbers, LLN)==: $Y_i$ i.i.d., $E(Y_i)=\mu_Y$ ve $\text{var}(Y_i)<\infty$ ise
$$\bar Y\xrightarrow{p}\mu_Y$$
Yani örneklem büyüyünce örneklem ortalaması anakütle ortalamasına çok yakın olur. Buna $\bar Y$'nin ==tutarlı (consistent)== olması denir.

## CARD Merkezi limit teoremi
==Central Limit Theorem (CLT)==: aynı koşullarda ($Y_i$ i.i.d., varyans sonlu), $n$ büyükse
$$\frac{\bar Y - \mu_Y}{\sigma_Y/\sqrt n} \approx N(0,1) \quad\Longleftrightarrow\quad \bar Y\approx N\!\left(\mu_Y, \frac{\sigma^2_Y}{n}\right)$$
**$Y$'nin kendisi normal olmasa bile** (Bernoulli, üstel, herhangi biri) $\bar Y$ yaklaşık normaldir. Bu yaklaşık dağılıma ==asimptotik dağılım (asymptotic distribution)== denir: $n\to\infty$ iken kesinleşen yaklaşım.

## CARD CLT ile hesap: 3 adım
1. $\mu$ ve $\sigma^2/n$'yi bul. Bernoulli ise $\mu=p$, $\sigma^2 = p(1-p)$.
2. $\text{sd}(\bar Y) = \sqrt{\sigma^2/n}$
3. Standartlaştır ve $\Phi$ kullan.
:::ornek Ders örneği 4: Bernoulli p = 0.4
$n=100$: $\text{sd} = \sqrt{0.24/100} = 0.049$. $P(\bar Y\ge 0.43) = 1-\Phi(0.03/0.049) = 1-\Phi(0.61) = 0.270$
$n=400$: $\text{sd} = \sqrt{0.24/400}=0.0245$. $P(\bar Y\le 0.37) = \Phi(-1.22) = 0.110$
**b)** $P(0.39\le\bar Y\le0.41)=0.95$ için $0.01/\sqrt{0.24/n}\ge 1.96 \Rightarrow n\ge 0.24(1.96/0.01)^2 = 9220$
:::

## CARD PS4 Soru 2 ve 6
**Soru 2:** $\mu = 35$, $\sigma^2 = 15$.
• $n=30$: $\text{var}(\bar Y) = 15/30 = 0.5$. $P(\bar Y<34.5) = \Phi\left(\frac{-0.5}{\sqrt{0.5}}\right) = \Phi(-0.707) = 0.24$
• $n=80$: $\text{var} = 0.1875$, $\text{sd} = 0.433$. $P(36<\bar Y<37) = \Phi(4.62) - \Phi(2.31) = 0.0105$
**Soru 6 (sayım):** tez süresi üstel, ortalama 6 ay. $P(X>6) = e^{-1} = 0.3679 = p$. 100 öğrenciden 6 aydan uzun sürenlerin sayısı $S\sim$ Binom$(100, p)$.
CLT: $S\approx N(np,\ np(1-p)) = N(36.79,\ 23.25)$
$P(S>40) \approx 1-\Phi\left(\frac{40-36.79}{4.822}\right) = 1-\Phi(0.666) = 0.253$ (tam binom değeri 0.220)
:::ipucu Sigorta örneği (ders örneği 5)
Hasar %95 olasılıkla 0, %5 olasılıkla 20.000. $\mu = 1000$, $\sigma^2 = 1.9\times10^7$. 100 ev için $\text{var}(\bar Y) = 1.9\times10^5$, $\text{sd} = 435.9$. $P(\bar Y>2000) = 1-\Phi(2.29) = 0.011$.
:::

## Q
SRC: PS3 Q1g
EN: The law of large numbers states that, if $Y_i$ are i.i.d. with $E(Y_i)=\mu_Y$ and finite variance, then:
TR: Büyük sayılar yasası ne der?
+ $\bar Y$ converges in probability to $\mu_Y$
- the distribution of $\bar Y$ is exactly normal
- $\bar Y = \mu_Y$ in every sample
- the variance of $Y_i$ increases with $n$
EX: BBK: $\bar Y\xrightarrow{p}\mu_Y$. Normal dağılımdan bahseden merkezi limit teoremidir.

## Q
SRC: PS3 Q1h
EN: The central limit theorem says that when $n$ is large:
TR: Merkezi limit teoremi, $n$ büyükken ne der?
+ the distribution of $(\bar Y - \mu_Y)/(\sigma_Y/\sqrt n)$ is well approximated by $N(0,1)$
- every $Y_i$ is normally distributed
- $\bar Y$ is exactly equal to $\mu_Y$
- the sample variance equals zero
EX: CLT standartlaştırılmış örneklem ortalamasının yaklaşık standart normal olduğunu söyler. $Y_i$'lerin kendisi normal olmak zorunda değil.

## Q
SRC: PS3 Q1i
EN: An estimator $\hat\mu_Y$ is consistent for $\mu_Y$ if:
TR: $\hat\mu_Y$ ne zaman $\mu_Y$ için tutarlıdır?
+ $\hat\mu_Y \xrightarrow{p} \mu_Y$ as $n\to\infty$
- $E(\hat\mu_Y) = \mu_Y$ for every $n$
- it has the smallest variance among all estimators
- it is normally distributed
EX: Tutarlılık = olasılıkta yakınsama. $E(\hat\mu)=\mu$ yansızlık, en küçük varyans da etkinliktir.

## Q
SRC: PS3 Q1j
EN: The asymptotic distribution of a statistic is:
TR: Bir istatistiğin asimptotik dağılımı nedir?
+ the approximate (large-sample) distribution of its sampling distribution
- its exact distribution in small samples
- the population distribution of $Y$
- the distribution of the data in one sample
EX: Asimptotik dağılım, $n$ büyükken örnekleme dağılımına yaklaşım. $n\to\infty$ iken kesinleşir.

## Q
SRC: PS4 Q2a
EN: $Y_i$ have $\mu_Y=35$ and $\sigma^2_Y=15$. In a random sample of $n=30$, $P(\bar Y < 34.5)$ is approximately:
TR: $\mu=35$, $\sigma^2=15$, $n=30$. $P(\bar Y<34.5)$ yaklaşık kaçtır?
+ $0.24$
- $0.45$
- $0.76$
- $0.01$
EX: $\text{var}(\bar Y) = 15/30 = 0.5$, $\text{sd} = 0.707$. $z = -0.5/0.707 = -0.707$, $\Phi(-0.707) = 0.24$. sd yerine 15'in karekökünü kullanırsan 0.45 bulursun, o tuzak.

## Q
EN: Ders örneği 4: $Y_i$ Bernoulli with $p=0.4$. How large must $n$ be so that $P(0.39\le\bar Y\le0.41) = 0.95$?
TR: $p=0.4$ Bernoulli. $P(0.39\le\bar Y\le0.41)=0.95$ olması için $n$ en az kaç olmalı?
+ about $9{,}220$
- about $96$
- about $2{,}400$
- about $384$
EX: $1.96\sqrt{0.24/n} = 0.01 \Rightarrow n = 0.24\times(196)^2 = 9220$.

## GEN cltProb
## GEN cltBern
## GEN cltCount

--- LESSON u3e | r | Örneklem kovaryansı ve korelasyonu

## CARD Saçılım grafiği ve örneklem istatistikleri
$X$ ile $Y$ arasındaki ilişkiyi özetlemenin üç yolu: ==saçılım grafiği (scatterplot)==, örneklem kovaryansı, örneklem korelasyonu.
$$s_X^2 = \frac{1}{n-1}\sum (X_i-\bar X)^2 \qquad s_{XY} = \frac{1}{n-1}\sum (X_i-\bar X)(Y_i-\bar Y)$$
$$r_{XY} = \frac{s_{XY}}{s_Xs_Y}$$
• $n-1$'e bölünür, $n$'ye değil.
• Hepsi tutarlı: $s_X^2\xrightarrow{p}\sigma_X^2$, $s_{XY}\xrightarrow{p}\sigma_{XY}$, $r_{XY}\xrightarrow{p}\text{corr}(X,Y)$.
• $r$ doğrusal ilişkiyi ölçer: $\pm1$ noktalar tam bir doğru üzerinde, 0 doğrusal ilişki yok.
:::ornek Kaliforniya okulları
Bölge geliri arttıkça test puanları artıyor: pozitif korelasyon bekleriz. Öğretmen başına öğrenci (STR) ile test puanı arasındaki korelasyon ise $-0.23$, zayıf negatif.
:::

## Q
EN: The sample correlation $r_{XY}$ is computed as:
TR: Örneklem korelasyonu $r_{XY}$ nasıl hesaplanır?
+ $s_{XY}/(s_Xs_Y)$
- $s_{XY}/(s^2_X s^2_Y)$
- $s_{XY}\cdot s_X s_Y$
- $s^2_X/s^2_Y$
EX: Kovaryansı iki standart sapmanın çarpımına böleriz. Varyanslara bölmek tuzak.

## Q
EN: In the California school data, the sample correlation between the student-teacher ratio and test scores is $-0.23$. This indicates:
TR: STR ile test puanı arasındaki korelasyon $-0.23$. Bu ne gösterir?
+ a weak negative linear relationship
- a strong positive linear relationship
- no relationship of any kind
- that reducing class size causes higher scores
EX: Negatif ve sıfıra yakın: zayıf negatif doğrusal ilişki. Korelasyon tek başına nedensellik göstermez.

## Q
EN: A sample correlation of $r_{XY} = 0$ means:
TR: $r_{XY}=0$ ne anlama gelir?
+ there is no linear association in the sample, though a nonlinear one may exist
- $X$ and $Y$ are independent for sure
- all points lie on a horizontal line
- the sample covariance is negative
EX: Korelasyon sadece doğrusal ilişkiyi ölçer. Mesela U şeklinde güçlü bir ilişkide bile $r$ sıfır çıkabilir.

## Q
EN: The sample variance $s^2_X$ divides the sum of squared deviations by:
TR: Örneklem varyansı $s^2_X$, sapmaların kareleri toplamını neye böler?
+ $n-1$
- $n$
- $n-2$
- $\sqrt n$
EX: $s^2_X = \frac{1}{n-1}\sum(X_i-\bar X)^2$. Regresyondaki SER ise $n-2$'ye böler (iki katsayı tahmin edildiği için).

## GEN sampleCorr
`);
