import "dotenv/config";
import {
  BedrockRuntimeClient,
  InvokeModelCommand,
} from "@aws-sdk/client-bedrock-runtime";

// Create a BedrockRuntimeClient with your configuration
const client = new BedrockRuntimeClient({ region: "us-east-1" });

const question = "Give me 5 random cat names";
const prompt = `
Como vc pode melhorar a saude
`;

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
            type: "text",
            text: prompt,
          },
        ],
      },
    ],
  }),
};

// Create an InvokeModelCommand with the input parameters
const main = async () => {
  const command = new InvokeModelCommand(input);

  // Send the command to invoke the model and await the response
  const response = await client.send(command);
  // console.log("-------------------");
  // console.log("---Full Response---");
  // console.log("-------------------");
  // console.log(response);

  const rawRes = response.body;

  // Convert it to a JSON String
  const jsonString: any = new TextDecoder().decode(rawRes);
  // console.log(jsonString);

  // Parse the JSON string
  const json = JSON.parse(jsonString);
  console.log(json.content[0].text);

  //
  // console.log("-------------------------");
  // console.log("---Pased Response Body---");
  // console.log("-------------------------");
  // // Answers are in parsedResponse.completion
  // console.log(parsedResponse);
  // console.log("-------------------------");
};
main();

// response.body = Uint8ArrayBlobAdapter(65) [Uint8Array] [
//   123,  34,  99, 111, 109, 112, 108, 101, 116, 105, 111,
//   110,  34,  58,  34,  32,  73,  39, 109,  32, 119, 101,
//   108, 108,  44,  32, 116, 104,  97, 110, 107, 115,  33,
//    34,  44,  34, 115, 116, 111, 112,  95, 114, 101,  97,
//   115, 111, 110,  34,  58,  34, 115, 116, 111, 112,  95,
//   115, 101, 113, 117, 101, 110,  99, 101,  34, 125
// ]

// Save the raw response
