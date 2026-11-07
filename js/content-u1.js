CONTENT.push(String.raw`
=== UNIT u1 | Hafta 1 | Ekonometriye Giriş | Ekonometri ne işe yarar, nedensellik ve veri türleri

--- LESSON u1a | ⟶ | Ekonometri ve nedensel etki

## CARD Ekonometri nedir?
Stock & Watson'ın tanımı (sınavda birebir sorulur):
:::formul
**Econometrics is the science and art of using economic theory and statistical techniques to analyze economic data.**
Ekonometri, ekonomik veriyi analiz etmek için ekonomi teorisini ve istatistik tekniklerini kullanma bilimi ve sanatıdır.
:::
Derste geçen diğer dört tanım: ekonomik teorileri test etme bilimi; satış, büyüme, hisse fiyatı gibi gelecek değerleri ==tahmin etme (forecasting)== araçları; matematiksel ekonomik modelleri gerçek veriye ==uydurma (fitting)==; geçmiş veriyle hükümet ve şirketlere sayısal politika önerisi yapma.
Ekonomi teorisi bize "sınıf küçülürse başarı artar" der ama **ne kadar** arttığını söylemez. Bu sayıyı ekonometri bulur. Örnek sorular: sınıf mevcudu → başarı, bir yıl fazla eğitim → kazanç, sigaranın fiyat esnekliği, faiz → büyüme.

## CARD Nedensel etki ve ideal deney
==Nedensel etki (causal effect)==: bir eylemin (treatment) bir sonuç (outcome) üzerindeki etkisi. Örnek: 100 gram gübre → kaç kg domates?
Bunu ölçmenin altın standardı ==ideal randomize kontrollü deney (ideal randomized controlled experiment, RCE)==:
• Denekler **rastgele** iki gruba ayrılır: ==tedavi grubu (treatment group)== ve ==kontrol grubu (control group)==.
• Gruplara farklı muamele yapılır, sonra ortalama sonuçlar karşılaştırılır.
Rastgele atama olduğu için iki grup diğer her açıdan ortalamada aynıdır. Fark sadece "tedaviden" gelir.
Diğer tanım: nedensel etki, ==ceteris paribus== ("diğer her şey sabitken") etkidir.

## CARD Karıştırıcı değişken (confounder)
==Karıştırıcı değişken (confounding / omitted variable)==: hem tedavi değişkeniyle hem sonuçla ilişkili olan ama analize **dahil edilmemiş** değişken.
:::ornek Sınıf mevcudu örneği
Zengin bölgelerde sınıflar küçük **ve** öğrenciler zaten başarılı olabilir. Bölge geliri hem sınıf mevcuduyla hem test puanıyla ilişkili. Modele koymazsak "küçük sınıfın etkisi" sandığımız şeyin bir kısmı aslında gelirin etkisi olur.
:::
Derste sayılan diğer olası karıştırıcılar: okul dışı öğrenme imkânları, ebeveyn eğitimi, akran etkisi, sınıftaki teknoloji, demografi, gözlenemeyen kişisel özellikler.

## CARD Çalışma saati deneyi (PS1 Soru 3)
**Soru:** Çalışma saatinin ekonometri vize notuna etkisini ölçmek için ideal bir RCE tasarla.
**Tasarım:** Öğrencileri rastgele gruplara ata: kontrol grubu hiç çalışmasın, tedavi grubu 4 saat çalışsın (birden fazla tedavi grubu da olabilir: 2 saat, 4 saat...). Grupların ortalama vize notlarını karşılaştır. Fark = nedensel etki.
**Pratik engeller:** En büyüğü ==uyum (compliance)==: kontrol grubundakilerin gizlice çalışmasını ve tedavi grubunun gerçekten 4 saat çalışmasını nasıl garantilersin? Ayrıca etik sorunlar (birine "çalışma" demek) ve maliyet.

## Q
SRC: PS1 Q1a
EN: According to Stock and Watson, econometrics is:
TR: Stock ve Watson'a göre ekonometri nedir?
+ the science and art of using economic theory and statistical techniques to analyze economic data
- the study of how individuals allocate scarce resources
- the use of accounting rules to prepare financial statements
- a branch of mathematics that proves economic theorems without data
EX: Birebir tanım: "the science and art of using economic theory and statistical techniques to analyze economic data". Sınavda kelimesi kelimesine çıkabilir.

## Q
SRC: PS1 Q1h
EN: The causal effect of a treatment is best defined as the effect on an outcome:
TR: Bir uygulamanın nedensel etkisi en iyi nasıl tanımlanır?
+ as measured in an ideal randomized controlled experiment
- as measured by the correlation between the treatment and the outcome
- predicted by an economic theory
- observed in a single time period
EX: Nedensel etki, ideal randomize kontrollü deneyde ölçülen etkidir. Diğer tanımı: ceteris paribus (diğer her şey sabitken) etki. Korelasyon nedensellik demek değildir.

## Q
SRC: PS1 Q1i
EN: A confounding (omitted) variable is a variable that is:
TR: Karıştırıcı (dışlanmış) değişken nedir?
+ correlated with both the treatment and the outcome, but not included in the analysis
- randomly assigned to the treatment and control groups
- uncorrelated with both the treatment and the outcome
- the dependent variable in a regression
EX: İki şart birlikte gerekir: hem tedaviyle hem sonuçla ilişkili olacak **ve** analize dahil edilmemiş olacak.

## Q
SRC: PS1 Q1g
EN: The key feature of an ideal randomized controlled experiment is that:
TR: İdeal randomize kontrollü deneyin temel özelliği nedir?
+ subjects are randomly assigned to treatment and control groups
- subjects choose whether to receive the treatment
- only the treatment group is observed
- the sample includes only one time period
EX: Rastgele atama. Kişiler kendi grubunu seçerse (self-selection), gruplar başka açılardan da farklılaşır ve etki karışır.

## Q
SRC: PS1 Q3
EN: In an experiment on the effect of study hours on midterm scores, the main practical impediment is:
TR: Çalışma saatinin vize notuna etkisini ölçen deneyde temel pratik engel nedir?
+ ensuring that students comply with their assigned study hours
- computing the average grade of each group
- finding students who take the midterm
- the fact that grades are numerical
EX: Çözüm setinde vurgulanan sorun uyum (compliance): kontrol grubu gizlice çalışabilir, tedavi grubu 4 saati tamamlamayabilir.

## Q
EN: In a study of class size and test scores, which variable is most likely a confounder?
TR: Sınıf mevcudu ve test puanı çalışmasında hangisi büyük olasılıkla karıştırıcı değişkendir?
+ average district income
- the student's ID number
- the day of the week the test was given, if randomly chosen
- the color of the classroom walls
EX: Bölge geliri hem sınıf mevcudunu (zengin bölge daha çok öğretmen tutar) hem test puanını etkiler. İki koşulu da sağlar.

## Q
EN: "Ceteris paribus" means:
TR: "Ceteris paribus" ne demektir?
+ holding all other factors constant
- on average over the population
- in the long run
- with random sampling
EX: Latince "diğer şeyler sabitken". Nedensel etkinin ikinci tanımı budur.

--- LESSON u1b | ▦ | Veri türleri

## CARD Deneysel veri ve gözlemsel veri
• ==Deneysel veri (experimental data)==: bir tedaviyi ya da politikayı değerlendirmek için tasarlanmış **deneylerden** gelen veri.
• ==Gözlemsel veri (observational data)==: insanların gerçek davranışlarını deney ortamı **dışında** gözleyerek elde edilen veri. Genelde anketler (surveys) ve idari kayıtlar.
Ekonomide çoğu veri gözlemseldir. Kimseyi rastgele "üniversiteye git" ya da "gitme" diye atayamazsın. Bu yüzden nedensel etkiyi bulmak zordur ve dersin büyük kısmı bu zorlukla ilgilidir.

## CARD Üç veri yapısı
| Tür | Birim | Zaman | Örnek |
| ==Kesit (cross-sectional)== | çok | **tek** dönem | 1999'da 420 Kaliforniya okul bölgesi |
| ==Zaman serisi (time series)== | **tek** | çok dönem | Türkiye'nin 2000–2024 çeyreklik GSYH'si |
| ==Panel (longitudinal)== | çok | çok dönem | 81 ilin 10 yıllık işsizlik oranı |
:::ipucu Hızlı karar
Kaç birim var? Kaç zaman var? İkisi de çoksa panel. Panel veriye ==longitudinal data== da denir.
:::

## Q
SRC: PS1 Q1d
EN: Data on the 2023 profits of 500 different firms is an example of:
TR: 500 farklı firmanın 2023 kârları hangi veri türüdür?
+ cross-sectional data
- time series data
- panel data
- experimental data
EX: Çok birim (500 firma), tek dönem (2023). Kesit veri.

## Q
SRC: PS1 Q1f
EN: Monthly inflation in Turkey from 2010 to 2024 is an example of:
TR: Türkiye'nin 2010–2024 aylık enflasyonu hangi veri türüdür?
+ time series data
- cross-sectional data
- panel data
- experimental data
EX: Tek birim (Türkiye), çok dönem (180 ay). Zaman serisi.

## Q
SRC: PS1 Q1e
EN: A survey that follows the same 1,000 households every year from 2015 to 2020 produces:
TR: Aynı 1.000 haneyi 2015–2020 arasında her yıl izleyen anket hangi veriyi üretir?
+ panel data
- cross-sectional data
- time series data
- experimental data
EX: Çok birim (1.000 hane) ve çok dönem (6 yıl). Panel (longitudinal) veri.

## Q
SRC: PS1 Q1c
EN: Observational data are:
TR: Gözlemsel veri nedir?
+ data obtained by observing actual behavior outside an experimental setting
- data collected only from randomized experiments
- data on a single entity over time
- data that contain no measurement error
EX: Tanım: gerçek davranışın deney ortamı dışında gözlenmesi. Genelde anketlerle toplanır.

## Q
SRC: PS1 Q1b
EN: A clinical trial that randomly assigns patients to a new drug or a placebo generates:
TR: Hastaları rastgele yeni ilaç ya da plasebo grubuna atayan klinik deney hangi veriyi üretir?
+ experimental data
- observational data
- time series data
- panel data only
EX: Bir tedaviyi değerlendirmek için tasarlanmış ve rastgele atama yapan bir deney. Deneysel veri.

## Q
EN: Panel data are also called:
TR: Panel veriye başka ne ad verilir?
+ longitudinal data
- cross-sectional data
- time series data
- experimental data
EX: Panel data = longitudinal data.

## GEN dataType

--- LESSON u1c | Ŷ | Kestirim, tahmin ve öngörü

## CARD Regresyon modeli ve kestirim
Ders boyunca kullanacağımız model:
$$Y = \beta_0 + \beta_1 X + u$$
• $Y$: ==bağımlı değişken (dependent variable)==, açıklanmak istenen.
• $X$: ==bağımsız değişken (independent variable)==, açıklayan.
• $\beta_0$: ==sabit terim (intercept)==, $\beta_1$: ==eğim (slope)==.
• $u$: ==hata terimi (error term)==, $X$ dışındaki her şey.
$\beta_1$, $X$'teki bir birimlik artışın $Y$ üzerindeki **ortalama** etkisidir.
==Kestirim (estimation)==: $Y$ ve $X$ verisini kullanarak bilinmeyen $\beta_0$ ve $\beta_1$ hakkında bilgi edinme süreci. Daha genel tanım (PS1): örneklem verisiyle bir anakütle parametresinin değerini hesaplamak.

## CARD Tahmin ve öngörü
Tahmin edilen katsayılarla $\hat Y = \hat\beta_0 + \hat\beta_1 X$ yazarız.
• ==Tahmin (prediction)==: geçmiş veriyle tahmin edilmiş modeli kullanarak **yeni gözlemler** için sonuç değişkenini tahmin etmek.
• ==Öngörü (forecasting)==: **gelecek dönemler** için tahmin. Öngörü, tahminin zamana yönelik özel hâlidir.
:::dikkat Tahmin için nedensellik gerekmez
Yayaların şemsiye kullandığını görerek yağmur yağdığını tahmin edebilirsin, ama şemsiye yağmura neden olmaz. İyi tahmin için korelasyon yeterli. Politika etkisini ölçmek içinse nedensellik gerekir.
:::

## Q
SRC: PS1 Q1j
EN: Estimation is:
TR: Kestirim (estimation) nedir?
+ the process of using sample data to calculate an estimate of a population parameter
- predicting the value of a variable in future periods
- randomly assigning subjects to treatment groups
- collecting data through surveys
EX: Örneklem verisinden anakütle parametresi (ör. $\beta_1$) için sayısal değer hesaplama süreci.

## Q
SRC: PS1 Q1l
EN: Forecasting is:
TR: Öngörü (forecasting) nedir?
+ using a model estimated from historical data to predict an outcome at future time periods
- using a model to predict the outcome for new observations in the same period
- estimating the causal effect of a policy
- computing the sample mean of historical data
EX: Gelecek zaman dönemleri için tahmin. Yeni gözlemler için yapılan tahmin ise prediction.

## Q
EN: You can predict rain by observing whether pedestrians carry umbrellas. This example shows that:
TR: Şemsiyelere bakarak yağmuru tahmin edebilirsin. Bu örnek neyi gösterir?
+ prediction does not require a causal relationship
- umbrellas cause rain
- prediction is impossible without an experiment
- correlation always implies causation
EX: İyi tahmin için iki değişkenin birlikte hareket etmesi yeterli. Nedensellik gerekmez.

## Q
EN: In $Y = \beta_0 + \beta_1X + u$, the parameter $\beta_1$ measures:
TR: Bu modelde $\beta_1$ neyi ölçer?
+ the average effect on $Y$ of a one-unit increase in $X$
- the value of $Y$ when $X=0$
- the variance of the error term
- the correlation between $X$ and $u$
EX: $\beta_1$ eğimdir: $X$ bir birim artınca $Y$ ortalamada $\beta_1$ kadar değişir. $X=0$ iken $Y$'nin değeri $\beta_0$'dır.

## Q
EN: In $Y = \beta_0 + \beta_1X + u$, the term $u$ represents:
TR: Bu modelde $u$ neyi temsil eder?
+ all factors other than $X$ that affect $Y$
- the predicted value of $Y$
- the intercept
- the sample size
EX: Hata terimi, $X$ dışında $Y$'yi etkileyen her şeyi içerir (ör. öğrencinin yeteneği).
`);
