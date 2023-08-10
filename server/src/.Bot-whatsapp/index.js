const { Client, LocalAuth } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");
const axios = require("axios");
const fnResponse = require("./responses/conversation1");

const client = new Client({
  authStrategy: new LocalAuth(),
});

client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
  console.log("Everything is ready to use the Bot");
});

client.on("message", (message) => {
  if (message.body.toLowerCase() === "oye") {
    client.sendMessage(message.from, "push here?", {});
    client.sendMessage(message.from, "I am here...");
  }
});

//usuario
client.on("message", async (message) => {
  try {
    if (message.body.toLowerCase() === "usuario") {
      const { data } = await axios("https://backsportzone.onrender.com/users");

      const all = data.map((val) => val.email).join("\n");

      client.sendMessage(message.from, all);
    }
  } catch (error) {
    client.sendMessage(message.from, "Intenta denuevo o más tarde");
  }
});

//deporte
client.on("message", async (message) => {
  try {
    if (message.body.toLowerCase() === "deporte") {
      const { data } = await axios(
        "https://backsportzone.onrender.com/deporte"
      );

      const all = data.map((val) => val.deporteName).join("\n");

      client.sendMessage(message.from, all);
    }
  } catch (error) {
    client.sendMessage(message.from, "Intenta denuevo o más tarde");
  }
});

//inventario
client.on("message", async (message) => {
  try {
    if (message.body.toLowerCase() === "inventario") {
      const { data } = await axios(
        "https://backsportzone.onrender.com/inventory"
      );

      const all = data.map((val) => val.article_name).join("\n");

      client.sendMessage(message.from, all);
    }
  } catch (error) {
    client.sendMessage(message.from, "Intenta denuevo o más tarde");
  }
});

module.exports = client;

// async function dataVal() {
//   const { data } = await axios("https://backsportzone.onrender.com/users");

//   const all = data.map((val) => val.email).join("\n");

//   console.log(all);
// }
// console.log(dataVal());
