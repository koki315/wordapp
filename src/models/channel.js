import db from "@/firebase/index.js";

const channel = class Channel {
  constructor({ id, name }) {
    this.id = id;
    this.name = name;
  }

  static async fetchChannel1(email) {
    const channel1 = await db
      .collection("Users")
      .doc(email)
      .collection("channel1")
      .get();
    console.log(channel1);
    const dataOfChannel1 = await channel1.doc();
    console.log(dataOfChannel1);
    return dataOfChannel1;
  }
  static async fetchChannel2(email) {
    const channel2 = await db
      .collection("Users")
      .doc(email)
      .collection("channel2")
      .get();
    console.log(channel2);
    const dataOfChannel2 = await channel2.doc();
    console.log(dataOfChannel2);
    return dataOfChannel2;
  }
  static async fetchChannel3(email) {
    const channel3 = await db
      .collection("Users")
      .doc(email)
      .collection("channel3")
      .get();
    console.log(channel3);
    const dataOfChannel3 = await channel3.doc();
    console.log(dataOfChannel3);
    return dataOfChannel3;
  }

  static create(id, data) {
    return new Channel({
      id,
      name: data.name,
    });
  }
 
};

export default channel;
