// functions.js

document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll("picture img");
    const nextBtn = document.getElementById("nextBtn");
    const messageBtn = document.getElementById("messageBtn");
    const messageBox = document.getElementById("messageBox");

    let currentIndex = 0;
    const imagesPerSet = 3;

    // Messages from friends
    const messages = [
        "Happy 18th Birthday Panchot. I am grateful nga nakaila taka and naka build og friendship, ka remember pajud ko atong pag grade 10 nga hapit ka ma slide, and bisan sabaan kaauyo na imong baba. Once again, Happy Birthday and I hope that your college life will be filled with love and joy that you wanted.-Leo",
        "Watzapp gurl, happy 18th birthday! 🎉🥳 I’m so grateful you came into my life. Our friendship started in grade 10, And karon mag college nata. Ka strong sa ato friendship. I treasure every moment we’ve shared and all the laughter you bring. Your humor brightens our days, and I admire your kindness and support. As you celebrate this milestone, I wish you a great day filled with love and joy. May this year bring you blessings and opportunities, and makapasar ta sa  CTU! I’m so lucky to have you as my best friend. Labb youu so much! Happy birthday! 🥰😘-Ella",
        "Hi dear happy 18th birthday to you. I hope you achieve your goals in life and I hope you're happy to the path that you have chosen. And we all know that life's getting tougher but still we should stand and remain strong despite of it. Also, I want you to know that you should embrace yourself just like how you embrace others. Remember, only yourself can help you to fight to all battles that is ahead of you maong don't be too hard in yourself. We love you! Once again, happy birthday.- Carol",
        "Happy Birthday Pancho , thank you for being my friends bahalag sungugan ka usahay unta friends ra gehapon ta ninyo hantod hantod-Matt"
        ,"Happy Birthday Nicole! I wish you the best of luck sa mga upcoming college life. Now we slowly face the reality of life and makita gid nato kung unsa gyud ang atong need so mangita natag trabaho kay kapoy napud baya ug tambay sa balay HAHAHAHAH, bitaw thankyou kaayo sa pila ka years nato nga panag-uban since grade 10 ikaw gyud ang pinaka saba sa atong cof ug pinaka bibo nga kauban bisan paman sa times nga naay gyuy misunderstanding pero its part of how we strengthen our ties/friendship now. I witnessed sa inyong relationship ni den² nga iya jud kang gi tarong og hopefully mag dugay pamong duha more anniversaries to come :>. Mao na siguro to Happy Birthday inahan 🎂🥳 🎉 HAHAHAHA say good bye minors 👋.-Rex"
       , "happy birthday kol, hope for you the best in life, e enjoy gyud tanang time samtang dli paka tiguwang, god bless you and happy 18th birthday, bye peace out-Seth"
       ,"happy birthday kol bokol, unta magmapalipayon ka sa imoha adlawng natawhan, e-enjoy imoha adlaw, forget your problems and be free-spirited like the woman you are. for the short span of time, i am filled with your enthusiasm. di man malikayan ang mga panghitabo nga kita di magkasinabot sa tananang butang pero grateful kaayo ko, kami nga nahimo ka nga parte sa amoa kinabuhi. again, happy birthday, happy legality pwede kana mapriso-Ali"
,"Happy 18th birthday Nicole, sorry wala koy vacant para mo attend sa imong birthday🙁..  I'm wishing you that dili ka padala sa stress be happy always, and I miss your little naughty laugh 😳😳😳 HAHAHAHAHHASH. I'm here to remind you and give some advice, nimo sauna palang dili lang mag focus sa past and the future, always enjoy your present, mwah-lore"
,"happy 18th birthday, kol! im very thankful nga nagkaila ta and despite everything we've been through wala ra gihapon nausab ang atoang friendship. I just hope nga ma achieve nimo imong mga pangandoy. life may be hard right now but please be proud of how far you’ve come. Happy birthday!! -Aly"

    ];
    let messageIndex = 0;

    function showImages(startIndex) {
        images.forEach((img, index) => {
            img.style.display = (index >= startIndex && index < startIndex + imagesPerSet) ? "inline-block" : "none";
        });
    }

    nextBtn.addEventListener("click", () => {
        currentIndex += imagesPerSet;
        if (currentIndex >= images.length) {
            currentIndex = 0; // loop back to start
        }
        showImages(currentIndex);
    });

    messageBtn.addEventListener("click", () => {
        messageBox.textContent = messages[messageIndex];
        messageIndex = (messageIndex + 1) % messages.length; // loop through messages
    });

    showImages(currentIndex); // initial display
});
