<div align="center">

# 💜 Nubank Clone

**Uma recriação da landing page do Nubank — com animações de scroll, SplitText e ScrollSmoother.**

![Preview do projeto](./assets/preview-desktop.png)

[![Deploy](https://img.shields.io/badge/🚀_Deploy-GitHub_Pages-222?style=for-the-badge)](https://tuliovitor.github.io/nubank)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
[![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=black)](https://gsap.com)

</div>

---

## 📌 Sobre o projeto

O **Nubank Clone** é um projeto de portfólio desenvolvido como desafio guiado pelo [DevClub](https://youtube.com.br/canaldevclub), com foco em **animações avançadas com GSAP** e numa implementação CSS cuidadosa, seção por seção.

O objetivo não era só replicar o visual — era entender cada decisão técnica por trás do resultado.

O projeto é uma landing page estática, sem frameworks, com três áreas de atenção:

- **Animações orquestradas** com entrada, saída e scrub via ScrollTrigger
- **Scroll fluido** com ScrollSmoother cobrindo toda a página
- **Responsividade real** — mobile, tablet e desktop pensados separadamente

---

## 🎬 Demonstração

| Desktop | Mobile |
|---|---|
| ![Desktop](./assets/preview-desktop.png) | ![Mobile](./assets/preview-mobile.png) |

---

## ✨ Funcionalidades

- **Hero fullscreen** com imagem de fundo, overlay gradiente e card de conversão lateral
- **SplitText no h1** — cada caractere aparece em sequência com stagger
- **Saída animada no scroll** — hero-text e hero-card saem em direções opostas ao rolar
- **Seção de serviços** com entrada individual em blur + fade por item
- **Seção do cartão** com entradas opostas (cartão da esquerda, texto da direita)
- **CTA e footer** com animações de entrada via ScrollTrigger
- **Totalmente responsivo** — layout adaptado para mobile, tablet e desktop

---

## 🧱 Stack

| Tecnologia | Uso |
|---|---|
| HTML5 semântico | Estrutura completa da página |
| CSS3 com custom properties | Design system, layout e responsividade |
| JavaScript vanilla | Configuração e orquestração das animações |
| GSAP + ScrollTrigger | Animações de entrada, saída e scrub |
| GSAP ScrollSmoother | Scroll fluido em tela inteira |
| GSAP SplitText | Animação caractere por caractere no hero |

> Nenhuma dependência de frontend além do GSAP. Zero `npm install`. Um único `index.html`.

---

## 🗂️ Estrutura do projeto

```
nubank/
├── index.html          # Estrutura da página
├── styles.css          # Design system + responsividade
├── scripts.js          # Toda a lógica GSAP
└── assets/
    ├── logo.webp
    └── background.webp
```

---

## 🧠 Decisões técnicas

### ScrollSmoother cobrindo tudo

A configuração do ScrollSmoother exige que `#smooth-wrapper` seja `position: fixed` e `#smooth-content` tenha `overflow: visible`. Qualquer desvio quebra o scroll ou esconde seções.

### SplitText com `mask: "lines"`

O `mask: "lines"` impede que os caracteres apareçam fora do elemento durante a animação — sem ele, o texto vaza visualmente antes de entrar na tela.

### Saída do hero via scrub

Os elementos do hero saem em direções opostas (`h1` e botão para cima, card para a direita) com `scrub: 1.2` e `1.5` — valores diferentes criam uma sensação de profundidade sem parallax real.

---

## 📈 Processo de desenvolvimento

| Etapa | O que foi feito |
|---|---|
| 01 | Estrutura HTML e design system no CSS |
| 02 | Hero: layout, overlay e card de conversão |
| 03 | Seção de serviços e card de crédito |
| 04 | CTA, footer e responsividade completa |
| 05 | Configuração do ScrollSmoother |
| 06 | Animações de entrada com ScrollTrigger |
| 07 | SplitText no hero e animações de saída com scrub |
| 08 | Ajustes finos de timing e testes mobile |

---

## 💡 O que eu aprenderia diferente

- Teria configurado o ScrollSmoother logo no início, antes de escrever qualquer animação — ajustar depois exige recalibrar todos os `start/end` dos ScrollTriggers
- Teria separado melhor as animações de entrada das de saída desde o começo, em vez de misturar tudo no mesmo bloco

---

## 👨‍💻 Autor

**TULIO VITOR**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/tuliovitor)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/tuliovitor)

---

<div align="center">

Feito com muito ☕ e muito 💜

</div>
