import db from "@/firebase/index.js";

const word = class word {
  static async fetch(email, channel) {
    
    const docRef = await db
      .collection("Users")
      .doc(email)
      .collection(channel)
      .get();
   
    let array = [];
    docRef.forEach((snap) => {
     
      const word = snap.data();
      array.push(word);
    });
    return array;
  }

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
};
export default word;
