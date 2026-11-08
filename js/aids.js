/* Öğrenme yardımları: her dersin formül/kural listesi (F) ve her sorunun cevabı söylemeyen ipucu (H).
   Biçim:  # dersKimliği  |  F formül :: açıklama  |  H soruKimliği ipucu metni */
window.AIDS = String.raw`
# u0a
F $\sum_{i=1}^{n} c = n\,c$ :: Aynı sabiti n kere topla
F $\sum c\,X_i = c\sum X_i$ :: Sabit çarpan dışarı çıkar
F $\sum (aX_i + bY_i) = a\sum X_i + b\sum Y_i$ :: Toplam dağılır
F $\sum X_i = n\bar X$ :: Toplam = gözlem sayısı × ortalama
F $\sum (X_i-\bar X) = 0$ :: Ortalamadan sapmaların toplamı hep sıfır
F $\sum X_i^2 \ne \left(\sum X_i\right)^2$ :: Kare ve bölmeyle dağılmaz
F $\sum_{j=1}^{n} j = \dfrac{n(n+1)}{2}$, $\prod_{i=1}^{n} c = c^n$ :: 1'den n'ye toplam; Π çarpım
H u0a.1 Σ'nın içindeki ifadede $i$ var mı? Yoksa her adımda aynı sayıyı ekliyorsun. Kaç kere ekliyorsun?
H u0a.2 Her şıkta küçük sayılarla dene (ör. $X = 1, 2$ ve $Y = 1, 2$). Eşitlik bozuluyorsa o şık "her zaman" doğru değildir. Sabit çarpan kuralını hatırla.
H u0a.3 Toplamı ikiye ayır: $\sum X_i - \sum \bar X$. $\bar X$ tek bir sayı; $n$ kere toplanınca ne olur? $\sum X_i$'yi de $n$ ve $\bar X$ ile yaz.
H u0a.4 Parantezin karesini aç ve içinde ne $x$ ne $y$ olan terimi bul. Sonra o terime Σ uygula: sabit $n$ kere toplanır.
H u0a.5 1'den $n$'ye kadar toplam formülü: $n(n+1)/2$. Burada $n = 100$.
H u0a.6 Π "çarp" demek. Aynı sayıyı $n$ kere çarparsan bunu nasıl yazarsın?
H u0a.7 Σ toplamı terim terim dağıtılır ve sabit çarpanlar dışarı çıkar. Sabit bir $c$ sayısını $n$ kez toplarsan ne olur?
H u0a.8 Önce dağıt: $a\sum X_i + \sum b$. Sonra $\sum X_i = n\bar X$ eşitliğini kullan.

# u0b
F $A_{m\times n}$: $m$ satır, $n$ sütun :: Boyutta önce satır yazılır
F $a_{ij}$: $i$. satır, $j$. sütun :: Eleman adlandırma
F $A$ $m\times n$ ise $A'$ $n\times m$ :: Transpoz satır ile sütunu değiştirir
F $(A')' = A$, $(A+B)' = A'+B'$, $(AB)' = B'A'$ :: Transpoz kuralları (çarpımda sıra döner)
F $a'b = \sum a_ib_i$, $a'a = \sum a_i^2$ :: İç çarpım tek bir sayı verir
F Simetrik: $a_{ij} = a_{ji}$; birim matris $I$: köşegen 1, gerisi 0 :: $AI = IA = A$
H u0b.1 Yatay sıraları (satırlar) ve dikey sıraları (sütunlar) say. Boyut her zaman satır × sütun yazılır.
H u0b.2 İlk indeks satır, ikinci indeks sütun. Önce 2. satırı bul, sonra o satırın 1. elemanını al.
H u0b.3 Transpoz satırları sütun yapar. Boyuttaki iki sayının yerini değiştir.
H u0b.4 Simetrik = köşegene göre ayna. Hangi şık "sağ üstteki eleman sol alttakine eşit" diyor?
H u0b.5 Boyutlarla dene: $A$ $2\times 3$, $B$ $3\times 4$ olsun. $(AB)'$ $4\times 2$ olmalı. Hangi sıralama $4\times 2$ veriyor, hangisi tanımsız kalıyor?
H u0b.6 Boyutları yaz: $a'$ $1\times n$, $a$ $n\times 1$. Çarpımın boyutu ne olur?
H u0b.7 Birim matris sayılardaki 1 gibidir: $AI = A$. Bunun için köşegende ne, köşegen dışında ne olmalı?

# u0c
F $(m\times n)(n\times p) = m\times p$ :: İçteki sayılar eşitse çarpılır, sonuç dıştakiler
F $c_{ij} = \sum_k a_{ik}b_{kj}$ :: $(i,j)$ elemanı = $A$'nın $i$. satırı · $B$'nin $j$. sütunu
F $AB \ne BA$ (genelde) :: Matris çarpımında sıra önemli
F $X'X$: $(2\times n)(n\times 2) = 2\times 2$, $X'Y$: $2\times 1$ :: Regresyondaki boyutlar
H u0c.1 Soru doğru OLMAYAN kuralı istiyor. Matris çarpımında sıranın önemli olup olmadığını düşün.
H u0c.2 Domino hilesi: $(2\times 3)(2\times 3)$. İçteki iki sayı eşit mi?
H u0c.3 Önce $B$, sonra $A$: $(3\times 2)(2\times 3)$. İçtekiler eşitse sonuç dıştaki iki sayı.
H u0c.4 Önce $X$'in transpozunun boyutunu yaz ($n\times 2 \to 2\times n$), sonra $(2\times n)(n\times 1)$ çarpımına domino uygula.
H u0c.5 $(2,2)$ elemanı = $A$'nın 2. satırı ile $B$'nin 2. sütununun iç çarpımı. Eşleşen sayıları çarp, topla.

# u0d
F $\left|\begin{matrix} a & b \\ c & d\end{matrix}\right| = ad - bc$ :: $2\times 2$ determinant
F $A^{-1} = \dfrac{1}{ad-bc}\begin{pmatrix} d & -b \\ -c & a\end{pmatrix}$ :: Köşegenler yer değiştirir, diğer ikisi işaret değiştirir
F $|A| = 0$ ise tekil, tersi yok :: Tekil (singular) matris
F $|cA| = c^n|A|$, $|AB| = |A||B|$, $|A^{-1}| = 1/|A|$ :: Determinant kuralları
F $(AB)^{-1} = B^{-1}A^{-1}$, $(cA)^{-1} = \tfrac1c A^{-1}$ :: Ters matris kuralları
F Üçgen ya da köşegen matris: $|A|$ = köşegenlerin çarpımı :: Kısayol
H u0d.1 Ters matris formülünde $1/|A|$ var. Hangi durumda bu kesir hesaplanamaz?
H u0d.2 $(AB)(B^{-1}A^{-1})$ çarpımını yaz: ortada $B$ ile $B^{-1}$ yan yana gelip birbirini götürüyor mu?
H u0d.3 Kural $|cA| = c^n|A|$. Burada $c = 2$, $n = 3$ (matrisin boyutu), $|A| = 2$.
H u0d.4 Köşegenin altındaki her şey 0, yani üçgen matris. Üçgen matriste determinant köşegendeki sayıların çarpımıdır.
H u0d.5 $AA^{-1} = I$. İki tarafın determinantını al: $|A|\cdot|A^{-1}| = |I| = 1$.
H u0d.6 Determinant çarpımla dağılır: $|AB| = |A|\cdot|B|$.

# u0e
F $\dfrac{\partial\, a'x}{\partial x} = a$ :: Doğrusal terimin türevi ($ax$ → $a$)
F $\dfrac{\partial\, x'Ax}{\partial x} = (A+A')x$, simetrikse $2Ax$ :: Kare terimin türevi ($ax^2$ → $2ax$)
F $Y = X\beta + u$, $X$: $n\times 2$, ilk sütun 1'ler :: Regresyonun matris hâli
F $\hat\beta = (X'X)^{-1}X'Y$ :: OLS matris formu
F $X'X = \begin{pmatrix} n & \sum X_i \\ \sum X_i & \sum X_i^2\end{pmatrix}$, $X'Y = \begin{pmatrix} \sum Y_i \\ \sum X_iY_i\end{pmatrix}$ :: Basit regresyonda
H u0e.1 Tek değişkendeki karşılığını düşün: $ax$'in türevi $a$. Matris hâli aynı mantık; sonuç sütun vektörü olmalı.
H u0e.2 Genel kural $(A + A')x$. $A$ simetrikse $A' = A$; yerine koy.
H u0e.3 Her gözlem bir satır, yani $n$ satır. Her satırda kaç sayı var? (1 ve $x_i$)
H u0e.4 $X\beta$'nın bir satırını yaz: ilk sütundaki sayı $\beta_0$ ile çarpılıyor. $\beta_0$'ın her satırda aynen kalması için o sayı ne olmalı?
H u0e.5 Normal denklemler $X'Xb = X'Y$. $b$'yi yalnız bırakmak için iki tarafı soldan hangi matrisle çarparsın?
H u0e.6 $(1,1)$ elemanı = 1'ler sütununun kendisiyle iç çarpımı: $1\cdot1 + 1\cdot1 + \dots$ Kaç tane 1 var?

# u1a
F **Ekonometri** = ekonomi teorisi + istatistik teknikleri + ekonomik veri :: Stock & Watson tanımı
F **Nedensel etki** = tedavi grubu ortalaması − kontrol grubu ortalaması :: İdeal randomize kontrollü deneyde
F **Rastgele atama** → gruplar diğer her açıdan ortalamada aynı :: Fark sadece tedaviden gelir
F **Karıştırıcı** = tedaviyle ilişkili + sonuçla ilişkili + modelde yok :: Üç şart birlikte
F **Ceteris paribus** = diğer her şey sabitken :: Nedensel etkinin ikinci tanımı
H u1a.1 Tanımın üç parçası var: ekonomi teorisi, istatistik teknikleri, ekonomik veri. Üçünü birden içeren şıkkı bul.
H u1a.2 Nedensel etkiyi ölçmenin "altın standardı" olan deney türünü hatırla. Korelasyonun neden yetmediğini düşün (dondurma–boğulma).
H u1a.3 Karıştırıcının üç şartı: tedaviyle ilişkili, sonuçla ilişkili, analizde yok. Hangi şık üçünü de söylüyor?
H u1a.4 Gruplar nasıl oluşturuluyor? Kişiler kendisi mi seçiyor, yoksa yazı-tura gibi rastgele mi?
H u1a.5 Öğrencilere "4 saat çalış" ya da "hiç çalışma" dendi. Bunu gerçekten yaptıklarından nasıl emin olacaksın?
H u1a.6 Her şık için iki soru sor: sınıf mevcudunu etkiler mi? Test puanını etkiler mi? İkisine de "evet" denen karıştırıcıdır.
H u1a.7 Latince "diğer şeyler ...". Nedensel etkinin ikinci tanımını hatırla.
H u1a.8 Ekonometri = ekonomi + veri + istatistik. Hangi şık bununla hiç ilgili değil?
H u1a.9 "Ne kadar?" sorusunun cevabı bir sayı. Sayıyı nereden ölçersin?
H u1a.10 Randomize kontrollü deneyin iki şartı var: kimin tedavi alacağına rastgele karar verilir ve bir kontrol grubu vardır. Hangi şıkta ikisi de var?
H u1a.11 Kitap nedensel etkiyi nasıl tanımlıyordu? "İdeal bir deneyde ölçülen etki" cümlesini hatırla.
H u1a.12 Teori "fiyat artarsa talep azalır" der. Ekonometri buna ne ekler?
H u1a.13 "Controlled" kelimesi neyi ifade ediyor? Karşılaştırma yapılan grubu düşün.
H u1a.14 "Zor" ile "imkânsız" arasındaki farka dikkat et. Ekonomide hiç deney yapılmadı mı?

# u1b
F çok birim + tek dönem = **kesit** :: cross-sectional
F tek birim + çok dönem = **zaman serisi** :: time series
F çok birim + çok dönem (aynı birimler) = **panel** :: longitudinal
F rastgele atama = **deneysel**, sadece kayıt = **gözlemsel** :: Verinin nasıl toplandığı
H u1b.1 Kaç birim var (firma)? Kaç dönem var (yıl)? Tabloya bak.
H u1b.2 Kaç birim var (ülke)? Kaç dönem var (ay)?
H u1b.3 Kaç birim, kaç dönem? "Aynı" kelimesine dikkat.
H u1b.4 Gözlemsel veride araştırmacı birilerine bir şey yaptırır mı, yoksa sadece olanı kaydeder mi?
H u1b.5 "Randomly assigns" ve "trial" kelimeleri ne anlatıyor: bir deney mi, bir gözlem mi?
H u1b.6 Panel = aynı birimlerin zaman boyunca izlenmesi. "Zaman boyunca uzanan" anlamındaki kelime hangisi?
H u1b.7 Kaç farklı birim (eyalet) ve kaç farklı dönem (ay) var, say. Çok birim ve tek dönem hangi veri türüydü?
H u1b.8 Burada kaç birim var? Tek bir ülke mi, birçok ülke mi? Zaman boyutu var mı?
H u1b.9 İki boyutu birlikte düşün: birimler (eyaletler) ve dönemler (yıllar). İkisi de birden fazlaysa?
H u1b.10 Panel veri iki boyutludur. Kitapta bunun için kullanılan ikinci ismi hatırla: "uzun süre boyunca izlenen" veri.
H u1b.11 Ekonomide deney yapmak pahalı ve zor. O zaman veriler çoğunlukla nereden gelir?
H u1b.12 Kitabın ilk örneği olan California okul bölgeleri verisini düşün: 420 bölge, tek bir yıl. Bu hangi tür?
H u1b.13 Yıllar yazıyor ama dikkat: değerler dönem ortalaması. Her ülke grafikte kaç kez görünüyor?

# u1c
F $Y = \beta_0 + \beta_1X + u$ :: $Y$ bağımlı, $X$ bağımsız, $u$ hata terimi
F $\beta_1$ = $X$ bir birim artınca $Y$'deki ortalama değişim :: Eğim
F $\beta_0$ = $X = 0$ iken $Y$'nin ortalaması :: Sabit terim
F **Kestirim**: örneklemden parametre değeri hesaplamak :: estimation
F **Öngörü**: gelecek dönemler için tahmin; **tahmin**: yeni gözlemler için :: forecasting / prediction
F Tahmin için korelasyon yeter, politika için nedensellik gerekir :: Şemsiye örneği
H u1c.1 Kestirimde örneklemden anakütle hakkında bir sayı hesaplarız. Hangi şık "örneklem" ve "parametre" kelimelerini birlikte kullanıyor?
H u1c.2 Öngörüde kilit kelime "gelecek". Hangi şıkta "future" geçiyor?
H u1c.3 Şemsiye yağmura neden olur mu? Olmuyorsa, yine de şemsiyeye bakarak tahmin yapabiliyor muyuz?
H u1c.4 $\beta_1$ doğrunun eğimi. $X$ bir birim artınca ne değişir?
H u1c.5 Modelde $X$ dışında $Y$'yi etkileyen şeyler (yetenek, şans...) hangi terime gidiyor?

# u2a
F Örneklem uzayı = hepsi, olay = bir kısmı, rassal değişken = sonuçları sayıya çeviren kural :: Tanımlar
F $F(y) = P(Y\le y)$ :: CDF: o değere kadar (dahil) olasılıkları topla
F $P(Y\ge k) = 1 - P(Y\le k-1)$ :: Kesikli değişkende "en az"
F $P(Y>k) = 1 - P(Y\le k)$ :: "Büyüktür"
F $\sum_y P(Y=y) = 1$ :: Olasılıklar toplamı
F Kesikli: "kaç tane?"; sürekli: "ne kadar?" :: Türü ayırt etme
H u2a.1 Üç kavramı ayır: uzay = hepsi, olay = bir kısmı, rassal değişken = sayıya çeviren kural.
H u2a.2 Rassal değişken sonuçları (yazı, tura gibi) neye dönüştürür?
H u2a.3 "Birikimli" = o değere kadar biriktir. Küçük mü, küçük-eşit mi, büyük mü?
H u2a.4 "Kaç tane?" diye sorulabiliyorsa kesikli, "ne kadar?" diye ölçülüyorsa sürekli. Hangi şık ölçülen bir miktar?
H u2a.5 Olay örneklem uzayının tamamı mı, yoksa bir parçası mı?
H u2a.6 Olasılık 0 ile 1 arasında bir sayıdır. "Sayı" mı yoksa "oran" mı olmalı?
H u2a.7 Genel formül $\Pr(A)+\Pr(B)-\Pr(A \text{ ve } B)$. Hangi durumda son terim sıfır olur?
H u2a.8 "Birikimli" = bir değere kadar olan olasılıkları biriktirip topla.

# u2b
F $E(Y) = \sum y\,P(Y=y)$ :: Her değeri olasılığıyla çarp, topla
F $E(Y^2) = \sum y^2\,P(Y=y)$ :: İkinci moment
F $\text{var}(Y) = E(Y^2) - [E(Y)]^2$ :: Varyans kısayolu
F $\sigma_Y = \sqrt{\text{var}(Y)}$ :: Standart sapma
F $E(Y) = np$, $\text{var}(Y) = np(1-p)$ :: Binom: $n$ bağımsız denemede başarı sayısı
F $E(Y) = \int y\,f(y)\,dy$ :: Sürekli değişken
H u2b.1 Formül $\sum y\,P(Y=y)$. Değerler neyle ağırlıklandırılıyor? En olası değer ve ortadaki değerin başka adları olduğunu hatırla.
H u2b.2 Tanımdan başla: $E(Y-\mu)^2$. Kareyi aç ($Y^2 - 2\mu Y + \mu^2$) ve beklentiyi her terime dağıt.
H u2b.3 $Y=1$ kaç farklı sırayla olabilir (HT ve TH)? Her sıranın olasılığını çarpımla bul, sonra topla.
H u2b.4 Önce $E(Y)$'yi bul. Sonra her değerin ortalamadan sapmasının karesini olasılığıyla çarp, topla. Kısayol: $np(1-p)$, $n = 2$.
H u2b.5 Sürekli değişkende $E(Y) = \int y\,f(y)\,dy$. Önce $y$ ile $3/y^4$'ü çarp ($3y^{-3}$), sonra 1'den sonsuza integral al.
H u2b.6 Standart sapma varyansla nasıl ilişkili? Birimin $Y$'ninkiyle aynı olması için varyansa ne yapılır?
H u2b.7 $E(Y) = \sum y_i \Pr(Y = y_i)$ formülüne bak: her değer neyle çarpılıyor?
H u2b.8 Varyans "ortalamadan sapmaların karesinin ortalaması"dır. Hangi şıkta kare var ve karekök yok?
H u2b.9 Her notun sayısal değerini kendi olasılığıyla çarp, sonra hepsini topla.
H u2b.10 $Y\le 7$ olan sonuçları say: toplam 2, 3, ..., 7 için 1+2+3+4+5+6 kombinasyon var. 36'ya böl.

# u2c
F $E(X) = p$, $\text{var}(X) = p(1-p)$ :: Bernoulli
F $E(X^k) = p$ (her $k\ge 1$) :: Çünkü $1^k = 1$, $0^k = 0$
F Çarpıklık $= \dfrac{E(Y-\mu)^3}{\sigma^3}$ :: Sağ kuyruk → pozitif, sol kuyruk → negatif
F Basıklık $= \dfrac{E(Y-\mu)^4}{\sigma^4}$ :: Normal = 3; büyükse kalın kuyruk (leptokurtic)
F Bernoulli: çarpıklık $= \dfrac{1-2p}{\sqrt{p(1-p)}}$, basıklık $= \dfrac{1}{p(1-p)} - 3$ :: Kısayollar
F Çarpıklık ve basıklık birimsiz :: Birim değişince değişmez
H u2c.1 $X$ sadece 0 ve 1 alır. $1^4$ kaç, $0^4$ kaç? Beklenti tanımını uygula: her değer × olasılığı.
H u2c.2 Kuyruk hangi taraftaysa çarpıklığın işareti o taraftır.
H u2c.3 Normal dağılım basıklık için referans noktasıdır; formül kutusundaki değere bak.
H u2c.4 "Lepto" = kalın kuyruk. Normalin basıklığından büyük mü, küçük mü?
H u2c.5 Çarpıklığın payı ve paydası aynı birim kuvvetinde. Birimi bir sabitle çarpınca pay ve payda nasıl değişir?
H u2c.6 Bernoulli varyansı $p(1-p)$. $p = 0.53$ koy.
H u2c.7 Çarpıklık üçüncü momentle ilgilidir ve birimsiz olmalıdır. Payda, paydaki kuvvetle aynı kuvvette olmalı.
H u2c.8 Sağa uzun kuyruk: değerlerin çoğu orta-düşük, ama birkaç tane çok büyük değer var. Hangi değişkende birkaç kişi ortalamanın çok üstünde olur?
H u2c.9 Basıklık dördüncü momentle ilgilidir ve birimsiz olmalıdır.
H u2c.10 Normal dağılım simetrik mi? Basıklığın kıyas noktası olan sayıyı hatırla.
H u2c.11 $E(G) = 1\cdot p + 0\cdot(1-p)$ hesapla. Varyans için $E(G^2) - [E(G)]^2$ kullan; $G^2 = G$ olduğuna dikkat.

# u2d
F $P(Y=y) = \sum_x P(Y=y, X=x)$ :: Marjinal: satır ya da sütun toplamı
F $P(Y=y\mid X=x) = \dfrac{P(Y=y,\,X=x)}{P(X=x)}$ :: Koşullu: payda koşulun marjinali
F "|" işaretinin sağındaki = koşul (bildiğimiz) :: Paydayı seçme kuralı
F Tüm hücrelerin toplamı $= 1$ :: Ortak dağılım tablosu
H u2d.1 "Ortak" = iki değişkenin aynı anda belli değerleri alması. Hangi şık "aynı anda" (simultaneously) diyor?
H u2d.2 Marjinal = tek bir değişkenin dağılımı; tablonun kenarındaki toplamlar. Nasıl bulunuyor: toplama mı, bölme mi?
H u2d.3 Koşul ne? "İşsiz bir kişinin..." → işsiz olduğunu biliyoruz. Ortak olasılığı (işsiz ve mezun) koşulun marjinaline (işsizler) böl.
H u2d.4 Tablonun hücreleri birlikte tüm olası sonuçları kapsıyor. Kesin olan bir şeyin olasılığı kaçtır?
H u2d.5 "|" işaretinin sağındaki değişken koşuldur. Payda koşulun marjinali olmalı.
H u2d.6 Koşul hangi değişkende? Paydaya koşulun (verilen olayın) olasılığı gelir.
H u2d.7 Pay, ortak olasılık $\Pr(X=x, Y=y)$ olmalı. Ortak olasılığı $\Pr(X=x\mid Y=y)$ ile nasıl yazarsın?

# u2e
F $E(Y\mid X=x) = P(Y=1\mid X=x)$ :: $Y$ 0/1 ise
F $E(Y) = \sum_x E(Y\mid X=x)\,P(X=x)$ :: LIE: koşullu ortalamaların ağırlıklı ortalaması
F Bağımsız ⇔ her hücrede $P(Y,X) = P(Y)\,P(X)$ :: Tek hücre tutmazsa bağımlı
F Bağımsızsa $E(Y\mid X) = E(Y)$ :: Koşul bilgi vermez
F $E(Y\mid X=x)$ bir sayı; $E(Y\mid X)$ bir rassal değişken :: Gösterim farkı
H u2e.1 "Mezunların işsizlik oranı" → koşul mezun olmak ($X=1$). İşsiz-ve-mezun hücresini mezunların toplamına böl.
H u2e.2 $Y$ 0/1 olduğu için $E(Y\mid X=1) = P(Y=1\mid X=1)$. Çalışan-ve-mezun hücresini mezunların toplamına böl.
H u2e.3 Bağımsızlık için her hücrede ortak olasılık = marjinallerin çarpımı olmalı. Burada eşit mi?
H u2e.4 Genel ortalama, koşullu ortalamaların ağırlıklı ortalamasıdır. Hangi şık bunu söylüyor?
H u2e.5 Bağımsızlıkta $X$'i bilmek $Y$ hakkında bilgi verir mi? Vermiyorsa koşullu ortalama neye eşit olur?
H u2e.6 $X$'in değeri belli değilse $E(Y\mid X)$, $X$'e göre farklı değerler alır mı?
H u2e.7 Normal beklenen değer formülünü al; olasılıkları koşullu olasılıklarla değiştir.
H u2e.8 Hangi şık bağımsız olsun olmasın her zaman doğrudur? Yinelenen beklentiler yasasını (LIE) hatırla.
H u2e.9 $X$'i bildiğinde $Y$ için en iyi tahmin, o $X$ değerindeki $Y$'lerin ortalamasıdır.

# u2f
F $\text{cov}(X,Y) = E(XY) - \mu_X\mu_Y$ :: Birimi: $X$ birimi × $Y$ birimi
F $\text{corr}(X,Y) = \dfrac{\text{cov}(X,Y)}{\sigma_X\sigma_Y}$ :: Birimsiz, $-1$ ile $1$ arası
F $\text{var}(a + bX) = b^2\,\text{var}(X)$ :: Sabit kaybolur, çarpan karesiyle çıkar
F $\text{var}(aX+bY) = a^2\sigma_X^2 + b^2\sigma_Y^2 + 2ab\,\sigma_{XY}$ :: Doğrusal birleşim
F $\text{cov}(a+bX+cV,\,Y) = b\,\sigma_{XY} + c\,\sigma_{VY}$ :: Kovaryans dağılır, sabit kaybolur
F Bağımsız ⇒ $\text{cov} = 0$ (tersi her zaman doğru değil) :: Sıfır kovaryans = doğrusal ilişki yok
H u2f.1 Sabit eklemek yayılımı değiştirir mi? Çarpan varyansa nasıl girer (kare mi, düz mü)?
H u2f.2 Kovaryansı her parçaya ayrı uygula: $\text{cov}(Y, a)$, $\text{cov}(Y, bX)$, $\text{cov}(Y, cY)$. Sabitle kovaryans kaçtır?
H u2f.3 Korelasyon kovaryansı neye bölüyor? Bu bölmenin birimlere ve sonucun aralığına etkisi ne?
H u2f.4 Genel formül $\text{var}(X)+\text{var}(Y)+2\text{cov}(X,Y)$. Bağımsızlıkta kovaryans kaçtır?
H u2f.5 Kovaryans hangi tür ilişkiyi ölçer? Sıfır olması her türlü ilişkiyi dışlar mı?
H u2f.6 Kovaryans iki sapmanın çarpımının ortalaması. Birimler de çarpılır.
H u2f.7 Korelasyon kovaryansın birimsiz hâlidir. Kovaryansın birimini (X birimi × Y birimi) neyle bölersen birim kaybolur?
H u2f.8 Bir şık, her değişken çifti için her zaman doğru olan bir eşitsizlik. Her zaman doğru olan bir şey özel bir durumu gösteremez.
H u2f.9 $(a+b)^2 = a^2 + 2ab + b^2$ açılımına benzer. Ortadaki terimde kovaryans mı, standart sapmaların çarpımı mı olmalı?
H u2f.10 Korelasyon her zaman $-1$ ile $1$ arasındadır: $\rho^2 = \sigma_{XY}^2/(\sigma_X^2\sigma_Y^2) \le 1$. Bunu çapraz çarp.
H u2f.11 $Y = a + bX$ biçiminde yaz: $b = 1/\sigma_X$, $a = -\mu_X/\sigma_X$. Sonra $E(a+bX) = a + b\mu_X$ ve $\text{sd}(a+bX) = |b|\sigma_X$ kurallarını uygula.

# u3a
F $\sigma = \sqrt{\text{varyans}}$ :: $N(\mu, \sigma^2)$'deki ikinci sayı varyans!
F $z = \dfrac{c-\mu}{\sigma}$ :: Standartlaştır
F $P(Y\le c) = \Phi(z)$, $P(Y>c) = 1-\Phi(z)$ :: Sol / sağ alan
F $P(a\le Y\le b) = \Phi(z_b) - \Phi(z_a)$ :: Aralık
F $\Phi(-z) = 1 - \Phi(z)$ :: Simetri
F $\Phi(1) = 0.8413$, $\Phi(1.645) = 0.95$, $\Phi(1.96) = 0.975$, $\Phi(2) = 0.9772$ :: Ezber değerler
H u3a.1 4 varyans, yani $\sigma = \sqrt4 = 2$. $z = (3-1)/2$'yi bul, sonra $\Phi(z)$'yi formül kutusundan oku.
H u3a.2 $\sigma = \sqrt9 = 3$. $z = (0-3)/3$. "Büyüktür" istendiği için $1 - \Phi(z)$; negatif $z$ için simetri kuralını kullan.
H u3a.3 $\sigma = 5$. İki sınırı da $z$'ye çevir. Aralık = $\Phi$(büyük $z$) − $\Phi$(küçük $z$). Değerleri Tablolar sekmesinden bulabilirsin.
H u3a.4 $\Phi(1.96) = 0.975$ ezber. Simetri: $\Phi(-z) = 1 - \Phi(z)$.
H u3a.5 $\mu$'yü çıkarmak ortalamayı kaça getirir? $\sigma$'ya bölmek varyansı kaç yapar?
H u3a.6 Standartlaştırılmış değişkenin ortalaması 0, standart sapması 1 olmalı. Bunun için neyi çıkarıp neye bölmelisin?
H u3a.7 1.96 sayısını hangi güven düzeyiyle kullanıyorduk?
H u3a.8 $\Phi(d)$, $d$'nin solundaki alandır. İki nokta arasındaki alan = büyük noktanın solu − küçük noktanın solu.
H u3a.9 Genelde "kovaryans 0" bağımsızlık demek değildir. Ama ortak normal dağılım özel bir durum.

# u3b
F $\chi^2_m = Z_1^2 + \dots + Z_m^2$; $E = m$, $\text{var} = 2m$ :: Ki-kare: karelerin toplamı
F $t_m = \dfrac{Z}{\sqrt{W/m}}$ :: Student t (normalden kalın kuyruk)
F $F_{m,n} = \dfrac{W/m}{V/n}$ :: İki ki-karenin df'lerine bölünmüş oranı
F $F_{m,\infty} = \chi^2_m/m$, $\chi^2_1 = Z^2$, $t_\infty = N(0,1)$ :: Özel durumlar
F Ki-kare ve F tabloları üst kuyruk verir: $P(W > c)$ :: "$\le$" isteniyorsa 1'den çıkar
H u3b.1 Ki-kare standart normallerin karelerinin toplamı mı, yoksa toplamlarının karesi mi? Kare nerede?
H u3b.2 t = normal bölü kök(ki-kare / df). Bu kalıba uyan şıkkı bul.
H u3b.3 İki bağımsız ki-kare, her biri kendi df'sine bölünmüş, birbirine oranlanıyor. Bu hangi dağılımın tanımıydı?
H u3b.4 Ki-kare tablosunda df = 4 satırına git. 7.78 hangi sütunda? Tablo üst kuyruğu verir; soru "$\le$" istiyor, 1'den çıkar.
H u3b.5 $F_{m,\infty} = \chi^2_m/m$. 1.831'i 10 ile çarparsan ne olur?
H u3b.6 $\chi^2_1 = Z^2$. $Z^2 \le 1$ olması için $Z$ hangi aralıkta olmalı? Hem pozitif hem negatif tarafı düşün.
H u3b.7 t'nin paydası rastgele; bu uç değerleri daha olası yapar mı? Serbestlik derecesi büyüyünce ne olur?
H u3b.8 Üç dağılımın tarifini ayır: $\chi^2$ = normallerin kareleri toplamı; $t$ = normal ÷ kök(ki-kare/sd); $F$ = iki ki-karenin oranı.
H u3b.9 $t$ tablosunun en alt satırındaki ($\infty$) kritik değerlere bak: %5 iki taraflı için kaç?

# u3c
F $E(\bar Y) = \mu$ :: $\bar Y$ yansız
F $\text{var}(\bar Y) = \dfrac{\sigma^2}{n}$, $\text{sd}(\bar Y) = \dfrac{\sigma}{\sqrt n}$ :: $n$ büyüdükçe küçülür
F $Y\sim N \Rightarrow \bar Y\sim N\!\left(\mu, \dfrac{\sigma^2}{n}\right)$ :: Tam olarak normal
F i.i.d. = bağımsız ve aynı dağılımlı :: Değerler değil, dağılım aynı
H u3c.1 i.i.d.'nin açılımı: independently and identically distributed. Aynı olan değerler mi, dağılım mı?
H u3c.2 Her yeni örneklemde istatistik farklı çıkar. Bu değerlerin tüm örneklemler üzerindeki dağılımına ne denir?
H u3c.3 $\bar Y = \frac1n\sum Y_i$. Sabit çarpan varyansa karesiyle girer: $1/n^2$. Bağımsızlıkta varyanslar toplanır: $n\sigma^2$. Birleştir.
H u3c.4 $\bar Y$'nin standart sapması $\sqrt{4/100}$. Sınırları bu sayıyla standartlaştır, sonra $\Phi(z) - \Phi(-z)$.
H u3c.5 $\text{var}(\bar Y) = \sigma^2/n$ formülünde $n$ büyürse kesir ne olur?
H u3c.6 Farklı bir örneklem çekseydin $\bar Y$ aynı mı çıkardı? Örneklemden örnekleme değişen bir şeyin dağılımına ne denir?
H u3c.7 Basit rastgele örneklemde her öğrencinin seçilme şansı eşit olmalı. Hangi yöntemde bazı öğrenciler sistematik olarak dışarıda kalır?
H u3c.8 $\text{var}\left(\frac{1}{n}\sum Y_i\right)$: sabit $1/n$ varyanstan karesiyle çıkar, bağımsız $Y_i$'lerin varyansları toplanır.
H u3c.9 Beklenen değer doğrusaldır: $E\left(\frac1n\sum Y_i\right) = \frac1n\sum E(Y_i)$. Her $E(Y_i)$ nedir?

# u3d
F $\bar Y \xrightarrow{p} \mu$ :: Büyük sayılar yasası (tutarlılık)
F $\bar Y \approx N\!\left(\mu, \dfrac{\sigma^2}{n}\right)$ :: MLT: büyük $n$'de, $Y$ normal olmasa bile
F $z = \dfrac{c - \mu}{\sqrt{\sigma^2/n}}$ :: MLT ile standartlaştırma
F Bernoulli: $\mu = p$, $\sigma^2 = p(1-p)$ :: Oranlar için
F Sayım $S$: $E(S) = np$, $\text{var}(S) = np(1-p)$ :: Başarı sayısı
F Yansız: $E(\hat\mu)=\mu$; tutarlı: $\hat\mu\xrightarrow{p}\mu$; etkin: en küçük varyans :: Üç özellik
H u3d.1 BBK örneklem ortalamasının nereye gittiğini söyler. Normal dağılımdan bahseden ise MLT'dir.
H u3d.2 MLT standartlaştırılmış ortalama hakkındadır: $(\bar Y - \mu)/(\sigma/\sqrt n)$ neye yaklaşır? $Y$'lerin kendisi hakkında bir şey der mi?
H u3d.3 Tutarlılık = büyük örneklemde gerçek değere yakınsama. Yansızlık ve etkinlikle karıştırma.
H u3d.4 "Asimptotik" = $n \to \infty$. Büyük örneklem yaklaşımı mı, küçük örneklem tam dağılımı mı?
H u3d.5 MLT: $\text{var}(\bar Y) = 15/30$, standart sapma bunun karekökü. $z = (34.5 - 35)/\text{sd}$, sonra $\Phi(z)$.
H u3d.6 $\sigma^2 = 0.4\times 0.6$. $1.96\sqrt{\sigma^2/n} = 0.01$ denklemini $n$ için çöz: önce kökü yalnız bırak, sonra iki tarafın karesini al.
H u3d.7 Kesin dağılımı bulmak için $Y$'nin dağılımını tam bilmek gerekir. Genelde bilmeyiz. O zaman ne işe yarar?
H u3d.8 Tutarlılık "örneklem büyüdükçe gerçek değere yaklaşmak" demektir. Hangi şık başka bir özellikten (etkinlik) bahsediyor?
H u3d.9 BSY ($\bar Y$ nereye gider) ile MLT ($\bar Y$'nin dağılımının şekli) arasındaki farkı düşün.
H u3d.10 MLT hangi dağılımdan bahseder: normal mi, $t$ mi? Tutarlılık hangi teoremin konusuydu?

# u3e
F $s_X^2 = \dfrac{1}{n-1}\sum(X_i-\bar X)^2$ :: Örneklem varyansı ($n-1$!)
F $s_{XY} = \dfrac{1}{n-1}\sum(X_i-\bar X)(Y_i-\bar Y)$ :: Örneklem kovaryansı
F $r_{XY} = \dfrac{s_{XY}}{s_Xs_Y}$ :: Örneklem korelasyonu (doğrusal ilişki)
F İşaret = yön, büyüklük = güç; korelasyon ≠ nedensellik :: Yorumlama
H u3e.1 Korelasyon = kovaryans ÷ (iki standart sapmanın çarpımı). Varyans değil, standart sapma.
H u3e.2 İşaret yönü, büyüklük gücü söyler. 0.23 sıfıra mı yakın, 1'e mi? Korelasyon nedensellik gösterir mi?
H u3e.3 Korelasyon hangi tür ilişkiyi ölçer? U şeklinde güçlü bir ilişkide ne çıkar?
H u3e.4 Ortalamayı örneklemden tahmin ettik, bir serbestlik derecesi kaybettik. $n$'den kaç çıkar?
H u3e.5 Her gözlem iki sayı taşır: bir $X$ ve bir $Y$. Bunları düzlemde nasıl gösterirsin?
H u3e.6 "Çarpımların toplamı" ile "toplamların çarpımı" aynı şey değil. $\sum (X_i - \bar X)$ neye eşittir?
H u3e.7 Kovaryans eşitsizliğinin örneklem hali: $|s_{XY}| \le s_X s_Y$. Bunu $s_Xs_Y$'ye böl.
H u3e.8 $Y = X^2$ ve $X$, $-3$ ile $3$ arasında simetrikse ilişki çok güçlü. Korelasyon kaç çıkar?
H u3e.9 $r = s_{HW}/(s_H s_W)$. Paydayı önce hesapla.
H u3e.10 Dakikadan saate geçmek $T$'yi 60'a bölmek demek. Bu, kovaryansı ve $s_T$'yi nasıl değiştirir? Oranlarına ne olur?
H u3e.11 Korelasyon noktaların doğru etrafında ne kadar sıkı toplandığını ölçer. Eğim ayrı bir şey: dik bir doğru etrafında da noktalar dağınık olabilir.

# u4a
F Tahminci = formül (rassal), tahmin = bir örneklemdeki sayı :: estimator / estimate
F Yansız: $E(\hat\mu) = \mu$; tutarlı: $\hat\mu\xrightarrow{p}\mu$; etkin: en küçük varyans :: Üç özellik
F $E\left(\sum w_iY_i\right) = \mu\sum w_i$ :: Ağırlık toplamı 1 → yansız
F $\text{var}\left(\sum w_iY_i\right) = \sigma^2\sum w_i^2$ :: Eşit ağırlık → en küçük varyans
F $\text{var}(\hat p) = \dfrac{p(1-p)}{n}$ :: Oran ($\hat p = \bar Y$)
H u4a.1 Tahminci bir formül, örneklemden örnekleme değişir. Tahmin ise o formülden çıkan sayı. Hangisi rassal?
H u4a.2 Yansızlık örnekleme dağılımının merkeziyle ilgili: tahmincinin beklenen değeri neye eşit olmalı?
H u4a.3 Etkinlik yayılımla ilgili: yansız tahminciler arasında hangi ölçü en küçük olmalı?
H u4a.4 İki soru: $E(Y_1) = \mu$ mü? $n$ büyüyünce $Y_1$'in varyansı küçülür mü?
H u4a.5 Hepsinin ağırlık toplamı 1, yani hepsi yansız. Şimdi varyanslarını $2m\sum w_i^2$ ile karşılaştır.
H u4a.6 $\frac13 Y_1 + \frac23 Y_2$ yaz. Her katsayının karesi × $\text{var}(Y)$, sonra topla. $\text{var}(\chi^2_m) = 2m$.
H u4a.7 İki bilgiyi birleştir: $\text{var}(\bar Y) = \sigma^2/n$ ve Bernoulli'de $\sigma^2 = p(1-p)$.
H u4a.8 Tahminci bir formüldür ve rastgele örneklemden hesaplanır. Örneklem değişince sonucu değişir mi?
H u4a.9 Örneklemi çektin ve $\bar y = 12.4$ buldun. Bu 12.4 artık değişebilir mi?
H u4a.10 Yansızlık "ortalamada doğru" demektir. Hangi şık beklenen değerden bahsediyor?
H u4a.11 Tutarlılık örneklem büyüklüğüyle ilgilidir: $n \to \infty$ iken tahminci nereye gider?
H u4a.12 Varyansı karşılaştırmak tek başına yetmez: "her zaman 5 de" diyen tahmincinin varyansı 0'dır. Önce hangi şartı istemeliyiz?
H u4a.13 $\bar Y$ yansız mı? Yansızsa $E(\bar Y)$ ile $E(Y)$ arasındaki ilişki ne olur?
H u4a.14 Kitap istatistiğin üç temel aracını sayıyordu: tahmin, test ve aralık. Hangisi bu listede yok?
H u4a.15 BLUE kısaltmasını hatırla: Best Linear Unbiased Estimator. "Best" neyi ifade eder?
H u4a.16 "En küçük kareler" adında cevap var: neyin karesi toplanıyor?

# u4b
F $H_0$ hep eşitlik ($=$); $H_1$: $\ne$, $>$ ya da $<$ :: Hipotezler
F "farklı" → $\ne$, "aşıyor / büyük / artırıyor" → $>$, "küçük / düşmüş" → $<$ :: Kelimeden yöne
F Tip I = doğru $H_0$'ı reddetmek (olasılığı $\alpha$) :: Yanlış alarm
F Tip II = yanlış $H_0$'ı reddetmemek :: Kaçırma
F Reddedememek ≠ $H_0$ doğru :: Sadece yeterli kanıt yok
H u4b.1 $\alpha$ hangi hatanın olasılığı? Doğru $H_0$'ı reddetmek mi, yanlış $H_0$'ı reddetmemek mi?
H u4b.2 Tip I = yanlış alarm (doğru olanı reddetmek). Tip II bunun tersi.
H u4b.3 "Aşıyor mu" = büyük mü? Eşitlik her zaman $H_0$'dadır.
H u4b.4 Reddedememek $H_0$'ın doğru olduğunu kanıtlar mı? Mahkemedeki "suçsuz" kararını düşün.
H u4b.5 $H_0$ test edilen iddia ve hep eşitlik içerir. Değeri sıfır olmak zorunda mı?
H u4b.6 "$\ne$" işareti: gerçek değer iki taraftan da sapabilir.
H u4b.7 Birinci tip hata = "yanlış alarm". Doğru olan $H_0$'a ne yapmışsın?
H u4b.8 İkinci tip hata = "kaçırılan suçlu". $H_0$ yanlışken sen ne karar vermişsin?
H u4b.9 "Size" ile "significance level" aynı şeydir. Anlamlılık düzeyi hangi hatanın olasılığıydı?
H u4b.10 Güç, yanlış bir $H_0$'ı yakalama olasılığıdır. Yanlış $H_0$'ı kaçırmak hangi tip hataydı?
H u4b.11 "İki taraflı" = gerçek değer iki yönden birinde, büyük ya da küçük olabilir. Hipotezler popülasyon parametresi hakkında mı, örneklem ortalaması hakkında mı kurulur?
H u4b.12 "Güçlü test" = gerçekten bir etki varken onu bulabilen test.
H u4b.13 Yanlış alarmın (tip I) maliyeti her durumda aynı mı? Bir ilacı onaylamak ile bir ödevi kontrol etmek arasında fark var mı?
H u4b.14 Doğru bir $H_0$'ı reddetmek "pozitif sonuç" (bir etki bulduk) ilan etmektir. Etki aslında yoksa bu hangi tür "pozitif"tir?

# u4c
F $SE(\bar Y) = \dfrac{s_Y}{\sqrt n} = \sqrt{\dfrac{s_Y^2}{n}}$ :: Standart hata
F $t = \dfrac{\bar Y - \mu_0}{SE(\bar Y)}$ :: Test istatistiği
F İki yönlü: $|t| > 1.96$ (%5), $p = 2\Phi(-|t|)$ :: $\ne$
F Sağ: $t > 1.645$ (%5), $p = 1-\Phi(t)$; sol: $t < -1.645$, $p = \Phi(t)$ :: $>$ / $<$
F $p < \alpha$ ⇒ $H_0$ reddedilir :: Karar kuralı
H u4c.1 p-değeri $H_0$'ı doğru VARSAYARAK hesaplanır. "$H_0$'ın doğru olma olasılığı" en büyük tuzak.
H u4c.2 İki yönlüde %5 iki kuyruğa bölünür: her kuyrukta %2.5. $\Phi(z) = 0.975$ olan $z$ hangisi?
H u4c.3 Tek yönlü sağ testte %5'in tamamı sağ kuyrukta. $\Phi(z) = 0.95$ olan $z$ hangisi? Mutlak değer kullanılır mı?
H u4c.4 Verilen sayı varyans ($s^2$). $SE = \sqrt{s^2/n}$: önce böl, sonra karekök.
H u4c.5 Aynı $t$ değeri. İki yönlü testte kaç kuyruk, tek yönlüde kaç kuyruk sayılıyor?
H u4c.6 Kural: $p < \alpha$ ise reddet. 0.03'ü önce 0.05 ile, sonra 0.01 ile karşılaştır.
H u4c.7 Kritik değer ret bölgesinin neresi: sınırı mı, ortası mı?
H u4c.8 Standart hata = standart sapmanın **tahmini**. Bilinmeyen $\sigma_Y$ yerine ne koyarsın, ve karekök nerede?
H u4c.9 İki taraflı %5 testte %5 iki kuyruğa bölünür: her kuyrukta %2.5. Standart normalde %2.5'lik sağ kuyruk hangi değerde başlar?
H u4c.10 p-değeri: $H_0$ doğru olsaydı, en az bulduğun kadar uç bir sonuç görme olasılığı. "En az bu kadar uç" hangi eşitsizlik yönü?
H u4c.11 p-değeri büyük = $H_0$ doğruyken böyle bir sonuç görmek sıradan. O zaman verin $H_0$ hakkında ne söyler?
H u4c.12 İki şeye dikkat et: kare var mı, ve bilinmeyen $\mu_Y$ yerine örneklemde ne kullanılır? Payda neden $n-1$?
H u4c.13 $\bar Y$'yi hesapladıktan sonra $n$ sapmadan $(Y_i - \bar Y)$ kaç tanesi serbestçe değişebilir? Sapmaların toplamı neye eşit?
H u4c.14 Genel kalıp: (tahmin − hipotezdeki değer) ÷ tahminin standart hatası.
H u4c.15 Kesin (küçük örneklem) $t$ dağılımı için $Y$ hakkında ek bir varsayım gerekir. Hangisi?
H u4c.16 İki taraflı p-değeri iki kuyruğun alanını toplar: $2\Phi(-|t|)$. Tek taraflı p-değeri kaç kuyruğu sayar?

# u4d
F $\bar Y \pm 1.96\,SE(\bar Y)$ :: %95 güven aralığı
F %90: 1.645, %95: 1.96, %99: 2.576 :: Kritik değerler
F $SE(\hat p) = \sqrt{\dfrac{\hat p(1-\hat p)}{n}}$ :: Oran için
F $H_0$ değeri aralığın dışındaysa %5'te reddet :: GA ile test
F Rastgele olan aralıktır, $\mu$ sabittir :: Doğru yorum
H u4d.1 $SE = s/\sqrt n = 145/\sqrt{800}$. %95 için 1.96. Aralık: $\bar Y \pm 1.96\cdot SE$.
H u4d.2 Rastgele olan aralık mı, $\mu$ mü? "Bu aralıkta %95 olasılıkla" ifadesi neden sorunlu?
H u4d.3 %99'un kritik değeri %95'inkinden büyük mü, küçük mü?
H u4d.4 %95 GA = %5'te reddedilemeyen değerler. 7 aralığın içinde mi?
H u4d.5 $SE = \sqrt{\hat p(1-\hat p)/n}$; $\hat p = 0.5375$, $n = 400$.
H u4d.6 %90 aralıkta dışarıda %10 kalır, her kuyrukta %5. Standart normalde %5'lik sağ kuyruğun sınırı kaç? Ve aralık neyle çarpılır: $s_Y$ mi, $SE(\bar Y)$ mi?

# u4e
F $SE(\bar Y_m - \bar Y_w) = \sqrt{\dfrac{s_m^2}{n_m} + \dfrac{s_w^2}{n_w}}$ :: Varyanslar toplanır (farkta bile)
F $t = \dfrac{(\bar Y_m - \bar Y_w) - d_0}{SE}$ :: Fark testi
F %95 GA: $(\bar Y_m - \bar Y_w) \pm 1.96\,SE$ :: Fark için aralık
F Anlamlı fark ≠ nedeni bilinen fark :: Karıştırıcılar kontrol edilmedi
H u4e.1 Bağımsız örneklemlerde önce varyanslar toplanır, sonra karekök alınır: $\sqrt{0.09 + 0.16}$.
H u4e.2 $t = 4.11/0.35$. Anlamlı mı? Ama iki grubun ortalama farkı, farkın nedenini söyler mi?
H u4e.3 Varyanslar mı toplanır, standart hatalar mı? Sonra ne yapılır?
H u4e.4 Bağımsız iki ortalamanın farkının varyansı = varyansların **toplamı**. Standart hata da bu varyansın karekökü.
H u4e.5 Bu SE formülü havuzlanmamış (pooled değil). Kitaba göre kesin $t$ dağılımı hangi ek şartlarla çıkıyordu? Şartlar yoksa ne kullanırız?
H u4e.6 Kesin $t$ için üç şart birlikte gerekir: dağılım şekli, varyanslar ve standart hata formülü.

# u5a
F $E(Y\mid X) = \beta_0 + \beta_1X$ :: Anakütle regresyon doğrusu (şapkasız)
F $Y_i = \beta_0 + \beta_1X_i + u_i$ :: Tam model
F $u_i = Y_i - E(Y_i\mid X_i)$ :: Hata terimi (gözlenemez)
F $\hat u_i = Y_i - \hat Y_i$ :: Kalıntı (hesaplanır)
F $Y$ bağımlı (sol), $X$ regresör (sağ), $\beta$'lar bilinmeyen parametreler :: Terimler
H u5a.1 Anakütle doğrusu koşullu ortalamadır ve şapkasız parametrelerle yazılır.
H u5a.2 Bağımlı değişken açıklanan değişken; denklemin hangi tarafında duruyor?
H u5a.3 Regresör açıklayan değişken; denklemin hangi tarafında duruyor?
H u5a.4 Yunan harfli $\beta$'lar anakütleye mi ait, yoksa örneklemden mi hesaplanıyor?
H u5a.5 Hata terimi gerçek (anakütle) doğruya uzaklık; kalıntı ise tahmin edilen doğruya uzaklık.
H u5a.6 Doğruya $X = 0$ koy: geriye ne kalır?
H u5a.7 Yunan harfleri ($\beta$, şapkasız) bilinmeyen popülasyon değerleridir. Şapkalı olanlar ($\hat\beta$) örneklemden gelir.
H u5a.8 Kalıntı = gerçek $Y$ − tahmin edilen doğru. Popülasyonda gerçek $Y$ − gerçek doğru neydi?
H u5a.9 $u_i = Y_i - (\beta_0 + \beta_1 X_i)$. Negatifse gerçek puan doğrunun altında mı üstünde mi?

# u5b
F $\hat\beta_1 = \dfrac{\sum(X_i-\bar X)(Y_i-\bar Y)}{\sum(X_i-\bar X)^2} = \dfrac{s_{XY}}{s_X^2}$ :: OLS eğimi
F $\hat\beta_0 = \bar Y - \hat\beta_1\bar X$ :: OLS sabiti
F $\hat\beta_1 = r_{XY}\,\dfrac{s_Y}{s_X}$ :: Korelasyondan eğim
F $\hat Y_i = \hat\beta_0 + \hat\beta_1X_i$, $\hat u_i = Y_i - \hat Y_i$ :: Tahmin ve kalıntı
F $\sum \hat u_i = 0$, doğru $(\bar X, \bar Y)$'den geçer :: Cebirsel özellikler
H u5b.1 OLS = Ordinary Least ... Neyin en küçüğü? Kalıntıların düz toplamının neden işe yaramadığını düşün.
H u5b.2 Kalıntı = gerçek değer − tahmin edilen (şapkalı) değer.
H u5b.3 OLS'nin cebirsel özelliklerini hatırla: kalıntıların toplamı kaçtır?
H u5b.4 $\hat\beta_0 = \bar Y - \hat\beta_1\bar X$ formülünü düzenle. $X = \bar X$ koyunca tahmin ne çıkar?
H u5b.5 Eğim = kovaryans ÷ $X$'in VARYANSI (standart sapması değil).
H u5b.6 Tahmin edilen değer şapkalı (tahmin edilmiş) katsayılarla hesaplanır.
H u5b.7 OLS'nin açılımı: Ordinary **Least Squares**. "En küçük kareler" neyin karelerini küçültür?
H u5b.8 Kalıntı = gerçek değer − tahmin edilen (fitted) değer. Şapkalı mı şapkasız mı katsayılarla?
H u5b.9 Hangisi elimizdeki veriyle hesaplanabilir: hata mı, kalıntı mı?
H u5b.10 Eğim "$X$ bir birim artınca $Y$ ne kadar değişir" demek. Payda $X$'in yayılımı olmalı.
H u5b.11 Pay: çapraz sapmaların toplamı (kovaryansın payı). Payda: $X$'in sapmalarının kareleri.
H u5b.12 OLS'nin sabit terime göre birinci sıra koşulunu düşün: $\sum (Y_i - \hat\beta_0 - \hat\beta_1 X_i) = 0$.
H u5b.13 $\hat\beta_0 = \bar Y - \hat\beta_1 \bar X$ formülünü $X = \bar X$ noktasında doğruya koy.

# u5c
F $\hat Y = \hat\beta_0 + \hat\beta_1 X$ :: Tahmin: $X$'i yerine koy
F $\Delta\hat Y = \hat\beta_1\,\Delta X$ :: Değişim: sabit düşer
F $\bar Y = \hat\beta_0 + \hat\beta_1\bar X$ :: Ortalama: doğru $(\bar X, \bar Y)$'den geçer
F "$X$ bir birim artınca $Y$ ortalamada $\hat\beta_1$ birim değişir" :: Eğim yorumu (yüzde değil!)
F Veri aralığı dışında tahmin = extrapolation :: Güvenilmez
H u5c.1 Eğim yorumu kalıbı: $X$ bir birim (1 yıl) artınca $Y$ kaç birim (dolar) değişir? Yüzde mi, dolar mı?
H u5c.2 Veri 25–65 yaş arası. 85 bu aralıkta mı?
H u5c.3 Kazanç negatif olabilir mi? Kazanç dağılımı simetrik mi?
H u5c.4 Değişim sorusu: $\Delta\hat Y = \hat\beta_1\cdot\Delta X$. $\Delta X = 23 - 19$.
H u5c.5 Malta'nın ticaret payı diğer ülkelere göre nasıl? OLS uçtaki noktalara ne yapar?
H u5c.6 Sabit, STR $= 0$ iken tahmindir. Öğretmen başına sıfır öğrenci gerçekçi mi, verinin içinde mi?
H u5c.7 Doğrusal modelde $\beta_1 = \Delta Y / \Delta X$. Bu yüzde mi, birim mi?
H u5c.8 Sabit terim, $X = 0$ iken tahmin edilen $Y$'dir. Verinde $X$ sıfıra yakın gözlemler yoksa ne olur?
H u5c.9 $\Delta \hat Y = \hat\beta_1 \times \Delta X$. Burada $\Delta X = -2$; işaretlere dikkat.
H u5c.10 Eğimin sayısal değeri birimlere bağlıdır. "Büyük" sorusu istatistiksel mi yoksa ekonomik bir soru mu?
H u5c.11 Eğim = $\Delta(\text{bağımlı})/\Delta(\text{bağımsız})$. Burada bağımlı değişken hangisi?
H u5c.12 Sabit terim $X = 0$'daki tahmindir. Her şıkta $X = 0$ ne demek: gerçekçi mi, veride olabilir mi?
H u5c.13 $Y$'yi 100'e bölersen tüm sayılar 100'e bölünür. Ama "STR 1 artınca puan 2.28 puan düşer" cümlesi yeni birimle nasıl yazılır?

# u5d
F $R^2 = \dfrac{ESS}{TSS} = 1 - \dfrac{SSR}{TSS}$ :: Açıklanan oran, birimsiz, 0–1
F $R^2 = r_{XY}^2$ :: Tek regresörde
F $SER = \sqrt{\dfrac{SSR}{n-2}}$ :: Birimi $Y$'nin birimi
F $SSR = (n-2)SER^2$, $TSS = \dfrac{SSR}{1-R^2}$, $s_Y = \sqrt{\dfrac{TSS}{n-1}}$ :: Geri hesap (PS5 2d)
H u5d.1 $R^2 = ESS/TSS$: açıklanan ... Korelasyonla ilişkisi kare mi, kendisi mi?
H u5d.2 SER kalıntıların standart sapması; kalıntılar hangi birimde?
H u5d.3 $R^2$ iki kareler toplamının oranı; birimler sadeleşir mi?
H u5d.4 $R^2$'yi yüzdeye çevir: açıklanan varyans oranı.
H u5d.5 Kaç katsayı tahmin edildi? Her biri bir serbestlik derecesi "harcar".
H u5d.6 Tek regresörde $R^2 = r^2$. Negatif bir sayının karesi?
H u5d.7 $\hat\beta_1 = 0$ ise her gözlem için $\hat Y_i = \hat\beta_0 = \bar Y$ olur. O zaman $ESS = \sum(\hat Y_i - \bar Y)^2$ kaç?
H u5d.8 $R^2$ = $Y$'nin toplam varyasyonunun regresyonla **açıklanan** kısmı. Açıklanan varyasyon $\hat Y$'lerle mi, kalıntılarla mı ölçülür?
H u5d.9 SER, hata teriminin standart sapmasının tahminidir. Kalıntılardan hesaplanır; iki katsayı tahmin edildiği için payda kaç?
H u5d.10 Toplam varyasyon iki parçaya ayrılır: açıklanan ve açıklanamayan.
H u5d.11 $R^2$ verinin ne kadarının doğruyla açıklandığını söyler. Nedensellik hakkında bir şey söyler mi?
H u5d.12 Birimsiz olan bir ölçü ara. $R^2$ bir oran: pay ve payda aynı ölçek çarpanıyla değişirse ne olur?
H u5d.13 $SSR$'deki "R" residual (kalıntı) demek. Formülde kalıntı var mı?
H u5d.14 $R^2$ düşükse $Y$'nin varyasyonunun büyük kısmı açıklanamamış, yani hata teriminde kalmış. Hata terimi neyi temsil eder?

# u5e
F 1. $E(u_i\mid X_i) = 0$ :: Sıfır koşullu ortalama (en önemlisi)
F 2. $(X_i, Y_i)$ i.i.d. :: Rastgele örnekleme
F 3. $E(X^4) < \infty$, $E(Y^4) < \infty$ :: Büyük aykırı değer yok
F $\text{corr}(X,u)\ne 0 \Rightarrow E(u\mid X)\ne 0$ :: Karıştırıcı varsa 1. varsayım bozulur
F $E(u\mid X) = 0 \Rightarrow E(u) = 0$, $\text{cov}(X,u) = 0$ :: LIE ile
H u5e.1 Hafıza: Sıfır koşullu ortalama, Rastgele örnekleme, Aykırı değer yok. Homoskedastisite ve normallik listede mi?
H u5e.2 Hangisi bozulursa $\hat\beta_1$ yanlı olur (karıştırıcı değişken durumu)?
H u5e.3 LIE: $E(u) = E[E(u\mid X)]$. Aynı mantığı $Xu$ ve kovaryans için uygula.
H u5e.4 Gelir $u$'nun içinde ve STR ile ilişkili, yani $\text{corr}(X, u) \ne 0$. Bu hangi varsayımı bozar?
H u5e.5 Rastgele atamada $X$, $u$'daki diğer faktörlerle (gelir, yetenek) ilişkili olabilir mi?
H u5e.6 Uç değerler 4. kuvvette çok büyür. Hangi momentin sonlu olması gerekir?
H u5e.7 Rastgele örnekleme gözlem çiftleri için ne söyler? Hangi kısaltma?
H u5e.8 Kitaptaki üç varsayımı say: koşullu ortalama sıfır, i.i.d., büyük aykırı değer yok. Listede olmayan hangisi?
H u5e.9 Dikey çizgi "|" bölme değil, "verildiğinde" (koşul) demek.
H u5e.10 Üç en küçük kareler varsayımı arasında uyumla ($R^2$) ilgili bir şart var mı?
H u5e.11 Okul bölgeleri sınıf büyüklüğünü kendileri seçer. Zengin bölgeler daha küçük sınıflar seçebilir mi? Bu gelir hata teriminde.

# u5f
F $\hat\beta_1 = \beta_1 + \dfrac{\sum (X_i-\bar X)u_i}{\sum (X_i-\bar X)^2}$ :: Tahmin = gerçek + gürültü
F $\sigma^2_{\hat\beta_1} = \dfrac{1}{n}\,\dfrac{\text{var}[(X_i-\mu_X)u_i]}{[\text{var}(X_i)]^2}$ :: $n$ büyük → küçük; $\text{var}(X)$ büyük → küçük
F Yansızlık için varsayım 1 ve 2 yeter :: Homoskedastisite gerekmez
F Yansız + varyans $\to 0$ ⇒ tutarlı :: Büyük örneklem
F Büyük $n$'de $\hat\beta_1$ yaklaşık normal (MLT) :: Normal hata gerekmez
H u5f.1 $\sigma^2_{\hat\beta_1}$ formülünün başında $1/n$ var. $n$ büyürse ne olur?
H u5f.2 $\text{var}(X)$ formülün paydasında. Payda büyürse kesir büyür mü, küçülür mü?
H u5f.3 Yansızlık için hangi iki varsayım yeterli? Homoskedastisite ya da normallik gerekir mi?
H u5f.4 $\hat\beta_1 - \beta_1$ bir ortalama gibi davranır. Ortalamaların yaklaşık normal olduğunu hangi teorem söyler?
H u5f.5 Yansız + varyansı sıfıra giden tahminci hangi özelliğe sahiptir?
H u5f.6 Aynı popülasyondan iki farklı rastgele örneklem çeksen $\hat\beta_1$ aynı mı çıkar? Neden?
H u5f.7 $\text{var}(\hat\beta_1) \approx \dfrac{\sigma_u^2}{n\,\sigma_X^2}$ (homoskedastik durumda). Hangi değişken paydada?
H u5f.8 $\hat\beta_1$'in yaklaşık normal olduğunu bilirsek hangi araçları kullanabiliriz? 1.96'yı nerede kullanıyorduk?
H u5f.9 Üç şeyi kontrol et: ortalama (yansız mı?), $1/n$ çarpanı (örneklem büyüyünce varyans küçülmeli) ve paydadaki kare.

# u6a
F $t = \dfrac{\hat\beta_1 - c}{SE(\hat\beta_1)}$ :: Genelde $c = 0$ (anlamlılık testi)
F İki yönlü: $|t| > 1.96$ (%5) reddet; $p = 2\Phi(-|t|)$ :: Karar
F $p < 0.01$: %1, %5, %10'da anlamlı; $0.05 < p < 0.10$: sadece %10'da :: p ile karar
F R çıktısı: t value = Estimate ÷ Std. Error; Pr(>|t|) = iki yönlü p :: Sadece $\beta = 0$ testi için
H u6a.1 Genel kalıp: (tahmin − hipotez değeri) ÷ standart hata. Varyans mı, standart hata mı?
H u6a.2 $t = -2.28/0.48$. İki yönlü testte $|t|$'yi 1.96 ile karşılaştır; işaret önemli mi?
H u6a.3 p = 0.004'ü 0.01, 0.05 ve 0.10 ile karşılaştır.
H u6a.4 p = 0.094'ü 0.01, 0.05 ve 0.10 ile karşılaştır.
H u6a.5 Sütun adındaki mutlak değer işareti kaç kuyruk demek? Hangi hipotez için hesaplanıyor?
H u6a.6 Talep yasası fiyat artınca miktarın ne yöne gideceğini söylüyor? Teori yönü önceden söylüyorsa hangi tür alternatif kullanılabilir?
H u6a.7 Genel kalıp her testte aynı: (tahmin − $H_0$ değeri) / standart hata.
H u6a.8 Kritik değer, reddetme bölgesinin sınırıdır. $|t|$ bu sınırı geçerse hangi hipotez hakkında karar verirsin?
H u6a.9 Pay: tahmin eksi hipotezdeki değer. Payda: tahminin standart hatası.
H u6a.10 $|t| = |\hat\beta_1|/SE(\hat\beta_1)$ eşitliğini $SE$ için çöz.
H u6a.11 $t$ = (puan/öğrenci) ÷ (puan/öğrenci). Birimler sadeleşince geriye ne kalır?
H u6a.12 $t = (\hat\beta_1 - \beta_{1,0})/SE(\hat\beta_1)$ formülünde alternatif hipotez geçiyor mu?
H u6a.13 Sol kuyruk testinde "en az bu kadar uç" = $t^{act}$'ten de **küçük** değerler. $\Phi$ hangi taraftaki alanı verir?
H u6a.14 Kitaptaki üç adımı hatırla: SE, $t$, p-değeri. Büyük örneklemde normalliğe neden ihtiyaç yok?
H u6a.15 Küçük p = $H_0$ doğru olsaydı bu sonuç çok nadir görülürdü. Bu $H_0$ için iyi mi kötü mü?
H u6a.16 $H_0$ ve $t$ formülü ikisinde de aynı. O zaman farkın kendisi nerede?
H u6a.17 $t = (\hat\beta_1 - 0)/SE(\hat\beta_1)$. Eğimin katsayısını ve **eğimin** standart hatasını kullan.
H u6a.18 $t = 0.04/0.01$ hesapla. Katsayının küçük görünmesi neye bağlı: birimlere mi?
H u6a.19 $SE = \hat\beta_1 / t$.
H u6a.20 Alternatif "küçüktür" diyor: reddetme bölgesi hangi kuyrukta? Tek kuyrukta %5 bırakan kritik değer kaç?

# u6b
F $\hat\beta_1 \pm 1.96\,SE(\hat\beta_1)$ :: %95 GA (%90: 1.645, %99: 2.576)
F $\left[(\hat\beta_1 - 1.96SE)\Delta x,\ (\hat\beta_1 + 1.96SE)\Delta x\right]$ :: $\Delta x$ etkisi; negatifse uçlar yer değiştirir
F 0 aralıkta değilse $\beta_1$ %5'te anlamlı :: GA ile test
F Rastgele olan aralık, $\beta_1$ sabit :: Doğru yorum
H u6b.1 Pay = $1.96 \times 0.48$. Alt uç = $-2.28$ − pay, üst uç = $-2.28$ + pay.
H u6b.2 $\Delta x = -2$. $\beta_1$'in güven aralığının uçlarını $-2$ ile çarp, sonra küçükten büyüğe sırala.
H u6b.3 GA = %5'te reddedilemeyen değerler. 0 aralığın dışındaysa ne olur?
H u6b.4 Rastgele olan aralık mı, $\beta_1$ mi?
H u6b.5 %99 iki taraflı: her kuyrukta %0.5. $\Phi(z) = 0.995$ olan $z$?
H u6b.6 %95 güven aralığı, %5'lik iki taraflı testte reddedilemeyen değerlerin kümesidir.
H u6b.7 Aralığın merkezi bilinen bir sayı olmalı (şapkalı mı şapkasız mı?). %95 için kritik değer kaç?
H u6b.8 $\beta_1$'in güven aralığının iki ucunu da $\Delta x$ ile çarp.
H u6b.9 $\hat\beta_1 \pm 1.96 \times SE(\hat\beta_1)$; **eğimin** standart hatası 0.04.
H u6b.10 Önce $\beta_1$ için aralığı bul: $0.45 \pm 1.96 \times 0.03$. Sonra iki ucu 5 ile çarp.

# u6c
F $E(Y\mid D=0) = \beta_0$ :: Referans grubun ortalaması
F $E(Y\mid D=1) = \beta_0 + \beta_1$ :: Diğer grubun ortalaması
F $\beta_1 = E(Y\mid D=1) - E(Y\mid D=0)$ :: İki grubun farkı
F Kukla = dummy = indicator = binary :: 0/1 değişken
H u6c.1 Modele önce $D = 0$, sonra $D = 1$ koy; iki ortalamayı yaz. Aralarındaki fark ne?
H u6c.2 STR < 20 → $D = 1$. Modele $D = 1$ koy: $\hat\beta_0 + \hat\beta_1$.
H u6c.3 Modele $D = 0$ koy: geriye ne kalır?
H u6c.4 0/1 değişkenin İngilizcedeki diğer iki adı hangileri?
H u6c.5 "Binary" = ikili. Kadın/erkek, evet/hayır gibi.
H u6c.6 Kitapta 0/1 değerli regresörler için kullanılan "kukla" kelimesinin İngilizcesi.
H u6c.7 Kukla katsayısı iki grubun ortalama farkıdır. $-2.61 \pm 1.96 \times 0.25$ hesapla.

# u6d
F Homoskedastik: $\text{var}(u\mid X) = \sigma^2$ (sabit) :: Yayılım her yerde aynı
F Heteroskedastik: $\text{var}(u\mid X)$, $X$ ile değişir :: Huni şekli
F $\text{var}(\hat\beta_1) = \dfrac{\sigma_u^2}{n\,\sigma_X^2}$ :: Sadece homoskedastisite altında
F Robust SE her durumda geçerli; R/Python varsayılanı homoskedastisite SE'si :: Her zaman robust kullan
H u6d.1 Homoskedastisite koşullu ortalamayla mı ilgili, koşullu varyansla mı?
H u6d.2 Hangi standart hata heteroskedastisiteye "dayanıklı"?
H u6d.3 Ders notu: yazılımın varsayılanı hangi SE? Dayanıklı olan için ekstra bir seçenek (HC1) gerekiyordu.
H u6d.4 Hata varyansı büyürse belirsizlik artar; $n$ ve $\text{var}(X)$ büyürse azalır. Hangi kesir buna uyuyor?
H u6d.5 Yayılım $X$ ile değişiyorsa varyans sabit midir?
H u6d.6 Her iki durumda da geçerli olan SE hangisiydi?
H u6d.7 "Hetero" = farklı, "skedastic" = yayılım. Hangi terimin yayılımı?
H u6d.8 WLS'yi uygulamak için her gözlemin hata varyansını (ağırlıkları) bilmen gerekir. Bunu pratikte biliyor musun?
H u6d.9 "Homo" = aynı. Hata varyansı $X$'in her değerinde aynı mı?
H u6d.10 Yansızlık ve tutarlılık için hangi varsayımlar yeterliydi? Homoskedastisite bu listede var mı?
H u6d.11 Hangi formül hatalar homoskedastik olsa da olmasa da geçerlidir?
H u6d.12 Homoskedastik varyans: $\sigma_u^2/(n\sigma_X^2)$. Paydadaki $n\sigma_X^2$ örneklemde hangi toplama karşılık gelir?

# u6e
F Varsayım 1–4 (homoskedastisite dahil) ⇒ OLS = BLUE :: Gauss–Markov (normallik gerekmez)
F BLUE = Best Linear Unbiased Estimator :: En küçük varyanslı doğrusal yansız
F Varsayım 1–5 ⇒ $t \sim t_{n-2}$ :: Küçük örneklemde tam dağılım
F df $= n-2$; $t_{10}$ için %5 iki yönlü kritik değer 2.228 :: Tablolar sekmesinde t tablosu
H u6e.1 BLUE açılımını hatırla: Best Linear Unbiased Estimator.
H u6e.2 Gauss–Markov hangi ek varsayıma ihtiyaç duyar ve bu varsayım pratikte genelde tutar mı?
H u6e.3 Kaç katsayı tahmin edildi? Serbestlik derecesi $n$ eksi o sayı.
H u6e.4 B-L-U-E harflerini aç: en iyi, doğrusal, yansız, tahminci.
H u6e.5 df = $n - 2 = 10$. Tablolar sekmesindeki t tablosunda df = 10, %5 iki yönlü sütununa bak.
H u6e.6 Hatalar genelde normal ve homoskedastik mi? $n$ büyükse hangi teorem işimizi görür?
H u6e.7 Bu üç varsayım hangi özellikleri garanti eder? BLUE için ek olarak ne gerekiyordu?
H u6e.8 Gauss–Markov koşulları = üç en küçük kareler varsayımı + bir ek varsayım. Normallik bunlardan biri mi?
H u6e.9 Heteroskedastisite altında Gauss–Markov OLS için geçerli değil. Hangi tahminci her gözlemi kendi varyansına göre ağırlıklandırır?
H u6e.10 Bu varsayımlar = en küçük kareler varsayımları + homoskedastisite + normal hatalar. Gözlem sayısı hakkında bir şart var mı?

`;
