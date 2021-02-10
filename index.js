document.querySelector("button").addEventListener("click", buscaCep);

function buscaCep() {
  let inputCep = document.querySelector("input#cep");
  let cep = inputCep.value.replace("-", "");
  let url = "http://viacep.com.br/ws/" + cep + "/json";

  let xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      if ((xhr.status = 200)) {
        completaCampos(JSON.parse(xhr.responseText));
      }
    }
  };
  xhr.send();
}

function completaCampos(endereco) {
  document.querySelector("#rua").value = endereco.logradouro;
  document.querySelector("#rua").disabled = true;
  document.querySelector("#bairro").value = endereco.bairro;
  document.querySelector("#bairro").disabled = true;
  document.querySelector("#cidade").value = endereco.localidade;
  document.querySelector("#cidade").disabled = true;
  document.querySelector("#estado").value = endereco.uf;
  document.querySelector("#estado").disabled = true;
}
