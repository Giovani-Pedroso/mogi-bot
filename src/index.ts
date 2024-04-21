import "dotenv/config";
import { Telegraf } from "telegraf";
import { callbackQuery, message } from "telegraf/filters";
import { getAns } from "./util/getAns";

const TOKEN = process.env.TOKEN_TELEGRAM as string;
const bot = new Telegraf(TOKEN);

const NOME_BOT = "SamIA";

bot.start(async (ctx) => {
  await ctx.replyWithPhoto({
    source: "./src/public/09b8252c-e0d7-489b-9e20-39ab2d8209d3.jpeg",
  });
  await ctx.reply(
    `Oii eu sou a ${NOME_BOT} sou a inteligencia artificial da secretaria de saude de Mogi, como posso estar ajudando vc`,
  );
  // ctx.reply("Ola  tudo bem?  me fale mais sobre você qual seu nome?");
  // step = 1;
  // ctx.replyWithQuiz("tar", ["1", "2"]);
});
// bot.

bot.command("agendar", (ctx) => {
  ctx.reply("Qual desse horarios voce prefere?", {
    reply_markup: {
      inline_keyboard: [
        [
          { text: "15/05/2024", callback_data: "sim" },
          { text: "18/05/2024", callback_data: "sim" },
          { text: "20/05/2024", callback_data: "sim" },
        ],
      ],
    },
  });
});

bot.command("caderneta", async (ctx) => {
  await ctx.reply(
    "Estamos enviando uma copia da sua caderneta espere um pouco 🥳",
  );
  await ctx.replyWithDocument({ source: "./src/public/cardeneta.pdf" });
});

bot.on(message("text"), async (ctx) => {
  const textOfMensage = ctx.update.message.text;
  console.log(textOfMensage);
  ctx.reply("Voce é a primeira da fila, só um momento");
  const ans = await getAns(textOfMensage);
  ctx.reply(ans);
  console.log(ans);
});

bot.on(callbackQuery("data"), (ctx) => {
  ctx.reply("Consulta agendada com a Dra.Ana as 14:00");
});

bot.launch();
console.log("Bot iniciado");
