// Configuração de moedas suportadas
const CURRENCY_CONFIG = {
    brl: {
        name: "Real Brasileiro",
        symbol: "R$",
        locale: "pt-BR",
        flag: "./assets/brasil 2.png",
        apiCode: "BRL"
    },
    usd: {
        name: "Dólar Americano",
        symbol: "US$",
        locale: "en-US",
        flag: "./assets/estados-unidos (1) 1.png",
        apiCode: "USD-BRL"
    },
    eur: {
        name: "Euro",
        symbol: "€",
        locale: "de-DE",
        flag: "./assets/euro.png",
        apiCode: "EUR-BRL"
    },
    gbp: {
        name: "Libra Esterlina",
        symbol: "£",
        locale: "en-GB",
        flag: "./assets/libra1.png",
        apiCode: "GBP-BRL"
    },
    btc: {
        name: "Bitcoin",
        symbol: "₿",
        locale: "pt-BR",
        flag: "./assets/bitcoin1.png",
        apiCode: "BTC-BRL"
    }
}

const form = document.getElementById("converterForm")
const fromCurrencySelect = document.querySelector(".currency-select-from")
const toCurrencySelect = document.querySelector(".currency-select")
const amountInput = document.querySelector(".input-currency")
const currencyNameElement = document.getElementById("currency-name")
const currencyFlagElement = document.querySelector(".currency-flag")
const valueFromElement = document.querySelector(".currency-value-from")
const valueToElement = document.querySelector(".currency-value-to")
const fromCurrencyNameElement = document.querySelector(".from-currency .currency-name")
const fromCurrencyFlagElement = document.querySelector(".from-currency img")

const API_URL = "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,GBP-BRL"
let exchangeRates = {}

async function fetchExchangeRates() {
    try {
        const response = await fetch(API_URL)
        if (!response.ok) throw new Error("Erro ao buscar taxas")
        
        const data = await response.json()
        
        exchangeRates = {
            usd: (Number(data.USDBRL.bid) + Number(data.USDBRL.ask)) / 2,
            eur: (Number(data.EURBRL.bid) + Number(data.EURBRL.ask)) / 2,
            gbp: (Number(data.GBPBRL.bid) + Number(data.GBPBRL.ask)) / 2,
            btc: (Number(data.BTCBRL.bid) + Number(data.BTCBRL.ask)) / 2
        }
    } catch (error) {
        console.error("Erro ao buscar taxas de câmbio:", error)
        alert("Erro ao buscar taxas. Verifique sua conexão e tente novamente.")
    }
}

function formatCurrency(value, currencyCode, locale) {
    return new Intl.NumberFormat(locale, {
        style: "currency",
        currency: currencyCode
    }).format(value)
}

function updateSourceCurrency() {
    const selectedCurrency = fromCurrencySelect.value
    const config = CURRENCY_CONFIG[selectedCurrency]
    
    fromCurrencyNameElement.textContent = config.name
    fromCurrencyFlagElement.src = config.flag
    fromCurrencyFlagElement.alt = `Bandeira de ${config.name}`
    
    updateTargetCurrencyOptions()
    convertCurrency()
}

function updateTargetCurrencyOptions() {
    const selectedFromCurrency = fromCurrencySelect.value
    const options = toCurrencySelect.querySelectorAll("option")
    
    options.forEach(option => {
        if (option.value === selectedFromCurrency) {
            option.disabled = true
            option.textContent = option.textContent.split(" (")[0] + " (indisponível)"
        } else {
            option.disabled = false
            option.textContent = option.textContent.replace(" (indisponível)", "")
        }
    })
}

function updateTargetCurrency() {
    const selectedCurrency = toCurrencySelect.value
    const config = CURRENCY_CONFIG[selectedCurrency]
    
    currencyNameElement.textContent = config.name
    currencyFlagElement.src = config.flag
    currencyFlagElement.alt = `Bandeira de ${config.name}`
    
    convertCurrency()
}

function convertCurrency() {
    const amount = Number(amountInput.value) || 0
    const fromCurrency = fromCurrencySelect.value
    const toCurrency = toCurrencySelect.value
    const fromConfig = CURRENCY_CONFIG[fromCurrency]
    const toConfig = CURRENCY_CONFIG[toCurrency]
    
    valueFromElement.textContent = formatCurrency(amount, fromCurrency.toUpperCase(), fromConfig.locale)
    
    if (fromCurrency === toCurrency) {
        valueToElement.textContent = formatCurrency(amount, toCurrency.toUpperCase(), toConfig.locale)
    } else if (fromCurrency === "brl") {
        const convertedValue = amount / exchangeRates[toCurrency]
        valueToElement.textContent = formatCurrency(convertedValue, toCurrency.toUpperCase(), toConfig.locale)
    } else if (toCurrency === "brl") {
        const convertedValue = amount * exchangeRates[fromCurrency]
        valueToElement.textContent = formatCurrency(convertedValue, "BRL", toConfig.locale)
    } else if (exchangeRates[fromCurrency] && exchangeRates[toCurrency]) {
        const amountInBRL = amount * exchangeRates[fromCurrency]
        const convertedValue = amountInBRL / exchangeRates[toCurrency]
        valueToElement.textContent = formatCurrency(convertedValue, toCurrency.toUpperCase(), toConfig.locale)
    } else {
        valueToElement.textContent = `${toConfig.symbol} 0,00`
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault()
    convertCurrency()
})

fromCurrencySelect.addEventListener("change", updateSourceCurrency)
toCurrencySelect.addEventListener("change", updateTargetCurrency)
amountInput.addEventListener("input", convertCurrency)

updateTargetCurrencyOptions()
fetchExchangeRates()
