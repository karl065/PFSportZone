class fnResponse {
  constructor(client) {
    this.client = client;
  }

  userFn() {
    return async (message) => {
      try {
        if (message.body.toLowerCase() === 'usuario') {
          const {data} = await axios(
            'https://backsportzone.onrender.com/users'
          );

          const all = data.map((val) => val.email).join('\n');

          this.client.sendMessage(message.from, all);
        }
      } catch (error) {
        this.client.sendMessage(message.from, 'Intenta denuevo o más tarde');
      }
    };
  }
}

module.exports = fnResponse;
