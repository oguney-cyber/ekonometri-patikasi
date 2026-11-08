CONTENT.push(String.raw`
=== UNIT u3 | Hafta 3 | Olasılık II | Normal, ki-kare, t, F, örneklem ortalaması, BBK ve MLT

--- LESSON u3a | N | Normal dağılım

## CARD Çan eğrisi
$Y\sim N(\mu_Y, \sigma_Y^2)$: ortalaması $\mu$, **varyansı** $\sigma^2$ olan ==normal dağılım==. "$\sim$" işareti "dağılımlıdır" diye okunur.
**Özellikleri:**
• Çan şeklinde ve $\mu$ etrafında **simetrik**: ortalamanın sağı ve solu ayna görüntüsü.
• Ortalama = medyan = mod = $\mu$.
• $\sigma$ büyüdükçe çan yayvanlaşır, küçüldükçe sivrileşir.
• Değerlerin yaklaşık %68'i $\mu \pm \sigma$, %95'i $\mu \pm 2\sigma$ aralığındadır.
==Standart normal (standard normal)==: $Z\sim N(0,1)$, yani ortalaması 0, varyansı 1. CDF'ine $\Phi$ (büyük fi) denir:
$$\Phi(z) = P(Z\le z)$$
$\Phi$'nin kapalı bir formülü yok; değerleri **Z tablosundan** (ya da bilgisayardan) okunur. $\Phi(z)$, $z$'nin solundaki alandır.
:::dikkat En çok yapılan hata
$N(1, 4)$ yazımındaki 4 **varyanstır**. Standart sapma $\sigma = \sqrt4 = 2$. Standartlaştırırken $\sigma$'ya bölünür, varyansa değil. $N(50, 25)$ görünce aklına hemen "$\sigma = 5$" gelsin.
:::

## CARD Standartlaştırma
Her normal soruyu $Z$'ye çevirip çözeriz, çünkü tablo sadece $Z$ için var.
$$Z = \frac{Y-\mu}{\sigma} \qquad P(Y\le c) = \Phi\!\left(\frac{c-\mu}{\sigma}\right)$$
**$z$ ne demek?** "$c$ değeri ortalamadan kaç standart sapma uzakta?" $z = 2$ ise $c$, ortalamanın 2 standart sapma üstünde.
**4 adımlı tarif:**
1. $\mu$ ve $\sigma$'yı yaz (varyansın karekökünü almayı unutma).
2. Sınır değer(ler)i $z$'ye çevir: $z = (c - \mu)/\sigma$.
3. Ne istendiğine göre formülü seç:
• $P(Y \le c) = \Phi(z)$
• $P(Y > c) = 1 - \Phi(z)$
• $P(a\le Y\le b) = \Phi(z_b) - \Phi(z_a)$
4. Tablodan oku. Negatif $z$ için simetri: $\Phi(-z) = 1-\Phi(z)$.
:::ornek Ders örneği
$Y\sim N(1,4)$, $P(Y\le 2)$ = ?
1. $\mu = 1$, $\sigma = \sqrt 4 = 2$
2. $z = (2-1)/2 = 0.5$
3. $P(Y \le 2) = \Phi(0.5)$
4. Tablo: $\Phi(0.5) = 0.6915$
:::
:::ipucu Resim çiz
Her soruda küçük bir çan çiz ve istenen alanı tara. Sol tarafsa $\Phi$, sağ tarafsa $1-\Phi$, ortadaysa fark. Bu, işaret hatalarını önler.
:::

## CARD Ezberlenecek değerler
Bu değerler sınavda tablo olmadan bile işini görür:
| $z$ | 0 | 1 | 1.28 | 1.645 | 1.96 | 2 | 2.33 | 2.576 |
| $\Phi(z)$ | 0.5 | 0.8413 | 0.90 | 0.95 | 0.975 | 0.9772 | 0.99 | 0.995 |
**İki taraflı aralıklar** (hipotez testi ve güven aralığında sürekli kullanılır):
• $P(-1\le Z\le 1) = 0.8413 - 0.1587 = 0.6827$
• $P(-1.645\le Z\le 1.645) = 0.90$
• $P(-1.96\le Z\le 1.96) = 0.975 - 0.025 = 0.95$
• $P(-2\le Z\le 2) = 0.9545$
• $P(-2.576\le Z\le 2.576) = 0.99$
**Mantık:** iki taraflı aralıkta dışarıda kalan olasılık iki kuyruğa eşit bölünür. %95'lik aralıkta her kuyrukta %2.5 var, bu yüzden sınır $\Phi(z) = 0.975$ olan $z = 1.96$.
**Z tablosu nasıl okunur?** Satır $z$'nin ilk ondalığı, sütun ikinci ondalığı. $\Phi(1.23)$ için 1.2 satırı ile 0.03 sütununun kesiştiği hücre: 0.8907. Tablolar sekmesinde dokununca hücre vurgulanır.

## CARD PS3 Soru 3 çözümü
**a) $Y\sim N(1,4)$, $P(Y\le 3)$**
1. $\sigma = \sqrt4 = 2$
2. $z = (3-1)/2 = 1$
3. $P(Y\le 3) = \Phi(1) = 0.8413$
**b) $Y\sim N(3,9)$, $P(Y>0)$**
1. $\sigma = \sqrt 9 = 3$
2. $z = (0-3)/3 = -1$
3. "Büyük" istendiği için $1-\Phi$: $P(Y>0) = 1-\Phi(-1)$
4. Simetri: $\Phi(-1) = 1 - \Phi(1)$, yani $1 - (1-\Phi(1)) = \Phi(1) = 0.8413$
**c) $Y\sim N(50,25)$, $P(40\le Y\le 52)$**
1. $\sigma = \sqrt{25} = 5$
2. $z_1 = (40-50)/5 = -2$ ve $z_2 = (52-50)/5 = 0.4$
3. Aralık = büyük $\Phi$ − küçük $\Phi$: $\Phi(0.4) - \Phi(-2)$
4. Tablo: $\Phi(0.4) = 0.6554$, $\Phi(-2) = 1 - 0.9772 = 0.0228$
5. Sonuç: $0.6554 - 0.0228 = 0.6327$ (tablo yuvarlamasıyla 0.6326–0.6327)

## Q
SRC: PS3 Q3a
EN: If $Y\sim N(1,4)$, find $P(Y\le 3)$.
TR: $Y\sim N(1,4)$ ise $P(Y\le 3)$ nedir?
+ $0.8413$
- $0.6915$
- $0.9772$
- $0.1587$
EX: **Doğru cevap: 0.8413.**
1. $N(1, 4)$: $\mu = 1$, varyans 4, yani $\sigma = \sqrt4 = 2$
2. Standartlaştır: $z = (3-1)/2 = 1$
3. "Küçük ya da eşit" → sol taraf: $P(Y\le 3) = \Phi(1) = 0.8413$
**Diğer şıklar nereden geliyor?**
• 0.6915: varyansa (4) bölmüşsün: $z = 2/4 = 0.5$, $\Phi(0.5) = 0.6915$. En sık tuzak.
• 0.9772: $z = 2$ almışsın (sadece $3 - 1$, bölmeyi unutmuşsun): $\Phi(2) = 0.9772$.
• 0.1587: sağ kuyruğu hesaplamışsın: $1 - \Phi(1)$. Soru "$\le$" diyor.

## Q
SRC: PS3 Q3b
EN: If $Y\sim N(3,9)$, find $P(Y>0)$.
TR: $Y\sim N(3,9)$ ise $P(Y>0)$ nedir?
+ $0.8413$
- $0.1587$
- $0.6293$
- $0.5000$
EX: **Doğru cevap: 0.8413.**
1. $\mu = 3$, $\sigma = \sqrt9 = 3$
2. $z = (0-3)/3 = -1$
3. "Büyüktür" → sağ taraf: $P(Y>0) = 1-\Phi(-1)$
4. Simetri: $\Phi(-1) = 1 - 0.8413 = 0.1587$, yani $1 - 0.1587 = 0.8413$
Resimle düşün: 0, ortalamanın (3) bir standart sapma **solunda**. Onun sağındaki alan büyük olmalı (yarıdan fazla). 0.8413 mantıklı.
**Diğer şıklar nereden geliyor?**
• 0.1587: $\Phi(-1)$, yani 0'ın **solundaki** alan. Soru sağ tarafı istiyor.
• 0.6293: varyansa bölmüşsün: $z = -3/9 = -0.33$, $1 - \Phi(-0.33) = 0.6293$.
• 0.5000: $P(Y > \mu)$; 0 ortalama değil.

## Q
SRC: PS3 Q3c
EN: If $Y\sim N(50,25)$, find $P(40\le Y\le 52)$.
TR: $Y\sim N(50,25)$ ise $P(40\le Y\le 52)$ nedir?
+ $0.6327$
- $0.6554$
- $0.0228$
- $0.9544$
EX: **Doğru cevap: 0.6327.**
1. $\mu = 50$, $\sigma = \sqrt{25} = 5$
2. İki sınırı da çevir: $z_1 = (40-50)/5 = -2$ ve $z_2 = (52-50)/5 = 0.4$
3. Aralık = sağ sınırın $\Phi$'si − sol sınırın $\Phi$'si:
$\Phi(0.4)-\Phi(-2) = 0.6554-0.0228 = 0.6327$
**Diğer şıklar nereden geliyor?**
• 0.6554: sadece $\Phi(0.4)$, yani $P(Y \le 52)$. 40'ın solundaki alanı çıkarmayı unutmuşsun.
• 0.0228: sadece $\Phi(-2)$, yani $P(Y \le 40)$.
• 0.9544: $P(-2 \le Z \le 2)$; üst sınırı da 2 sanmışsın. Aralık simetrik değil (40 ile 52, ortalama 50).

## Q
EN: For $Z\sim N(0,1)$, $\Phi(-1.96)$ equals approximately:
TR: $Z\sim N(0,1)$ için $\Phi(-1.96)$ yaklaşık kaçtır?
+ $0.025$
- $0.05$
- $0.975$
- $-0.975$
EX: **Doğru cevap: 0.025.**
1. Ezber: $\Phi(1.96) = 0.975$
2. Simetri: $\Phi(-z) = 1 - \Phi(z)$, yani $\Phi(-1.96) = 1-0.975 = 0.025$
Resim: $-1.96$'nın solunda sol kuyruk var; %95'lik merkez aralığın dışında kalan %5'in yarısı.
**Diğer şıklar neden yanlış?**
• 0.05: iki kuyruğun toplamı $P(|Z| > 1.96)$. Tek kuyruk bunun yarısı.
• 0.975: $\Phi(+1.96)$; işareti görmezden gelmişsin.
• −0.975: olasılık **asla negatif olamaz**. Bu şıkkı direkt ele.

## Q
SRC: PS3 Q1a
EN: If $Y\sim N(\mu, \sigma^2)$, then $(Y-\mu)/\sigma$ has a:
TR: $Y\sim N(\mu,\sigma^2)$ ise $(Y-\mu)/\sigma$ hangi dağılıma sahiptir?
+ standard normal distribution, $N(0,1)$
- chi-squared distribution with 1 degree of freedom
- $N(\mu, 1)$ distribution
- $N(0, \sigma^2)$ distribution
EX: **Doğru cevap: standart normal, $N(0,1)$.**
İki adım:
1. $\mu$'yü çıkarmak ortalamayı 0'a kaydırır: $E(Y - \mu) = 0$.
2. $\sigma$'ya bölmek varyansı 1 yapar: $\text{var}\left(\frac{Y-\mu}{\sigma}\right) = \frac{\sigma^2}{\sigma^2} = 1$.
Normal dağılımın doğrusal dönüşümü yine normaldir. Sonuç: $N(0,1)$.
**Diğer şıklar neden yanlış?**
• $\chi^2_1$: bu $Z^2$'nin dağılımı; kare alınmadı.
• $N(\mu, 1)$: ortalamayı çıkardın, $\mu$ kalmaz.
• $N(0, \sigma^2)$: $\sigma$'ya böldün, varyans 1 olur.

## GEN normalProb

## Q
SRC: TB 2.16
EN: To standardize a random variable, you:
TR: Bir rassal değişkeni standartlaştırmak için ne yaparsın?
+ subtract its mean and divide by its standard deviation
- subtract its mean and divide by its variance
- add and subtract 1.96 times its standard deviation
- divide it by its standard deviation, but only if its mean is 1
EX: **Doğru cevap: subtract the mean, divide by the standard deviation.**
$Z = (Y - \mu_Y)/\sigma_Y$. Ortalamayı çıkarınca merkez 0'a kayar, standart sapmaya bölünce yayılım 1 olur. Normal tablosunu kullanmadan önce yapılan adım budur.
**Diğer şıklar neden yanlış?**
• varyansa bölmek: sık hata. Varyansa bölersen standart sapma $1/\sigma_Y$ olur, 1 değil (birimler de tutmaz).
• ±1.96 sd: bu güven aralığı ya da %95 aralığı kurmak, standartlaştırma değil.
• "only if mean is 1": anlamsız koşul; ortalama her zaman çıkarılır.

## Q
SRC: TB 2.17
EN: $Y \sim N(\mu, \sigma^2)$. The probability that $Y$ falls within 1.96 standard deviations of its mean (from $\mu - 1.96\sigma$ to $\mu + 1.96\sigma$) is:
TR: $Y \sim N(\mu, \sigma^2)$. $Y$'nin ortalamasının 1.96 standart sapma yakınına ($\mu - 1.96\sigma$ ile $\mu + 1.96\sigma$ arasına) düşme olasılığı nedir?
+ 0.95
- 0.05
- 0.67
- 0.33
EX: **Doğru cevap: 0.95.**
$\Pr(-1.96 \le Z \le 1.96) = \Phi(1.96) - \Phi(-1.96) = 0.975 - 0.025 = 0.95$. %95 güven aralığında 1.96 kullanmamızın sebebi budur.
**Diğer şıklar neden yanlış?**
• 0.05: aralığın **dışında** kalma olasılığı (iki kuyruğun toplamı).
• 0.67 / 0.33: ±1 standart sapma için içerisi yaklaşık 0.68, dışarısı 0.32. 1.96 için değil.

## Q
SRC: TB 2.18
EN: $Y \sim N(\mu, \sigma^2)$ and $c_1 < c_2$. Let $d_i = (c_i - \mu)/\sigma$. Then $\Pr(c_1 \le Y \le c_2)$ equals:
TR: $Y \sim N(\mu, \sigma^2)$ ve $c_1 < c_2$. $d_i = (c_i - \mu)/\sigma$ olsun. $\Pr(c_1 \le Y \le c_2)$ neye eşittir?
+ $\Phi(d_2) - \Phi(d_1)$
- $\Phi(d_1) - \Phi(d_2)$
- $\Phi(d_2) - (1 - \Phi(d_1))$
- $1 - (\Phi(d_2) - \Phi(d_1))$
EX: **Doğru cevap: $\Phi(d_2) - \Phi(d_1)$.**
1. Standartlaştır: $\Pr(c_1\le Y\le c_2) = \Pr(d_1 \le Z \le d_2)$.
2. $\Phi(d_2)$ = $d_2$'nin solundaki tüm alan. Bundan $d_1$'in solundaki alanı ($\Phi(d_1)$) çıkarınca arada kalan alan kalır.
**Diğer şıklar neden yanlış?**
• $\Phi(d_1) - \Phi(d_2)$: negatif çıkar, çünkü $d_1 < d_2$.
• $1 - \Phi(d_1)$ çıkarmak: bu $d_1$'in **sağındaki** alan; formül karışmış.
• $1 - (\dots)$: bu aralığın **dışında** kalma olasılığı.

## Q
SRC: TB 2.19
EN: Variables that have a joint (multivariate) normal distribution all have zero covariances with each other. Then:
TR: Ortak (çok değişkenli) normal dağılıma sahip değişkenlerin birbirleriyle kovaryansları sıfır. O zaman:
+ the variables are independent
- their correlation is usually zero, but need not be
- you must use the $\chi^2$ distribution to compute probabilities
- the marginal distribution of each variable is no longer normal
EX: **Doğru cevap: the variables are independent.**
Genel kural: bağımsızlık ⇒ kovaryans 0, ama tersi her zaman doğru **değil**. **İstisna**: değişkenler ortak normal dağılıyorsa kovaryans 0 ⇒ bağımsız. Bu, normal dağılımın özel bir özelliğidir.
**Diğer şıklar neden yanlış?**
• "correlation need not be zero": kovaryans 0 ise korelasyon tanım gereği 0.
• $\chi^2$: kare toplamları için kullanılır; burada gerek yok.
• "no longer normal": ortak normalin her marjinali her zaman normaldir.

--- LESSON u3b | χ² | Ki-kare, t ve F dağılımları

## CARD Ki-kare (χ²)
Bu üç dağılım (ki-kare, t, F) normalden türetilir ve hipotez testlerinde kullanılır. Tanımlarını ezberle; sınavda "hangisinin tanımı" diye sorulur.
$Z_1, \dots, Z_m$ bağımsız $N(0,1)$ olsun:
$$Z_1^2 + Z_2^2 + \dots + Z_m^2 \sim \chi^2_m$$
$m$ = ==serbestlik derecesi (degrees of freedom)==: kaç tane bağımsız standart normalin karesi toplandığı.
**Özellikleri:**
• Kareler toplamı olduğu için **her zaman pozitif**.
• Sağa çarpık (sağda uzun kuyruk).
• $E(\chi^2_m) = m$, $\text{var}(\chi^2_m) = 2m$. Örnek: $\chi^2_5$'in ortalaması 5, varyansı 10.
• $m$ büyüdükçe dağılım daha simetrik ve normale benzer olur.
**Özel durum:** $\chi^2_1 = Z^2$. Bu yüzden:
• $P(\chi^2_1\le 1) = P(Z^2 \le 1) = P(-1\le Z\le 1) = 0.6827$
• $\chi^2_1$'in %5 kritik değeri: $1.96^2 = 3.84$ (çünkü $P(|Z|>1.96) = 0.05$)
:::dikkat Karelerin toplamı
Ki-kare, karelerin **toplamıdır**; toplamın karesi değil. $(Z_1 + Z_2)^2$ ki-kare değildir.
:::

## CARD Student t
$Z\sim N(0,1)$ ve $W\sim\chi^2_m$ **bağımsız** olsun:
$$\frac{Z}{\sqrt{W/m}} \sim t_m$$
**Okunuşu:** standart normal, bölü (ki-kare bölü serbestlik derecesi)'nin karekökü.
**Neden önemli?** Gerçek hayatta $\sigma$'yı bilmeyiz, örneklemden $s$ ile tahmin ederiz. Bu tahmin ek belirsizlik getirir; $t$ dağılımı bu belirsizliği hesaba katar.
**Özellikleri:**
• Normal gibi çan şeklinde ve 0 etrafında simetrik.
• Ama **kuyrukları daha kalın** (fatter tails): uç değerler daha olası. Bu yüzden $t$ kritik değerleri normalinkinden biraz büyüktür ($t_{10}$ için %5 iki taraflı: 2.23; normal: 1.96).
• Serbestlik derecesi arttıkça normale yaklaşır. $m\ge 30$ iken çok yakın, $t_\infty = N(0,1)$.
:::ornek Ders örneği 3
$t_{90}$ için $P(-1.99\le Y\le 1.99) = 0.9504$, $N(0,1)$ için $0.9534$. Neden neredeyse aynı? 90 serbestlik derecesi büyük, $t_{90}\approx N(0,1)$. Kalın kuyruk etkisi sadece küçük örneklemlerde belirgindir.
:::

## CARD F dağılımı
$W\sim\chi^2_m$, $V\sim\chi^2_n$ **bağımsız** olsun:
$$\frac{W/m}{V/n} \sim F_{m,n}$$
**Okunuşu:** iki bağımsız ki-karenin, her biri kendi serbestlik derecesine bölünmüş oranı. İki serbestlik derecesi var: pay ($m$) ve payda ($n$).
• Her zaman pozitif, sağa çarpık.
• Regresyonda birden çok katsayıyı aynı anda test ederken kullanılır.
**Önemli özel durum:** payda serbestlik derecesi sonsuz olunca $V/n \to 1$ (BBK: $V/n$, $n$ tane $Z^2$'nin ortalaması, $E(Z^2)=1$'e yakınsar):
$$F_{m,\infty} = \frac{\chi^2_m}{m}$$
:::ornek PS3 Soru 4c-d
$Y\sim F_{10,\infty}$: $P(Y>1.831)$ = ?
1. $F_{10,\infty} = W/10$, $W\sim\chi^2_{10}$
2. $P(W/10 > 1.831) = P(W > 10 \times 1.831) = P(W > 18.31)$
3. Ki-kare tablosu: $\chi^2_{10}$'un %5 kritik değeri 18.31 → olasılık 0.05
Bu yüzden 4b ($\chi^2_{10}$, $P(W>18.31)$) ile 4c'nin cevabı aynı.
:::
:::ipucu Üç dağılımın bağı
• $t_m^2 = F_{1,m}$ (t'nin karesi pay serbestlik derecesi 1 olan F'dir)
• $t_\infty = N(0,1)$ ve $F_{m,\infty} = \chi^2_m/m$
:::

## CARD PS3 Soru 4: cevaplar
**a) $Y\sim\chi^2_4$, $P(Y\le 7.78)$**
Ki-kare tablosunda 4. satır: %10 sütununda 7.78. Yani $P(Y > 7.78) = 0.10$, dolayısıyla $P(Y\le 7.78) = 1 - 0.10 = 0.90$.
**b) $W\sim\chi^2_{10}$, $P(W>18.31)$**
10. satır, %5 sütunu: 18.31. Cevap $0.05$.
**c) $Y\sim F_{10,\infty}$, $P(Y>1.831)$**
F tablosunda ($m=10$, payda $\infty$) %5 değeri 1.831. Cevap $0.05$.
**d) Neden b ile c aynı?** $F_{10,\infty} = \chi^2_{10}/10$ ve $1.831\times10 = 18.31$. Aynı olayın iki farklı yazılışı.
**e) $Y\sim\chi^2_1$, $P(Y\le1)$**
$\chi^2_1 = Z^2$. $P(Z^2\le 1) = P(-1\le Z\le 1) = 0.6827$.
:::dikkat Tablo yönü
Ki-kare ve F tabloları **üst kuyruk** olasılığını verir: $P(Y > c)$. "$\le$" soruluyorsa 1'den çıkar.
:::
Bunlar için **Tablolar** sekmesindeki ki-kare ve F tablolarına bak.

## Q
SRC: PS3 Q1b
EN: The chi-squared distribution with $m$ degrees of freedom is the distribution of:
TR: $m$ serbestlik dereceli ki-kare dağılımı neyin dağılımıdır?
+ the sum of $m$ squared independent standard normal random variables
- the sum of $m$ independent standard normal random variables
- the ratio of two independent normal variables
- the square of a $t_m$ random variable
EX: **Doğru cevap:** $m$ tane bağımsız standart normalin **karelerinin toplamı**: $\chi^2_m = Z_1^2+\dots+Z_m^2$.
Serbestlik derecesi = toplanan kare sayısı.
**Diğer şıklar neden yanlış?**
• "Sum of $m$ standard normals" (kare yok): normallerin toplamı yine normaldir, $N(0, m)$. Ki-kare olması için kare şart.
• "Ratio of two normals": bu Cauchy dağılımı (dersin konusu değil).
• "Square of a $t_m$": $t_m^2 = F_{1,m}$, ki-kare değil.

## Q
SRC: PS3 Q1c
EN: The Student $t$ distribution with $m$ degrees of freedom is the distribution of:
TR: $t_m$ dağılımı neyin dağılımıdır?
+ $Z/\sqrt{W/m}$, where $Z\sim N(0,1)$ and $W\sim\chi^2_m$ are independent
- $W/m$, where $W\sim\chi^2_m$
- $(W/m)/(V/n)$, where $W$ and $V$ are independent chi-squared variables
- $Z^2$, where $Z\sim N(0,1)$
EX: **Doğru cevap:** $Z/\sqrt{W/m}$, $Z$ standart normal ve $W$ ondan bağımsız $\chi^2_m$.
Hafıza: t = "normal bölü kök(ki-kare bölü df)". Payda bilinmeyen $\sigma$ yerine kullanılan tahmini temsil eder.
**Diğer şıklar hangi dağılım?**
• $W/m$: bu $F_{m,\infty}$.
• $(W/m)/(V/n)$: bu $F_{m,n}$'nin tanımı.
• $Z^2$: bu $\chi^2_1$.

## Q
SRC: PS3 Q1d
EN: If $W\sim\chi^2_m$ and $V\sim\chi^2_n$ are independent, then $\frac{W/m}{V/n}$ has a:
TR: $W\sim\chi^2_m$, $V\sim\chi^2_n$ bağımsız. $\frac{W/m}{V/n}$ hangi dağılımdadır?
+ $F_{m,n}$ distribution
- $t_{m+n}$ distribution
- $\chi^2_{m+n}$ distribution
- $N(0,1)$ distribution
EX: **Doğru cevap: $F_{m,n}$.**
F'nin tanımı: iki bağımsız ki-karenin, her biri kendi serbestlik derecesine bölünmüş oranı. Paydaki df ($m$) birinci, paydadaki df ($n$) ikinci yazılır.
**Diğer şıklar neden yanlış?**
• $t_{m+n}$: t'nin payında normal var, ki-kare değil.
• $\chi^2_{m+n}$: bu $W + V$'nin (toplamın) dağılımı olurdu, oranın değil.
• $N(0,1)$: oran her zaman pozitif, normal ise negatif değer de alır.

## Q
SRC: PS3 Q4a
EN: If $Y\sim\chi^2_4$, then $P(Y\le 7.78)$ is approximately:
TR: $Y\sim\chi^2_4$ ise $P(Y\le 7.78)$ yaklaşık kaçtır?
+ $0.90$
- $0.95$
- $0.10$
- $0.99$
EX: **Doğru cevap: 0.90.**
1. Ki-kare tablosunda $df = 4$ satırına git.
2. 7.78 hangi sütunda? **%10** sütununda. Tablo üst kuyruk verir: $P(Y > 7.78) = 0.10$.
3. Soru "$\le$" istiyor: $P(Y\le 7.78) = 1 - 0.10 = 0.90$.
**Diğer şıklar neden yanlış?**
• 0.95: $\chi^2_4$'ün %5 değeri 9.49; 7.78 değil.
• 0.10: üst kuyruk; tümleyenini almayı unutmuşsun.
• 0.99: $\chi^2_4$'ün %1 değeri 13.28.

## Q
SRC: PS3 Q4d
EN: Why is $P(Y > 1.831)$ for $Y\sim F_{10,\infty}$ the same as $P(W > 18.31)$ for $W\sim\chi^2_{10}$?
TR: $F_{10,\infty}$ için $P(Y>1.831)$ neden $\chi^2_{10}$ için $P(W>18.31)$ ile aynı?
+ because $F_{10,\infty}$ is distributed as $\chi^2_{10}/10$
- because the $F$ and $\chi^2$ distributions are always identical
- because $1.831^2 = 18.31$
- because both are symmetric distributions
EX: **Doğru cevap:** çünkü $F_{10,\infty}$, $\chi^2_{10}/10$ gibi dağılır.
Adım adım:
1. $F_{m,n} = \frac{W/m}{V/n}$. Payda df sonsuz olunca $V/n \to 1$.
2. Yani $F_{10,\infty} = W/10$, $W\sim\chi^2_{10}$.
3. $P(W/10 > 1.831) = P(W > 18.31)$ (iki tarafı 10 ile çarp).
**Diğer şıklar neden yanlış?**
• "Always identical": sadece payda df sonsuz iken ve 10'a bölme ilişkisiyle bağlılar; genelde farklı dağılımlar.
• "$1.831^2 = 18.31$": $1.831^2 = 3.35$. İlişki kare değil, **10 ile çarpım**.
• "Symmetric": ikisi de sağa çarpık; simetrik değil.

## Q
SRC: PS3 Q4e
EN: If $Y\sim\chi^2_1$, then $P(Y\le 1)$ equals:
TR: $Y\sim\chi^2_1$ ise $P(Y\le 1)$ kaçtır?
+ $0.6827$
- $0.8413$
- $0.5000$
- $0.3173$
EX: **Doğru cevap: 0.6827.**
1. $\chi^2_1 = Z^2$ (tek bir standart normalin karesi).
2. $P(Z^2\le 1)$: karesi 1'den küçük olan $Z$'ler $-1$ ile $1$ arasındakilerdir.
3. $P(-1\le Z\le 1) = \Phi(1) - \Phi(-1) = 0.8413 - 0.1587 = 0.6827$
**Diğer şıklar nereden geliyor?**
• 0.8413: sadece $\Phi(1) = P(Z \le 1)$. $Z^2 \le 1$ hem pozitif hem negatif tarafı kapsar; tek taraf tuzak.
• 0.5000: $P(Z \le 0)$; ilgisiz.
• 0.3173: tümleyen $P(|Z| > 1) = 1 - 0.6827$.

## Q
EN: Compared with the standard normal distribution, the $t$ distribution:
TR: Standart normale göre t dağılımı:
+ has fatter tails, and approaches $N(0,1)$ as the degrees of freedom increase
- has thinner tails and is skewed to the right
- is always identical to $N(0,1)$
- can only take positive values
EX: **Doğru cevap:** kuyrukları daha kalındır ve serbestlik derecesi arttıkça $N(0,1)$'e yaklaşır.
Neden kalın kuyruk? Paydadaki $\sqrt{W/m}$ rastgele; bazen küçük çıkar ve oranı büyütür. Bu, uç değerleri normaldekinden daha olası yapar. $m$ büyüdükçe $W/m \to 1$ ve $t \to Z$.
**Diğer şıklar neden yanlış?**
• "Thinner tails and skewed": tam tersi; t simetriktir ve kuyrukları kalındır.
• "Always identical": sadece $m = \infty$ iken aynı.
• "Only positive values": t, normal gibi negatif değer de alır ve 0 etrafında simetriktir. Sadece pozitif olanlar ki-kare ve F.

## GEN chiF
## GEN chiMoments

## Q
SRC: TB 2.20
EN: The Student $t$ distribution with $m$ degrees of freedom is the distribution of:
TR: $m$ serbestlik dereceli Student $t$ dağılımı neyin dağılımıdır?
+ $Z / \sqrt{W/m}$, where $Z \sim N(0,1)$ and $W \sim \chi^2_m$ are independent
- $\sum_{i=1}^{m} Z_i^2$, for independent standard normals $Z_i$
- $W/m$, where $W \sim \chi^2_m$
- $(W_1/m)/(W_2/n)$, for independent chi-squared variables $W_1 \sim \chi^2_m$ and $W_2 \sim \chi^2_n$
EX: **Doğru cevap: $Z/\sqrt{W/m}$.**
$t_m$ = standart normal ÷ $\sqrt{\chi^2_m/m}$, pay ve payda bağımsız. Paydadaki belirsizlik kuyrukları normalden kalın yapar; $m$ büyüdükçe $W/m \to 1$ ve $t_m$ normale yaklaşır.
**Diğer şıklar neden yanlış?**
• $\sum Z_i^2$: bu $\chi^2_m$ dağılımı.
• $W/m$: bu $F_{m,\infty}$ dağılımı.
• iki ki-karenin oranı: bu $F_{m,n}$ dağılımı.

## Q
SRC: TB 2.21
EN: When the degrees of freedom go to infinity, the Student $t$ distribution:
TR: Serbestlik derecesi sonsuza giderken Student $t$ dağılımı:
+ becomes the standard normal distribution
- can no longer be calculated
- is bell-shaped like the normal, but keeps fatter tails
- becomes the $\chi^2$ distribution
EX: **Doğru cevap: becomes the standard normal.**
$t_m = Z/\sqrt{W/m}$ ve $m \to \infty$ iken $W/m \to 1$, yani $t_m \to Z$. $t$ tablosunun $\infty$ satırında %5 iki taraflı kritik değer tam 1.96'dır. Büyük örneklemde normal kritik değerleri kullanmamızın sebebi budur.
**Diğer şıklar neden yanlış?**
• "cannot be calculated": limit gayet iyi tanımlı.
• "fatter tails": kalın kuyruk **küçük** serbestlik derecesinin özelliğidir; sonsuzda kaybolur.
• $\chi^2$: $\chi^2$ sağa çarpık ve sadece pozitif değer alır; $t$ ise simetriktir.

--- LESSON u3c | Ȳ | Rastgele örnekleme ve Ȳ'nın dağılımı

## CARD Basit rastgele örneklem ve i.i.d.
Anakütlenin tamamını gözleyemeyiz (tüm Türkiye'yi anket yapamayız), bir örneklem alırız.
==Basit rastgele örneklemede (simple random sampling)== anakütleden $n$ birim, **her biri eşit olasılıkla** seçilir. Sonuç: $Y_1, \dots, Y_n$
• Örneklem çekilmeden **önce** değerleri bilinmez, yani her biri bir **rassal değişkendir**. (Çekildikten sonra elimizde sayılar olur.)
• Rastgele seçildikleri için birinin değeri diğeri hakkında bilgi vermez: **bağımsız** (independently distributed).
• Hepsi aynı anakütleden geldiği için **aynı dağılımlı** (identically distributed): aynı $\mu$ ve $\sigma^2$.
Kısaca ==i.i.d.== (independently and identically distributed).
:::dikkat Aynı dağılım ≠ aynı değer
i.i.d. değişkenlerin **değerleri** farklıdır (bir öğrenci 60, diğeri 85 alır). Aynı olan, **dağılımlarıdır**: hepsi aynı olasılık kuralından gelir.
:::

## CARD Ȳ de bir rassal değişken
Her yeni örneklemde $\bar Y$ farklı çıkar: bir örneklemde 71.2, diğerinde 69.8. Yani $\bar Y$ da bir rassal değişkendir ve bir dağılımı vardır. $\bar Y$'nin tüm olası örneklemler üzerindeki dağılımına ==örnekleme dağılımı (sampling distribution)== denir.
$Y_i$ i.i.d., ortalama $\mu_Y$, varyans $\sigma_Y^2$ ise:
$$E(\bar Y) = \mu_Y \qquad \text{var}(\bar Y) = \frac{\sigma_Y^2}{n} \qquad \text{sd}(\bar Y) = \frac{\sigma_Y}{\sqrt n}$$
**Türetme (kurallarla):**
• $E(\bar Y) = E\left(\frac1n\sum Y_i\right) = \frac1n\sum E(Y_i) = \frac1n\cdot n\mu_Y = \mu_Y$
• $\text{var}(\bar Y) = \frac{1}{n^2}\text{var}\left(\sum Y_i\right) = \frac{1}{n^2}\sum \text{var}(Y_i) = \frac{n\sigma_Y^2}{n^2} = \frac{\sigma_Y^2}{n}$ (bağımsızlık yüzünden kovaryanslar 0)
**Sonuçlar:**
• $\bar Y$, $\mu_Y$'nin ==yansız (unbiased)== tahmincisi: ortalamada doğruyu bulur.
• Varyans $n$ ile **ters orantılı**: örneklem 4 katına çıkarsa varyans 4'te birine, standart sapma yarıya iner.
• $Y$ normalse $\bar Y\sim N(\mu_Y, \sigma_Y^2/n)$ **tam olarak** geçerli. Normal değilse, $n$ büyükken MLT ile yaklaşık geçerli.
:::ornek Sayıyla
$\sigma_Y^2 = 4$, $n = 100$: $\text{var}(\bar Y) = 4/100 = 0.04$, $\text{sd}(\bar Y) = \sqrt{0.04} = 0.2$
:::

## CARD PS3 Soru 5: n büyüdükçe
$Y_i \sim N(10, 4)$ i.i.d. olsun, yani $\bar Y\sim N(10, 4/n)$. $P(9.6\le\bar Y\le 10.4)$ = ?
**$n = 100$ için adım adım:**
1. $\text{var}(\bar Y) = 4/100 = 0.04$, $\text{sd}(\bar Y) = 0.2$
2. $z = (10.4 - 10)/0.2 = 2$ ve $z = (9.6 - 10)/0.2 = -2$
3. $P(-2 \le Z \le 2) = 0.9772 - 0.0228 = 0.9545$
| $n$ | $\text{var}(\bar Y)$ | $\text{sd}(\bar Y)$ | $z$ sınırı | Olasılık |
| 20 | 0.2 | 0.4472 | ±0.894 | 0.6289 |
| 100 | 0.04 | 0.2 | ±2 | 0.9545 |
| 1000 | 0.004 | 0.0632 | ±6.32 | ≈ 1.0000 |
**b)** Herhangi bir $c>0$ için $P(10-c\le\bar Y\le 10+c) = P\left(-\frac{c\sqrt n}{2}\le Z\le\frac{c\sqrt n}{2}\right) \to 1$ ($n\to\infty$). Çünkü $z$ sınırı $\frac{c\sqrt n}{2}$, $n$ ile birlikte sonsuza gider.
**c)** Bu tam olarak $\bar Y \xrightarrow{p} 10$ demek: $\bar Y$ olasılıkta 10'a yakınsar (büyük sayılar yasası).

## Q
SRC: PS3 Q1e
EN: $Y_1,\dots,Y_n$ are i.i.d. means that they are:
TR: $Y_1,\dots,Y_n$'nin i.i.d. olması ne demektir?
+ independent and have the same distribution
- identical in value
- independent but with different means
- normally distributed with mean zero
EX: **Doğru cevap:** bağımsız ve aynı dağılımlı (independently and identically distributed).
• Bağımsız: birinin değeri diğeri hakkında bilgi vermez (rastgele seçim sayesinde).
• Aynı dağılımlı: hepsi aynı anakütleden gelir, aynı $\mu$ ve $\sigma^2$'ye sahiptir.
**Diğer şıklar neden yanlış?**
• "Identical in value": değerler farklıdır; aynı olan dağılım. En sık yanlış anlama.
• "Different means": aynı dağılım = aynı ortalama.
• "Normal with mean zero": i.i.d. hiçbir dağılım şekli şart koşmaz; Bernoulli de olabilir, ortalaması 35 de olabilir.

## Q
SRC: PS3 Q1f
EN: The sampling distribution of a sample statistic is:
TR: Bir örneklem istatistiğinin örnekleme dağılımı nedir?
+ the distribution of the statistic over all possible samples
- the distribution of the population
- the histogram of a single sample
- the distribution of the error term
EX: **Doğru cevap:** istatistiğin **tüm olası örneklemler** üzerindeki dağılımı.
Düşünce deneyi: aynı anakütleden 1000 kez 100 kişilik örneklem çek, her seferinde $\bar Y$ hesapla. Bu 1000 $\bar Y$ değerinin histogramı, örnekleme dağılımına yaklaşır. Ortalaması $\mu$, varyansı $\sigma^2/n$.
**Diğer şıklar neden yanlış?**
• "Distribution of the population": bu $Y$'nin kendi dağılımı, $\bar Y$'ninki değil.
• "Histogram of a single sample": tek örneklemdeki verilerin dağılımı; istatistiğin değil.
• "Error term": regresyondaki $u$, ayrı bir kavram.

## Q
EN: If $Y_i$ are i.i.d. with variance $\sigma_Y^2$, then $\text{var}(\bar Y)$ equals:
TR: $Y_i$ i.i.d. ve varyansı $\sigma^2_Y$ ise $\text{var}(\bar Y)$ nedir?
+ $\sigma_Y^2/n$
- $\sigma_Y^2$
- $\sigma_Y/\sqrt n$
- $n\sigma_Y^2$
EX: **Doğru cevap: $\sigma_Y^2/n$.**
1. $\bar Y = \frac1n\sum Y_i$, yani sabit çarpan $\frac1n$ varyansa **karesiyle** girer: $\frac{1}{n^2}$
2. Bağımsızlık: toplamın varyansı varyansların toplamı: $\sum\text{var}(Y_i) = n\sigma^2$
3. Birleştir: $\frac{1}{n^2}\cdot n\sigma^2 = \sigma^2/n$
**Diğer şıklar neden yanlış?**
• $\sigma_Y^2$: tek bir gözlemin varyansı. Ortalama almak belirsizliği azaltır.
• $\sigma_Y/\sqrt n$: bu **standart sapma** (karekökü), varyans değil. En sık karıştırılan.
• $n\sigma_Y^2$: bu toplamın ($\sum Y_i$) varyansı, ortalamanın değil.

## Q
SRC: PS3 Q5a
EN: $Y_i\sim N(10,4)$ i.i.d. With $n=100$, $P(9.6\le\bar Y\le 10.4)$ is approximately:
TR: $Y_i\sim N(10,4)$, $n=100$. $P(9.6\le\bar Y\le 10.4)$ yaklaşık kaçtır?
+ $0.9545$
- $0.6289$
- $0.1585$
- $0.9999$
EX: **Doğru cevap: 0.9545.**
1. $\bar Y$'nin dağılımı: $N(10, 4/100)$, yani $\text{var}(\bar Y) = 0.04$
2. $\text{sd}(\bar Y) = \sqrt{4/100} = 0.2$
3. Sınırları standartlaştır: $(10.4 - 10)/0.2 = 2$ ve $(9.6-10)/0.2 = -2$
4. $P(-2\le Z\le 2) = 0.9772 - 0.0228 = 0.9545$
**Diğer şıklar nereden geliyor?**
• 0.6289: $n = 20$ için sonuç (sd = 0.447). $n$'yi yanlış okumuşsun.
• 0.1585: $\bar Y$ yerine tek bir $Y$ kullanmışsın: $\sigma = 2$, $z = \pm 0.2$, $P = 0.1585$. $n$'ye bölmeyi unutmak.
• 0.9999: $n = 1000$ civarı bir sonuç.

## Q
EN: As the sample size $n$ increases, the variance of $\bar Y$:
TR: Örneklem büyüdükçe $\bar Y$'nin varyansı ne olur?
+ decreases, because it is inversely proportional to $n$
- increases
- stays the same
- becomes equal to $\sigma_Y^2$
EX: **Doğru cevap:** azalır, çünkü $n$ ile ters orantılıdır: $\text{var}(\bar Y) = \sigma^2/n$.
Sayıyla ($\sigma^2 = 4$): $n = 20$ → 0.2; $n = 100$ → 0.04; $n = 1000$ → 0.004. $n\to\infty$ iken sıfıra gider.
Sezgi: daha çok gözlem = daha çok bilgi = tahminde daha az belirsizlik. Bu, $\bar Y$'nin **tutarlı** olmasının temelidir.
**Diğer şıklar neden yanlış?**
• Artar: tam tersi.
• Aynı kalır: $\sigma^2$ (tek gözlemin varyansı) aynı kalır; $\bar Y$'ninki azalır.
• $\sigma_Y^2$'ye eşit olur: sadece $n = 1$ iken.

## GEN ybarVar
## GEN ybarProb

## Q
SRC: TB 2.22
EN: The sample average $\bar Y$ is a random variable and:
TR: Örneklem ortalaması $\bar Y$ bir rassal değişkendir ve:
+ it has a probability distribution called its sampling distribution
- it is a single number, so it cannot have a distribution
- its distribution is always the standard normal
- its distribution is identical to the distribution of each $Y_i$
EX: **Doğru cevap: it has a sampling distribution.**
Her yeni örneklemde farklı $Y_i$'ler gelir, bu yüzden $\bar Y$ de değişir. $\bar Y$'nin olası örneklemler boyunca aldığı değerlerin dağılımına **örnekleme dağılımı** denir.
**Diğer şıklar neden yanlış?**
• "single number": elindeki **tahmin** (hesaplanan değer) tek sayıdır; ama örneklem çekilmeden önce $\bar Y$ rassaldır.
• "always standard normal": büyük örneklemde yaklaşık $N(\mu_Y, \sigma_Y^2/n)$ olur; standart normal değil, ve küçük örneklemde normal olmayabilir.
• "same as each $Y_i$": $\bar Y$'nin varyansı $\sigma_Y^2/n$, yani $Y_i$'den çok daha dar.

## Q
SRC: TB 2.23
EN: To learn the political views of students at your university, you want a simple random sample of 150 students. Which method gives one?
TR: Üniversitendeki öğrencilerin siyasi görüşlerini öğrenmek için 150 öğrencilik basit rastgele örneklem istiyorsun. Hangi yöntem bunu sağlar?
+ Let a computer draw 150 random numbers between 1 and the number of students, and pick the matching names from the student list.
- Make sure the share of minority students in the sample matches the share in the whole student body.
- Call every 50th name in the student directory at 9 a.m.; if nobody answers, call the next name.
- Interview students at random in the main dining hall.
EX: **Doğru cevap: bilgisayarla rastgele 150 numara çekmek.**
Basit rastgele örneklem: popülasyondaki **her birimin seçilme olasılığı eşit** ve seçimler birbirinden bağımsız. Tüm öğrenci listesinden rastgele numara çekmek tam olarak budur.
**Diğer şıklar neden yanlış?**
• azınlık oranını eşitlemek: bu **tabakalı** örneklem; basit rastgele değil.
• sabah 9'da arama: o saatte evde olmayan (derste, işte) öğrenciler sistematik olarak dışarıda kalır; seçim yanlılığı.
• yemekhane: yemekhaneye gitmeyenler hiç seçilemez; herkesin şansı eşit değil.

## Q
SRC: TB 2.24
EN: With i.i.d. sampling, the variance of the sample average, $\sigma_{\bar Y}^2$, is:
TR: i.i.d. örneklemede örneklem ortalamasının varyansı $\sigma_{\bar Y}^2$ nedir?
+ $\sigma_Y^2 / n$
- $\sigma_Y^2$
- $\sigma_Y / \sqrt{n}$
- $\sigma_Y^2 / (n-1)$
EX: **Doğru cevap: $\sigma_Y^2/n$.**
$$\text{var}(\bar Y) = \frac{1}{n^2}\,\text{var}\Big(\sum Y_i\Big) = \frac{1}{n^2}\cdot n\sigma_Y^2 = \frac{\sigma_Y^2}{n}$$
(Bağımsızlık sayesinde kovaryans terimleri 0.)
**Diğer şıklar neden yanlış?**
• $\sigma_Y^2$: tek bir gözlemin varyansı; ortalama almak varyansı küçültür.
• $\sigma_Y/\sqrt n$: bu **standart sapma** $\sigma_{\bar Y}$, varyans değil.
• $n-1$: $n-1$ örneklem varyansı $s_Y^2$'nin paydasında çıkar; buraya ait değil.

## Q
SRC: TB 2.25
EN: The mean of the sample average, $E(\bar Y)$, is:
TR: Örneklem ortalamasının beklenen değeri $E(\bar Y)$ nedir?
+ $\mu_Y$
- $\mu_Y / n$
- $\sigma_Y^2 / n$
- $\mu_Y$, but only when $n > 30$
EX: **Doğru cevap: $\mu_Y$.**
$$E(\bar Y) = \frac{1}{n}\sum_{i=1}^n E(Y_i) = \frac{1}{n}\cdot n\mu_Y = \mu_Y$$
Yani $\bar Y$, $\mu_Y$'nin **yansız** tahmincisidir; bu her $n$ için geçerlidir.
**Diğer şıklar neden yanlış?**
• $\mu_Y/n$: $n$'ler birbirini götürür, kalan $\mu_Y$.
• $\sigma_Y^2/n$: bu $\bar Y$'nin **varyansı**.
• "only when $n>30$": yansızlık her örneklem büyüklüğünde geçerlidir. $n > 30$ kuralı normale yaklaşma (MLT) ile ilgili bir kaba kuraldır.

--- LESSON u3d | ⟿ | Büyük sayılar yasası ve merkezi limit teoremi

## CARD Olasılıkta yakınsama ve BBK
==Olasılıkta yakınsama (convergence in probability)==: $\bar Y$'nin $(\mu_Y-c,\ \mu_Y+c)$ aralığında olma olasılığı, **her** $c>0$ için (ne kadar küçük olursa olsun) $n$ büyüdükçe 1'e yaklaşır. Gösterim: $\bar Y\xrightarrow{p}\mu_Y$.
==Büyük sayılar yasası (Law of Large Numbers, LLN)==: $Y_i$ i.i.d., $E(Y_i)=\mu_Y$ ve $\text{var}(Y_i)<\infty$ ise
$$\bar Y\xrightarrow{p}\mu_Y$$
**Günlük dille:** örneklem büyüdükçe örneklem ortalaması anakütle ortalamasına çok yakın olur. Bir parayı 10 kez atarsan tura oranı 0.3 de çıkabilir; 10.000 kez atarsan 0.5'e çok yakın çıkar.
**Neden çalışır?** $\text{var}(\bar Y) = \sigma^2/n \to 0$. Varyans sıfıra gidince dağılım $\mu$ etrafında iğne gibi sivrileşir.
Bir tahmincinin olasılıkta gerçek değere yakınsamasına ==tutarlılık (consistency)== denir. BBK, $\bar Y$'nin $\mu_Y$ için tutarlı olduğunu söyler.
:::ipucu BBK ile MLT farkı
BBK: $\bar Y$ **nereye** gider? ($\mu$'ye). MLT: $\bar Y$ $\mu$ etrafında **nasıl** dağılır? (yaklaşık normal).
:::

## CARD Merkezi limit teoremi
==Central Limit Theorem (CLT)==: $Y_i$ i.i.d., varyans sonlu ve $n$ büyükse:
$$\frac{\bar Y - \mu_Y}{\sigma_Y/\sqrt n} \approx N(0,1) \quad\Longleftrightarrow\quad \bar Y\approx N\!\left(\mu_Y, \frac{\sigma^2_Y}{n}\right)$$
**Büyülü kısım:** $Y$'nin kendisi normal olmasa bile (Bernoulli, üstel, çarpık, herhangi biri) $\bar Y$ yaklaşık normaldir. Bu yüzden normal dağılım istatistikte her yerdedir.
• Ne kadar büyük $n$? Genelde $n \ge 30$ yeterli; $Y$ çok çarpıksa daha fazlası gerekir.
• $Y$ zaten normalse yaklaşık değil, **tam** normaldir (her $n$ için).
Bu yaklaşık dağılıma ==asimptotik dağılım (asymptotic distribution)== denir: $n\to\infty$ iken kesinleşen, büyük örneklemde kullanılan yaklaşım.
:::ornek Sezgi
Tek bir zarın sonucu düzgün dağılır (1–6 eşit olasılıklı), çan şekli yok. Ama 50 zarın ortalaması 3.5 civarında yoğunlaşır ve çan şekli alır.
:::

## CARD CLT ile hesap: 3 adım
Bu tarif sınavda en çok kullanacağın şey:
1. **$\mu$ ve $\sigma^2$'yi bul.** Bernoulli ise $\mu=p$, $\sigma^2 = p(1-p)$.
2. **$\bar Y$'nin standart sapmasını hesapla:** $\text{sd}(\bar Y) = \sqrt{\sigma^2/n}$
3. **Standartlaştır ve $\Phi$ kullan:** $z = (c - \mu)/\text{sd}(\bar Y)$
:::ornek Ders örneği 4: Bernoulli p = 0.4
**a) $n=100$, $P(\bar Y\ge 0.43)$:**
1. $\mu = 0.4$, $\sigma^2 = 0.4\times 0.6 = 0.24$
2. $\text{sd} = \sqrt{0.24/100} = 0.049$
3. $z = (0.43 - 0.4)/0.049 = 0.61$, $P = 1-\Phi(0.61) = 0.270$
**$n=400$, $P(\bar Y\le 0.37)$:** $\text{sd} = \sqrt{0.24/400}=0.0245$, $z = -0.03/0.0245 = -1.22$, $P = \Phi(-1.22) = 0.110$
**b) $P(0.39\le\bar Y\le0.41)=0.95$ için gereken $n$:**
%95 için sınır $z = 1.96$ olmalı: $\frac{0.01}{\sqrt{0.24/n}} = 1.96$
$\sqrt{0.24/n} = 0.01/1.96$ → iki tarafın karesi → $n = 0.24\times(1.96/0.01)^2 = 0.24\times 196^2 = 9220$
:::
:::dikkat Sık hata
Standartlaştırırken $\sigma$'ya (tek gözlemin sd'si) bölmek. $\bar Y$ için $\sigma/\sqrt n$'ye bölünür.
:::

## CARD PS4 Soru 2 ve 6
**Soru 2:** $\mu = 35$, $\sigma^2 = 15$.
**a) $n=30$, $P(\bar Y<34.5)$:**
1. $\text{var}(\bar Y) = 15/30 = 0.5$, $\text{sd} = \sqrt{0.5} = 0.707$
2. $z = (34.5-35)/0.707 = -0.707$
3. $\Phi(-0.707) = 0.24$
**b) $n=80$, $P(36<\bar Y<37)$:**
1. $\text{var} = 15/80 = 0.1875$, $\text{sd} = 0.433$
2. $z_1 = (36-35)/0.433 = 2.31$, $z_2 = (37 - 35)/0.433 = 4.62$
3. $\Phi(4.62) - \Phi(2.31) = 1 - 0.9895 = 0.0105$
**Soru 6 (sayım):** tez süresi üstel dağılımlı, ortalama 6 ay. Bir öğrencinin 6 aydan uzun sürmesi: $P(X>6) = e^{-1} = 0.3679 = p$. 100 öğrenciden 6 aydan uzun sürenlerin **sayısı** $S\sim$ Binom$(100, p)$.
CLT (sayım için): $S\approx N(np,\ np(1-p)) = N(36.79,\ 23.25)$, sd $= \sqrt{23.25} = 4.822$
$P(S>40) \approx 1-\Phi\left(\frac{40-36.79}{4.822}\right) = 1-\Phi(0.666) = 0.253$ (tam binom değeri 0.220)
:::ipucu Sigorta örneği (ders örneği 5)
Hasar %95 olasılıkla 0, %5 olasılıkla 20.000 TL.
$\mu = 0.05\times 20000 = 1000$, $E(Y^2) = 0.05\times 20000^2 = 2\times 10^7$, $\sigma^2 = 2\times 10^7 - 1000^2 = 1.9\times10^7$.
100 ev için $\text{var}(\bar Y) = 1.9\times10^5$, $\text{sd} = 435.9$. $P(\bar Y>2000) = 1-\Phi(1000/435.9) = 1 - \Phi(2.29) = 0.011$.
:::

## Q
SRC: PS3 Q1g
EN: The law of large numbers states that, if $Y_i$ are i.i.d. with $E(Y_i)=\mu_Y$ and finite variance, then:
TR: Büyük sayılar yasası ne der?
+ $\bar Y$ converges in probability to $\mu_Y$
- the distribution of $\bar Y$ is exactly normal
- $\bar Y = \mu_Y$ in every sample
- the variance of $Y_i$ increases with $n$
EX: **Doğru cevap:** $\bar Y$ olasılıkta $\mu_Y$'ye yakınsar: $\bar Y\xrightarrow{p}\mu_Y$.
Anlamı: $n$ büyüdükçe $\bar Y$'nin $\mu_Y$'ye çok yakın olma olasılığı 1'e gider. Nedeni $\text{var}(\bar Y) = \sigma^2/n \to 0$.
**Diğer şıklar neden yanlış?**
• "Exactly normal": normal dağılımdan bahseden **merkezi limit teoremidir** ve o da "yaklaşık" der.
• "$\bar Y = \mu_Y$ in every sample": her örneklemde tam eşitlik yok; sadece büyük örneklemde **çok yakın** olma olasılığı yüksek.
• "Variance of $Y_i$ increases": $Y_i$'nin varyansı sabittir; $\bar Y$'nin varyansı ise **azalır**.

## Q
SRC: PS3 Q1h
EN: The central limit theorem says that when $n$ is large:
TR: Merkezi limit teoremi, $n$ büyükken ne der?
+ the distribution of $(\bar Y - \mu_Y)/(\sigma_Y/\sqrt n)$ is well approximated by $N(0,1)$
- every $Y_i$ is normally distributed
- $\bar Y$ is exactly equal to $\mu_Y$
- the sample variance equals zero
EX: **Doğru cevap:** standartlaştırılmış örneklem ortalaması $(\bar Y - \mu_Y)/(\sigma_Y/\sqrt n)$, yaklaşık $N(0,1)$ dağılır.
Önemli nokta: bu, $Y_i$'lerin kendisi normal olmasa bile geçerlidir. Bernoulli, üstel, çarpık; fark etmez.
**Diğer şıklar neden yanlış?**
• "Every $Y_i$ is normal": MLT tek tek gözlemler hakkında bir şey söylemez; sadece **ortalamaları** hakkında.
• "$\bar Y = \mu_Y$ exactly": bu BBK'nın yanlış bir abartısı; ikisi de tam eşitlik demez.
• "Sample variance equals zero": örneklem varyansı $s^2$, $\sigma^2$'ye yakınsar; sıfıra değil.

## Q
SRC: PS3 Q1i
EN: An estimator $\hat\mu_Y$ is consistent for $\mu_Y$ if:
TR: $\hat\mu_Y$ ne zaman $\mu_Y$ için tutarlıdır?
+ $\hat\mu_Y \xrightarrow{p} \mu_Y$ as $n\to\infty$
- $E(\hat\mu_Y) = \mu_Y$ for every $n$
- it has the smallest variance among all estimators
- it is normally distributed
EX: **Doğru cevap:** $n\to\infty$ iken $\hat\mu_Y \xrightarrow{p} \mu_Y$ (olasılıkta yakınsama).
Tutarlılık **büyük örneklem** özelliğidir: yeterince veriyle tahminci gerçek değere istediğin kadar yakın olur.
Tahmincilerin üç iyi özelliğini ayır:
• **Yansızlık (unbiasedness):** $E(\hat\mu) = \mu$, her $n$ için. Ortalamada doğru. → ikinci şık
• **Tutarlılık (consistency):** $\hat\mu \xrightarrow{p}\mu$. Büyük örneklemde doğru. → doğru şık
• **Etkinlik (efficiency):** en küçük varyans. → üçüncü şık
**Diğer şıklar** bu yüzden başka özelliklerin tanımı; "normally distributed" ise bir dağılım şekli, iyilik ölçüsü değil.

## Q
SRC: PS3 Q1j
EN: The asymptotic distribution of a statistic is:
TR: Bir istatistiğin asimptotik dağılımı nedir?
+ the approximate (large-sample) distribution of its sampling distribution
- its exact distribution in small samples
- the population distribution of $Y$
- the distribution of the data in one sample
EX: **Doğru cevap:** örnekleme dağılımının **büyük örneklem** yaklaşımı.
"Asimptotik" = $n \to\infty$ iken. Örnek: MLT'nin verdiği $\bar Y \approx N(\mu, \sigma^2/n)$ bir asimptotik dağılımdır; $n$ büyüdükçe kesinleşir. Hipotez testlerinde 1.96 gibi kritik değerleri bu yaklaşımdan alırız.
**Diğer şıklar neden yanlış?**
• "Exact distribution in small samples": bu **tam (exact)** dağılım, asimptotiğin tersi.
• "Population distribution of $Y$": tek gözlemin dağılımı; istatistiğin değil.
• "Data in one sample": tek örneklemin histogramı.

## Q
SRC: PS4 Q2a
EN: $Y_i$ have $\mu_Y=35$ and $\sigma^2_Y=15$. In a random sample of $n=30$, $P(\bar Y < 34.5)$ is approximately:
TR: $\mu=35$, $\sigma^2=15$, $n=30$. $P(\bar Y<34.5)$ yaklaşık kaçtır?
+ $0.24$
- $0.45$
- $0.76$
- $0.01$
EX: **Doğru cevap: 0.24.**
MLT 3 adım:
1. $\mu = 35$, $\sigma^2 = 15$
2. $\text{var}(\bar Y) = 15/30 = 0.5$, $\text{sd}(\bar Y) = \sqrt{0.5} = 0.707$
3. $z = (34.5 - 35)/0.707 = -0.707$, $\Phi(-0.707) = 0.24$
**Diğer şıklar nereden geliyor?**
• 0.45: $\bar Y$ yerine tek gözlemin sd'sini ($\sqrt{15} = 3.87$) kullanmışsın: $z = -0.129$, $\Phi = 0.45$. $n$'ye bölmeyi unutmak.
• 0.76: $1 - 0.24$; sağ tarafı hesaplamışsın, soru "<" diyor.
• 0.01: bu ancak $z \approx -2.3$ olsaydı çıkardı. Doğru $z = -0.707$; bu kadar uç bir olasılık için sapma çok küçük.

## Q
EN: Ders örneği 4: $Y_i$ Bernoulli with $p=0.4$. How large must $n$ be so that $P(0.39\le\bar Y\le0.41) = 0.95$?
TR: $p=0.4$ Bernoulli. $P(0.39\le\bar Y\le0.41)=0.95$ olması için $n$ en az kaç olmalı?
+ about $9{,}220$
- about $96$
- about $2{,}400$
- about $384$
EX: **Doğru cevap: yaklaşık 9.220.**
1. Bernoulli: $\sigma^2 = p(1-p) = 0.4\times0.6 = 0.24$
2. %95 iki taraflı → sınır $z = 1.96$. Aralığın yarı genişliği $0.01$ olmalı:
$1.96\sqrt{0.24/n} = 0.01$
3. $\sqrt{0.24/n} = 0.01/1.96 = 0.005102$
4. Kare al: $0.24/n = 0.00002603$ → $n = 0.24\times(196)^2 = 9220$
**Diğer şıklar nereden geliyor?**
• 96: varyansı 0.25 ve aralığı ±0.1 alırsan çıkar: $0.25(1.96/0.1)^2 = 96$. Aralık ±0.01, yani 10 kat dar.
• 2.400: $1.96$ yerine 1 kullanmak: $0.24\times 100^2 = 2400$.
• 384: varyansı 0.25 ve aralığı ±0.05 alırsan çıkar: $0.25(1.96/0.05)^2 = 384$.
Ders: aralığı 10 kat daraltmak için $n$ 100 kat büyümeli ($n$, genişliğin karesiyle ters orantılı).

## GEN cltProb
## GEN cltBern
## GEN cltCount

## Q
SRC: TB 2.26
EN: Econometricians usually rely on large-sample (asymptotic) distributions instead of exact sampling distributions because:
TR: Ekonometristler genelde tam (kesin) örnekleme dağılımları yerine büyük örneklem (asimptotik) dağılımlarına güvenir, çünkü:
+ asymptotic distributions give good approximations for the sample sizes usually available
- we effectively have an infinite number of observations
- economic variables are usually normally distributed
- the covariances between $Y_i$ and $Y_j$ are usually not zero
EX: **Doğru cevap: asymptotic distributions are good approximations.**
Kesin örnekleme dağılımı $Y$'nin popülasyon dağılımına bağlıdır ve onu genelde bilmeyiz. Büyük örneklemde ise MLT sayesinde dağılım ne olursa olsun yaklaşık normal elde ederiz. Elimizdeki tipik örneklem büyüklükleri için bu yaklaşım yeterince iyidir.
**Diğer şıklar neden yanlış?**
• "infinite observations": hiçbir zaman sonsuz gözlemimiz yok; asimptotik dağılım bir **yaklaşımdır**.
• "variables are normal": çoğu ekonomik değişken (gelir, servet) normal değildir; asimptotiğe zaten bu yüzden ihtiyaç var.
• covariances not zero: i.i.d. örneklemede kovaryanslar sıfırdır; ilgisiz.

## Q
SRC: TB 2.27
EN: Each of the following describes the consistency of $\bar Y$ EXCEPT:
TR: Aşağıdakilerin hepsi $\bar Y$'nin tutarlılığını (consistency) tarif eder, BİRİ HARİÇ:
+ $\bar Y$ has the smallest variance of all estimators
- $\bar Y$ converges in probability to $\mu_Y$
- $\Pr(|\bar Y - \mu_Y| > c) \to 0$ as $n \to \infty$, for every $c > 0$
- for any $c > 0$, the probability that $\bar Y$ lies in $\mu_Y \pm c$ gets arbitrarily close to 1 as $n$ grows
EX: **Doğru cevap: smallest variance of all estimators.**
"En küçük varyans" **etkinlik** (efficiency) özelliğidir, tutarlılık değil.
**Diğer üç şık aynı şeyi söyler** (büyük sayılar yasası):
• $\bar Y \xrightarrow{p} \mu_Y$ (olasılıkta yakınsama);
• $\mu_Y$'den $c$'den fazla uzak olma olasılığı 0'a gider;
• $\mu_Y \pm c$ aralığında olma olasılığı 1'e gider (önceki şıkkın tümleyeni).

## Q
SRC: TB 2.28
EN: The central limit theorem states that:
TR: Merkezi limit teoremi ne der?
+ the sampling distribution of $(\bar Y - \mu_Y)/\sigma_{\bar Y}$ is approximately $N(0,1)$ when $n$ is large
- $\bar Y$ converges in probability to $\mu_Y$
- the probability that $\bar Y$ lies in $\mu_Y \pm c$ gets arbitrarily close to 1 as $n$ grows
- the $t$ distribution converges to the $F$ distribution for $n > 30$
EX: **Doğru cevap: standartlaştırılmış $\bar Y$ yaklaşık $N(0,1)$.**
MLT dağılımın **şeklini** söyler: $Y$ nasıl dağılırsa dağılsın, $n$ büyükken $\dfrac{\bar Y - \mu_Y}{\sigma_{\bar Y}}$ yaklaşık standart normaldir.
**Diğer şıklar neden yanlış?**
• olasılıkta yakınsama ve "$\mu_Y\pm c$ aralığı": bunlar **büyük sayılar yasası** (tutarlılık), MLT değil.
• $t \to F$: yanlış; $t$ normale yakınsar.

## Q
SRC: TB 2.29
EN: Which statement about the central limit theorem is correct?
TR: Merkezi limit teoremi hakkında hangi ifade doğrudur?
+ It gives conditions under which a standardized sum (or average) of i.i.d. $Y_1,\dots,Y_n$ is approximately standard normal.
- It says that $\bar Y$ is a consistent estimator of $\mu_Y$.
- It holds only when the law of large numbers also holds.
- It says that the standardized average follows a Student $t$ distribution.
EX: **Doğru cevap: standardized sum of i.i.d. variables is approximately standard normal.**
MLT'nin koşulları: $Y_i$'ler i.i.d. ve $0<\sigma_Y^2<\infty$. Bu koşullarda toplamın (ya da ortalamanın) standartlaştırılmış hali $n$ büyüdükçe $N(0,1)$'e yaklaşır.
**Diğer şıklar neden yanlış?**
• tutarlılık: bu büyük sayılar yasası.
• "only when LLN holds": iki teorem ayrı sonuçlardır; MLT böyle bir koşul koymaz.
• Student $t$: MLT'nin sonucu normal dağılım. $t$ dağılımı ancak $Y$ normal ise ve küçük örneklemde kesin sonuç olarak çıkar.

--- LESSON u3e | r | Örneklem kovaryansı ve korelasyonu

## CARD Saçılım grafiği ve örneklem istatistikleri
$X$ ile $Y$ arasındaki ilişkiyi özetlemenin üç yolu:
1. ==Saçılım grafiği (scatterplot)==: her gözlem bir nokta ($X$ yatay, $Y$ dikey). Noktalar yükselen bir şerit oluşturuyorsa pozitif, alçalan şerit ise negatif ilişki.
2. **Örneklem kovaryansı** $s_{XY}$
3. **Örneklem korelasyonu** $r_{XY}$
Anakütle kavramlarının ($\sigma^2$, $\sigma_{XY}$, $\rho$) örneklemden hesaplanan karşılıkları:
$$s_X^2 = \frac{1}{n-1}\sum (X_i-\bar X)^2 \qquad s_{XY} = \frac{1}{n-1}\sum (X_i-\bar X)(Y_i-\bar Y)$$
$$r_{XY} = \frac{s_{XY}}{s_Xs_Y}$$
• $n-1$'e bölünür, $n$'ye değil. Neden? $\bar X$'i örneklemden tahmin ettiğimiz için bir "serbestlik derecesi" kaybederiz; $n-1$'e bölmek $s^2$'yi yansız yapar.
• Hepsi tutarlı: $s_X^2\xrightarrow{p}\sigma_X^2$, $s_{XY}\xrightarrow{p}\sigma_{XY}$, $r_{XY}\xrightarrow{p}\text{corr}(X,Y)$.
• $r$ doğrusal ilişkiyi ölçer: $\pm1$ noktalar tam bir doğru üzerinde, 0 doğrusal ilişki yok. $r$'nin işareti eğimin işaretidir.
:::ornek Küçük hesap
$X = 1, 2, 3$, $Y = 2, 4, 9$. $\bar X = 2$, $\bar Y = 5$.
Sapmalar: $X$: $-1, 0, 1$; $Y$: $-3, -1, 4$.
$s_{XY} = \frac{(-1)(-3) + 0(-1) + 1(4)}{3-1} = \frac{7}{2} = 3.5$
$s_X^2 = \frac{1 + 0 + 1}{2} = 1$, $s_Y^2 = \frac{9 + 1 + 16}{2} = 13$
$r = 3.5/\sqrt{1\times 13} = 0.971$: çok güçlü pozitif doğrusal ilişki.
:::
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
EX: **Doğru cevap: $s_{XY}/(s_Xs_Y)$.**
Örneklem kovaryansını iki **standart sapmanın** çarpımına böleriz. Birim kontrolü: $s_{XY}$ (birim$_X$ × birim$_Y$), $s_Xs_Y$ (birim$_X$ × birim$_Y$) → oran birimsiz ✓.
**Diğer şıklar neden yanlış?**
• Varyanslara ($s^2_X s^2_Y$) bölmek: birim kalır (1/birim$_X$·birim$_Y$) ve sonuç $[-1, 1]$'de olmaz. Tuzak.
• Çarpmak: birim kaybolmaz, tersine büyür.
• $s^2_X/s^2_Y$: kovaryansı hiç kullanmıyor; iki değişkenin birlikte hareketini ölçemez.

## Q
EN: In the California school data, the sample correlation between the student-teacher ratio and test scores is $-0.23$. This indicates:
TR: STR ile test puanı arasındaki korelasyon $-0.23$. Bu ne gösterir?
+ a weak negative linear relationship
- a strong positive linear relationship
- no relationship of any kind
- that reducing class size causes higher scores
EX: **Doğru cevap:** zayıf negatif doğrusal ilişki.
• İşaret **negatif**: öğretmen başına öğrenci arttıkça test puanları azalma eğiliminde.
• Büyüklük **0.23**: sıfıra yakın, yani noktalar doğru etrafında çok dağınık; ilişki zayıf.
**Diğer şıklar neden yanlış?**
• Güçlü pozitif: işaret negatif ve büyüklük küçük.
• Hiç ilişki yok: $-0.23 \ne 0$; zayıf da olsa doğrusal ilişki var. (Ayrıca $r = 0$ bile doğrusal olmayan ilişkiyi dışlamaz.)
• "Causes": korelasyon nedensellik göstermez. Bölge geliri gibi bir karıştırıcı değişken bu ilişkiyi üretiyor olabilir.

## Q
EN: A sample correlation of $r_{XY} = 0$ means:
TR: $r_{XY}=0$ ne anlama gelir?
+ there is no linear association in the sample, though a nonlinear one may exist
- $X$ and $Y$ are independent for sure
- all points lie on a horizontal line
- the sample covariance is negative
EX: **Doğru cevap:** örneklemde **doğrusal** ilişki yok; ama doğrusal olmayan bir ilişki olabilir.
Örnek: noktalar U şeklinde ($Y = X^2$, $X$ simetrik dağılmış). $X$ küçükken ve büyükken $Y$ yüksek, ortadayken düşük. Güçlü bir ilişki var ama düz bir çizgiyle özetlenemez; $r$ sıfır çıkar.
**Diğer şıklar neden yanlış?**
• "Independent for sure": $r = 0$ bağımsızlığı garanti etmez (U örneği).
• "Horizontal line": noktalar tam yatay bir doğru üzerindeyse $s_Y = 0$ olur ve $r$ tanımsızdır (sıfıra bölme). $r = 0$ ise noktalar genelde bir bulut gibidir.
• "Covariance negative": $r = 0$ ise $s_{XY} = 0$; negatif değil.

## Q
EN: The sample variance $s^2_X$ divides the sum of squared deviations by:
TR: Örneklem varyansı $s^2_X$, sapmaların kareleri toplamını neye böler?
+ $n-1$
- $n$
- $n-2$
- $\sqrt n$
EX: **Doğru cevap: $n-1$.**
$s^2_X = \frac{1}{n-1}\sum(X_i-\bar X)^2$. Sapmaları $\mu$'den değil, örneklemden tahmin edilen $\bar X$'ten alıyoruz. $\bar X$ verilere "uyduğu" için sapmalar biraz küçük çıkar; bir derece eksiğiyle ($n-1$) bölmek bunu düzeltir ve $s^2$'yi yansız yapar. Bu "kaybedilen serbestlik derecesi"dir.
**Diğer şıklar neden yanlış?**
• $n$: bu anakütle formülüne benzer (hesap makinesindeki $\sigma_x$). Örneklemde yanlı olur.
• $n-2$: regresyondaki SER ($s_{\hat u}$) $n-2$'ye böler, çünkü orada **iki** katsayı ($\hat\beta_0$, $\hat\beta_1$) tahmin edilir.
• $\sqrt n$: standart hata formülünde $\sqrt n$ geçer, varyans tanımında değil.

## GEN sampleCorr

## Q
SRC: TB 3.14
EN: A scatterplot is:
TR: Serpilme grafiği (scatterplot) nedir?
+ a plot of $n$ observations on $X_i$ and $Y_i$, with each observation shown as the point $(X_i, Y_i)$
- a plot that shows how $Y$ and $X$ are related only when the points are scattered all over
- a graph that converts the covariance of $X$ and $Y$ into a correlation coefficient
- a plot of $n$ observations of $Y$ over time
EX: **Doğru cevap: each observation is the point $(X_i, Y_i)$.**
Serpilme grafiğinde yatay eksen $X$, dikey eksen $Y$'dir ve her gözlem bir noktadır. Örnek: her okul bölgesi için (öğrenci-öğretmen oranı, test puanı).
**Diğer şıklar neden yanlış?**
• "scattered all over": isim benzerliğiyle oynayan bir şık; noktalar bir doğruya yakın da olabilir.
• covariance → correlation: grafik bir hesaplama yapmaz.
• "over time": bu bir **zaman serisi grafiği**.

## Q
SRC: TB 3.25
EN: The sample covariance $s_{XY}$ can be computed in each of the following ways EXCEPT:
TR: Örneklem kovaryansı $s_{XY}$ aşağıdaki yolların hepsiyle hesaplanabilir, BİRİ HARİÇ:
+ $\dfrac{1}{n-1}\left[\sum_{i=1}^{n}(X_i - \bar X)\right]\left[\sum_{i=1}^{n}(Y_i - \bar Y)\right]$
- $\dfrac{1}{n-1}\sum_{i=1}^{n}(X_i - \bar X)(Y_i - \bar Y)$
- $\dfrac{1}{n-1}\left(\sum_{i=1}^{n}X_iY_i - n\bar X\bar Y\right)$
- $r_{XY}\, s_X\, s_Y$, where $r_{XY}$ is the sample correlation
EX: **Doğru cevap (hesaplayamayan): toplamların çarpımı.**
$\sum (X_i - \bar X) = 0$ olduğu için bu ifade **her zaman 0** çıkar. Kovaryans için sapmaların **çarpımlarının toplamı** gerekir, toplamların çarpımı değil.
**Diğer üç formül doğru:**
• tanım: $\frac{1}{n-1}\sum (X_i - \bar X)(Y_i - \bar Y)$.
• kısa yol: çarpımı açınca $\sum X_iY_i - n\bar X\bar Y$ çıkar.
• $r_{XY} = s_{XY}/(s_X s_Y)$ tanımından $s_{XY} = r_{XY}s_Xs_Y$.

## Q
SRC: TB 3.29
EN: Which statement about the sample correlation coefficient $r_{XY}$ is TRUE?
TR: Örneklem korelasyon katsayısı $r_{XY}$ hakkında hangi ifade DOĞRUDUR?
+ $-1 \le r_{XY} \le 1$
- $r_{XY} = \text{corr}(X_i, Y_i)$ in every sample
- $r_{XY}^2 < 1$ always
- $r_{XY} = s_{XY}/s_X^2$
EX: **Doğru cevap: $-1 \le r_{XY} \le 1$.**
$|s_{XY}| \le s_Xs_Y$ olduğundan $|r_{XY}| \le 1$. Uç değerler $\pm 1$, tüm noktalar tam bir doğru üzerindeyse gerçekleşir.
**Diğer şıklar neden yanlış?**
• "every sample": $r_{XY}$ bir tahmindir; popülasyon korelasyonuna ancak **olasılıkta yakınsar**, her örneklemde eşit değildir.
• "$r^2 < 1$ always": noktalar tam bir doğruya düşerse $r^2 = 1$ olur; kesin eşitsizlik yanlış.
• $s_{XY}/s_X^2$: bu OLS **eğimi** $\hat\beta_1$.

## Q
SRC: TB 3.30
EN: The correlation coefficient:
TR: Korelasyon katsayısı:
+ is a measure of linear association
- lies between zero and one
- is close to one whenever $X$ causes $Y$
- is large whenever there is a strong nonlinear relationship
EX: **Doğru cevap: a measure of linear association.**
Korelasyon sadece **doğrusal** ilişkinin gücünü ve yönünü ölçer. Örnek: $X$ sıfır etrafında simetrik ve $Y = X^2$ ise ilişki tam ama korelasyon 0.
**Diğer şıklar neden yanlış?**
• "zero and one": negatif de olabilir; aralık $[-1, 1]$.
• "$X$ causes $Y$": korelasyon nedensellik değildir; ayrıca nedensellik olsa bile etki küçükse korelasyon düşük olabilir.
• "strong nonlinear": doğrusal olmayan ilişkileri yakalamaz (yukarıdaki $X^2$ örneği).

## Q
SRC: TB 3.33
EN: You have 125 observations on the height ($H$) and weight ($W$) of your classmates. The sample covariance is $s_{HW} = 68$, and the sample standard deviations are $s_H = 3.5$ and $s_W = 29$. The sample correlation coefficient is:
TR: Sınıf arkadaşlarının boyu ($H$) ve kilosu ($W$) için 125 gözlemin var. Örneklem kovaryansı $s_{HW} = 68$, örneklem standart sapmaları $s_H = 3.5$ ve $s_W = 29$. Örneklem korelasyon katsayısı nedir?
+ 0.67
- 1.22
- 0.50
- It cannot be computed, because men and women are not separated.
EX: **Doğru cevap: 0.67.**
$$r_{HW} = \frac{s_{HW}}{s_H s_W} = \frac{68}{3.5 \times 29} = \frac{68}{101.5} \approx 0.67$$
Pozitif ve oldukça güçlü bir doğrusal ilişki: uzun olanlar ortalamada daha ağır.
**Diğer şıklar neden yanlış?**
• 1.22: korelasyon 1'i geçemez; bu sonuç bir hesap hatası demektir.
• 0.50: yanlış hesap.
• "cannot be computed": cinsiyete göre ayırmak gerekmez; korelasyon tüm örneklem için hesaplanabilir.

## Q
SRC: TB 3.34
EN: You have data on weekly study time ($T$) and grades ($G$). If you change the measurement of study time from minutes to hours, the correlation coefficient $r_{TG}$:
TR: Haftalık çalışma süresi ($T$) ve notlar ($G$) verin var. Çalışma süresini dakikadan saate çevirirsen korelasyon katsayısı $r_{TG}$:
+ does not change
- is divided by 60
- becomes larger
- cannot be computed, because some students study less than an hour per week
EX: **Doğru cevap: does not change.**
$T_{saat} = T_{dk}/60$. Kovaryans 60'a bölünür: $s_{T_s G} = s_{T_{dk} G}/60$. Standart sapma da 60'a bölünür: $s_{T_s} = s_{T_{dk}}/60$. Korelasyonda ikisi birbirini götürür:
$$r = \frac{s_{TG}/60}{(s_T/60)\,s_G} = \frac{s_{TG}}{s_T s_G}$$
Korelasyon **birimsizdir**.
**Diğer şıklar neden yanlış?**
• "divided by 60": kovaryans 60'a bölünür, korelasyon değil.
• "larger": birim değişikliği ilişkinin gücünü değiştirmez.
• "less than an hour": 0.5 saat gibi kesirli değerler sorun değil.

## Q
SRC: TB 3.35
EN: A low correlation coefficient implies that:
TR: Düşük bir korelasyon katsayısı neyi gösterir?
+ in the scatterplot, the points lie quite far from the line
- the regression line must have a flat slope
- the two variables are unrelated
- you should tighten the axis scales to bring the points closer to the line
EX: **Doğru cevap: points lie far from the line.**
Düşük $|r|$: noktalar en iyi doğru etrafında **dağınık**, doğrusal ilişki zayıf.
**Diğer şıklar neden yanlış?**
• "flat slope": eğim $\hat\beta_1 = r\,(s_Y/s_X)$; $s_Y$ büyükse düşük $r$ ile bile dik eğim olabilir. Korelasyon eğim demek değil.
• "unrelated": doğrusal olmayan güçlü bir ilişki olabilir (örneğin U şekli).
• eksen ölçeğini değiştirmek: grafiğin görünüşünü değiştirir, korelasyonu değiştirmez (birimsiz).

`);
