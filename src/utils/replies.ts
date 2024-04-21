import { Context } from "telegraf";
import { Pacient } from "../types/Pacient";

export const replyNome = (ctx: Context | any, pacient: Pacient): boolean => {
  if (pacient.nome.value == "") {
    pacient.nome.value = ctx.message.text;
    ctx.reply("Essa opcão esta correta?", {
      reply_markup: {
        inline_keyboard: [
          [
            { text: "Sim", callback_data: "sim" },
            { text: "Não", callback_data: "nome" },
          ],
        ],
      },
    });
    return false;
  }
  return false;
};

export const replyIdade = (ctx: Context | any, pacient: Pacient): boolean => {
  if (pacient.idade.value == "") {
    const idade = ctx.message.text;
    if (isNaN(idade)) {
      ctx.reply("Coloque uma opção correta");
      return false;
    }
    pacient.idade.value = ctx.message.text;

    ctx.reply("Essa opcão esta correta?", {
      reply_markup: {
        inline_keyboard: [
          [
            { text: "Sim", callback_data: "sim" },
            { text: "Não", callback_data: "idade" },
          ],
        ],
      },
    });
    return false;
  }
  return false;
};

export const replyDoença = (ctx: Context | any, pacient: Pacient): boolean => {
  ctx.reply("Essa opcão esta correta?", {
    reply_markup: {
      inline_keyboard: [
        [
          { text: "Sim", doen: "sim" },
          { text: "Não", doen: "idade" },
        ],
      ],
    },
  });
  return false;
};

/*
  *


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
  */
