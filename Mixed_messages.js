//Mixed messages


//For loading animation
function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  } 
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function headline(){
    console.log('_______________________________________________________');
    console.log('                  The story of a Bear                  ');
    console.log('_______________________________________________________');
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function loading(){
    for(let i = 0; i < 2; i++){
        sleep(300);
        console.clear();
        headline();
        console.log('Loading..');

        sleep(300);
        console.clear();
        headline();
        console.log('Loading...');

        sleep(300);
        console.clear();
        headline();
        console.log('Loading.');

    }
    console.clear();
};
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Bear ascii
function bear(){
    headline();
    console.log('                ██████          ██████');
    console.log('               ██▒   ████████████▒   ██');
    console.log('              ██░  ████████████████   ██');
    console.log('               ████████████████████████');
    console.log('                  ████████████████████');
    console.log('                 ██████████████████████');
    console.log('                ███████ ▒█████▒ ██████');
    console.log('                █████████     ████████');
    console.log('                 █████░   ███   ░████');
    console.log('                  ████▒   ███   ▒███');
    console.log('                    ███▒       ▒██▒');
    console.log('                ▒█████████▓▓▓█████████▒');
    console.log('             ████████████████████████████');
    console.log('         █████████████▒       ▒█████████████');
    console.log('        ██▒  ████████            ████████░ ███');
    console.log('        █▒    █████▒              ██████    ▒█');
    console.log('        ██   ███▒██                ██▒███   ██ ');       
    console.log('         █████  ██                ▒███ ▒█████░');
    console.log('          ░░ ██████░             ░███████ ░░');
    console.log('            ███▒▒▒███           ████▒▒▒███');
    console.log('           ███     ████        ████    ▒███');
    console.log('          ░██       ███░      ███        ██');
    console.log('           ██▒      ▒███      ██▒       ▒██');
    console.log('           ███       ███▒    ▒██       ░██▒');
    console.log('            ███▒    ░████████████▒    ░███');
    console.log('            ████▒▒████ ██████ ████▒▒████');
    console.log('              ▒██████▒          ███████░');
    console.log('_______________________________________________________');
    console.log(generateRandomStory());
    console.log('_______________________________________________________');
};  

// random sentences object
const sent = 'I was born as a bear.';
const sentences ={
    sentence1: ['Hello! How are you?', 
                'Hi! What‘s up?',
                'Nice to meet you! What‘s new?',
                'Hey!',
                'Hey! It’s been a while.'
                ],
    sentence2: ['I want to tell you my story.',
                'Do You want to hear my story? Ofcourse You want',
                'Let‘s start then telling my story.',
                'It would be nice if you listen my story.',
                'I have a wonderful story to tell you!'
                ],
    sentence3: ['Many years ago in The Primorye Forest ' + sent,
                '1536 years ago in The Burmese tropical rain forest ' + sent,
                'Just 10 years ago in The Valdivian Rainforest ' + sent,
                '1000 year before Jesus Christ in the oldest forest of the world ' + sent,
                'Long long time ago in the Lithuanian forest' + sent
                ],
    sentence4: ['I was all alone, just me and my moms necklace from dinosaur teeth and my parents was killed by this dinosaur brother Kilpozaur.',
                'I was living alone since then my parents dead in the lava lake.',
                'I left my parent then they went to find me a food, but then I came back and noticed that my parents is already killed by dinozaur Kilpozaur.',
                'I felt angry for living in this borint cave, so at night when my parents felt asleep I left them and went to search for adventures, but then came back and found out that my parents is already dead.',
                'I was living alone since chilhood because I eaten my parents, because there were nothing to eat.'
                ],
    sentence5: ['Actually, I was happy, they are dead.',
                'I was sooooo depressed of the idea that they are dead and I am all alone.',
                'I thought for once why this is happening to me and suddenly I went to search for more food.',
                'I was crying in another cave for a year!',
                'I just get used to and lived my life.'
                ],
    sentence6: ['The life without parents was hard, I had to do everything by myself. Find me a food, find me friends, girlfriend, clean up my room, wash my fure and so many other things instead of which I woud better sleep under my apple tree and waited for the fallen apple for making Nuton theories.',
                'The life without parents was interesting, I was so independed. I found my own cave, found a girl bear, then we grown up some kidos and then we lived beautifully and happily.',
                'I was so happy that I am alone and I can do anything I want. So, I started build new home for me and my future bear girl, and our kidos.',
                'I was so bored that I am alone, there were no bears...',
                'I was doing nothing and being in nowhere, there were nothing.'
                ],
    sentence7: 'I was living like this all that time, and suddenly happened something strange. I felt like I am in the universe, but it was not universe. There were a lot of microchips and a lot changing colors. Then I realised that I am in computer and the story I tell is not my story, it was created by this program owner. What a horible story actually.'

    

};

function generateRandomNumber(num) {
    // Gets # from 0 -> num - 1
    return Math.floor(Math.random() * num)
};
function generateRandomStory(){

    let story = [ ];

    for(let i = 1; i < 8; i++){

        let ranNumber;

        switch(i){
            case 1:{
                ranNumber = generateRandomNumber(sentences.sentence1.length);
                story.push(sentences.sentence1[ranNumber]);
                break;
            }
            case 2:{
                ranNumber = generateRandomNumber(sentences.sentence2.length);
                story.push(sentences.sentence2[ranNumber]);
                break;
            }
            case 3:{
                ranNumber = generateRandomNumber(sentences.sentence3.length);
                story.push(sentences.sentence3[ranNumber]);
                break;
            }
            case 4:{
                ranNumber = generateRandomNumber(sentences.sentence4.length);
                story.push(sentences.sentence4[ranNumber]);
                break;
            }
            case 5:{
                ranNumber = generateRandomNumber(sentences.sentence5.length);
                story.push(sentences.sentence5[ranNumber]);
                break;
            }
            case 6:{
                ranNumber = generateRandomNumber(sentences.sentence6.length);
                story.push(sentences.sentence6[ranNumber]);
                break;
            }
            case 7:{
                story.push(sentences.sentence7);
                break;
            }

        }
      
    }
    return story.join('\n');
};



///----------------------------------------------------------------------------------------------------------------------------MAIN

function main(){
    
    console.log('\033[2J');
    //Starting a program
    
    headline();
    console.log('Loading.');
    loading();
    //...........................
    bear();
    

    
};main();

