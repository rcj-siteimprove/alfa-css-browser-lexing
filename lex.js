import { Lexer } from "@siteimprove/alfa-css";

const { lex } = Lexer;

const inputElement = document.getElementById("input");
const outputElement = document.getElementById("output");

inputElement.addEventListener("keyup", () => {
  const tokens = lex(inputElement.value);
  outputElement.value = JSON.stringify(tokens.toJSON());
});
