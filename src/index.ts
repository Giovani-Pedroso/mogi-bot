import "dotenv/config";
import { Telegraf } from "telegraf";
import { callbackQuery, message } from "telegraf/filters";
import { Pacient } from "./types/Pacient";
import { replyIdade, replyNome } from "./utils/replies";

const TOKEN = process.env.TOKEN_TELEGRAM as string;
const bot = new Telegraf(TOKEN);

const NOME_BOT = "SamAI";

bot.start(async (ctx) => {
  await ctx.replyWithPhoto({
    source: "./src/public/09b8252c-e0d7-489b-9e20-39ab2d8209d3.jpeg",
  });
  await ctx.reply(`Ola eu sou a ${NOME_BOT} sou a inteligencia artificial da secretaria de saude de Mogi
            UMA_FRASE_MOTIVACIONAL comigo voce pode /agendar uma consulta, conseguir uma copia da sua /caderneta prenatal ou voce pode converçar comigo sober qualquer duvida sobre gravidez`);
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
    "Estamos enviando uma copia da sua caderneta espere um pouco",
  );
  await ctx.replyWithDocument({ source: "./src/public/cardeneta.pdf" });
});

bot.on(callbackQuery("data"), (ctx) => {
  ctx.reply("Consulta agendada com a Dra.Ana as 14:00");
});

bot.launch();
console.log("Bot iniciado");
