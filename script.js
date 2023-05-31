function criaCalculadora() {
    return {

        display: document.querySelector('.display'),

        iniciar() {
            this.cliqueBotoes()
        },

        btnParaDisplay(valor) {
            this.display.value += valor
        },

        apagarUmDisplay() {
            this.display.value = this.display.value.slice(0, -1)
        },

        limparDisplay() {
            this.display.value = ''
        },

        realizarConta() {
            let conta = this.display.value

            try {
                conta = eval(conta)   
                this.display.value = conta
            } catch {
                alert('CONTA INVALIDA')
                return
            }
        },

        cliqueBotoes() {
            document.addEventListener('click', (event) => {
                const e = event.target
                console.log(e)

                if (e.classList.contains('btn-num')) {
                    this.btnParaDisplay(e.innerText)
                }

                if (e.classList.contains('btn-del')) {
                    this.apagarUmDisplay()
                }

                if (e.classList.contains('btn-clear')) {
                    this.limparDisplay()
                }

                if (e.classList.contains('btn-eq')) {
                    this.realizarConta()
                }

            })
        },
    }
}

const calculadora = criaCalculadora()
calculadora.iniciar()