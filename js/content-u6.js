CONTENT.push(String.raw`
=== UNIT u6 | Hafta 6 | Regresyonda Çıkarım | β₁ için test ve güven aralığı, kukla değişken, heteroskedastisite

--- LESSON u6a | t | β₁ için hipotez testi

## CARD Aynı t, yeni tahminci
Hafta 4'te $\mu$ için yaptığın testin **birebir aynısı**; sadece $\bar Y$ yerine $\hat\beta_1$ kullanırsın:
$$t = \frac{\hat\beta_1 - c}{SE(\hat\beta_1)}\quad\text{ile}\quad H_0:\beta_1 = c$$
Genel kalıp hiç değişmez: **(tahmin − hipotez değeri) / standart hata**.
Büyük örneklemde, $H_0$ doğruysa $t\approx N(0,1)$ (Hafta 5'teki MLT sonucu sayesinde).
**En yaygın test:** $H_0: \beta_1 = 0$, yani "$X$'in $Y$ üzerinde (doğrusal) etkisi yok". Buna ==anlamlılık testi (significance test)== denir. Reddedersek "$\beta_1$ istatistiksel olarak anlamlı" ya da "$X$ anlamlı" deriz.
| $H_1$ | Reddet eğer | p-değeri |
| $\beta_1\ne c$ | $\lvert t\rvert > z_{\alpha/2}$ (1.96) | $2\Phi(-\lvert t\rvert)$ |
| $\beta_1>c$ | $t>z_\alpha$ (1.645) | $1-\Phi(t)$ |
| $\beta_1<c$ | $t<-z_\alpha$ (−1.645) | $\Phi(t)$ |
:::ornek Adım adım
$\hat\beta_1 = -2.28$, $SE = 0.48$, $H_0: \beta_1 = 0$, iki yönlü, %5.
1. $t = (-2.28 - 0)/0.48 = -4.75$
2. $|t| = 4.75 > 1.96$ → reddet.
3. p-değeri: $2\Phi(-4.75) \approx 0.000002$ → %1'de bile reddedilir.
Yorum: sınıf mevcudunun test puanıyla ilişkisi istatistiksel olarak anlamlı.
:::

## CARD R çıktısını okumak
Sınavda çoğu zaman bir regresyon çıktısı verilir ve sorular buna göre sorulur.
~~~
Coefficients:
            Estimate Std. Error t value Pr(>|t|)
(Intercept) 698.9330     9.4675  73.825  < 2e-16 ***
str          -2.2798     0.4798  -4.751 2.78e-06 ***
Residual standard error: 18.58 on 418 degrees of freedom
Multiple R-squared:  0.05124
~~~
**Satırlar:** her katsayı bir satır. (Intercept) = sabit ($\hat\beta_0$), str = eğim ($\hat\beta_1$).
**Sütunlar:**
• **Estimate:** katsayı tahmini $\hat\beta$
• **Std. Error:** standart hata $SE(\hat\beta)$
• **t value** = Estimate ÷ Std. Error. Her zaman $H_0:\beta=0$ testinin t'si. Kontrol: $-2.2798/0.4798 = -4.751$
• **Pr(>|t|):** $H_0: \beta = 0$'a karşı **iki yönlü** p-değeri. ~2.78e-06~ = $2.78\times 10^{-6}$ = 0.00000278
• **Residual standard error:** SER (18.58 puan). "on 418 degrees of freedom" = $n - 2$, yani $n = 420$.
• **Multiple R-squared:** $R^2$ (0.05124)
• **Yıldızlar:** ~***~ p<0.001, ~**~ p<0.01, ~*~ p<0.05, ~.~ p<0.1
:::ipucu Hızlı karar
p-değerini anlamlılık düzeyiyle karşılaştır: p < 0.01 → %1, %5, %10'da anlamlı. 0.01 < p < 0.05 → %5 ve %10'da. 0.05 < p < 0.10 → sadece %10'da.
:::

## CARD Sıfır dışı hipotez
Çıktıdaki t değeri **her zaman** $H_0:\beta_1=0$ içindir. Başka bir değer test ediliyorsa t'yi **elle** hesapla:
:::ornek $H_0:\beta_1 = -1$
Soru: "Sınıf mevcudunun etkisi −1 mi?" ($\hat\beta_1 = -2.28$, $SE = 0.48$)
1. $t = \dfrac{-2.28-(-1)}{0.48} = \dfrac{-1.28}{0.48} = -2.67$
2. $|t| = 2.67 > 1.96$ → %5'te reddet. (Etki −1'den anlamlı derecede farklı.)
Dikkat: çıktıdaki $-4.751$'i kullanmak yanlış olurdu; o, $\beta_1 = 0$ testi.
:::
:::dikkat Eksi işaretli sayıyı çıkarmak
$-2.28 - (-1) = -2.28 + 1 = -1.28$. Parantezi unutup $-3.28$ bulmak sık hata. Hesap makinesinde (−) tuşunu kullan.
:::

## Q
EN: The $t$-statistic for testing $H_0:\beta_1 = c$ is:
TR: $H_0:\beta_1=c$ için t istatistiği hangisi?
+ $(\hat\beta_1 - c)/SE(\hat\beta_1)$
- $(\hat\beta_1 - c)/\text{var}(\hat\beta_1)$
- $\hat\beta_1/SE(\hat\beta_1) - c$
- $(c - \hat\beta_1)\cdot SE(\hat\beta_1)$
EX: **Doğru cevap: $(\hat\beta_1 - c)/SE(\hat\beta_1)$.**
Genel kalıp: (tahmin − hipotez değeri) ÷ standart hata. Sonuç, tahminin hipotez değerinden "kaç standart hata uzakta" olduğunu söyler.
**Diğer şıklar neden yanlış?**
• Varyansa bölmek: birimler tutmaz ve $t$ normal dağılmaz. **Standart hataya** (varyansın karekökü) bölünür.
• $\hat\beta_1/SE - c$: önce bölüp sonra çıkarmak; $c$ çıkarma işlemi bölmeden **önce** yapılmalı (parantez).
• Çarpmak: SE ile çarpmak t'yi büyük belirsizlikte büyütür; mantığın tam tersi.

## Q
EN: In the test score regression, $\hat\beta_1 = -2.28$ with $SE(\hat\beta_1)=0.48$. For $H_0:\beta_1=0$ vs. $H_1:\beta_1\ne0$ at the 5% level:
TR: $\hat\beta_1=-2.28$, $SE=0.48$. %5'te iki yönlü $H_0:\beta_1=0$ testinin sonucu nedir?
+ $t\approx-4.75$, so we reject $H_0$
- $t\approx-1.09$, so we fail to reject $H_0$
- $t\approx-4.75$, so we fail to reject $H_0$ because $t$ is negative
- $t\approx-9.89$, so we reject $H_0$
EX: **Doğru cevap:** $t\approx-4.75$, $H_0$ reddedilir.
1. $t = (-2.28 - 0)/0.48 = -4.75$
2. İki yönlü test → mutlak değere bak: $|t| = 4.75$
3. $4.75 > 1.96$ → reddet.
**Diğer şıklar nereden geliyor?**
• $-1.09$: hatalı bir hesap; doğru bölme $-2.28/0.48 = -4.75$. Bu değerle de yanlış karar (reddetmeme) verirdin.
• "Fail to reject because $t$ is negative": iki yönlü testte işaret önemsiz; $|t|$ kritik değerle karşılaştırılır. Negatif t, $H_1:\beta_1 \ne 0$'ı da destekler.
• $-9.89$: SE'nin karesine (varyansa, $0.48^2 = 0.23$) bölmek: $-2.28/0.23$.

## Q
SRC: PS5 Q4c
EN: Regression output: tradeshare coefficient 2.3064, std. error 0.773, $t=2.982$, $P>|t| = 0.004$. At which levels is the coefficient significant?
TR: Katsayı 2.3064, SE 0.773, p = 0.004. Hangi düzeylerde anlamlı?
+ at the 1%, 5% and 10% levels
- only at the 10% level
- at the 5% and 10% levels but not at 1%
- not significant at any conventional level
EX: **Doğru cevap:** %1, %5 ve %10 düzeylerinin hepsinde anlamlı.
Kural: $p < \alpha$ ise o düzeyde anlamlı.
• %1: $0.004 < 0.01$ ✓
• %5: $0.004 < 0.05$ ✓
• %10: $0.004 < 0.10$ ✓
Kritik değerle kontrol: $t = 2.982 > 2.576$ (%1'in kritik değeri) ✓
**Diğer şıklar neden yanlış?** %1'de anlamlı olan her katsayı daha gevşek düzeylerde (%5, %10) de anlamlıdır. p = 0.004 her üç eşikten de küçük.

## Q
SRC: PS5 Q4d
EN: Excluding Malta: tradeshare coefficient 1.6809, std. error 0.987, $P>|t|=0.094$. The coefficient is:
TR: Malta hariç: katsayı 1.6809, SE 0.987, p = 0.094. Katsayı:
+ significant at the 10% level but not at the 5% level
- significant at the 1% level
- significant at the 5% level
- not significant at the 10% level
EX: **Doğru cevap:** %10'da anlamlı, %5'te değil.
p = 0.094'ü eşiklerle karşılaştır:
• %10: $0.094 < 0.10$ → anlamlı ✓
• %5: $0.094 > 0.05$ → anlamlı değil ✗
• %1: $0.094 > 0.01$ → anlamlı değil ✗
Kritik değerle: $t = 1.6809/0.987 = 1.70$. $1.645 < 1.70 < 1.96$ → %10'da evet, %5'te hayır.
Ders: Malta (aykırı değer) çıkınca kanıt belirgin şekilde zayıflıyor.

## Q
EN: In R output, the column "Pr(>|t|)" reports:
TR: R çıktısındaki "Pr(>|t|)" sütunu neyi gösterir?
+ the two-sided p-value for $H_0$: coefficient $=0$
- the probability that the coefficient is zero
- the one-sided p-value for $H_0$: coefficient $>0$
- the standard error of the coefficient
EX: **Doğru cevap:** $H_0$: katsayı $=0$ için **iki yönlü** p-değeri.
Sütun adı bile bunu söyler: "Pr(>|t|)" = $P(|T| > |t|)$, yani iki kuyruğun toplam olasılığı: $2\Phi(-|t|)$.
**Diğer şıklar neden yanlış?**
• "Probability that the coefficient is zero": p-değeri $H_0$'ın doğru olma olasılığı **değildir**; $H_0$'ı doğru varsayarak hesaplanır.
• "One-sided": mutlak değer işareti iki yönlü olduğunu gösterir. Tek yönlü p, bunun yarısıdır.
• "Standard error": o, "Std. Error" sütunu.

## GEN regT
## GEN regOutput

--- LESSON u6b | ± | β₁ için güven aralığı

## CARD Güven aralığı
Hafta 4'teki gibi: tahmin ± kritik değer × standart hata.
$$\%95\text{ GA}: \left[\hat\beta_1 - 1.96\,SE(\hat\beta_1),\ \ \hat\beta_1 + 1.96\,SE(\hat\beta_1)\right]$$
%90 için 1.645, %99 için 2.576 (2.57 ya da 2.58) kullan.
:::ornek Adım adım
$\hat\beta_1 = -2.28$, $SE = 0.48$:
1. Pay: $1.96\times 0.48 = 0.94$
2. Alt uç: $-2.28 - 0.94 = -3.22$
3. Üst uç: $-2.28 + 0.94 = -1.34$
4. %95 GA: $[-3.22,\ -1.34]$
:::
**İki eşdeğer tanım:**
1. %5 düzeyinde iki yönlü testte **reddedilemeyen** $\beta_1$ değerlerinin kümesi.
2. Tekrarlanan örneklemelerde gerçek $\beta_1$'i %95 oranında içeren, veriye bağlı **rastgele** aralık.
**Test bağlantısı:** sıfır aralıkta değilse → $H_0:\beta_1=0$ %5'te reddedilir. Örnekte aralık tamamen negatif, 0 dışarıda → anlamlı. Aynı mantık her değer için: $-1$ de dışarıda ($-1 > -1.34$), bu yüzden $H_0: \beta_1 = -1$ de reddedilir.
:::dikkat Yorum
"Bu aralıkta $\beta_1$'in olma olasılığı %95" **değil**. $\beta_1$ sabit bir sayıdır; aralık bir tahmincidir ve örneklemden örnekleme değişir.
:::

## CARD ΔX'in etkisi için güven aralığı
Politika sorusu: "Sınıfları 2 öğrenci küçültürsek puan ne kadar artar?" $X$, $\Delta x$ kadar değişirse beklenen etki $\beta_1\Delta x$. Güven aralığı için $\beta_1$'in aralığının **uçlarını** $\Delta x$ ile çarp:
$$\left[(\hat\beta_1-1.96SE)\Delta x,\ \ (\hat\beta_1+1.96SE)\Delta x\right]$$
:::ornek Sınıf mevcudunu 2 azaltmak ($\Delta x=-2$)
1. $\beta_1$ için %95 GA: $[-3.22,\ -1.34]$
2. Uçları $-2$ ile çarp: $(-3.22)(-2) = 6.44$ ve $(-1.34)(-2) = 2.68$
3. **Negatifle çarpınca uçlar yer değiştirir**; küçüğü başa yaz: $[2.68,\ 6.44]$ puan.
Yorum: sınıfları 2 öğrenci küçültmek test puanlarını %95 güvenle 2.68 ile 6.44 puan arasında artırır.
:::
:::ipucu Pozitif $\Delta x$
$\Delta x = 3$ ise sıra korunur: $[-3.22\times 3,\ -1.34\times 3] = [-9.66,\ -4.02]$.
:::

## Q
EN: $\hat\beta_1 = -2.28$ and $SE(\hat\beta_1) = 0.48$. The 95% confidence interval for $\beta_1$ is:
TR: $\hat\beta_1=-2.28$, $SE=0.48$. $\beta_1$ için %95 GA nedir?
+ $[-3.22,\ -1.34]$
- $[-3.07,\ -1.49]$
- $[-3.52,\ -1.04]$
- $[-2.76,\ -1.80]$
EX: **Doğru cevap: $[-3.22, -1.34]$.**
1. Pay: $1.96\times 0.48 = 0.94$
2. $-2.28\pm1.96(0.48) = -2.28\pm0.94$ → $[-3.22,\ -1.34]$
**Diğer şıklar hangi aralık?**
• $[-3.07, -1.49]$: %90 aralığı ($1.645 \times 0.48 = 0.79$).
• $[-3.52, -1.04]$: %99 aralığı ($2.576\times 0.48 = 1.24$).
• $[-2.76, -1.80]$: sadece ±1 SE (yaklaşık %68 aralığı).
Şıklardaki aralık genişliğinden güven düzeyini tanıyabilirsin: genişlik arttıkça güven artar.

## Q
EN: The 95% CI for $\beta_1$ is $[-3.22, -1.34]$. What is the 95% CI for the effect of reducing STR by 2?
TR: STR'yi 2 azaltmanın ($\Delta x=-2$) etkisi için %95 GA nedir?
+ $[2.68,\ 6.44]$
- $[-6.44,\ -2.68]$
- $[-1.61,\ -0.67]$
- $[1.34,\ 3.22]$
EX: **Doğru cevap: $[2.68, 6.44]$.**
1. "2 azaltmak" → $\Delta x = -2$
2. Uçları çarp: $(-3.22)(-2) = 6.44$ ve $(-1.34)(-2) = 2.68$
3. Küçükten büyüğe yaz: $[2.68, 6.44]$
Mantık kontrolü: $\beta_1$ negatif (büyük sınıf → düşük puan), sınıfı küçültmek puanı **artırmalı** → pozitif aralık ✓.
**Diğer şıklar nereden geliyor?**
• $[-6.44, -2.68]$: $\Delta x = +2$ almışsın (2 artırmak); işaret ters.
• $[-1.61, -0.67]$: 2'ye bölmüşsün.
• $[1.34, 3.22]$: sadece işareti çevirmişsin, 2 ile çarpmamışsın.

## Q
EN: If the 95% confidence interval for $\beta_1$ does **not** contain 0, then:
TR: $\beta_1$ için %95 GA 0'ı **içermiyorsa**:
+ $H_0:\beta_1=0$ is rejected at the 5% level (two-sided)
- $H_0:\beta_1=0$ is not rejected at the 5% level
- $\beta_1$ is exactly equal to $\hat\beta_1$
- the $R^2$ must be larger than 0.95
EX: **Doğru cevap:** $H_0:\beta_1=0$, %5 düzeyinde (iki yönlü) reddedilir.
%95 GA = %5'te reddedilemeyen değerlerin kümesi. 0 kümede yoksa → 0 reddedilir. Eşdeğer olarak $|t| = |\hat\beta_1|/SE > 1.96$.
**Diğer şıklar neden yanlış?**
• "Not rejected": tam tersi; 0 aralığın içinde olsaydı reddedilmezdi.
• "$\beta_1 = \hat\beta_1$ exactly": tahmin hiçbir zaman gerçek değere tam eşit garanti edilmez.
• "$R^2 > 0.95$": güven aralığı ile $R^2$ arasında böyle bir bağ yok. Düşük $R^2$'li regresyonda da katsayı anlamlı olabilir.

## Q
EN: The correct interpretation of a 95% CI for $\beta_1$ is:
TR: $\beta_1$ için %95 GA'nın doğru yorumu nedir?
+ the interval, a function of the data, contains the true $\beta_1$ in 95% of repeated samples
- there is a 95% probability that $\beta_1$ is in this particular interval
- 95% of the data points lie within the interval
- $\hat\beta_1$ is in the interval with probability 95%
EX: **Doğru cevap:** veriye bağlı aralık, tekrarlanan örneklemelerin %95'inde gerçek $\beta_1$'i içerir.
Rastgele olan aralıktır (her örneklemde $\hat\beta_1$ ve SE değişir); $\beta_1$ sabittir.
**Diğer şıklar neden yanlış?**
• "95% probability for this particular interval": belirli bir aralık $\beta_1$'i ya içerir ya içermez. En sık yanlış yorum.
• "95% of the data points": aralık katsayı için; veri noktalarıyla ilgisi yok.
• "$\hat\beta_1$ is in the interval with probability 95%": $\hat\beta_1$ aralığın tam merkezidir, her zaman içindedir.

## Q
EN: To construct a 99% confidence interval for $\beta_1$, the critical value is approximately:
TR: %99 güven aralığı için kritik değer yaklaşık kaçtır?
+ $2.58$
- $1.96$
- $1.645$
- $3.29$
EX: **Doğru cevap: 2.58.**
%99 iki taraflı → dışarıda %1 kalır, her kuyrukta %0.5. $\Phi(z) = 0.995$ → $z = 2.576$ (derste 2.57 ya da 2.58).
**Diğer şıklar hangi düzey?**
• 1.96: %95.
• 1.645: %90.
• 3.29: %99.9 (çok uç, derste kullanılmaz).

## GEN regCI
## GEN regCIdx

--- LESSON u6c | D | Kukla (binary) regresör

## CARD X sadece 0 ya da 1 ise
==Kukla değişken (dummy / indicator / binary variable)==: sadece 0 ya da 1 değerini alır. Örnekler: kadınsa 1, şehirliyse 1, sınıf küçükse 1, sendikalıysa 1.
$$Y_i = \beta_0 + \beta_1D_i + u_i$$
$D$ sürekli olmadığı için $\beta_1$'i "bir birim artınca" diye yorumlamak garip olur (D sadece 0'dan 1'e atlar). Bunun yerine **iki durumu ayrı ayrı yaz**:
• $D=0$ koy: $E(Y\mid D=0) = \beta_0 + \beta_1\cdot 0 = \beta_0$
• $D=1$ koy: $E(Y\mid D=1) = \beta_0+\beta_1\cdot 1 = \beta_0 + \beta_1$
İkisinin farkı:
$$\beta_1 = E(Y\mid D=1) - E(Y\mid D=0)$$
**Sonuç:**
• $\beta_0$ = $D=0$ grubunun ortalaması.
• $\beta_0 + \beta_1$ = $D=1$ grubunun ortalaması.
• $\beta_1$ = **iki grubun ortalamaları arasındaki fark**.
$H_0:\beta_1=0$ testi, iki grup ortalamasının eşit olup olmadığının testidir; Hafta 4'teki iki ortalamanın farkı testinin regresyon versiyonu.

## CARD Kaliforniya örneği
$D=1$ eğer STR < 20 (küçük sınıf), değilse 0.
~~~
            Estimate Std. Error t value Pr(>|t|)
(Intercept)  649.979      1.388 468.380  < 2e-16 ***
DTRUE          7.372      1.843   3.999 7.52e-05 ***
~~~
**Çıktıyı okuma:**
• Büyük sınıflı bölgelerin ($D=0$) ortalama puanı: $\hat\beta_0 = 649.98$
• Küçük sınıflı bölgelerin ($D=1$) ortalama puanı: $\hat\beta_0 + \hat\beta_1 = 649.98+7.37 = 657.35$
• Fark: $\hat\beta_1 = 7.37$ puan
• Anlamlılık: $t = 7.372/1.843 = 4.0 > 2.58$, p = 0.0000752 → %1'de bile anlamlı
• Farkın %95 GA'sı: $7.37 \pm 1.96(1.843) = 7.37 \pm 3.61 = (3.76,\ 10.98)$
:::dikkat Sık hata
"Küçük sınıfların ortalaması" sorulduğunda sadece $\hat\beta_1 = 7.37$ ya da sadece $\hat\beta_0 = 649.98$ yazmak. $D=1$ grubunun ortalaması **toplamdır**: $\hat\beta_0 + \hat\beta_1$.
Katsayı negatifse ($\hat\beta_1 = -10.64$) toplamda işarete dikkat: $400.45 + (-10.64) = 389.81$.
:::

## Q
EN: In $Y_i = \beta_0+\beta_1D_i+u_i$ where $D_i$ is binary, $\beta_1$ is:
TR: $D_i$ kukla değişkense $\beta_1$ nedir?
+ the difference between the population means of $Y$ for $D=1$ and $D=0$
- the slope of a continuous regression line
- the mean of $Y$ for $D=0$
- the probability that $D=1$
EX: **Doğru cevap:** $D=1$ ve $D=0$ gruplarının anakütle ortalamaları arasındaki fark.
Türetme: $E(Y|D=1) = \beta_0 + \beta_1$ ve $E(Y|D=0) = \beta_0$. Fark: $\beta_1$.
**Diğer şıklar neden yanlış?**
• "Slope of a continuous line": $D$ sadece 0 ve 1 alır; sürekli eğim yorumu anlamlı değil.
• "Mean of $Y$ for $D=0$": bu $\beta_0$.
• "Probability that $D=1$": bu $E(D)$; regresyon katsayısıyla ilgisi yok.

## Q
EN: Using the estimates $\hat\beta_0 = 649.98$ and $\hat\beta_1 = 7.37$ (with $D=1$ if STR $<20$), the average test score in districts with STR $<20$ is:
TR: $D=1$ (STR<20) olan bölgelerin ortalama puanı nedir?
+ $657.35$
- $649.98$
- $7.37$
- $642.61$
EX: **Doğru cevap: 657.35.**
1. STR < 20 → $D = 1$
2. $D=1$ koy: $\hat Y = \hat\beta_0+\hat\beta_1\cdot 1 = 649.98+7.37 = 657.35$
**Diğer şıklar ne?**
• 649.98: $D=0$ (büyük sınıflı) grubun ortalaması.
• 7.37: iki grubun **farkı**, bir ortalama değil.
• 642.61: çıkarmışsın ($649.98 - 7.37$); katsayı pozitif, eklenmeli.

## Q
EN: In a regression on a binary regressor, $\beta_0$ is:
TR: Kukla regresörlü modelde $\beta_0$ nedir?
+ the population mean of $Y$ when $D=0$
- the population mean of $Y$ when $D=1$
- the difference in means between the two groups
- always zero
EX: **Doğru cevap:** $D=0$ iken $Y$'nin anakütle ortalaması.
$D=0$ koyunca: $E(Y\mid D=0) = \beta_0 + \beta_1 \cdot 0 = \beta_0$. $D=0$ grubu "referans grup"tur.
**Diğer şıklar ne?**
• "Mean when $D=1$": bu $\beta_0 + \beta_1$.
• "Difference in means": bu $\beta_1$.
• "Always zero": $\beta_0$ referans grubun ortalaması; sıfır olması için bir sebep yok (Kaliforniya'da 649.98).

## Q
EN: A binary variable is also called:
TR: İkili (binary) değişkene başka ne ad verilir?
+ a dummy variable or an indicator variable
- a continuous variable
- an error term
- an instrumental variable
EX: **Doğru cevap:** kukla (dummy) değişken ya da gösterge (indicator) değişken.
Üç isim aynı şeyi anlatır: sadece 0 ya da 1 alan, bir özelliğin var olup olmadığını "gösteren" değişken. Türkçede "kukla değişken" denir.
**Diğer şıklar neden yanlış?**
• Sürekli değişken: bir aralıktaki her değeri alır (maaş gibi); ikili değişkenin tam tersi.
• Hata terimi: $u$, gözlenemeyen faktörler.
• Araç değişken (instrumental variable): ileri ekonometride ayrı bir kavram.

## GEN dummyReg

--- LESSON u6d | σ² | Heteroskedastisite ve homoskedastisite

## CARD Tanım
Hata teriminin koşullu varyansı, yani doğru etrafındaki **yayılım**, $X$'e göre değişiyor mu?
• ==Homoskedastik (homoskedastic)==: $\text{var}(u_i\mid X_i) = \sigma^2$. Yayılım $X$'e bağlı değil, **sabit**. Saçılım grafiğinde noktalar doğru etrafında her yerde aynı genişlikte bir şerit oluşturur.
• ==Heteroskedastik (heteroskedastic)==: $\text{var}(u_i\mid X_i)$ $X$'e göre **değişiyor**. Şerit bir yerde dar, bir yerde geniş (genelde huni şekli).
Kelimelerin kökü: "homo" = aynı, "hetero" = farklı, "skedastic" = yayılma.
**Önemli:** üç en küçük kareler varsayımı $u$'nun koşullu varyansı hakkında **hiçbir şey söylemedi**. Yani şu ana kadarki bütün sonuçlar (yansızlık, tutarlılık, büyük örneklem normalliği) heteroskedastisite altında da geçerli. Sadece **standart hata formülü** etkilenir.
:::ornek Sezgi
Eğitim yılı arttıkça kazançların yayılımı da artar: lise mezunlarının maaşları birbirine yakınken (hepsi benzer işlerde), üniversite mezunlarınınki çok farklıdır (öğretmen de var, CEO da). Bu heteroskedastisitedir.
:::
:::dikkat Karıştırma
• Sıfır koşullu **ortalama** ($E(u|X) = 0$): 1. varsayım, yansızlık için.
• Sabit koşullu **varyans** ($\text{var}(u|X) = \sigma^2$): homoskedastisite, ek varsayım.
:::

## CARD Hangi standart hata?
İki tür standart hata formülü var:
• ==Heteroskedastisiteye dayanıklı SE (heteroskedasticity-robust, Eicker–Huber–White)==: Hafta 5'teki genel varyans formülünden gelir. **Her iki durumda da** (homo ya da hetero) geçerli.
• ==Sadece homoskedastisite SE'si (homoskedasticity-only)==: daha basit bir formül; sadece homoskedastisite varsa geçerli. Heteroskedastisite varsa **yanlış** (tutarsız) olur ve testler güvenilmez hale gelir.
Homoskedastisite altında (Teorem 2) varyans formülü sadeleşir:
$$\sigma^2_{\hat\beta_1} = \frac{\sigma^2_u}{n\,\sigma^2_X}$$
Okuma: hata varyansı büyükse belirsizlik artar; $n$ ve $X$'in varyansı büyükse azalır.
:::ornek Sayıyla (Teorem 2)
$\sigma^2_u = 4$, $\sigma^2_X = 2$, $n = 100$: $\text{var}(\hat\beta_1) = 4/(100\times 2) = 0.02$, standart sapma $\sqrt{0.02} = 0.1414$
:::
:::dikkat Yazılımın varsayılanı
R'deki **lm** ve Python'daki **smf.ols** varsayılan olarak **homoskedastisite SE'si** hesaplar. Dayanıklı SE için R'de vcovHC(type="HC1"), Python'da fit(cov_type="HC1") gerekir.
Örnek: STR katsayısının SE'si 0.480 (homo) ve 0.519 (robust). Robust biraz daha büyük, yani t biraz daha küçük çıkar.
:::
**Stock & Watson'ın önerisi: her zaman dayanıklı (robust) SE kullan.** Homoskedastisite gerçekten varsa $n$ büyükken ikisi zaten neredeyse aynı sonucu verir; yoksa robust olan doğrudur. Kaybedecek bir şey yok.

## Q
EN: The error term is homoskedastic if:
TR: Hata terimi ne zaman homoskedastiktir?
+ the variance of $u_i$ given $X_i$ is constant and does not depend on $X_i$
- the mean of $u_i$ given $X_i$ is zero
- $u_i$ is normally distributed
- $u_i$ and $X_i$ are correlated
EX: **Doğru cevap:** $X_i$ verildiğinde $u_i$'nin varyansı sabittir ve $X_i$'ye bağlı değildir.
$\text{var}(u_i\mid X_i) = \sigma^2$: doğru etrafındaki yayılım her $X$ değerinde aynı.
**Diğer şıklar neden yanlış?**
• "Mean of $u_i$ given $X_i$ is zero": bu 1. en küçük kareler varsayımı (sıfır koşullu ortalama). Ortalama ≠ varyans.
• "Normally distributed": normallik ayrı bir varsayım (Varsayım 5). Homoskedastik hatalar normal olmak zorunda değil.
• "Correlated with $X$": bu 1. varsayımın bozulması; homoskedastisiteyle ilgisi yok.

## Q
EN: Which standard errors are valid whether the errors are homoskedastic or heteroskedastic?
TR: Hatalar homoskedastik de olsa heteroskedastik de olsa hangi standart hatalar geçerlidir?
+ heteroskedasticity-robust standard errors
- homoskedasticity-only standard errors
- neither type
- only standard errors computed with $n<30$
EX: **Doğru cevap:** heteroskedastisiteye dayanıklı (robust) standart hatalar.
Robust SE, varyans hakkında hiçbir varsayım yapmayan genel formülden gelir; bu yüzden iki durumda da tutarlıdır. Adı da bunu söyler: heteroskedastisiteye "dayanıklı".
**Diğer şıklar neden yanlış?**
• Homoskedastisite SE'si: sadece homoskedastisite altında geçerli; heteroskedastisitede tutarsız.
• "Neither": robust SE her iki durumda da geçerli.
• "$n < 30$": küçük örneklem geçerliliği garanti etmez; robust SE zaten büyük örneklem yaklaşımına dayanır.

## Q
EN: By default, R's lm function and Python's smf.ols compute:
TR: R'deki lm ve Python'daki smf.ols varsayılan olarak hangi SE'yi hesaplar?
+ homoskedasticity-only standard errors
- heteroskedasticity-robust standard errors
- no standard errors
- bootstrap standard errors
EX: **Doğru cevap:** sadece homoskedastisite standart hataları.
Bu bir tuzaktır: yazılımın standart çıktısı, pratikte çoğu zaman tutmayan bir varsayıma dayanır. Robust SE için R'de vcovHC(type="HC1"), Python'da cov_type="HC1" seçeneği eklenmelidir.
**Diğer şıklar neden yanlış?**
• Robust: ders notunun vurguladığı nokta tam olarak bunun varsayılan **olmaması**.
• SE yok: çıktıda "Std. Error" sütunu var.
• Bootstrap: farklı bir yöntem, varsayılan değil.

## Q
EN: Under homoskedasticity, the variance of $\hat\beta_1$ simplifies to:
TR: Homoskedastisite altında $\hat\beta_1$'in varyansı neye sadeleşir?
+ $\sigma^2_u/(n\sigma^2_X)$
- $\sigma^2_X/(n\sigma^2_u)$
- $n\sigma^2_u\sigma^2_X$
- $\sigma^2_u/\sigma^2_X$
EX: **Doğru cevap:** $\sigma^2_u/(n\sigma^2_X)$ (Teorem 2).
Mantık kontrolü:
• Hata varyansı ($\sigma^2_u$) **payda**: hatalar büyükse eğim belirsiz ✓
• $n$ **paydada**: daha çok veri, daha az belirsizlik ✓
• $X$'in varyansı **paydada**: $X$ çok yayılmışsa eğim net ✓
**Diğer şıklar neden yanlış?**
• $\sigma^2_X/(n\sigma^2_u)$: ters çevrilmiş; $X$ çok yayılınca belirsizlik artmaz, azalır.
• $n\sigma^2_u\sigma^2_X$: $n$ çarpımda; veri artınca belirsizlik artmaz.
• $\sigma^2_u/\sigma^2_X$: $n$ eksik; örneklem büyüklüğü varyansı etkiler.

## Q
EN: If the spread of earnings around the regression line increases with years of education, the errors are:
TR: Kazançların regresyon doğrusu etrafındaki yayılımı eğitimle artıyorsa hatalar:
+ heteroskedastic
- homoskedastic
- normally distributed
- uncorrelated with $X$, so homoskedastic
EX: **Doğru cevap:** heteroskedastik.
"Yayılım eğitimle artıyor" = $\text{var}(u\mid X)$, $X$ değiştikçe değişiyor. Bu, heteroskedastisitenin tanımı. Saçılım grafiğinde huni şekli görürsün.
**Diğer şıklar neden yanlış?**
• Homoskedastik: yayılım sabit olsaydı.
• Normal dağılım: yayılımın değişmesi dağılımın şekliyle ilgili bir bilgi vermez.
• "Uncorrelated with $X$, so homoskedastic": hatanın $X$ ile ilişkisiz olması (ortalama) ile varyansının sabit olması farklı şeyler. $E(u|X) = 0$ olup varyans yine $X$'e bağlı olabilir.

## Q
EN: Stock and Watson recommend that in practice you should:
TR: Stock ve Watson pratikte ne yapmanı öneriyor?
+ always use heteroskedasticity-robust standard errors
- always use homoskedasticity-only standard errors
- use robust standard errors only when $R^2$ is low
- avoid standard errors altogether
EX: **Doğru cevap:** her zaman heteroskedastisiteye dayanıklı standart hatalar kullan.
Gerekçe: robust SE her iki durumda da geçerli. Homoskedastisite gerçekten varsa büyük örneklemde homoskedastisite SE'siyle neredeyse aynı sonucu verir; yoksa tek doğru seçenek odur. Kaybedecek bir şey yok, kazanacak çok şey var.
**Diğer şıklar neden yanlış?**
• Her zaman homoskedastisite SE'si: heteroskedastisite varsa yanlış testlere yol açar.
• "Only when $R^2$ is low": $R^2$ ile heteroskedastisite arasında bağ yok.
• "Avoid standard errors": SE olmadan test ve güven aralığı yapılamaz.

## GEN homoVar

--- LESSON u6e | ★ | Gauss–Markov ve normallik

## CARD Gauss–Markov teoremi
Üç en küçük kareler varsayımına **homoskedastisiteyi** de ekle (Varsayım 1–4). O zaman:
:::formul
**Gauss–Markov:** OLS tahmincisi, $X$'lere koşullu olarak doğrusal ve yansız tahminciler arasında en küçük varyanslıdır. Yani ==BLUE (Best Linear Unbiased Estimator)==.
:::
BLUE'yu harf harf oku:
• **B**est: en küçük varyans (en etkin)
• **L**inear: $Y$'lerin doğrusal fonksiyonu
• **U**nbiased: yansız
• **E**stimator: tahminci
Anlamı: $Y$'lerin ağırlıklı toplamı şeklindeki ve yansız olan bütün tahminciler arasında OLS en kesin olanıdır. Hafta 4'te $\bar Y$'nin BLUE olduğunu görmüştük; bu, regresyondaki karşılığı.
**İki sınırlaması:**
1. **Homoskedastisite gerekir.** Pratikte genelde tutmaz. O zaman OLS artık BLUE değildir (yine yansız ve tutarlıdır, ama en etkin olmayabilir).
2. **Sadece doğrusal yansız tahmincilerle karşılaştırır.** Doğrusal olmayan ya da koşullu yansız olmayan bazı tahminciler, bazı koşullarda OLS'den daha etkin olabilir.
:::dikkat Gerekmeyen varsayım
Gauss–Markov için hataların **normal** olması gerekmez. Sadece Varsayım 1–4.
:::

## CARD Normallik varsayımı ve küçük örneklem
**Varsayım 5:** $u_i\mid X_i\sim N(0,\sigma^2)$ (hatalar normal ve homoskedastik).
**Teorem 4:** Varsayım 1–5 altında OLS tahmincileri **tam olarak** (her $n$ için, yaklaşık değil) normal dağılır ve t istatistiği ==$t_{n-2}$== dağılımına uyar.
• Neden $n-2$? İki katsayı ($\beta_0$, $\beta_1$) tahmin edildi; SER'deki gibi iki serbestlik derecesi kaybedildi. (Tek ortalama testinde $n-1$ idi.)
**Pratikte ne yapılır?**
• $n$ büyükse $t_{n-2}\approx N(0,1)$; 1.96 kullan, fark yok.
• $n<50$ ise **ve** hataların gerçekten homoskedastik **ve** normal olduğuna inanıyorsan $t_{n-2}$ kritik değerlerini kullan. Bunlar 1.96'dan büyüktür (kalın kuyruk).
• Çoğu uygulamada bu iki varsayıma inanmak için sebep yok (kazanç verisi normal değil, heteroskedastisite yaygın). Ama modern veri setlerinde $n>50$ olduğu için MLT'ye dayanan büyük örneklem sonuçlarını ve robust SE'yi kullanırız.
:::ornek Küçük örneklem
$n=12$ ise serbestlik derecesi $12 - 2 = 10$. Tablolar sekmesindeki t tablosunda df = 10, %5 iki yönlü: $2.228$ (1.96 değil).
Yani $|t| = 2.1$ büyük örneklemde %5'te anlamlı olurdu ($2.1 > 1.96$), ama burada değil ($2.1 < 2.228$).
:::

## Q
EN: The Gauss–Markov theorem states that, under the least squares assumptions plus homoskedasticity, OLS is:
TR: Gauss–Markov teoremine göre varsayımlar ve homoskedastisite altında OLS nedir?
+ the best linear (conditionally) unbiased estimator (BLUE)
- the only consistent estimator
- exactly normally distributed in small samples
- unbiased only if $n>30$
EX: **Doğru cevap:** en iyi doğrusal (koşullu) yansız tahminci, yani BLUE.
Varsayım 1–4 altında, doğrusal ve yansız tahminciler arasında OLS'nin varyansı en küçüktür.
**Diğer şıklar neden yanlış?**
• "Only consistent estimator": başka tutarlı tahminciler de olabilir; teorem tutarlılıkla ilgili değil, etkinlikle ilgili.
• "Exactly normal in small samples": bunun için Varsayım 5 (normal hatalar) gerekir; Gauss–Markov normallik varsaymaz.
• "Unbiased only if $n > 30$": yansızlık her $n$ için geçerlidir (1. ve 2. varsayımlarla).

## Q
EN: Which is a limitation of the Gauss–Markov theorem?
TR: Gauss–Markov teoreminin bir sınırlaması hangisi?
+ It requires homoskedasticity, which often does not hold in practice.
- It requires the errors to be uniformly distributed.
- It only applies when $X$ is binary.
- It shows that OLS is biased.
EX: **Doğru cevap:** pratikte çoğu zaman tutmayan homoskedastisiteyi gerektirir.
Heteroskedastisite varsa OLS hâlâ yansız ve tutarlıdır, ama BLUE olma garantisi kalkar. Ders notundaki ikinci sınırlama: doğrusal olmayan tahminciler bazı koşullarda daha etkin olabilir.
**Diğer şıklar neden yanlış?**
• "Uniformly distributed errors": böyle bir varsayım yok (normallik bile gerekmez).
• "Only when $X$ is binary": teorem her türlü $X$ için geçerli.
• "OLS is biased": teorem tam tersine OLS'nin yansız ve en etkin olduğunu söyler.

## Q
EN: Under assumptions 1–5 (including homoskedastic normal errors), the $t$-statistic for $\beta_1$ has a:
TR: Varsayım 1–5 altında $\beta_1$ için t istatistiği hangi dağılımdadır?
+ Student $t$ distribution with $n-2$ degrees of freedom
- Student $t$ distribution with $n-1$ degrees of freedom
- chi-squared distribution with $n$ degrees of freedom
- $F_{1,n}$ distribution
EX: **Doğru cevap:** $n-2$ serbestlik dereceli Student $t$ dağılımı.
Teorem 4: normal ve homoskedastik hatalarla t istatistiği **tam olarak** $t_{n-2}$ dağılır. İki katsayı ($\hat\beta_0$, $\hat\beta_1$) tahmin edildiği için iki serbestlik derecesi kaybedilir.
**Diğer şıklar neden yanlış?**
• $t_{n-1}$: tek bir ortalamanın testinde (sadece $\bar Y$ tahmin edilir) kullanılır.
• $\chi^2_n$: t istatistiği negatif değer de alabilir; ki-kare hep pozitif.
• $F_{1,n}$: t'nin **karesi** $F_{1,n-2}$ dağılır; t'nin kendisi değil.

## Q
EN: BLUE stands for:
TR: BLUE'nun açılımı nedir?
+ Best Linear Unbiased Estimator
- Biased Linear Uniform Estimator
- Best Least-squares Unique Estimate
- Binary Linear Unbiased Error
EX: **Doğru cevap:** Best Linear Unbiased Estimator.
• **Best:** en küçük varyans (en etkin)
• **Linear:** $Y$'lerin doğrusal fonksiyonu
• **Unbiased:** yansız ($E(\hat\beta) = \beta$)
• **Estimator:** tahminci
**Diğer şıklar neden yanlış?** "Biased" (yanlı) tam tersi anlam; "Unique Estimate", "Binary Error" gibi ifadeler teoremde yok. Harflerin anlamını bilmek, Gauss–Markov sorularını kolaylaştırır.

## Q
EN: With a small sample ($n=12$) and normal homoskedastic errors, the 5% two-sided critical value for testing $\beta_1$ is:
TR: $n=12$ ve normal, homoskedastik hatalarla $\beta_1$ için %5 iki yönlü kritik değer nedir?
+ about $2.23$, from $t_{10}$
- $1.96$, from $N(0,1)$
- about $2.20$, from $t_{11}$
- $1.645$
EX: **Doğru cevap:** yaklaşık 2.23, $t_{10}$ dağılımından.
1. Serbestlik derecesi: $n-2 = 12 - 2 = 10$ (iki katsayı tahmin edildi)
2. t tablosu, df = 10, %5 iki yönlü: $t_{10,0.025} = 2.228$
**Diğer şıklar neden yanlış?**
• 1.96: büyük örneklem (normal) değeri. $n = 12$ çok küçük; t'nin kalın kuyrukları önemli.
• 2.20 ($t_{11}$): $n - 1$ kullanmışsın; regresyonda $n - 2$.
• 1.645: %10 iki yönlü (ya da %5 tek yönlü) normal değeri.

## Q
EN: In most modern econometric applications, we rely on:
TR: Modern ekonometri uygulamalarının çoğunda neye güveniriz?
+ large-$n$ normal approximations based on the CLT, with robust standard errors
- the assumption that errors are exactly normal
- the assumption of homoskedasticity
- small-sample $t$ critical values only
EX: **Doğru cevap:** MLT'ye dayanan büyük örneklem normal yaklaşımlarına ve robust standart hatalara.
Gerekçe: hataların normal ve homoskedastik olduğuna inanmak için genelde sebep yok (kazanç gibi veriler çarpık ve yayılımı değişken). Ama veri setleri büyük ($n > 50$), bu yüzden MLT sayesinde $\hat\beta_1$ yaklaşık normaldir ve 1.96 gibi kritik değerler geçerlidir. Robust SE de heteroskedastisiteye karşı korur.
**Diğer şıklar neden yanlış?**
• Tam normal hatalar ve homoskedastisite: pratikte nadiren inandırıcı varsayımlar.
• "Small-sample t values only": büyük örneklemde $t_{n-2} \approx N(0,1)$; ayrıca küçük örneklem t değerleri ancak normallik varsa geçerli.
`);
