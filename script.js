const userCorreto = "admin"
const senhaCorreta = "123abc"

const start = () => {
    const loginEvent = document.getElementById('loginButton')
    loginEvent.onclick = fazerLogin
}

const fazerLogin = () => {

    const user = document.getElementById('userInput').value
    const senha = document.getElementById('senhaInput').value



    if (user === userCorreto && senha === senhaCorreta) {
        window.open('../logado.html')
        const p = document.getElementById('pError')
        p.textContent = "Sucesso!"
        p.style.color = "green"
    } 
    if(user == "" || senha == ""){
        const p = document.getElementById('pError')
        p.textContent = "Dados obrigatorios"
        p.style.color = "red"
        p.style.fontSize = "24px"
    }
    else {
        const p = document.getElementById('pError')
        p.textContent = "Usuário e/ou senha errado"
        p.style.color = "red"
        p.style.fontSize = "24px"

    }
}

start()