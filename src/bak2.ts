
import "dotenv/config";
import { Telegraf } from "telegraf";
import { callbackQuery, message } from "telegraf/filters";
import { Pacient } from "./types/Pacient";
import { replyIdade, replyNome } from "./utils/replies";

const TOKEN = process.env.TOKEN_TELEGRAM as string;
const bot = new Telegraf(TOKEN);

let paciente: any = {
  nome: { value: "", isConfermed: false },
  idade: { value: "", isConfermed: false },
  //botoes
  doencaOrAcanpanhante: { value: false, isConfermed: false },
  temDoenca: { value: false, isConfermed: false },
  estaAconpanhada: { value: false, isConfermed: false },
  marcarConsulta: { value: false, isConfermed: false },
  //botoes
  medico: { value: "", isConfermed: false },
  //botoes
  horario: { value: "", isConfermed: false },
};

const perguntas = [
  "",
  "Ola  tudo bem?  me fale mais sobre você qual seu nome?",
  "Qual a sua idade?",
  "Possue alguma doença, se não coloque ",
];

let step = 0;
bot.start((ctx) => {
  ctx.reply("Ola  tudo bem?  me fale mais sobre você qual seu nome?");
  step = 1;
  // ctx.replyWithQuiz("tar", ["1", "2"]);
});

bot.on(message("text"), (ctx) => {
  switch (step) {
    case 1:
      replyNome(ctx, paciente);
      break;
    case 2:
      replyIdade(ctx, paciente);
      break;
    case 3:
      replyIdade(ctx, paciente);
      break;

    default:
      break;
  }
});
bot.on(callbackQuery("data"), (ctx) => {
  const data = ctx.callbackQuery.data; // all good!
  if (data == "sim") {
    step++;
    ctx.reply(perguntas[step]);
    return;
  }
  paciente[data].value = "";
  ctx.reply("Digite novamente");
  return;
});

bot.launch();
console.log("Bot iniciado");
