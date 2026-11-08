CONTENT.push(String.raw`
=== UNIT u4 | Hafta 4 | İstatistik | Tahminci özellikleri, hipotez testi, p-değeri, güven aralığı

--- LESSON u4a | μ̂ | Tahminci ve iyi tahmincinin özellikleri

## CARD Tahminci ve tahmin
İstatistiğin amacı: örneklemden anakütle hakkında bilgi çıkarmak. Üç kelimeyi ayır:
• ==Parametre (parameter)==: anakütleye ait gerçek ama bilinmeyen sayı. Örnek: tüm mezunların ortalama maaşı $\mu_Y$.
• ==Tahminci (estimator)==: parametreyi tahmin etmek için kullanılan **formül/kural**. Örneklem verisinin bir fonksiyonudur, ör. $\bar Y = \frac1n\sum Y_i$. Hangi örneklemin geleceği önceden bilinmediği için tahminci bir **rassal değişkendir**; bir dağılımı (örnekleme dağılımı) vardır.
• ==Tahmin (estimate)==: tahmincinin **belli bir örneklemde** hesaplanan sayısal değeri. Rassal değildir, düz bir sayıdır.
:::ornek Somut örnek
800 öğrencilik bir örneklemde $\bar Y = 1230$ bulundu.
• Parametre: tüm öğrencilerin ortalaması $\mu_Y$ (bilinmiyor).
• Tahminci: $\bar Y = \frac1n\sum Y_i$ formülü (başka örneklemde başka sonuç verirdi).
• Tahmin: $1230$ (bu örneklemin sonucu).
:::
Hafıza: tahminci = tarif, tahmin = tariften çıkan yemek.

## CARD Üç iyi özellik
Birçok olası tahminci var (ilk gözlem, medyan, ortalama...). Hangisi iyi? $\hat\mu_Y$, $\mu_Y$'nin tahmincisi olsun:
**1. Yansızlık (unbiasedness):** $E(\hat\mu_Y) = \mu_Y$.
Örnekleme dağılımının **merkezi** gerçek değerde. Bazen fazla, bazen eksik tahmin eder ama ortalamada doğru. Her $n$ için geçerli bir özellik.
**2. Tutarlılık (consistency):** $\hat\mu_Y\xrightarrow{p}\mu_Y$.
Örneklem büyüdükçe tahmin gerçek değere istediğin kadar yaklaşır. Büyük örneklem özelliği.
**3. Etkinlik (efficiency):** iki yansız tahminci arasında **varyansı daha küçük** olan daha etkindir.
Daha az dağınık = daha güvenilir tek tahmin.
:::ornek Hedef tahtası benzetmesi
• Yansız: atışlar merkez etrafında dağılmış (ortalamada merkez).
• Etkin: atışlar merkez etrafında **sıkı** toplanmış.
• Tutarlı: atış sayısı arttıkça ortalama merkeze kilitleniyor.
:::
$\bar Y$, basit rastgele örneklemede ==BLUE (Best Linear Unbiased Estimator)==: doğrusal yansız tahminciler arasında varyansı en küçük olan.
:::ipucu Tutarlılığı göstermenin yolu
Tahminci yansızsa ve varyansı $n\to\infty$ iken 0'a gidiyorsa tutarlıdır. $\bar Y$ için $E(\bar Y) = \mu$ ve $\text{var}(\bar Y)=\sigma^2/n\to0$ ✓
Karşı örnek: sadece $Y_1$'i kullanmak yansızdır ($E(Y_1) = \mu$) ama varyansı $\sigma^2$, $n$ ne olursa olsun küçülmez → tutarlı değil.
:::

## CARD Ağırlıklı ortalama hilesi (PS4 Soru 5)
Gözlemlerin ağırlıklı toplamı şeklindeki tahminciler için iki formül her şeyi çözer. $\hat\mu = w_1Y_1 + w_2Y_2 + \dots$, $Y_i$ i.i.d. $(\mu, \sigma^2)$:
$$E(\hat\mu) = \mu\sum w_i \qquad \text{var}(\hat\mu) = \sigma^2\sum w_i^2$$
**Türetme:** beklenti doğrusal ($E(w_iY_i) = w_i\mu$); bağımsızlıkta varyanslar toplanır ve sabit çarpan karesiyle çıkar ($\text{var}(w_iY_i) = w_i^2\sigma^2$).
**İki kural:**
• **Ağırlıkların toplamı 1 ise yansız.**
• Toplamı 1 olan ağırlıklar ne kadar **eşitse** $\sum w_i^2$ o kadar küçük, yani varyans o kadar küçük.
:::ornek PS4 Soru 5: Y ~ χ²_m (E = m, var = 2m)
| Tahminci | Ağırlıklar | $\sum w_i$ | $\sum w_i^2$ | var |
| $\hat m_1 = Y_1$ | (1) | 1 | 1 | $2m$ |
| $\hat m_2 = \frac{Y_1+Y_2}{2}$ | (½, ½) | 1 | ½ | $m$ |
| $\hat m_3 = \frac{Y_1+2Y_2}{3}$ | (⅓, ⅔) | 1 | 5/9 | $\frac{10m}{9}$ |
| $\hat m_4 = \bar Y$ | (⅓, ⅓, ⅓) | 1 | ⅓ | $\frac{2m}{3}$ |
$\hat m_3$ için hesap: $\sum w_i^2 = (1/3)^2 + (2/3)^2 = 1/9 + 4/9 = 5/9$, var $= 2m\cdot\frac59 = \frac{10m}{9}$.
Hepsi yansız (ağırlık toplamı 1). En etkini $\hat m_4 = \bar Y$: en çok gözlemi en eşit ağırlıkla kullanıyor.
:::

## CARD Bernoulli oranı p̂
Seçim anketi, işsizlik oranı gibi **oran** sorularında $Y_i$ Bernoulli$(p)$'dir (1 = evet, 0 = hayır).
$\hat p$ = örneklemdeki 1'lerin oranı $= \bar Y$. Örnek: 400 kişiden 215'i "evet" dedi → $\hat p = 215/400 = 0.5375$.
$\bar Y$'nin genel sonuçlarına Bernoulli varyansını ($\sigma^2 = p(1-p)$) koy:
$$E(\hat p) = p \qquad \text{var}(\hat p) = \frac{p(1-p)}{n} \qquad SE(\hat p) = \sqrt{\frac{\hat p(1-\hat p)}{n}}$$
Standart hatada bilinmeyen $p$ yerine $\hat p$ kullanılır.
:::ornek Sayıyla
$\hat p = 0.5375$, $n = 400$: $SE = \sqrt{0.5375\times 0.4625/400} = \sqrt{0.000621} = 0.0249$
:::

## Q
SRC: PS4 Q1a
EN: Which statement about an estimator and an estimate is correct?
TR: Tahminci ve tahmin hakkında hangisi doğrudur?
+ An estimator is a random variable; an estimate is a nonrandom number computed from a specific sample.
- An estimator is a number; an estimate is a formula.
- Both are random variables.
- Both are the true population parameter.
EX: **Doğru cevap:** tahminci bir rassal değişkendir; tahmin ise belli bir örneklemden hesaplanan rassal olmayan bir sayıdır.
Tahminci ($\bar Y$ formülü) örneklemden örnekleme farklı sonuç verir, yani rastgeledir. Tahmin (ör. $\bar Y = 1230$) o formülün **bir** örneklemdeki sonucudur; artık sabit bir sayı.
**Diğer şıklar neden yanlış?**
• "Estimator is a number, estimate is a formula": tam tersi.
• "Both random": tahmin, hesaplandıktan sonra sabit bir sayıdır.
• "Both are the true parameter": parametre bilinmeyen gerçek değerdir; tahminci ve tahmin ona yaklaşmaya çalışır.

## Q
SRC: PS4 Q1b
EN: $\hat\mu_Y$ is an unbiased estimator of $\mu_Y$ if:
TR: $\hat\mu_Y$ ne zaman $\mu_Y$'nin yansız tahmincisidir?
+ $E(\hat\mu_Y) = \mu_Y$
- $\hat\mu_Y\xrightarrow{p}\mu_Y$
- $\text{var}(\hat\mu_Y) = 0$
- $\hat\mu_Y = \mu_Y$ in every sample
EX: **Doğru cevap: $E(\hat\mu_Y) = \mu_Y$.**
Yansızlık: tahmincinin örnekleme dağılımının **ortalaması** gerçek değere eşit. Tek tek örneklemlerde hata olabilir; ama ortalamada sistematik bir fazla ya da eksik tahmin yok.
**Diğer şıklar neden yanlış?**
• $\hat\mu_Y\xrightarrow{p}\mu_Y$: bu **tutarlılığın** tanımı.
• $\text{var}(\hat\mu_Y) = 0$: varyans sıfır olsa bile yanlı olabilir (ör. her zaman 5 diyen tahminci). Yansızlık merkezle ilgili, yayılımla değil.
• "Every sample": hiçbir tahminci her örneklemde tam doğruyu bulmaz.

## Q
SRC: PS4 Q1b
EN: An efficient estimator is one that:
TR: Etkin tahminci nedir?
+ has the smallest variance among unbiased estimators
- is always equal to the population value
- converges in probability to the population value
- uses the largest sample size
EX: **Doğru cevap:** yansız tahminciler arasında **en küçük varyansa** sahip olan.
İki yansız tahminci düşün: ikisi de ortalamada doğru. Varyansı küçük olanın tek bir tahmini gerçeğe daha yakın olma eğilimindedir; daha güvenilirdir. Örnek: $\bar Y$ ($\text{var} = \sigma^2/n$), $Y_1$'den ($\text{var} = \sigma^2$) daha etkindir.
**Diğer şıklar neden yanlış?**
• "Always equal to the population value": imkânsız; her tahmincinin örnekleme hatası var.
• "Converges in probability": bu **tutarlılık**.
• "Largest sample size": etkinlik aynı veriyle yapılan tahmincilerin karşılaştırmasıdır; örneklem büyüklüğüyle tanımlanmaz.

## Q
EN: Suppose you use only the first observation, $Y_1$, to estimate $\mu_Y$. This estimator is:
TR: $\mu_Y$'yi tahmin etmek için sadece ilk gözlemi ($Y_1$) kullanırsan bu tahminci:
+ unbiased but not consistent
- consistent but biased
- both unbiased and consistent
- neither unbiased nor consistent
EX: **Doğru cevap:** yansız ama tutarlı değil.
• **Yansız mı?** $E(Y_1) = \mu_Y$, çünkü her gözlem anakütleden gelir. Evet ✓.
• **Tutarlı mı?** $\text{var}(Y_1) = \sigma^2$. Örneklemi 10'dan 10.000'e çıkarsan bile sadece ilk gözlemi kullandığın için varyans hiç küçülmez. $Y_1$, $\mu$'ye yakınsamaz. Hayır ✗.
Ders: yansızlık tek başına yetmez; bilgiyi kullanmayan bir tahminci yansız olabilir ama kötüdür.
**Diğer şıklar neden yanlış?** Yansızlık var, tutarlılık yok; diğer üç kombinasyon bu sonuçla çelişir.

## Q
SRC: PS4 Q5
EN: $Y_1, Y_2, Y_3$ are i.i.d. $\chi^2_m$. Which estimator of $m$ is the most efficient: $Y_1$, $\frac{Y_1+Y_2}{2}$, $\frac{Y_1+2Y_2}{3}$, or $\bar Y$?
TR: $Y_1, Y_2, Y_3$ i.i.d. $\chi^2_m$. Bu dört tahminciden en etkini hangisi?
+ $\bar Y = (Y_1+Y_2+Y_3)/3$
- $Y_1$
- $(Y_1+Y_2)/2$
- $(Y_1+2Y_2)/3$
EX: **Doğru cevap: $\bar Y$.**
1. **Hepsi yansız mı?** Ağırlık toplamları: 1, 1, 1, 1 → hepsi yansız. O zaman varyanslarına bakarız.
2. **Varyanslar** ($\text{var}(Y_i) = 2m$, formül: $2m\sum w_i^2$):
• $Y_1$: $2m\cdot 1 = 2m$
• $(Y_1+Y_2)/2$: $2m(\frac14 + \frac14) = m$
• $(Y_1+2Y_2)/3$: $2m(\frac19 + \frac49) = \frac{10m}{9}$
• $\bar Y$: $2m(\frac19+\frac19+\frac19) = \frac{2m}{3}$
3. En küçük: $\frac{2m}{3}$ → $\bar Y$.
**Neden?** Üç gözlemin hepsini **eşit** ağırlıkla kullanıyor. $(Y_1 + 2Y_2)/3$ eşit olmayan ağırlıklar yüzünden $(Y_1+Y_2)/2$'den bile kötü.

## Q
SRC: PS4 Q5
EN: With $Y_i$ i.i.d. $\chi^2_m$, the variance of $(Y_1+2Y_2)/3$ is:
TR: $Y_i$ i.i.d. $\chi^2_m$ ise $(Y_1+2Y_2)/3$'ün varyansı nedir?
+ $10m/9$
- $m$
- $2m/3$
- $6m/9$
EX: **Doğru cevap: $10m/9$.**
1. Yaz: $\frac{Y_1+2Y_2}{3} = \frac13 Y_1 + \frac23 Y_2$
2. Bağımsızlıkta varyanslar toplanır, katsayılar **karesiyle** çıkar:
$\text{var} = \left(\frac13\right)^2\text{var}(Y_1) + \left(\frac23\right)^2\text{var}(Y_2) = \frac19(2m) + \frac49(2m)$
3. $= \frac{2m + 8m}{9} = \frac{10m}{9}$
**Diğer şıklar nereden geliyor?**
• $m$: $(Y_1+Y_2)/2$'nin varyansı.
• $2m/3$ ve $6m/9$ (aynı sayı): $\bar Y$'nin varyansı.
Sık hata: katsayıların karesini almamak; o zaman $\frac{1}{3}2m + \frac23 2m = 2m$ bulunur.

## Q
EN: If $Y_i$ are i.i.d. Bernoulli$(p)$ and $\hat p = \bar Y$, then $\text{var}(\hat p)$ equals:
TR: $\hat p=\bar Y$ ise $\text{var}(\hat p)$ nedir?
+ $p(1-p)/n$
- $p(1-p)$
- $p/n$
- $\sqrt{p(1-p)/n}$
EX: **Doğru cevap: $p(1-p)/n$.**
İki bilgiyi birleştir:
1. Her $\bar Y$ için: $\text{var}(\bar Y) = \sigma^2/n$
2. Bernoulli'de: $\sigma^2 = p(1-p)$
Sonuç: $\text{var}(\hat p) = p(1-p)/n$.
**Diğer şıklar neden yanlış?**
• $p(1-p)$: tek bir gözlemin varyansı; $n$'ye bölmeyi unutmuşsun.
• $p/n$: Bernoulli varyansı $p$ değil, $p(1-p)$.
• $\sqrt{p(1-p)/n}$: bu karekökü, yani **standart hata**. Varyans istenirken SE seçmek sık hata.

## GEN estimator

--- LESSON u4b | H₀ | Hipotez testinin mantığı

## CARD Sıfır ve alternatif hipotez
==Hipotez==: anakütlenin bir özelliği (ör. ortalaması) hakkındaki bir iddia. Veriye bakarak bu iddianın inandırıcı olup olmadığına karar veririz.
• ==Sıfır hipotezi (null hypothesis)== $H_0$: test edilen iddia. Her zaman **eşitlik** içerir. Örnek: $H_0: \mu_Y = 20$. ("Sıfır" adı, sıfır olmak zorunda olduğu anlamına gelmez.)
• ==Alternatif hipotez (alternative)== $H_1$: $H_0$ doğru değilse geçerli olan. Üç türü var:
1. ==İki yönlü (two-sided)==: $H_1:\mu_Y\ne 20$. "Farklı mı?" sorusu.
2. ==Tek yönlü, sağ==: $H_1:\mu_Y>20$. "Büyük mü, aşıyor mu?" sorusu.
3. ==Tek yönlü, sol==: $H_1:\mu_Y<20$. "Küçük mü?" sorusu.
:::ipucu Sorudaki kelimeden hipoteze
• "differs from", "is different", "has changed" → $\ne$ (iki yönlü)
• "exceeds", "is greater", "increased" → $>$
• "is less than", "decreased" → $<$
Eşitlik ($=$) her zaman $H_0$'a gider, asla $H_1$'e.
:::
**Mahkeme benzetmesi:** $H_0$ = "sanık suçsuz". Güçlü kanıt yoksa suçsuz sayılır. Reddetmek için kanıt gerekir.
:::dikkat Reddedememek ≠ doğru olduğunu kanıtlamak
$H_0$'ı reddedemiyorsak sadece "örneklemde onu reddetmeye yetecek istatistiksel kanıt yok" deriz. Mahkemede "suçsuz" kararı "kesin masum" demek değildir, "suçu kanıtlanamadı" demektir.
:::

## CARD İki tür hata ve anlamlılık düzeyi
Karar verirken iki şekilde yanılabilirsin:
| | $H_0$ gerçekte doğru | $H_0$ gerçekte yanlış |
| $H_0$'ı reddet | ==Tip I hata== | doğru karar |
| Reddetme | doğru karar | ==Tip II hata== |
• **Tip I:** doğru olan $H_0$'ı reddetmek. (Masumu mahkûm etmek.)
• **Tip II:** yanlış olan $H_0$'ı reddetmemek. (Suçluyu serbest bırakmak.)
İkisi aynı anda en aza indirilemez: Tip I'i azaltmak için daha temkinli olursan Tip II artar. Bu yüzden Tip I hata olasılığı önceden seçilir: ==anlamlılık düzeyi (significance level)== $\alpha$. Genelde %1, %5 ya da %10.
**Yorum:** $\alpha = 0.05$ → "$H_0$ gerçekten doğruysa, 100 örneklemden yaklaşık 5'inde yanlışlıkla reddetmeyi göze alıyorum."
:::ipucu Hafıza
Tip **I** = **İ**lk adım, yanlış alarm (reddettin ama yanlış). Tip II = kaçırma (reddetmen gerekiyordu, etmedin). $\alpha$ her zaman Tip I ile ilgilidir.
:::

## CARD Test adımları
Her hipotez testi aynı dört adımı izler:
1. **Hipotezleri yaz:** $H_0$ ve $H_1$ (yönüne dikkat).
2. **Anlamlılık düzeyini seç:** $\alpha$ (soru genelde verir: %5).
3. **Test istatistiğini hesapla:** $t = \frac{\text{tahmin} - \text{hipotez değeri}}{SE}$
4. **Karar ver:** iki yoldan biriyle:
• **Kritik değer yolu:** $|t|$ kritik değerden büyükse reddet.
• **p-değeri yolu:** $p < \alpha$ ise reddet.
İki yol her zaman aynı kararı verir.
:::ornek Tam örnek
$n = 100$, $\bar Y = 21$, $s_Y = 5$. $H_0: \mu = 20$, $H_1: \mu\ne 20$, $\alpha = 0.05$.
1. Hipotezler yazıldı (iki yönlü).
2. $\alpha = 0.05$ → kritik değer 1.96.
3. $SE = 5/\sqrt{100} = 0.5$, $t = (21 - 20)/0.5 = 2$.
4. $|2| > 1.96$ → %5'te $H_0$ reddedilir. (p-değeri: $2\Phi(-2) = 0.0455 < 0.05$, aynı karar.)
:::

## Q
SRC: PS4 Q1f
EN: The significance level of a test is:
TR: Bir testin anlamlılık düzeyi nedir?
+ the probability of rejecting the null hypothesis when it is true (Type I error)
- the probability of failing to reject a false null hypothesis
- the probability that the null hypothesis is true
- one minus the p-value
EX: **Doğru cevap:** $H_0$ doğruyken onu reddetme olasılığı, yani **Tip I hata** olasılığı.
$\alpha$'yı araştırmacı **önceden** seçer (genelde 0.05). "Yanlış alarm" riskini sınırlar.
**Diğer şıklar neden yanlış?**
• "Failing to reject a false null": bu **Tip II** hata olasılığı ($\beta$).
• "Probability that the null is true": klasik testte $H_0$ ya doğrudur ya yanlış; ona olasılık atanmaz. Ne $\alpha$ ne p-değeri bunu verir.
• "One minus the p-value": p-değeri veriden hesaplanır, $\alpha$ önceden seçilir; aralarında böyle bir bağ yok.

## Q
EN: A Type II error occurs when we:
TR: Tip II hata ne zaman yapılır?
+ fail to reject a false null hypothesis
- reject a true null hypothesis
- reject a false null hypothesis
- fail to reject a true null hypothesis
EX: **Doğru cevap:** yanlış olan $H_0$'ı reddetmediğimizde.
Tabloyu hatırla: $H_0$ gerçekte yanlış ama veri yeterli kanıt sunmadığı için reddetmedik. Mahkeme benzetmesiyle: suçluyu serbest bırakmak.
**Diğer şıklar ne?**
• "Reject a true null": **Tip I** hata.
• "Reject a false null": doğru karar (testin gücü).
• "Fail to reject a true null": doğru karar.

## Q
SRC: PS4 Q1d
EN: A researcher wants to test whether mean hourly earnings exceed 20. The appropriate alternative hypothesis is:
TR: Ortalama saatlik kazancın 20'yi aşıp aşmadığı test edilecek. Doğru alternatif hipotez hangisi?
+ $H_1: \mu_Y > 20$
- $H_1: \mu_Y \ne 20$
- $H_1: \mu_Y < 20$
- $H_1: \mu_Y = 20$
EX: **Doğru cevap: $H_1: \mu_Y > 20$.**
Kilit kelime "exceed" (aşmak) → büyüktür, tek yönlü sağ. $H_0: \mu_Y = 20$, $H_1: \mu_Y > 20$.
**Diğer şıklar neden yanlış?**
• $\ne 20$: iki yönlü; "farklı mı" sorusuna uyar, "aşıyor mu"ya değil.
• $< 20$: yönü ters.
• $= 20$: eşitlik **her zaman** $H_0$'dadır; alternatif hipotez eşitlik içeremez.

## Q
EN: "We fail to reject $H_0$ at the 5% level" means:
TR: "$H_0$'ı %5 düzeyinde reddedemiyoruz" ne demektir?
+ the sample does not provide enough statistical evidence against $H_0$
- $H_0$ is proven to be true
- $H_0$ is false with 95% probability
- the test statistic is larger than the critical value
EX: **Doğru cevap:** örneklem $H_0$ aleyhine **yeterli istatistiksel kanıt** sunmuyor.
Reddedememek $H_0$'ın doğru olduğunu kanıtlamaz. Belki $H_0$ gerçekten doğru; belki de örneklem küçük olduğu için farkı yakalayamadık (Tip II hata).
**Diğer şıklar neden yanlış?**
• "Proven to be true": istatistik hiçbir şeyi kesin kanıtlamaz; "suçsuz" ≠ "masum".
• "False with 95% probability": $H_0$'a olasılık atanmaz; ayrıca reddetmediysek "yanlış" demeyiz.
• "Larger than the critical value": o zaman **reddederdik**. Reddedememek, $|t|$'nin kritik değerden küçük olması demek.

## Q
SRC: PS4 Q1c
EN: The null hypothesis is:
TR: Sıfır hipotezi nedir?
+ the hypothesis to be tested, usually stated with an equality
- the hypothesis that holds if the test statistic is large
- always that the parameter is zero
- the hypothesis the researcher believes is true
EX: **Doğru cevap:** test edilen hipotez; genelde **eşitlikle** yazılır.
Örnek: $H_0: \mu_Y = 20$. Test istatistiği bu varsayım altında hesaplanır.
**Diğer şıklar neden yanlış?**
• "Holds if the test statistic is large": büyük test istatistiği $H_0$'ın **reddedilmesine** yol açar.
• "Always zero": "sıfır hipotezi" adı yanıltıcı; $\mu = 20$, $p = 0.5$ gibi herhangi bir değer olabilir. Regresyonda çoğu zaman $\beta_1 = 0$ test edilir ama zorunlu değil.
• "Researcher believes is true": araştırmacı genelde $H_0$'ı **çürütmek** ister; inandığı şey çoğu zaman alternatiftir.

## Q
SRC: PS4 Q1d
EN: $H_0:\mu_Y=0.5$ versus $H_1:\mu_Y\ne0.5$ is a:
TR: $H_0:\mu_Y=0.5$, $H_1:\mu_Y\ne0.5$ testi nedir?
+ two-sided test
- one-sided test to the right
- one-sided test to the left
- test of a Type II error
EX: **Doğru cevap:** iki yönlü test.
"$\ne$" işareti: gerçek değer 0.5'ten **büyük ya da küçük** olabilir; iki yönde de sapma $H_0$ aleyhine kanıttır. Bu yüzden ret bölgesi iki kuyrukta, $\alpha$ iki kuyruğa bölünür (%5 için her kuyrukta %2.5, kritik değer 1.96).
**Diğer şıklar neden yanlış?**
• Tek yönlü sağ: $H_1: \mu > 0.5$ olurdu.
• Tek yönlü sol: $H_1: \mu < 0.5$ olurdu.
• "Test of a Type II error": hata türleri test sonucu yapılan yanlışlardır, test türü değil.

## GEN hypSetup

--- LESSON u4c | t | t istatistiği, kritik değer, p-değeri

## CARD t istatistiği
Test istatistiği, "tahmin hipotez değerinden kaç standart hata uzakta?" sorusunun cevabıdır:
$$t = \frac{\text{tahminci} - \text{hipotez değeri}}{\text{tahmincinin standart hatası}} = \frac{\bar Y - \mu_{Y,0}}{SE(\bar Y)}$$
==Standart hata (standard error)==: tahmincinin standart sapmasının **tahmini**:
$$SE(\bar Y) = \frac{s_Y}{\sqrt n} = \sqrt{\frac{s_Y^2}{n}}$$
Burada $s^2_Y = \frac{1}{n-1}\sum(Y_i-\bar Y)^2$ örneklem varyansıdır. (Gerçek $\sigma_Y$'yi bilmediğimiz için onun yerine $s_Y$ kullanırız.)
**Neden işe yarar?** MLT sayesinde $H_0$ doğruysa ve $n$ büyükse $t\approx N(0,1)$. Yani $t$'yi standart normal tablosuyla değerlendirebiliriz: $|t|$ çok büyükse (2'den fazla gibi) $H_0$ altında böyle bir sonuç çok nadirdir → $H_0$'dan şüphelenirsin.
:::dikkat s mi s² mi?
Soru "sample **variance** $s^2_Y = 0.2484$" diyorsa önce karekök al ya da direkt $\sqrt{s^2/n}$ yaz: $\sqrt{0.2484/500} = 0.0223$.
Soru "sample **standard deviation** $s_Y = 145$" diyorsa: $145/\sqrt{800} = 5.126$.
En sık hata: varyansı standart sapma gibi kullanmak.
:::

## CARD Ret bölgesi ve kritik değerler
==Kritik değer (critical value)==: testin tam reddettiği sınır değer. ==Ret bölgesi (rejection region)==: $H_0$'ın reddedildiği test istatistiği değerlerinin kümesi.
| $H_1$ | Reddet eğer | %10 | %5 | %1 |
| $\mu>c$ | $t > z_\alpha$ | 1.28 | 1.645 | 2.33 |
| $\mu<c$ | $t < -z_\alpha$ | −1.28 | −1.645 | −2.33 |
| $\mu\ne c$ | $\lvert t\rvert > z_{\alpha/2}$ | 1.645 | 1.96 | 2.576 |
**Neden tek yönlünün kritik değeri daha küçük?** Tek yönlü testte %5'in **tamamı** tek kuyruğa konur ($\Phi(z) = 0.95$ → 1.645). İki yönlüde %5 ikiye bölünür, her kuyrukta %2.5 ($\Phi(z) = 0.975$ → 1.96).
:::ornek Örnekler
• İki yönlü, %5, $t = 2$ → $|2| > 1.96$ → reddet.
• İki yönlü, %5, $t = 1.79$ → $1.79 < 1.96$ → reddetme.
• Sağ tek yönlü, %5, $t = 1.79$ → $1.79 > 1.645$ → reddet!
• Sağ tek yönlü, %5, $t = -3$ → $-3 < 1.645$ → reddetme (yanlış yönde sapma $H_1: \mu > c$'yi desteklemez).
:::

## CARD p-değeri
==p-değeri (p-value)==: $H_0$ doğru olsaydı, en az hesaplanan kadar uç (ya da daha uç) bir test istatistiği görme olasılığı.
**Hesaplama** ($t$ test istatistiği):
• İki yönlü ($\ne$): $p = 2\Phi(-|t|)$ (iki kuyruğun toplamı)
• Sağ kuyruk ($H_1:\mu>c$): $p = 1-\Phi(t)$
• Sol kuyruk ($H_1:\mu<c$): $p = \Phi(t)$
**Karar kuralı: $p<\alpha$ ise $H_0$'ı reddet.** p ne kadar küçükse $H_0$ aleyhine kanıt o kadar güçlü.
:::ornek Örnek
$t=2$, iki yönlü: $p = 2\Phi(-2) = 2(0.0228) = 0.0455$.
• %5'te: $0.0455 < 0.05$ → reddet.
• %1'de: $0.0455 > 0.01$ → reddetme.
Yani p-değeri, testin **hangi düzeylerde** reddettiğini tek seferde söyler.
:::
:::dikkat p-değeri ne DEĞİLDİR?
p-değeri "$H_0$'ın doğru olma olasılığı" değildir. $H_0$'ı **doğru varsayarak** hesaplanır: "$H_0$ doğruysa bu kadar uç bir sonuç ne kadar şaşırtıcı?"
:::

## CARD PS4 Soru 4 çözümü
$n=500$, $\bar Y = 0.54$, $s^2_Y = 0.2484$, $H_0:\mu=0.5$.
**a) Standart hata:** varyans verilmiş, karekök al:
$SE(\bar Y) = \sqrt{0.2484/500} = 0.0223$
**b) İki yönlü test** ($H_1: \mu \ne 0.5$):
$t = (0.54-0.5)/0.0223 = 1.79$
$p = 2\Phi(-1.79) = 2(0.0367) = 0.073 > 0.05$ → **reddedilemez**.
**c) Tek yönlü test** ($H_1: \mu > 0.5$):
Aynı $t = 1.79$. $p = 1-\Phi(1.79) = 0.037 < 0.05$ → **reddedilir**.
**d) Neden farklı sonuç?** İki yönlü p-değeri iki kuyruğun toplamı; tek yönlü sadece bir kuyruk. Tek yönlü p, iki yönlünün yarısı. Kritik değer açısından: 1.79, 1.645'ten büyük ama 1.96'dan küçük.
**e) Yorum:** iki yönlü testte (fark var mı?) anlamlı kanıt yok; tek yönlü testte (büyük mü?) var.
:::ipucu Çözüm setindeki yuvarlama
Resmi çözüm SE'yi 0.022'ye yuvarlıyor, bu yüzden $t=1.82$, $p=0.069$ ve $0.035$ çıkıyor. Kararlar aynı. Sınavda şıklar 1.79 ya da 1.82 olabilir; ikisi de aynı karara götürür.
:::
Küçük örneklem notu: $Y$ normal ve $n$ küçükse ($<30$) t istatistiği tam olarak $t_{n-1}$ dağılır; kritik değerler biraz daha büyüktür.

## Q
SRC: PS4 Q1g
EN: The p-value is:
TR: p-değeri nedir?
+ the probability, computed under $H_0$, of obtaining a test statistic at least as adverse to $H_0$ as the one actually computed
- the probability that $H_0$ is true
- the probability of a Type II error
- the significance level chosen by the researcher
EX: **Doğru cevap:** $H_0$ altında hesaplanan, en az gözlenen kadar $H_0$ aleyhine bir test istatistiği elde etme olasılığı.
Soru kalıbı: "$H_0$ doğru olsaydı, bu kadar uç (ya da daha uç) bir sonuç görme olasılığım ne olurdu?" Küçük p → bu sonuç $H_0$ altında şaşırtıcı → $H_0$'dan şüphelen.
**Diğer şıklar neden yanlış?**
• "Probability that $H_0$ is true": en yaygın yanlış yorum. p-değeri $H_0$'ı doğru **varsayarak** hesaplanır; $H_0$'ın olasılığını veremez.
• "Type II error": Tip II, yanlış $H_0$'ı reddetmeme olasılığıdır; p-değeriyle ilgisi yok.
• "Significance level": $\alpha$ önceden seçilir; p-değeri veriden hesaplanır ve $\alpha$ ile **karşılaştırılır**.

## Q
EN: For a two-sided test at the 5% significance level using the normal approximation, the critical value is:
TR: Normal yaklaşımla %5 düzeyinde iki yönlü testin kritik değeri nedir?
+ $1.96$
- $1.645$
- $2.576$
- $1.28$
EX: **Doğru cevap: 1.96.**
İki yönlüde $\alpha = 0.05$ iki kuyruğa eşit bölünür: her kuyrukta 0.025. Kritik değer, sağında 0.025 kalan $z$: $\Phi(z) = 0.975$ → $z = 1.96$.
**Diğer şıklar hangi test?**
• 1.645: %5 **tek yönlü** ya da %10 iki yönlü.
• 2.576: %1 iki yönlü.
• 1.28: %10 tek yönlü.

## Q
EN: For a one-sided test ($H_1:\mu>c$) at the 5% level, we reject $H_0$ if:
TR: %5 düzeyinde tek yönlü test ($H_1:\mu>c$). Ne zaman reddederiz?
+ $t > 1.645$
- $t > 1.96$
- $|t| > 1.645$
- $t < -1.645$
EX: **Doğru cevap: $t > 1.645$.**
Tek yönlü sağ testte %5'in tamamı **sağ** kuyruktadır: $\Phi(z) = 0.95$ → $z_{0.05}=1.645$. Sadece büyük pozitif $t$ değerleri $H_1: \mu > c$'yi destekler.
**Diğer şıklar neden yanlış?**
• $t > 1.96$: bu iki yönlü testin kritik değeri; tek yönlüde daha küçük sınır kullanılır.
• $|t| > 1.645$: mutlak değer iki yönlü testte kullanılır; burada büyük negatif $t$ reddettirmez.
• $t < -1.645$: bu **sol** tek yönlü test ($H_1: \mu < c$).

## Q
SRC: PS4 Q4a
EN: With $n=500$ and sample variance $s^2_Y = 0.2484$, the standard error of $\bar Y$ is approximately:
TR: $n=500$, $s^2_Y=0.2484$. $SE(\bar Y)$ yaklaşık kaçtır?
+ $0.0223$
- $0.0005$
- $0.4984$
- $0.0111$
EX: **Doğru cevap: 0.0223.**
Verilen **varyans** ($s^2$), standart sapma değil:
1. $s^2_Y/n = 0.2484/500 = 0.000497$
2. Karekök: $SE = \sqrt{0.2484/500} = 0.0223$
Hesap makinesinde: kök tuşuna bas, içine $0.2484 \div 500$ yaz.
**Diğer şıklar nereden geliyor?**
• 0.0005: karekökü almayı unutmuşsun (0.000497). Varyans buldun, SE değil.
• 0.4984: $s_Y = \sqrt{0.2484}$; $n$ ile bölmeyi unutmuşsun. Bu tek gözlemin standart sapması.
• 0.0111: doğru değerin yarısı; formülü yanlış uygulamaktan gelir. Doğru formül $\sqrt{s^2_Y/n}$, başka bir bölme yok.

## Q
SRC: PS4 Q4d
EN: In PS4 Q4, the two-sided p-value is about 0.07 but the one-sided p-value is about 0.035. Why do they differ?
TR: İki yönlü p ≈ 0.07, tek yönlü p ≈ 0.035. Neden farklı?
+ The one-sided p-value uses only one tail, so it is half of the two-sided p-value.
- The one-sided test uses a different sample.
- The two-sided test uses the $t$ distribution.
- The standard error is different in the two tests.
EX: **Doğru cevap:** tek yönlü p-değeri sadece bir kuyruğu kullanır, bu yüzden iki yönlünün yarısıdır.
Aynı veri, aynı SE, aynı $t = 1.79$:
• İki yönlü: $p = 2\Phi(-1.79) = 2(0.0367) = 0.073$ (iki kuyruk)
• Tek yönlü: $p = 1 - \Phi(1.79) = 0.037$ (tek kuyruk)
Bu yüzden %5'te tek yönlü test reddediyor, iki yönlü reddetmiyor.
**Diğer şıklar neden yanlış?** Örneklem, dağılım ve SE iki testte de aynı; değişen sadece hangi kuyrukların sayıldığı.

## Q
EN: If the p-value is 0.03, then $H_0$ is:
TR: p-değeri 0.03 ise $H_0$:
+ rejected at the 5% level but not at the 1% level
- rejected at both the 5% and 1% levels
- not rejected at the 5% level
- rejected only at the 1% level
EX: **Doğru cevap:** %5'te reddedilir, %1'de reddedilmez.
Kural: $p < \alpha$ ise reddet. Her düzeyi ayrı kontrol et:
• %10: $0.03 < 0.10$ → reddet
• %5: $0.03 < 0.05$ → reddet
• %1: $0.03 > 0.01$ → reddetme
**Diğer şıklar neden yanlış?**
• "Both 5% and 1%": %1 için p'nin 0.01'den küçük olması gerekirdi.
• "Not rejected at 5%": $0.03 < 0.05$, reddedilir.
• "Only at 1%": tersine; küçük $\alpha$ daha katıdır. %1'de reddedilen her şey %5'te de reddedilir.

## Q
SRC: PS4 Q1h
EN: The critical value of a test is:
TR: Testin kritik değeri nedir?
+ the value of the test statistic at which the test just rejects $H_0$ at the given significance level
- the value of the estimator under $H_0$
- the p-value of the test
- the probability of a Type I error
EX: **Doğru cevap:** verilen anlamlılık düzeyinde testin $H_0$'ı **tam reddettiği** test istatistiği değeri, yani ret bölgesinin sınırı.
Örnek: %5 iki yönlü testte kritik değer 1.96; $|t| > 1.96$ olan bütün değerler ret bölgesidir.
**Diğer şıklar ne?**
• "Value of the estimator under $H_0$": bu hipotez değeri ($\mu_0$), kritik değer değil.
• "p-value": veriden hesaplanan bir olasılık; kritik değer ise test istatistiği ölçeğinde bir sınır.
• "Probability of Type I error": bu $\alpha$.

## GEN tMean
## GEN pValue

--- LESSON u4d | [ ] | Güven aralığı

## CARD %95 güven aralığı
Tek bir tahmin ($\bar Y = 1230$) yerine, gerçek değerin bulunabileceği bir **aralık** vermek daha bilgilendiricidir.
==Güven aralığı (confidence interval, CI)==: tüm olası rastgele örneklemlerin belli bir yüzdesinde gerçek $\mu_Y$'yi içerecek şekilde kurulan aralık.
$$\%95\text{ GA: } \bar Y \pm 1.96\times SE(\bar Y)$$
**Kurulum tarifi:**
1. $\bar Y$ ve $SE(\bar Y)$'yi bul.
2. Güven düzeyine göre kritik değeri seç.
3. Pay $=$ kritik değer × SE.
4. Aralık: (tahmin − pay, tahmin + pay).
| Güven | Kritik değer |
| %90 | 1.645 (1.64) |
| %95 | 1.96 |
| %99 | 2.576 (2.58) |
Güven arttıkça kritik değer büyür, **aralık genişler**. Daha emin olmak için daha geniş bir ağ atarsın.
:::ornek Kısa örnek
$\bar Y = 50$, $SE = 2$: %95 GA $= 50 \pm 1.96(2) = 50\pm 3.92 = (46.08,\ 53.92)$
:::
:::dikkat Doğru yorum
"Bu yöntemle tekrarlanan örneklemelerde kurulan aralıkların %95'i gerçek $\mu$'yü içerir."
Elindeki tek aralık için "%95 olasılıkla $\mu$ burada" demek **doğru değil**: $\mu$ sabit bir sayıdır, rastgele olan aralıktır. Kurulan bir aralık $\mu$'yü ya içerir ya içermez.
:::

## CARD Güven aralığı ile test
Güven aralığı ile hipotez testi aynı madalyonun iki yüzüdür:
**%95 GA = %5 düzeyinde iki yönlü testte reddedilemeyen tüm hipotez değerlerinin kümesi.**
• $H_0$ değeri aralığın **dışındaysa**: %5'te reddet.
• Aralığın **içindeyse**: reddedemezsin.
:::ornek Örnek
%95 GA $(4.2,\ 6.8)$:
• $H_0: \mu = 7$ → 7 dışarıda → reddet.
• $H_0: \mu = 5$ → 5 içeride → reddetme.
• $H_0: \mu = 6.8$ → tam sınırda → $|t| = 1.96$, sınırda karar.
:::
**Uyarı:** bu eşleşme **iki yönlü** test ve aynı düzey içindir: %95 GA ↔ %5 test, %99 GA ↔ %1 test, %90 GA ↔ %10 test.

## CARD PS4 Soru 3 ve seçim anketi
**PS4 Soru 3:** $n=800$, $\bar Y = 1230$, $s_Y = 145$.
1. $SE = 145/\sqrt{800} = 145/28.28 = 5.126$
2. %95: $1230\pm1.96(5.126) = 1230 \pm 10.05 = (1219.95,\ 1240.05)$
3. %99: $1230\pm2.58(5.126) = 1230 \pm 13.23 = (1216.77,\ 1243.23)$
**Seçim anketi (ders örneği 8):** 400 kişiden 215'i mevcut adayı destekliyor.
1. $\hat p = 215/400 = 0.5375$
2. $SE(\hat p) = \sqrt{\hat p(1-\hat p)/n} = \sqrt{0.5375\times0.4625/400} = 0.0249$
3. **Test** $H_0: p=0.5$, $H_1:p>0.5$ (aday çoğunlukta mı?):
$t = (0.5375 - 0.5)/0.0249 = 1.506$, $p = 1 - \Phi(1.506) = 0.066$. %5'te reddedilemez (ama %10'da reddedilir).
4. **Güven aralıkları:** %95: $0.5375 \pm 1.96(0.0249) = (0.4887,\ 0.5863)$; %99: $(0.4735,\ 0.6015)$. İkisi de 0.5'i içeriyor.
5. **%99 neden daha geniş?** Kritik değer daha büyük (2.57 > 1.96). Aralık, tüm olası örneklemlerin %95'i yerine %99'unda gerçek değeri içermek zorunda.

## Q
SRC: PS4 Q3
EN: A sample of 800 seniors has $\bar Y=1230$ and $s_Y=145$. The 95% confidence interval for the population mean is approximately:
TR: $n=800$, $\bar Y=1230$, $s_Y=145$. Anakütle ortalaması için %95 GA yaklaşık nedir?
+ $(1219.95,\ 1240.05)$
- $(945.8,\ 1514.2)$
- $(1216.77,\ 1243.23)$
- $(1221.57,\ 1238.43)$
EX: **Doğru cevap: (1219.95, 1240.05).**
1. Standart hata ($s_Y$ verilmiş, standart sapma): $SE = 145/\sqrt{800} = 5.126$
2. %95 → kritik değer 1.96. Pay: $1.96\times 5.126 = 10.05$
3. Aralık: $1230 \pm 1.96 \times 5.126$
**Diğer şıklar nereden geliyor?**
• $(945.8, 1514.2)$: SE yerine $s_Y$'yi kullanmışsın: $1230\pm1.96(145)$. Bu, tek bir öğrencinin değerinin düşeceği aralık; ortalamanın değil.
• $(1216.77, 1243.23)$: %99 aralığı (2.58 ile).
• $(1221.57, 1238.43)$: %90 aralığı (1.645 ile).

## Q
SRC: PS4 Q1i
EN: The correct interpretation of a 95% confidence interval for $\mu_Y$ is:
TR: $\mu_Y$ için %95 güven aralığının doğru yorumu hangisi?
+ In repeated samples, 95% of the intervals constructed this way contain the true $\mu_Y$.
- There is a 95% probability that $\mu_Y$ lies in this particular interval.
- 95% of the observations lie within the interval.
- The sample mean is within the interval 95% of the time.
EX: **Doğru cevap:** tekrarlanan örneklemelerde, bu yolla kurulan aralıkların %95'i gerçek $\mu_Y$'yi içerir.
Neden? Rastgele olan **aralıktır** (her örneklemde $\bar Y$ ve SE değişir), $\mu_Y$ değil. 100 farklı örneklemden 100 aralık kursan yaklaşık 95'i $\mu_Y$'yi yakalar.
**Diğer şıklar neden yanlış?**
• "95% probability that $\mu_Y$ lies in this interval": en yaygın yanlış yorum. Belirli bir aralık $\mu$'yü ya içerir ya içermez; olasılık 0 ya da 1.
• "95% of the observations": GA ortalama için kurulur; tek tek gözlemler çok daha geniş dağılır.
• "Sample mean within the interval": $\bar Y$ aralığın tam ortasındadır, her zaman içindedir.

## Q
EN: Why is a 99% confidence interval wider than a 95% interval?
TR: %99 güven aralığı neden %95'ten daha geniş?
+ It must contain the true value in 99% of all possible samples, so it uses a larger critical value.
- It uses a larger sample.
- It uses a smaller standard error.
- It is a one-sided interval.
EX: **Doğru cevap:** tüm olası örneklemlerin %99'unda gerçek değeri içermek zorunda olduğu için daha büyük bir kritik değer kullanır.
Mekanik açıklama: %99 için 2.576, %95 için 1.96. Aynı SE ile pay $2.576\cdot SE > 1.96 \cdot SE$.
Sezgisel açıklama: daha emin olmak istiyorsan daha geniş bir ağ atmalısın.
**Diğer şıklar neden yanlış?**
• "Larger sample": aynı örneklem kullanılır. Örneklem büyüseydi aralık **daralırdı**.
• "Smaller standard error": SE aynı; küçük SE aralığı daraltır.
• "One-sided": ikisi de iki taraflı aralıklar.

## Q
EN: The 95% confidence interval for $\mu_Y$ is $(4.2,\ 6.8)$. At the 5% level, the hypothesis $H_0:\mu_Y = 7$:
TR: %95 GA $(4.2, 6.8)$. %5 düzeyinde $H_0:\mu_Y=7$ için karar?
+ is rejected, because 7 is outside the interval
- is not rejected, because 7 is close to the interval
- cannot be tested with a confidence interval
- is rejected only at the 10% level
EX: **Doğru cevap:** reddedilir, çünkü 7 aralığın dışında.
Kural: %95 GA, %5 düzeyinde iki yönlü testte reddedilemeyen değerlerin kümesidir. 7 > 6.8 → aralıkta değil → %5'te reddedilir.
**Diğer şıklar neden yanlış?**
• "Close to the interval": "yakın" diye bir kural yok; ya içinde ya dışında.
• "Cannot be tested": güven aralığı ile iki yönlü test tam olarak eşleşir; test edilebilir.
• "Only at the 10%": %5'te reddedilen bir değer, daha gevşek olan %10'da da reddedilir (%90 aralığı daha dar, 7 yine dışında).

## Q
EN: A poll of 400 voters finds $\hat p = 0.5375$. The standard error of $\hat p$ is approximately:
TR: 400 kişilik ankette $\hat p=0.5375$. $SE(\hat p)$ yaklaşık kaçtır?
+ $0.0249$
- $0.0006$
- $0.4986$
- $0.0013$
EX: **Doğru cevap: 0.0249.**
Oran için standart hata: $SE(\hat p) = \sqrt{\hat p(1-\hat p)/n}$
1. $\hat p(1-\hat p) = 0.5375\times0.4625 = 0.2486$
2. $\div n$: $0.2486/400 = 0.000621$
3. Karekök: $\sqrt{0.5375\times0.4625/400} = 0.0249$
**Diğer şıklar nereden geliyor?**
• 0.0006: karekökü almamışsın (varyans).
• 0.4986: $\sqrt{0.2486}$; $n$'ye bölmeyi unutmuşsun (tek kişinin sd'si).
• 0.0013: $\sqrt{0.2486}/400$; $\sqrt n$ yerine $n$'ye bölmüşsün.

## GEN ciMean
## GEN ciProp
## GEN ciTest

--- LESSON u4e | Δ | İki ortalamanın farkı

## CARD Fark testi
Soru: kadın ve erkek mezunların ortalama kazancı farklı mı? İki ayrı anakütle (erkekler, kadınlar), iki ayrı örneklem.
Test edilen: $H_0: \mu_m-\mu_w = d_0$ (genelde $d_0 = 0$, yani "fark yok").
• **Tahminci:** $\bar Y_m - \bar Y_w$ (örneklem ortalamalarının farkı)
• **Standart hata:** iki örneklem bağımsız olduğu için **varyanslar toplanır** (farkta bile!):
$$SE(\bar Y_m-\bar Y_w) = \sqrt{\frac{s^2_m}{n_m} + \frac{s^2_w}{n_w}}$$
• **Test istatistiği:**
$$t = \frac{(\bar Y_m-\bar Y_w) - d_0}{SE(\bar Y_m-\bar Y_w)}\approx N(0,1)$$
• **Güven aralığı:**
$$\%95\text{ GA: } (\bar Y_m-\bar Y_w)\pm1.96\,SE$$
:::dikkat Neden farkta varyanslar toplanır?
$\text{var}(X - Y) = \text{var}(X) + \text{var}(Y) - 2\text{cov}(X,Y)$. Bağımsızlıkta cov = 0, kalan iki varyans **toplanır**. İki belirsiz sayının farkı, her birinden daha belirsizdir.
Standart hatalar ($s/\sqrt n$) **toplanmaz**; önce kareleri (varyanslar) toplanır, sonra karekök alınır.
:::
:::ornek Sayıyla
$s^2_m/n_m = 0.09$ (SE$_m$ = 0.3), $s^2_w/n_w = 0.16$ (SE$_w$ = 0.4):
$SE = \sqrt{0.09 + 0.16} = \sqrt{0.25} = 0.5$. ($0.3 + 0.4 = 0.7$ yanlış!)
:::

## CARD Cinsiyet kazanç farkı tablosu
| Yıl | $\bar Y_m$ | $\bar Y_w$ | Fark | SE | %95 GA |
| 1992 | 23.27 | 20.05 | 3.22 | 0.33 | [2.58, 3.88] |
| 2008 | 24.98 | 20.87 | 4.11 | 0.35 | [3.41, 4.80] |
**2008 için adımlar:**
1. Fark: $24.98 - 20.87 = 4.11$ dolar/saat
2. $t = 4.11/0.35 = 11.7$
3. $11.7 > 2.58$ → %1'de bile çok anlamlı (p-değeri neredeyse 0)
4. %95 GA: $4.11 \pm 1.96(0.35) = 4.11 \pm 0.69 = (3.41,\ 4.80)$; 0'ı içermiyor ✓
**Ekonomik büyüklük:** saatte 4.11 dolar, yılda (2000 saat) 8220 dolar eder. Oran olarak $4.11/24.98 = 16\%$.
**Ama analiz farkın nedenini söylemez.** Ayrımcılık mı, beceri, deneyim ya da eğitim farkı mı, meslek seçimi mi? İki ortalamanın farkı bunları ayırt edemez; karıştırıcı değişkenler hesaba katılmamıştır.
:::ipucu İstatistiksel anlamlılık ≠ nedensellik
"Fark anlamlı" = "fark sıfır değil, şansla açıklanamaz". "Fark ayrımcılıktan kaynaklanıyor" demek için başka analizler gerekir.
:::

## Q
EN: Two independent samples have $s^2_m/n_m = 0.09$ and $s^2_w/n_w = 0.16$. The standard error of $\bar Y_m - \bar Y_w$ is:
TR: $s^2_m/n_m = 0.09$ ve $s^2_w/n_w=0.16$. Farkın standart hatası nedir?
+ $0.5$
- $0.7$
- $0.25$
- $0.1$
EX: **Doğru cevap: 0.5.**
1. Bağımsız örneklemlerde farkın varyansı = varyansların **toplamı**: $0.09 + 0.16 = 0.25$
2. Standart hata = karekökü: $SE = \sqrt{0.09+0.16} = \sqrt{0.25} = 0.5$
**Diğer şıklar nereden geliyor?**
• 0.7: standart hataları toplamışsın: $\sqrt{0.09} + \sqrt{0.16} = 0.3 + 0.4$. SE'ler toplanmaz, varyanslar toplanır.
• 0.25: karekökü almamışsın (bu varyans).
• 0.1: $\sqrt{0.16 - 0.09}$ gibi çıkarma; farkta bile varyanslar **toplanır**.

## Q
EN: In 2008, the gender gap in hourly earnings was 4.11 with a standard error of 0.35. This tells us:
TR: 2008'de kazanç farkı 4.11, SE 0.35. Bu ne söyler?
+ the gap is statistically significant, but the analysis does not explain why the gap exists
- the gap is caused by discrimination
- the gap is not statistically significant at the 5% level
- men and women have the same mean earnings
EX: **Doğru cevap:** fark istatistiksel olarak anlamlı, ama analiz farkın **neden** olduğunu açıklamaz.
1. $t = 4.11/0.35 = 11.7$; %1 kritik değeri 2.58'in çok üstünde → son derece anlamlı.
2. Ama iki grup ortalamasının farkı; eğitim, deneyim, meslek, çalışma saati gibi karıştırıcıları kontrol etmiyor.
**Diğer şıklar neden yanlış?**
• "Caused by discrimination": nedensellik iddiası; bu analiz bunu gösteremez.
• "Not significant at 5%": $11.7 > 1.96$, kesinlikle anlamlı.
• "Same mean earnings": fark 4.11 ve %95 GA (3.41, 4.80) sıfırı içermiyor.

## Q
EN: The standard error used for testing the difference between two independent means is:
TR: İki bağımsız ortalamanın farkı testinde kullanılan standart hata hangisi?
+ $\sqrt{s^2_m/n_m + s^2_w/n_w}$
- $s_m/\sqrt{n_m} + s_w/\sqrt{n_w}$
- $\sqrt{s^2_m/n_m - s^2_w/n_w}$
- $(s_m - s_w)/\sqrt{n_m+n_w}$
EX: **Doğru cevap: $\sqrt{s^2_m/n_m + s^2_w/n_w}$.**
1. $\text{var}(\bar Y_m) = s^2_m/n_m$ ve $\text{var}(\bar Y_w) = s^2_w/n_w$ (tahminen)
2. Bağımsızlıkta: $\text{var}(\bar Y_m - \bar Y_w) = \text{var}(\bar Y_m) + \text{var}(\bar Y_w)$
3. SE = karekök
**Diğer şıklar neden yanlış?**
• $s_m/\sqrt{n_m} + s_w/\sqrt{n_w}$: SE'leri toplamak; olduğundan büyük çıkar.
• Çıkarma işaretli: farkın varyansında bile kovaryans 0 iken varyanslar **toplanır**; ayrıca çıkarma negatif sayı verebilir, kökü alınamaz.
• $(s_m - s_w)/\dots$: standart sapmaların farkı anlamsız; iki grubun yayılımı aynıysa SE sıfır çıkardı.

## GEN diffMeans
`);
