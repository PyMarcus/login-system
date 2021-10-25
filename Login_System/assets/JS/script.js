/*login system*/
login = ""
pw = ""

function captureData(){
    login = document.getElementById("ln").value
    pw = document.getElementById("pw").value
    if(login != '' || login != ' '){
      alert('Login efetuado com sucesso!')
    document.getElementById('body').style.background = 'black'
    document.getElementById('main-box').style.display = 'none'
    document.getElementById('forlogin').innerHTML = 'Bem vindo, ' + login + "!"
    }

  }
function abort(){
  window.open('https://github.com/PyMarcus')
  window.close()
}
