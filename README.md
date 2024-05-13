# Conversor de Moedas

Construção de um Conversor de Moedas utilizando Angular com a API ExchangeRate-API 

**Conteúdo**

- [Instalar e Rodar o Projeto](#instalar-e-rodar-o-projeto)
    - [Dependências Globais](#dependências-globais)
    - [Dependências Locais](#dependências-locais)
    - [Rodar o Projeto](#rodar-o-projeto)
- [Uso do Aplicativo](#uso-do-aplicativo)
    - [Converter Moeda](#converter-moeda)
- [Detalhes Técnicos](#detalhes-técnicos)
    - [Arquitetura do Projeto](#arquitetura-do-projeto)
    - [Serviços Utilizados](#serviços-utilizados)


## Instalar e Rodar o Projeto

Rodar o Conversor de Moedas em sua máquina local é uma tarefa extremamente simples.

### Dependências globais

Você precisa ter duas principais dependências instaladas:

- Node.js v20.11.0 (ou qualquer versão superior) <a href ="#https://kinsta.com/pt/blog/como-instalar-o-node-js/"> Clique aqui para instalar </a>
- Angular v17.3.7 (ou qualquer versão superior) `npm install -g @angular/cli`

### Dependências locais

Com o repositório clonado e as dependências globais instaladas, você pode instalar as dependências locais do projeto:

```bash
npm install
```

```bash
npm install primeng --save
```


### Rodar o projeto

Para rodar o projeto localmente, basta executar o comando abaixo:

```bash
ng serve
```
<br>

## Uso do Aplicativo
Depois de rodas o comando acima, será gerado um link no terminal para o seguinte endereço: `localhost:4200`, ou seja, no próprio dispositivo conectado. Clicando no link, você abrirá o aplicativo no navegador de seu dispositivo. 

### Converter Moeda

Com esta aplicação, o usuário poderá converter valores atraavés de taxas de câmbio atualizadas.

1. Digite o valor que deseja converter.
2. Após feito, o usuário deve selecionar as moedas de origem e de destino da conversão.
3. Por último, basta clicar em converter para obter o valor convertido!

<br>

## Detalhes Técnicos

### Arquitetura do Projeto

A arquitetura do projeto segue uma estrutura comum para aplicativos Angular, com componentes e serviços, organizados de forma modular e reutilizável.

- **Components/:** Contém os componentes Angular utilizados na aplicação. Como HeaderComponent, CurrencyConverter, CurrencySelector e ResultDisplay. Cada componente tem seu próprio diretório contendo arquivos para o template HTML, estilo CSS e lógica TypeScript.

- **Service/:** Contém os serviços Angular responsáveis por fornecer funcionalidades específicas para os componentes. Por exemplo, o currency-converter.service.ts que foi responsável por buscar taxas de câmbio da API ExchangeRate-API.

- **App.component.ts:** O componente raiz da aplicação.

- **App.component.html:** É onde estão sendo chamados os componentes HeaderComponent e o CurrencyConveter. Este último está chamando o CurrencySelector e o ResultDisplay.

- **Assets/:** Pasta para armazenar arquivos estáticos como imagens.

<br>

**Obs:** Em sua maioria, cada componente tem seu próprio estilo, porém, optei por colocar alguns estilos no arquivo CSS principal, para facilitar o uso de variáveis. 

<br>

### Serviços Utilizados

Para a realização deste projeto, utilizei os seguintes serviços:

- currency-converter.service.ts: Responsável por interagir com a API ExchangeRate-API para obter informações sobre taxas de câmbio e realizar conversões de moeda. *(Link da API ficará disponivél até dia 18/05)*

- ReactiveForms | FormControl | ReactiveFormsModule | FormGroup | Validators | --> '@angular/forms'

- Input | ViewChild | Injectable --> '@angular/core'

- CommonModule | --> '@angular/common'

- HttpClient | --> '@angular/common/http'

- DropdownModule | --> 'primeng/dropdown'

- SelectItem | --> 'primeng/api' 

- Observable | --> 'rxjs';

<br>

---
<div align="center">
Feito com ♥ by Lele
