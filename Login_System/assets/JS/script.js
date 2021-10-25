/*login system*/
login = ""
pw = ""

//login button
function captureData(){
    login = document.getElementById("ln").value
    pw = document.getElementById("pw").value
    console.log(login)
    if(login != '' && login != ' '){
      alert('Login efetuado com sucesso!')
    document.getElementById('body').style.background = 'black'
    document.getElementById('main-box').style.display = 'none'
    document.getElementById('forlogin').innerHTML = 'Bem vindo, ' + login + "!"
    document.getElementById('forlogin').style.color = "white"
    document.getElementById('forlogin').style.textAlign = 'center'
    document.getElementById('forlogin').style.fontSize = '10vh'
    document.getElementById('forlogin').style.marginTop = '18%'


  }
}
//cancel button
function abort(){
  window.open('https://github.com/PyMarcus')
  window.close()
}
