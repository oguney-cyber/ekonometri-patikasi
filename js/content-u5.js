CONTENT.push(String.raw`
=== UNIT u5 | Hafta 5 | Basit Doğrusal Regresyon | OLS, yorum, R², SER ve varsayımlar

--- LESSON u5a | β | Model ve terimler

## CARD Anakütle regresyon doğrusu
Merak ettiğimiz: $X$ belli bir değerdeyken $Y$ **ortalamada** ne olur? Yani koşullu ortalama $E(Y\mid X)$. Bunun doğrusal olduğunu varsayarız:
$$E(Y\mid X) = \beta_0 + \beta_1X$$
Buna ==anakütle regresyon doğrusu (population regression line)== denir.
• $\beta_0$ ==sabit terim (intercept)==: $X=0$ iken ortalama $Y$.
• $\beta_1$ ==eğim (slope)==: $X$'teki bir birimlik değişimin $Y$ üzerindeki ortalama etkisi.
Örnek: $E(\text{TestScore}\mid \text{ClassSize}) = \beta_0 + \beta_1\times\text{ClassSize}$. Bu, belli bir mevcuttaki bölgelerin **ortalama** puanını verir, tek tek bölgelerin puanını değil.

## CARD Hata terimi ve tam model
Tek tek gözlemler doğrunun üzerinde değil. Aradaki fark $u = Y - E(Y\mid X)$, ==hata terimi (error term)==:
$$Y_i = \beta_0 + \beta_1 X_i + u_i,\quad i=1,\dots,n$$
| Terim | İngilizce | Anlamı |
| $Y_i$ | dependent variable, regressand | açıklanan, sol taraftaki değişken |
| $X_i$ | independent variable, ==regressor== | açıklayan, sağ taraftaki değişken |
| $\beta_0, \beta_1$ | coefficients, ==parameters== | bilinmeyen sabitler (Yunan harfi) |
| $u_i$ | error term, disturbance | $X$ dışındaki tüm faktörler |
Grafikte bir noktanın doğruya olan **dikey uzaklığı** $u_i$'dir.

## Q
SRC: PS5 Q1a
EN: Under $E(u\mid X)=0$, the population regression line is:
TR: $E(u\mid X)=0$ altında anakütle regresyon doğrusu nedir?
+ $E(Y\mid X) = \beta_0 + \beta_1X$
- $\hat Y = \hat\beta_0 + \hat\beta_1X$
- $Y = \beta_0 + \beta_1X + u$
- $u = Y - \hat Y$
EX: Anakütle doğrusu koşullu ortalamadır: $E(Y\mid X) = \beta_0+\beta_1X$. Şapkalı ($\hat{}$) olan, örneklemden tahmin edilen doğrudur.

## Q
SRC: PS5 Q1b
EN: In $Y = \beta_0 + \beta_1X + u$, the dependent variable is:
TR: Bu modelde bağımlı değişken hangisi?
+ $Y$
- $X$
- $u$
- $\beta_1$
EX: Bağımlı değişken açıklanmak istenen, sol taraftaki değişken: $Y$.

## Q
SRC: PS5 Q1d
EN: A regressor is:
TR: Regresör (regressor) nedir?
+ a variable appearing on the right-hand side of a regression (an independent variable)
- the variable on the left-hand side of a regression
- the error term
- the estimated intercept
EX: Regresör sağ taraftaki açıklayıcı değişkendir, $X$.

## Q
SRC: PS5 Q1e
EN: The parameters $\beta_0$ and $\beta_1$ are:
TR: $\beta_0$ ve $\beta_1$ parametreleri nedir?
+ unknown coefficients of the population regression line, usually denoted by Greek letters
- numbers computed from the sample
- random variables that change from sample to sample
- the predicted values of $Y$
EX: Parametreler anakütleye ait, bilinmeyen sabitlerdir. Örneklemden hesaplanan $\hat\beta$'lar ise tahminlerdir.

## Q
SRC: PS5 Q1f
EN: The error term $u_i$ is:
TR: Hata terimi $u_i$ nedir?
+ the difference between $Y_i$ and $E(Y_i\mid X_i)$; it captures all factors other than $X$ that affect $Y$
- the difference between $Y_i$ and $\hat Y_i$
- the slope of the regression line
- always equal to zero
EX: $u_i = Y_i - E(Y_i\mid X_i)$. $Y_i - \hat Y_i$ ise kalıntıdır (residual, $\hat u_i$). İkisini karıştırma.

## Q
EN: In the population regression line, $\beta_0$ represents:
TR: Anakütle regresyon doğrusunda $\beta_0$ neyi gösterir?
+ the average value of $Y$ when $X=0$
- the change in $Y$ for a one-unit change in $X$
- the average value of $X$
- the error term
EX: Sabit terim $X=0$ iken doğrunun $Y$ eksenini kestiği yerdir.

--- LESSON u5b | β̂ | OLS tahmincisi

## CARD En küçük kareler fikri
Veriden doğruyu nasıl çizeriz? Aday doğru $b_0 + b_1X$ olsun. Her noktanın hatası $Y_i - b_0 - b_1X_i$. Hataların **kareleri toplamını** en küçük yapan $b_0, b_1$'i seçeriz:
$$\min_{b_0,b_1}\sum_{i=1}^n (Y_i - b_0 - b_1X_i)^2$$
Bu çözüm ==OLS (Ordinary Least Squares, sıradan en küçük kareler)== tahmincisidir.

## CARD OLS formülleri
$$\hat\beta_1 = \frac{\sum (X_i-\bar X)(Y_i-\bar Y)}{\sum (X_i-\bar X)^2} = \frac{s_{XY}}{s_X^2} \qquad \hat\beta_0 = \bar Y - \hat\beta_1\bar X$$
Bir de şu var: $\hat\beta_1 = r_{XY}\,\dfrac{s_Y}{s_X}$
• ==Tahmin edilen değer (predicted value)==: $\hat Y_i = \hat\beta_0 + \hat\beta_1X_i$
• ==Kalıntı (residual)==: $\hat u_i = Y_i - \hat Y_i$, gerçek eksi tahmin.
:::ornek Elle hesap
$X: 1,2,3,4$ ve $Y: 2,4,5,7$. $\bar X = 2.5$, $\bar Y = 4.5$
$X-\bar X$: $-1.5, -0.5, 0.5, 1.5$ | $Y-\bar Y$: $-2.5, -0.5, 0.5, 2.5$
$\sum(X-\bar X)(Y-\bar Y) = 3.75+0.25+0.25+3.75 = 8$
$\sum(X-\bar X)^2 = 2.25+0.25+0.25+2.25 = 5$
$\hat\beta_1 = 8/5 = 1.6$, $\hat\beta_0 = 4.5 - 1.6(2.5) = 0.5$
$X=2$ için $\hat Y = 0.5+3.2 = 3.7$, kalıntı $= 4-3.7 = 0.3$
:::

## CARD OLS'nin üç cebirsel özelliği (Handout)
Formülden doğrudan çıkarlar ve her örneklemde geçerlidirler:
1. Kalıntıların toplamı sıfır: $\sum\hat u_i = 0$
2. Kalıntılar ve regresör ilişkisiz: $\sum X_i\hat u_i = 0$
3. Regresyon doğrusu ortalamalar noktasından geçer: $\bar Y = \hat\beta_0 + \hat\beta_1\bar X$
:::ipucu Türetme
$\hat\beta_0$'a göre türev $-2\sum(Y_i-b_0-b_1X_i)=0$ verir. Bu tam olarak 1. özellik ve $b_0 = \bar Y - b_1\bar X$ sonucu. $\hat\beta_1$'e göre türev ise 2. özelliği verir.
:::

## Q
SRC: PS5 Q1g
EN: The OLS estimators of $\beta_0$ and $\beta_1$ are obtained by:
TR: OLS tahmincileri nasıl elde edilir?
+ minimizing the sum of squared residuals $\sum(Y_i-b_0-b_1X_i)^2$
- minimizing the sum of residuals $\sum(Y_i-b_0-b_1X_i)$
- maximizing the $R^2$ subject to $\hat\beta_0 = 0$
- setting the predicted values equal to the observed values
EX: OLS = en küçük **kareler**. Kalıntıların düz toplamı her zaman sıfır olduğu için onu küçültmek anlamsızdır.

## Q
SRC: PS5 Q1i
EN: The residual for observation $i$ is:
TR: $i$. gözlemin kalıntısı (residual) nedir?
+ $\hat u_i = Y_i - \hat Y_i$
- $u_i = Y_i - E(Y_i\mid X_i)$
- $\hat Y_i - \bar Y$
- $Y_i - \bar Y$
EX: Kalıntı: gerçek değer eksi tahmin edilen değer. İkinci şık hata terimidir (gözlenemez).

## Q
EN: Which of the following always holds for OLS residuals in a regression with an intercept?
TR: Sabit terimli regresyonda OLS kalıntıları için hangisi her zaman doğrudur?
+ $\sum_{i=1}^n \hat u_i = 0$
- $\hat u_i = 0$ for every $i$
- $\sum \hat u_i^2 = 0$
- $\sum Y_i\hat u_i = \sum Y_i$
EX: Kalıntıların toplamı sıfırdır, ama tek tek sıfır değildir. Kareler toplamı (SSR) sıfır olsaydı tüm noktalar doğru üzerinde olurdu.

## Q
SRC: PS5 Q2c
EN: The OLS regression line always passes through:
TR: OLS doğrusu her zaman hangi noktadan geçer?
+ the point $(\bar X, \bar Y)$
- the origin $(0,0)$
- the point $(0, \bar Y)$
- the observation with the largest residual
EX: $\hat\beta_0 = \bar Y - \hat\beta_1\bar X$, yani $\bar Y = \hat\beta_0 + \hat\beta_1\bar X$. Ortalamalar noktası doğrunun üzerinde.

## Q
EN: If $s_{XY} = 12$ and $s^2_X = 4$, then $\hat\beta_1$ equals:
TR: $s_{XY}=12$ ve $s^2_X=4$ ise $\hat\beta_1$ kaçtır?
+ $3$
- $48$
- $6$
- $1/3$
EX: $\hat\beta_1 = s_{XY}/s_X^2 = 12/4 = 3$. Standart sapmaya ($\sqrt4=2$) bölersen 6 bulursun, o tuzak.

## Q
SRC: PS5 Q1h
EN: The predicted value of the dependent variable is:
TR: Bağımlı değişkenin tahmin edilen değeri nedir?
+ $\hat Y = \hat\beta_0 + \hat\beta_1 X$
- $Y = \beta_0+\beta_1X+u$
- $E(Y\mid X) = \beta_0+\beta_1X$
- $\bar Y$
EX: Tahmin edilen değer, tahmin edilmiş doğrudaki değerdir.

## GEN olsSmall
## GEN olsMoments

--- LESSON u5c | ↗ | Yorumlama ve tahmin

## CARD Eğimi yorumlamak
Kaliforniya verisi: $\widehat{\text{TestScore}} = 698.93 - 2.28\times\text{STR}$
**Eğim:** öğretmen başına bir öğrenci fazla olan bölgelerin test puanı **ortalamada** 2.28 puan daha düşük. $\Delta\text{TestScore}/\Delta\text{STR} = -2.28$
**Sabit:** STR = 0 iken tahmini puan 698.9. Ama bu **anlamsız**: sıfır öğrencili sınıf yok. Veri aralığının dışına çıkıyoruz (en küçük STR = 14). Buna ==dış değer kestirimi (extrapolation)== denir.

## CARD Üç hesap türü
**1. Tahmin:** değeri yerine koy. $\hat Y = \hat\beta_0 + \hat\beta_1X$
**2. Değişim:** $\Delta\hat Y = \hat\beta_1\,\Delta X$ (sabit terim düşer)
**3. Ortalamayı bulma:** doğru $(\bar X, \bar Y)$'den geçer, yani $\bar Y = \hat\beta_0 + \hat\beta_1\bar X$
:::ornek PS5 Soru 2
$\widehat{\text{TestScore}} = 620.4 - 3.82\times CS$
**a)** $CS=23$: $620.4 - 3.82(23) = 532.54$. (Resmi çözümde yanlışlıkla 22 kullanılıp 536.36 bulunmuş.)
**b)** 19'dan 23'e: $\Delta = -3.82\times 4 = -15.28$
**c)** $\overline{CS} = 21.4$: $\overline{\text{TestScore}} = 620.4 - 3.82(21.4) = 538.65$
:::

## CARD PS5 Soru 3: kazanç ve yaş
$\widehat{AWE} = 630.5 + 8.6\times\text{Age}$, $R^2 = 0.023$, $SER = 624.1$, örneklem 25–65 yaş.
**a)** Yaş bir yıl artınca ortalama haftalık kazanç 8.6 dolar artar. Sabit (630.5) yaş 0 iken kazanç, anlamsız.
**b)** SER = 624.1 dolar: kalıntıların tipik büyüklüğü. Birimi $Y$'nin birimi, yani **dolar**.
**c)** $R^2 = 0.023$: yaş, kazanç varyansının sadece %2.3'ünü açıklıyor. **Birimsiz**.
**d)** 23 yaş: $630.5+8.6(23) = 828.3$, 40 yaş: $974.5$
**e)** 85 yaş için güvenilir değil: veri 25–65 arası, dışına çıkmak extrapolation.
**f)** Hatalar normal mi? Muhtemelen hayır: kazanç sağa çarpık ve negatif olamaz, normal dağılım ise tüm reel sayılarda tanımlı.
**g)** $\overline{\text{Age}} = 38$: $\overline{AWE} = 630.5 + 8.6(38) = 957.3$

## CARD PS5 Soru 4: Malta aykırı değeri
65 ülke, büyüme ile ticaret payı:
• Malta dahil: $\widehat{\text{growth}} = 0.640 + 2.306\times\text{tradeshare}$ (eğim SE 0.773, $t=2.98$)
• Malta hariç: $\widehat{\text{growth}} = 0.957 + 1.681\times\text{tradeshare}$ (SE 0.987, $t=1.70$)
Malta'nın ticaret payı (1.99) diğerlerinden çok büyük, yani bir ==aykırı değer (outlier)==. Doğruyu kendine doğru çektiği için Malta dahil doğru daha dik.
Malta bir transit liman: mallar girip hemen tekrar ihraç ediliyor, bu yüzden ticaret payı yapay olarak yüksek. Çözüm setine göre **analizden çıkarılmalı**.
Tahminler (dahil): 0.5 için $1.79$, 1.0 için $2.95$. Hariç: $1.80$ ve $2.64$.

## Q
SRC: PS5 Q3a
EN: In $\widehat{AWE} = 630.5 + 8.6\times\text{Age}$ (earnings in dollars, age in years), the coefficient 8.6 means:
TR: Bu regresyonda 8.6 katsayısı ne anlama gelir?
+ one more year of age is associated with 8.6 dollars higher average weekly earnings
- a worker aged 8.6 earns 630.5 dollars
- age explains 8.6% of earnings
- earnings increase 8.6% per year
EX: Eğim: $X$ bir birim (1 yıl) artınca $\hat Y$ 8.6 birim (dolar) artar. Yüzde yorumu ancak log modellerde yapılır.

## Q
SRC: PS5 Q3e
EN: The earnings regression was estimated with workers aged 25 to 65. Will it give reliable predictions for an 85-year-old?
TR: Regresyon 25–65 yaş verisiyle tahmin edildi. 85 yaşındaki biri için güvenilir tahmin verir mi?
+ No, because 85 is outside the range of the data, so the prediction is an extrapolation.
- Yes, because the regression line is linear.
- Yes, because $R^2$ is positive.
- No, because the slope is not statistically significant.
EX: Veri aralığının dışında ilişki çok farklı olabilir (ör. emeklilik). Extrapolation güvenilmez.

## Q
SRC: PS5 Q3f
EN: Is it plausible that the regression errors in the earnings–age regression are normally distributed?
TR: Kazanç regresyonunun hatalarının normal dağılması makul mü?
+ No: earnings are right-skewed and cannot be negative, while a normal variable can take any real value.
- Yes: errors are always normally distributed.
- Yes: the CLT makes each error normal.
- No: because the slope is positive.
EX: Kazanç dağılımı uzun sağ kuyruklu (çarpık) ve alttan 0 ile sınırlı. Normal ise simetrik ve $(-\infty,\infty)$'da tanımlı.

## Q
SRC: PS5 Q2b
EN: Using $\widehat{\text{TestScore}} = 620.4 - 3.82\times CS$, if class size increases from 19 to 23, the predicted change in the test score is:
TR: Sınıf mevcudu 19'dan 23'e çıkarsa tahmini puan değişimi nedir?
+ $-15.28$
- $-3.82$
- $532.54$
- $+15.28$
EX: $\Delta\hat Y = \hat\beta_1\Delta X = -3.82\times4 = -15.28$. Sabit terim fark alınınca düşer.

## Q
SRC: PS5 Q4e
EN: The growth–trade share regression is steeper when Malta is included because:
TR: Malta dahil edilince doğru neden daha dik?
+ Malta is an outlier with a very large trade share and relatively high growth, pulling the line toward it
- Malta has the smallest trade share in the sample
- including more observations always increases the slope
- Malta has negative growth
EX: Uç $X$ değerli tek bir gözlem OLS doğrusunu kendine çeker (OLS kareleri küçülttüğü için). Bu, 3. varsayımın (büyük aykırı değer yok) neden önemli olduğunu gösterir.

## Q
SRC: PS5 Q1a
EN: In $\widehat{\text{TestScore}} = 698.93 - 2.28\times\text{STR}$, the intercept 698.93 is best described as:
TR: Sabit terim 698.93 nasıl yorumlanır?
+ the predicted score when STR $=0$, which is not meaningful because STR $=0$ is far outside the data
- the average test score in the sample
- the effect of one more student per teacher
- the highest test score in the sample
EX: Sabit, $X=0$ için tahmindir. STR'nin en küçük değeri 14 olduğu için literal yorum anlamsız.

## GEN regPredict
## GEN regChange
## GEN regMean

--- LESSON u5d | R² | Uyum ölçüleri: R² ve SER

## CARD Kareler toplamları ve R²
| Kısaltma | Ad | Formül |
| TSS | total sum of squares | $\sum(Y_i-\bar Y)^2$ |
| ESS | explained sum of squares | $\sum(\hat Y_i-\bar Y)^2$ |
| SSR | sum of squared residuals | $\sum\hat u_i^2$ |
TSS = ESS + SSR.
$$R^2 = \frac{ESS}{TSS} = 1 - \frac{SSR}{TSS}$$
• ==Regresyon R²==: $Y$'nin örneklem varyansının $X$ tarafından **açıklanan oranı**.
• $0\le R^2\le 1$ ve **birimsiz**.
• Tek regresörlü modelde $R^2 = r_{XY}^2$ (korelasyonun karesi).

## CARD Regresyonun standart hatası (SER)
==SER (standard error of the regression)==: hata terimi $u_i$'nin standart sapmasının tahmincisi.
$$SER = s_{\hat u} = \sqrt{\frac{SSR}{n-2}} = \sqrt{\frac{1}{n-2}\sum\hat u_i^2}$$
• $n-2$: iki katsayı ($\beta_0, \beta_1$) tahmin edildiği için serbestlik derecesi.
• **Birimi $Y$'nin birimiyle aynı** (dolar, puan...).
• Noktaların doğru etrafındaki tipik yayılımı.
:::ornek Kaliforniya
$R^2 = 0.051$: STR, test puanı varyansının %5.1'ini açıklıyor. $SER = 18.6$ puan: STR'ye bakarak yapılan tahminler sık sık büyük farkla yanılıyor.
:::

## CARD PS5 Soru 2d hilesi: R² ve SER'den s_Y
Bilinenler: $R^2 = 0.08$, $SER = 11.5$, $n=100$. İstenen: test puanlarının örneklem standart sapması $s_Y$.
1. $SSR = (n-2)\,SER^2$
2. $R^2 = 1-SSR/TSS \Rightarrow TSS = SSR/(1-R^2)$
3. $s_Y = \sqrt{TSS/(n-1)}$
$$s_Y = \sqrt{\frac{n-2}{n-1}\cdot\frac{SER^2}{1-R^2}} = \sqrt{\frac{98}{99}\cdot\frac{132.25}{0.92}} = 11.93$$

## Q
SRC: PS5 Q1j
EN: The regression $R^2$ is:
TR: Regresyon $R^2$'si nedir?
+ the fraction of the sample variance of $Y$ explained by $X$
- the correlation between $X$ and $Y$
- the standard deviation of the residuals
- the slope of the regression line
EX: $R^2$, $Y$'deki toplam değişkenliğin regresyonla açıklanan payı. Tek regresörde korelasyonun **karesi**dir, kendisi değil.

## Q
SRC: PS5 Q3b
EN: The SER in the earnings regression ($Y$ in dollars, $X$ in years) is measured in:
TR: Kazanç regresyonunda SER'in birimi nedir?
+ dollars
- years
- it is unit free
- dollars per year
EX: SER kalıntıların standart sapması. Kalıntılar $Y$ cinsinden olduğu için birimi dolar.

## Q
SRC: PS5 Q3c
EN: The $R^2$ is measured in:
TR: $R^2$'nin birimi nedir?
+ it is unit free
- units of $Y$
- units of $X$
- units of $Y$ squared
EX: $R^2$ iki kareler toplamının oranı. Birimler sadeleşir, yani birimsiz.

## Q
SRC: PS5 Q3c
EN: $R^2 = 0.023$ in the earnings–age regression means:
TR: Kazanç-yaş regresyonunda $R^2=0.023$ ne demek?
+ age explains only 2.3% of the variance of earnings
- the slope is 0.023
- the correlation between age and earnings is 0.023
- 2.3% of the observations lie on the regression line
EX: $R^2$ açıklanan varyans oranıdır, %2.3. Korelasyon $\sqrt{0.023} = 0.15$ olurdu.

## Q
EN: The SER divides the sum of squared residuals by:
TR: SER hesaplanırken SSR neye bölünür?
+ $n-2$
- $n$
- $n-1$
- $\sqrt n$
EX: İki katsayı tahmin edildiği için iki serbestlik derecesi kaybedilir: $n-2$.

## Q
EN: If the sample correlation between $X$ and $Y$ is $-0.6$, the $R^2$ of the regression of $Y$ on $X$ is:
TR: $r_{XY}=-0.6$ ise $Y$'nin $X$ üzerine regresyonunun $R^2$'si kaçtır?
+ $0.36$
- $-0.36$
- $0.6$
- $-0.6$
EX: $R^2 = r^2 = (-0.6)^2 = 0.36$. $R^2$ negatif olamaz.

## GEN r2Calc
## GEN serCalc
## GEN sdYfromR2

--- LESSON u5e | E(u|X) | En küçük kareler varsayımları

## CARD Üç varsayım
OLS tahminlerini **nedensel** yorumlamak için gereken üç varsayım:
**1. Sıfır koşullu ortalama (zero conditional mean):** $E(u_i\mid X_i) = 0$
**2. Rastgele örnekleme:** $(X_i, Y_i)$ gözlemler arasında i.i.d.
**3. Büyük aykırı değer yok:** $E(X_i^4)<\infty$, $E(Y_i^4)<\infty$
• En önemlisi **1. varsayım**.
• İdeal RCE'de $X$ rastgele atandığı için 1. varsayım makuldür.
• Gözlemsel veride 1. varsayımın tutup tutmadığını ciddi şekilde düşünmek gerekir.

## CARD 1. varsayım ne zaman bozulur?
Ders 2'den: $E(u\mid X)=0 \Rightarrow \text{corr}(X,u) = 0$.
Ters yönü (contrapositive): $\text{corr}(X,u)\ne0 \Rightarrow E(u\mid X)\ne0$.
:::ornek Kaliforniya
Bölge geliri test puanını etkiliyor ama modelde yok, yani $u$'nun içinde. Gelir STR ile de ilişkili (zengin bölgelerde sınıflar küçük). O zaman $\text{corr}(\text{STR}, u)\ne 0$ ve 1. varsayım **tutmaz**.
:::
Varsayımların iki rolü: (1) matematiksel: tutuyorlarsa OLS büyük örneklemde tutarlı ve normal dağılımlı, yani çıkarım yapılabilir. (2) OLS'nin nedensel etkiyi bulmakta zorlandığı durumları organize etmek.

## CARD PS5 Soru 5: LIE ile üç ispat
$E(u_i\mid X_i) = 0$ varsay.
**(i)** $E(u_i) = E[E(u_i\mid X_i)] = E(0) = 0$
**(ii)** $E(X_iu_i) = E[X_iE(u_i\mid X_i)] = E(X_i\cdot0) = 0$
**(iii)** $\text{cov}(X_i,u_i) = E(X_iu_i) - E(X_i)E(u_i) = 0 - E(X_i)\cdot 0 = 0$
(ii)'de $X_i$'yi koşullu beklentinin dışına çıkarabiliriz, çünkü $X_i$ bilindiğinde sabittir.

## Q
SRC: PS5 Q1l
EN: The three least squares assumptions are:
TR: Üç en küçük kareler varsayımı hangileridir?
+ $E(u_i\mid X_i)=0$; $(X_i,Y_i)$ are i.i.d.; large outliers are unlikely
- homoskedasticity; normality; $R^2>0.5$
- $\hat\beta_1>0$; $n>30$; $X$ is binary
- $u_i$ normal; $X$ fixed; no intercept
EX: Sıfır koşullu ortalama, rastgele örnekleme (i.i.d.), büyük aykırı değer yok. Homoskedastisite ve normallik **ek** varsayımlardır (Hafta 6).

## Q
EN: Which least squares assumption is the most important to consider in practice?
TR: Pratikte en önemli en küçük kareler varsayımı hangisi?
+ $E(u_i\mid X_i) = 0$
- $(X_i, Y_i)$ are i.i.d.
- finite fourth moments
- the errors are normally distributed
EX: Ders notu açıkça söylüyor: sıfır koşullu ortalama varsayımı pratikte en önemlisi. Tutmazsa $\hat\beta_1$ yanlı olur.

## Q
SRC: PS5 Q5
EN: If $E(u_i\mid X_i) = 0$, then by the law of iterated expectations:
TR: $E(u_i\mid X_i)=0$ ise LIE ile ne elde edilir?
+ $E(u_i)=0$, $E(X_iu_i)=0$ and $\text{cov}(X_i,u_i)=0$
- $u_i = 0$ for all $i$
- $\text{var}(u_i\mid X_i)$ is constant
- $X_i$ and $Y_i$ are independent
EX: PS5 Soru 5'in üç sonucu. Sabit koşullu varyans (homoskedastisite) ise ayrı bir varsayım.

## Q
EN: In the test score regression, average district income is omitted and is correlated with STR. This means:
TR: Bölge geliri modelde yok ve STR ile ilişkili. Bu ne demektir?
+ $E(u\mid \text{STR})\ne0$, so the first least squares assumption fails
- the random sampling assumption fails
- there are large outliers
- the $R^2$ must be zero
EX: Gelir $u$'nun içinde ve STR ile ilişkili, yani $\text{corr}(X,u)\ne0$. Bu da $E(u\mid X)\ne0$ demek.

## Q
EN: In an ideal randomized controlled experiment, the assumption $E(u\mid X)=0$ is plausible because:
TR: İdeal RCE'de $E(u\mid X)=0$ neden makuldür?
+ $X$ is randomly assigned, so it is unrelated to the other factors in $u$
- the sample size is always large
- the errors are normal
- $X$ is always binary
EX: Rastgele atamada $X$, kişilerin diğer özelliklerinden bağımsızdır, dolayısıyla $u$ ile ilişkisizdir.

## Q
EN: The assumption "large outliers are unlikely" is stated formally as:
TR: "Büyük aykırı değer yok" varsayımı formel olarak nasıl yazılır?
+ $E(X_i^4)<\infty$ and $E(Y_i^4)<\infty$
- $E(u_i)=0$
- $\text{var}(u_i\mid X_i) = \sigma^2$
- $|X_i|<1$ for all $i$
EX: Sonlu dördüncü momentler (kurtosis sonlu): çok uç değerlerin olasılığı düşük demek.

## Q
SRC: PS5 Q1l
EN: The random sampling assumption states that:
TR: Rastgele örnekleme varsayımı ne der?
+ $(X_i,Y_i)$, $i=1,\dots,n$, are independently and identically distributed
- $X_i$ is the same for all $i$
- $u_i$ is normally distributed
- $Y_i$ is a random variable but $X_i$ is not
EX: 2. varsayım: gözlemler i.i.d. Basit rastgele örneklemle sağlanır.

--- LESSON u5f | ~ | OLS'nin örnekleme dağılımı

## CARD β̂ de rassal
$\hat\beta_0$ ve $\hat\beta_1$ rassal $Y_i, X_i$'lerden hesaplanan formüller, bu yüzden **rassal değişkenlerdir**. Örneklemden örnekleme farklı değer alırlar. ==Örnekleme dağılımları (sampling distribution)== bu değerlerin dağılımıdır.
Anahtar ayrıştırma:
$$\hat\beta_1 = \beta_1 + \frac{\sum(X_i-\bar X)u_i}{\sum(X_i-\bar X)^2}$$

## CARD Yansızlık ve tutarlılık
**Yansız:** 1. ve 2. varsayımlar altında $E(u_i\mid X_1,\dots,X_n) = 0$, yani $E(\hat\beta_1\mid X) = \beta_1$. LIE ile $E(\hat\beta_1) = \beta_1$. Aynı şekilde $E(\hat\beta_0)=\beta_0$.
**Büyük örneklem (Teorem 1):** üç varsayım altında $\hat\beta_0, \hat\beta_1$ ortak normal dağılır:
$$\hat\beta_1\overset{A}{\sim}N\!\left(\beta_1,\ \sigma^2_{\hat\beta_1}\right),\qquad \sigma^2_{\hat\beta_1} = \frac1n\,\frac{\text{var}\big((X_i-\mu_X)u_i\big)}{[\text{var}(X_i)]^2}$$
• Varyans $1/n$ ile orantılı: $n\to\infty$ iken 0'a gider. Yansızlıkla birlikte bu **tutarlılık** demek.
• $\text{var}(X_i)$ paydada (karesi): $X$ ne kadar çok yayılırsa $\hat\beta_1$ o kadar **kesin**.
• Normallik CLT'den gelir.
• Bu varyans bilinmeyen terimler içeriyor. Çıkarım için tahmin edilmesi gerekir (Hafta 6).

## Q
EN: Under the least squares assumptions, the variance of $\hat\beta_1$ is:
TR: Varsayımlar altında $\hat\beta_1$'in varyansı nasıl davranır?
+ inversely proportional to $n$
- proportional to $n$
- independent of $n$
- equal to $\text{var}(Y)$
EX: $\sigma^2_{\hat\beta_1}\propto 1/n$. Örneklem büyüdükçe tahmin daha kesinleşir.

## Q
EN: Holding everything else fixed, a larger variance of the regressor $X$ leads to:
TR: Diğer her şey sabitken, $X$'in varyansının büyük olması neye yol açar?
+ a smaller variance of $\hat\beta_1$
- a larger variance of $\hat\beta_1$
- a biased $\hat\beta_1$
- a smaller $R^2$
EX: $\text{var}(X)^2$ paydada. $X$ çok yayıldığında eğimi belirlemek kolaylaşır.

## Q
EN: Unbiasedness of $\hat\beta_1$, i.e. $E(\hat\beta_1)=\beta_1$, follows mainly from:
TR: $\hat\beta_1$'in yansızlığı esas olarak nereden gelir?
+ $E(u_i\mid X_i)=0$ and i.i.d. sampling
- homoskedasticity of the errors
- normality of the errors
- a large $R^2$
EX: Yansızlık için 1. ve 2. varsayımlar yeterli. Homoskedastisite ya da normallik gerekmez.

## Q
EN: In large samples, $\hat\beta_1$ is approximately normally distributed because of:
TR: Büyük örneklemde $\hat\beta_1$'in yaklaşık normal dağılmasının nedeni nedir?
+ the central limit theorem
- the assumption that $u$ is normal
- the law of iterated expectations
- the Gauss–Markov theorem
EX: $\hat\beta_1 - \beta_1$, $(X_i-\bar X)u_i$'lerin ortalamasına bağlı. CLT bu ortalamanın normal dağıldığını söyler.

## Q
EN: Since $\hat\beta_1$ is unbiased and its variance shrinks to zero as $n\to\infty$, $\hat\beta_1$ is:
TR: $\hat\beta_1$ yansız ve varyansı sıfıra gidiyorsa, $\hat\beta_1$:
+ consistent
- efficient in every sample
- exactly normal in small samples
- equal to $\beta_1$
EX: Yansızlık ve sıfıra giden varyans birlikte tutarlılığı verir.

## GEN seScale
`);
