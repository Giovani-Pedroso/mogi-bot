import axios from "axios";
import AWS from "aws-sdk";

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: "us-east-1", // e.g., 'us-east-1'
});

const main = async () => {
  const x = await axios.get(
    "https://bedrock.us-east-1.amazonaws.com/foundation-models",
    {
      headers: {
        Authorization: process.env.AUTH,
        "X-Amz-Security-Token": process.env.SEC,
      },
    },
  );
  console.log(x.data);
};

main();
