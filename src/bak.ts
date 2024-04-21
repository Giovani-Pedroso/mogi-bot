import "dotenv/config";
import { Telegraf } from "telegraf";
import { message } from "telegraf/filters";

let step = 0;
const user = {
  nome: { value: "", isConfermed: false },
  idade: { value: "", isConfermed: false },
};
const TOKEN = process.env.TOKEN_TELEGRAM as string;
const bot = new Telegraf(TOKEN);
bot.start((ctx) => {
  ctx.reply("Ola  tudo bem?  me fale mais sobre você qual seu nome?");
  step = 1;
  // ctx.replyWithQuiz("tar", ["1", "2"]);
});

bot.on(message("text"), (ctx) => {
  if (step == 1) {
    if (user.nome.value == "") {
      user.nome.value = ctx.text;
      ctx.reply("Essa informação esta correta? (sim/nao)");
    } else if (!user.nome.isConfermed) {
      if (ctx.message.text[0].toLowerCase() == "s") {
        ctx.reply("Qual a sua idade?");
        step = 2;
      } else {
        ctx.reply("Digite seu nome novament");
        user.nome.value = "";
      }
    }
  }
  if (step == 2) {
    if (user.idade.value == "") {
      user.idade.value = ctx.text;
      ctx.reply("Essa informação esta correta? (sim/nao)");
    } else if (!user.idade.isConfermed) {
      if (ctx.message.text[0].toLowerCase() == "s") {
        ctx.reply("Qual a sua idade?");
        step = 3;
      } else {
        ctx.reply("Digite seu nome novament");
        user.idade.value = "";
      }
    }
  }
});
console.log();
bot.launch();
