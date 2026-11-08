CONTENT.push(String.raw`
=== UNIT u2 | Hafta 2 | Olasılık I | Rassal değişken, beklenen değer, ortak dağılım, kovaryans

--- LESSON u2a | Ω | Rassal değişken ve dağılım

## CARD Deney, örneklem uzayı, olay
Olasılık konusunun dört temel kelimesi. Sınavda tanım sorusu olarak gelir.
• ==Deney (experiment)==: bir sonucun gözlendiği süreç. Örnek: iki para atmak, bir öğrenciye maaşını sormak.
• ==Sonuç (outcome)==: deneyin birbirini dışlayan olası sonuçlarından biri. Örnek: "yazı-tura" (TH).
• ==Örneklem uzayı (sample space)== $S$ ya da $\Omega$: **tüm** olası sonuçların kümesi.
• ==Olay (event)==: örneklem uzayının bir **alt kümesi**, yani bazı sonuçların toplamı. Örnek: "en az bir tura" olayı = $\{HH, HT, TH\}$.
:::ornek Örnekler
Tanıştığın bir sonraki kişinin cinsiyeti: $S = \{F, M\}$. Olası olaylar (alt kümeler): $\emptyset, \{F\}, \{M\}, S$.
İki para: $S = \{HH, HT, TH, TT\}$. "İkisi aynı" olayı: $\{HH, TT\}$.
:::
==Olasılık (probability)==: bir sonucun deney çok kez tekrarlandığında **uzun vadede** gerçekleşme oranı. Her zaman 0 ile 1 arasında; tüm sonuçların olasılıkları toplamı 1.
:::ipucu Ayırt etme
Örneklem uzayı = hepsi. Olay = bir kısmı. Rassal değişken = sonuçlara sayı atayan kural (sonraki kart).
:::

## CARD Rassal değişken
==Rassal değişken (random variable)==: örneklem uzayının **sayısal özeti**. Her sonucu bir gerçek sayıya eşleyen bir **fonksiyon**. Büyük harfle yazılır ($X, Y$); aldığı belirli değerler küçük harfle ($x, y$).
Neden gerekli? "Yazı-tura" gibi sonuçlarla hesap yapamazsın; ama "tura sayısı = 1" ile ortalama, varyans hesaplayabilirsin.
:::ornek İki para atışı
$Y$ = tura (H) sayısı olsun. Her sonuç bir sayıya eşlenir:
• TT → 0, HT → 1, TH → 1, HH → 2
Yani $\{Y=0\}=\{TT\}$, $\{Y=1\}=\{HT, TH\}$, $\{Y=2\}=\{HH\}$.
Adil parada her sonuç $1/4$ olasılıklı: $P(Y=0)=1/4$, $P(Y=1)=2/4=1/2$, $P(Y=2)=1/4$.
:::
**Türleri:**
• ==Kesikli (discrete)==: sayılabilir değerler alır (0, 1, 2, ...). Örnek: internetin kopma sayısı, hanedeki çocuk sayısı, tura sayısı.
• ==Sürekli (continuous)==: bir aralıktaki **her** değeri alabilir, değerler sayılamaz. Örnek: maaş, işe gidiş süresi, boy.
• Karma (mixed): ikisinin birleşimi.
:::ipucu Hızlı test
"Kaç tane?" diye sorulabiliyorsa kesikli. "Ne kadar?" diye ölçülüyorsa sürekli.
:::

## CARD Olasılık dağılımı ve CDF
• ==Olasılık dağılımı (probability distribution)==: kesikli değişkenin alabileceği **tüm değerler** ve her birinin olasılığı. Olasılıklar toplamı 1.
• ==Birikimli dağılım (cumulative distribution, CDF)==: $F(y) = P(Y\le y)$, değişkenin belli bir değerden **küçük ya da eşit** olma olasılığı. O değere kadar olan olasılıkların toplamı.
:::ornek İnternet kopma örneği (ders)
| $y$ | 0 | 1 | 2 | 3 | 4 |
| $P(Y=y)$ | 0.80 | 0.10 | 0.06 | 0.03 | 0.01 |
| $P(Y\le y)$ | 0.80 | 0.90 | 0.96 | 0.99 | 1.00 |
CDF satırı nasıl bulunur? Soldan başlayıp biriktirerek topla:
• $P(Y\le 1) = 0.80 + 0.10 = 0.90$
• $P(Y\le 2) = 0.90 + 0.06 = 0.96$
**Sık sorulan hesaplar:**
• En az bir kopma: $P(Y\ge 1) = 1 - P(Y=0) = 1 - 0.80 = 0.20$
• En fazla iki kopma: $P(Y\le 2) = 0.96$
• Tam iki kopma, CDF'ten: $P(Y=2) = P(Y\le 2) - P(Y\le 1) = 0.96 - 0.90 = 0.06$
• İkiden çok: $P(Y>2) = 1 - P(Y\le 2) = 1 - 0.96 = 0.04$
:::
:::dikkat "<" ile "≤" farkı
$P(Y<2)$ 2'yi içermez: $= P(Y\le 1) = 0.90$. $P(Y\le 2)$ içerir: $0.96$. Kesikli değişkende bu fark önemlidir.
:::
• ==Bernoulli== değişken: sadece 0 ya da 1 alır. $P(G=1)=p$, $P(G=0)=1-p$. Örnek: mezun mu (1) değil mi (0).
• Sürekli değişkende tek tek değer listelenmez (her tek değerin olasılığı 0'dır). ==Olasılık yoğunluk fonksiyonu (pdf)== $f(y)$ kullanılır: bir aralığın olasılığı, pdf eğrisinin altındaki **alandır**.

## Q
SRC: PS2 Q1b
EN: The sample space is:
TR: Örneklem uzayı nedir?
+ the set of all possible outcomes of an experiment
- a subset of the possible outcomes
- the probability of the most likely outcome
- a numerical summary of an outcome
EX: **Doğru cevap:** bir deneyin **tüm** olası sonuçlarının kümesi.
Örnek: iki para atışında $S = \{HH, HT, TH, TT\}$. Hiçbir sonuç dışarıda kalmaz.
**Diğer şıklar ne?**
• "a subset of the possible outcomes": bu **olay (event)**. Örneğin "en az bir tura" = $\{HH, HT, TH\}$.
• "probability of the most likely outcome": bu bir olasılık değeri, küme değil.
• "a numerical summary": bu **rassal değişken**. Örneğin tura sayısı.
Üç kavramı karıştırma: uzay = hepsi, olay = bir kısmı, rassal değişken = sayıya çeviren kural.

## Q
SRC: PS2 Q1c
EN: A random variable is:
TR: Rassal değişken nedir?
+ a numerical summary of the sample space, mapping each outcome to a real number
- any variable whose value is unknown to the researcher
- a subset of the sample space
- the probability that an event occurs
EX: **Doğru cevap:** örneklem uzayının sayısal özeti; her sonucu bir gerçek sayıya eşleyen bir **fonksiyon**.
Örnek: iki para atışında $Y$ = tura sayısı. TT → 0, HT → 1, TH → 1, HH → 2. Sonuçlar (harfler) sayılara dönüşür, böylece ortalama ve varyans hesaplanabilir.
**Diğer şıklar neden yanlış?**
• "any variable whose value is unknown": bilinmeyen olmak yetmez. Rassal değişkenin özü, rastgele bir deneyin sonucuna bağlı olması ve olasılıklarla tanımlanması.
• "a subset of the sample space": bu **olay**.
• "the probability that an event occurs": bu bir **olasılık**, yani 0 ile 1 arası bir sayı.

## Q
SRC: PS2 Q1e
EN: The cumulative probability distribution of $Y$ gives:
TR: $Y$'nin birikimli dağılımı (CDF) neyi verir?
+ $P(Y \le y)$
- $P(Y = y)$
- $P(Y > y)$
- $E(Y)$
EX: **Doğru cevap: $P(Y\le y)$.**
"Birikimli" (cumulative) = biriktirerek toplama. $y$'ye kadar (dahil) olan tüm olasılıklar toplanır.
Örnek: kopma tablosunda $P(Y\le 1) = P(Y=0) + P(Y=1) = 0.80 + 0.10 = 0.90$.
**Diğer şıklar neden yanlış?**
• $P(Y=y)$: bu tek bir değerin olasılığı, yani **olasılık dağılımı** (birikimli değil).
• $P(Y>y)$: bu CDF'in tümleyeni: $1 - P(Y\le y)$. "Sağ kuyruk" olasılığı.
• $E(Y)$: beklenen değer, bir olasılık değil.

## Q
EN: Which of the following is a continuous random variable?
TR: Hangisi sürekli rassal değişkendir?
+ your salary in your first job after graduation
- the number of times your network connection fails
- the number of heads in two coin tosses
- the number of children in a household
EX: **Doğru cevap: mezuniyet sonrası ilk maaşın.**
Maaş bir aralıktaki **herhangi bir değeri** alabilir: 25.000 TL, 25.000,50 TL, 25.000,517 TL... Değerler sayılamaz; bu yüzden süreklidir. Ders notunda da örnek olarak geçer.
**Diğer üçü neden kesikli?** Hepsi "kaç tane?" sorusunun cevabı, yani 0, 1, 2, 3 gibi sayılabilir değerler alır:
• Bağlantının kaç kez koptuğu: 0, 1, 2, ...
• İki atışta tura sayısı: sadece 0, 1 ya da 2.
• Hanedeki çocuk sayısı: 0, 1, 2, ... (2.5 çocuk olmaz).

## Q
EN: An event is:
TR: Olay (event) nedir?
+ a subset of the sample space
- the set of all possible outcomes
- a random variable that takes values 0 or 1
- the expected value of an outcome
EX: **Doğru cevap:** örneklem uzayının bir **alt kümesi**.
Olay, bir ya da daha fazla sonucun toplanmasıdır. İki para örneğinde "en az bir tura" olayı $\{HH, HT, TH\}$, "ikisi de yazı" olayı $\{TT\}$.
**Diğer şıklar neden yanlış?**
• "set of all possible outcomes": bu **örneklem uzayının** tanımı. (Örneklem uzayı da teknik olarak bir olaydır, ama olayın tanımı bu değil.)
• "random variable that takes values 0 or 1": bu **Bernoulli** değişkeni.
• "expected value": bu bir sayı (ortalama), küme değil.

## GEN cdfTable

## Q
SRC: TB 2.1
EN: The probability of an outcome is:
TR: Bir sonucun olasılığı nedir?
+ the proportion of times the outcome occurs in the long run
- the number of times the outcome occurs in the long run
- $M \times N$, where $M$ is the number of occurrences and $N$ is the population size
- the sample mean divided by the sample standard deviation
EX: **Doğru cevap: the proportion of times the outcome occurs in the long run.**
Olasılık, deney çok kez tekrarlandığında o sonucun gerçekleştiği **zamanların oranıdır**. Örnek: hilesiz zar sonsuz kez atılırsa 6 gelme oranı 1/6'ya yaklaşır.
**Diğer şıklar neden yanlış?**
• "number of times": sayı (frekans) 0–1 arasında kalmaz, sınırsız büyür; olasılık oran olmalı.
• $M \times N$: çarpmak anlamsız; oran için bölmek gerekir.
• mean / std: bu bir olasılık değil, bir tür standartlaştırılmış ölçü.

## Q
SRC: TB 2.2
EN: For two events $A$ and $B$, $\Pr(A \text{ or } B)$ equals:
TR: İki olay $A$ ve $B$ için $\Pr(A \text{ veya } B)$ neye eşittir?
+ $\Pr(A) + \Pr(B)$ if $A$ and $B$ are mutually exclusive
- $\Pr(A) \times \Pr(B)$
- $\Pr(A) + \Pr(B)$ even if $A$ and $B$ can happen together
- $\Pr(A) / \Pr(B)$
EX: **Doğru cevap: $\Pr(A)+\Pr(B)$, if A and B are mutually exclusive.**
Genel toplama kuralı: $\Pr(A \text{ or } B) = \Pr(A) + \Pr(B) - \Pr(A \text{ and } B)$.
"Mutually exclusive" (ayrık) = ikisi aynı anda olamaz, yani $\Pr(A \text{ and } B) = 0$. Bu durumda formül $\Pr(A)+\Pr(B)$'ye iner.
Örnek: zarda "1 gelir" ve "2 gelir" ayrıktır: $1/6 + 1/6 = 1/3$.
**Diğer şıklar neden yanlış?**
• $\Pr(A)\times\Pr(B)$: bu "A **ve** B"nin olasılığı, üstelik sadece bağımsızlık varsa.
• "even if they can happen together": ortak kısım iki kez sayılır. Örnek: "çift gelir" (1/2) ve "6'dan küçük" (5/6) toplamı 1'i geçer!
• bölme: anlamsız.

## Q
SRC: TB 2.3
EN: The cumulative probability distribution of a random variable tells you the probability that:
TR: Bir rassal değişkenin birikimli olasılık dağılımı (CDF) hangi olasılığı verir?
+ the variable is less than or equal to a given value
- two or more events happen at the same time
- all possible outcomes happen
- the variable takes a given value, given that another event has happened
EX: **Doğru cevap: less than or equal to a given value.**
CDF: $F(y) = \Pr(Y \le y)$. $y$'ye kadar (dahil) tüm olasılıklar toplanır. Örnek: $\Pr(Y\le 1) = \Pr(Y=0) + \Pr(Y=1)$.
**Diğer şıklar neden yanlış?**
• "two or more events at the same time": bu ortak (joint) olasılık.
• "all possible outcomes": tüm olasılıkların toplamı her zaman 1; bir dağılım değil.
• "given that another event has happened": bu koşullu olasılık.

--- LESSON u2b | E | Beklenen değer ve varyans

## CARD Beklenen değer
==Beklenen değer (expected value)== $E(Y)$ ya da $\mu_Y$: **olasılık ağırlıklı ortalama**. Deneyi çok kez tekrarlarsan ulaşacağın ortalama değer.
$$E(Y) = \mu_Y = \sum_{j=1}^{k} y_j\, P(Y = y_j)$$
**Tarif:** her değeri kendi olasılığıyla çarp, hepsini topla.
:::ornek İnternet kopma örneği
| $y$ | 0 | 1 | 2 | 3 | 4 |
| $P(Y=y)$ | 0.80 | 0.10 | 0.06 | 0.03 | 0.01 |
| $y\cdot P$ | 0 | 0.10 | 0.12 | 0.09 | 0.04 |
$E(Y) = 0(0.80) + 1(0.10) + 2(0.06) + 3(0.03) + 4(0.01) = 0.35$
Yorum: uzun vadede ayda ortalama 0.35 kopma beklenir. Beklenen değerin değişkenin alabileceği bir değer olması gerekmez (0.35 kopma olmaz ama ortalama olabilir).
:::
**Ne değildir?**
• En olası değer değildir: o ==mod==dur (burada 0).
• Ortadaki değer değildir: o ==medyan==dır.
• Değerlerin düz ortalaması değildir: $(0+1+2+3+4)/5 = 2$ olurdu; olasılıkları hesaba katmaz.
Sürekli değişkende toplam yerine integral: $E(Y) = \int y\, f_Y(y)\,dy$.

## CARD Varyans ve standart sapma
==Varyans (variance)==: $Y$'nin ortalamadan **sapmasının karesinin** beklenen değeri. Dağılımın ne kadar yayıldığını ölçer.
$$\sigma_Y^2 = \text{var}(Y) = E(Y-\mu_Y)^2 = \sum_j (y_j-\mu_Y)^2\, P(Y=y_j)$$
**Neden kare?** Sapmalar ($y - \mu$) artı ve eksi olur; düz toplarsan birbirini götürür ve hep 0 çıkar. Kare alınca hepsi pozitif olur.
**Kısayol formülü** (genelde daha hızlı):
$$\text{var}(Y) = E(Y^2) - \mu_Y^2$$
Türetme: $E(Y-\mu)^2 = E(Y^2 - 2\mu Y + \mu^2) = E(Y^2) - 2\mu\cdot\mu + \mu^2 = E(Y^2) - \mu^2$.
==Standart sapma (standard deviation)== $\sigma_Y = \sqrt{\sigma_Y^2}$: varyansın pozitif karekökü. Birimi $Y$'nin birimiyle aynıdır (varyansın birimi ise birimin karesi: TL²), bu yüzden yorumlaması daha kolaydır.
:::ornek Kopma örneği, iki yolla
**Tanımla** ($\mu = 0.35$):
$\text{var}(Y) = (0-0.35)^2(0.80) + (1-0.35)^2(0.10) + (2-0.35)^2(0.06) + (3-0.35)^2(0.03) + (4-0.35)^2(0.01) = 0.6475$
**Kısayolla:** $E(Y^2) = 0(0.80) + 1(0.10) + 4(0.06) + 9(0.03) + 16(0.01) = 0.77$
$\text{var}(Y) = 0.77 - 0.35^2 = 0.6475$ ✓
Standart sapma: $\sqrt{0.6475} = 0.8047$
:::

## CARD PS2 Soru 2: iki para, P(tura)=0.4
$Y$ = tura sayısı. Her para için $P(H)=0.4$, $P(T)=0.6$. Paralar bağımsız, yani olasılıklar çarpılır.
**a) Dağılım**
• $P(Y=0) = P(TT) = 0.6\times 0.6 = 0.36$
• $P(Y=1) = P(TH) + P(HT) = 0.6\times 0.4 + 0.4\times 0.6 = 2\times 0.6\times 0.4 = 0.48$
• $P(Y=2) = P(HH) = 0.4\times 0.4 = 0.16$
• Kontrol: $0.36 + 0.48 + 0.16 = 1$ ✓
**b) Ortalama**
$E(Y) = 0(0.36) + 1(0.48) + 2(0.16) = 0.80$
**c) Varyans** (sapmalar: $0-0.8 = -0.8$, $1-0.8 = 0.2$, $2-0.8=1.2$)
$\text{var}(Y) = 0.36(0.64) + 0.48(0.04) + 0.16(1.44) = 0.48$
:::ipucu Kısayol: binom dağılımı
$n$ bağımsız denemede başarı sayısı ==binom (binomial)== dağılımlıdır: $E(Y) = np$ ve $\text{var}(Y) = np(1-p)$.
Burada $n=2$, $p=0.4$: $E(Y) = 2(0.4) = 0.8$ ve $\text{var}(Y) = 2(0.4)(0.6) = 0.48$. Aynı sonuç, saniyeler içinde.
:::
:::dikkat En sık hata
$P(Y=1)$'i $0.4\times 0.6 = 0.24$ bulmak. Bir tura iki farklı sırayla gelebilir (HT ve TH), bu yüzden 2 ile çarpılır.
:::

## CARD Sürekli örnek (ders)
$f_Y(y) = 3/y^4$, $y>1$ (1'den küçük değerlerin olasılığı 0).
**1. Gerçek bir yoğunluk mu?** Alanın 1 olması gerekir:
$\int_1^\infty 3y^{-4}dy = \left[-y^{-3}\right]_1^\infty = 0-(-1) = 1$ ✓
**2. Beklenen değer:** $y$ ile çarpıp integral al. $y\cdot 3y^{-4} = 3y^{-3}$:
$E(Y) = \int_1^\infty 3y^{-3}dy = \left[-\tfrac{3}{2}y^{-2}\right]_1^\infty = 0 - (-\tfrac32) = 3/2$
**3. İkinci moment:** $y^2\cdot 3y^{-4} = 3y^{-2}$:
$E(Y^2) = \int_1^\infty 3y^{-2}dy = \left[-3y^{-1}\right]_1^\infty = 3$
**4. Varyans** (kısayol): $\text{var}(Y) = E(Y^2)-\mu^2 = 3 - (3/2)^2 = 3 - 2.25 = 0.75$
:::ipucu Sınavda
Şıklarda 1.5, 3 ve 0.75 birlikte çıkar. Hangisinin ne olduğunu karıştırma: $E(Y)=1.5$, $E(Y^2)=3$, $\text{var}(Y)=0.75$.
:::

## Q
SRC: PS2 Q1f
EN: The expected value of a discrete random variable is:
TR: Kesikli bir rassal değişkenin beklenen değeri nedir?
+ the probability-weighted average of all possible values
- the most likely value
- the middle value when values are ordered
- the sum of all possible values
EX: **Doğru cevap:** tüm olası değerlerin **olasılık ağırlıklı ortalaması**: $E(Y) = \sum y_j P(Y=y_j)$.
Örnek (kopma tablosu): $0(0.80) + 1(0.10) + 2(0.06) + 3(0.03) + 4(0.01) = 0.35$.
**Diğer şıklar neden yanlış?**
• "the most likely value": bu **mod**. Kopma örneğinde mod 0 (olasılığı 0.80), ama $E(Y) = 0.35$.
• "the middle value": bu **medyan**.
• "the sum of all possible values": $0+1+2+3+4 = 10$; olasılıkları hiç hesaba katmıyor.

## Q
EN: Which expression equals $\text{var}(Y)$?
TR: Hangisi $\text{var}(Y)$'ye eşittir?
+ $E(Y^2) - [E(Y)]^2$
- $E(Y^2) + [E(Y)]^2$
- $[E(Y)]^2$
- $E(Y) - [E(Y)]^2$
EX: **Doğru cevap: $E(Y^2) - [E(Y)]^2$.** "Karenin ortalaması eksi ortalamanın karesi."
Türetme adım adım ($\mu = E(Y)$, sabit):
1. Tanım: $\text{var}(Y) = E(Y-\mu)^2$
2. Kareyi aç: $E(Y^2 - 2\mu Y + \mu^2)$
3. Beklenti doğrusal: $E(Y^2) - 2\mu E(Y) + \mu^2$
4. $E(Y) = \mu$ koy: $E(Y^2) - 2\mu^2 + \mu^2 = E(Y^2) - \mu^2$
Sayıyla kontrol (iki para): $E(Y^2) = 0(0.36) + 1(0.48) + 4(0.16) = 1.12$, $\mu = 0.8$: $1.12 - 0.64 = 0.48$ ✓
**Diğer şıklar neden yanlış?**
• Artı işaretli: işaret hatası; varyans gereğinden büyük çıkar.
• $[E(Y)]^2$: sadece ortalamanın karesi; yayılımla ilgisi yok.
• $E(Y) - [E(Y)]^2$: bu sadece Bernoulli için $p - p^2 = p(1-p)$ olur (çünkü orada $E(Y^2) = E(Y)$). Genel formül değil.

## Q
SRC: PS2 Q2
EN: Two coins are tossed, each with $P(\text{heads}) = 0.4$. Let $Y$ be the number of heads. What is $P(Y=1)$?
TR: İki para atılıyor, her birinde tura olasılığı 0.4. $Y$ tura sayısı. $P(Y=1)$ nedir?
+ $0.48$
- $0.24$
- $0.40$
- $0.36$
EX: **Doğru cevap: 0.48.**
$Y=1$ "tam bir tura" demek. Bu **iki farklı sırayla** olabilir:
1. HT: birinci tura, ikinci yazı → $0.4\times 0.6 = 0.24$
2. TH: birinci yazı, ikinci tura → $0.6\times 0.4 = 0.24$
İki yolu topla: $2\times 0.4\times 0.6 = 0.48$
**Diğer şıklar neden yanlış?**
• 0.24: sadece bir sırayı saymışsın. Klasik hata: 2 ile çarpmayı unutmak.
• 0.40: tek paranın tura olasılığı; iki paranın birleşimini hesaba katmıyor.
• 0.36: bu $P(Y=0) = 0.6^2$ (iki yazı).
Kontrol: $P(Y=0) + P(Y=1) + P(Y=2) = 0.36 + 0.48 + 0.16 = 1$ ✓

## Q
SRC: PS2 Q2b
EN: In the same two-coin problem, the variance of $Y$ is:
TR: Aynı problemde $Y$'nin varyansı kaçtır?
+ $0.48$
- $0.80$
- $0.24$
- $0.64$
EX: **Doğru cevap: 0.48.**
**Yol 1: tanımla.**
1. Ortalama: $E(Y) = 0(0.36) + 1(0.48) + 2(0.16) = 0.8$
2. Sapmaların kareleri: $(0-0.8)^2 = 0.64$, $(1-0.8)^2 = 0.04$, $(2-0.8)^2 = 1.44$
3. Olasılıklarla ağırlıklandır: $0.36(0.64) + 0.48(0.04) + 0.16(1.44) = 0.2304 + 0.0192 + 0.2304 = 0.48$
**Yol 2: binom kısayolu.** $n=2$ deneme, $p=0.4$: $\text{var}(Y) = np(1-p) = 2(0.4)(0.6) = 0.48$
**Diğer şıklar neden yanlış?**
• 0.80: bu ortalama $E(Y)$, varyans değil.
• 0.24: tek paranın varyansı $p(1-p) = 0.4\times 0.6$. İki para var, $n=2$ ile çarpılmalı.
• 0.64: $\mu^2 = 0.8^2$; kısayol formülünde $E(Y^2)$'yi unutmuşsun.

## Q
EN: Consider $Y$ with density $f_Y(y) = 3/y^4$ for $y>1$. $E(Y)$ equals:
TR: $f_Y(y)=3/y^4$ ($y>1$) için $E(Y)$ kaçtır?
+ $1.5$
- $3$
- $0.75$
- $1$
EX: **Doğru cevap: 1.5.**
Sürekli değişkende $E(Y) = \int y\,f(y)\,dy$.
1. Çarp: $y\cdot \frac{3}{y^4} = 3y^{-3}$
2. İntegral: $\int 3y^{-3}dy = 3\cdot\frac{y^{-2}}{-2} = -\frac32 y^{-2}$
3. Sınırlar ($1$'den $\infty$'a): $y\to\infty$ iken $y^{-2}\to 0$; $y=1$'de $-\frac32$. Sonuç: $0 - (-\frac32) = \frac32 = 1.5$
**Diğer şıklar ne?**
• 3: bu $E(Y^2) = \int_1^\infty 3y^{-2}dy$. Fazladan bir $y$ ile çarpmışsın.
• 0.75: bu varyans: $3 - 1.5^2$.
• 1: bu yoğunluğun toplam alanı (her yoğunlukta 1).

## Q
SRC: PS2 Q1g
EN: The standard deviation of $Y$ is:
TR: $Y$'nin standart sapması nedir?
+ the positive square root of the variance
- the square of the variance
- the average absolute value of $Y$
- $E(Y)$ divided by $n$
EX: **Doğru cevap:** varyansın **pozitif karekökü**: $\sigma_Y = \sqrt{\sigma^2_Y}$.
Neden karekök? Varyansın birimi $Y$'nin biriminin karesi (TL²). Karekök alınca birim tekrar TL olur ve "ortalamadan tipik sapma" olarak yorumlanabilir.
Örnek: iki para probleminde $\text{var} = 0.48$, $\sigma = \sqrt{0.48} = 0.6928$.
**Diğer şıklar neden yanlış?**
• "square of the variance": kare değil, karekök. Kare alırsan birim TL⁴ olur.
• "average absolute value of $Y$": bu $E|Y|$, yayılımı değil büyüklüğü ölçer.
• "$E(Y)$ divided by $n$": ilgisiz bir ifade.

## GEN twoCoins
## GEN meanVar

## Q
SRC: TB 2.4
EN: The expected value of a discrete random variable is:
TR: Kesikli bir rassal değişkenin beklenen değeri nedir?
+ the probability-weighted average of its possible outcomes
- the outcome that is most likely to occur
- the value at which the c.d.f. reaches 50%
- always equal to the population median
EX: **Doğru cevap: probability-weighted average.**
$E(Y) = \sum_i y_i \Pr(Y=y_i)$. Her olası değer kendi olasılığıyla çarpılır ve toplanır, yani olasılık ağırlıklı ortalama.
**Diğer şıklar neden yanlış?**
• "most likely outcome": bu **mod** (tepe değer).
• "c.d.f. reaches 50%": bu **medyan**.
• "always equal to the median": sadece simetrik dağılımlarda eşittir. Örneğin gelir dağılımında ortalama medyandan büyüktür.

## Q
SRC: TB 2.5
EN: Let $Y$ be a random variable with mean $\mu_Y$. Its variance, $\text{var}(Y)$, is:
TR: $Y$, ortalaması $\mu_Y$ olan bir rassal değişken olsun. Varyansı $\text{var}(Y)$ nedir?
+ $E[(Y - \mu_Y)^2]$
- $E(Y - \mu_Y)$
- $\sqrt{E[(Y - \mu_Y)^2]}$
- $E[(Y - \mu_Y)^3]$
EX: **Doğru cevap: $E[(Y-\mu_Y)^2]$.**
Varyans = ortalamadan sapmaların **karesinin** beklenen değeri. Kare alınır çünkü pozitif ve negatif sapmalar birbirini götürmesin.
**Diğer şıklar neden yanlış?**
• $E(Y-\mu_Y)$: her zaman 0'dır, çünkü $E(Y) - \mu_Y = 0$. Kare almamanın sebebi tam olarak bu.
• $\sqrt{\cdot}$: bu **standart sapma** $\sigma_Y$.
• üçüncü kuvvet: çarpıklığın payı (skewness).

## Q
SRC: TB 2.33
EN: You assign these subjective probabilities to your final econometrics grade (on the scale A = 4, B = 3, C = 2, D = 1, F = 0):

| Grade | A | B | C | D | F |
|---|---|---|---|---|---|
| Probability | 0.20 | 0.50 | 0.20 | 0.08 | 0.02 |

The expected value of your grade is:
TR: Ekonometri final notun için şu öznel olasılıkları veriyorsun (A = 4, B = 3, C = 2, D = 1, F = 0 ölçeğinde). Notunun beklenen değeri nedir?
+ 2.78
- 3.00
- 3.25
- 3.50
EX: **Doğru cevap: 2.78.**
$E(Y) = \sum y_i \Pr(Y=y_i)$:
$$E(Y) = 4(0.20) + 3(0.50) + 2(0.20) + 1(0.08) + 0(0.02)$$
$$= 0.80 + 1.50 + 0.40 + 0.08 + 0 = 2.78$$
**Diğer şıklar neden yanlış?**
• 3.00: en olası not (B = 3), yani mod. Beklenen değer mod değildir.
• 3.25 ve 3.50: hesap hatası; örneğin A'ya ya da B'ye fazla ağırlık verilmiş. D ve F'nin düşük değerleri ortalamayı aşağı çeker.

## Q
SRC: TB 2.36
EN: Let $Y$ be the sum of the numbers on two fair dice, so $\Pr(Y=2) = \Pr(Y=12) = 1/36$, and so on. Which statement is FALSE?
TR: $Y$ iki hilesiz zarın toplamı olsun; $\Pr(Y=2) = \Pr(Y=12) = 1/36$ vb. Hangi ifade YANLIŞTIR?
+ $\Pr(Y \le 7) = 0.5$
- $E(Y) = 7$
- $\text{var}(Y) \approx 5.83$
- the skewness of $Y$ is 0
EX: **Doğru cevap (yanlış ifade): $\Pr(Y\le 7) = 0.5$.**
$Y$'nin dağılımı 7 etrafında simetrik ve 7'nin kendisinin olasılığı 6/36.
$$\Pr(Y\le 7) = \frac{1+2+3+4+5+6}{36} = \frac{21}{36} \approx 0.583$$
Simetri sadece $\Pr(Y<7) = \Pr(Y>7) = 15/36$ demektir; 7'nin kendi olasılığı da eklenince 0.5'i geçer.
**Diğer ifadeler neden doğru?**
• $E(Y) = 3.5 + 3.5 = 7$.
• Tek zarın varyansı $35/12$. Zarlar bağımsız olduğu için toplamın varyansı $35/12 + 35/12 = 35/6 \approx 5.83$.
• Dağılım simetrik, bu yüzden çarpıklık 0.

--- LESSON u2c | p | Bernoulli, çarpıklık, basıklık

## CARD Bernoulli değişkeninin momentleri
$X$ ==Bernoulli==: sadece 0 ya da 1 alır. $P(X=1)=p$, $P(X=0)=1-p$. Örnek: işsiz mi (1), değil mi (0).
**Ortalama:**
$$E(X) = 1\cdot p + 0\cdot(1-p) = p$$
0/1 değişkenin ortalaması, 1 olma olasılığıdır. 100 kişiden 53'ü 1 ise ortalama 0.53.
**Varyans:**
$$\text{var}(X) = p(1-p)$$
Türetme: $E(X^2) = 1^2\cdot p + 0^2(1-p) = p$, yani $\text{var} = E(X^2) - \mu^2 = p - p^2 = p(1-p)$.
Varyans en çok $p = 0.5$'te olur ($0.25$); $p$ 0'a ya da 1'e yaklaştıkça azalır (neredeyse herkes aynıysa yayılım azdır).
**Yüksek momentler (PS2 Soru 4a):**
$$E(X^k) = 1^k\cdot p + 0^k\cdot(1-p) = p \qquad (k\ge 1)$$
Çünkü $1$'in her kuvveti $1$, $0$'ın her kuvveti $0$. Yani $E(X^2) = E(X^4) = E(X^{10}) = p$.
:::dikkat Tuzak
$E(X^4) = p^4$ değildir. Üs **değerlere** (0 ve 1) uygulanır, olasılığa değil.
:::

## CARD Çarpıklık (skewness)
Çarpıklık dağılımın **simetrik olup olmadığını** ölçer:
$$\text{Skewness} = \frac{E(Y-\mu_Y)^3}{\sigma_Y^3}$$
**Neden küp?** Küp işareti korur: ortalamanın sağındaki büyük sapmalar pozitif, solundakiler negatif katkı yapar. Hangi taraf daha uzun kuyruklu ise o işaret baskın çıkar.
• $= 0$: ortalama etrafında **simetrik** (normal dağılım gibi).
• $> 0$: ==uzun sağ kuyruk==. Çoğu değer küçük, birkaç tane çok büyük değer var. Örnek: gelir ve kazanç dağılımları (birkaç kişi çok kazanır).
• $< 0$: uzun sol kuyruk. Örnek: kolay bir sınavın puanları (çoğu yüksek, birkaç çok düşük).
• ==Birimsizdir (unit free)==: pay $\sigma^3$ ile aynı birimde (birim³). $Y$'nin birimini değiştirmek (TL→dolar) çarpıklığı değiştirmez.
:::ipucu Hafıza
Kuyruk hangi taraftaysa işaret o: sağ = artı, sol = eksi.
:::

## CARD Basıklık (kurtosis)
Basıklık dağılımın **kuyruklarında** ne kadar olasılık kütlesi olduğunu ölçer:
$$\text{Kurtosis} = \frac{E(Y-\mu_Y)^4}{\sigma_Y^4}$$
4. kuvvet uç değerleri çok büyütür, bu yüzden basıklık "uç değerler ne kadar olası?" sorusunun cevabıdır.
• Normal dağılımın basıklığı $= 3$ (referans noktası).
• $> 3$: ==kalın kuyruk (heavy tails)==, ==leptokurtic==. Uç değerler normalden daha olası. Örnek: hisse senedi getirileri (krizler beklenenden sık olur).
• $< 3$: ince kuyruk (platykurtic).
• Basıklık da birimsizdir ve her zaman pozitiftir (4. kuvvet negatif olamaz).
:::dikkat Sınav tuzağı
Normalin basıklığı 0 değil, **3**'tür. "0" şıkkı tuzak. (Bazı yazılımlar "basıklık − 3" raporlar ve buna "excess kurtosis" der; bu derste değil.)
:::

## CARD PS2 Soru 4b: p = 0.53
$X$ Bernoulli, $p = 0.53$. Dört momenti adım adım bulalım.
• **Ortalama:** $\mu = p = 0.53$
• **Varyans:** $\sigma^2 = p(1-p) = 0.53\times 0.47 = 0.2491$
• **3. merkezi moment:** $X=1$ iken sapma $1 - 0.53 = 0.47$, $X=0$ iken sapma $-0.53$.
$E(X-\mu)^3 = p(1-p)^3 + (1-p)(-p)^3 = 0.53(0.47)^3 + 0.47(-0.53)^3 = -0.0149$
• **4. merkezi moment:** $E(X-\mu)^4 = p(1-p)^4 + (1-p)p^4 = 0.0629$
• **Çarpıklık:** $-0.0149 / 0.2491^{1.5} = -0.0149/0.1243 \approx -0.120$
• **Basıklık:** $0.0629 / 0.2491^2 = 0.0629/0.0621 \approx 1.01$
**Yorum:** $p > 0.5$, yani 1'ler çoğunlukta; az sayıdaki 0 sol tarafta "uzun kuyruk" oluşturur → çarpıklık negatif. Basıklık 3'ten çok küçük: iki değerli bir dağılımın uç değeri yoktur.
:::dikkat Çözüm setinde yazım hatası var
Resmi çözümde $\sigma^2 = 0.2591$ yazıyor ama $0.53\times0.47 = 0.2491$. Bu yüzden orada çarpıklık $-0.113$, basıklık $0.937$ çıkmış. Doğru değerler $-0.120$ ve $1.01$. Sınavda şıklar bu ikisinden birine yakınsa mantıkla seç: işaret negatif (çünkü $p>0.5$) ve basıklık 3'ten küçük.
:::
**Kısayol formülleri:** çarpıklık $= \frac{1-2p}{\sqrt{p(1-p)}}$, basıklık $= \frac{1}{p(1-p)} - 3$. Kontrol: $\frac{1}{0.2491} - 3 = 4.0145 - 3 = 1.0145$ ✓

## Q
SRC: PS2 Q4a
EN: Let $X$ be Bernoulli with $P(X=1)=p$. Then $E(X^4)$ equals:
TR: $X$ Bernoulli ve $P(X=1)=p$. $E(X^4)$ nedir?
+ $p$
- $p^4$
- $p(1-p)$
- $4p$
EX: **Doğru cevap: $p$.**
Beklenen değer tanımını uygula: her değerin 4. kuvvetini olasılığıyla çarp, topla.
1. $X=1$ iken $X^4 = 1^4 = 1$, olasılığı $p$
2. $X=0$ iken $X^4 = 0^4 = 0$, olasılığı $1-p$
3. $E(X^4) = 1\cdot p + 0\cdot (1-p) = p$
Genel kural: Bernoulli'de her $k \ge 1$ için $E(X^k) = p$.
**Diğer şıklar neden yanlış?**
• $p^4$: üssü olasılığa uygulamışsın. Üs değere (0 ya da 1) uygulanır.
• $p(1-p)$: bu varyans.
• $4p$: üs katsayıya dönüşmez.

## Q
SRC: PS2 Q1m
EN: A distribution with a long right tail has:
TR: Uzun sağ kuyruklu bir dağılımın çarpıklığı nasıldır?
+ positive skewness
- negative skewness
- zero skewness
- kurtosis equal to zero
EX: **Doğru cevap: pozitif çarpıklık.**
Çarpıklık $E(Y-\mu)^3/\sigma^3$. Sağ kuyruktaki büyük değerler ortalamadan çok uzakta ve pozitif sapma verir. Küp alınca bu sapmalar çok büyür ve toplamı pozitif yapar.
Örnek: kazanç dağılımı. Çoğu kişi orta gelirli, birkaç kişi çok yüksek kazanır → sağda uzun kuyruk.
**Diğer şıklar neden yanlış?**
• Negatif: uzun **sol** kuyruk olsaydı.
• Sıfır: simetrik dağılım (normal gibi) olsaydı.
• "Kurtosis equal to zero": basıklık kuyruğun kalınlığıyla ilgili ve hiçbir zaman sıfır olmaz (4. kuvvetler pozitif).

## Q
SRC: PS2 Q1n
EN: The kurtosis of a normal distribution is:
TR: Normal dağılımın basıklığı kaçtır?
+ $3$
- $0$
- $1$
- $-3$
EX: **Doğru cevap: 3.**
Normal dağılım basıklık için referans noktasıdır: $E(Y-\mu)^4/\sigma^4 = 3$. Bir dağılımın basıklığı 3'ten büyükse kuyrukları normalden kalındır (leptokurtic).
**Diğer şıklar neden yanlış?**
• 0: normalin **çarpıklığı** 0'dır (simetrik), basıklığı değil. En sık karıştırılan ikili.
• 1: bir Bernoulli($p = 0.5$) değişkeninin basıklığı 1'dir; normal değil.
• −3: basıklık 4. kuvvetlerin oranı, negatif olamaz.

## Q
SRC: PS2 Q1n
EN: A distribution is called leptokurtic if its kurtosis is:
TR: Basıklığı nasıl olan dağılıma leptokurtic denir?
+ greater than 3
- less than 3
- equal to 0
- negative
EX: **Doğru cevap: 3'ten büyük.**
Leptokurtic = "kalın kuyruklu". Basıklık 3'ten (normalin değeri) büyükse uç değerler normal dağılıma göre daha olasıdır. Örnek: finansal getiriler; büyük düşüşler ve yükselişler normalin öngördüğünden sık olur.
**Diğer şıklar neden yanlış?**
• 3'ten küçük: bu ince kuyruk (platykurtic).
• 0 ya da negatif: basıklık hiçbir zaman 0 ya da negatif olamaz; pay ve payda 4. kuvvetler.

## Q
EN: If $Y$ is measured in Turkish lira and we convert it to dollars, its skewness:
TR: $Y$ TL cinsinden ölçülürken dolara çevrilirse çarpıklığı ne olur?
+ does not change
- is multiplied by the exchange rate
- becomes zero
- is divided by the exchange rate
EX: **Doğru cevap: değişmez.**
Dolara çevirmek $Y$'yi bir sabitle çarpmaktır: $Y_{	ext{USD}} = c\,Y_{	ext{TL}}$ ($c$ = kur katsayısı).
• Pay: $E(cY - c\mu)^3 = c^3 E(Y-\mu)^3$
• Payda: $(c\sigma)^3 = c^3\sigma^3$
• Oran: $\frac{c^3 E(Y-\mu)^3}{c^3\sigma^3}$ → $c^3$'ler sadeleşir.
Bu yüzden çarpıklık (ve aynı mantıkla basıklık) **birimsizdir**.
**Diğer şıklar neden yanlış?** Kur katsayısı pay ve paydada aynı kuvvetle geçtiği için sonuca karışmaz; sıfıra da dönüşmez. Ortalama ve standart sapma ise kurla çarpılır.

## Q
SRC: PS2 Q4b
EN: For a Bernoulli variable with $p = 0.53$, the variance is:
TR: $p=0.53$ olan Bernoulli değişkenin varyansı kaçtır?
+ $0.2491$
- $0.53$
- $0.2809$
- $0.47$
EX: **Doğru cevap: 0.2491.**
Bernoulli varyansı: $\text{var}(X) = p(1-p) = 0.53\times0.47 = 0.2491$.
Neden bu formül? $E(X^2) = p$ ve $\mu = p$, yani $\text{var} = p - p^2 = p(1-p)$.
**Diğer şıklar ne?**
• 0.53: bu ortalama ($p$).
• 0.2809: bu $0.53^2 = p^2$; tuzak. Varyans $p - p^2$, sadece $p^2$ değil.
• 0.47: bu $1-p$, yani $P(X=0)$.
Not: resmi çözümde 0.2591 yazıyor ama bu bir yazım hatası; doğrusu 0.2491.

## GEN bernoulli

## Q
SRC: TB 2.6
EN: The skewness of the distribution of a random variable $Y$ is defined as:
TR: Bir $Y$ rassal değişkeninin dağılımının çarpıklığı (skewness) nasıl tanımlanır?
+ $\dfrac{E[(Y-\mu_Y)^3]}{\sigma_Y^3}$
- $\dfrac{E[(Y-\mu_Y)^4]}{\sigma_Y^4}$
- $E[(Y-\mu_Y)^2]$
- $\dfrac{E[(Y-\mu_Y)^3]}{\sigma_Y^2}$
EX: **Doğru cevap: $E[(Y-\mu_Y)^3]/\sigma_Y^3$.**
Üçüncü kuvvet işareti korur: sağdaki uzun kuyruk pozitif, soldaki negatif katkı yapar. $\sigma_Y^3$'e bölmek ölçüyü **birimsiz** yapar; payda $Y$'nin biriminin küpü var, paydada da öyle.
**Diğer şıklar neden yanlış?**
• dördüncü kuvvet / $\sigma^4$: bu **basıklık** (kurtosis).
• $E[(Y-\mu)^2]$: bu **varyans**.
• $\sigma_Y^2$ ile bölmek: kuvvetler tutmuyor (3 ile 2); sonuç birimsiz olmaz.

## Q
SRC: TB 2.7
EN: Which of these distributions most likely has positive skewness (a long right tail)?
TR: Bu dağılımlardan hangisinin pozitif çarpıklığa (sağa uzun kuyruk) sahip olması en olasıdır?
+ household income in the United States
- grades at your university
- SAT scores in English
- heights of 18-year-old women in the United States
EX: **Doğru cevap: U.S. household income.**
Gelir dağılımında çoğu hane orta gelirli, ama birkaç milyarder sağa çok uzun bir kuyruk oluşturur. Sonuç: ortalama > medyan ve **pozitif çarpıklık**.
**Diğer şıklar neden yanlış?**
• grades: notlar genelde yukarıda toplanır (çoğu B, A); kuyruk sola uzar, yani negatif çarpıklık.
• SAT ve boy: bunlar yaklaşık normal (simetrik) dağılır, çarpıklık 0'a yakın.

## Q
SRC: TB 2.8
EN: The kurtosis of the distribution of $Y$ is:
TR: $Y$'nin dağılımının basıklığı (kurtosis) nedir?
+ $\dfrac{E[(Y-\mu_Y)^4]}{\sigma_Y^4}$
- $\dfrac{E[(Y-\mu_Y)^3]}{\sigma_Y^3}$
- $E[(Y-\mu_Y)^4]$
- $\dfrac{E[(Y-\mu_Y)^4]}{\sigma_Y^2}$
EX: **Doğru cevap: $E[(Y-\mu_Y)^4]/\sigma_Y^4$.**
Basıklık kuyrukların ne kadar "kalın" olduğunu ölçer. Dördüncü kuvvet büyük sapmaları çok büyütür; $\sigma_Y^4$'e bölmek ölçüyü birimsiz yapar. Normal dağılımda basıklık 3'tür.
**Diğer şıklar neden yanlış?**
• üçüncü kuvvet: bu **çarpıklık**.
• bölmeden: birimsiz değil; $Y$'yi dolar yerine sent ile ölçersen değer değişir.
• $\sigma^2$ ile bölmek: kuvvetler tutmuyor.

## Q
SRC: TB 2.9
EN: For a normal distribution, the skewness and the kurtosis are:
TR: Normal dağılım için çarpıklık ve basıklık değerleri nedir?
+ 0 and 3
- 0 and 0
- 1.96 and 4
- 1 and 2
EX: **Doğru cevap: 0 ve 3.**
• Normal dağılım tam simetrik, bu yüzden çarpıklık = 0.
• Normal dağılımın basıklığı = 3. Basıklığı 3'ten büyük olan dağılımlara "kalın kuyruklu" (leptokurtic) denir.
**Diğer şıklar neden yanlış?**
• 0 ve 0: basıklık hiçbir zaman 0 olamaz (dördüncü kuvvetlerin ortalaması pozitif). "Fazla basıklık" (excess kurtosis = basıklık − 3) normal için 0'dır, karıştırma.
• 1.96: bu %95 kritik değer, basıklıkla ilgisi yok.

## Q
SRC: TB 2.34
EN: A Bernoulli random variable equals 1 with probability $p$ and 0 otherwise. Its mean and variance are:
TR: Bir Bernoulli rassal değişkeni $p$ olasılıkla 1, aksi halde 0 değerini alır. Ortalaması ve varyansı nedir?
+ $p$ and $p(1-p)$
- $np$ and $np(1-p)$
- $p$ and $\sqrt{p(1-p)}$
- they cannot be calculated
EX: **Doğru cevap: $p$ ve $p(1-p)$.**
• Ortalama: $E(G) = 1\cdot p + 0\cdot (1-p) = p$.
• Varyans: $G$ sadece 0 ya da 1 olduğu için $G^2 = G$, yani $E(G^2) = p$. Böylece $\text{var}(G) = E(G^2) - [E(G)]^2 = p - p^2 = p(1-p)$.
**Diğer şıklar neden yanlış?**
• $np$ ve $np(1-p)$: bunlar $n$ bağımsız Bernoulli'nin toplamının, yani **binom** dağılımın ortalaması ve varyansı.
• $\sqrt{p(1-p)}$: bu standart sapma, varyans değil.

--- LESSON u2d | ⊞ | Ortak, marjinal ve koşullu dağılım

## CARD Ortak dağılım
İki rassal değişkeni birlikte incelemek için ==ortak olasılık dağılımı (joint probability distribution)== kullanılır: $P(X=x, Y=y)$, yani ikisinin **aynı anda** belli değerleri alma olasılığı. Virgül "ve" demektir.
Tablo halinde gösterilir: satırlar bir değişken, sütunlar diğer değişken, her hücre bir ortak olasılık. **Bütün hücrelerin toplamı 1**'dir (çünkü hücreler tüm olası sonuçları kapsar).
:::ornek Ders örneği: yağmur ve işe gidiş süresi
$Y=1$ kısa yol (20 dakikadan az), $Y=0$ uzun yol. $X=0$ yağmurlu, $X=1$ yağmursuz.
| | Yağmur $X=0$ | Yağmur yok $X=1$ | Toplam |
| Uzun $Y=0$ | 0.15 | 0.07 | 0.22 |
| Kısa $Y=1$ | 0.15 | 0.63 | 0.78 |
| Toplam | 0.30 | 0.70 | 1.00 |
Hücre okuma: $P(X=1, Y=1) = 0.63$ → günlerin %63'ü hem yağmursuz hem kısa yollu.
Kontrol: $0.15 + 0.07 + 0.15 + 0.63 = 1.00$ ✓
:::

## CARD Marjinal dağılım
==Marjinal dağılım (marginal distribution)==: tek bir değişkenin, diğerini hiç önemsemeden kendi dağılımı. Tabloda **satır ve sütun toplamlarıdır** (tablonun "kenarında", yani marjında yazdığı için bu ad verilir):
$$P(Y=y) = \sum_{i} P(Y=y, X=x_i)$$
**Tarif:** istediğin değerin satırındaki (ya da sütunundaki) bütün hücreleri topla.
:::ornek Yağmur tablosundan
• $P(Y=0) = 0.15 + 0.07 = 0.22$ (uzun yol olasılığı, yağmur ne olursa olsun)
• $P(Y=1) = 0.15 + 0.63 = 0.78$
• $P(X=0) = 0.15+0.15 = 0.30$ (yağmur olasılığı)
• $P(X=1) = 0.07 + 0.63 = 0.70$
:::
"Marjinal" kelimesi sadece ortak dağılımdan ayırmak için kullanılır; normal olasılık dağılımıyla aynı şeydir.
:::dikkat Marjinali çarpımla bulamazsın
$P(Y=1) \ne P(Y=1)\cdot P(X=1)$. Marjinal, **toplama** ile bulunur. Çarpım sadece bağımsızlık kontrolünde kullanılır.
:::

## CARD Koşullu dağılım
==Koşullu olasılık (conditional probability)==: $X=x$ olduğunu **bildiğimizde** $Y=y$ olma olasılığı. "|" işareti "verildiğinde, bildiğimizde" diye okunur.
$$P(Y=y \mid X=x) = \frac{P(Y=y,\ X=x)}{P(X=x)}$$
**Kural: ortak hücreyi, koşul olan değişkenin marjinaline böl.** "|" işaretinin sağındaki değişken koşuldur; payda onun marjinalidir.
**Sezgi:** Koşul, evreni daraltır. "Yağmur yağıyor" bilgisi verilince sadece yağmurlu günlere ($X=0$ sütunu, toplam 0.30) bakarsın. Bu sütunun içinde kısa yol hangi payda?
:::ornek Örnekler
**Yağmur yağarken kısa yol:** koşul $X=0$, payda $P(X=0)=0.30$
$P(Y=1\mid X=0) = 0.15/0.30 = 0.50$
**Kısa yol olduysa yağmur yokmuş:** koşul $Y=1$, payda $P(Y=1)=0.78$
$P(X=1\mid Y=1) = 0.63/0.78 = 0.8077$
**Yağmursuz günde kısa yol:** $P(Y=1\mid X=1) = 0.63/0.70 = 0.90$
Not: $P(Y=1\mid X=1) = 0.90$ ama $P(X=1\mid Y=1) = 0.81$. Koşulun yönü önemli!
:::
:::dikkat Ders notunda küçük hata
Slaytta ikinci örnek $0.63/0.70 = 0.90$ hesaplanmış. Doğrusu $P(Y=1)=0.78$ ile bölmek. Sınavda formüle güven: payda her zaman **koşulun** marjinali.
:::

## Q
SRC: PS2 Q1h
EN: The joint probability distribution of two discrete random variables $X$ and $Y$ is:
TR: İki kesikli rassal değişkenin ortak dağılımı nedir?
+ the probability that $X$ and $Y$ simultaneously take on certain values $x$ and $y$
- the distribution of $Y$ alone
- the distribution of $Y$ given $X = x$
- the sum of the two marginal distributions
EX: **Doğru cevap:** $X$ ve $Y$'nin **aynı anda** belli $x$ ve $y$ değerlerini alma olasılığı: $P(X=x, Y=y)$.
Tablodaki her hücre bir ortak olasılıktır. Örnek: $P(\text{yağmursuz}, \text{kısa yol}) = 0.63$. Tüm hücrelerin toplamı 1.
**Diğer şıklar ne?**
• "distribution of $Y$ alone": bu **marjinal** dağılım (satır/sütun toplamları).
• "distribution of $Y$ given $X=x$": bu **koşullu** dağılım.
• "sum of the two marginals": anlamsız; toplamı 2 olur, olasılık dağılımı olamaz.

## Q
SRC: PS2 Q1i
EN: The marginal probability distribution of $Y$ is:
TR: $Y$'nin marjinal dağılımı nedir?
+ the probability distribution of $Y$ alone, obtained by summing joint probabilities over values of $X$
- the probability of $Y$ given a specific value of $X$
- the product of $P(X)$ and $P(Y)$
- the joint distribution divided by $P(X)$
EX: **Doğru cevap:** $Y$'nin tek başına dağılımı; ortak olasılıkları $X$'in değerleri üzerinden **toplayarak** bulunur.
$P(Y=y) = \sum_i P(Y=y, X=x_i)$. Örnek: $P(Y=0) = 0.15 + 0.07 = 0.22$ (yağmurlu ve yağmursuz günlerdeki uzun yollar toplanır).
**Diğer şıklar ne?**
• "$Y$ given a specific value of $X$": bu **koşullu** olasılık.
• "product of $P(X)$ and $P(Y)$": bu bağımsızlık altında ortak olasılık olurdu; marjinal değil.
• "joint divided by $P(X)$": bu koşullu olasılığın formülü.

## Q
SRC: PS2 Q3d
EN: Using the Turkish labor table ($P(X=1,Y=0)=0.009$, $P(Y=0)=0.035$, where $Y=0$ is unemployed and $X=1$ is college graduate), what is the probability that an unemployed worker is a college graduate?
TR: İşsiz ($Y=0$) bir kişinin üniversite mezunu ($X=1$) olma olasılığı nedir?
+ $0.2571$
- $0.0226$
- $0.0090$
- $0.0350$
EX: **Doğru cevap: 0.2571.**
1. **Koşulu bul:** "işsiz bir kişinin..." → işsiz olduğunu biliyoruz. Koşul $Y=0$.
2. **İstenen:** mezun olma, $X=1$. Yani $P(X=1\mid Y=0)$.
3. **Formül:** ortak hücre ÷ koşulun marjinali:
$P(X=1\mid Y=0) = P(X=1,Y=0)/P(Y=0) = 0.009/0.035 = 0.2571$
Yorum: işsizlerin yaklaşık %26'sı üniversite mezunu.
**Diğer şıklar ne?**
• 0.0226: bu ters koşul, $P(Y=0\mid X=1) = 0.009/0.398$ (mezunların işsizlik oranı). Koşulun yönünü karıştırmak en sık hata.
• 0.0090: ortak olasılık; bölmeyi unutmuşsun.
• 0.0350: işsizlerin toplam payı (marjinal).

## Q
EN: The probabilities in a joint distribution table, summed over all cells, equal:
TR: Ortak dağılım tablosundaki tüm hücrelerin toplamı kaçtır?
+ $1$
- the number of cells
- $0$
- $E(XY)$
EX: **Doğru cevap: 1.**
Tablonun hücreleri birbirini dışlayan (aynı anda iki hücre gerçekleşemez) ve tüm olası sonuçları kapsayan durumlardır. Yani hücreler birlikte örneklem uzayını oluşturur ve kesin olan bir şeyin olasılığı 1'dir.
Örnek: yağmur tablosunda $0.15 + 0.07 + 0.15 + 0.63 = 1$.
**Diğer şıklar neden yanlış?**
• Hücre sayısı: her hücre bir olasılık (1'den küçük), toplamları hücre sayısı olamaz.
• 0: olasılıklar pozitif, toplam sıfır olamaz.
• $E(XY)$: bu, hücrelerin $x\cdot y$ ile çarpılıp toplanmasıyla bulunur; düz toplam değil.

## Q
SRC: PS2 Q1j
EN: $P(Y=y\mid X=x)$ is computed as:
TR: $P(Y=y\mid X=x)$ nasıl hesaplanır?
+ $P(Y=y, X=x)/P(X=x)$
- $P(Y=y, X=x)/P(Y=y)$
- $P(Y=y)\cdot P(X=x)$
- $P(Y=y) + P(X=x) - P(Y=y,X=x)$
EX: **Doğru cevap: $P(Y=y, X=x)/P(X=x)$.**
Kural: "|" işaretinin **sağındaki** değişken koşuldur ($X=x$). Ortak olasılık, koşulun marjinaline bölünür.
Sezgi: $X=x$ olduğunu bilince sadece $X=x$ olan durumlara bakarsın (toplam olasılıkları $P(X=x)$); bunların içinde $Y=y$ olanların payını hesaplarsın.
**Diğer şıklar ne?**
• $/P(Y=y)$: bu ters koşul, $P(X=x\mid Y=y)$.
• $P(Y=y)\cdot P(X=x)$: bağımsızlık altında ortak olasılık.
• $P(Y) + P(X) - P(Y,X)$: bu "ya da" olasılığı, $P(Y=y \text{ ya da } X=x)$.

## GEN joint

## Q
SRC: TB 2.10
EN: The conditional distribution of $Y$ given $X = x$, $\Pr(Y = y \mid X = x)$, is:
TR: $X = x$ verildiğinde $Y$'nin koşullu dağılımı $\Pr(Y = y \mid X = x)$ nedir?
+ $\dfrac{\Pr(X = x,\ Y = y)}{\Pr(X = x)}$
- $\dfrac{\Pr(X = x,\ Y = y)}{\Pr(Y = y)}$
- $\Pr(X = x)\,\Pr(Y = y)$
- $\dfrac{\Pr(Y = y)}{\Pr(X = x)}$
EX: **Doğru cevap: ortak olasılık / $\Pr(X=x)$.**
Koşullu olasılık = ortak olasılık ÷ **koşulun** olasılığı. Koşul "$X = x$" olduğu için payda $\Pr(X=x)$. Tabloda düşünürsen: $X = x$ satırına daralırsın ve o satırın toplamına bölersin.
**Diğer şıklar neden yanlış?**
• $\Pr(Y=y)$ ile bölmek: bu $\Pr(X=x \mid Y=y)$, yani ters koşul.
• çarpım: bu ortak olasılık, ama sadece $X$ ve $Y$ bağımsızsa.
• $\Pr(Y=y)/\Pr(X=x)$: ortak olasılık yok; anlamsız.

## Q
SRC: TB 2.38
EN: Bayes' rule states that $\Pr(Y = y \mid X = x)$ equals:
TR: Bayes kuralına göre $\Pr(Y = y \mid X = x)$ neye eşittir?
+ $\dfrac{\Pr(X = x \mid Y = y)\,\Pr(Y = y)}{\Pr(X = x)}$
- $\Pr(X = x \mid Y = y)$
- $\dfrac{\Pr(X = x \mid Y = y)\,\Pr(X = x)}{\Pr(Y = y)}$
- $\Pr(X = x \mid Y = y)\,\Pr(Y = y)$
EX: **Doğru cevap: $\Pr(X=x\mid Y=y)\Pr(Y=y)/\Pr(X=x)$.**
1. Koşullu olasılık tanımı: $\Pr(Y=y\mid X=x) = \Pr(X=x, Y=y)/\Pr(X=x)$.
2. Ortak olasılığı ters koşulla yaz: $\Pr(X=x, Y=y) = \Pr(X=x\mid Y=y)\Pr(Y=y)$.
3. Yerine koy, Bayes kuralı çıkar.
**Diğer şıklar neden yanlış?**
• sadece $\Pr(X=x\mid Y=y)$: koşulu ters çevirmek genelde aynı sonucu vermez (klasik hata).
• $\Pr(X=x)$ ile $\Pr(Y=y)$ yer değiştirmiş: pay ortak olasılık olmaz.
• paydasız: sadece ortak olasılık; koşullu değil.

--- LESSON u2e | E(·|·) | Koşullu beklenti, LIE, bağımsızlık

## CARD Koşullu beklenti
==Koşullu beklenti (conditional expectation)== $E(Y\mid X=x)$: $X=x$ olduğu bilindiğinde $Y$'nin ortalaması, yani koşullu dağılımın ortalaması.
$$E(Y\mid X=x) = \sum_j y_j\,P(Y=y_j\mid X=x)$$
**Tarif:** önce koşullu olasılıkları bul (ortak ÷ koşulun marjinali), sonra her $y$ değerini bu olasılıklarla çarpıp topla.
**$Y$ 0/1 ise kısayol:** $E(Y\mid X=x) = 0\cdot P(Y=0|X=x) + 1\cdot P(Y=1\mid X=x) = P(Y=1\mid X=x)$.
İki gösterimi ayır:
• $E(Y\mid X=x)$ ($x$ belli bir değer): bir **sayıdır**. Örnek: $E(Y|X=1) = 0.9$.
• $E(Y\mid X)$ ($x$ belirtilmemiş): $X$ rastgele olduğu için bu da bir **rassal değişkendir**; $X$'in değerine göre farklı sayılar alır.
:::ornek Ders örneği (yağmur tablosu)
Yağmursuz günlerde ($X=1$) kısa yol olasılığı:
$E(Y\mid X=1) = P(Y=1\mid X=1) = 0.63/0.70 = 0.9$
Koşullu varyans: $\text{var}(Y\mid X=1) = (1-0.9)^2(0.9) + (0-0.9)^2(0.1) = 0.009 + 0.081 = 0.09$
Bernoulli kısayolu ile: $0.9\times 0.1 = 0.09$ ✓
:::
Regresyon aslında koşullu beklentiyi modeller: $E(Y\mid X) = \beta_0 + \beta_1X$.

## CARD Yinelenen beklentiler yasası (LIE)
==Law of Iterated Expectations (LIE)==: $Y$'nin genel ortalaması, koşullu ortalamaların $X$'in olasılıklarıyla **ağırlıklı ortalamasıdır**.
$$E(Y) = \sum_i E(Y\mid X=x_i)\,P(X=x_i) = E\big[E(Y\mid X)\big]$$
:::ornek Sezgi: sınıf ortalaması
Bir sınıfta kızların ortalaması 80, erkeklerin 70; sınıfın %60'ı kız. Sınıf ortalaması:
$E(Y) = 80(0.6) + 70(0.4) = 48 + 28 = 76$
Grup ortalamalarını grup büyüklükleriyle ağırlıklandırınca genel ortalama çıkar. LIE tam olarak bu.
:::
:::ornek Türkiye işgücü tablosuyla kontrol
$E(Y\mid X=0) = 0.9568$, $E(Y\mid X=1) = 0.9774$, $P(X=0) = 0.602$, $P(X=1) = 0.398$:
$E(Y) = 0.9568(0.602) + 0.9774(0.398) = 0.965$ ✓ (doğrudan hesapla aynı)
:::
**Önemli sonuç:** $E(Y\mid X)=0$ ise $E(Y) = E[0] = 0$. Regresyonda "$E(u\mid X)=0 \Rightarrow E(u)=0$" ispatında bunu kullanacağız.
Çok değişkenli hali: $E(Y) = E[E(Y\mid X,Z)]$.

## CARD Bağımsızlık
$X$ ve $Y$ ==bağımsız (independent)==: birinin değerini bilmek diğeri hakkında **hiç bilgi vermez**. Tüm $x, y$ için:
$$P(Y=y, X=x) = P(Y=y)\,P(X=x) \quad\text{ya da}\quad P(Y=y\mid X=x) = P(Y=y)$$
İki tanım aynı şeyi söyler: koşul eklemek olasılığı değiştirmiyorsa bağımsızdır.
**Bağımsızlığın sonuçları:**
• $E(Y\mid X) = E(Y)$: koşullu ortalama genel ortalamaya eşit.
• $E(XY) = E(X)E(Y)$ ve $\text{cov}(X,Y) = 0$.
• $\text{var}(X+Y) = \text{var}(X) + \text{var}(Y)$.
**Nasıl kontrol edilir?** Bir hücre seç: ortak olasılık, iki marjinalin **çarpımına** eşit mi?
• **Tek bir hücre bile tutmazsa bağımlıdır** (bağımsızlık her hücrede tutmalı).
• Bir hücrenin tutması yetmez; 2×2 tabloda bir hücre tutarsa hepsi tutar, ama büyük tablolarda hepsine bakmak gerekir.
:::ornek Yağmur tablosu bağımsız mı?
$P(X=0)P(Y=0) = 0.30\times 0.22 = 0.066$, ama $P(X=0, Y=0) = 0.15$. Eşit değil → **bağımlı**. Mantıklı: yağmur yolu uzatır.
:::

## CARD PS2 Soru 3: Türkiye işgücü tablosu
$Y=1$ istihdamda, $Y=0$ işsiz. $X=1$ üniversite mezunu, $X=0$ değil.
| | $X=0$ | $X=1$ | Toplam |
| $Y=0$ | 0.026 | 0.009 | 0.035 |
| $Y=1$ | 0.576 | 0.389 | 0.965 |
| Toplam | 0.602 | 0.398 | 1 |
**a) Genel istihdam oranı:** $E(Y) = 0(0.035) + 1(0.965) = 0.965$
**b) Koşullu beklentiler:** ($Y$ 0/1, yani koşullu olasılık)
• Mezunlar: $E(Y\mid X=1) = 0.389/0.398 = 0.9774$
• Mezun olmayanlar: $E(Y\mid X=0) = 0.576/0.602 = 0.9568$
**c) İşsizlik oranları:**
• Mezunlarda: $P(Y=0\mid X=1) = 0.009/0.398 = 0.0226$, yani %2.26 $(=1-0.9774)$
• Mezun olmayanlarda: $P(Y=0\mid X=0) = 0.026/0.602 = 0.0432$, yani %4.32
**d) İşsizlerin eğitim dağılımı:**
• $P(X=1\mid Y=0) = 0.009/0.035 = 0.2571$
• $P(X=0\mid Y=0) = 0.026/0.035 = 0.7429$
**e) Bağımsız mı?** $P(Y=0)P(X=0) = 0.035\times0.602 = 0.0211$, ama $P(Y=0,X=0) = 0.026$. Eşit değil → **bağımsız değiller**. Ayrıca $E(Y\mid X=1)=0.9774 \ne E(Y)=0.965$.
:::dikkat c ile d'yi karıştırma
"Mezunların işsizlik oranı" → koşul mezun olmak → payda $P(X=1)=0.398$.
"İşsizlerin mezun olma oranı" → koşul işsiz olmak → payda $P(Y=0)=0.035$.
:::

## Q
SRC: PS2 Q3c
EN: Using the Turkish labor table, the unemployment rate among college graduates is approximately:
TR: Türkiye tablosunda üniversite mezunlarının işsizlik oranı yaklaşık kaçtır?
+ $2.26\%$
- $0.9\%$
- $4.32\%$
- $25.71\%$
EX: **Doğru cevap: %2.26.**
1. "Mezunların işsizlik oranı" → mezunlar içinde işsizlerin payı. Koşul: mezun ($X=1$). İstenen: işsiz ($Y=0$).
2. $P(Y=0\mid X=1) = P(Y=0, X=1)/P(X=1) = 0.009/0.398 = 0.0226$ → %2.26
Kontrol: $1 - E(Y\mid X=1) = 1 - 0.9774 = 0.0226$ ✓
**Diğer şıklar ne?**
• %0.9: ortak olasılık $P(Y=0, X=1) = 0.009$ (hem mezun hem işsiz olanların **tüm nüfustaki** payı). Mezun sayısına bölmeyi unutmuşsun.
• %4.32: mezun **olmayanların** işsizlik oranı ($0.026/0.602$).
• %25.71: ters koşul, işsizlerin içinde mezunların payı ($0.009/0.035$).

## Q
SRC: PS2 Q3b
EN: In the Turkish labor table, $E(Y\mid X=1)$ equals:
TR: Türkiye tablosunda $E(Y\mid X=1)$ kaçtır?
+ $0.9774$
- $0.389$
- $0.965$
- $0.9568$
EX: **Doğru cevap: 0.9774.**
$Y$ sadece 0 ya da 1 aldığı için koşullu beklenti = koşullu olasılık:
$E(Y\mid X=1) = 0\cdot P(Y=0\mid X=1) + 1\cdot P(Y=1\mid X=1) = P(Y=1\mid X=1)$
$P(Y=1\mid X=1) = 0.389/0.398 = 0.9774$
Yorum: üniversite mezunlarının %97.74'ü çalışıyor.
**Diğer şıklar ne?**
• 0.389: ortak olasılık (hem mezun hem çalışan); 0.398'e bölmeyi unutmuşsun.
• 0.965: koşulsuz ortalama $E(Y)$, herkesin istihdam oranı.
• 0.9568: $X=0$ (mezun olmayanlar) için koşullu beklenti.

## Q
SRC: PS2 Q3e
EN: In the Turkish labor table, $P(Y=0,X=0) = 0.026$ while $P(Y=0)P(X=0) = 0.0211$. We conclude that:
TR: $P(Y=0,X=0)=0.026$ ama $P(Y=0)P(X=0)=0.0211$. Sonuç nedir?
+ education and employment status are not independent
- education and employment status are independent
- the table is invalid
- the covariance is zero
EX: **Doğru cevap: eğitim ve istihdam durumu bağımsız değil.**
Bağımsızlık tanımı: **her** hücrede ortak olasılık = marjinallerin çarpımı. Burada bir hücrede $0.026 \ne 0.0211$. Tek bir hücrede bozulması bağımsızlığı çürütür.
Sezgisel kontrol: mezunların işsizlik oranı (%2.26) mezun olmayanlarınkinden (%4.32) farklı. Eğitimi bilmek işsizlik hakkında bilgi veriyor → bağımlı.
**Diğer şıklar neden yanlış?**
• Bağımsızlar: tam tersi; eşitlik tutmuyor.
• Tablo geçersiz: hücreler toplamı 1, tablo geçerli. Bağımlılık normaldir.
• Kovaryans sıfır: bağımlı 0/1 değişkenler için kovaryans sıfırdan farklıdır.

## Q
EN: The law of iterated expectations states that:
TR: Yinelenen beklentiler yasası (LIE) ne der?
+ $E(Y) = E[E(Y\mid X)]$
- $E(Y\mid X) = E(Y)$ always
- $E(XY) = E(X)E(Y)$
- $\text{var}(Y) = E[\text{var}(Y\mid X)]$
EX: **Doğru cevap: $E(Y) = E[E(Y\mid X)]$.**
Koşullu beklentilerin ($X$'in olasılıklarıyla ağırlıklı) ortalaması genel beklentiyi verir:
$E(Y) = \sum_i E(Y\mid X=x_i)P(X=x_i)$
Örnek: $0.9568(0.602) + 0.9774(0.398) = 0.965$ ✓
**Diğer şıklar neden yanlış?**
• "$E(Y\mid X) = E(Y)$ always": bu sadece $X$ ve $Y$ **bağımsızsa** doğru. Türkiye tablosunda $0.9774 \ne 0.965$.
• "$E(XY) = E(X)E(Y)$": bu da sadece bağımsızlıkta (ya da kovaryans sıfırken) doğru.
• "$\text{var}(Y) = E[\text{var}(Y|X)]$": eksik. Doğru varyans ayrıştırması $E[\text{var}(Y|X)] + \text{var}[E(Y|X)]$ şeklindedir.

## Q
EN: If $X$ and $Y$ are independent, then:
TR: $X$ ve $Y$ bağımsızsa hangisi doğrudur?
+ $E(Y\mid X) = E(Y)$
- $E(Y\mid X) = 0$
- $\text{corr}(X,Y) = 1$
- $P(Y=y, X=x) = P(Y=y) + P(X=x)$
EX: **Doğru cevap: $E(Y\mid X) = E(Y)$.**
Bağımsızlıkta $X$'i bilmek $Y$ hakkında bilgi vermez: $P(Y=y\mid X=x) = P(Y=y)$. Koşullu olasılıklar koşulsuzlarla aynı olduğu için koşullu ortalama da genel ortalamaya eşittir.
**Diğer şıklar neden yanlış?**
• $E(Y\mid X) = 0$: ortalama sıfır olmak zorunda değil; $E(Y)$ neyse o.
• $\text{corr} = 1$: bu mükemmel doğrusal **bağımlılık**. Bağımsızlıkta korelasyon 0'dır.
• Toplama formülü: bağımsızlıkta ortak olasılık marjinallerin **çarpımıdır**, toplamı değil.

## Q
EN: $E(Y\mid X)$, without specifying the value of $X$, is:
TR: $X$'in değeri belirtilmeden yazılan $E(Y\mid X)$ nedir?
+ a random variable
- always a constant
- always zero
- equal to $E(X\mid Y)$
EX: **Doğru cevap: bir rassal değişken.**
$E(Y\mid X)$, $X$'in fonksiyonudur: $X=0$ olursa bir değer (0.9568), $X=1$ olursa başka bir değer (0.9774) alır. $X$ rastgele olduğu için bu ifade de rastgeledir.
$E(Y\mid X=x)$ ise ($x$ belli bir sayı) sabit bir sayıdır.
**Diğer şıklar neden yanlış?**
• "Always a constant": sadece bağımsızlıkta sabit olur ($E(Y)$'ye eşit).
• "Always zero": ancak özel durumlarda (ör. regresyon varsayımı $E(u\mid X)=0$).
• "$E(X\mid Y)$": koşulun yönü değişince başka bir şey olur; genelde eşit değiller.

## GEN condExp

## Q
SRC: TB 2.11
EN: The conditional expectation of $Y$ given $X = x$, $E(Y \mid X = x)$, is computed as:
TR: $X = x$ verildiğinde $Y$'nin koşullu beklenen değeri $E(Y \mid X = x)$ nasıl hesaplanır?
+ $\sum_{i=1}^{k} y_i \Pr(Y = y_i \mid X = x)$
- $\sum_{i=1}^{k} y_i \Pr(Y = y_i)$
- $\sum_{i=1}^{k} y_i \Pr(X = x \mid Y = y_i)$
- $\sum_{i=1}^{k} y_i \Pr(X = x,\ Y = y_i)$
EX: **Doğru cevap: $\sum y_i \Pr(Y = y_i\mid X=x)$.**
Koşullu beklenti, koşullu dağılımın ortalamasıdır: her $y_i$ değeri, $X = x$ verildiğinde **koşullu** olasılığıyla çarpılır.
**Diğer şıklar neden yanlış?**
• $\Pr(Y=y_i)$: bu koşulsuz ortalama $E(Y)$; $X$'i hiç kullanmıyor.
• $\Pr(X=x\mid Y=y_i)$: koşul ters.
• ortak olasılık: $\Pr(X=x)$'e bölmeyi unutmuşsun. Bu toplam $E(Y\mid X=x)\Pr(X=x)$'e eşittir ve 1'e toplanmayan ağırlıklar kullanır.

## Q
SRC: TB 2.12
EN: $X$ and $Y$ are independently distributed. Each of the following describes independence EXCEPT:
TR: $X$ ve $Y$ bağımsız dağılmış. Aşağıdakilerin hepsi bağımsızlığı tarif eder, BİRİ HARİÇ:
+ $E(Y) = E[E(Y \mid X)]$
- $\Pr(Y = y \mid X = x) = \Pr(Y = y)$ for all $x$ and $y$
- knowing the value of $X$ tells you nothing about $Y$
- the conditional distribution of $Y$ given $X$ equals the marginal distribution of $Y$
EX: **Doğru cevap: $E(Y) = E[E(Y\mid X)]$.**
Bu **yinelenen beklentiler yasasıdır (LIE)** ve $X$ ile $Y$ bağımlı olsa bile **her zaman** doğrudur. Bu yüzden bağımsızlık hakkında bir şey söylemez.
**Diğer şıklar bağımsızlığın tanımıdır:**
• koşullu olasılık = marjinal olasılık;
• $X$'i bilmek $Y$ hakkında bilgi vermez;
• koşullu dağılım = marjinal dağılım (ilk şıkkın sözlü hali).

## Q
SRC: TB 2.39
EN: You want to predict $Y$ with a function $g(X)$ and judge the prediction by the mean squared prediction error, $E\{[Y - g(X)]^2\}$. The function $g(X)$ that minimizes it is:
TR: $Y$'yi bir $g(X)$ fonksiyonuyla tahmin etmek istiyorsun ve tahmini ortalama kare tahmin hatasıyla, $E\{[Y - g(X)]^2\}$, değerlendiriyorsun. Bunu en küçük yapan $g(X)$ nedir?
+ $E(Y \mid X)$
- $E(X \mid Y)$
- $E(Y)$
- $X$ itself
EX: **Doğru cevap: $E(Y\mid X)$.**
Kare hata ölçüsünde en iyi tahmin her zaman **ortalamadır**. $X$'i bildiğin için $X$'e özgü ortalamayı, yani koşullu beklentiyi kullanırsın. Regresyonun hedeflediği şey de budur: $E(Y\mid X) = \beta_0 + \beta_1 X$.
**Diğer şıklar neden yanlış?**
• $E(X\mid Y)$: ters yön; $Y$'yi bilerek $X$'i tahmin eder.
• $E(Y)$: $X$'i kullanmayan en iyi **sabit** tahmin. $X$ bilgi taşıyorsa $E(Y\mid X)$ daha iyi yapar.
• $X$: birimleri bile farklı olabilir; hiçbir optimallik özelliği yok.

--- LESSON u2f | ρ | Kovaryans, korelasyon ve kurallar

## CARD Kovaryans
==Kovaryans (covariance)==: iki değişkenin **doğrusal** olarak birlikte hareketinin ölçüsü.
$$\text{cov}(X,Y) = \sigma_{XY} = E[(X-\mu_X)(Y-\mu_Y)] = E(XY) - \mu_X\mu_Y$$
**Sezgi:** her gözlemde iki sapmayı çarp.
• İkisi de ortalamanın üstünde (+ × +) ya da ikisi de altında (− × −) → çarpım **pozitif**.
• Biri üstte biri altta (+ × −) → çarpım **negatif**.
Çarpımların ortalaması pozitifse değişkenler birlikte artar (eğitim ve maaş gibi); negatifse biri artarken diğeri azalır (fiyat ve talep gibi).
**Özellikler:**
• $\text{cov}(X,X) = \text{var}(X)$: bir değişkenin kendisiyle kovaryansı varyansıdır.
• Bağımsızsa $\text{cov}=0$, çünkü $E(XY) = E(X)E(Y)$.
• Birimi: $X$'in birimi × $Y$'nin birimi (ör. yıl × dolar). Bu yüzden büyüklüğünü yorumlamak zordur; 500 büyük mü küçük mü bilemezsin.
:::dikkat Tersi her zaman doğru değil
$\text{cov}=0$ bağımsızlık anlamına **gelmez**. Sadece **doğrusal** ilişki yok demektir. Örnek: $Y = X^2$ ve $X$ $-1, 0, 1$ değerlerini eşit olasılıkla alıyorsa kovaryans 0'dır ama $Y$ tamamen $X$'e bağlıdır.
:::

## CARD Korelasyon
==Korelasyon (correlation)==: kovaryansın standart sapmalarla bölünmüş, yani **standartlaştırılmış** hâli.
$$\text{corr}(X,Y) = \rho_{XY} = \frac{\text{cov}(X,Y)}{\sqrt{\text{var}(X)\text{var}(Y)}} = \frac{\sigma_{XY}}{\sigma_X\sigma_Y}$$
**Neden bölüyoruz?** Pay (yıl × dolar) ile payda (yıl × dolar) aynı birimde; bölünce birim kaybolur.
• **Birimsiz** ve her zaman $-1 \le \rho \le 1$.
• $+1$: mükemmel pozitif doğrusal ilişki (bütün noktalar yükselen bir doğru üzerinde).
• $-1$: mükemmel negatif doğrusal ilişki.
• $0$: doğrusal ilişki yok.
• $\pm 0.8$ gibi değerler güçlü, $\pm 0.2$ gibi değerler zayıf ilişki demektir.
:::ornek Sayıyla
$\text{cov}(X,Y) = 6$, $\text{var}(X) = 4$, $\text{var}(Y) = 25$ ise:
$\rho = 6/\sqrt{4\times 25} = 6/10 = 0.6$
:::
Ders sonucu: $E(Y\mid X) = \mu_Y$ ise $\text{cov}(Y,X) = \text{corr}(Y,X) = 0$. (Koşullu ortalama $X$'e bağlı değilse doğrusal ilişki de yoktur.)

## CARD Hesap kuralları (ezberle)
$a, b, c$ sabit. Bu kurallar sınavın her yerinde kullanılır:
**Beklenti doğrusaldır:**
• $E(a + bX + cY) = a + b\mu_X + c\mu_Y$
**Varyans:**
• $\text{var}(a + bY) = b^2\sigma_Y^2$. Sabit eklemek ($a$) yayılımı değiştirmez, bu yüzden kaybolur. Çarpan **karesiyle** çıkar.
• $\text{var}(aX + bY) = a^2\sigma_X^2 + b^2\sigma_Y^2 + 2ab\,\sigma_{XY}$
• Özel hâller: $\text{var}(X+Y) = \sigma_X^2 + \sigma_Y^2 + 2\sigma_{XY}$ ve $\text{var}(X-Y) = \sigma_X^2 + \sigma_Y^2 - 2\sigma_{XY}$ (farkta da varyanslar **toplanır**!)
**Momentler arası geçiş:**
• $E(Y^2) = \sigma_Y^2 + \mu_Y^2$
• $E(XY) = \sigma_{XY} + \mu_X\mu_Y$
**Kovaryans:**
• $\text{cov}(a + bX + cV,\, Y) = b\,\sigma_{XY} + c\,\sigma_{VY}$ (sabit $a$ kaybolur)
• $|\text{corr}(X,Y)|\le 1$ ve $|\sigma_{XY}| \le \sigma_X\sigma_Y$
:::ornek Kural kullanımı
$\mu_X = 2$, $\sigma_X^2 = 4$, $\mu_Y = 5$, $\sigma_Y^2 = 9$, $\sigma_{XY} = 3$. $W = 1 + 2X - Y$ için:
$E(W) = 1 + 2(2) - 5 = 0$
$\text{var}(W) = 2^2(4) + (-1)^2(9) + 2(2)(-1)(3) = 16 + 9 - 12 = 13$
:::
:::dikkat Slayttaki yazım hatası
Ders notunda $\text{var}(aX+bY)$ formülünde $2ab\sigma_X\sigma_Y$ yazıyor. Doğrusu $2ab\,\sigma_{XY}$ (kovaryans). İkisi sadece korelasyon 1 olduğunda eşittir.
:::

## CARD PS3 Soru 2: ispatlar
Sınavda ispatın kendisi değil, sonucu sorulur; ama mantığı bilmek kuralı unutmanı önler.
**a) Beklenti doğrusal:** $E(a+bX) = \sum (a+bx_i)p_i = a\sum p_i + b\sum x_ip_i = a + bE(X)$, çünkü $\sum p_i = 1$.
**b) Sabit varyansa girmez:** $\text{var}(a+bX) = E[(a+bX - a - bE(X))^2] = E[b^2(X-E(X))^2] = b^2\text{var}(X)$. $a$'lar birbirini götürür, $b$ karesiyle dışarı çıkar.
**c) Kovaryans dağılır:** $\text{cov}(Y, a+bX+cY) = E[(Y-EY)(b(X-EX)+c(Y-EY))] = b\,\text{cov}(Y,X) + c\,\text{var}(Y)$. Sabit $a$ sapmalarda kaybolur; $\text{cov}(Y,Y) = \text{var}(Y)$.
**d) Bağımsızlık:** ortak olasılık = marjinallerin çarpımı. Bu yüzden $E(X^aY^b) = E(X^a)E(Y^b)$ ve $\text{var}(X+Y) = \text{var}(X)+\text{var}(Y)$ (çapraz terim $2\text{cov}=0$).

## Q
SRC: PS3 Q2b
EN: For constants $a$ and $b$, $\text{var}(a+bX)$ equals:
TR: $a$, $b$ sabit. $\text{var}(a+bX)$ nedir?
+ $b^2\text{var}(X)$
- $a + b^2\text{var}(X)$
- $b\,\text{var}(X)$
- $a^2 + b^2\text{var}(X)$
EX: **Doğru cevap: $b^2\,\text{var}(X)$.**
İki ayrı etki var:
1. **Sabit eklemek ($+a$):** bütün değerleri aynı miktarda kaydırır. Ortalama da aynı miktarda kayar, sapmalar değişmez → yayılım değişmez. $a$ kaybolur.
2. **Çarpmak ($\times b$):** sapmaların hepsi $b$ katına çıkar. Varyans sapmaların **karesi** olduğu için $b^2$ katına çıkar.
Sayıyla: $\text{var}(X) = 4$ ise $\text{var}(10 + 3X) = 9\times 4 = 36$.
**Diğer şıklar neden yanlış?**
• $a + b^2\text{var}(X)$ ve $a^2 + \dots$: sabit varyansa hiçbir şekilde girmez.
• $b\,\text{var}(X)$: kare almayı unutmuşsun. (Standart sapma $|b|$ ile çarpılır, varyans $b^2$ ile.)

## Q
SRC: PS3 Q2c
EN: $\text{cov}(Y, a + bX + cY)$ equals:
TR: $\text{cov}(Y, a + bX + cY)$ neye eşittir?
+ $b\,\text{cov}(X,Y) + c\,\text{var}(Y)$
- $a + b\,\text{cov}(X,Y) + c\,\text{var}(Y)$
- $b\,\text{var}(X) + c\,\text{var}(Y)$
- $bc\,\text{cov}(X,Y)$
EX: **Doğru cevap: $b\,\text{cov}(X,Y) + c\,\text{var}(Y)$.**
Kovaryans her parçaya ayrı ayrı dağılır:
1. $\text{cov}(Y, a) = 0$: sabit hiç değişmez, hiçbir şeyle birlikte hareket etmez.
2. $\text{cov}(Y, bX) = b\,\text{cov}(Y,X)$: sabit çarpan dışarı çıkar (kare yok, çünkü sadece bir taraf çarpılıyor).
3. $\text{cov}(Y, cY) = c\,\text{cov}(Y,Y) = c\,\text{var}(Y)$: bir değişkenin kendisiyle kovaryansı varyansıdır.
Topla: $0 + b\,\text{cov}(X,Y) + c\,\text{var}(Y)$.
**Diğer şıklar neden yanlış?**
• $a + \dots$: sabitin kovaryansa katkısı sıfır.
• $b\,\text{var}(X)$: $\text{cov}(Y, X)$ yerine $\text{var}(X)$ yazmışsın; kovaryansın bir tarafı hep $Y$.
• $bc\,\text{cov}(X,Y)$: katsayıları çarpmak anlamsız; kovaryans toplama ile dağılır.

## Q
SRC: PS2 Q1l
EN: Unlike covariance, correlation:
TR: Kovaryanstan farklı olarak korelasyon:
+ is unit free and lies between $-1$ and $1$
- is measured in the units of $X$ times the units of $Y$
- can take any real value
- measures nonlinear relationships only
EX: **Doğru cevap:** birimsizdir ve $-1$ ile $1$ arasındadır.
$\rho = \sigma_{XY}/(\sigma_X\sigma_Y)$. Pay (yıl × dolar) ile payda (yıl × dolar) aynı birimde, bölünce birim kaybolur. Ayrıca $|\sigma_{XY}| \le \sigma_X\sigma_Y$ eşitsizliği yüzünden oran her zaman $[-1, 1]$ aralığında kalır.
**Diğer şıklar neden yanlış?**
• "Units of $X$ times units of $Y$": bu **kovaryansın** birimi.
• "Any real value": bu da kovaryansın özelliği; korelasyon sınırlı.
• "Nonlinear relationships only": tam tersi; korelasyon **doğrusal** ilişkiyi ölçer. Doğrusal olmayan bir ilişkiyi kaçırabilir.

## Q
SRC: PS3 Q2d
EN: If $X$ and $Y$ are independent, then $\text{var}(X+Y)$ equals:
TR: $X$ ve $Y$ bağımsızsa $\text{var}(X+Y)$ nedir?
+ $\text{var}(X) + \text{var}(Y)$
- $\text{var}(X) + \text{var}(Y) + 2\,\text{cov}(X,Y)$ with $\text{cov}(X,Y) > 0$
- $\text{var}(X)\,\text{var}(Y)$
- $[\text{var}(X)+\text{var}(Y)]^2$
EX: **Doğru cevap: $\text{var}(X) + \text{var}(Y)$.**
1. Genel formül: $\text{var}(X+Y) = \text{var}(X) + \text{var}(Y) + 2\,\text{cov}(X,Y)$
2. Bağımsızlıkta $E(XY) = E(X)E(Y)$, yani $\text{cov}(X,Y) = E(XY) - \mu_X\mu_Y = 0$
3. Çapraz terim düşer: $\text{var}(X) + \text{var}(Y)$
Sayıyla: $\text{var}(X) = 4$, $\text{var}(Y) = 9$ ve bağımsızlarsa $\text{var}(X+Y) = 13$. Hatta $\text{var}(X - Y) = 13$ de olur.
**Diğer şıklar neden yanlış?**
• "cov > 0 ile": bağımsızlıkta kovaryans **sıfırdır**, pozitif değil.
• Çarpım: varyanslar toplanır, çarpılmaz.
• Toplamın karesi: kare alma yok.

## Q
EN: If $\text{cov}(X,Y) = 0$, then:
TR: $\text{cov}(X,Y) = 0$ ise hangisi kesin doğrudur?
+ there is no linear association between $X$ and $Y$
- $X$ and $Y$ must be independent
- $E(Y\mid X) = 0$
- $\text{var}(X) = \text{var}(Y)$
EX: **Doğru cevap:** $X$ ile $Y$ arasında **doğrusal** bir ilişki yoktur.
Kovaryans sadece doğrusal birlikte hareketi ölçer. Sıfır çıkması "düz bir çizgi etrafında birlikte artma/azalma yok" demektir.
**Karşı örnek (bağımsızlık neden garanti değil?):** $X$ değerleri $-1, 0, 1$ eşit olasılıkla, $Y = X^2$ olsun. $\mu_X = 0$ ve $E(XY) = E(X^3) = 0$, yani kovaryans 0. Ama $Y$ tamamen $X$'e bağlı! İlişki var, sadece doğrusal değil (U şeklinde).
**Diğer şıklar neden yanlış?**
• "Must be independent": yukarıdaki karşı örnek bunu çürütür. Bağımsızlık → kovaryans 0, ama tersi her zaman doğru değil.
• "$E(Y\mid X) = 0$": kovaryans sıfır olsa da $Y$'nin ortalaması sıfır olmak zorunda değil.
• "Variances equal": kovaryansla varyansların eşitliği arasında bağ yok.

## Q
EN: The covariance between $X$ (in years) and $Y$ (in dollars) is measured in:
TR: $X$ yıl, $Y$ dolar cinsindense kovaryansın birimi nedir?
+ years × dollars
- dollars only
- years only
- it is unit free
EX: **Doğru cevap: yıl × dolar.**
Kovaryans $E[(X-\mu_X)(Y-\mu_Y)]$: bir yıl sapması ile bir dolar sapmasının **çarpımının** ortalaması. Çarpımın birimi de çarpımdır: yıl·dolar.
Bu yüzden kovaryansın büyüklüğünü yorumlamak zordur: yılı aya çevirirsen kovaryans 12 katına çıkar ama ilişki aynı kalır.
**Diğer şıklar neden yanlış?**
• Sadece dolar ya da sadece yıl: iki değişkenin de birimi çarpımda yer alır.
• "Unit free": bu **korelasyonun** özelliği. Korelasyon, kovaryansı $\sigma_X\sigma_Y$'ye (yıl × dolar) bölerek birimi yok eder.

## GEN linComb
## GEN corrCalc

## Q
SRC: TB 2.13
EN: The correlation between $X$ and $Y$:
TR: $X$ ile $Y$ arasındaki korelasyon:
+ equals their covariance divided by the product of their standard deviations
- cannot be negative, because variances are always positive
- is the covariance squared
- is the covariance divided by the variance of $X$
EX: **Doğru cevap: kovaryans / (standart sapmaların çarpımı).**
$$\text{corr}(X,Y) = \frac{\sigma_{XY}}{\sigma_X \sigma_Y}$$
Kovaryansın birimi ($X$ birimi × $Y$ birimi), payda $\sigma_X\sigma_Y$ de aynı birimde. Bölünce birimsiz ve $-1$ ile $1$ arasında bir sayı çıkar.
**Diğer şıklar neden yanlış?**
• "cannot be negative": payda pozitif ama pay (kovaryans) negatif olabilir.
• covariance squared: kare almak işareti yok eder; tanım bu değil.
• $\sigma_{XY}/\sigma_X^2$: bu, regresyon **eğimi** $\beta_1$.

## Q
SRC: TB 2.14
EN: Which of the following does NOT imply that $X$ and $Y$ are uncorrelated?
TR: Aşağıdakilerden hangisi $X$ ile $Y$'nin ilişkisiz (korelasyonsuz) olduğunu GÖSTERMEZ?
+ $|\sigma_{XY}| \le \sigma_X \sigma_Y$
- $X$ and $Y$ are independent
- $\text{cov}(X, Y) = 0$
- $E(Y \mid X) = \mu_Y$
EX: **Doğru cevap: $|\sigma_{XY}| \le \sigma_X\sigma_Y$.**
Bu **kovaryans eşitsizliğidir** ve **her** $X$, $Y$ çifti için geçerlidir; korelasyonun $-1$ ile $1$ arasında olmasının sebebi budur. Her zaman doğru olduğu için ilişkisizliği göstermez.
**Diğer şıklar ilişkisizliği gösterir:**
• bağımsızlık ⇒ kovaryans 0 (tersi her zaman doğru değil);
• $\text{cov}=0$: ilişkisizliğin tanımı;
• $E(Y\mid X) = \mu_Y$ (ortalama bağımsızlığı) ⇒ $\text{cov}(X,Y) = 0$. Kitaptaki önemli sonuç.

## Q
SRC: TB 2.15
EN: $\text{var}(aX + bY)$ equals:
TR: $\text{var}(aX + bY)$ neye eşittir?
+ $a^2\sigma_X^2 + 2ab\,\sigma_{XY} + b^2\sigma_Y^2$
- $a^2\sigma_X^2 + b^2\sigma_Y^2$
- $a\,\sigma_X^2 + b\,\sigma_Y^2$
- $a^2\sigma_X^2 + 2ab\,\sigma_X\sigma_Y + b^2\sigma_Y^2$
EX: **Doğru cevap: $a^2\sigma_X^2 + 2ab\,\sigma_{XY} + b^2\sigma_Y^2$.**
Sabitler varyansın içinden **karesi** alınarak çıkar ($\text{var}(aX) = a^2\sigma_X^2$). İki değişken birlikte hareket ettiği için kovaryans terimi $2ab\,\sigma_{XY}$ eklenir.
**Diğer şıklar neden yanlış?**
• kovaryans yok: sadece $X$ ve $Y$ ilişkisizse ($\sigma_{XY} = 0$) doğru.
• $a$, $b$ kare alınmamış: sabitler varyanstan karesiyle çıkar.
• $\sigma_X\sigma_Y$: bu sadece korelasyon tam 1 ise doğrudur, çünkü $\sigma_{XY} = \rho\,\sigma_X\sigma_Y$. ==Dikkat:== ders slaytında bu formül $\sigma_X\sigma_Y$ ile yazılmış; doğrusu kovaryans $\sigma_{XY}$.

## Q
SRC: TB 2.30
EN: The covariance inequality states that:
TR: Kovaryans eşitsizliği ne der?
+ $\sigma_{XY}^2 \le \sigma_X^2\,\sigma_Y^2$
- $0 \le \sigma_{XY} \le 1$
- $\sigma_{XY}^2 \ge \sigma_X^2\,\sigma_Y^2$
- $\sigma_{XY} = \sigma_X\sigma_Y$ for every pair of variables
EX: **Doğru cevap: $\sigma_{XY}^2 \le \sigma_X^2\sigma_Y^2$.**
$|\text{corr}(X,Y)| \le 1$ demek $\sigma_{XY}^2/(\sigma_X^2\sigma_Y^2) \le 1$ demektir. Paydayı karşıya atınca $\sigma_{XY}^2 \le \sigma_X^2\sigma_Y^2$, yani $|\sigma_{XY}| \le \sigma_X\sigma_Y$ çıkar.
**Diğer şıklar neden yanlış?**
• $0\le\sigma_{XY}\le 1$: kovaryans negatif olabilir ve birimlere göre 1'den çok büyük olabilir. 0–1 aralığı korelasyonun bile aralığı değil (o $-1$ ile $1$).
• $\ge$: yön ters.
• eşitlik: sadece tam doğrusal ilişkide ($\rho = 1$) olur.

## Q
SRC: TB 2.35
EN: Let $Y = \dfrac{X - \mu_X}{\sigma_X}$, where $\mu_X$ is the mean and $\sigma_X$ the standard deviation of $X$. The mean and the standard deviation of $Y$ are:
TR: $Y = \dfrac{X - \mu_X}{\sigma_X}$ olsun; $\mu_X$ $X$'in ortalaması, $\sigma_X$ standart sapmasıdır. $Y$'nin ortalaması ve standart sapması nedir?
+ 0 and 1
- 1 and 1
- $\mu_X$ and $\sigma_X$
- they cannot be computed, because $Y$ is not a linear function of $X$
EX: **Doğru cevap: 0 ve 1.**
Bu, standartlaştırmadır. $Y = a + bX$ ile $a = -\mu_X/\sigma_X$, $b = 1/\sigma_X$:
• $E(Y) = \dfrac{E(X) - \mu_X}{\sigma_X} = \dfrac{\mu_X - \mu_X}{\sigma_X} = 0$
• $\text{sd}(Y) = \dfrac{1}{\sigma_X}\cdot \sigma_X = 1$ (sabit çıkarmak yayılımı değiştirmez).
**Diğer şıklar neden yanlış?**
• 1 ve 1: ortalamayı çıkardığın için ortalama 0 olur.
• $\mu_X$ ve $\sigma_X$: dönüşüm hiçbir şey yapmamış gibi.
• "not linear": yanlış; $Y$, $X$'in doğrusal fonksiyonudur ($a + bX$).

`);
