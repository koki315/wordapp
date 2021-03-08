import db from "@/firebase/index.js";

const user = class User {
  static async addUser(userData, name1, name2, name3) {
    console.log(userData.email);
    const id = userData.email;
    console.log(db);
    const docRef = await db
      .collection("Users")
      .doc(id)
      .set({
        nameOfChannel1: "channel1",
        nameOfChannel2: "channel2",
        nameOfChannel3: "channel3",
      });

    db.collection("Users")
      .doc(id)
      .collection(name1)
      .add({ body: "example1", meaning: "例1" });
    db.collection("Users")
      .doc(id)
      .collection(name2)
      .add({ body: "example2", meaning: "例2" });
    db.collection("Users")
      .doc(id)
      .collection(name3)
      .add({ body: "example3", meaning: "例3" });
  }

  static async fetch(email) {
    console.log(email);
    const docRef = await db
      .collection("Users")
      .doc(email)
      .get();
    console.log(docRef.data());
    const data = docRef.data();
    return data;
  }

  static async update(email, name1, name2, name3) {
    console.log(email);
    const userRef = db.collection("Users").doc(email);
    console.log(userRef);
    await userRef.update({
      nameOfChannel1: name1,
      nameOfChannel2: name2,
      nameOfChannel3: name3,
    });
  }
};

export default user;
