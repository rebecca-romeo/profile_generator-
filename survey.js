const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(`What's your name? Nicknames are also acceptable `, (answer1) => {
  console.log(`Thank you for your valuable feedback: ${answer1}`);

  rl.question(`What's an activity you like doing? `, (answer2) => {
    console.log(`Thank you for your valuable feedback: ${answer2}`);

    rl.question('What do you listen to while doing that? ', (answer3) => {
      console.log(`Thank you for your valuable feedback: ${answer3}`);

      rl.question(`Which meal is your favourite (eg: dinner, brunch, etc.) `, (answer4) => {
        console.log(`Thank you for your valuable feedback: ${answer4}`);

        rl.question(`What's your favourite thing to eat for that meal? `, (answer5) => {
          console.log(`Thank you for your valuable feedback: ${answer5}`);

          rl.question('Which sport is your absolute favourite? ', (answer6) => {
            console.log(`Thank you for your valuable feedback: ${answer6}`);

            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer7) => {
              console.log(`Here is your profile generation:
              Hi, my name is ${answer1}! One of my favourite activies is ${answer2}. While I'm doing that activity, I enjoy listening to ${answer3}. My favourite meal is ${answer4}. For that meal, I really enjoy eating ${answer5}! A sport that I really love to play is ${answer6}. If I had a superpower,it would be: ${answer7}. Thanks for checking out my profile, I hope you got to know me a little bit better!`);
              rl.close();
            }); //7
          }); //6
        }); //5
      }); //4
    }); //3
  }); //2
}); // 1

