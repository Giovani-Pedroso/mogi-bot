import { PollyClient, ListLexiconsCommand } from "@aws-sdk/client-polly";
import AWS from "aws-sdk";
import fs from "fs";

AWS.config.update({ region: "us-east-1" });

const polly = new AWS.Polly();
const params = {
  OutputFormat: "mp3", // You can also use 'ogg_vorbis' or 'pcm'
  Text: "Hello, this is a sample text to be synthesized.",
  VoiceId: "Joanna", // Choose voice (e.g., Joanna, Matthew, Kendra, etc.)
};
// Synthesize speech
polly.synthesizeSpeech(params, (err, data) => {
  if (err) {
    console.log("Error synthesizing speech:", err);
  } else if (data.AudioStream instanceof Buffer) {
    // Save the audio stream to a file or play it directly
    // For example, save to a file
    const outputFile = "output.mp3";
    fs.writeFileSync(outputFile, data.AudioStream);
    console.log(`Speech synthesized and saved to ${outputFile}`);
  } else {
    console.log("Unexpected data format returned");
  }
});
const command = new ListLexiconsCommand({});

const getSound = async (text: string) => {
  console.log(text);
};

getSound("hllo");
