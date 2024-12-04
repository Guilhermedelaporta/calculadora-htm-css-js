// Seleciona o elemento com a classe "display" para exibir o resultado ou a entrada
const display = document.querySelector(".display");

// Seleciona todos os botões dentro do elemento com a classe "buttons"
const buttons = document.querySelectorAll(".buttons button");

// Define uma lista de caracteres especiais que representam operadores matemáticos
const specialChars = ["%", "*", "/", "-", "+", "="];

// Inicializa a variável que armazenará a entrada do usuário
let output = "";

// Função responsável por calcular os valores baseados no botão clicado
const calculate = (btnValue) => {
  // Se o botão clicado for "=" e houver algo no output
  if (btnValue === "=" && output !== "") {
    try {
      // Usa `eval` para avaliar a expressão matemática no output
      // Substitui "%" por "/100" para calcular porcentagens
      output = eval(output.replace("%", "/100"));
    } catch (error) {
      // Caso ocorra um erro (ex.: expressão inválida), exibe "Erro"
      output = "Erro";
    }
  } else if (btnValue === "AC") {
    // Limpa todo o conteúdo do output quando o botão "AC" é pressionado
    output = "";
  } else if (btnValue === "DEL") {
    // Remove o último caractere do output quando o botão "DEL" é pressionado
    output = output.toString().slice(0, -1);
  } else {
    // Impede que caracteres especiais sejam adicionados como primeiro valor
    if (output === "" && specialChars.includes(btnValue)) return;

    // Adiciona o valor do botão pressionado ao output
    output += btnValue;
  }

  // Atualiza o valor do display com o conteúdo do output
  display.value = output;
};

// Adiciona um evento de clique a cada botão
buttons.forEach((button) => {
  // Para cada botão, adiciona um ouvinte de evento que chama a função `calculate`
  button.addEventListener(
    "click",
    (e) => calculate(e.target.dataset.value) // Pega o valor do atributo `data-value` do botão clicado
  );
});
