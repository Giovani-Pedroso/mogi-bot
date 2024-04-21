import * as AWS from "aws-sdk";
import * as fs from "fs";
import * as util from "util";

// Configurar as credenciais da AWS
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID_T,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY_T,
  region: "us-east-1", // Região onde o serviço Polly está disponível
  // secretT: process.env.AWS_SESSION_TOKEN,
});

// Criar uma instância do serviço Polly
const polly = new AWS.Polly();

// Texto a ser convertido em voz
const texto =
  "Olá, este é um exemplo de mensagem de voz gerada pelo serviço Amazon Polly.";

// Tipos de voz disponíveis em português
const vocesDisponiveis = [
  { id: "Ricardo", linguagem: "pt-PT" }, // Português de Portugal (masculino)
  // Português do Brasil (feminino)
  ,
];

// Função para gerar a mensagem de voz
export async function gerarMensagemVoz(textoEntrada: string) {
  const voz = { id: "Camila", linguagem: "pt-BR" };
  const params = {
    Text: textoEntrada,
    OutputFormat: "mp3", // Formato de saída (mp3, ogg_vorbis, pcm)
    VoiceId: voz.id, // ID da voz selecionada
    LanguageCode: voz.linguagem, // Código do idioma da voz
  };

  try {
    const data = await polly.synthesizeSpeech(params).promise();
    if (data.AudioStream instanceof Buffer) {
      // Salvar o arquivo de áudio
      const arquivo = `mensagem_audio.mp3`;
      const escreverArquivo = util.promisify(fs.writeFile);
      await escreverArquivo(arquivo, data.AudioStream);
      console.log(`Arquivo de áudio "${arquivo}" gerado com sucesso!`);
    }
  } catch (err) {
    console.error("Erro ao gerar mensagem de voz:", err);
  }
}
