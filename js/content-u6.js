CONTENT.push(String.raw`
=== UNIT u6 | Hafta 6 | Regresyonda Çıkarım | β₁ için test ve güven aralığı, kukla değişken, heteroskedastisite

--- LESSON u6a | t | β₁ için hipotez testi

## CARD Aynı t, yeni tahminci
Hafta 4'teki mantığın birebir aynısı, sadece $\bar Y$ yerine $\hat\beta_1$:
$$t = \frac{\hat\beta_1 - c}{SE(\hat\beta_1)}\quad\text{ile}\quad H_0:\beta_1 = c$$
Büyük örneklemde, $H_0$ doğruysa $t\approx N(0,1)$.
En yaygın test: $H_0: \beta_1 = 0$, yani "$X$'in $Y$ üzerinde etkisi yok". Buna ==anlamlılık testi (significance test)== denir. Reddedersek "$\beta_1$ istatistiksel olarak anlamlı" deriz.
| $H_1$ | Reddet | p-değeri |
| $\beta_1\ne c$ | $\lvert t\rvert > z_{\alpha/2}$ | $2\Phi(-\lvert t\rvert)$ |
| $\beta_1>c$ | $t>z_\alpha$ | $1-\Phi(t)$ |
| $\beta_1<c$ | $t<-z_\alpha$ | $\Phi(t)$ |

## CARD R çıktısını okumak
~~~
Coefficients:
            Estimate Std. Error t value Pr(>|t|)
(Intercept) 698.9330     9.4675  73.825  < 2e-16 ***
str          -2.2798     0.4798  -4.751 2.78e-06 ***
Residual standard error: 18.58 on 418 degrees of freedom
Multiple R-squared:  0.05124
~~~
• **Estimate:** $\hat\beta$ • **Std. Error:** $SE(\hat\beta)$ • **t value** = Estimate / Std. Error, yani $H_0:\beta=0$ testi
• **Pr(>|t|):** iki yönlü p-değeri • **Residual standard error:** SER • **Multiple R-squared:** $R^2$
• Yıldızlar: ~***~ p<0.001, ~**~ p<0.01, ~*~ p<0.05, ~.~ p<0.1
Örnek: $t = -2.28/0.48 = -4.75$, $|t| > 1.96$ → %5'te reddet. $p = 2\Phi(-4.75)\approx 2\times10^{-6}$.

## CARD Sıfır dışı hipotez
Çıktıdaki t değeri her zaman $H_0:\beta_1=0$ içindir. Başka bir değer test ediliyorsa elle hesapla:
$H_0:\beta_1 = -1$ için: $t = \dfrac{-2.28-(-1)}{0.48} = -2.67$ → $|t|>1.96$, %5'te reddet.

## Q
EN: The $t$-statistic for testing $H_0:\beta_1 = c$ is:
TR: $H_0:\beta_1=c$ için t istatistiği hangisi?
+ $(\hat\beta_1 - c)/SE(\hat\beta_1)$
- $(\hat\beta_1 - c)/\text{var}(\hat\beta_1)$
- $\hat\beta_1/SE(\hat\beta_1) - c$
- $(c - \hat\beta_1)\cdot SE(\hat\beta_1)$
EX: (tahminci − hipotez değeri) / standart hata. Varyansa değil, standart hataya bölünür.

## Q
EN: In the test score regression, $\hat\beta_1 = -2.28$ with $SE(\hat\beta_1)=0.48$. For $H_0:\beta_1=0$ vs. $H_1:\beta_1\ne0$ at the 5% level:
TR: $\hat\beta_1=-2.28$, $SE=0.48$. %5'te iki yönlü $H_0:\beta_1=0$ testinin sonucu nedir?
+ $t\approx-4.75$, so we reject $H_0$
- $t\approx-1.09$, so we fail to reject $H_0$
- $t\approx-4.75$, so we fail to reject $H_0$ because $t$ is negative
- $t\approx-9.89$, so we reject $H_0$
EX: $t = -2.28/0.48 = -4.75$, $|t|=4.75>1.96$, reddet. İki yönlü testte işaret önemli değil, mutlak değere bakılır.

## Q
SRC: PS5 Q4c
EN: Regression output: tradeshare coefficient 2.3064, std. error 0.773, $t=2.982$, $P>|t| = 0.004$. At which levels is the coefficient significant?
TR: Katsayı 2.3064, SE 0.773, p = 0.004. Hangi düzeylerde anlamlı?
+ at the 1%, 5% and 10% levels
- only at the 10% level
- at the 5% and 10% levels but not at 1%
- not significant at any conventional level
EX: $p = 0.004 < 0.01$, yani %1'de bile anlamlı, dolayısıyla %5 ve %10'da da.

## Q
SRC: PS5 Q4d
EN: Excluding Malta: tradeshare coefficient 1.6809, std. error 0.987, $P>|t|=0.094$. The coefficient is:
TR: Malta hariç: katsayı 1.6809, SE 0.987, p = 0.094. Katsayı:
+ significant at the 10% level but not at the 5% level
- significant at the 1% level
- significant at the 5% level
- not significant at the 10% level
EX: $0.05 < 0.094 < 0.10$. Malta çıkınca kanıt zayıflıyor.

## Q
EN: In R output, the column "Pr(>|t|)" reports:
TR: R çıktısındaki "Pr(>|t|)" sütunu neyi gösterir?
+ the two-sided p-value for $H_0$: coefficient $=0$
- the probability that the coefficient is zero
- the one-sided p-value for $H_0$: coefficient $>0$
- the standard error of the coefficient
EX: R, her katsayı için $H_0:\beta=0$'a karşı iki yönlü p-değerini verir.

## GEN regT
## GEN regOutput

--- LESSON u6b | ± | β₁ için güven aralığı

## CARD Güven aralığı
$$\%95\text{ GA}: \left[\hat\beta_1 - 1.96\,SE(\hat\beta_1),\ \ \hat\beta_1 + 1.96\,SE(\hat\beta_1)\right]$$
%90 için 1.645, %99 için 2.576 (2.57) kullan.
Örnek: $-2.28\pm1.96(0.48) = [-3.22,\ -1.34]$
**İki eşdeğer tanım:**
1. %5 düzeyinde reddedilemeyen değerlerin kümesi.
2. Tekrarlanan örneklemelerde gerçek $\beta_1$'i %95 oranında içeren, veriye bağlı rastgele aralık.
:::dikkat Yorum
"Bu aralıkta $\beta_1$'in olma olasılığı %95" **değil**. Aralık bir tahmincidir ve örneklemden örnekleme değişir.
:::
Sıfır aralıkta değilse → $H_0:\beta_1=0$ %5'te reddedilir.

## CARD ΔX'in etkisi için güven aralığı
$X$ $\Delta x$ kadar değişirse beklenen etki $\beta_1\Delta x$:
$$\left[(\hat\beta_1-1.96SE)\Delta x,\ \ (\hat\beta_1+1.96SE)\Delta x\right]$$
:::ornek Sınıf mevcudunu 2 azaltmak ($\Delta x=-2$)
$[-3.22\times(-2),\ -1.34\times(-2)] = [2.68,\ 6.44]$ puan. Negatifle çarpınca uçlar yer değiştirir, küçüğü başa yaz.
:::

## Q
EN: $\hat\beta_1 = -2.28$ and $SE(\hat\beta_1) = 0.48$. The 95% confidence interval for $\beta_1$ is:
TR: $\hat\beta_1=-2.28$, $SE=0.48$. $\beta_1$ için %95 GA nedir?
+ $[-3.22,\ -1.34]$
- $[-3.07,\ -1.49]$
- $[-3.52,\ -1.04]$
- $[-2.76,\ -1.80]$
EX: $-2.28\pm1.96(0.48) = -2.28\pm0.94$. İkinci şık %90 (1.645), üçüncüsü %99 (2.576), sonuncusu ±1 SE.

## Q
EN: The 95% CI for $\beta_1$ is $[-3.22, -1.34]$. What is the 95% CI for the effect of reducing STR by 2?
TR: STR'yi 2 azaltmanın ($\Delta x=-2$) etkisi için %95 GA nedir?
+ $[2.68,\ 6.44]$
- $[-6.44,\ -2.68]$
- $[-1.61,\ -0.67]$
- $[1.34,\ 3.22]$
EX: Uçları $-2$ ile çarp: $(-3.22)(-2) = 6.44$, $(-1.34)(-2) = 2.68$. Küçükten büyüğe yaz: $[2.68, 6.44]$.

## Q
EN: If the 95% confidence interval for $\beta_1$ does **not** contain 0, then:
TR: $\beta_1$ için %95 GA 0'ı **içermiyorsa**:
+ $H_0:\beta_1=0$ is rejected at the 5% level (two-sided)
- $H_0:\beta_1=0$ is not rejected at the 5% level
- $\beta_1$ is exactly equal to $\hat\beta_1$
- the $R^2$ must be larger than 0.95
EX: GA, %5'te reddedilemeyen değerlerin kümesidir. 0 içinde değilse 0 reddedilir.

## Q
EN: The correct interpretation of a 95% CI for $\beta_1$ is:
TR: $\beta_1$ için %95 GA'nın doğru yorumu nedir?
+ the interval, a function of the data, contains the true $\beta_1$ in 95% of repeated samples
- there is a 95% probability that $\beta_1$ is in this particular interval
- 95% of the data points lie within the interval
- $\hat\beta_1$ is in the interval with probability 95%
EX: Rastgele olan aralıktır. Elimizdeki tek aralık için olasılık ifadesi kurulmaz.

## Q
EN: To construct a 99% confidence interval for $\beta_1$, the critical value is approximately:
TR: %99 güven aralığı için kritik değer yaklaşık kaçtır?
+ $2.58$
- $1.96$
- $1.645$
- $3.29$
EX: %99 için $z_{0.005}\approx2.576$ (derste 2.57 ya da 2.58).

## GEN regCI
## GEN regCIdx

--- LESSON u6c | D | Kukla (binary) regresör

## CARD X sadece 0 ya da 1 ise
==Kukla değişken (dummy / indicator / binary variable)==: 0 ya da 1 değerini alır. Örnekler: kadınsa 1, şehirliyse 1, sınıf küçükse 1.
$$Y_i = \beta_0 + \beta_1D_i + u_i$$
$D$ sürekli olmadığı için $\beta_1$'i eğim diye düşünmek anlamlı değil. İki durumu ayrı ayrı yaz:
• $D=0$: $E(Y\mid D=0) = \beta_0$
• $D=1$: $E(Y\mid D=1) = \beta_0+\beta_1$
$$\beta_1 = E(Y\mid D=1) - E(Y\mid D=0)$$
**$\beta_1$ iki grubun ortalamaları arasındaki fark.** $H_0:\beta_1=0$ testi, iki ortalamanın eşit olup olmadığının testidir.

## CARD Kaliforniya örneği
$D=1$ eğer STR < 20 (küçük sınıf), değilse 0.
~~~
            Estimate Std. Error t value Pr(>|t|)
(Intercept)  649.979      1.388 468.380  < 2e-16 ***
DTRUE          7.372      1.843   3.999 7.52e-05 ***
~~~
• Büyük sınıflı bölgelerin ortalama puanı: $\hat\beta_0 = 649.98$
• Küçük sınıflı bölgelerin ortalama puanı: $649.98+7.37 = 657.35$
• Fark 7.37 puan, $t = 4.0$, yani %1'de bile anlamlı.

## Q
EN: In $Y_i = \beta_0+\beta_1D_i+u_i$ where $D_i$ is binary, $\beta_1$ is:
TR: $D_i$ kukla değişkense $\beta_1$ nedir?
+ the difference between the population means of $Y$ for $D=1$ and $D=0$
- the slope of a continuous regression line
- the mean of $Y$ for $D=0$
- the probability that $D=1$
EX: $\beta_1 = E(Y\mid D=1)-E(Y\mid D=0)$, iki grup ortalamasının farkı.

## Q
EN: Using the estimates $\hat\beta_0 = 649.98$ and $\hat\beta_1 = 7.37$ (with $D=1$ if STR $<20$), the average test score in districts with STR $<20$ is:
TR: $D=1$ (STR<20) olan bölgelerin ortalama puanı nedir?
+ $657.35$
- $649.98$
- $7.37$
- $642.61$
EX: $D=1$: $\hat\beta_0+\hat\beta_1 = 649.98+7.37 = 657.35$. 649.98, $D=0$ grubunun ortalaması.

## Q
EN: In a regression on a binary regressor, $\beta_0$ is:
TR: Kukla regresörlü modelde $\beta_0$ nedir?
+ the population mean of $Y$ when $D=0$
- the population mean of $Y$ when $D=1$
- the difference in means between the two groups
- always zero
EX: $D=0$ yerine konunca $E(Y\mid D=0) = \beta_0$.

## Q
EN: A binary variable is also called:
TR: İkili (binary) değişkene başka ne ad verilir?
+ a dummy variable or an indicator variable
- a continuous variable
- an error term
- an instrumental variable
EX: Dummy, indicator ve binary aynı anlamda kullanılır.

## GEN dummyReg

--- LESSON u6d | σ² | Heteroskedastisite ve homoskedastisite

## CARD Tanım
• ==Homoskedastik (homoskedastic)==: $\text{var}(u_i\mid X_i) = \sigma^2$, yani $X$'e bağlı değil, **sabit**.
• ==Heteroskedastik (heteroskedastic)==: $\text{var}(u_i\mid X_i)$ $X$'e göre değişiyor.
Üç en küçük kareler varsayımı $u$'nun koşullu varyansı hakkında **hiçbir şey söylemedi**. Yani şu ana kadar dolaylı olarak heteroskedastisiteye izin verdik.
:::ornek Sezgi
Eğitim yılı arttıkça kazançların yayılımı da artar: lise mezunlarının maaşları birbirine yakınken üniversite mezunlarınınki çok farklıdır. Bu heteroskedastisitedir.
:::

## CARD Hangi standart hata?
• ==Heteroskedastisiteye dayanıklı SE (heteroskedasticity-robust, Eicker–Huber–White)==: Teorem 1'deki formülden gelir. **Her iki durumda da** geçerli.
• ==Sadece homoskedastisite SE'si (homoskedasticity-only)==: sadece homoskedastisite varsa geçerli. Heteroskedastisite varsa **yanlış** (tutarsız).
Homoskedastisite altında (Teorem 2) formül sadeleşir:
$$\sigma^2_{\hat\beta_1} = \frac{\sigma^2_u}{n\,\sigma^2_X}$$
:::dikkat Yazılımın varsayılanı
R'deki **lm** ve Python'daki **smf.ols** varsayılan olarak **homoskedastisite SE'si** hesaplar. Dayanıklı SE için R'de vcovHC(type="HC1"), Python'da fit(cov_type="HC1"). Örnek: STR katsayısının SE'si 0.480 (homo) ve 0.519 (robust).
:::
Stock & Watson'ın önerisi: **her zaman dayanıklı (robust) SE kullan.** $n$ büyükken homoskedastisite durumunda ikisi zaten aynı sonucu verir.

## Q
EN: The error term is homoskedastic if:
TR: Hata terimi ne zaman homoskedastiktir?
+ the variance of $u_i$ given $X_i$ is constant and does not depend on $X_i$
- the mean of $u_i$ given $X_i$ is zero
- $u_i$ is normally distributed
- $u_i$ and $X_i$ are correlated
EX: Homoskedastisite koşullu **varyansla** ilgilidir. Koşullu ortalamanın sıfır olması 1. varsayımdır.

## Q
EN: Which standard errors are valid whether the errors are homoskedastic or heteroskedastic?
TR: Hatalar homoskedastik de olsa heteroskedastik de olsa hangi standart hatalar geçerlidir?
+ heteroskedasticity-robust standard errors
- homoskedasticity-only standard errors
- neither type
- only standard errors computed with $n<30$
EX: Robust SE iki durumda da geçerli. Homoskedastisite SE'si heteroskedastisitede tutarsızdır.

## Q
EN: By default, R's lm function and Python's smf.ols compute:
TR: R'deki lm ve Python'daki smf.ols varsayılan olarak hangi SE'yi hesaplar?
+ homoskedasticity-only standard errors
- heteroskedasticity-robust standard errors
- no standard errors
- bootstrap standard errors
EX: Varsayılan homoskedastisite SE'si. Robust için HC1 seçeneği eklenmeli.

## Q
EN: Under homoskedasticity, the variance of $\hat\beta_1$ simplifies to:
TR: Homoskedastisite altında $\hat\beta_1$'in varyansı neye sadeleşir?
+ $\sigma^2_u/(n\sigma^2_X)$
- $\sigma^2_X/(n\sigma^2_u)$
- $n\sigma^2_u\sigma^2_X$
- $\sigma^2_u/\sigma^2_X$
EX: Teorem 2: $\sigma^2_{\hat\beta_1} = \sigma^2_u/(n\sigma^2_X)$. Yine $n$ ve $X$'in varyansı paydada.

## Q
EN: If the spread of earnings around the regression line increases with years of education, the errors are:
TR: Kazançların regresyon doğrusu etrafındaki yayılımı eğitimle artıyorsa hatalar:
+ heteroskedastic
- homoskedastic
- normally distributed
- uncorrelated with $X$, so homoskedastic
EX: Koşullu varyans $X$ ile değişiyor, yani heteroskedastisite.

## Q
EN: Stock and Watson recommend that in practice you should:
TR: Stock ve Watson pratikte ne yapmanı öneriyor?
+ always use heteroskedasticity-robust standard errors
- always use homoskedasticity-only standard errors
- use robust standard errors only when $R^2$ is low
- avoid standard errors altogether
EX: Robust SE her durumda güvenli. Homoskedastisite varsa da büyük $n$'de aynı sonucu verir.

## GEN homoVar

--- LESSON u6e | ★ | Gauss–Markov ve normallik

## CARD Gauss–Markov teoremi
Üç en küçük kareler varsayımına **homoskedastisiteyi** de ekle (Varsayım 1–4). O zaman:
:::formul
**Gauss–Markov:** OLS tahmincisi, $X$'lere koşullu olarak doğrusal ve yansız tahminciler arasında en küçük varyanslıdır. Yani ==BLUE (Best Linear Unbiased Estimator)==.
:::
**İki sınırlaması:**
1. Homoskedastisite pratikte genelde tutmaz. O zaman OLS artık BLUE değildir.
2. Doğrusal olmayan ya da koşullu yansız olmayan bazı tahminciler, bazı koşullarda OLS'den daha etkin olabilir.

## CARD Normallik varsayımı
**Varsayım 5:** $u_i\mid X_i\sim N(0,\sigma^2)$
**Teorem 4:** Varsayım 1–5 altında OLS tahmincileri **tam olarak** normal dağılır ve t istatistiği ==$t_{n-2}$== dağılımına uyar.
**Pratikte:**
• $n$ büyükse $t_{n-2}\approx N(0,1)$, fark yok.
• $n<50$ ise ve hataların gerçekten homoskedastik **ve** normal olduğuna inanıyorsan $t_{n-2}$ kritik değerlerini kullan. Bunlar 1.96'dan büyüktür.
• Çoğu uygulamada bu iki varsayıma inanmak için sebep yok. Ama $n>50$ olduğu için CLT'ye dayanan büyük örneklem sonuçlarını kullanırız.
:::ornek Küçük örneklem
$n=12$ ise serbestlik derecesi 10 ve $t_{10}$'un %5 iki yönlü kritik değeri $2.23$ (1.96 değil).
:::

## Q
EN: The Gauss–Markov theorem states that, under the least squares assumptions plus homoskedasticity, OLS is:
TR: Gauss–Markov teoremine göre varsayımlar ve homoskedastisite altında OLS nedir?
+ the best linear (conditionally) unbiased estimator (BLUE)
- the only consistent estimator
- exactly normally distributed in small samples
- unbiased only if $n>30$
EX: Gauss–Markov: OLS = BLUE. Normallik bu teoremin varsayımı değildir.

## Q
EN: Which is a limitation of the Gauss–Markov theorem?
TR: Gauss–Markov teoreminin bir sınırlaması hangisi?
+ It requires homoskedasticity, which often does not hold in practice.
- It requires the errors to be uniformly distributed.
- It only applies when $X$ is binary.
- It shows that OLS is biased.
EX: Homoskedastisite yoksa OLS artık BLUE değildir. Ayrıca doğrusal olmayan tahminciler daha etkin olabilir.

## Q
EN: Under assumptions 1–5 (including homoskedastic normal errors), the $t$-statistic for $\beta_1$ has a:
TR: Varsayım 1–5 altında $\beta_1$ için t istatistiği hangi dağılımdadır?
+ Student $t$ distribution with $n-2$ degrees of freedom
- Student $t$ distribution with $n-1$ degrees of freedom
- chi-squared distribution with $n$ degrees of freedom
- $F_{1,n}$ distribution
EX: İki katsayı tahmin edildiği için $n-2$ serbestlik derecesi. Tek ortalama testinde $n-1$ idi.

## Q
EN: BLUE stands for:
TR: BLUE'nun açılımı nedir?
+ Best Linear Unbiased Estimator
- Biased Linear Uniform Estimator
- Best Least-squares Unique Estimate
- Binary Linear Unbiased Error
EX: Best (en küçük varyans), Linear (doğrusal), Unbiased (yansız), Estimator (tahminci).

## Q
EN: With a small sample ($n=12$) and normal homoskedastic errors, the 5% two-sided critical value for testing $\beta_1$ is:
TR: $n=12$ ve normal, homoskedastik hatalarla $\beta_1$ için %5 iki yönlü kritik değer nedir?
+ about $2.23$, from $t_{10}$
- $1.96$, from $N(0,1)$
- about $2.20$, from $t_{11}$
- $1.645$
EX: Serbestlik derecesi $n-2 = 10$, $t_{10,0.025} = 2.228$. Küçük örneklemde t kritik değeri 1.96'dan büyüktür.

## Q
EN: In most modern econometric applications, we rely on:
TR: Modern ekonometri uygulamalarının çoğunda neye güveniriz?
+ large-$n$ normal approximations based on the CLT, with robust standard errors
- the assumption that errors are exactly normal
- the assumption of homoskedasticity
- small-sample $t$ critical values only
EX: Hataların normal ve homoskedastik olduğuna inanmak için genelde sebep yok, ama $n$ büyük. Bu yüzden CLT'ye ve robust SE'ye güveniriz.
`);
