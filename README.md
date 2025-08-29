# Hanzi Pro - Aplicativo de Aprendizado de Chinês

![Captura de Tela do Hanzi Pro](image_6c0dbc.jpg)

Bem-vindo ao Hanzi Pro! Um aplicativo web interativo e moderno, projetado para ajudar estudantes de mandarim a memorizar caracteres chineses (Hanzi) de forma eficiente, utilizando um sistema de repetição espaçada (SRS).

## ✨ Funcionalidades

O Hanzi Pro foi construído com foco em uma experiência de aprendizado eficaz e agradável.

* **📚 Vasto Vocabulário:** Inclui um banco de dados com mais de 5000 palavras, cobrindo os níveis **HSK 1 ao HSK 6**.
* **🧠 Sistema de Repetição Espaçada (SRS):** Utiliza um sistema de estrelas para acompanhar seu progresso. Cada palavra precisa atingir 17 estrelas para ser considerada "masterizada", garantindo uma memorização de longo prazo.
* **🗣️ Aprendizado Contextual:** Cada caractere é apresentado dentro de uma frase de exemplo, ajudando a entender seu uso prático.
* **🔊 Áudio de Qualidade:** Ouça a pronúncia correta de cada palavra e frase para aprimorar sua audição e fala.
* **✅ Feedback Imediato e Interativo:** Receba feedback visual instantâneo para respostas corretas e incorretas, com animações que tornam o aprendizado mais dinâmico.
* **💾 Progresso Salvo no Navegador:** Seu progresso é salvo localmente (`localStorage`), permitindo que você continue seus estudos de onde parou a qualquer momento.
* **🎨 Interface Moderna:** Um design limpo e escuro com fundos animados sutis para uma experiência de estudo focada e sem distrações.

## 🚀 Tecnologias Utilizadas

Este projeto foi construído inteiramente com tecnologias web fundamentais, sem a necessidade de frameworks.

* **HTML5:** Estrutura semântica do conteúdo.
* **CSS3:** Estilização avançada, animações, layout flexbox e fundos dinâmicos.
* **JavaScript (Vanilla JS):** Lógica do aplicativo, manipulação do DOM, gerenciamento de estado e controle do sistema SRS.

## ⚙️ Como Executar Localmente

Como este é um projeto front-end puro, não há necessidade de um processo de build complexo.

1.  Clone o repositório para sua máquina local:
    ```bash
    git clone [https://github.com/seu-usuario/HanyuProject.git](https://github.com/seu-usuario/HanyuProject.git)
    ```
2.  Navegue até o diretório do projeto:
    ```bash
    cd HanyuProject
    ```
3.  Abra o arquivo `public/index.html` diretamente no seu navegador de preferência.

Pronto! O aplicativo estará funcionando.

## 📁 Estrutura do Projeto

```
HanyuProject/
└── public/
    ├── audio/
    │   ├── HSK1/
    │   │   ├── ... (arquivos .mp3)
    │   └── ... (outras pastas HSK)
    ├── image/
    │   ├── check.svg
    │   └── delete.svg
    ├── index.html
    ├── main.js
    └── styles.css
```
* `index.html`: A estrutura principal da página.
* `styles.css`: Contém toda a estilização e as animações.
* `main.js`: O coração do aplicativo. Contém toda a lógica de funcionamento, o sistema de SRS e o vocabulário completo.
* `/audio`: Armazena os arquivos de áudio, organizados por nível HSK.
* `/image`: Contém os ícones e imagens utilizados na interface.

## 📄 Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
