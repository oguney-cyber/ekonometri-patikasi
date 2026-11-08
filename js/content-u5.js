CONTENT.push(String.raw`
=== UNIT u5 | Hafta 5 | Basit Doğrusal Regresyon | OLS, yorum, R², SER ve varsayımlar

--- LESSON u5a | β | Model ve terimler

## CARD Anakütle regresyon doğrusu
Merak ettiğimiz soru: $X$ belli bir değerdeyken $Y$ **ortalamada** ne olur? Yani koşullu ortalama $E(Y\mid X)$. Bunun $X$'in doğrusal bir fonksiyonu olduğunu varsayarız:
$$E(Y\mid X) = \beta_0 + \beta_1X$$
Buna ==anakütle regresyon doğrusu (population regression line)== denir. "Anakütle" çünkü tüm verinin (bilinmeyen) gerçek ilişkisi; $\beta_0$, $\beta_1$ de bilinmeyen gerçek sayılar.
• $\beta_0$ ==sabit terim (intercept)==: $X=0$ iken ortalama $Y$. Doğrunun dikey ekseni kestiği nokta.
• $\beta_1$ ==eğim (slope)==: $X$'teki **bir birimlik** değişimin $Y$'nin ortalaması üzerindeki etkisi: $\beta_1 = \frac{\Delta E(Y|X)}{\Delta X}$.
:::ornek Sınıf mevcudu
$E(\text{TestScore}\mid \text{ClassSize}) = \beta_0 + \beta_1\times\text{ClassSize}$
Bu, belli bir sınıf mevcuduna sahip bölgelerin **ortalama** puanını verir; tek tek bölgelerin puanını değil. $\beta_1 = -2$ ise mevcudu 1 fazla olan bölgelerin puanı ortalamada 2 düşüktür.
:::
:::ipucu Yunan harfi = anakütle
$\beta_0, \beta_1$ (şapkasız): gerçek ama bilinmeyen. $\hat\beta_0, \hat\beta_1$ (şapkalı): örneklemden hesaplanan tahminler.
:::

## CARD Hata terimi ve tam model
Tek tek gözlemler doğrunun tam üzerinde değil; aynı sınıf mevcuduna sahip iki bölge farklı puan alır. Gözlem ile doğru arasındaki fark ==hata terimi (error term)==:
$$u_i = Y_i - E(Y_i\mid X_i)$$
Böylece tam model:
$$Y_i = \beta_0 + \beta_1 X_i + u_i,\quad i=1,\dots,n$$
$u_i$'nin içinde $X$ dışında $Y$'yi etkileyen **her şey** var: bölge geliri, öğretmen kalitesi, şans...
| Terim | İngilizce | Anlamı |
| $Y_i$ | dependent variable, regressand | açıklanan, sol taraftaki değişken |
| $X_i$ | independent variable, ==regressor== | açıklayan, sağ taraftaki değişken |
| $\beta_0, \beta_1$ | coefficients, ==parameters== | bilinmeyen sabitler (Yunan harfi) |
| $u_i$ | error term, disturbance | $X$ dışındaki tüm faktörler |
Grafikte bir noktanın **anakütle** doğrusuna olan dikey uzaklığı $u_i$'dir.
:::dikkat Hata terimi ≠ kalıntı
• Hata terimi $u_i = Y_i - E(Y_i|X_i)$: **gerçek** doğruya uzaklık. Gerçek doğruyu bilmediğimiz için **gözlenemez**.
• Kalıntı $\hat u_i = Y_i - \hat Y_i$: **tahmin edilen** doğruya uzaklık. Veriden hesaplanır.
Sınavda bu ikisi aynı soruda şık olarak verilir.
:::

## Q
SRC: PS5 Q1a
EN: Under $E(u\mid X)=0$, the population regression line is:
TR: $E(u\mid X)=0$ altında anakütle regresyon doğrusu nedir?
+ $E(Y\mid X) = \beta_0 + \beta_1X$
- $\hat Y = \hat\beta_0 + \hat\beta_1X$
- $Y = \beta_0 + \beta_1X + u$
- $u = Y - \hat Y$
EX: **Doğru cevap: $E(Y\mid X) = \beta_0 + \beta_1X$.**
Neden? Modelin iki tarafının $X$'e koşullu beklentisini al:
$E(Y\mid X) = \beta_0 + \beta_1X + E(u\mid X) = \beta_0 + \beta_1 X + 0$
Anakütle doğrusu, $Y$'nin $X$'e koşullu ortalamasıdır ve **şapkasız** parametrelerle yazılır.
**Diğer şıklar ne?**
• $\hat Y = \hat\beta_0 + \hat\beta_1X$: **örneklem** (tahmin edilen) regresyon doğrusu. Şapka = tahmin.
• $Y = \beta_0 + \beta_1X + u$: tam model; tek tek gözlemleri tanımlar, ortalama doğruyu değil.
• $u = Y - \hat Y$: yanlış tanım; $Y - \hat Y$ kalıntıdır ($\hat u$).

## Q
SRC: PS5 Q1b
EN: In $Y = \beta_0 + \beta_1X + u$, the dependent variable is:
TR: Bu modelde bağımlı değişken hangisi?
+ $Y$
- $X$
- $u$
- $\beta_1$
EX: **Doğru cevap: $Y$.**
Bağımlı değişken, açıklanmak istenen ve eşitliğin **sol** tarafında duran değişkendir. Değeri $X$'e (ve $u$'ya) "bağlıdır". Diğer adı: regressand.
**Diğer şıklar ne?**
• $X$: bağımsız değişken (regresör), açıklayan.
• $u$: hata terimi.
• $\beta_1$: bir parametre (eğim), değişken değil.

## Q
SRC: PS5 Q1d
EN: A regressor is:
TR: Regresör (regressor) nedir?
+ a variable appearing on the right-hand side of a regression (an independent variable)
- the variable on the left-hand side of a regression
- the error term
- the estimated intercept
EX: **Doğru cevap:** regresyonun **sağ** tarafında yer alan değişken, yani bağımsız (açıklayıcı) değişken $X$.
Örnek: test puanı regresyonunda sınıf mevcudu (STR) regresördür.
**Diğer şıklar ne?**
• Sol taraftaki değişken: bağımlı değişken ($Y$), regressand.
• Hata terimi: $u$; gözlenemeyen faktörler.
• Tahmini sabit: $\hat\beta_0$, bir katsayı.

## Q
SRC: PS5 Q1e
EN: The parameters $\beta_0$ and $\beta_1$ are:
TR: $\beta_0$ ve $\beta_1$ parametreleri nedir?
+ unknown coefficients of the population regression line, usually denoted by Greek letters
- numbers computed from the sample
- random variables that change from sample to sample
- the predicted values of $Y$
EX: **Doğru cevap:** anakütle regresyon doğrusunun **bilinmeyen** katsayıları; genelde Yunan harfleriyle gösterilir.
Parametreler sabittir (tek bir gerçek değerleri var) ama biz onları bilmeyiz; örneklemle tahmin ederiz.
**Diğer şıklar neden yanlış?**
• "Computed from the sample": bunlar **tahminler** ($\hat\beta_0, \hat\beta_1$).
• "Random variables that change from sample to sample": bu da tahmincilerin özelliği. Parametre örneklemle değişmez.
• "Predicted values of $Y$": $\hat Y_i$; katsayı değil.

## Q
SRC: PS5 Q1f
EN: The error term $u_i$ is:
TR: Hata terimi $u_i$ nedir?
+ the difference between $Y_i$ and $E(Y_i\mid X_i)$; it captures all factors other than $X$ that affect $Y$
- the difference between $Y_i$ and $\hat Y_i$
- the slope of the regression line
- always equal to zero
EX: **Doğru cevap:** $Y_i$ ile $E(Y_i\mid X_i)$ arasındaki fark; $X$ dışında $Y$'yi etkileyen tüm faktörleri içerir.
Gözlemin **gerçek** (anakütle) doğruya dikey uzaklığı. Gerçek doğruyu bilmediğimiz için hata terimi gözlenemez.
**Diğer şıklar neden yanlış?**
• $Y_i - \hat Y_i$: bu **kalıntı** ($\hat u_i$), tahmin edilen doğruya uzaklık. En sık karışıklık.
• "Slope": eğim $\beta_1$.
• "Always zero": tek tek gözlemler doğru üzerinde değil; sadece **ortalaması** (koşullu) sıfır varsayılır.

## Q
EN: In the population regression line, $\beta_0$ represents:
TR: Anakütle regresyon doğrusunda $\beta_0$ neyi gösterir?
+ the average value of $Y$ when $X=0$
- the change in $Y$ for a one-unit change in $X$
- the average value of $X$
- the error term
EX: **Doğru cevap:** $X=0$ iken $Y$'nin ortalama değeri.
$E(Y\mid X=0) = \beta_0 + \beta_1\cdot 0 = \beta_0$. Doğrunun dikey ekseni kestiği nokta.
Not: $X = 0$ veri aralığının çok dışındaysa (sıfır öğrencili sınıf gibi) bu yorum pratikte anlamsızdır; $\beta_0$ yine de doğrunun konumunu belirler.
**Diğer şıklar ne?**
• "Change in $Y$ for a one-unit change in $X$": eğim $\beta_1$.
• "Average value of $X$": $\bar X$, bir katsayı değil.
• "Error term": $u$.

## Q
SRC: TB 4.20
EN: In the linear regression model $Y_i = \beta_0 + \beta_1 X_i + u_i$, the expression $\beta_0 + \beta_1 X_i$ is:
TR: Doğrusal regresyon modeli $Y_i = \beta_0 + \beta_1 X_i + u_i$'de $\beta_0 + \beta_1 X_i$ ifadesi nedir?
+ the population regression function
- the sample regression function
- the error term
- the regressor
EX: **Doğru cevap: the population regression function (population regression line).**
$\beta_0 + \beta_1 X$ popülasyondaki gerçek ortalama ilişkidir: $E(Y\mid X) = \beta_0 + \beta_1 X$. Katsayılar bilinmez; işimiz onları tahmin etmek.
**Diğer şıklar neden yanlış?**
• sample regression function: bu tahmin edilen doğru, $\hat\beta_0 + \hat\beta_1 X$ (şapkalı).
• error term: hata terimi $u_i$; $Y$'yi etkileyen diğer tüm faktörler.
• regressor: regresör (açıklayıcı değişken) sadece $X_i$.

## Q
SRC: TB 4.28
EN: The OLS residuals $\hat u_i$ are the sample counterparts of the population:
TR: OLS kalıntıları $\hat u_i$ popülasyondaki neyin örneklem karşılığıdır?
+ errors $u_i$
- regression slope
- predicted values
- regression intercept
EX: **Doğru cevap: errors.**
• Popülasyon: $u_i = Y_i - (\beta_0 + \beta_1 X_i)$, gerçek doğrudan sapma; gözlenemez.
• Örneklem: $\hat u_i = Y_i - (\hat\beta_0 + \hat\beta_1 X_i)$, tahmin edilen doğrudan sapma; hesaplanabilir.
Şapka = örneklem karşılığı.
**Diğer şıklar neden yanlış?**
• slope ve intercept: bunların örneklem karşılığı $\hat\beta_1$ ve $\hat\beta_0$.
• predicted values: bunların karşılığı $\hat Y_i$.

## Q
SRC: TB 4.32
EN: In the population regression of district test scores on the student–teacher ratio, a district has a negative error term $u_i$. This means that:
TR: Okul bölgelerinin test puanlarının öğrenci-öğretmen oranı üzerine popülasyon regresyonunda bir bölgenin hata terimi $u_i$ negatif. Bu ne anlama gelir?
+ the district did worse than predicted by the regression line
- the district did better than predicted by the regression line
- the regression is useless for predicting test scores
- the district's student–teacher ratio must be measured incorrectly
EX: **Doğru cevap: did worse than predicted.**
$u_i < 0$ ⇒ $Y_i < \beta_0 + \beta_1 X_i$. Bölgenin gerçek test puanı, o öğrenci-öğretmen oranına sahip bir bölgeden beklenenin **altında**. Sebep, modele girmeyen diğer faktörler olabilir (örneğin gelir, İngilizce öğrenen öğrenci oranı).
**Diğer şıklar neden yanlış?**
• did better: bu pozitif hata ($u_i>0$).
• useless: tek bir negatif hata normaldir; hataların bir kısmı negatif, bir kısmı pozitif olur.
• measured incorrectly: hata terimi diğer faktörleri yansıtır, ölçüm hatası anlamına gelmez.

--- LESSON u5b | β̂ | OLS tahmincisi

## CARD En küçük kareler fikri
Elimizde bir nokta bulutu var. Bu noktalara "en iyi uyan" doğruyu nasıl seçeriz?
Aday doğru $b_0 + b_1X$ olsun. Her nokta için **tahmin hatası** $Y_i - b_0 - b_1X_i$ (noktanın doğruya dikey uzaklığı).
OLS kuralı: bu hataların **kareleri toplamını** en küçük yapan $b_0, b_1$'i seç:
$$\min_{b_0,b_1}\sum_{i=1}^n (Y_i - b_0 - b_1X_i)^2$$
Çözüme ==OLS (Ordinary Least Squares, sıradan en küçük kareler)== tahmincisi denir: $\hat\beta_0$, $\hat\beta_1$.
**Neden kare?**
• Hatalar artı ve eksi olur; düz toplamak birbirini götürür (her doğru ortalamadan geçerse toplam 0 olur).
• Kare almak hepsini pozitif yapar ve **büyük hataları daha çok cezalandırır**.
• Türev alınabilir, kapalı bir formül çıkar.
Yan etki: büyük hatalar karesiyle cezalandırıldığı için uç bir nokta (aykırı değer) doğruyu kendine doğru çekebilir.

## CARD OLS formülleri
Minimizasyonun çözümü:
$$\hat\beta_1 = \frac{\sum (X_i-\bar X)(Y_i-\bar Y)}{\sum (X_i-\bar X)^2} = \frac{s_{XY}}{s_X^2} \qquad \hat\beta_0 = \bar Y - \hat\beta_1\bar X$$
**Okunuşu:** eğim = örneklem kovaryansı ÷ $X$'in örneklem **varyansı** (standart sapması değil!). Korelasyonla da yazılabilir: $\hat\beta_1 = r_{XY}\,\dfrac{s_Y}{s_X}$.
• ==Tahmin edilen değer (predicted value)==: $\hat Y_i = \hat\beta_0 + \hat\beta_1X_i$
• ==Kalıntı (residual)==: $\hat u_i = Y_i - \hat Y_i$ (gerçek eksi tahmin). Pozitifse nokta doğrunun üstünde.
:::ornek Elle hesap: 5 adım
$X: 1,2,3,4$ ve $Y: 2,4,5,7$
1. **Ortalamalar:** $\bar X = 2.5$, $\bar Y = 4.5$
2. **Sapmalar:** $X-\bar X$: $-1.5, -0.5, 0.5, 1.5$ | $Y-\bar Y$: $-2.5, -0.5, 0.5, 2.5$
3. **Çapraz çarpımlar toplamı:** $\sum(X-\bar X)(Y-\bar Y) = 3.75+0.25+0.25+3.75 = 8$
4. **$X$ sapmalarının kareleri toplamı:** $\sum(X-\bar X)^2 = 2.25+0.25+0.25+2.25 = 5$
5. **Katsayılar:** $\hat\beta_1 = 8/5 = 1.6$, $\hat\beta_0 = 4.5 - 1.6(2.5) = 0.5$
Tahmin ve kalıntı: $X=2$ için $\hat Y = 0.5+1.6(2) = 3.7$, kalıntı $= 4-3.7 = 0.3$
:::
:::ipucu Hesap makinesiyle
Veri verilen sorularda STAT modunu (A+BX) kullan: B = $\hat\beta_1$, A = $\hat\beta_0$. Hesap sekmesinde adımlar var.
:::

## CARD OLS'nin üç cebirsel özelliği (Handout)
Bu özellikler OLS formülünden doğrudan çıkar ve **her örneklemde** (varsayımlardan bağımsız) geçerlidir:
1. **Kalıntıların toplamı sıfır:** $\sum\hat u_i = 0$. Doğrunun üstündeki noktaların toplam uzaklığı, altındakilerinkine eşit.
2. **Kalıntılar ve regresör ilişkisiz:** $\sum X_i\hat u_i = 0$. Doğru, $X$'in içindeki bütün doğrusal bilgiyi kullanmış; kalıntılarda $X$ ile ilişki kalmamış.
3. **Doğru ortalamalar noktasından geçer:** $\bar Y = \hat\beta_0 + \hat\beta_1\bar X$. $(\bar X, \bar Y)$ noktası her zaman doğrunun üzerinde.
:::ipucu Türetme
Minimizasyonda $b_0$'a göre türev: $-2\sum(Y_i-b_0-b_1X_i)=0$. Bu tam olarak 1. özellik ($\sum\hat u_i = 0$); düzenleyince $b_0 = \bar Y - b_1\bar X$ çıkar (3. özellik).
$b_1$'e göre türev: $-2\sum X_i(Y_i-b_0-b_1X_i)=0$, yani 2. özellik.
:::
:::ornek Kontrol (önceki örnek)
Kalıntılar: $X=1$: $2 - 2.1 = -0.1$; $X=2$: $4 - 3.7 = 0.3$; $X=3$: $5 - 5.3 = -0.3$; $X=4$: $7 - 6.9 = 0.1$. Toplam: $-0.1 + 0.3 - 0.3 + 0.1 = 0$ ✓
:::

## Q
SRC: PS5 Q1g
EN: The OLS estimators of $\beta_0$ and $\beta_1$ are obtained by:
TR: OLS tahmincileri nasıl elde edilir?
+ minimizing the sum of squared residuals $\sum(Y_i-b_0-b_1X_i)^2$
- minimizing the sum of residuals $\sum(Y_i-b_0-b_1X_i)$
- maximizing the $R^2$ subject to $\hat\beta_0 = 0$
- setting the predicted values equal to the observed values
EX: **Doğru cevap:** kalıntıların **kareleri toplamını** en küçük yaparak.
OLS = Ordinary Least **Squares**: en küçük kareler.
**Diğer şıklar neden yanlış?**
• "Minimizing the sum of residuals": kalıntıların düz toplamı, ortalamalar noktasından geçen **her** doğru için sıfırdır; bu kriter tek bir doğru seçemez. Ayrıca artı ve eksi hatalar birbirini götürür.
• "Maximizing $R^2$ subject to $\hat\beta_0 = 0$": sabit terimi sıfıra zorlamak OLS'nin parçası değil.
• "Predicted = observed": noktalar bir doğru üzerinde değilse imkânsız; kalıntılar sıfır olamaz.

## Q
SRC: PS5 Q1i
EN: The residual for observation $i$ is:
TR: $i$. gözlemin kalıntısı (residual) nedir?
+ $\hat u_i = Y_i - \hat Y_i$
- $u_i = Y_i - E(Y_i\mid X_i)$
- $\hat Y_i - \bar Y$
- $Y_i - \bar Y$
EX: **Doğru cevap:** $\hat u_i = Y_i - \hat Y_i$ (gerçek değer eksi tahmin edilen değer).
Kalıntı, gözlemin **tahmin edilen** doğruya dikey uzaklığı; veriden hesaplanabilir.
**Diğer şıklar ne?**
• $Y_i - E(Y_i\mid X_i)$: **hata terimi** $u_i$ (gerçek doğruya uzaklık, gözlenemez).
• $\hat Y_i - \bar Y$: tahminin ortalamadan sapması; ESS'nin terimleri.
• $Y_i - \bar Y$: gözlemin ortalamadan sapması; TSS'nin terimleri.

## Q
EN: Which of the following always holds for OLS residuals in a regression with an intercept?
TR: Sabit terimli regresyonda OLS kalıntıları için hangisi her zaman doğrudur?
+ $\sum_{i=1}^n \hat u_i = 0$
- $\hat u_i = 0$ for every $i$
- $\sum \hat u_i^2 = 0$
- $\sum Y_i\hat u_i = \sum Y_i$
EX: **Doğru cevap:** $\sum \hat u_i = 0$.
Bu, OLS'nin birinci koşulundan (sabit terime göre türev) gelir; varsayım değil, cebirsel bir gerçektir. Doğrunun üstündeki noktaların toplam uzaklığı altındakilerinkine eşittir.
**Diğer şıklar neden yanlış?**
• "$\hat u_i = 0$ for every $i$": sadece bütün noktalar tam bir doğru üzerindeyse. Toplamın sıfır olması tek tek sıfır demek değil ($-0.1, 0.3, -0.3, 0.1$ gibi).
• "$\sum \hat u_i^2 = 0$": SSR; kareler pozitif, toplam ancak bütün kalıntılar sıfırsa sıfır olur.
• "$\sum Y_i\hat u_i = \sum Y_i$": böyle bir özellik yok. (Doğru olan: $\sum X_i\hat u_i = 0$ ve $\sum \hat Y_i\hat u_i = 0$.)

## Q
SRC: PS5 Q2c
EN: The OLS regression line always passes through:
TR: OLS doğrusu her zaman hangi noktadan geçer?
+ the point $(\bar X, \bar Y)$
- the origin $(0,0)$
- the point $(0, \bar Y)$
- the observation with the largest residual
EX: **Doğru cevap:** $(\bar X, \bar Y)$ noktası.
İspat tek satır: $\hat\beta_0 = \bar Y - \hat\beta_1\bar X$ formülünü düzenle → $\bar Y = \hat\beta_0 + \hat\beta_1\bar X$. Yani $X = \bar X$ koyunca tahmin tam olarak $\bar Y$ çıkar.
Pratikte kullanım (PS5 Soru 2c): "ortalama sınıf mevcudu 21.4 ise ortalama puan kaç?" → doğruya $\bar X$ koy.
**Diğer şıklar neden yanlış?**
• Orijin: sadece $\hat\beta_0 = 0$ ise.
• $(0, \bar Y)$: sadece eğim sıfırsa ya da $\bar X = 0$ ise.
• En büyük kalıntılı gözlem: büyük kalıntı tam tersine doğrudan **uzak** demek.

## Q
EN: If $s_{XY} = 12$ and $s^2_X = 4$, then $\hat\beta_1$ equals:
TR: $s_{XY}=12$ ve $s^2_X=4$ ise $\hat\beta_1$ kaçtır?
+ $3$
- $48$
- $6$
- $1/3$
EX: **Doğru cevap: 3.**
Formül: eğim = kovaryans ÷ $X$'in **varyansı**:
$$\hat\beta_1 = s_{XY}/s_X^2 = 12/4 = 3$$
**Diğer şıklar nereden geliyor?**
• 48: çarpmışsın ($12 \times 4$).
• 6: standart sapmaya bölmüşsün: $12/\sqrt 4 = 12/2$. Tuzak. (Korelasyon formülünde $s_X$ var, eğimde $s^2_X$.)
• $1/3$: kesri ters çevirmişsin ($4/12$).

## Q
SRC: PS5 Q1h
EN: The predicted value of the dependent variable is:
TR: Bağımlı değişkenin tahmin edilen değeri nedir?
+ $\hat Y = \hat\beta_0 + \hat\beta_1 X$
- $Y = \beta_0+\beta_1X+u$
- $E(Y\mid X) = \beta_0+\beta_1X$
- $\bar Y$
EX: **Doğru cevap:** $\hat Y = \hat\beta_0 + \hat\beta_1 X$.
Tahmin edilen değer, **tahmin edilmiş** (şapkalı katsayılı) doğrunun $X$'teki değeridir. Hesaplanabilir çünkü $\hat\beta$'lar veriden bulunur.
**Diğer şıklar ne?**
• $Y = \beta_0 + \beta_1X + u$: anakütle modeli; bilinmeyen parametreler ve gözlenemeyen $u$ içerir.
• $E(Y\mid X)$: anakütle regresyon doğrusu (gerçek ama bilinmeyen ortalama).
• $\bar Y$: örneklem ortalaması; $X$'i hiç kullanmayan bir tahmin.

## GEN olsSmall
## GEN olsMoments

## Q
SRC: TB 4.9
EN: The OLS estimator is derived by:
TR: OLS tahmincisi nasıl elde edilir?
+ minimizing the sum of squared residuals
- minimizing the sum of absolute residuals
- connecting the observation with the lowest $X$ to the observation with the highest $X$
- making the standard error of the regression equal to the standard error of the slope
EX: **Doğru cevap: minimizing the sum of squared residuals.**
OLS, $\sum_{i=1}^{n}(Y_i - b_0 - b_1X_i)^2$ ifadesini en küçük yapan $b_0$ ve $b_1$'i seçer. Türev alıp sıfıra eşitlemek $\hat\beta_1 = s_{XY}/s_X^2$ ve $\hat\beta_0 = \bar Y - \hat\beta_1\bar X$ formüllerini verir.
**Diğer şıklar neden yanlış?**
• absolute residuals: bu LAD (en küçük mutlak sapmalar) yöntemi; farklı bir tahminci.
• iki uç noktayı birleştirmek: sadece iki gözlemi kullanır, diğer tüm bilgiyi atar.
• SER = SE: anlamsız bir koşul.

## Q
SRC: TB 4.13
EN: The OLS residual $\hat u_i$ is defined as:
TR: OLS kalıntısı $\hat u_i$ nasıl tanımlanır?
+ $Y_i - \hat Y_i$
- $Y_i - \beta_0 - \beta_1 X_i$
- $\hat Y_i - \hat\beta_0 - \hat\beta_1 X_i$
- $(Y_i - \bar Y)^2$
EX: **Doğru cevap: $Y_i - \hat Y_i$.**
$\hat Y_i = \hat\beta_0 + \hat\beta_1 X_i$ tahmin edilen değerdir. Kalıntı, gerçek $Y_i$'nin tahminden ne kadar saptığıdır.
**Diğer şıklar neden yanlış?**
• $Y_i - \beta_0 - \beta_1X_i$: bu **hata terimi** $u_i$ (popülasyon katsayılarıyla); gözlenemez.
• $\hat Y_i - \hat\beta_0 - \hat\beta_1X_i$: tanım gereği her zaman 0.
• $(Y_i - \bar Y)^2$: TSS'nin bir terimi; regresyon doğrusunu hiç kullanmıyor.

## Q
SRC: TB 4.17
EN: The OLS residuals:
TR: OLS kalıntıları:
+ can be calculated by subtracting the fitted values from the actual values
- can be calculated from the errors of the population regression function
- are unknown, because we do not know the population regression function
- should not be used, because they show that the regression line does not pass through all the observations
EX: **Doğru cevap: actual minus fitted.**
$\hat u_i = Y_i - \hat Y_i$. Hem $Y_i$ hem $\hat Y_i$ elimizde olduğu için kalıntılar her zaman hesaplanabilir.
**Diğer şıklar neden yanlış?**
• "from the population errors" ve "unknown": bunlar **hatalarla** (u) karışmış. Popülasyon hataları bilinmez çünkü $\beta$'lar bilinmez; kalıntılar ise bilinir.
• "should not be used": kalıntılar çok kullanışlıdır: SER, $R^2$ ve standart hatalar onlardan hesaplanır. Doğrunun her noktadan geçmemesi normaldir.

## Q
SRC: TB 4.21
EN: Using the least squares principle, the OLS slope estimator is obtained by dividing the:
TR: En küçük kareler ilkesine göre OLS eğim tahmincisi neyin neye bölünmesiyle elde edilir?
+ sample covariance of $X$ and $Y$ by the sample variance of $X$
- sample covariance of $X$ and $Y$ by the sample variance of $Y$
- sample variance of $X$ by the sample variance of $Y$
- sample variance of $X$ by the sample covariance of $X$ and $Y$
EX: **Doğru cevap: $s_{XY}/s_X^2$.**
$$\hat\beta_1 = \frac{s_{XY}}{s_X^2} = \frac{\sum (X_i - \bar X)(Y_i - \bar Y)}{\sum (X_i - \bar X)^2}$$
Birim kontrolü: $s_{XY}$ ($X$·$Y$ birimi) ÷ $s_X^2$ ($X^2$ birimi) = $Y$ birimi / $X$ birimi. Eğimin birimi tam olarak bu.
**Diğer şıklar neden yanlış?**
• $s_Y^2$'ye bölmek: bu, $X$'in $Y$ üzerine regresyonunun eğimi (ters regresyon).
• varyanslar oranı: kovaryans yok; $X$ ile $Y$'nin birlikte hareketini ölçmüyor.
• ters oran: birim ters çıkar.

## Q
SRC: TB 4.31
EN: The OLS estimator of the slope in the simple regression model is:
TR: Basit regresyon modelinde eğimin OLS tahmincisi nedir?
+ $\hat\beta_1 = \dfrac{\sum_{i=1}^{n}(X_i - \bar X)(Y_i - \bar Y)}{\sum_{i=1}^{n}(X_i - \bar X)^2}$
- $\hat\beta_1 = \dfrac{\sum_{i=1}^{n}(X_i - \bar X)(Y_i - \bar Y)}{\sum_{i=1}^{n}(Y_i - \bar Y)^2}$
- $\hat\beta_1 = \dfrac{\sum_{i=1}^{n}(X_i - \bar X)^2}{\sum_{i=1}^{n}(X_i - \bar X)(Y_i - \bar Y)}$
- $\hat\beta_1 = \bar Y - \hat\beta_0 \bar X$
EX: **Doğru cevap: $\sum (X_i-\bar X)(Y_i-\bar Y) / \sum (X_i-\bar X)^2$.**
Bu, $s_{XY}/s_X^2$'nin açık yazılışıdır; $1/(n-1)$ çarpanları pay ve paydada birbirini götürür.
**Diğer şıklar neden yanlış?**
• paydada $Y$ sapmaları: ters regresyonun eğimi.
• ters kesir: birimler ters.
• $\bar Y - \dots$: bu **sabit terim** formülüne benziyor: $\hat\beta_0 = \bar Y - \hat\beta_1 \bar X$. Burada harfler de karışmış.

## Q
SRC: TB 4.12
EN: The sample average of the OLS residuals is:
TR: OLS kalıntılarının örneklem ortalaması nedir?
+ zero
- positive, because OLS uses squares
- unobservable, because the population regression function is unknown
- positive or negative, depending on whether $X$ is mostly positive or negative
EX: **Doğru cevap: zero.**
OLS'yi $\hat\beta_0$'a göre minimize etmenin birinci sıra koşulu $\sum \hat u_i = 0$'dır. Bu yüzden kalıntıların ortalaması her zaman tam olarak 0 (modelde sabit terim varsa).
**Diğer şıklar neden yanlış?**
• "positive because squares": kareler **minimize edilen** ifadede; kalıntıların kendisi kare değil, pozitif ve negatif olabilir.
• unobservable: kalıntılar veriyle hesaplanır.
• "depends on X": sonuç her zaman 0, $X$'in işaretinden bağımsız.

## Q
SRC: TB 4.16
EN: The sample regression line estimated by OLS:
TR: OLS ile tahmin edilen örneklem regresyon doğrusu:
+ always passes through the point $(\bar X, \bar Y)$
- always has a slope smaller than its intercept
- is exactly the same as the population regression line
- can never have a slope of zero
EX: **Doğru cevap: passes through $(\bar X, \bar Y)$.**
$\hat\beta_0 = \bar Y - \hat\beta_1\bar X$ olduğu için $X = \bar X$'te tahmin: $\hat\beta_0 + \hat\beta_1\bar X = \bar Y$. Doğru her zaman ortalamalar noktasından geçer.
**Diğer şıklar neden yanlış?**
• slope < intercept: ikisinin büyüklüğü arasında genel bir ilişki yok.
• "same as population line": örneklem doğrusu bir tahmindir; örneklemden örnekleme değişir.
• "never zero slope": $s_{XY} = 0$ ise eğim tam sıfır olur.

--- LESSON u5c | ↗ | Yorumlama ve tahmin

## CARD Eğimi yorumlamak
Kaliforniya verisi: $\widehat{\text{TestScore}} = 698.93 - 2.28\times\text{STR}$
**Eğim yorumu kalıbı:** "$X$ bir birim artınca $Y$ **ortalamada** $\hat\beta_1$ birim değişir."
→ Öğretmen başına bir öğrenci fazla olan bölgelerin test puanı **ortalamada** 2.28 puan daha düşük. $\Delta\widehat{\text{TestScore}}/\Delta\text{STR} = -2.28$
Yorumda üç şeye dikkat:
• **Birimler:** $X$'in bir birimi (1 öğrenci) ve $Y$'nin birimi (puan) söylenmeli.
• **İşaret:** negatif → ters yönlü ilişki.
• **"Ortalamada":** tek tek bölgeler için değil, ortalama için.
**Sabit yorumu:** STR = 0 iken tahmini puan 698.9. Ama bu **anlamsız**: sıfır öğrencili sınıf yok. Veri aralığının çok dışına çıkıyoruz (en küçük STR = 14). Buna ==dış değer kestirimi (extrapolation)== denir. Sabit terim çoğu zaman sadece doğrunun yüksekliğini ayarlayan bir sayıdır.
:::dikkat Yüzde yorumu yapma
$\hat\beta_1 = 8.6$ ise "%8.6 artar" denmez; "8.6 **birim** (dolar) artar" denir. Yüzde yorumu sadece logaritmik modellerde yapılır.
:::

## CARD Üç hesap türü
Sınavdaki regresyon hesap soruları üç kalıptan birine uyar:
**1. Tahmin (prediction):** $X$ değerini yerine koy.
$$\hat Y = \hat\beta_0 + \hat\beta_1X$$
**2. Değişim (change):** $X$, $\Delta X$ kadar değişirse:
$$\Delta\hat Y = \hat\beta_1\,\Delta X$$
Sabit terim fark alınınca **düşer**. $X$'in başlangıç değeri önemsiz, sadece farkı önemli.
**3. Ortalamayı bulma:** doğru $(\bar X, \bar Y)$'den geçer:
$$\bar Y = \hat\beta_0 + \hat\beta_1\bar X$$
:::ornek PS5 Soru 2: $\widehat{\text{TestScore}} = 620.4 - 3.82\times CS$
**a) Tahmin, $CS=23$:** $620.4 - 3.82(23) = 620.4 - 87.86 = 532.54$
(Resmi çözümde yanlışlıkla 22 kullanılıp 536.36 bulunmuş.)
**b) Değişim, 19'dan 23'e:** $\Delta X = 23 - 19 = 4$, $\Delta\hat Y = -3.82\times 4 = -15.28$ (puan düşer)
**c) Ortalama, $\overline{CS} = 21.4$:** $\overline{\text{TestScore}} = 620.4 - 3.82(21.4) = 538.65$
:::

## CARD PS5 Soru 3: kazanç ve yaş
$\widehat{AWE} = 630.5 + 8.6\times\text{Age}$, $R^2 = 0.023$, $SER = 624.1$, örneklem 25–65 yaş. (AWE: ortalama haftalık kazanç, dolar.)
**a) Katsayılar:** Yaş bir yıl artınca ortalama haftalık kazanç 8.6 **dolar** artar. Sabit (630.5) yaş 0 iken kazanç; veri 25–65 arası olduğu için anlamsız.
**b) SER = 624.1 dolar:** kalıntıların tipik büyüklüğü; tahminler tipik olarak ±624 dolar yanılıyor. Birimi $Y$'nin birimi, yani **dolar**.
**c) $R^2 = 0.023$:** yaş, kazanç varyansının sadece %2.3'ünü açıklıyor. **Birimsiz**. Kazançtaki farklılıkların çoğu yaş dışındaki şeylerden kaynaklanıyor.
**d) Tahminler:** 23 yaş: $630.5+8.6(23) = 828.3$; 40 yaş: $630.5 + 8.6(40) = 974.5$
**e) 85 yaş:** güvenilir değil; veri 25–65 arası, dışına çıkmak extrapolation (emeklilik gibi farklı dinamikler var).
**f) Hatalar normal mi?** Muhtemelen hayır: kazanç sağa çarpık (birkaç kişi çok kazanır) ve negatif olamaz; normal dağılım ise simetrik ve tüm reel sayılarda tanımlı.
**g) Ortalama, $\overline{\text{Age}} = 38$:** $\overline{AWE} = 630.5 + 8.6(38) = 957.3$

## CARD PS5 Soru 4: Malta aykırı değeri
65 ülke, ekonomik büyüme ile ticaret payı (ithalat + ihracat / GSYH) ilişkisi:
• **Malta dahil:** $\widehat{\text{growth}} = 0.640 + 2.306\times\text{tradeshare}$ (eğim SE 0.773, $t=2.98$)
• **Malta hariç:** $\widehat{\text{growth}} = 0.957 + 1.681\times\text{tradeshare}$ (SE 0.987, $t=1.70$)
**Ne oldu?** Malta'nın ticaret payı (1.99) diğer bütün ülkelerden çok büyük: bir ==aykırı değer (outlier)==. OLS büyük hataları karesiyle cezalandırdığı için doğru Malta'ya doğru çekilir ve daha dik olur.
**Malta neden farklı?** Bir transit liman: mallar girip hemen tekrar ihraç ediliyor, bu yüzden ticaret payı yapay olarak yüksek. Çözüm setine göre **analizden çıkarılmalı**.
**Sonuç değişiyor:** Malta dahil eğim %1'de anlamlı ($t = 2.98$), hariç %5'te bile değil ($t = 1.70 < 1.96$). Tek bir gözlem sonucu belirliyor!
**Tahminler:** ticaret payı 0.5 için: dahil $0.640 + 2.306(0.5) = 1.79$, hariç $0.957 + 1.681(0.5) = 1.80$. Ticaret payı 1.0 için: dahil $2.95$, hariç $2.64$.
Bu örnek 3. en küçük kareler varsayımının (büyük aykırı değer yok) neden önemli olduğunu gösterir.

## Q
SRC: PS5 Q3a
EN: In $\widehat{AWE} = 630.5 + 8.6\times\text{Age}$ (earnings in dollars, age in years), the coefficient 8.6 means:
TR: Bu regresyonda 8.6 katsayısı ne anlama gelir?
+ one more year of age is associated with 8.6 dollars higher average weekly earnings
- a worker aged 8.6 earns 630.5 dollars
- age explains 8.6% of earnings
- earnings increase 8.6% per year
EX: **Doğru cevap:** bir yaş fazlası, ortalama haftalık kazançta 8.6 dolarlık artışla ilişkilidir.
Eğim yorumu kalıbı: $X$ bir birim (1 yıl) artınca $\hat Y$, $\hat\beta_1$ birim (dolar) artar. Birimleri doğru söylemek önemli.
**Diğer şıklar neden yanlış?**
• "Worker aged 8.6 earns 630.5": katsayıyı $X$ değeri gibi okumak; anlamsız.
• "Explains 8.6%": "açıklanan oran" $R^2$'nin yorumu (burada 0.023), eğiminki değil.
• "Increase 8.6% per year": yüzde yorumu sadece log modellerde yapılır. Burada $Y$ dolar cinsinden, artış 8.6 **dolar**.

## Q
SRC: PS5 Q3e
EN: The earnings regression was estimated with workers aged 25 to 65. Will it give reliable predictions for an 85-year-old?
TR: Regresyon 25–65 yaş verisiyle tahmin edildi. 85 yaşındaki biri için güvenilir tahmin verir mi?
+ No, because 85 is outside the range of the data, so the prediction is an extrapolation.
- Yes, because the regression line is linear.
- Yes, because $R^2$ is positive.
- No, because the slope is not statistically significant.
EX: **Doğru cevap:** hayır, çünkü 85 veri aralığının dışında; tahmin bir **dış değer kestirimi (extrapolation)** olur.
Regresyon sadece gözlenen aralıkta (25–65) ilişkiyi öğrenir. 65'ten sonra emeklilik, sağlık gibi etkenler yüzünden ilişki tamamen farklı olabilir; doğruyu oraya uzatmak güvenilmez. Formül bir sayı verir ($630.5 + 8.6(85) = 1361.5$), ama bu sayıya güvenemezsin.
**Diğer şıklar neden yanlış?**
• "Linear": doğrusallık sadece **veri aralığında** varsayılan bir yaklaşım; aralık dışında da doğrusal olacağının garantisi yok.
• "$R^2$ positive": $R^2$ uyumu ölçer, aralık dışı tahminin güvenilirliğini değil.
• "Slope not significant": sorun anlamlılık değil, extrapolation. (Ayrıca soruda anlamlılık bilgisi yok.)

## Q
SRC: PS5 Q3f
EN: Is it plausible that the regression errors in the earnings–age regression are normally distributed?
TR: Kazanç regresyonunun hatalarının normal dağılması makul mü?
+ No: earnings are right-skewed and cannot be negative, while a normal variable can take any real value.
- Yes: errors are always normally distributed.
- Yes: the CLT makes each error normal.
- No: because the slope is positive.
EX: **Doğru cevap:** hayır; kazanç sağa çarpıktır ve negatif olamaz, normal dağılımlı bir değişken ise her reel değeri alabilir.
İki uyumsuzluk:
1. **Simetri:** normal dağılım simetrik; kazanç dağılımı ise uzun sağ kuyruklu (birkaç kişi çok kazanır).
2. **Sınır:** normal dağılım $-\infty$'dan $+\infty$'a kadar değer alır; kazanç ise 0'ın altına inemez.
**Diğer şıklar neden yanlış?**
• "Always normal": hatanın normalliği ayrı (ve çoğu zaman gerçekçi olmayan) bir varsayımdır.
• "CLT makes each error normal": MLT **ortalamalar** (ve $\hat\beta$) hakkındadır; tek tek hataları normal yapmaz.
• "Slope is positive": eğimin işaretinin hata dağılımıyla ilgisi yok.

## Q
SRC: PS5 Q2b
EN: Using $\widehat{\text{TestScore}} = 620.4 - 3.82\times CS$, if class size increases from 19 to 23, the predicted change in the test score is:
TR: Sınıf mevcudu 19'dan 23'e çıkarsa tahmini puan değişimi nedir?
+ $-15.28$
- $-3.82$
- $532.54$
- $+15.28$
EX: **Doğru cevap: −15.28.**
"Değişim" sorusu → $\Delta\hat Y = \hat\beta_1\Delta X$.
1. $\Delta X = 23 - 19 = 4$
2. $\Delta\hat Y = -3.82\times4 = -15.28$
Sabit terim (620.4) farkta düşer: $(620.4 - 3.82\cdot 23) - (620.4 - 3.82\cdot 19) = -3.82\cdot 4$.
**Diğer şıklar nereden geliyor?**
• −3.82: tek birimlik değişim; $\Delta X = 4$ ile çarpmayı unutmuşsun.
• 532.54: $CS = 23$ için **tahmin** (seviye), değişim değil.
• +15.28: işareti kaybetmişsin; eğim negatif, sınıf büyüyünce puan **düşer**.

## Q
SRC: PS5 Q4e
EN: The growth–trade share regression is steeper when Malta is included because:
TR: Malta dahil edilince doğru neden daha dik?
+ Malta is an outlier with a very large trade share and relatively high growth, pulling the line toward it
- Malta has the smallest trade share in the sample
- including more observations always increases the slope
- Malta has negative growth
EX: **Doğru cevap:** Malta, çok büyük ticaret payı ve görece yüksek büyümesiyle bir aykırı değer; doğruyu kendine doğru çekiyor.
Mekanizma: OLS kalıntıların **karelerini** küçültür. Malta $X$ ekseninde çok uzakta (1.99) ve yukarıda. Doğru Malta'yı ıskalarsa kalıntının karesi çok büyük olur; bu yüzden doğru Malta'ya doğru dikleşir. Eğim 1.681'den 2.306'ya çıkar.
**Diğer şıklar neden yanlış?**
• "Smallest trade share": tam tersi, en büyüğü.
• "More observations always increases slope": gözlem eklemek eğimi artırabilir de azaltabilir de.
• "Negative growth": negatif büyümeli uç bir nokta doğruyu aşağı çeker, dikleştirmez.

## Q
SRC: PS5 Q1a
EN: In $\widehat{\text{TestScore}} = 698.93 - 2.28\times\text{STR}$, the intercept 698.93 is best described as:
TR: Sabit terim 698.93 nasıl yorumlanır?
+ the predicted score when STR $=0$, which is not meaningful because STR $=0$ is far outside the data
- the average test score in the sample
- the effect of one more student per teacher
- the highest test score in the sample
EX: **Doğru cevap:** STR $=0$ iken tahmini puan; ama STR $=0$ verinin çok dışında olduğu için anlamlı değil.
Formül: $\hat Y(\text{STR}=0) = 698.93 - 2.28\cdot 0 = 698.93$. Ama öğretmen başına sıfır öğrenci imkânsız ve verideki en küçük STR 14. Bu bir extrapolation; sabit sadece doğrunun yüksekliğini belirleyen bir sayı.
**Diğer şıklar neden yanlış?**
• "Average test score": ortalama puan $\bar Y$; doğruya $\overline{\text{STR}}$ koyunca bulunur ($\approx 654$), sabit değil.
• "Effect of one more student": bu eğim, $-2.28$.
• "Highest score": sabitin en yüksek değerle ilgisi yok.

## GEN regPredict
## GEN regChange
## GEN regMean

## Q
SRC: TB 4.8
EN: In the simple linear regression model, the slope coefficient:
TR: Basit doğrusal regresyon modelinde eğim katsayısı:
+ tells you by how many units $Y$ changes when $X$ increases by one unit
- tells you by how many percent $Y$ changes when $X$ increases by one percent
- gives you the predicted $Y$ when multiplied by the regressor
- is the elasticity of $Y$ with respect to $X$
EX: **Doğru cevap: units change in $Y$ per one-unit increase in $X$.**
$\beta_1 = \Delta Y/\Delta X$. Örnek: test puanı $= 698.9 - 2.28 \times STR$ ise, STR 1 öğrenci artınca puan ortalamada 2.28 **puan** düşer.
**Diğer şıklar neden yanlış?**
• percent / elasticity: yüzde yorumu ancak log-log modelde olur ($\ln Y$ ile $\ln X$); doğrusal modelde değil.
• "multiplied by the regressor": tahmin için sabit terim de gerekir: $\hat Y = \hat\beta_0 + \hat\beta_1 X$.

## Q
SRC: TB 4.10
EN: Interpreting the intercept of an estimated regression line is:
TR: Tahmin edilen bir regresyon doğrusunun sabit terimini yorumlamak:
+ reasonable if your sample contains values of $X_i$ near zero
- never reasonable, because you never observe values of the regressor near zero
- reasonable because, under certain conditions, the estimator is BLUE
- not reasonable, because economists only care about changes
EX: **Doğru cevap: reasonable if the sample has $X$ near zero.**
$\hat\beta_0$ = $X = 0$'daki tahmin. Verinde $X$ sıfıra yakın değerler varsa bu tahmin anlamlıdır. Yoksa veri aralığının çok dışına çıkarsın (extrapolation) ve yorum güvenilmez olur. Örnek: STR = 0 (öğretmen var, öğrenci yok) anlamsız; bu yüzden 698.9'u yorumlamayız.
**Diğer şıklar neden yanlış?**
• "never": bazı uygulamalarda $X = 0$ gözlenir; o zaman yorumlanabilir.
• BLUE: istatistiksel bir özellik; yorumun anlamlı olup olmadığını belirlemez.
• "only care about changes": sabit terim de bazen ilgi çekicidir; "asla" demek yanlış.

## Q
SRC: TB 4.11
EN: The estimated regression is $\widehat{TestScore} = 698.9 - 2.28 \times STR$. If the student–teacher ratio falls by 2, the regression predicts that test scores will:
TR: Tahmin edilen regresyon $\widehat{TestScore} = 698.9 - 2.28 \times STR$. Öğrenci-öğretmen oranı 2 azalırsa regresyon test puanlarının ne olacağını tahmin eder?
+ rise by 4.56 points, on average
- fall by 4.56 points, on average
- rise by 2.28 points, on average
- rise by exactly 4.56 points in every district
EX: **Doğru cevap: rise by 4.56 points on average.**
$$\Delta\widehat{TestScore} = -2.28 \times (-2) = +4.56$$
Eğim negatif, $X$ de azalıyor: eksi çarpı eksi = artış.
==Not:== Test bankasındaki şıklar bozuk basılmış; doğru hesap +4.56.
**Diğer şıklar neden yanlış?**
• fall by 4.56: işaret hatası; azalan STR puanı **artırır**.
• 2.28: sadece 1 birimlik değişim; $\Delta X = 2$ ile çarpmak gerekir.
• "exactly in every district": regresyon **ortalama** etkiyi verir; her bölgede hata terimi farklıdır.

## Q
SRC: TB 4.22
EN: To decide whether an estimated slope coefficient indicates a "large" effect of $X$ on $Y$, you should:
TR: Tahmin edilen bir eğim katsayısının $X$'in $Y$ üzerinde "büyük" bir etkisi olduğunu gösterip göstermediğine karar vermek için ne yapmalısın?
+ judge the economic (real-world) importance of the effect of a realistic change in $X$
- check whether the slope coefficient is larger than one
- check whether the slope is statistically significant
- rescale $X$ until the coefficient looks big enough
EX: **Doğru cevap: economic importance.**
"Büyük mü?" sorusu bağlama bağlıdır. Örnek: STR'yi 2 azaltmak puanı 4.56 artırır. Puanların standart sapması 19 civarında olduğu için bu yaklaşık 0.24 standart sapmalık, orta büyüklükte bir etkidir. Bu değerlendirme ekonomik/pratik önem değerlendirmesidir.
**Diğer şıklar neden yanlış?**
• "> 1": sayı, birim seçimine bağlıdır (dakika ya da saat); büyüklük ölçüsü değil.
• statistical significance: anlamlılık etkinin **sıfırdan farklı** olduğunu söyler, **büyük** olduğunu değil. Büyük örneklemde küçücük etkiler bile anlamlı çıkar.
• rescale: birimi değiştirmek etkinin gerçek büyüklüğünü değiştirmez.

## Q
SRC: TB 4.26
EN: Using data on more than 100 households, you estimate $C_i = \beta_0 + \beta_1 Y_i + u_i$, where $C$ is consumption and $Y$ is disposable income. The estimate of $\beta_1$ tells you:
TR: 100'den fazla hanenin verisiyle $C_i = \beta_0 + \beta_1 Y_i + u_i$ modelini tahmin ediyorsun; $C$ tüketim, $Y$ harcanabilir gelir. $\beta_1$'in tahmini sana ne söyler?
+ $\Delta C / \Delta Y$, the marginal propensity to consume
- the amount a household must consume to survive
- $C/Y$, the average propensity to consume
- $\Delta Y / \Delta C$
EX: **Doğru cevap: $\Delta C/\Delta Y$, the marginal propensity to consume.**
Gelir 1 lira artınca tüketim ortalamada $\beta_1$ lira artar. Makroekonomideki adı **marjinal tüketim eğilimi** (MPC).
**Diğer şıklar neden yanlış?**
• survival consumption: bu yorum, gelir 0 iken tüketim olan sabit terime ($\beta_0$) daha yakın, eğime değil.
• $C/Y$: ortalama tüketim eğilimi; sabit terim sıfır değilse eğimden farklıdır.
• $\Delta Y/\Delta C$: ters oran.

## Q
SRC: TB 4.27
EN: In which of the following regressions does the intercept have a real-world interpretation?
TR: Aşağıdaki regresyonlardan hangisinde sabit terimin gerçek hayatta bir anlamı vardır?
+ weight of adults on height, with height measured in inches above 4 feet
- the demand for coffee on its price
- test scores on class size
- earnings on age
EX: **Doğru cevap: weight on height measured above 4 feet.**
Boy "4 fitin üzerindeki inç" olarak ölçülünce $X = 0$, 4 fit (yaklaşık 122 cm) boyunda bir yetişkin demektir. Böyle yetişkinler var; sabit terim onların tahmini kilosu olarak yorumlanabilir.
**Diğer şıklar neden yanlış?**
• coffee price = 0: bedava kahve; veri aralığının çok dışında.
• class size = 0: öğrencisiz sınıf; anlamsız.
• age = 0: bebeklerin kazancı; veride yok ve anlamsız.

## Q
SRC: TB 4.29
EN: Measuring test scores in hundreds of points instead of in points changes all of the following EXCEPT:
TR: Test puanlarını puan yerine yüz puan biriminde ölçmek aşağıdakilerin hepsini değiştirir, BİRİ HARİÇ:
+ the economic interpretation of the effect of a change in $X$ on $Y$
- the residuals
- the numerical value of the slope estimate
- the numerical value of the intercept estimate
EX: **Doğru cevap: the interpretation does not change.**
$Y$'yi 100'e bölünce $\hat\beta_0$, $\hat\beta_1$ ve kalıntıların hepsi 100'e bölünür: eğim $-2.28$ yerine $-0.0228$ olur. Ama anlamı aynı: "STR 1 artınca puan 0.0228 **yüz puan**, yani 2.28 puan düşer." Gerçek dünyadaki etki değişmez.
**Diğer şıklar** sayısal olarak 100'e bölünür, yani değişir.

--- LESSON u5d | R² | Uyum ölçüleri: R² ve SER

## CARD Kareler toplamları ve R²
Regresyon $Y$'deki değişkenliğin ne kadarını açıklıyor? Değişkenliği üç parçaya ayırırız:
| Kısaltma | Ad | Formül | Anlamı |
| TSS | total sum of squares | $\sum(Y_i-\bar Y)^2$ | $Y$'nin toplam değişkenliği |
| ESS | explained sum of squares | $\sum(\hat Y_i-\bar Y)^2$ | regresyonun açıkladığı |
| SSR | sum of squared residuals | $\sum\hat u_i^2$ | açıklanamayan |
**Temel eşitlik:** $TSS = ESS + SSR$ (toplam = açıklanan + açıklanamayan).
$$R^2 = \frac{ESS}{TSS} = 1 - \frac{SSR}{TSS}$$
• ==Regresyon R²==: $Y$'nin örneklem varyansının $X$ tarafından **açıklanan oranı**.
• $0\le R^2\le 1$ ve **birimsiz** (iki kareler toplamının oranı; birimler sadeleşir).
• $R^2 = 0$: $X$ hiçbir şey açıklamıyor (doğru yatay, $\hat Y = \bar Y$). $R^2 = 1$: bütün noktalar doğru üzerinde.
• Tek regresörlü modelde $R^2 = r_{XY}^2$ (korelasyonun karesi). $r = -0.6$ ise $R^2 = 0.36$.
:::ornek Sayıyla
$TSS = 2439$, $SSR = 756$: $R^2 = 1 - 756/2439 = 0.69$. $X$, $Y$'deki değişkenliğin %69'unu açıklıyor.
:::
:::dikkat Düşük R² ≠ kötü model
$R^2$ uyumu ölçer, nedenselliği ya da katsayının doğruluğunu değil. Kazanç–yaş regresyonunda $R^2 = 0.023$ ama yaşın etkisi yine de anlamlı ve önemli olabilir.
:::

## CARD Regresyonun standart hatası (SER)
==SER (standard error of the regression)==: hata terimi $u_i$'nin standart sapmasının tahmini; kalıntıların tipik büyüklüğü.
$$SER = s_{\hat u} = \sqrt{\frac{SSR}{n-2}} = \sqrt{\frac{1}{n-2}\sum\hat u_i^2}$$
• **$n-2$:** iki katsayı ($\beta_0, \beta_1$) tahmin edildiği için iki serbestlik derecesi kaybedilir. (Örneklem varyansında $\bar Y$ için bir kayıp vardı, $n-1$.)
• **Birimi $Y$'nin birimiyle aynı** (dolar, puan...). Kalıntıların standart sapması çünkü.
• Yorum: noktaların doğru etrafındaki tipik yayılımı; tahminlerin tipik olarak ne kadar yanıldığı.
:::ornek Sayıyla
$SSR = 26450$, $n = 52$: $SER = \sqrt{26450/50} = \sqrt{529} = 23$
:::
:::ornek Kaliforniya
$R^2 = 0.051$: STR, test puanı varyansının %5.1'ini açıklıyor.
$SER = 18.6$ puan: STR'ye bakarak yapılan tahminler tipik olarak ±18.6 puan yanılıyor.
:::
**R² ve SER karşılaştırması:**
| | $R^2$ | SER |
| Ne ölçer? | açıklanan oran | tipik hata büyüklüğü |
| Birimi | yok | $Y$'nin birimi |
| İyi uyum | 1'e yakın | küçük |

## CARD PS5 Soru 2d hilesi: R² ve SER'den s_Y
Bilinenler: $R^2 = 0.08$, $SER = 11.5$, $n=100$. İstenen: test puanlarının örneklem standart sapması $s_Y$.
Mantık: $R^2$ ve SER'den TSS'yi geri hesaplarız; TSS'den de $s_Y$.
1. **SSR'yi bul:** $SER = \sqrt{SSR/(n-2)}$ → $SSR = (n-2)\,SER^2 = 98\times 11.5^2 = 98\times 132.25 = 12960.5$
2. **TSS'yi bul:** $R^2 = 1-SSR/TSS$ → $TSS = SSR/(1-R^2) = 12960.5/0.92 = 14087.5$
3. **$s_Y$'yi bul:** $s_Y^2 = TSS/(n-1)$ → $s_Y = \sqrt{14087.5/99} = \sqrt{142.3} = 11.93$
Tek formülde:
$$s_Y = \sqrt{\frac{n-2}{n-1}\cdot\frac{SER^2}{1-R^2}} = \sqrt{\frac{98}{99}\cdot\frac{132.25}{0.92}} = 11.93$$
Sezgi: $R^2$ küçük (0.08) olduğu için regresyon pek bir şey açıklamıyor; bu yüzden $s_Y$ (11.93) SER'e (11.5) çok yakın.

## Q
SRC: PS5 Q1j
EN: The regression $R^2$ is:
TR: Regresyon $R^2$'si nedir?
+ the fraction of the sample variance of $Y$ explained by $X$
- the correlation between $X$ and $Y$
- the standard deviation of the residuals
- the slope of the regression line
EX: **Doğru cevap:** $Y$'nin örneklem varyansının $X$ tarafından açıklanan **oranı**: $R^2 = ESS/TSS$.
Örnek: $R^2 = 0.051$ → STR, test puanlarındaki değişkenliğin %5.1'ini açıklıyor.
**Diğer şıklar ne?**
• "Correlation": tek regresörde $R^2$ korelasyonun **karesidir** ($r^2$), kendisi değil. $r = 0.5$ ise $R^2 = 0.25$.
• "Standard deviation of the residuals": bu **SER**.
• "Slope": $\hat\beta_1$; uyum değil, etki büyüklüğü.

## Q
SRC: PS5 Q3b
EN: The SER in the earnings regression ($Y$ in dollars, $X$ in years) is measured in:
TR: Kazanç regresyonunda SER'in birimi nedir?
+ dollars
- years
- it is unit free
- dollars per year
EX: **Doğru cevap: dolar.**
SER kalıntıların standart sapmasıdır. Kalıntılar $\hat u_i = Y_i - \hat Y_i$, yani $Y$ cinsinden (dolar). Kareler alınıp karekök alınınca birim yine dolar olur.
**Diğer şıklar ne?**
• Yıl: $X$'in birimi; SER $X$ ile ölçülmez.
• Birimsiz: bu $R^2$'nin özelliği.
• "Dollars per year": bu **eğimin** birimi ($\Delta Y/\Delta X$).

## Q
SRC: PS5 Q3c
EN: The $R^2$ is measured in:
TR: $R^2$'nin birimi nedir?
+ it is unit free
- units of $Y$
- units of $X$
- units of $Y$ squared
EX: **Doğru cevap:** birimsizdir.
$R^2 = ESS/TSS$: iki kareler toplamının oranı. İkisinin birimi de ($Y$ birimi)², bölünce sadeleşir. Bu yüzden $Y$'yi dolardan TL'ye çevirmek $R^2$'yi değiştirmez.
**Diğer şıklar neden yanlış?**
• $Y$'nin birimi: bu SER'in birimi.
• $X$'in birimi: hiçbir uyum ölçüsü $X$ birimiyle ölçülmez.
• $Y$'nin birimi kare: bu TSS, ESS, SSR'nin birimi; oran alınca kaybolur.

## Q
SRC: PS5 Q3c
EN: $R^2 = 0.023$ in the earnings–age regression means:
TR: Kazanç-yaş regresyonunda $R^2=0.023$ ne demek?
+ age explains only 2.3% of the variance of earnings
- the slope is 0.023
- the correlation between age and earnings is 0.023
- 2.3% of the observations lie on the regression line
EX: **Doğru cevap:** yaş, kazanç varyansının sadece **%2.3**'ünü açıklıyor.
$0.023 = 2.3/100$. Kazançtaki farklılıkların %97.7'si yaş dışındaki faktörlerden (eğitim, meslek, cinsiyet...) kaynaklanıyor.
**Diğer şıklar neden yanlış?**
• "Slope is 0.023": eğim 8.6; $R^2$ ile eğim farklı kavramlar.
• "Correlation is 0.023": korelasyon $\sqrt{0.023} = 0.15$ olurdu ($R^2 = r^2$).
• "2.3% of observations on the line": $R^2$ noktaların sayısıyla ilgili değil, açıklanan varyans oranıyla ilgili.

## Q
EN: The SER divides the sum of squared residuals by:
TR: SER hesaplanırken SSR neye bölünür?
+ $n-2$
- $n$
- $n-1$
- $\sqrt n$
EX: **Doğru cevap: $n-2$.**
$SER = \sqrt{SSR/(n-2)}$. Kalıntıları hesaplamak için iki katsayı ($\hat\beta_0$, $\hat\beta_1$) tahmin ettik; her tahmin bir serbestlik derecesi "harcar". Bu düzeltme, SER'i $\sigma_u$ için daha iyi bir tahmin yapar.
**Diğer şıklar neden yanlış?**
• $n$: düzeltmesiz; $\sigma_u$'yu olduğundan küçük tahmin eder.
• $n-1$: örneklem varyansı $s^2_Y$'de kullanılır (sadece $\bar Y$ tahmin edilir, bir kayıp).
• $\sqrt n$: standart hata formüllerinde geçer, burada değil.

## Q
EN: If the sample correlation between $X$ and $Y$ is $-0.6$, the $R^2$ of the regression of $Y$ on $X$ is:
TR: $r_{XY}=-0.6$ ise $Y$'nin $X$ üzerine regresyonunun $R^2$'si kaçtır?
+ $0.36$
- $-0.36$
- $0.6$
- $-0.6$
EX: **Doğru cevap: 0.36.**
Tek regresörlü modelde $R^2 = r^2$:
$$R^2 = r^2 = (-0.6)^2 = 0.36$$
Negatif korelasyonun karesi pozitiftir. İlişkinin yönü (işaret) $R^2$'de kaybolur; $R^2$ sadece gücü söyler.
**Diğer şıklar neden yanlış?**
• −0.36: $R^2$ bir oran (açıklanan / toplam), **asla negatif olamaz**.
• 0.6 ve −0.6: korelasyonun kendisi; karesini almayı unutmuşsun.

## GEN r2Calc
## GEN serCalc
## GEN sdYfromR2

## Q
SRC: TB 4.1
EN: In the simple regression model, the estimated slope coefficient $\hat\beta_1$ is exactly zero. Then:
TR: Basit regresyon modelinde tahmin edilen eğim katsayısı $\hat\beta_1$ tam sıfır. O zaman:
+ $R^2 = 0$
- $0 < R^2 < 1$
- $R^2 = 1$
- $R^2 > SSR/TSS$
EX: **Doğru cevap: $R^2 = 0$.**
1. $\hat\beta_1 = 0$ ⇒ $\hat\beta_0 = \bar Y - 0 = \bar Y$, yani her $\hat Y_i = \bar Y$.
2. $ESS = \sum (\hat Y_i - \bar Y)^2 = 0$.
3. $R^2 = ESS/TSS = 0$.
Regresyon, $Y$'nin sadece ortalamasıyla tahmin edilmesinden daha iyi değil.
**Diğer şıklar neden yanlış?**
• $0<R^2<1$ veya $R^2 = 1$: açıklanan varyasyon yok.
• $R^2 > SSR/TSS$: burada $SSR = TSS$, yani $SSR/TSS = 1 > R^2 = 0$.

## Q
SRC: TB 4.2
EN: The regression $R^2$ is defined as:
TR: Regresyon $R^2$'si nasıl tanımlanır?
+ $\dfrac{\sum_{i=1}^{n}(\hat Y_i - \bar Y)^2}{\sum_{i=1}^{n}(Y_i - \bar Y)^2}$
- $\dfrac{\sum_{i=1}^{n}\hat u_i^2}{\sum_{i=1}^{n}(Y_i - \bar Y)^2}$
- $\dfrac{\sum_{i=1}^{n}(Y_i - \bar Y)^2}{\sum_{i=1}^{n}(\hat Y_i - \bar Y)^2}$
- $\dfrac{\sum_{i=1}^{n}(\hat Y_i - \bar Y)^2}{\sum_{i=1}^{n}\hat u_i^2}$
EX: **Doğru cevap: $ESS/TSS$.**
$R^2 = \dfrac{ESS}{TSS}$; $ESS = \sum(\hat Y_i - \bar Y)^2$ (açıklanan), $TSS = \sum(Y_i - \bar Y)^2$ (toplam). Değeri 0 ile 1 arasındadır.
**Diğer şıklar neden yanlış?**
• $SSR/TSS$: açıklanamayan oran; bu $1 - R^2$.
• $TSS/ESS$: ters; 1'den büyük çıkar.
• $ESS/SSR$: 0–1 aralığında olmak zorunda değil; $R^2$ değil.

## Q
SRC: TB 4.3
EN: The standard error of the regression (SER) is:
TR: Regresyonun standart hatası (SER) nedir?
+ $\sqrt{\dfrac{1}{n-2}\sum_{i=1}^{n}\hat u_i^2}$
- $\sum_{i=1}^{n}\hat u_i^2$
- $1 - R^2$
- $\sqrt{\dfrac{1}{n-1}\sum_{i=1}^{n}(Y_i - \bar Y)^2}$
EX: **Doğru cevap: $\sqrt{SSR/(n-2)}$.**
SER, gözlemlerin regresyon doğrusu etrafındaki tipik sapmasını ölçer; $Y$'nin biriminde ifade edilir. $n-2$: iki katsayı ($\hat\beta_0$, $\hat\beta_1$) tahmin edildiği için iki serbestlik derecesi düşülür.
**Diğer şıklar neden yanlış?**
• $SSR$: kalıntı kareleri toplamı; bölme ve karekök eksik.
• $1 - R^2$: açıklanamayan **oran**; birimsiz, standart hata değil.
• $s_Y$: $Y$'nin kendi standart sapması; regresyonu hiç kullanmıyor.

## Q
SRC: TB 4.4
EN: Which of the following statements is correct?
TR: Aşağıdaki ifadelerden hangisi doğrudur?
+ $TSS = ESS + SSR$
- $ESS = SSR + TSS$
- $ESS > TSS$
- $R^2 = 1 - ESS/TSS$
EX: **Doğru cevap: $TSS = ESS + SSR$.**
Toplam varyasyon = açıklanan ($ESS$) + açıklanamayan ($SSR$). Bu ayrıştırma OLS'de her zaman geçerlidir. Buradan $R^2 = ESS/TSS = 1 - SSR/TSS$.
**Diğer şıklar neden yanlış?**
• $ESS = SSR + TSS$: parça bütünden büyük olamaz.
• $ESS > TSS$: aynı sebep; $ESS \le TSS$.
• $1 - ESS/TSS$: bu $SSR/TSS$, yani $1 - R^2$. Doğru formülde $SSR$ olmalı: $R^2 = 1 - SSR/TSS$.

## Q
SRC: TB 4.15
EN: The regression $R^2$ is a measure of:
TR: Regresyon $R^2$'si neyin ölçüsüdür?
+ how well the regression line fits the data (goodness of fit)
- whether or not $X$ causes $Y$
- whether or not $ESS > TSS$
- the square root of the correlation coefficient
EX: **Doğru cevap: goodness of fit.**
$R^2$, $Y$'deki varyasyonun ne kadarının $X$ ile açıklandığını gösterir; doğrunun veriye uyumunu ölçer.
**Diğer şıklar neden yanlış?**
• causality: yüksek $R^2$ nedenselliği kanıtlamaz; düşük $R^2$ da nedenselliği dışlamaz.
• $ESS > TSS$: bu hiçbir zaman olmaz.
• "square root of correlation": tersi; basit regresyonda $R^2$ korelasyonun **karesidir**: $R^2 = r_{XY}^2$.

## Q
SRC: TB 4.25
EN: You multiply the dependent variable by 100 and the regressor by 100,000 and re-estimate the regression. Which of the following stays the same?
TR: Bağımlı değişkeni 100 ile, açıklayıcı değişkeni 100.000 ile çarpıp regresyonu yeniden tahmin ediyorsun. Aşağıdakilerden hangisi aynı kalır?
+ the regression $R^2$
- the OLS estimate of the slope
- the OLS estimate of the intercept
- the variance of the OLS estimators
EX: **Doğru cevap: $R^2$.**
$Y$'yi 100 ile çarpınca $ESS$ ve $TSS$ ikisi de $100^2$ ile çarpılır, oranları değişmez. $X$'in ölçeği ise uyumu hiç değiştirmez. $R^2$ **birimsizdir**.
**Diğer şıklar neden yanlış?**
• slope: $\hat\beta_1 = s_{XY}/s_X^2$, $100/100{,}000$ ile çarpılır, yani 1000'e bölünür.
• intercept: $Y$'nin birimindedir, 100 ile çarpılır.
• variances: katsayılar değişince varyansları da değişir.

## Q
SRC: TB 4.33
EN: All of the following statements are true EXCEPT:
TR: Aşağıdaki ifadelerin hepsi doğrudur, BİRİ HARİÇ:
+ $SSR = \sum_{i=1}^{n}(\hat Y_i - \bar Y)^2$
- $R^2 = ESS/TSS$
- $R^2 = 1 - SSR/TSS$
- in the simple regression, $R^2 = r_{XY}^2$
EX: **Doğru cevap (yanlış ifade): $SSR = \sum(\hat Y_i - \bar Y)^2$.**
Bu formül **ESS**'nin (açıklanan kareler toplamı) formülüdür. Doğrusu $SSR = \sum \hat u_i^2 = \sum (Y_i - \hat Y_i)^2$.
**Diğer ifadeler doğru:**
• $R^2 = ESS/TSS$: tanım.
• $R^2 = 1 - SSR/TSS$: $TSS = ESS + SSR$'den gelir.
• basit regresyonda $R^2$, $X$ ile $Y$ arasındaki örneklem korelasyonunun karesine eşittir.

## Q
SRC: TB 4.34
EN: A low regression $R^2$ means that:
TR: Düşük bir regresyon $R^2$'si ne anlama gelir?
+ there are other important factors that influence the dependent variable
- the regression is bad and should be thrown away
- the regression tells you what the other factors influencing $Y$ are
- the SSR is small relative to the total variation in $Y$
EX: **Doğru cevap: other important factors influence $Y$.**
Düşük $R^2$: $X$, $Y$'nin varyasyonunun sadece küçük bir kısmını açıklıyor; geri kalanı hata terimindeki diğer faktörlerden geliyor. Örnek: test puanı–STR regresyonunda $R^2 = 0.051$, yani gelir, aile yapısı gibi birçok faktör var.
**Diğer şıklar neden yanlış?**
• "bad regression": düşük $R^2$ ile de $\beta_1$ güvenilir ve nedensel olarak tahmin edilebilir. $R^2$ ve eğimin geçerliliği farklı sorular.
• "tells you the other factors": regresyon onların **ne** olduğunu söylemez, sadece var olduklarını gösterir.
• "SSR small": tersi; düşük $R^2$, $SSR$'nin $TSS$'ye göre **büyük** olduğu anlamına gelir.

--- LESSON u5e | E(u|X) | En küçük kareler varsayımları

## CARD Üç varsayım
OLS her zaman bir doğru çizer. Ama bu doğrunun eğimini **nedensel etki** olarak yorumlamak ve hipotez testi yapabilmek için üç varsayım gerekir:
**1. Sıfır koşullu ortalama (zero conditional mean):** $E(u_i\mid X_i) = 0$
$X$'i bilmek, $u$'daki diğer faktörlerin ortalaması hakkında bilgi vermez. Diğer faktörler $X$ ile sistematik olarak ilişkili değil.
**2. Rastgele örnekleme:** $(X_i, Y_i)$, $i = 1,\dots,n$ gözlemler arasında **i.i.d.**
Basit rastgele örneklemle sağlanır.
**3. Büyük aykırı değer yok:** $E(X_i^4)<\infty$, $E(Y_i^4)<\infty$
Çok uç değerlerin olasılığı düşük (sonlu dördüncü momentler). Malta örneği bu varsayımın neden önemli olduğunu gösterir.
**Hangisi önemli?**
• En önemlisi **1. varsayım**. Tutmazsa $\hat\beta_1$ yanlı olur.
• İdeal RCE'de $X$ rastgele atandığı için 1. varsayım otomatik olarak makuldür.
• Gözlemsel veride 1. varsayımın tutup tutmadığını ciddi şekilde düşünmek gerekir.
:::dikkat Bunlar değil
Homoskedastisite (sabit varyans) ve hataların normalliği bu üç varsayım arasında **değildir**. Onlar Hafta 6'daki **ek** varsayımlardır.
:::

## CARD 1. varsayım ne zaman bozulur?
Mantık zinciri (Hafta 2'den): $E(u\mid X)=0 \Rightarrow \text{corr}(X,u) = 0$.
Karşıt ters yönü (contrapositive): $\text{corr}(X,u)\ne0 \Rightarrow E(u\mid X)\ne0$.
Yani: **$u$'nun içinde $X$ ile ilişkili bir faktör varsa 1. varsayım bozulur.** Bu faktör karıştırıcı değişkendir (Hafta 1).
:::ornek Kaliforniya
• Bölge geliri test puanını etkiliyor ama modelde yok → $u$'nun içinde.
• Gelir STR ile de ilişkili (zengin bölgelerde sınıflar küçük).
• O zaman $\text{corr}(\text{STR}, u)\ne 0$ ve 1. varsayım **tutmaz**.
• Sonuç: $\hat\beta_1 = -2.28$, sınıf mevcudunun gerçek etkisinin yanlı bir tahmini olabilir (bir kısmı gelirin etkisi).
:::
**Varsayımların iki rolü:**
1. **Matematiksel:** tutuyorlarsa OLS tahmincisi büyük örneklemde tutarlıdır ve yaklaşık normal dağılır; böylece hipotez testi ve güven aralığı kurulabilir.
2. **Kavramsal:** OLS'nin nedensel etkiyi bulmakta zorlandığı durumları (karıştırıcılar, seçim, aykırı değerler) düzenli bir şekilde düşünmeyi sağlar.

## CARD PS5 Soru 5: LIE ile üç ispat
$E(u_i\mid X_i) = 0$ varsay. Yinelenen beklentiler yasasıyla ($E(Y) = E[E(Y|X)]$) üç sonuç çıkar:
**(i) Hata ortalaması sıfır:**
$E(u_i) = E[E(u_i\mid X_i)] = E(0) = 0$
**(ii) $X$ ile hatanın çarpımının ortalaması sıfır:**
$E(X_iu_i) = E[E(X_iu_i\mid X_i)] = E[X_iE(u_i\mid X_i)] = E(X_i\cdot0) = 0$
Kritik adım: $X_i$'yi koşullu beklentinin **dışına** çıkarabiliriz, çünkü $X_i$ bilindiğinde (koşul) sabittir.
**(iii) Kovaryans sıfır:**
$\text{cov}(X_i,u_i) = E(X_iu_i) - E(X_i)E(u_i) = 0 - E(X_i)\cdot 0 = 0$
:::ipucu Yön önemli
$E(u|X) = 0$ → $\text{cov}(X, u) = 0$ ✓. Ama tersi her zaman doğru değil: kovaryans sıfırken $E(u|X)$ sıfırdan farklı olabilir (doğrusal olmayan ilişki). Sıfır koşullu ortalama daha güçlü bir varsayımdır.
:::

## Q
SRC: PS5 Q1l
EN: The three least squares assumptions are:
TR: Üç en küçük kareler varsayımı hangileridir?
+ $E(u_i\mid X_i)=0$; $(X_i,Y_i)$ are i.i.d.; large outliers are unlikely
- homoskedasticity; normality; $R^2>0.5$
- $\hat\beta_1>0$; $n>30$; $X$ is binary
- $u_i$ normal; $X$ fixed; no intercept
EX: **Doğru cevap:** (1) $E(u_i\mid X_i)=0$; (2) $(X_i,Y_i)$ i.i.d.; (3) büyük aykırı değerler olası değil.
Hafıza: **S**ıfır koşullu ortalama, **R**astgele örnekleme, **A**ykırı değer yok.
**Diğer şıklar neden yanlış?**
• Homoskedastisite ve normallik: Hafta 6'daki **ek** varsayımlar; temel üç varsayımın parçası değil. $R^2 > 0.5$ hiçbir zaman varsayım değil.
• $\hat\beta_1 > 0$, $n > 30$, $X$ ikili: bunlar sonuçlar ya da özel durumlar, varsayım değil.
• Normal $u$, sabit $X$, sabit terim yok: ders bu varsayımları kullanmıyor.

## Q
EN: Which least squares assumption is the most important to consider in practice?
TR: Pratikte en önemli en küçük kareler varsayımı hangisi?
+ $E(u_i\mid X_i) = 0$
- $(X_i, Y_i)$ are i.i.d.
- finite fourth moments
- the errors are normally distributed
EX: **Doğru cevap:** $E(u_i\mid X_i) = 0$ (sıfır koşullu ortalama).
Ders notu açıkça söyler: pratikte en önemlisi bu. Tutmazsa (ör. bölge geliri gibi bir karıştırıcı varsa) $\hat\beta_1$ yanlı ve tutarsız olur; örneklem büyüse bile düzelmez.
**Diğer şıklar neden daha az önemli?**
• i.i.d.: rastgele örneklemle genelde zaten sağlanır.
• Sonlu dördüncü momentler: aykırı değerleri kontrol ederek (Malta gibi) ele alınabilir.
• Normal hatalar: varsayım listesinde bile yok; büyük örneklemde MLT sayesinde gerekmez.

## Q
SRC: PS5 Q5
EN: If $E(u_i\mid X_i) = 0$, then by the law of iterated expectations:
TR: $E(u_i\mid X_i)=0$ ise LIE ile ne elde edilir?
+ $E(u_i)=0$, $E(X_iu_i)=0$ and $\text{cov}(X_i,u_i)=0$
- $u_i = 0$ for all $i$
- $\text{var}(u_i\mid X_i)$ is constant
- $X_i$ and $Y_i$ are independent
EX: **Doğru cevap:** $E(u_i)=0$, $E(X_iu_i)=0$ ve $\text{cov}(X_i,u_i)=0$.
Üçü de LIE'den çıkar:
1. $E(u_i) = E[E(u_i|X_i)] = E(0) = 0$
2. $E(X_iu_i) = E[X_i E(u_i|X_i)] = 0$
3. $\text{cov} = E(X_iu_i) - E(X_i)E(u_i) = 0$
**Diğer şıklar neden yanlış?**
• "$u_i = 0$ for all $i$": koşullu **ortalama** sıfır, tek tek hatalar değil.
• "Constant conditional variance": bu **homoskedastisite**, ayrı bir varsayım; sıfır koşullu ortalamadan çıkmaz.
• "$X$ and $Y$ independent": tam tersi; $Y$, $X$'e $\beta_1$ aracılığıyla bağlı.

## Q
EN: In the test score regression, average district income is omitted and is correlated with STR. This means:
TR: Bölge geliri modelde yok ve STR ile ilişkili. Bu ne demektir?
+ $E(u\mid \text{STR})\ne0$, so the first least squares assumption fails
- the random sampling assumption fails
- there are large outliers
- the $R^2$ must be zero
EX: **Doğru cevap:** $E(u\mid \text{STR})\ne0$, yani birinci en küçük kareler varsayımı bozulur.
Mantık:
1. Gelir modelde yok → $u$'nun içinde.
2. Gelir STR ile ilişkili → $\text{corr}(\text{STR}, u) \ne 0$.
3. $\text{corr}(X, u)\ne 0 \Rightarrow E(u\mid X)\ne 0$ (karşıt ters).
Sonuç: $\hat\beta_1$ sınıf mevcudunun etkisini yanlı tahmin eder.
**Diğer şıklar neden yanlış?**
• Rastgele örnekleme: bölgeler hâlâ rastgele seçilmiş olabilir; sorun örneklemede değil, eksik değişkende.
• Aykırı değerler: eksik değişken sorunu aykırı değer sorunu değildir.
• "$R^2$ must be zero": $R^2$ 0.051; eksik değişken $R^2$'yi sıfır yapmaz.

## Q
EN: In an ideal randomized controlled experiment, the assumption $E(u\mid X)=0$ is plausible because:
TR: İdeal RCE'de $E(u\mid X)=0$ neden makuldür?
+ $X$ is randomly assigned, so it is unrelated to the other factors in $u$
- the sample size is always large
- the errors are normal
- $X$ is always binary
EX: **Doğru cevap:** $X$ rastgele atandığı için $u$'daki diğer faktörlerle ilişkisizdir.
Rastgele atamada kimin hangi $X$'i alacağı yazı-turayla belirlenir; kişinin geliri, yeteneği, motivasyonu bu kararı etkilemez. Bu yüzden $X$, $u$'nun içindeki her şeyden bağımsızdır → $E(u\mid X) = E(u) = 0$.
**Diğer şıklar neden yanlış?**
• "Sample size is large": büyük örneklem karıştırıcı sorununu çözmez; yanlılık kalır.
• "Errors are normal": normallik 1. varsayımla ilgili değil.
• "$X$ is binary": deneyde $X$ sürekli de olabilir (ör. farklı gübre miktarları); önemli olan rastgele atama.

## Q
EN: The assumption "large outliers are unlikely" is stated formally as:
TR: "Büyük aykırı değer yok" varsayımı formel olarak nasıl yazılır?
+ $E(X_i^4)<\infty$ and $E(Y_i^4)<\infty$
- $E(u_i)=0$
- $\text{var}(u_i\mid X_i) = \sigma^2$
- $|X_i|<1$ for all $i$
EX: **Doğru cevap:** $E(X_i^4)<\infty$ ve $E(Y_i^4)<\infty$ (sonlu dördüncü momentler).
Neden 4. moment? Uç değerler 4. kuvvette çok büyür; 4. momentin sonlu olması, çok uç değerlerin olasılığının yeterince düşük olduğunu söyler. Bu, OLS'nin örnekleme dağılımının normale yaklaşması için gereklidir.
**Diğer şıklar ne?**
• $E(u_i)=0$: 1. varsayımın bir sonucu.
• $\text{var}(u_i\mid X_i) = \sigma^2$: homoskedastisite (Hafta 6).
• $|X_i| < 1$: çok kısıtlayıcı ve anlamsız bir koşul; $X$ sınıf mevcudu gibi büyük değerler alabilir.

## Q
SRC: PS5 Q1l
EN: The random sampling assumption states that:
TR: Rastgele örnekleme varsayımı ne der?
+ $(X_i,Y_i)$, $i=1,\dots,n$, are independently and identically distributed
- $X_i$ is the same for all $i$
- $u_i$ is normally distributed
- $Y_i$ is a random variable but $X_i$ is not
EX: **Doğru cevap:** $(X_i,Y_i)$ çiftleri, $i=1,\dots,n$, bağımsız ve aynı dağılımlıdır (i.i.d.).
Anakütleden rastgele seçilen her birim için hem $X$ hem $Y$ ölçülür. Seçim rastgele olduğu için çiftler birbirinden bağımsız; hepsi aynı anakütleden geldiği için aynı dağılımlı.
**Diğer şıklar neden yanlış?**
• "$X_i$ same for all": $X$ değişmezse eğim hesaplanamaz ($\sum(X_i - \bar X)^2 = 0$, sıfıra bölme).
• "$u_i$ normal": normallik varsayımı ayrı ve temel üç varsayım arasında değil.
• "$X_i$ not random": rastgele örneklemede hem $X$ hem $Y$ rassaldır.

## Q
SRC: TB 4.6
EN: The following are all least squares assumptions EXCEPT:
TR: Aşağıdakilerin hepsi en küçük kareler varsayımlarıdır, BİRİ HARİÇ:
+ The regressor $X$ is normally distributed.
- The conditional distribution of $u_i$ given $X_i$ has a mean of zero.
- $(X_i, Y_i)$, $i = 1,\dots,n$, are independently and identically distributed.
- Large outliers are unlikely.
EX: **Doğru cevap (varsayım değil): $X$ normally distributed.**
Üç en küçük kareler varsayımı:
1. $E(u_i \mid X_i) = 0$,
2. $(X_i, Y_i)$ i.i.d.,
3. büyük aykırı değerler olası değil ($X$ ve $Y$'nin sonlu dördüncü momenti var).
$X$'in herhangi bir dağılıma, normale bile uyması gerekmez.
**Diğer üç şık** bu listenin kendisi.

## Q
SRC: TB 4.23
EN: The assumption $E(u_i \mid X_i) = 0$ says that:
TR: $E(u_i \mid X_i) = 0$ varsayımı ne der?
+ the conditional distribution of the error, given the regressor, has a mean of zero
- dividing the error by the regressor gives zero on average
- the sample residuals are unrelated to the regressor
- the sample mean of the $X$s is much larger than the sample mean of the errors
EX: **Doğru cevap: conditional mean of $u$ given $X$ is zero.**
$X$'in hangi değerine bakarsan bak, o değerdeki hataların ortalaması sıfır. Yani diğer faktörler (hata terimi) $X$ ile sistematik olarak ilişkili değil. Bu varsayım $\hat\beta_1$'i yansız yapar.
**Diğer şıklar neden yanlış?**
• "dividing": "|" işareti bölme değil, koşul.
• sample residuals: varsayım **popülasyon** hataları hakkındadır. Örneklem kalıntıları OLS'nin yapısı gereği her zaman $X$ ile ilişkisizdir.
• "sample mean of Xs": alakasız.

## Q
SRC: TB 4.35
EN: All of the following assumptions are required for the OLS slope estimate to represent a causal effect EXCEPT:
TR: OLS eğim tahmininin nedensel bir etkiyi temsil etmesi için aşağıdaki varsayımların hepsi gereklidir, BİRİ HARİÇ:
+ the regression $R^2$ is high
- $E(u_i \mid X_i) = 0$
- $(X_i, Y_i)$, $i = 1,\dots,n$, are i.i.d.
- $X$ and $Y$ have finite fourth moments (large outliers are unlikely)
EX: **Doğru cevap (gerekli değil): high $R^2$.**
Nedensellik için üç en küçük kareler varsayımı gerekir: $E(u\mid X)=0$, i.i.d., sonlu dördüncü moment. $R^2$'nin yüksek olması gerekmez. Düşük $R^2$ ile de $\beta_1$ tutarlı ve nedensel olabilir; yüksek $R^2$ da nedenselliği garanti etmez.
**Diğer üç şık** gerekli varsayımlardır.

## Q
SRC: TB 5.33
EN: In the California school data set, class size was:
TR: California okul veri setinde sınıf büyüklüğü nasıl belirlenmişti?
+ not randomly assigned
- most likely as if randomly assigned
- assigned in such a way that $E(u \mid X) = 0$ holds
- randomly assigned, since the data set is a random sample of districts
EX: **Doğru cevap: not randomly assigned.**
Sınıf büyüklüğünü bölgeler kendi kaynaklarına göre seçer. Zengin bölgeler hem daha küçük sınıflara sahip hem de diğer avantajları (aile geliri, kaynaklar) var. Bu faktörler hata teriminde olduğu için $E(u\mid X) = 0$ şüphelidir. Kitap bu yüzden çoklu regresyona geçer.
**Diğer şıklar neden yanlış?**
• "as if randomly assigned" / $E(u\mid X)=0$: yukarıdaki sebeplerle inandırıcı değil.
• "random sample": bölgelerin rastgele örneklenmesi (i.i.d.) ile sınıf büyüklüğünün rastgele **atanması** farklı şeyler. İlki örnekleme yöntemidir, ikincisi deney tasarımı.

--- LESSON u5f | ~ | OLS'nin örnekleme dağılımı

## CARD β̂ de rassal
$\hat\beta_0$ ve $\hat\beta_1$, rassal $Y_i, X_i$'lerden hesaplanan formüllerdir; bu yüzden **rassal değişkenlerdir**. Başka bir rastgele örneklem alsaydık başka bir eğim bulurduk. Bu değerlerin dağılımına ==örnekleme dağılımı (sampling distribution)== denir.
Bu dağılımı anlamak neden önemli? $\hat\beta_1 = -2.28$ bulduk. Gerçek $\beta_1$ sıfır olsa bile şans eseri $-2.28$ bulabilir miydik? Bunu cevaplamak için $\hat\beta_1$'in dağılımını (ortalaması, varyansı, şekli) bilmemiz gerekir.
**Anahtar ayrıştırma:** $Y_i = \beta_0 + \beta_1X_i + u_i$'yi OLS formülüne koyunca:
$$\hat\beta_1 = \beta_1 + \frac{\sum(X_i-\bar X)u_i}{\sum(X_i-\bar X)^2}$$
**Okunuşu:** tahmin = gerçek değer + bir "gürültü" terimi. Gürültü, $X$ ile hataların ($u$) ilişkisine bağlı.
• $u$ ile $X$ ilişkisizse (1. varsayım), gürültünün ortalaması sıfır → yansızlık.
• $n$ büyüdükçe gürültü küçülür → tutarlılık.

## CARD Yansızlık, tutarlılık, normallik
**Yansızlık:** 1. ve 2. varsayımlar altında $E(u_i\mid X_1,\dots,X_n) = 0$. Ayrıştırmadaki gürültü teriminin koşullu beklentisi sıfır olur: $E(\hat\beta_1\mid X) = \beta_1$. LIE ile $E(\hat\beta_1) = \beta_1$. Aynı şekilde $E(\hat\beta_0)=\beta_0$.
**Büyük örneklem (Teorem 1):** üç varsayım altında $\hat\beta_0, \hat\beta_1$ ortak normal dağılır:
$$\hat\beta_1\overset{A}{\sim}N\!\left(\beta_1,\ \sigma^2_{\hat\beta_1}\right),\qquad \sigma^2_{\hat\beta_1} = \frac1n\,\frac{\text{var}\big((X_i-\mu_X)u_i\big)}{[\text{var}(X_i)]^2}$$
Formülden okunacak üç ders:
1. **Varyans $1/n$ ile orantılı:** $n\to\infty$ iken 0'a gider. Yansızlıkla birlikte bu **tutarlılık** demek. Örneklem 4 katına çıkarsa standart hata yarıya iner.
2. **$\text{var}(X_i)$ paydada (karesiyle):** $X$ ne kadar çok yayılırsa $\hat\beta_1$ o kadar **kesin**. Sezgi: noktalar $X$ ekseninde geniş bir aralığa yayılmışsa eğimi belirlemek kolaydır; hepsi aynı $X$ civarındaysa eğim belirsizdir.
3. **Normallik MLT'den gelir:** gürültü terimi bir ortalama gibi davranır; hataların kendisi normal olmasa bile $\hat\beta_1$ büyük örneklemde yaklaşık normaldir.
:::ipucu Sınavda sık sorulan
"$X$'in varyansı artarsa $\hat\beta_1$'in varyansı?" → **azalır**. "$n$ artarsa?" → **azalır** ($1/n$ ile). "Yansızlık için hangi varsayımlar?" → 1 ve 2 (homoskedastisite ve normallik gerekmez).
:::
Bu varyans formülü bilinmeyen terimler içeriyor ($u$ gözlenmez). Çıkarım (test, güven aralığı) için tahmin edilmesi gerekir: bu, $SE(\hat\beta_1)$'dir (Hafta 6).

## Q
EN: Under the least squares assumptions, the variance of $\hat\beta_1$ is:
TR: Varsayımlar altında $\hat\beta_1$'in varyansı nasıl davranır?
+ inversely proportional to $n$
- proportional to $n$
- independent of $n$
- equal to $\text{var}(Y)$
EX: **Doğru cevap:** $n$ ile **ters orantılı**.
$\sigma^2_{\hat\beta_1} = \frac1n\cdot\frac{\text{var}[(X_i-\mu_X)u_i]}{[\text{var}(X_i)]^2}$. Baştaki $\frac1n$ yüzünden örneklem büyüdükçe varyans küçülür. $n$ 4 katına çıkarsa varyans 4'te birine, standart hata yarıya iner.
**Diğer şıklar neden yanlış?**
• "Proportional to $n$": daha çok veri belirsizliği artırmaz, azaltır.
• "Independent of $n$": formülde açıkça $\frac1n$ var.
• "$\text{var}(Y)$": formülde $Y$'nin varyansı değil, $X$ ve $u$ ile ilgili terimler var.

## Q
EN: Holding everything else fixed, a larger variance of the regressor $X$ leads to:
TR: Diğer her şey sabitken, $X$'in varyansının büyük olması neye yol açar?
+ a smaller variance of $\hat\beta_1$
- a larger variance of $\hat\beta_1$
- a biased $\hat\beta_1$
- a smaller $R^2$
EX: **Doğru cevap:** $\hat\beta_1$'in varyansı **küçülür**.
Formülde $[\text{var}(X)]^2$ **paydada**: $X$ ne kadar yayılırsa $\hat\beta_1$'in varyansı o kadar küçük.
Sezgi: eğimi belirlemek için $X$'in farklı değerlerinde $Y$'nin nasıl değiştiğini görmek gerekir. Bütün sınıflar 20 kişilikse mevcudun etkisini öğrenemezsin; sınıflar 14'ten 26'ya kadar değişiyorsa eğim net görünür.
**Diğer şıklar neden yanlış?**
• "Larger variance": paydada olduğu için ters yönde etkiler.
• "Biased": yansızlık 1. ve 2. varsayımlara bağlı; $X$'in yayılımı yanlılık yaratmaz.
• "Smaller $R^2$": $X$'in yayılımı genelde açıklanan varyansı artırır, azaltmaz.

## Q
EN: Unbiasedness of $\hat\beta_1$, i.e. $E(\hat\beta_1)=\beta_1$, follows mainly from:
TR: $\hat\beta_1$'in yansızlığı esas olarak nereden gelir?
+ $E(u_i\mid X_i)=0$ and i.i.d. sampling
- homoskedasticity of the errors
- normality of the errors
- a large $R^2$
EX: **Doğru cevap:** $E(u_i\mid X_i)=0$ ve i.i.d. örnekleme.
Ayrıştırma: $\hat\beta_1 = \beta_1 + \frac{\sum(X_i-\bar X)u_i}{\sum(X_i-\bar X)^2}$. 1. ve 2. varsayımlarla $E(u_i \mid X_1, \dots, X_n) = 0$ olur; gürültü teriminin beklentisi sıfır, yani $E(\hat\beta_1) = \beta_1$.
**Diğer şıklar neden yanlış?**
• Homoskedastisite: sadece varyans formülünü sadeleştirir ve Gauss–Markov'da gerekir; yansızlık için gerekmez.
• Normallik: küçük örneklemde tam dağılım için gerekir; yansızlık için gerekmez.
• Büyük $R^2$: uyum ölçüsü; yansızlıkla ilgisi yok. Düşük $R^2$'li bir regresyon da yansız olabilir.

## Q
EN: In large samples, $\hat\beta_1$ is approximately normally distributed because of:
TR: Büyük örneklemde $\hat\beta_1$'in yaklaşık normal dağılmasının nedeni nedir?
+ the central limit theorem
- the assumption that $u$ is normal
- the law of iterated expectations
- the Gauss–Markov theorem
EX: **Doğru cevap:** merkezi limit teoremi.
$\hat\beta_1 - \beta_1$, aslında $(X_i-\bar X)u_i$ terimlerinin bir **ortalamasıdır** (uygun ölçeklenmiş). MLT, i.i.d. terimlerin ortalamasının $n$ büyükken yaklaşık normal dağıldığını söyler; hataların kendisi normal olmasa bile.
**Diğer şıklar neden yanlış?**
• "$u$ is normal": büyük örneklem sonucu bu varsayıma **ihtiyaç duymaz**.
• LIE: yansızlığı göstermekte kullanılır, normalliği değil.
• Gauss–Markov: OLS'nin en küçük varyanslı doğrusal yansız tahminci (BLUE) olduğunu söyler; dağılımın şeklini değil.

## Q
EN: Since $\hat\beta_1$ is unbiased and its variance shrinks to zero as $n\to\infty$, $\hat\beta_1$ is:
TR: $\hat\beta_1$ yansız ve varyansı sıfıra gidiyorsa, $\hat\beta_1$:
+ consistent
- efficient in every sample
- exactly normal in small samples
- equal to $\beta_1$
EX: **Doğru cevap:** tutarlı.
Kural (Hafta 4'ten): tahminci yansızsa ve varyansı $n\to\infty$ iken sıfıra gidiyorsa, dağılımı gerçek değer etrafında iğne gibi sivrileşir → $\hat\beta_1\xrightarrow{p}\beta_1$. Bu tutarlılığın tanımı.
**Diğer şıklar neden yanlış?**
• "Efficient in every sample": etkinlik ayrı bir özellik (Gauss–Markov, ek varsayımlar gerekir).
• "Exactly normal in small samples": bunun için hataların normal olması gerekir; yansızlık ve küçülen varyans bunu sağlamaz.
• "Equal to $\beta_1$": herhangi bir örneklemde tam eşitlik yok; sadece büyük örneklemde çok yakın.

## GEN seScale

## Q
SRC: TB 4.7
EN: OLS estimators have a sampling distribution because:
TR: OLS tahmincilerinin bir örnekleme dağılımı vardır, çünkü:
+ the values of the regressor and of the error term differ from one sample to the next
- economics is not a precise science
- individuals respond differently to incentives
- in real life you usually get to draw many samples
EX: **Doğru cevap: $X$ and $u$ differ across samples.**
Her rastgele örneklemde farklı gözlemler (farklı $X_i$ ve $u_i$) gelir, bu yüzden $\hat\beta_0$ ve $\hat\beta_1$ örneklemden örnekleme değişir. Bu değişkenliğin dağılımına örnekleme dağılımı denir.
**Diğer şıklar neden yanlış?**
• "not precise science" ve "incentives": felsefi yorumlar; örnekleme dağılımının istatistiksel sebebi değil.
• "many samples": tam tersi; pratikte genellikle **tek** örneklemimiz olur. Örnekleme dağılımı, çekebileceğimiz tüm olası örneklemler üzerinden tanımlanır.

## Q
SRC: TB 4.14
EN: Other things equal, the slope estimator $\hat\beta_1$ has a smaller standard error if:
TR: Diğer her şey sabitken, eğim tahmincisi $\hat\beta_1$'in standart hatası hangi durumda daha küçüktür?
+ there is more variation in the regressor $X$
- the variance of the error term $u$ is larger
- the sample size is smaller
- the intercept $\beta_0$ is small
EX: **Doğru cevap: more variation in $X$.**
$\text{var}(\hat\beta_1) \approx \dfrac{\sigma_u^2}{n\,\sigma_X^2}$. $X$ ne kadar geniş bir aralıkta yayılırsa eğimi o kadar kesin tahmin edersin. Sezgi: birbirinden uzak noktalardan geçen bir doğrunun eğimini belirlemek, üst üste yığılmış noktalardan geçen doğrununkinden kolaydır.
**Diğer şıklar neden yanlış?**
• larger error variance: payda; SE'yi **artırır**.
• smaller $n$: $n$ paydada; küçük $n$ SE'yi **artırır**.
• intercept: $\beta_0$'ın büyüklüğü eğimin kesinliğini etkilemez.

## Q
SRC: TB 4.18
EN: The large-sample normal approximation to the sampling distribution of $\hat\beta_1$ is powerful because:
TR: $\hat\beta_1$'in örnekleme dağılımına büyük örneklem normal yaklaşımı neden güçlü bir araçtır?
+ it allows econometricians to develop methods for statistical inference (tests and confidence intervals)
- many regressors in real life are normally distributed
- many other distributions are not symmetric
- it implies that OLS is BLUE
EX: **Doğru cevap: it allows statistical inference.**
$\hat\beta_1 \approx N(\beta_1, \sigma^2_{\hat\beta_1})$ bilgisi sayesinde $t$ istatistiği hesaplar, $|t| > 1.96$ ile test yapar ve $\hat\beta_1 \pm 1.96\,SE$ ile güven aralığı kurarız. Üstelik bu, $Y$ ve $X$'in dağılımı ne olursa olsun geçerlidir (MLT).
**Diğer şıklar neden yanlış?**
• "regressors are normal": $X$'in normal olması gerekmez; yaklaşımın gücü de buradan gelir.
• "other distributions not symmetric": bir sebep değil.
• BLUE: Gauss–Markov teoremi ek varsayımlar (homoskedastisite) ister; normallikle ilgisi yok.

## Q
SRC: TB 4.19
EN: If the three least squares assumptions hold, then in large samples $\hat\beta_1$ is distributed as:
TR: Üç en küçük kareler varsayımı sağlanıyorsa büyük örneklemde $\hat\beta_1$ nasıl dağılır?
+ $N\!\left(\beta_1,\ \dfrac{1}{n}\dfrac{\text{var}[(X_i - \mu_X)u_i]}{[\text{var}(X_i)]^2}\right)$
- $N\!\left(0,\ \dfrac{1}{n}\dfrac{\text{var}[(X_i - \mu_X)u_i]}{[\text{var}(X_i)]^2}\right)$
- $N\!\left(\beta_1,\ \dfrac{\text{var}[(X_i - \mu_X)u_i]}{[\text{var}(X_i)]^2}\right)$
- $N\!\left(\beta_1,\ \dfrac{1}{n}\dfrac{\text{var}[(X_i - \mu_X)u_i]}{\text{var}(X_i)}\right)$
EX: **Doğru cevap: ortalama $\beta_1$, varyans $\frac1n \frac{\text{var}[(X-\mu_X)u]}{[\text{var}(X)]^2}$.**
• Ortalama $\beta_1$: OLS yansızdır.
• $1/n$: $n$ büyüdükçe varyans 0'a gider (tutarlılık).
• Payda $[\text{var}(X)]^2$: $X$'te yayılım arttıkça varyans hızla küçülür.
**Diğer şıklar neden yanlış?**
• ortalama 0: bu, $\hat\beta_1 - \beta_1$'in dağılımı olurdu.
• $1/n$ yok: varyans örneklem büyüdükçe küçülmezdi; tutarlılık olmazdı.
• paydada kare yok: birimler tutmaz.

`);
