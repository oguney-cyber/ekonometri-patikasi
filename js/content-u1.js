CONTENT.push(String.raw`
=== UNIT u1 | Hafta 1 | Ekonometriye Giriş | Ekonometri ne işe yarar, nedensellik ve veri türleri

--- LESSON u1a | ⟶ | Ekonometri ve nedensel etki

## CARD Ekonometri nedir?
Stock & Watson'ın tanımı sınavda kelimesi kelimesine sorulabilir. Ezberle:
:::formul
**Econometrics is the science and art of using economic theory and statistical techniques to analyze economic data.**
Ekonometri, ekonomik veriyi analiz etmek için ekonomi teorisini ve istatistik tekniklerini kullanma bilimi ve sanatıdır.
:::
Tanımı parçalara ayırınca üç malzeme görürsün:
1. **Ekonomi teorisi:** neyin neyi etkileyebileceğini söyler (fiyat artarsa talep düşer gibi).
2. **İstatistik teknikleri:** veriden sayı çıkarmanın yolları (ortalama, regresyon, hipotez testi).
3. **Ekonomik veri:** gerçek dünyadan toplanan sayılar (maaşlar, fiyatlar, test puanları).
"Science and art" (bilim ve sanat) ifadesi de önemli: kurallar bilimdir, ama hangi modeli seçeceğin, hangi değişkeni ekleyeceğin biraz da yargı işidir.
Derste geçen diğer dört tanım:
• Ekonomik teorileri **test etme** bilimi.
• Satış, büyüme, hisse fiyatı gibi gelecek değerleri ==tahmin etme (forecasting)== araçları.
• Matematiksel ekonomik modelleri gerçek veriye ==uydurma (fitting)== süreci.
• Geçmiş veriyle hükümet ve şirketlere **sayısal politika önerisi** yapma.

**Ekonometri hangi soruyu cevaplar?**
Ekonomi teorisi yönü söyler, ekonometri **büyüklüğü** bulur.
• Teori: "Sınıf küçülürse öğrenci başarısı artar." Ekonometri: "Sınıfı 1 öğrenci küçültmek test puanını ortalama **2.28 puan** artırır."
• Teori: "Eğitim kazancı artırır." Ekonometri: "Bir yıl fazla eğitim saatlik kazancı ortalama **yüzde 8–10** artırır."
• Teori: "Sigara vergisi tüketimi düşürür." Ekonometri: "Fiyat %10 artarsa tüketim ortalama yüzde **x** düşer" (fiyat esnekliği).
• Faiz oranı 1 puan artarsa büyüme ne kadar yavaşlar?
Bu soruların hepsi aynı kalıpta: **X değişirse Y ne kadar değişir?** İşte bu, dersin tamamının konusu olan ==nedensel etki== sorusudur.
:::ipucu Sınavda nasıl sorulur?
"Which of the following questions can econometrics answer?" tipinde sorularda doğru şık hep **sayısal bir etki** soran şıktır: "how much", "by how much", "what is the effect of".
:::

## CARD Nedensel etki ve ideal deney
==Nedensel etki (causal effect)==: bir eylemin, yani ==tedavinin (treatment)==, bir ==sonuç (outcome)== üzerindeki etkisi.
Örnek: domates tarlasına 100 gram gübre koyarsan kaç kg fazla domates alırsın? Gübre tedavi, domates miktarı sonuç.
Bunu ölçmenin altın standardı ==ideal randomize kontrollü deney (ideal randomized controlled experiment, RCE)==:
1. Bir grup denek (tarla, öğrenci, hasta) seçilir.
2. Denekler **yazı-tura gibi rastgele** iki gruba ayrılır: ==tedavi grubu (treatment group)== tedaviyi alır, ==kontrol grubu (control group)== almaz.
3. Bir süre sonra iki grubun **ortalama** sonuçları karşılaştırılır.
4. Fark = nedensel etki.
**Neden rastgele?** Rastgele atama yapınca iki grup diğer her açıdan **ortalamada aynı** olur: aynı toprak kalitesi, aynı güneş, aynı yağmur. Gruplar arasındaki tek sistematik fark tedavi olur. O yüzden sonuçtaki fark başka bir şeyden gelemez.
**"İdeal"** kelimesi de önemli: denekler tam uyar, kimse gruptan ayrılmaz, ölçüm hatasız. Gerçek deneyler bu ideale ancak yaklaşır.
Nedensel etkinin ikinci tanımı: ==ceteris paribus== (Latince "diğer her şey sabitken") etki. Yani sadece tedavi değişse, geri kalan her şey aynı kalsa sonuç ne kadar değişirdi?

**Korelasyon nedensellik değildir.**
İki değişken birlikte hareket edebilir ama biri diğerine neden olmayabilir.
:::ornek Dondurma ve boğulma
Yazın hem dondurma satışı hem boğulma vakası artar. Dondurma boğulmaya neden olmaz. İkisini de **sıcak hava** artırır. Sıcak hava burada üçüncü bir değişken, yani karıştırıcıdır.
:::
Bu yüzden sınavda "causal effect = correlation between treatment and outcome" şıkkı **her zaman yanlıştır**. Korelasyon sadece birlikte hareketi ölçer. Nedensel etki için ya ideal deney gerekir ya da karıştırıcıları hesaba katan dikkatli bir analiz.

## CARD Karıştırıcı değişken (confounder)
==Karıştırıcı değişken (confounding / omitted variable)== şu üç şartı birlikte sağlayan değişkendir:
1. **Tedavi değişkeniyle** ilişkili,
2. **Sonuç değişkeniyle** ilişkili,
3. Analize **dahil edilmemiş** (dışlanmış, omitted).
Üç şarttan biri eksikse karıştırıcı değildir. Örneğin rastgele atanmış bir değişken tedaviyle ilişkisiz olur, karıştırıcı olamaz.
:::ornek Sınıf mevcudu ve test puanı
Zengin bölgelerde okullar daha çok öğretmen tutabilir, yani sınıflar **küçük** olur. Aynı bölgelerde aileler özel ders, kitap, bilgisayar alabilir, yani öğrenciler zaten **başarılı** olur.
Bölge geliri → sınıf mevcudu (şart 1 ✓), bölge geliri → test puanı (şart 2 ✓). Modele koymazsak (şart 3 ✓) "küçük sınıfın etkisi" sandığımız şeyin bir kısmı aslında gelirin etkisi olur. Etkiyi **olduğundan büyük** ölçeriz.
:::
Derste sayılan diğer olası karıştırıcılar: okul dışı öğrenme imkânları, ebeveyn eğitimi, akran etkisi, sınıftaki teknoloji, demografi, öğrencinin gözlenemeyen kişisel özellikleri (motivasyon, yetenek).
:::ipucu Karıştırıcıyı nasıl tanırsın?
Şıklarda iki soruyu sor: "Bu değişken tedaviyi etkiler mi?" ve "Sonucu etkiler mi?" İkisine de evet diyorsan karıştırıcıdır. Öğrenci numarası, duvar rengi, rastgele seçilmiş test günü gibi şeyler ikisini de etkilemez.
:::

## CARD Çalışma saati deneyi (PS1 Soru 3)
**Soru:** Çalışma saatinin ekonometri vize notuna etkisini ölçmek için ideal bir RCE tasarla.
**Tasarım adım adım:**
1. Öğrencilerden bir örneklem al.
2. Onları **rastgele** gruplara ata: kontrol grubu hiç çalışmasın, tedavi grubu 4 saat çalışsın. Birden fazla tedavi grubu da olabilir: 2 saat, 4 saat, 6 saat.
3. Herkes aynı vizeye girsin.
4. Grupların ortalama vize notlarını karşılaştır. Örneğin tedavi grubu 72, kontrol grubu 60 aldıysa 4 saat çalışmanın nedensel etkisi 12 puandır.
**Pratik engeller:**
• En büyüğü ==uyum (compliance)==: kontrol grubundakilerin gizlice çalışmasını ve tedavi grubunun gerçekten 4 saat çalışmasını nasıl garantilersin? Uyum bozulursa gruplar arasındaki gerçek fark azalır ve etkiyi yanlış ölçersin.
• Etik sorun: birine "sınava çalışma" demek adil değil.
• Maliyet ve denetim zorluğu.
:::dikkat Sınav tuzağı
"Ortalamaları hesaplamak", "notların sayısal olması", "sınava giren öğrenci bulmak" gibi şıklar engel değildir. Çözüm setinin vurguladığı engel **uyum (compliance)**.
:::

## Q
SRC: PS1 Q1a
EN: According to Stock and Watson, econometrics is:
TR: Stock ve Watson'a göre ekonometri nedir?
+ the science and art of using economic theory and statistical techniques to analyze economic data
- the study of how individuals allocate scarce resources
- the use of accounting rules to prepare financial statements
- a branch of mathematics that proves economic theorems without data
EX: **Doğru cevap birebir tanım:** "the science and art of using economic theory and statistical techniques to analyze economic data".
Tanımın üç parçasını kontrol et: ekonomi teorisi + istatistik teknikleri + ekonomik veri. Doğru şıkta üçü de var.
**Diğer şıklar neden yanlış?**
• "how individuals allocate scarce resources": bu **iktisadın (economics)** genel tanımı. Kıt kaynakların dağılımı, ekonometrinin değil iktisadın konusu.
• "accounting rules to prepare financial statements": bu **muhasebe**. Ekonometride veri analizi var, finansal tablo hazırlama yok.
• "proves economic theorems without data": bu **matematiksel iktisat**. Ekonometrinin özü tam tersine veri kullanmak.
:::ipucu Sınavda
Tanım sorusunda "data" kelimesi geçmeyen şık ekonometri olamaz.
:::

## Q
SRC: PS1 Q1h
EN: The causal effect of a treatment is best defined as the effect on an outcome:
TR: Bir uygulamanın nedensel etkisi en iyi nasıl tanımlanır?
+ as measured in an ideal randomized controlled experiment
- as measured by the correlation between the treatment and the outcome
- predicted by an economic theory
- observed in a single time period
EX: **Doğru cevap:** nedensel etki, ideal randomize kontrollü deneyde ölçülen etkidir.
Neden? Rastgele atama tedavi ve kontrol gruplarını diğer her açıdan ortalamada eşitler. Gruplar arasındaki tek fark tedavi olduğu için sonuçtaki fark tedavinin etkisidir. Bunun diğer adı ceteris paribus (diğer her şey sabitken) etkidir.
**Diğer şıklar neden yanlış?**
• "correlation between the treatment and the outcome": korelasyon nedensellik değildir. Dondurma satışı ile boğulma ilişkili ama biri diğerine neden olmaz; ikisini de sıcak hava etkiler.
• "predicted by an economic theory": teori sadece yön söyler ("artar", "azalır"). Etkinin büyüklüğünü veriyle ölçmek gerekir.
• "observed in a single time period": tek dönem gözlem yapmak, ölçülen şeyin nedensel olduğunu garanti etmez. Zaman boyutu tanımla ilgili değil.

## Q
SRC: PS1 Q1i
EN: A confounding (omitted) variable is a variable that is:
TR: Karıştırıcı (dışlanmış) değişken nedir?
+ correlated with both the treatment and the outcome, but not included in the analysis
- randomly assigned to the treatment and control groups
- uncorrelated with both the treatment and the outcome
- the dependent variable in a regression
EX: **Doğru cevap:** hem tedaviyle hem sonuçla ilişkili **ve** analize dahil edilmemiş değişken.
Üç şart birlikte gerekir:
1. Tedaviyle ilişkili (ör. bölge geliri ↔ sınıf mevcudu),
2. Sonuçla ilişkili (bölge geliri ↔ test puanı),
3. Modelde yok.
Böyle bir değişken varsa, onun etkisi tedavinin etkisi sanılır ve tahmin yanlı çıkar.
**Diğer şıklar neden yanlış?**
• "randomly assigned": rastgele atanan bir değişken tedaviyle **ilişkisiz** olur. Rastgele atama karıştırıcıları ortadan kaldırmanın yoludur, karıştırıcının kendisi değildir.
• "uncorrelated with both": ikisiyle de ilişkisizse hiçbir şeyi karıştıramaz. Tam tersi.
• "the dependent variable": bağımlı değişken sonucun kendisidir ($Y$), dışarıda kalmış üçüncü bir değişken değil.

## Q
SRC: PS1 Q1g
EN: The key feature of an ideal randomized controlled experiment is that:
TR: İdeal randomize kontrollü deneyin temel özelliği nedir?
+ subjects are randomly assigned to treatment and control groups
- subjects choose whether to receive the treatment
- only the treatment group is observed
- the sample includes only one time period
EX: **Doğru cevap:** denekler tedavi ve kontrol gruplarına **rastgele** atanır.
Rastgele atama sayesinde iki grup, tedavi dışındaki her açıdan ortalamada aynı olur. Sonuçtaki fark sadece tedaviden gelir.
**Diğer şıklar neden yanlış?**
• "subjects choose": kişiler kendi grubunu seçerse buna ==kendi kendini seçme (self-selection)== denir. Örneğin hevesli öğrenciler "çalışma" grubunu seçer; sonra not farkının ne kadarının çalışmadan, ne kadarının hevesten geldiğini ayıramazsın.
• "only the treatment group is observed": karşılaştırma için kontrol grubu şart. Tek grupla fark hesaplanamaz.
• "only one time period": deneyin özü zaman değil, rastgele atama.

## Q
SRC: PS1 Q3
EN: In an experiment on the effect of study hours on midterm scores, the main practical impediment is:
TR: Çalışma saatinin vize notuna etkisini ölçen deneyde temel pratik engel nedir?
+ ensuring that students comply with their assigned study hours
- computing the average grade of each group
- finding students who take the midterm
- the fact that grades are numerical
EX: **Doğru cevap:** öğrencilerin atandıkları çalışma saatine **uymasını (compliance)** sağlamak.
Kontrol grubundaki bir öğrenci gizlice çalışabilir, tedavi grubundaki biri 4 saati tamamlamayabilir. O zaman "4 saat çalışan" ve "hiç çalışmayan" gruplar gerçekte o kadar farklı olmaz ve ölçülen etki gerçek etkiden küçük çıkar. Çözüm setinin vurguladığı engel budur.
**Diğer şıklar neden yanlış?**
• "computing the average grade": ortalama almak basit bir hesap, engel değil.
• "finding students who take the midterm": vizeye zaten herkes giriyor.
• "grades are numerical": notların sayı olması analiz için avantaj, engel değil.

## Q
EN: In a study of class size and test scores, which variable is most likely a confounder?
TR: Sınıf mevcudu ve test puanı çalışmasında hangisi büyük olasılıkla karıştırıcı değişkendir?
+ average district income
- the student's ID number
- the day of the week the test was given, if randomly chosen
- the color of the classroom walls
EX: **Doğru cevap: ortalama bölge geliri.** İki şartı da sağlar:
• **Tedaviyle ilişkili:** zengin bölgeler daha çok öğretmen tutar, sınıflar küçük olur.
• **Sonuçla ilişkili:** zengin bölgelerdeki öğrencilerin özel ders, kitap, bilgisayar imkânı fazladır, test puanları yüksek olur.
Modele konmazsa küçük sınıfların etkisini olduğundan büyük ölçeriz.
**Diğer şıklar neden yanlış?** Karıştırıcı testi: "Sınıf mevcudunu etkiler mi? Puanı etkiler mi?"
• Öğrenci numarası: ikisini de etkilemez, sadece bir etiket.
• Rastgele seçilmiş test günü: rastgele seçildiği için sınıf mevcuduyla ilişkisiz, karıştırıcı olamaz.
• Duvar rengi: sınıf mevcuduyla ilişkisi yok.

## Q
EN: "Ceteris paribus" means:
TR: "Ceteris paribus" ne demektir?
+ holding all other factors constant
- on average over the population
- in the long run
- with random sampling
EX: **Doğru cevap:** "diğer her şey sabitken" (holding all other factors constant).
Latince bir ifade. Nedensel etkinin ikinci tanımı budur: sadece $X$ değişse, geri kalan her şey aynı kalsa $Y$ ne kadar değişirdi? Regresyonda $\beta_1$'i yorumlarken de bu mantığı kullanırız.
**Diğer şıklar neden yanlış?**
• "on average": ortalama kavramı başka ($E(Y)$). Ceteris paribus sabit tutmakla ilgili.
• "in the long run": zamanla ilgisi yok.
• "with random sampling": rastgele örneklem bir veri toplama yöntemi. Ceteris paribus'un anlamı değil.

## Q
SRC: TB 1.5
EN: Each of the following describes econometrics EXCEPT:
TR: Aşağıdakilerin hepsi ekonometriyi tanımlar, BİRİ HARİÇ:
+ ranking economists by their height
- the science of testing economic theories with data
- fitting mathematical economic models to real-world data
- a set of tools for forecasting future values of economic variables
EX: **Doğru cevap: ranking economists by their height.**
Bu bir şaka şıkkı; ekonometriyle ilgisi yok. Kitap ekonometriyi üç şekilde tanımlar: ekonomik teoriyi test etme bilimi, ekonomik modelleri gerçek veriye uydurma, ve ekonomik değişkenlerin gelecekteki değerlerini tahmin (forecast) etme araçları.
**Diğer üç şık** kitaptaki tanımın kendisi, o yüzden "hariç" olamazlar.

## Q
SRC: TB 1.6
EN: To give a numerical answer to a policy question (for example, "by how much will smoking fall if cigarette taxes rise by 20%?"), you should:
TR: Bir politika sorusuna sayısal cevap vermek için (örneğin "sigara vergisi %20 artarsa sigara içimi ne kadar azalır?") ne yapmalısın?
+ examine empirical evidence, that is, data
- rely on common sense
- interview the policy makers involved
- give up, because policy questions cannot be quantified
EX: **Doğru cevap: examine empirical evidence.**
"Ne kadar azalır?" sorusunun cevabı bir sayıdır ve bu sayı ancak **veriden** (ampirik kanıt) ölçülür. Ekonometrinin işi tam olarak budur.
**Diğer şıklar neden yanlış?**
• common sense: sağduyu en fazla yönü söyler ("azalır"), büyüklüğü söylemez.
• interview policy makers: onların görüşü ölçüm değildir.
• "cannot be quantified": yanlış; ekonometri bu tür soruları sayısallaştırmak için var.

## Q
SRC: TB 1.7
EN: Which of the following is an example of a randomized controlled experiment?
TR: Aşağıdakilerden hangisi randomize kontrollü deneye örnektir?
+ Fifth graders in one school are randomly split into two groups; one group may use computers in class and the other may not, and their end-of-year scores are compared.
- Households receive a tax rebate in one year but not in the next.
- One state raises its minimum wage while a neighbouring state does not, and employment in the two states is compared.
- Researchers "control" for random variables by holding other factors constant.
EX: **Doğru cevap: rastgele ikiye bölünen 5. sınıf öğrencileri.**
Randomize kontrollü deneyin iki şartı:
1. **Rastgele atama**: kimin tedavi (bilgisayar) alacağına yazı-tura gibi rastgele karar verilir.
2. **Kontrol grubu**: tedavi almayan bir grup vardır ve sonuçlar karşılaştırılır.
Bu şıkta ikisi de var.
**Diğer şıklar neden yanlış?**
• tax rebate one year: kontrol grubu yok, sadece zaman içinde değişim var; o yıl başka şeyler de değişmiş olabilir.
• two neighbouring states: eyalet asgari ücreti kendi seçti, rastgele atanmadı. Bu bir doğal deney ya da gözlemsel karşılaştırma.
• "control for random variables": anlamsız bir ifade; deney tanımı değil.

## Q
SRC: TB 1.8
EN: Ideal randomized controlled experiments are useful in econometrics mainly because they:
TR: İdeal randomize kontrollü deneyler ekonometride esas olarak neden faydalıdır?
+ provide a definition of a causal effect
- are carried out very often in practice
- are what central banks use to study monetary policy
- are used by universities to decide who graduates in four years
EX: **Doğru cevap: provide a definition of a causal effect.**
Kitapta nedensel etki, **ideal randomize kontrollü deneyde ölçülecek etki** olarak tanımlanır. Gerçekte bu deneyi yapamasak bile "ideal deneyde ne olurdu?" sorusu neyi ölçmeye çalıştığımızı netleştirir.
**Diğer şıklar neden yanlış?**
• "very often in practice": ekonomide ideal deneyler nadirdir.
• central banks: merkez bankası faizi rastgele belirlemez.
• graduation: alakasız.

## Q
SRC: TB 1.10
EN: A main advantage of econometrics over economic theory alone is that econometrics:
TR: Ekonometrinin tek başına ekonomik teoriye göre temel avantajı nedir?
+ can give the size of an effect, not just its direction (positive or negative)
- teaches you how to use statistical software
- teaches you how to invert a 4×4 matrix
- all of the above
EX: **Doğru cevap: can give the size of an effect, not just its direction.**
Teori genellikle sadece **yönü** söyler: "vergi artarsa sigara içimi azalır". Ekonometri **ne kadar** azaldığını sayıyla verir: "vergi %10 artarsa tüketim yaklaşık %4 azalır."
**Diğer şıklar neden yanlış?**
• software ve matrix inversion: bunlar araç; ekonometrinin teoriye göre avantajı değil.
• all of the above: diğer iki şık yanlış olduğu için bu da yanlış.

## Q
SRC: TB 1.11
EN: In a randomized controlled experiment:
TR: Randomize kontrollü bir deneyde:
+ subjects are randomly divided into a treatment group and a control group
- you correct for the fact that computer random numbers are not truly random
- you control for subjects who answer questions randomly
- the control group is treated only on even-numbered days
EX: **Doğru cevap: random division into treatment and control groups.**
"Randomized" = kimin hangi gruba gireceği rastgele belirlenir. "Controlled" = tedavi almayan bir **kontrol grubu** vardır. İki grubun sonuçları karşılaştırılır.
**Diğer şıklar neden yanlış?**
• random numbers / random answers: "control" kelimesiyle oynayan saçma şıklar.
• "even-numbered days": kontrol grubu hiç tedavi almaz.

## Q
SRC: TB 1.12
EN: Economists use experimental data less often than they would like. All of the following are valid reasons EXCEPT:
TR: Ekonomistler deney verisini istedikleri kadar sık kullanamaz. Aşağıdakilerin hepsi geçerli sebeplerdir, BİRİ HARİÇ:
+ experiments are impossible to carry out in economics
- experiments with human beings are hard to administer
- some experiments would be unethical
- real experiments have flaws compared with ideal randomized experiments, for example people drop out
EX: **Doğru cevap: experiments are impossible in economics.**
Bu yanlış bir iddia: ekonomide deneyler yapılır, örneğin Tennessee STAR sınıf büyüklüğü deneyi. Deneyler **zordur**, ama **imkânsız** değildir.
**Diğer üç şık geçerli sebeplerdir:**
• insanlarla deney yapmak zor ve pahalı;
• bazı deneyler etik değil (örneğin insanları rastgele sigara içmeye zorlamak);
• gerçek deneylerde katılımcılar ayrılır, kurala uymaz; ideal deneyden sapar.

--- LESSON u1b | ▦ | Veri türleri

## CARD Deneysel veri ve gözlemsel veri
Verinin **nasıl toplandığına** göre iki tür var:
• ==Deneysel veri (experimental data)==: bir tedaviyi ya da politikayı değerlendirmek için **tasarlanmış deneylerden** gelen veri. Araştırmacı kimin tedavi alacağını kendisi (rastgele) belirler. Örnek: ilaç denemesi, rastgele atanmış küçük sınıf deneyi (Tennessee STAR).
• ==Gözlemsel veri (observational data)==: insanların gerçek davranışlarını deney ortamı **dışında** gözleyerek elde edilen veri. Araştırmacı kimseye bir şey yaptırmaz, sadece kaydeder. Genelde ==anketler (surveys)== ve ==idari kayıtlar (administrative records)== ile toplanır. Örnek: TÜİK hane işgücü anketi, vergi kayıtları.
**Neden önemli?** Ekonomide çoğu veri gözlemseldir. Kimseyi rastgele "üniversiteye git" ya da "gitme" diye atayamazsın. Gözlemsel veride insanlar tedaviyi kendileri seçer, bu da karıştırıcı değişken sorununa yol açar. Dersin büyük kısmı, gözlemsel veriyle nedensel etkiyi nasıl doğru ölçeceğimizle ilgilidir.
:::ipucu Hızlı karar
Soruda "randomly assigned", "trial", "experiment" geçiyorsa deneysel. "Survey", "records", "observed" geçiyorsa gözlemsel.
:::

## CARD Üç veri yapısı
Verinin **şekline** göre üç tür var. Sadece iki soru sor: Kaç birim var? Kaç zaman dönemi var?
| Tür | Birim (kişi, firma, ülke) | Zaman | Örnek |
| ==Kesit (cross-sectional)== | çok | **tek** dönem | 1999'da 420 Kaliforniya okul bölgesi |
| ==Zaman serisi (time series)== | **tek** | çok dönem | Türkiye'nin 2000–2024 çeyreklik GSYH'si |
| ==Panel (longitudinal)== | çok | çok dönem | 81 ilin 10 yıllık işsizlik oranı |
**Örneklerle düşün:**
• "2023'te 500 firmanın kârı": 500 birim, 1 yıl → kesit.
• "Türkiye'nin 2010–2024 aylık enflasyonu": 1 birim, 180 ay → zaman serisi.
• "Aynı 1.000 haneyi 6 yıl boyunca izleyen anket": 1.000 birim, 6 yıl → panel.
:::dikkat Sık karıştırılan
Her yıl **farklı** haneleri soran anket panel değildir; bu, art arda kesitlerdir (pooled cross-section). Panelde **aynı** birimler tekrar tekrar gözlenir. Panel veriye ==longitudinal data== da denir.
:::

## Q
SRC: PS1 Q1d
EN: Data on the 2023 profits of 500 different firms is an example of:
TR: 500 farklı firmanın 2023 kârları hangi veri türüdür?
+ cross-sectional data
- time series data
- panel data
- experimental data
EX: **Doğru cevap: kesit veri.**
İki soruyu sor:
1. Kaç birim? 500 firma → **çok**.
2. Kaç dönem? Sadece 2023 → **tek**.
Çok birim + tek dönem = kesit (cross-sectional).
**Diğer şıklar neden yanlış?**
• Zaman serisi: tek birimin çok dönemi olurdu (ör. tek firmanın 20 yıllık kârı).
• Panel: 500 firmanın birden fazla yıllık kârı olsaydı panel olurdu.
• Deneysel: firmalara rastgele bir uygulama yapılmadı, sadece kârları kaydedildi.

## Q
SRC: PS1 Q1f
EN: Monthly inflation in Turkey from 2010 to 2024 is an example of:
TR: Türkiye'nin 2010–2024 aylık enflasyonu hangi veri türüdür?
+ time series data
- cross-sectional data
- panel data
- experimental data
EX: **Doğru cevap: zaman serisi.**
1. Kaç birim? Sadece Türkiye → **tek**.
2. Kaç dönem? 15 yıl × 12 ay = 180 ay → **çok**.
Tek birim + çok dönem = zaman serisi.
**Diğer şıklar neden yanlış?**
• Kesit: çok birim tek dönem olurdu (ör. 2024'te 30 ülkenin enflasyonu).
• Panel: birden fazla ülkenin aylık enflasyonu olsaydı panel olurdu.
• Deneysel: enflasyon bir deneyde üretilmedi.

## Q
SRC: PS1 Q1e
EN: A survey that follows the same 1,000 households every year from 2015 to 2020 produces:
TR: Aynı 1.000 haneyi 2015–2020 arasında her yıl izleyen anket hangi veriyi üretir?
+ panel data
- cross-sectional data
- time series data
- experimental data
EX: **Doğru cevap: panel (longitudinal) veri.**
1. Kaç birim? 1.000 hane → **çok**.
2. Kaç dönem? 2015–2020, yani 6 yıl → **çok**.
3. Kilit kelime: **aynı** haneler her yıl izleniyor.
Çok birim + çok dönem + aynı birimler = panel.
**Diğer şıklar neden yanlış?**
• Kesit: tek bir yıl olsaydı kesit olurdu.
• Zaman serisi: tek bir hane izlenseydi zaman serisi olurdu.
• Deneysel: anket bir deney değil, gözlemsel veri toplama yöntemi.

## Q
SRC: PS1 Q1c
EN: Observational data are:
TR: Gözlemsel veri nedir?
+ data obtained by observing actual behavior outside an experimental setting
- data collected only from randomized experiments
- data on a single entity over time
- data that contain no measurement error
EX: **Doğru cevap:** gerçek davranışın **deney ortamı dışında** gözlenmesiyle elde edilen veri.
Araştırmacı kimseye tedavi atamaz, insanların zaten yaptığını kaydeder. Genelde anketler ve idari kayıtlarla toplanır. Ekonomideki verilerin çoğu böyledir.
**Diğer şıklar neden yanlış?**
• "only from randomized experiments": bu deneysel verinin tanımı, tam tersi.
• "single entity over time": bu zaman serisinin tanımı. Gözlemsel/deneysel ayrımı toplama yöntemiyle, kesit/zaman serisi ayrımı verinin şekliyle ilgili.
• "no measurement error": gözlemsel veride ölçüm hatası olabilir; anket cevapları yanlış olabilir.

## Q
SRC: PS1 Q1b
EN: A clinical trial that randomly assigns patients to a new drug or a placebo generates:
TR: Hastaları rastgele yeni ilaç ya da plasebo grubuna atayan klinik deney hangi veriyi üretir?
+ experimental data
- observational data
- time series data
- panel data only
EX: **Doğru cevap: deneysel veri.**
İki ipucu var: "clinical trial" (klinik deney) ve "randomly assigns" (rastgele atar). Bir tedaviyi (yeni ilaç) değerlendirmek için tasarlanmış ve rastgele atama yapan bir deneyden gelen veri deneyseldir. Plasebo grubu kontrol grubudur.
**Diğer şıklar neden yanlış?**
• Gözlemsel: hastalar ilacı kendileri seçseydi ve biz sadece kaydetseydik gözlemsel olurdu.
• Zaman serisi / panel: bunlar verinin şekliyle ilgili. Soru verinin nasıl üretildiğini soruyor.

## Q
EN: Panel data are also called:
TR: Panel veriye başka ne ad verilir?
+ longitudinal data
- cross-sectional data
- time series data
- experimental data
EX: **Doğru cevap: longitudinal data.**
Panel data = longitudinal data. İkisi de aynı birimlerin (kişi, firma, ülke) **birden çok dönemde** gözlendiği veri demek. "Longitudinal" kelimesi "zaman boyunca uzanan" anlamına gelir.
**Diğer şıklar neden yanlış?** Kesit (tek dönem), zaman serisi (tek birim) ve deneysel (toplama yöntemi) farklı kavramlar.

## GEN dataType

## Q
SRC: TB 1.1
EN: A researcher compares the unemployment rates of all U.S. states, all measured in the same single month. This is an example of:
TR: Bir araştırmacı ABD'deki tüm eyaletlerin işsizlik oranlarını karşılaştırıyor; hepsi aynı tek ayda ölçülmüş. Bu hangi veri türüne örnektir?
+ cross-sectional data
- time series data
- panel data
- experimental data
EX: **Doğru cevap: cross-sectional data (kesit verisi).**
Çok sayıda birim (50 eyalet) var ama hepsi **tek bir zaman noktasında** (aynı ay) gözlenmiş. Çok birim + tek dönem = kesit verisi.
**Diğer şıklar neden yanlış?**
• time series: tek bir birimin (örneğin sadece Teksas'ın) birçok dönem boyunca izlenmesi.
• panel: aynı birimlerin birçok dönem boyunca izlenmesi (çok birim + çok dönem).
• experimental: araştırmacının rastgele atama yaptığı deney verisi. Burada sadece gözlem var.

## Q
SRC: TB 1.2
EN: Tracking the U.S. inflation rate every year from 1970 to 2006 uses:
TR: ABD enflasyon oranını 1970'ten 2006'ya kadar her yıl izlemek hangi veri türünü kullanır?
+ time series data
- panel data
- cross-sectional data
- data from a randomized controlled experiment
EX: **Doğru cevap: time series data (zaman serisi).**
Tek bir birim (ABD) var ve bu birim **birçok dönem** (1970–2006, her yıl) boyunca gözleniyor. Tek birim + çok dönem = zaman serisi.
**Diğer şıklar neden yanlış?**
• panel: birçok birim (örneğin birçok ülke) birçok yıl izlenseydi panel olurdu.
• cross-sectional: birçok birim tek bir dönemde gözlenseydi kesit olurdu.
• randomized experiment: kimse enflasyonu rastgele atamıyor; bu gözlemsel veri.

## Q
SRC: TB 1.3
EN: You study how changes in the minimum wage affected teenage employment, using data on the 48 contiguous U.S. states for every year from 1980 to 2004. The data set is:
TR: Asgari ücret değişikliklerinin genç istihdamına etkisini, ABD'nin 48 bitişik eyaletinin 1980–2004 arasındaki her yılına ait verilerle inceliyorsun. Veri seti hangi türdür?
+ panel data
- time series data
- cross-sectional data
- an experiment with a treatment and a control group, because only teenagers earn the minimum wage
EX: **Doğru cevap: panel data.**
48 birim (eyalet) × 25 yıl. **Aynı birimler birçok dönem boyunca** gözleniyor. Çok birim + çok dönem = panel (longitudinal) veri.
**Diğer şıklar neden yanlış?**
• time series: tek bir eyalet olsaydı zaman serisi olurdu.
• cross-sectional: tek bir yıl olsaydı kesit olurdu.
• experiment: eyaletler asgari ücreti rastgele atanarak almıyor. "Sadece gençler asgari ücret alır" demek, bir tedavi ve kontrol grubu oluşturmaz.

## Q
SRC: TB 1.4
EN: Which statement about panel data is correct?
TR: Panel veri hakkında hangi ifade doğrudur?
+ It is also called longitudinal data.
- It is just another name for time series data.
- It observes many people at one single point in time.
- It always comes with a treatment group and a control group.
EX: **Doğru cevap: It is also called longitudinal data.**
Panel veri = aynı birimlerin (kişi, firma, eyalet) **birden çok dönem** boyunca izlenmesi. Kitapta diğer adı **longitudinal data** (boylamsal veri).
**Diğer şıklar neden yanlış?**
• "another name for time series": zaman serisi tek birimdir. Panelde birçok birim vardır.
• "many people at one point in time": bu kesit verisinin tanımı.
• "treatment and control group": bu deneylerin özelliği. Panel veri genelde gözlemseldir.

## Q
SRC: TB 1.9
EN: Most economic data are collected by:
TR: Ekonomik verilerin çoğu nasıl elde edilir?
+ observing real-world behavior (observational data)
- running randomized controlled experiments
- calibrating economic models
- using small textbook examples with about ten observations
EX: **Doğru cevap: observing real-world behavior.**
Ekonomik verilerin büyük çoğunluğu **gözlemsel** veridir: anketler, resmi kayıtlar, piyasa fiyatları. İnsanların gerçek hayatta ne yaptığı kaydedilir, araştırmacı kimseye "tedavi" atamaz.
**Diğer şıklar neden yanlış?**
• randomized experiments: ekonomide nadirdir; pahalı, yönetmesi zor, bazen etik değil.
• calibration: bir veri toplama yöntemi değil, model parametrelerini ayarlama tekniği.
• "ten observations": ders kitabı örnekleri veri kaynağı değildir.

## Q
SRC: TB 1.13
EN: According to the textbook, which type of data is used most often in econometrics?
TR: Ders kitabına göre ekonometride en sık kullanılan veri türü hangisidir?
+ cross-sectional data
- randomly generated (simulated) data
- time series data
- panel data
EX: **Doğru cevap: cross-sectional data.**
Kitabın vurguladığı gibi ekonometride en sık kesit verisi kullanılır: belirli bir anda birçok kişi, firma, okul bölgesi. Örnek: 420 California okul bölgesi (test puanı ve sınıf büyüklüğü).
**Diğer şıklar neden yanlış?**
• simulated data: bilgisayarda üretilen veri; yöntemleri test etmek için kullanılır, ana kaynak değildir.
• time series ve panel: önemli ve yaygın, ama kitaba göre en sık kullanılan değil.

## Q
SRC: TB 1.14
EN: A scatterplot shows, for 65 countries, average real GDP growth over 1960–1995 (vertical axis) against the average trade share over the same period (horizontal axis). Each country appears exactly once. These data are:
TR: Bir serpilme grafiği 65 ülke için 1960–1995 dönemi ortalama reel GSYH büyümesini (dikey eksen) aynı dönemin ortalama ticaret payına (yatay eksen) karşı gösteriyor. Her ülke tam bir kez görünüyor. Bu veri hangi türdür?
+ cross-sectional data
- a time series
- panel (longitudinal) data
- experimental data
EX: **Doğru cevap: cross-sectional data.**
Tuzak: soru "1960–1995" diyor, bu yüzden zaman serisi ya da panel sanılabilir. Ama değerler **dönem ortalaması** ve her ülke **tek bir nokta**. Yani her birim için tek gözlem var: 65 ülke, tek "dönem". Bu kesit verisidir.
**Diğer şıklar neden yanlış?**
• time series: tek ülke, çok yıl olsaydı.
• panel: her ülke için her yıl ayrı bir nokta olsaydı (65 × 36 nokta).
• experimental: ülkelere ticaret payı rastgele atanmıyor.

--- LESSON u1c | Ŷ | Kestirim, tahmin ve öngörü

## CARD Regresyon modeli ve kestirim
Ders boyunca kullanacağımız temel model:
$$Y = \beta_0 + \beta_1 X + u$$
Her parçanın adını ve anlamını bil:
• $Y$: ==bağımlı değişken (dependent variable)==, açıklanmak istenen sonuç. Örnek: test puanı.
• $X$: ==bağımsız değişken (independent variable, regressor)==, açıklayan değişken. Örnek: sınıf mevcudu.
• $\beta_0$: ==sabit terim (intercept)==. $X=0$ iken $Y$'nin ortalama değeri.
• $\beta_1$: ==eğim (slope)==. $X$ bir birim artınca $Y$'nin **ortalama** ne kadar değiştiği.
• $u$: ==hata terimi (error term)==. $X$ dışında $Y$'yi etkileyen **her şey**: öğrencinin yeteneği, ailesinin geliri, şans...
:::ornek Sayıyla oku
$\text{TestPuanı} = 698.9 - 2.28\times\text{SınıfMevcudu} + u$ ise:
• $\beta_1 = -2.28$: sınıfa 1 öğrenci eklemek puanı ortalama 2.28 düşürür.
• $\beta_0 = 698.9$: sınıf mevcudu 0 olsaydı tahmini puan (anlamsız bir uç nokta, sadece doğrunun yerini belirler).
:::
$\beta_0$ ve $\beta_1$ **anakütle parametreleridir**: gerçek ama bilinmeyen sayılardır. Veriden bulduğumuz tahminlerine şapka koyarız: $\hat\beta_0$, $\hat\beta_1$.

**Kestirim (estimation)**
==Kestirim (estimation)==: $Y$ ve $X$ verisini kullanarak bilinmeyen $\beta_0$ ve $\beta_1$ için sayısal değer bulma süreci.
Daha genel tanım (PS1'deki): **örneklem verisini kullanarak bir anakütle parametresinin tahmini değerini hesaplama süreci.**
Üç kelimeyi ayır:
• ==Parametre (parameter)==: anakütleye ait gerçek sayı. Örnek: tüm Türkiye'deki öğrencilerin ortalama puanı $\mu$, ya da $\beta_1$.
• ==Tahminci (estimator)==: parametreyi tahmin etmek için kullanılan **formül/kural**. Örnek: örneklem ortalaması $\bar Y = \frac{1}{n}\sum Y_i$.
• ==Tahmin (estimate)==: formülü belirli bir örnekleme uygulayınca çıkan **sayı**. Örnek: $\bar Y = 72.4$.
:::ipucu Akılda tutma
Parametre = gerçek (bilinmez). Tahminci = tarif. Tahmin = tariften çıkan yemek.
:::

## CARD Tahmin (prediction) ve öngörü (forecasting)
Katsayıları tahmin ettikten sonra $\hat Y = \hat\beta_0 + \hat\beta_1 X$ yazarız. Bu denklemle yeni değerler hesaplayabiliriz.
• ==Tahmin (prediction)==: geçmiş veriyle tahmin edilmiş modeli kullanarak **yeni gözlemler** için sonucu tahmin etmek. Örnek: mevcudu 22 olan yeni bir sınıfın puanını tahmin etmek.
• ==Öngörü (forecasting)==: modeli kullanarak **gelecek zaman dönemleri** için tahmin. Örnek: gelecek çeyreğin enflasyonunu tahmin etmek.
Fark: öngörü, tahminin **zamana yönelik** özel hâlidir. Soruda "future periods" geçiyorsa forecasting, "new observations" geçiyorsa prediction.
:::dikkat Tahmin için nedensellik gerekmez
Yayaların şemsiye taşıdığını görerek yağmur yağdığını tahmin edebilirsin, ama şemsiye yağmura neden olmaz. İyi bir tahmin için iki değişkenin **birlikte hareket etmesi (korelasyon)** yeterlidir.
Ama politika etkisini ölçmek için (ör. "sınıfları küçültürsek puan ne kadar artar?") **nedensellik** gerekir. Sırf korelasyona dayanarak politika yapılmaz.
:::

## Q
SRC: PS1 Q1j
EN: Estimation is:
TR: Kestirim (estimation) nedir?
+ the process of using sample data to calculate an estimate of a population parameter
- predicting the value of a variable in future periods
- randomly assigning subjects to treatment groups
- collecting data through surveys
EX: **Doğru cevap:** örneklem verisini kullanarak bir anakütle parametresinin tahmini değerini hesaplama süreci.
Örnek: Türkiye'deki tüm öğrencilerin ortalama puanı $\mu$ bilinmez (parametre). 200 öğrencilik bir örneklem alıp $\bar Y = 72.4$ hesaplarsın. Bu işlem kestirimdir; 72.4 de tahmindir.
**Diğer şıklar neden yanlış?**
• "predicting in future periods": bu **öngörü (forecasting)** tanımı.
• "randomly assigning subjects": bu **deney tasarımı**, kestirim değil.
• "collecting data through surveys": bu **veri toplama**. Kestirim veri toplandıktan sonra yapılan hesaplamadır.

## Q
SRC: PS1 Q1l
EN: Forecasting is:
TR: Öngörü (forecasting) nedir?
+ using a model estimated from historical data to predict an outcome at future time periods
- using a model to predict the outcome for new observations in the same period
- estimating the causal effect of a policy
- computing the sample mean of historical data
EX: **Doğru cevap:** geçmiş veriyle tahmin edilmiş bir modeli kullanarak **gelecek zaman dönemleri** için sonucu tahmin etmek.
Kilit kelime: "future time periods". Örnek: 2000–2024 verisiyle model kurup 2025 enflasyonunu tahmin etmek.
**Diğer şıklar neden yanlış?**
• "new observations in the same period": bu **prediction** (genel tahmin). Öngörü, zamana yönelik olanıdır. Bu ikisi en çok karıştırılan çift.
• "estimating the causal effect": nedensel etki ölçmek başka bir amaç. Öngörü için nedensellik gerekmez.
• "computing the sample mean": sadece bir özet istatistik, geleceğe dair tahmin değil.

## Q
EN: You can predict rain by observing whether pedestrians carry umbrellas. This example shows that:
TR: Şemsiyelere bakarak yağmuru tahmin edebilirsin. Bu örnek neyi gösterir?
+ prediction does not require a causal relationship
- umbrellas cause rain
- prediction is impossible without an experiment
- correlation always implies causation
EX: **Doğru cevap:** tahmin (prediction) nedensel bir ilişki gerektirmez.
Şemsiye ile yağmur birlikte hareket eder (korelasyon). Bu yüzden şemsiyeye bakarak yağmuru iyi tahmin edersin. Ama şemsiye yağmura neden olmaz; aslında yağmur (ya da yağmur beklentisi) şemsiyeye neden olur.
**Diğer şıklar neden yanlış?**
• "umbrellas cause rain": nedenselliğin yönü ters. Bu şık örneğin tam olarak çürüttüğü düşünce.
• "impossible without an experiment": deney yapmadan, sadece gözlemle iyi tahmin yaptık.
• "correlation always implies causation": korelasyon nedensellik **değildir**. Bu cümle her zaman yanlış.

## Q
EN: In $Y = \beta_0 + \beta_1X + u$, the parameter $\beta_1$ measures:
TR: Bu modelde $\beta_1$ neyi ölçer?
+ the average effect on $Y$ of a one-unit increase in $X$
- the value of $Y$ when $X=0$
- the variance of the error term
- the correlation between $X$ and $u$
EX: **Doğru cevap:** $X$ bir birim artınca $Y$'deki **ortalama** değişim. $\beta_1$ doğrunun eğimidir.
Sayıyla: $\beta_1 = -2.28$ ise sınıfa 1 öğrenci eklemek test puanını ortalama 2.28 puan düşürür. "Ortalama" diyoruz çünkü $u$ yüzünden tek tek öğrenciler farklı etkilenebilir.
**Diğer şıklar neden yanlış?**
• "value of $Y$ when $X=0$": bu **sabit terim $\beta_0$**. Doğrunun dikey ekseni kestiği nokta.
• "variance of the error term": bu $\sigma^2_u$, ayrı bir kavram.
• "correlation between $X$ and $u$": bu bir varsayımla ilgili (ileride: $E(u|X)=0$). Eğimin anlamı değil.

## Q
EN: In $Y = \beta_0 + \beta_1X + u$, the term $u$ represents:
TR: Bu modelde $u$ neyi temsil eder?
+ all factors other than $X$ that affect $Y$
- the predicted value of $Y$
- the intercept
- the sample size
EX: **Doğru cevap:** $X$ dışında $Y$'yi etkileyen **tüm faktörler**.
Test puanı örneğinde $u$; öğrencinin yeteneğini, ailesinin gelirini, o gün ne kadar uyuduğunu, şansını içerir. Bunları tek tek ölçmediğimiz için hepsini $u$'ya atarız.
**Diğer şıklar neden yanlış?**
• "predicted value of $Y$": tahmin edilen değer $\hat Y$. Gerçek ile tahmin arasındaki fark ise kalıntıdır ($\hat u = Y - \hat Y$).
• "the intercept": sabit terim $\beta_0$.
• "the sample size": örneklem büyüklüğü $n$, modelin bir terimi değil.
`);
