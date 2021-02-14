document.querySelector("button").addEventListener("click", buscaCep);

function buscaCep() {
  let inputCep = document.querySelector("input#cep");
  let cep = inputCep.value.replace("-", "");
  let url = `http://viacep.com.br/ws/${cep}/json`;

  // let xhr = new XMLHttpRequest();
  // xhr.open("GET", url, true);
  // xhr.onreadystatechange = function () {
  //   if (xhr.readyState == 4) {
  //     if ((xhr.status = 200)) {
  //       completaCampos(JSON.parse(xhr.responseText));
  //     }
  //   }
  // };
  // xhr.send();

  fetch(url).then((response) => {
    response.json().then((data) => {
      if (data.erro) {
        cepInvalido();
        return;
      }
      completaCampos(data);
    });
  });
}

function cepInvalido() {
  alert("CEP invalido");
}

function completaCampos(endereco) {
  const rua = document.querySelector("#rua");
  rua.value = endereco.logradouro;
  rua.disabled = true;

  const bairro = document.querySelector("#bairro");
  bairro.value = endereco.bairro;
  bairro.disabled = true;

  const cidade = document.querySelector("#cidade");
  cidade.value = endereco.localidade;
  document.querySelector("#cidade").disabled = true;

  const estado = document.querySelector("#estado");
  estado.value = endereco.uf;
  estado.disabled = true;
}
