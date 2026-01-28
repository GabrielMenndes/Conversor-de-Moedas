# 💱 Conversor de Moedas

Um conversor de moedas moderno e responsivo que permite converter Real Brasileiro para as principais moedas internacionais em tempo real.

![License](https://img.shields.io/badge/license-MIT-green.svg)
![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)

## ✨ Características

- 🔄 **Conversão Bidirecional Completa** - Converta entre QUALQUER moeda (Real ↔ Dólar ↔ Euro ↔ Libra ↔ Bitcoin)
- 💰 **6 Moedas Suportadas** - Real, Dólar, Euro, Libra Esterlina, Bitcoin e Real Brasileiro
- 🚫 **Validação Inteligente** - A moeda de origem fica desabilitada no dropdown de destino
- 📱 **Design Responsivo** - Funciona perfeitamente em desktop, tablet e mobile
- 🎨 **Interface Moderna** - Design limpo e intuitivo com gradiente vibrante
- ⚡ **Performance** - Carregamento rápido e sem dependências externas
- 🌐 **Suporte Multilíngue** - Formatação de moeda localizada

## 🚀 Começando

### Pré-requisitos

- Navegador moderno (Chrome, Firefox, Safari, Edge)
- Conexão com a internet

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/Conversor-de-Moedas.git
```

2. Navegue até o diretório do projeto:
```bash
cd Conversor-de-Moedas
```

3. Abra o arquivo `index.html` no seu navegador favorito:
```bash
# No Windows
start index.html

# No macOS
open index.html

# No Linux
xdg-open index.html
```

Ou use um servidor local:
```bash
# Com Python 3
python -m http.server 8000

# Com Python 2
python -m SimpleHTTPServer 8000

# Com Node.js (http-server)
npx http-server
```

Acesse `http://localhost:8000` no seu navegador.

## 📖 Como Usar

1. **Selecione a Moeda de Origem**: Escolha de qual moeda você quer converter (Real, Dólar, Euro, Libra, Bitcoin)
2. **Selecione a Moeda de Destino**: Escolha para qual moeda quer converter (a moeda selecionada como origem fica desabilitada)
3. **Digite o Valor**: Insira o valor que deseja converter
4. **Clique em Converter ou Pressione Enter**: O resultado será exibido instantaneamente
5. **Veja o Resultado**: A conversão aparece no card de resultado com as bandeiras dos países

**Exemplos de Conversão:**
- Real → Dólar
- Dólar → Bitcoin
- Euro → Real
- Libra → Euro
- Bitcoin → Dólar
- Real → Bitcoin
- **E qualquer outra combinação!**

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilos modernos com Flexbox e Gradientes
- **JavaScript (Vanilla)** - Lógica da aplicação sem dependências
- **API AwesomeAPI** - Taxas de câmbio em tempo real

## 📁 Estrutura do Projeto

```
Conversor-de-Moedas/
├── index.html          # Arquivo principal HTML
├── script.js           # Lógica JavaScript
├── styles.css          # Estilos CSS
├── assets/             # Imagens e ícones
│   ├── brasil 2.png
│   ├── estados-unidos (1) 1.png
│   ├── euro.png
│   ├── libra1.png
│   ├── bitcoin1.png
│   ├── Vector.png
│   └── rich-4897_256.gif
└── README.md           # Este arquivo
```

## 🔑 API Utilizada

**AwesomeAPI - Economia**
- Endpoint: `https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,GBP-BRL`
- Sem autenticação necessária
- Atualização de dados em tempo real

## 💻 Funcionalidades Técnicas

### JavaScript Moderno
- Fetch API para requisições HTTP
- Intl.NumberFormat para formatação de moedas localizadas
- Manipulação eficiente do DOM
- Event listeners bem estruturados

### CSS Responsivo
- Media queries para diferentes tamanhos de tela
- Design Mobile-First
- Animações e transições suaves
- Gradientes vibrantes

## 🎯 Melhorias Implementadas

- ✅ Código refatorado com melhor estrutura incluindo Real**
- ✅ **Validação inteligente de moedas (desabilita origem no destino)**
- ✅ Dropdown de origem com todas as moedas disponíveis
- ✅ Dropdown de destino com todas as moedas disponíveis (exceto a selecionada como origem)
- ✅ Nomes de variáveis descritivosescritivos
- ✅ Comentários em JSDoc
- ✅ Seletor baseado em HTML semântico
- ✅ Melhor tratamento de erros
- ✅ Responsividade aprimorada
- ✅ Acessibilidade melhorada
- ✅ Taxas de câmbio cruzadas entre moedas

## 🔐 Segurança e Performance

- Sem dados sensíveis armazenados
- Validação de inputs
- Requisições HTTPS via API
- Otimização de renderização do DOM

## 🌐 Compatibilidade

| Browser | Versão | Status |
|---------|--------|--------|
| Chrome  | 90+    | ✅ Suportado |
| Firefox | 88+    | ✅ Suportado |
| Safari  | 14+    | ✅ Suportado |
| Edge    | 90+    | ✅ Suportado |

## 📝 Changelog

### v1.0.0 (2024) completa
- Suporte a 6 moedas principais (Real, Dólar, Euro, Libra, Bitcoin, Real)
- Interface responsiva
- Validação inteligente (moeda de origem desabilitada no destino)rincipais (Real, Dólar, Euro, Libra, Bitcoin)
- Interface responsiva
- Taxas em tempo real via AwesomeAPI
- Conversão entre qualquer combinação de moedas

## 🤝 Contribuindo

Contribuições são bem-vindas! Para mudanças importantes, abra uma issue primeiro para discutir quais mudanças você gostaria de fazer.

1. Faça um Fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

**Gabriel Mende**
- GitHub: [@GabrielMende](https://github.com/GabrielMende)

## 🙏 Agradecimentos

- [AwesomeAPI](https://awesome-api.com.br/) - Pelas taxas de câmbio em tempo real
- [Google Fonts](https://fonts.google.com/) - Pela fonte Roboto
- Todos os contribuidores e usuários

## 📞 Suporte

Se você tiver dúvidas ou sugestões, abra uma [issue](https://github.com/seu-usuario/Conversor-de-Moedas/issues) ou entre em contato.

---

<p align="center">
  Desenvolvido com ❤️ por Gabriel Mende
</p>
