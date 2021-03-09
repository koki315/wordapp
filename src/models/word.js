import db from "@/firebase/index.js";

const word = class word {
  // ===============================================fetch==================================================================================
  static async fetch(email, channel) {
    const docRef = await db
      .collection("Users")
      .doc(email)
      .collection(channel)
      .get();

    let array = [];
    docRef.forEach((snap) => {
      const id = snap.id;
      const word = snap.data();
      console.log(word);
      array.push({ body: word.body, meaning: word.meaning, id: id });
     
    });
    
    return array;
  }
  // ===============================================add==================================================================================
  static async add(data) {
    console.log(data);
    const addedWord = await db
      .collection("Users")
      .doc(data.email)
      .collection(data.channel)
      .add({
        body: data.body,
        meaning: data.meaning,
      });
    console.log(addedWord);
  }
  // ===============================================delete==================================================================================
  static async delete(email, channel, id) {
    console.log(email, channel, id);
    const deleted = await db
      .collection("Users")
      .doc(email)
      .collection(channel)
      .doc(id)
      .delete();
    return deleted;
  }
  // ===============================================update==================================================================================
  static async update(data) {
    console.log(data);
    const updated = await db
      .collection("Users")
      .doc(data.email)
      .collection(data.channel)
      .doc(data.id)
      .update({
        body: data.body,
        meaning: data.meaning,
      });
    console.log(updated);
    return updated;
  }
};
export default word;
