window.FORMULAS = String.raw`
## Matematik (Hafta 1)
| Kural | Formül |
| Sabitin toplamı | $\sum_{i=1}^n c = nc$ |
| Sabit dışarı | $\sum cX_i = c\sum X_i$ |
| Ortalama | $\sum X_i = n\bar X$, $\ \sum (X_i-\bar X) = 0$ |
| Tuzaklar | $\sum X_i^2 \ne (\sum X_i)^2$, $\ \sum X_i/Y_i \ne \sum X_i/\sum Y_i$ |
| Çarpım | $\prod c = c^n$ |
| Matris çarpımı | $(m\times n)(n\times p) = m\times p$, genelde $AB\ne BA$ |
| Transpoz | $(AB)' = B'A'$ |
| 2×2 determinant | $|A| = a_{11}a_{22} - a_{12}a_{21}$ |
| 2×2 ters | $A^{-1} = \frac{1}{|A|}\begin{pmatrix} a_{22} & -a_{12} \\ -a_{21} & a_{11}\end{pmatrix}$ |
| Determinant kuralları | $|cA| = c^n|A|$, $\ |AB| = |A||B|$, $\ |A^{-1}| = 1/|A|$ |
| Ters kuralları | $(AB)^{-1} = B^{-1}A^{-1}$, $\ (cA)^{-1} = c^{-1}A^{-1}$ |
| Türev | $\partial a'x/\partial x = a$, $\ \partial x'Ax/\partial x = (A+A')x$ |
| OLS matris | $\hat\beta = (X'X)^{-1}X'Y$ |

## Olasılık I (Hafta 2)
| Kavram | Formül |
| Beklenen değer | $E(Y) = \sum y_jP(Y=y_j)$ |
| Varyans | $\text{var}(Y) = E(Y-\mu)^2 = E(Y^2) - \mu^2$ |
| Bernoulli | $E = p$, $\ \text{var} = p(1-p)$, $\ E(X^k) = p$ |
| Çarpıklık | $E(Y-\mu)^3/\sigma^3$ (>0 sağ kuyruk) |
| Basıklık | $E(Y-\mu)^4/\sigma^4$ (normal = 3) |
| Marjinal | $P(Y=y) = \sum_x P(Y=y,X=x)$ |
| Koşullu | $P(Y=y\mid X=x) = P(Y=y,X=x)/P(X=x)$ |
| LIE | $E(Y) = E[E(Y\mid X)] = \sum_x E(Y\mid X=x)P(X=x)$ |
| Bağımsızlık | $P(Y=y,X=x) = P(Y=y)P(X=x)$ her hücrede |
| Kovaryans | $\text{cov}(X,Y) = E(XY) - \mu_X\mu_Y$ |
| Korelasyon | $\rho = \sigma_{XY}/(\sigma_X\sigma_Y)\in[-1,1]$ |
| Doğrusal birleşim | $E(a+bX+cY) = a+b\mu_X+c\mu_Y$ |
| | $\text{var}(a+bX) = b^2\sigma_X^2$ |
| | $\text{var}(aX+bY) = a^2\sigma^2_X + b^2\sigma^2_Y + 2ab\sigma_{XY}$ |
| | $\text{cov}(a+bX+cV, Y) = b\sigma_{XY} + c\sigma_{VY}$ |

## Olasılık II (Hafta 3)
| Kavram | Formül |
| Standartlaştırma | $Z = (Y-\mu)/\sigma$, $\ P(Y\le c) = \Phi\left(\frac{c-\mu}{\sigma}\right)$ |
| Simetri | $\Phi(-z) = 1-\Phi(z)$ |
| Ki-kare | $\sum_{i=1}^m Z_i^2\sim\chi^2_m$, $\ E = m$, $\ \text{var} = 2m$, $\ \chi^2_1 = Z^2$ |
| t | $Z/\sqrt{W/m}\sim t_m$, $\ t_\infty = N(0,1)$ |
| F | $\frac{W/m}{V/n}\sim F_{m,n}$, $\ F_{m,\infty} = \chi^2_m/m$ |
| Örneklem ortalaması | $E(\bar Y) = \mu$, $\ \text{var}(\bar Y) = \sigma^2/n$ |
| BBK (LLN) | $\bar Y\xrightarrow{p}\mu_Y$ |
| MLT (CLT) | $\bar Y\approx N(\mu, \sigma^2/n)$ |
| Sayım (binom) | $S\approx N(np,\ np(1-p))$ |
| Örneklem | $s^2_X = \frac{1}{n-1}\sum(X_i-\bar X)^2$, $\ r = s_{XY}/(s_Xs_Y)$ |

## İstatistik (Hafta 4)
| Kavram | Formül |
| Yansız | $E(\hat\mu) = \mu$ |
| Tutarlı | $\hat\mu\xrightarrow{p}\mu$ |
| Ağırlıklı tahminci | $E = \mu\sum w_i$, $\ \text{var} = \sigma^2\sum w_i^2$ |
| Standart hata | $SE(\bar Y) = s_Y/\sqrt n$ |
| t istatistiği | $t = (\bar Y - \mu_0)/SE(\bar Y)$ |
| p-değeri, iki yönlü | $2\Phi(-|t|)$ |
| p-değeri, $H_1:\mu>c$ | $1-\Phi(t)$ |
| Güven aralığı | $\bar Y\pm z\cdot SE$: 1.645 (%90), 1.96 (%95), 2.576 (%99) |
| Oran | $SE(\hat p) = \sqrt{\hat p(1-\hat p)/n}$ |
| İki ortalama farkı | $SE = \sqrt{s^2_m/n_m + s^2_w/n_w}$ |
| Kritik değerler | iki yönlü %5: 1.96, tek yönlü %5: 1.645 |

## Regresyon (Hafta 5)
| Kavram | Formül |
| Model | $Y_i = \beta_0 + \beta_1X_i + u_i$ |
| Eğim | $\hat\beta_1 = \frac{\sum(X_i-\bar X)(Y_i-\bar Y)}{\sum(X_i-\bar X)^2} = \frac{s_{XY}}{s^2_X} = r\frac{s_Y}{s_X}$ |
| Sabit | $\hat\beta_0 = \bar Y - \hat\beta_1\bar X$ |
| Tahmin, kalıntı | $\hat Y_i = \hat\beta_0 + \hat\beta_1X_i$, $\ \hat u_i = Y_i - \hat Y_i$ |
| Değişim | $\Delta\hat Y = \hat\beta_1\Delta X$ |
| Cebirsel özellikler | $\sum\hat u_i = 0$, $\ \sum X_i\hat u_i = 0$, $\ \bar Y = \hat\beta_0+\hat\beta_1\bar X$ |
| R² | $R^2 = ESS/TSS = 1 - SSR/TSS = r^2_{XY}$ |
| SER | $\sqrt{SSR/(n-2)}$, birimi $Y$'nin birimi |
| s_Y hilesi | $s_Y = \sqrt{\frac{n-2}{n-1}\cdot\frac{SER^2}{1-R^2}}$ |
| Varsayımlar | $E(u\mid X) = 0$; i.i.d.; $E(X^4), E(Y^4) < \infty$ |
| LIE sonuçları | $E(u) = 0$, $\ E(Xu) = 0$, $\ \text{cov}(X,u) = 0$ |
| Örnekleme | $\hat\beta_1 = \beta_1 + \frac{\sum(X_i-\bar X)u_i}{\sum(X_i-\bar X)^2}$, $\ \text{var}(\hat\beta_1)\propto 1/n$ |

## Çıkarım (Hafta 6)
| Kavram | Formül |
| t testi | $t = (\hat\beta_1 - c)/SE(\hat\beta_1)$ |
| Güven aralığı | $\hat\beta_1\pm1.96\,SE(\hat\beta_1)$ |
| ΔX etkisi | $[(\hat\beta_1 - 1.96SE)\Delta x,\ (\hat\beta_1+1.96SE)\Delta x]$ |
| Kukla | $E(Y\mid D=0) = \beta_0$, $\ E(Y\mid D=1) = \beta_0+\beta_1$ |
| Homoskedastik | $\text{var}(u\mid X) = \sigma^2$, $\ \text{var}(\hat\beta_1) = \sigma^2_u/(n\sigma^2_X)$ |
| Gauss–Markov | LSA 1–3 + homoskedastisite ⇒ OLS BLUE |
| Normal hatalar | $t\sim t_{n-2}$ |
`;
