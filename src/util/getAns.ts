import "dotenv/config";
import {
  BedrockRuntimeClient,
  InvokeModelCommand,
} from "@aws-sdk/client-bedrock-runtime";

export const getAns = async (question: string) => {
  const client = new BedrockRuntimeClient({ region: "us-east-1" });

  console.log(question);
  const input = {
    modelId: "anthropic.claude-3-sonnet-20240229-v1:0",
    contentType: "application/json",
    accept: "application/json",
    body: JSON.stringify({
      anthropic_version: "bedrock-2023-05-31",
      max_tokens: 1000,
      messages: [
        {
          role: "user",
          content: [
            {
              type: `text`,
              text: `responda essa pergunta como um agente de saude chamada samIA de maneira informal , humanizada , gentil e com delicadeza, para uma pessoa: ${question}`,
            },
          ],
        },
      ],
    }),
  };

  const command = new InvokeModelCommand(input);
  const response = await client.send(command);
  const rawRes = response.body;
  const jsonString: any = new TextDecoder().decode(rawRes);
  const json = JSON.parse(jsonString);
  const textAns = json.content[0].text;
  // console.log(textAns);
  return textAns;
};

// getAns("Duvidas prenatal");
