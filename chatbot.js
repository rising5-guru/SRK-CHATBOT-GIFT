document.addEventListener("DOMContentLoaded", function () {
  // Function to simulate the bot's greeting with typing animation
  function botGreeting() {
    var chatBox = document.getElementById("chatBox");
    var botName = "RAHUL";
    var greeting =
      "Hello! I'm SRK's Bot , Naam to Sunna he hoga , Let's recreate the DDLJ Sence assume that Abb se tu Palak singh nhi meri Simran Singh ho & I m Yours Rahul ";

    displayWithTypingAnimation(chatBox, botName, greeting);
  }

  // Function to simulate typing animation
  function displayWithTypingAnimation(element, name, text) {
    var speed = 15;
    element.innerHTML +=
      '<div class="bot-message"><strong>' + name + ":</strong> ";

    var i = 0;
    function type() {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, speed);
      }
    }

    type();
    element.innerHTML += "</div>";
    scrollToBottom(element);
  }

  // Function to handle user messages
  function sendMessage() {
    var userInput = document.getElementById("userInput").value;
    var chatBox = document.getElementById("chatBox");

    if (userInput.trim() !== "") {
      chatBox.innerHTML +=
        '<div class="user-message"><strong>SIMRAN :</strong> ' +
        userInput +
        "</div>";

      var botName = "Rahul";
      var randomResponses = [
        'Dil toh har kisi ke paas hota hai, lekin sab Dilwale nahi hote.',
        'Sachi mohabbat zindagi main sirf ek baar hoti hai… aur jab hoti hai, toh koi bhagwan ya khuda usse nakamayab nahi hone deta',
        'Hum ek baar jeete hai, ek baar marte hai, shaadi bhi ek baar hoti hai… aur pyaar bhi ek baar hota hai.',
        'Kuch kuch hota hai, Palak, tum nahi samjhogi',
        'Teri aankhon ki namkeen mastiyaan, teri hansi ki beparwah gustakhiyaan, teri zulfon ki lehraati angdaaiyaan, nahi bhoolunga main, jab tak hai jaan, jab tak hai jaan',
        'Teri aankhon ki namkeen mastiyaan, teri hansi ki beparwah gustakhiyaan, teri zulfon ki lehraati angdaaiyaan, nahi bhoolunga main, jab tak hai jaan, jab tak hai jaan',
        'Sometimes, a lot of us men think we are doing everything for the woman we love, but there is an aspect of a woman a man doesn’t understand',
        'Agar yeh tujhe pyaar karti hai to ye palat ke dekhegi…palat…palat!',
        'Tera haath se haath chodna… tera saayon ka rukh modna… tera palat ke phir na dekhna… nahin maaf karoonga main… jab tak hai jaan, jab tak hai jaan. Tere jhoothe kasme vaadon se… tere jalte sulagte khwabon se… teri beraham duaon se… nafrat karoonga main… jab tak hai jaan, jab tak hai jaan.',
        'Mujhe chahiye ek aisi ladki, jisse dekhte hi dil ki har aarzoo, saare khwaab, saare rang zinda ho jaaye. Abhi aisa hua nahin hai, lekin ab aisa lagta hai jaise koi andekha anjaana chehera, baadalon mein se pukaar raha hai. Pata nahin yeh baadal kab hatenge, aur kab woh pukaarne waali saamne aayegi',
        'Rishtey sirf khoon se nahi hote… mohabbat se bhi bante hai.',
        'Main jab bhi aap ko dekhta hoon mujhe Rab dikhta hai. Rab ke samne matha tekta hoon toh dil ko sukoon milta hai. Aap ko hanste hue dekhta hoon toh dil ko aur bhi sukoon milta hai. Toh main toh aapko Rab se bhi zyada pyar karta hoon.',
        'Mohabbat ke zamaane guzar gaye janaab… Ab chote mote pyaar se hi kaam chala lijiye aap',
        'Aisa toh nahi tha ki isse zyada khoobsurat ladki maine dekhi nahi thi… par pata nahi kyun uske chehre se meri nazar hatti nahi thi. Uski aankhein jhuki hui thi aur uski saansein tez… bohot darri hui thi woh. Uska ek baal uski daayin aankh ko pareshaan kar raha thha, woh use jhatakne ki koshish kar rahi thi par hawa tez thhi… baal wahin ka wahin. Maine uske baal hataane ke liye usse apna haath hataya aur usne ghabra ke meri taraf dekha. Hum dono ne pehli baar ek doosre ko dekha. Wo mujhe darr ke maare ghoorti rahi. Fir usne aahista apni nazar jhukaai par main use ghoorta raha',
        'Mujhe darr toh bahut si cheezon se lagta hai… par sabse zyada darr tumhe kho dene ke khayal se lagta hai',
        'Pyaar toh bahut log karte hai … lekin mere jaisa pyar koi nahi kar sakta kyun ki kisi ke paas tum joh nahi ho',
        'Nadi, nadi nahin jismein pani na ho… hawa, hawa nahi jismein ravani na ho… woh shaadi, shaadi nahi jismein prem kahani na ho.',
        'Chandarmukhi iss bhare paimane mein aur sharaab dalogi to kya hoga, chalak jayega. Isi tarah Paro ke naam se bhara pada hai paiman-e-devdas bhi…aur bharogi to chalak jayega',
        'Main aaj bhi usse utni hi mohabbat karta hoon… aur isliye nahi ki koi aur nahi mili… par isliye ki usse mohabbat karne se fursat hi nahi milti.',
        'Koi bhi ullu ka paththa ek sirf angoothi pehna kar tumko mujhse nahi cheen sakta, tum meri ho sirf meri',
        'Itni shiddat se maine tumhe paane ki koshish ki hai, ki har zarre ne mujhe tumse milane ki koshish ki hai. Kehte hain agar kisi cheez ko dil se chaaho to puri kayanat usey tumse milane ki koshish main lag jaati hai',
        'Kabhi kabhi jeetne ke liye kuch haarna padta hai. Aur haar ke jeetne waale ko Baazigar kehte hai.',
        'Waqt ke aage kisi ki nahi chalti, isliye waqt par hi chod dijiye.',
        'Hindi filmon ki tarah, life mein bhi, ant mein sab kuch theek ho jaata hai. Aur agar na ho, toh woh anth nahi hai…picture abhi baaki hai mere doston.',
        'Joker agar baazi bana sakta hai, toh joker baazi bigaad bhi sakta hai',
        'Mujhe andhera pasand hai, tumhare aane wale kal ki yaad dilata hain.',
        'Ask not, what your company can do to you. Ask what you can do to your company.',
        'Sattar minute, sattar minute hai tumhare paas',
        'Yaad rakhna ki duniya ke kisi kone mein koi khush hai, kyun ki tum khush ho',
        'Success is not a good teacher, failure makes you humble',
        'It’s okay to be confused. Confusion is the route to all the clarity in the world',
        'There might come a time when you feel lonely. That is when your creativity will be like your best friend.',
        'As an adult, I have come to understand that there is nothing of more value than your capacity for diligence and your ability to work hard.',
        'Kabhi kabhi dil jodne ke liye, dil todna padta hai. Aur dil todke jodne vale ko… Pata nahi kya kehte hain',
        'Achche insaan hamesha achche kaam karte hai',
        'Vaar karna hai toh saamne wale ke goal par nahi, saamne wale ke dimaag par karo. Goal khud-ba-khud hojayega',
        'Gujarat ki hawa mein vyapar hai saheb… meri saans toh rok loge… lekin iss hawa ko kaise rokoge.',
        'Agar hai jo aap ke liye apni jaan bhi de dega',
        'Pyaar dosti hai. Agar woh meri sabse achi dost nahi ban sakti toh main usse kabhi pyaar kar hi nahi sakta. Kyunki dosti bina toh pyaar hota hi nahi',
        'Kya tumne kabhi bhi, ek din ke liye bhi, ek pal ke liye bhi, mujhse pyar kiya tha?',
        'Pyaar ka pehla kadam dosti hai, aur aakhri bhi… bus beech ke kadam reh gaye hain.',
        'Arrey tu sad hota hai na… main double sad hota hai re.',
        'Jinki zindagi choti hoti hai, unhe bade bade vaade nahi karne chahiye.',
        'Babuji ne kaha gaon chhod do… sab ne kaha Paro ko chhod do… Paro ne kaha sharab chhod do… aaj tumne keh diya haweli chhod do… ek din aayega jab woh kahenge, duniya hi chhod do.',
        'Joh sach sunna chahte hai… woh apni jeb mein pistol aur dil mein nafrat lekar nahi aate',
        'Kismat badi kutti cheez hai, saali kabhi bhi palat jaati hai',
        'Main inteqam ka ek aisa dahekta hua koyla hoon, jiski uthti hui aag ki lapton mein tum sabki zindagiyan aa chuki hai… aur iss jalte hue koyle ki aag mein tum sab bari-bari jalkar raakh ho jaoge.',
        'Pyaar mein jab tak maut se na khelo… milne waali zindagi ka mazaa nahi aata.',
        'Bade bade desho main, aisi choti choti baatein hoti rehti hai.',
        'Sochkar kaun shaadi karta hai?',
        'Beauty products se sirf chehra nikharta hai… khoobsurati nahi badhti.',
        'Connection bhi na kamal ki cheez hai, bas ho gaya toh ho gaya. Wifi Bluetooth se bhi zyada strong hai apna connection, woh sirf star nahin hai, duniya hai meri',
        'Jab hum apne aap ko achi tarah samajh lete hain… toh dusre kya sochte hai, it doesn’t matter… not at all',
        'Udne ki baat parinde karte hai… tutte huye par nahi',
        'Nafrat bahut soch samajhkar karni chahiye, kyunki ek din hum bhi wahi ban jaate hai, jis se hum nafrat karte hai.',
        'Rab sabko same to same khushi nahi dete',
        'Joh taar se nikli hai, woh dhun sabne suni hai… joh saaz pe ghuzri hai, woh kis dil ko pata hai.',
        'Aaj…aaj ek hasi aur baant loon, aaj ek dua aur maang loon, Aaj ek aansoo aur pee loon, aaj ek zindagi aur jee loon… Aaj ek sapna aur dekh loon… Aaj… Kya pata kal ho na ho.',
        'Zindagi mein kuch banna ho, kuch haasil karna ho, kuch jeetna ho toh hamesha apne dil ki suno. Aur agar dil se bhi koi jawaab na aye, To apni aankhen band karke apni maa aur baba ka naam lo… Phir dekhna, har manzil paar kar jaoge, har mushkil asan ho jaegi. Jeet tumhari hogi… Sirf tumhari…',
        'Kehte hain agar kisi cheez ko dil se chaho, toh puri kainaat useh tumse milane ki koshish mein lag jaati hai.',
        'Ajnabiyon ki baat sun leni chahiye… kabhi kabhi ajnabi apno se zyada jaante hain.',
        'Tumhare paas joh hai tumhare hisaab se kam hai… lekin kisi doosre ke nazar se dekho toh tumhare paas bahut kuch hai',
        'Dare hue log aksar alfazon ke peeche chupte hai.',
        'Yadhaash bhi kitni ajeeb cheez hoti hai… kis cheez ko poori zindagi bhoolne ki koshish karo, woh bhoolti nahi… kabhi ek choti si cheez yaad karne ki koshish karo, toh yaad nahi aati',
        'Jab aadmi daulat aur taqat ki wajah se jitna bada hota jaata hai… utna hi sach aur asliyat se door hota jaata hai',
        'Zindagi nikalti jaati hai aur hum sab pyaar ke bina jeena seekh lete hai… kyun pyaar ko mauka nahi dete, kyun apno par vishvas nahi karte'
      ];

      var randomIndex = Math.floor(Math.random() * randomResponses.length);
      var botResponse = randomResponses[randomIndex];

      displayWithTypingAnimation(chatBox, botName, botResponse);

      document.getElementById("userInput").value = "";
      scrollToBottom(chatBox);
    }
  }

  // Function to scroll to the bottom of the chat box
  function scrollToBottom(element) {
    element.scrollTop = element.scrollHeight;
  }

  // Add an event listener to the "Send" button
  document.getElementById("sendButton").addEventListener("click", sendMessage);

  // Call the botGreeting function when the page loads
  botGreeting();
});
