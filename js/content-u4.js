CONTENT.push(String.raw`
=== UNIT u4 | Hafta 4 | İstatistik | Tahminci özellikleri, hipotez testi, p-değeri, güven aralığı

--- LESSON u4a | μ̂ | Tahminci ve iyi tahmincinin özellikleri

## CARD Tahminci ve tahmin
• ==Tahminci (estimator)==: anakütlenin bilinmeyen bir özelliğini tahmin eden **formül**. Örneklem verisinin fonksiyonudur, ör. $\bar Y$. Örneklemden örnekleme değiştiği için **rassaldır**.
• ==Tahmin (estimate)==: tahmincinin belli bir örneklemde hesaplanan **sayısal değeri**. Rassal değildir, bir sayıdır.
Örnek: $\bar Y = \frac1n\sum Y_i$ tahminci, "$\bar Y = 1230$" ise tahmin.

## CARD Üç iyi özellik
$\hat\mu_Y$, $\mu_Y$'nin tahmincisi olsun:
• ==Yansız (unbiased)==: $E(\hat\mu_Y) = \mu_Y$. Ortalamada doğruyu bulur, **her** $n$ için.
• ==Tutarlı (consistent)==: $\hat\mu_Y\xrightarrow{p}\mu_Y$. $n$ büyüdükçe doğruya yaklaşır.
• ==Etkin (efficient)==: iki yansız tahminci arasında **varyansı daha küçük** olan daha etkindir.
$\bar Y$, basit rastgele örneklemede ==BLUE (Best Linear Unbiased Estimator)==: doğrusal yansız tahminciler arasında varyansı en küçük olan.
:::ipucu Tutarlılığı göstermenin yolu
Yansız ve varyansı $n\to\infty$ iken 0'a gidiyorsa tutarlıdır. $\bar Y$ için $\text{var}=\sigma^2/n\to0$.
:::

## CARD Ağırlıklı ortalama hilesi (PS4 Soru 5)
$\hat\mu = w_1Y_1 + w_2Y_2 + \dots$, $Y_i$ i.i.d. $(\mu, \sigma^2)$ olsun:
$$E(\hat\mu) = \mu\sum w_i \qquad \text{var}(\hat\mu) = \sigma^2\sum w_i^2$$
**Ağırlıkların toplamı 1 ise yansız.** Ağırlıklar ne kadar eşitse varyans o kadar küçük.
:::ornek PS4 Soru 5: Y ~ χ²_m (E = m, var = 2m)
| Tahminci | Ağırlıklar | $E$ | var |
| $\hat m_1 = Y_1$ | (1) | $m$ | $2m$ |
| $\hat m_2 = \frac{Y_1+Y_2}{2}$ | (½, ½) | $m$ | $m$ |
| $\hat m_3 = \frac{Y_1+2Y_2}{3}$ | (⅓, ⅔) | $m$ | $\frac{10m}{9}$ |
| $\hat m_4 = \bar Y$ | (⅓, ⅓, ⅓) | $m$ | $\frac{6m}{9} = \frac{2m}{3}$ |
Hepsi yansız. En etkini $\hat m_4 = \bar Y$, çünkü varyansı en küçük.
:::

## CARD Bernoulli oranı p̂
$Y_i$ Bernoulli$(p)$ ise $\hat p$ = örneklemdeki 1'lerin oranı $= \bar Y$.
$$E(\hat p) = p \qquad \text{var}(\hat p) = \frac{p(1-p)}{n}$$
Seçim anketi gibi oran sorularında bunu kullanırız.

## Q
SRC: PS4 Q1a
EN: Which statement about an estimator and an estimate is correct?
TR: Tahminci ve tahmin hakkında hangisi doğrudur?
+ An estimator is a random variable; an estimate is a nonrandom number computed from a specific sample.
- An estimator is a number; an estimate is a formula.
- Both are random variables.
- Both are the true population parameter.
EX: Tahminci formüldür ve örneklemden örnekleme değişir (rassal). Tahmin, o formülün bir örneklemdeki sayısal sonucudur.

## Q
SRC: PS4 Q1b
EN: $\hat\mu_Y$ is an unbiased estimator of $\mu_Y$ if:
TR: $\hat\mu_Y$ ne zaman $\mu_Y$'nin yansız tahmincisidir?
+ $E(\hat\mu_Y) = \mu_Y$
- $\hat\mu_Y\xrightarrow{p}\mu_Y$
- $\text{var}(\hat\mu_Y) = 0$
- $\hat\mu_Y = \mu_Y$ in every sample
EX: Yansızlık: örnekleme dağılımının merkezi gerçek değerde, yani $E(\hat\mu_Y)=\mu_Y$.

## Q
SRC: PS4 Q1b
EN: An efficient estimator is one that:
TR: Etkin tahminci nedir?
+ has the smallest variance among unbiased estimators
- is always equal to the population value
- converges in probability to the population value
- uses the largest sample size
EX: Etkinlik varyansla ilgilidir: yansız tahminciler arasında en küçük varyans.

## Q
EN: Suppose you use only the first observation, $Y_1$, to estimate $\mu_Y$. This estimator is:
TR: $\mu_Y$'yi tahmin etmek için sadece ilk gözlemi ($Y_1$) kullanırsan bu tahminci:
+ unbiased but not consistent
- consistent but biased
- both unbiased and consistent
- neither unbiased nor consistent
EX: $E(Y_1)=\mu_Y$, yani yansız. Ama varyansı $\sigma^2$, $n$ büyüse de küçülmez, bu yüzden tutarlı değil.

## Q
SRC: PS4 Q5
EN: $Y_1, Y_2, Y_3$ are i.i.d. $\chi^2_m$. Which estimator of $m$ is the most efficient: $Y_1$, $\frac{Y_1+Y_2}{2}$, $\frac{Y_1+2Y_2}{3}$, or $\bar Y$?
TR: $Y_1, Y_2, Y_3$ i.i.d. $\chi^2_m$. Bu dört tahminciden en etkini hangisi?
+ $\bar Y = (Y_1+Y_2+Y_3)/3$
- $Y_1$
- $(Y_1+Y_2)/2$
- $(Y_1+2Y_2)/3$
EX: Hepsi yansız. Varyanslar sırayla $2m$, $m$, $10m/9$, $2m/3$. En küçüğü $\bar Y$'nin.

## Q
SRC: PS4 Q5
EN: With $Y_i$ i.i.d. $\chi^2_m$, the variance of $(Y_1+2Y_2)/3$ is:
TR: $Y_i$ i.i.d. $\chi^2_m$ ise $(Y_1+2Y_2)/3$'ün varyansı nedir?
+ $10m/9$
- $m$
- $2m/3$
- $6m/9$
EX: $\text{var} = \frac{1}{9}[\text{var}(Y_1)+4\text{var}(Y_2)] = \frac{2m + 8m}{9} = \frac{10m}{9}$.

## Q
EN: If $Y_i$ are i.i.d. Bernoulli$(p)$ and $\hat p = \bar Y$, then $\text{var}(\hat p)$ equals:
TR: $\hat p=\bar Y$ ise $\text{var}(\hat p)$ nedir?
+ $p(1-p)/n$
- $p(1-p)$
- $p/n$
- $\sqrt{p(1-p)/n}$
EX: $\text{var}(\bar Y) = \sigma^2/n$ ve Bernoulli'de $\sigma^2 = p(1-p)$. Karekökü standart hatadır, varyans değil.

## GEN estimator

--- LESSON u4b | H₀ | Hipotez testinin mantığı

## CARD Sıfır ve alternatif hipotez
==Hipotez==: rassal değişkenin bir özelliği (ör. ortalaması) hakkındaki iddia.
• ==Sıfır hipotezi (null hypothesis)== $H_0$: test edilen iddia, **eşitlik** içerir. Örnek $H_0: \mu_Y = 20$.
• ==Alternatif hipotez (alternative)== $H_1$: $H_0$ doğru değilse geçerli olan.
  – ==İki yönlü (two-sided)==: $H_1:\mu_Y\ne 20$
  – ==Tek yönlü (one-sided)==: $H_1:\mu_Y>20$ ya da $H_1:\mu_Y<20$
:::dikkat Reddedememek ≠ doğru olduğunu kanıtlamak
$H_0$'ı reddedemiyorsak sadece "örneklemde onu reddetmeye yetecek istatistiksel kanıt yok" deriz.
:::

## CARD İki tür hata ve anlamlılık düzeyi
| | $H_0$ doğru | $H_0$ yanlış |
| $H_0$'ı reddet | ==Tip I hata== | doğru karar |
| Reddetme | doğru karar | ==Tip II hata== |
• **Tip I:** doğru olan $H_0$'ı reddetmek.
• **Tip II:** yanlış olan $H_0$'ı reddetmemek.
İkisi aynı anda en aza indirilemez. Bu yüzden Tip I hata olasılığı önceden seçilir: ==anlamlılık düzeyi (significance level)== $\alpha$. Genelde %1, %5, %10.
$\alpha = 0.05$: "doğru $H_0$'ı 100 örneklemden 5'inde reddetmeyi kabul ediyorum."

## CARD Test adımları
1. $H_0$ ve $H_1$'i yaz.
2. Anlamlılık düzeyini ($\alpha$) seç.
3. ==Test istatistiğini (test statistic)== hesapla.
4. Karar ver: reddet ya da reddetme.

## Q
SRC: PS4 Q1f
EN: The significance level of a test is:
TR: Bir testin anlamlılık düzeyi nedir?
+ the probability of rejecting the null hypothesis when it is true (Type I error)
- the probability of failing to reject a false null hypothesis
- the probability that the null hypothesis is true
- one minus the p-value
EX: $\alpha$ = Tip I hata olasılığı = doğru $H_0$'ı reddetme olasılığı.

## Q
EN: A Type II error occurs when we:
TR: Tip II hata ne zaman yapılır?
+ fail to reject a false null hypothesis
- reject a true null hypothesis
- reject a false null hypothesis
- fail to reject a true null hypothesis
EX: Tip II: $H_0$ aslında yanlış ama biz reddetmiyoruz. Tip I'in tersi.

## Q
SRC: PS4 Q1d
EN: A researcher wants to test whether mean hourly earnings exceed 20. The appropriate alternative hypothesis is:
TR: Ortalama saatlik kazancın 20'yi aşıp aşmadığı test edilecek. Doğru alternatif hipotez hangisi?
+ $H_1: \mu_Y > 20$
- $H_1: \mu_Y \ne 20$
- $H_1: \mu_Y < 20$
- $H_1: \mu_Y = 20$
EX: "Aşıyor mu" tek yönlü, sağ taraf: $\mu_Y>20$. Eşitlik her zaman $H_0$'dadır.

## Q
EN: "We fail to reject $H_0$ at the 5% level" means:
TR: "$H_0$'ı %5 düzeyinde reddedemiyoruz" ne demektir?
+ the sample does not provide enough statistical evidence against $H_0$
- $H_0$ is proven to be true
- $H_0$ is false with 95% probability
- the test statistic is larger than the critical value
EX: Reddedememek $H_0$'ın doğru olduğunu kanıtlamaz, sadece yeterli kanıt yok demektir.

## Q
SRC: PS4 Q1c
EN: The null hypothesis is:
TR: Sıfır hipotezi nedir?
+ the hypothesis to be tested, usually stated with an equality
- the hypothesis that holds if the test statistic is large
- always that the parameter is zero
- the hypothesis the researcher believes is true
EX: $H_0$ test edilen iddiadır. Sıfır olmak zorunda değil, ör. $\mu=20$.

## Q
SRC: PS4 Q1d
EN: $H_0:\mu_Y=0.5$ versus $H_1:\mu_Y\ne0.5$ is a:
TR: $H_0:\mu_Y=0.5$, $H_1:\mu_Y\ne0.5$ testi nedir?
+ two-sided test
- one-sided test to the right
- one-sided test to the left
- test of a Type II error
EX: "≠" iki yönlü alternatif: gerçek değer her iki tarafta da olabilir.

## GEN hypSetup

--- LESSON u4c | t | t istatistiği, kritik değer, p-değeri

## CARD t istatistiği
$$t = \frac{\text{tahminci} - \text{hipotez değeri}}{\text{tahmincinin standart hatası}} = \frac{\bar Y - \mu_{Y,0}}{SE(\bar Y)}$$
==Standart hata (standard error)==: $SE(\bar Y) = s_{\bar Y} = \frac{s_Y}{\sqrt n} = \sqrt{s_Y^2/n}$
Burada $s^2_Y = \frac{1}{n-1}\sum(Y_i-\bar Y)^2$ örneklem varyansıdır.
CLT sayesinde $H_0$ doğruysa ve $n$ büyükse $t\approx N(0,1)$.
:::dikkat s mi s² mi?
Soru "sample variance $s^2_Y = 0.2484$" diyorsa önce karekök al ya da direkt $\sqrt{s^2/n}$ yaz. Örnek: $\sqrt{0.2484/500} = 0.0223$.
:::

## CARD Ret bölgesi ve kritik değerler
| $H_1$ | Reddet eğer | %10 | %5 | %1 |
| $\mu>c$ | $t > z_\alpha$ | 1.28 | 1.645 | 2.33 |
| $\mu<c$ | $t < -z_\alpha$ | −1.28 | −1.645 | −2.33 |
| $\mu\ne c$ | $\lvert t\rvert > z_{\alpha/2}$ | 1.645 | 1.96 | 2.576 |
==Kritik değer (critical value)==: testin tam reddettiği sınır değer. ==Ret bölgesi (rejection region)==: $H_0$'ın reddedildiği test istatistiği değerleri.
Örnek: iki yönlü, %5, $t = 2$ → $|2| > 1.96$ → %5 düzeyinde $H_0$ reddedilir.

## CARD p-değeri
==p-değeri (p-value)==: $H_0$ doğruyken, en az hesaplanan kadar uç (ya da daha uç) bir test istatistiği elde etme olasılığı.
• İki yönlü: $p = 2\Phi(-|t|)$
• Sağ kuyruk ($H_1:\mu>c$): $p = 1-\Phi(t)$
• Sol kuyruk ($H_1:\mu<c$): $p = \Phi(t)$
**Kural: $p<\alpha$ ise $H_0$'ı reddet.** p ne kadar küçükse $H_0$ aleyhine kanıt o kadar güçlü.
Örnek: $t=2$, iki yönlü: $p = 2\Phi(-2) = 0.0455 < 0.05$ → reddet.

## CARD PS4 Soru 4 çözümü
$n=500$, $\bar Y = 0.54$, $s^2_Y = 0.2484$, $H_0:\mu=0.5$.
**a)** $SE(\bar Y) = \sqrt{0.2484/500} = 0.0223$
**b)** $t = (0.54-0.5)/0.0223 = 1.79$. İki yönlü: $p = 2\Phi(-1.79) = 0.073 > 0.05$ → **reddedilemez**.
**c)** Tek yönlü ($\mu>0.5$): $p = 1-\Phi(1.79) = 0.037 < 0.05$ → **reddedilir**.
**d)** Fark, testlerden birinin iki yönlü diğerinin tek yönlü olmasından. Tek yönlü p-değeri, iki yönlününkinin yarısı.
**e)** İki yönlü testte anlamlı kanıt yok, tek yönlü testte var.
:::ipucu Çözüm setindeki yuvarlama
Resmi çözüm SE'yi 0.022'ye yuvarlıyor, bu yüzden $t=1.82$, $p=0.069$ ve $0.035$ çıkıyor. Kararlar aynı.
:::
Küçük örneklem notu: $Y$ normal ve $n$ küçükse ($<30$) t istatistiği tam olarak $t_{n-1}$ dağılır.

## Q
SRC: PS4 Q1g
EN: The p-value is:
TR: p-değeri nedir?
+ the probability, computed under $H_0$, of obtaining a test statistic at least as adverse to $H_0$ as the one actually computed
- the probability that $H_0$ is true
- the probability of a Type II error
- the significance level chosen by the researcher
EX: p-değeri $H_0$ altında hesaplanır: "$H_0$ doğru olsaydı bu kadar uç bir sonuç görme olasılığım neydi?" $H_0$'ın doğru olma olasılığı değildir.

## Q
EN: For a two-sided test at the 5% significance level using the normal approximation, the critical value is:
TR: Normal yaklaşımla %5 düzeyinde iki yönlü testin kritik değeri nedir?
+ $1.96$
- $1.645$
- $2.576$
- $1.28$
EX: İki yönlüde $\alpha$ iki kuyruğa bölünür: her kuyrukta %2.5. $z_{0.025} = 1.96$.

## Q
EN: For a one-sided test ($H_1:\mu>c$) at the 5% level, we reject $H_0$ if:
TR: %5 düzeyinde tek yönlü test ($H_1:\mu>c$). Ne zaman reddederiz?
+ $t > 1.645$
- $t > 1.96$
- $|t| > 1.645$
- $t < -1.645$
EX: Tek yönlüde %5'in tamamı sağ kuyruktadır. $z_{0.05}=1.645$.

## Q
SRC: PS4 Q4a
EN: With $n=500$ and sample variance $s^2_Y = 0.2484$, the standard error of $\bar Y$ is approximately:
TR: $n=500$, $s^2_Y=0.2484$. $SE(\bar Y)$ yaklaşık kaçtır?
+ $0.0223$
- $0.0005$
- $0.4984$
- $0.0111$
EX: $SE = \sqrt{s^2_Y/n} = \sqrt{0.2484/500} = \sqrt{0.000497} = 0.0223$. Karekökü almazsan 0.0005 bulursun, tuzak bu.

## Q
SRC: PS4 Q4d
EN: In PS4 Q4, the two-sided p-value is about 0.07 but the one-sided p-value is about 0.035. Why do they differ?
TR: İki yönlü p ≈ 0.07, tek yönlü p ≈ 0.035. Neden farklı?
+ The one-sided p-value uses only one tail, so it is half of the two-sided p-value.
- The one-sided test uses a different sample.
- The two-sided test uses the $t$ distribution.
- The standard error is different in the two tests.
EX: Aynı t istatistiği. İki yönlüde iki kuyruk toplanır ($2\Phi(-|t|)$), tek yönlüde sadece bir kuyruk.

## Q
EN: If the p-value is 0.03, then $H_0$ is:
TR: p-değeri 0.03 ise $H_0$:
+ rejected at the 5% level but not at the 1% level
- rejected at both the 5% and 1% levels
- not rejected at the 5% level
- rejected only at the 1% level
EX: Kural $p<\alpha$: $0.03<0.05$ reddet, $0.03>0.01$ reddetme.

## Q
SRC: PS4 Q1h
EN: The critical value of a test is:
TR: Testin kritik değeri nedir?
+ the value of the test statistic at which the test just rejects $H_0$ at the given significance level
- the value of the estimator under $H_0$
- the p-value of the test
- the probability of a Type I error
EX: Kritik değer ret bölgesinin sınırıdır. Ret bölgesi, $H_0$'ın reddedildiği tüm değerlerdir.

## GEN tMean
## GEN pValue

--- LESSON u4d | [ ] | Güven aralığı

## CARD %95 güven aralığı
==Güven aralığı (confidence interval, CI)==: tüm olası rastgele örneklemlerin belli bir yüzdesinde gerçek $\mu_Y$'yi içerecek şekilde kurulan aralık.
$$\%95\text{ GA: } \bar Y \pm 1.96\times SE(\bar Y)$$
| Güven | Kritik değer |
| %90 | 1.645 (1.64) |
| %95 | 1.96 |
| %99 | 2.576 (2.58) |
Güven arttıkça kritik değer büyür, **aralık genişler**.
:::dikkat Doğru yorum
"Tekrarlanan örneklemelerde kurulan aralıkların %95'i gerçek $\mu$'yü içerir." Elindeki tek aralık için "%95 olasılıkla $\mu$ burada" demek doğru değil, çünkü $\mu$ sabit, aralık rastgele.
:::

## CARD Güven aralığı ile test
%95 GA, %5 düzeyinde iki yönlü testte **reddedilemeyen** tüm değerlerin kümesidir.
• $H_0$ değeri aralığın **dışındaysa**: %5'te reddet.
• Aralığın **içindeyse**: reddedemezsin.

## CARD PS4 Soru 3 ve seçim anketi
**PS4 Soru 3:** $n=800$, $\bar Y = 1230$, $s_Y = 145$. $SE = 145/\sqrt{800} = 5.126$.
• %95: $1230\pm1.96(5.126) = (1219.95,\ 1240.05)$
• %99: $1230\pm2.58(5.126) = (1216.77,\ 1243.23)$
**Seçim anketi (ders örneği 8):** 400 kişiden 215'i mevcut adayı destekliyor, $\hat p = 0.5375$.
$SE(\hat p) = \sqrt{\hat p(1-\hat p)/n} = 0.0249$
• $H_0: p=0.5$, $H_1:p>0.5$: $t = 1.506$, $p = 0.066$. %5'te reddedilemez.
• %95 GA: $(0.4887,\ 0.5863)$, %99 GA: $(0.4735,\ 0.6015)$. İkisi de 0.5'i içeriyor.
• %99 neden daha geniş? Kritik değer daha büyük (2.57 > 1.96). Aralık, tüm olası örneklemlerin %95'i yerine %99'unda gerçek değeri içermek zorunda.

## Q
SRC: PS4 Q3
EN: A sample of 800 seniors has $\bar Y=1230$ and $s_Y=145$. The 95% confidence interval for the population mean is approximately:
TR: $n=800$, $\bar Y=1230$, $s_Y=145$. Anakütle ortalaması için %95 GA yaklaşık nedir?
+ $(1219.95,\ 1240.05)$
- $(945.8,\ 1514.2)$
- $(1216.77,\ 1243.23)$
- $(1221.57,\ 1238.43)$
EX: $SE = 145/\sqrt{800} = 5.126$. $1230\pm1.96(5.126) = 1230\pm10.05$. $(1216.77, 1243.23)$ %99 aralığı. $1230\pm1.96(145)$ ise SE yerine $s$ kullanma hatası.

## Q
SRC: PS4 Q1i
EN: The correct interpretation of a 95% confidence interval for $\mu_Y$ is:
TR: $\mu_Y$ için %95 güven aralığının doğru yorumu hangisi?
+ In repeated samples, 95% of the intervals constructed this way contain the true $\mu_Y$.
- There is a 95% probability that $\mu_Y$ lies in this particular interval.
- 95% of the observations lie within the interval.
- The sample mean is within the interval 95% of the time.
EX: Rastgele olan aralıktır, $\mu_Y$ değil. Doğru yorum tekrarlanan örneklemelerle ilgilidir.

## Q
EN: Why is a 99% confidence interval wider than a 95% interval?
TR: %99 güven aralığı neden %95'ten daha geniş?
+ It must contain the true value in 99% of all possible samples, so it uses a larger critical value.
- It uses a larger sample.
- It uses a smaller standard error.
- It is a one-sided interval.
EX: Mekanik olarak kritik değer büyür (2.58 > 1.96). Özünde daha fazla örneklemde doğruyu yakalamak zorunda olduğu için genişler.

## Q
EN: The 95% confidence interval for $\mu_Y$ is $(4.2,\ 6.8)$. At the 5% level, the hypothesis $H_0:\mu_Y = 7$:
TR: %95 GA $(4.2, 6.8)$. %5 düzeyinde $H_0:\mu_Y=7$ için karar?
+ is rejected, because 7 is outside the interval
- is not rejected, because 7 is close to the interval
- cannot be tested with a confidence interval
- is rejected only at the 10% level
EX: Değer aralığın dışındaysa %5'te reddedilir. 7 > 6.8.

## Q
EN: A poll of 400 voters finds $\hat p = 0.5375$. The standard error of $\hat p$ is approximately:
TR: 400 kişilik ankette $\hat p=0.5375$. $SE(\hat p)$ yaklaşık kaçtır?
+ $0.0249$
- $0.0006$
- $0.4986$
- $0.0013$
EX: $\sqrt{\hat p(1-\hat p)/n} = \sqrt{0.5375\times0.4625/400} = \sqrt{0.000621} = 0.0249$.

## GEN ciMean
## GEN ciProp
## GEN ciTest

--- LESSON u4e | Δ | İki ortalamanın farkı

## CARD Fark testi
Kadın ve erkek mezunların ortalama kazancı farklı mı? $\mu_m-\mu_w = d_0$ test edilir.
• Tahminci: $\bar Y_m - \bar Y_w$
• İki örneklem bağımsız olduğu için varyanslar **toplanır**:
$$SE(\bar Y_m-\bar Y_w) = \sqrt{\frac{s^2_m}{n_m} + \frac{s^2_w}{n_w}}$$
$$t = \frac{(\bar Y_m-\bar Y_w) - d_0}{SE(\bar Y_m-\bar Y_w)}\approx N(0,1)$$
$$\%95\text{ GA: } (\bar Y_m-\bar Y_w)\pm1.96\,SE$$

## CARD Cinsiyet kazanç farkı tablosu
| Yıl | $\bar Y_m$ | $\bar Y_w$ | Fark | SE | %95 GA |
| 1992 | 23.27 | 20.05 | 3.22 | 0.33 | [2.58, 3.88] |
| 2008 | 24.98 | 20.87 | 4.11 | 0.35 | [3.41, 4.80] |
• 2008: $t = 4.11/0.35 = 11.7 > 2.58$, yani %1'de anlamlı.
• Fark büyük: saatte 4.11 dolar, yılda 8220 dolar eder. Oran olarak $4.11/24.98 = 16\%$.
• **Ama analiz farkın nedenini söylemez.** Ayrımcılık mı, beceri, deneyim ya da eğitim farkı mı, meslek seçimi mi? Bilemeyiz.

## Q
EN: Two independent samples have $s^2_m/n_m = 0.09$ and $s^2_w/n_w = 0.16$. The standard error of $\bar Y_m - \bar Y_w$ is:
TR: $s^2_m/n_m = 0.09$ ve $s^2_w/n_w=0.16$. Farkın standart hatası nedir?
+ $0.5$
- $0.7$
- $0.25$
- $0.1$
EX: $SE = \sqrt{0.09+0.16} = \sqrt{0.25} = 0.5$. Standart hatalar ($0.3+0.4=0.7$) toplanmaz, varyanslar toplanır.

## Q
EN: In 2008, the gender gap in hourly earnings was 4.11 with a standard error of 0.35. This tells us:
TR: 2008'de kazanç farkı 4.11, SE 0.35. Bu ne söyler?
+ the gap is statistically significant, but the analysis does not explain why the gap exists
- the gap is caused by discrimination
- the gap is not statistically significant at the 5% level
- men and women have the same mean earnings
EX: $t = 11.7$, son derece anlamlı. Ama fark analizi nedeni (ayrımcılık mı, beceri ya da meslek farkı mı) göstermez.

## Q
EN: The standard error used for testing the difference between two independent means is:
TR: İki bağımsız ortalamanın farkı testinde kullanılan standart hata hangisi?
+ $\sqrt{s^2_m/n_m + s^2_w/n_w}$
- $s_m/\sqrt{n_m} + s_w/\sqrt{n_w}$
- $\sqrt{s^2_m/n_m - s^2_w/n_w}$
- $(s_m - s_w)/\sqrt{n_m+n_w}$
EX: Bağımsız değişkenlerin farkının varyansı, varyansların **toplamıdır**. Karekökü SE'yi verir.

## GEN diffMeans
`);
