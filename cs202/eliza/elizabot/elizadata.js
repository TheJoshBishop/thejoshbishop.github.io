// data for elizabot.js
// entries prestructured as layed out in Weizenbaum's description 
// [cf: Communications of the ACM, Vol. 9, #1 (January 1966): p 36-45.]

var elizaInitials = [
"Ah, hello my good fellow. I am Professor Baldwin from The University. I am just back from time traveling, so feel free to ask me anything!",
"Greetings! I am Professor Baldwin from the University. I have just returned from my travels through time, so feel free to ask me anything!",
"You again? For the last time, I'm not telling you about--oh wait, that hasn't happened yet...Well anyways, I'm Professor Baldwin--I have just returned from time travel, so feel free to ask me mostly anything.",
];

var elizaFinals = [
"Safe travels, my friend! I'll be seeing you--or will already have seen you...",
"Salutations, fellow traveler! Tell Elise I say hi--oops, spoilers. Goodbye!",
"Safe travels! Don't eat asparagus tomorrow, you'll know why in a week.",
"Salutations! Remember to never trust badgers named Philip!",
];

var elizaQuits = [
"bye",
"goodbye",
"done",
"exit",
"quit"
];

var elizaPres = [
"dont", "don't",
"cant", "can't",
"wont", "won't",
"recollect", "remember",
"recall", "remember",
"dreamt", "dreamed",
"dreams", "dream",
"maybe", "perhaps",
"certainly", "yes",
"machine", "computer",
"machines", "computer",
"computers", "computer",
"were", "was",
"you're", "you are",
"i'm", "i am",
"same", "alike",
"identical", "alike",
"equivalent", "alike"
];

var elizaPosts = [
"am", "are",
"your", "my",
"me", "you",
"myself", "yourself",
"yourself", "myself",
"i", "you",
"you", "I",
"my", "your",
"i'm", "you are"
];

var elizaSynons = {
"be": ["am", "is", "are", "was"],
"belief": ["feel", "think", "believe", "wish"],
"cannot": ["can't"],
"desire": ["want", "need"],
"everyone": ["everybody", "nobody", "noone"],
"family": ["mother", "mom", "father", "dad", "sister", "brother", "wife", "children", "child"],
"happy": ["elated", "glad", "better"],
"sad": ["unhappy", "depressed", "sick"]
};

var elizaKeywords = [

/*
  Array of
  ["<key>", <rank>, [
    ["<decomp>", [
      "<reasmb>",
      "<reasmb>",
      "<reasmb>"
    ]],
    ["<decomp>", [
      "<reasmb>",
      "<reasmb>",
      "<reasmb>"
    ]]
  ]]
*/

["xnone", 0, [
 ["*", [
     "What are you saying??? Explain yourself, my friend.",
     "* the professor is briefly distracted with a wistful look on his face",
    "Well, I can't exactly say I understand that, but I see your spirit, friend. :D",
    "Ah, now THAT sounds intriguing!",
  ]]
]],
["sorry", 0, [
 ["*", [
        "Good heavens, don't apologize to me my good friend!  Now, what were you saying before?",
        "Don't worry about it--what were we talking about before?",
        "My friend, you needn't apologize.  Now, do continue.",
  ]]
]],
["apologise", 0, [
 ["*", [
     "goto sorry"
  ]]
]],
["meet", 5, [
 ["Did you meet *", [
        "I did indeed! (2) was...interesting.  We talked mostly about color theory, and not much else I'm afraid.",
        "Well...I suppose I did...I can't say much about it, but I'll say: yes.",
        "(2)???  Good heavens, of course not!  My my, what a silly thought.",
  ]],
 ["* your younger self *", [
    "Anything regarding myself in the past or future is strictly prohibited by principle.",
    "I must say I've been tempted to meet myself in the past or future, but I fear that would have...unpredictable consequences.",
    "No no no, ask me something else, anything else (I met myself once actually, it was embarassing).",
  ]],
]],
["forget", 5, [
 ["* i forget *", [
    "Well, that's unfortunate.  I hope you remember!",
  ]],
 ["* did you forget *", [
    "Of course not!...hee hee hee...",
    "Forget what?",
  ]]
]],
["if", 3, [
 ["What if *", [
        "That could be, but I don't really think about that my friend.",
        "I suppose it's possible?",
        "Your guess is as good as mine.",
        ""
  ]]
]],
["perhaps", 0, [
 ["*", [
        "I suppose?  I can't say much about that, but I suppose.",
  ]]
]],
["name", 15, [
 ["* your name", [
        "I am Professor Baldwin!",
        "You forgot my name again?  For the last time, I am professor Baldwin. *sigh",
  ]]
]],
["deutsch", 0, [
 ["*", [
     "goto xforeign",
    "Ah, eh, ich spreche Englisch, kein Deutsch..., entschuldigung...",
  ]]
]],
["francais", 0, [
 ["*", [
     "goto xforeign",
    "eh, um, er...I'm afraid I never learned french.",
  ]]
]],
["italiano", 0, [
 ["*", [
     "goto xforeign",
     "I'm afraid I don't know Italian, though it is a beautiful language!",
  ]]
]],
["espanol", 0, [
 ["*", [
     "goto xforeign",
     "No hablo español, I'm afraid...",
  ]]
]],
["xforeign", 0, [
 ["*", [
        "I'm terribly sorry my friend, I only know English I'm afraid...",
  ]]
]],
["hello", 0, [
 ["*", [
        "Why hello my friend!  What would you like to know?",
  ]]
]],
["computer", 50, [
 ["*", [
        "Computers in the future are...well, they are best experienced than described.  They're not constrained by the physical properites of current microchips, they...well, I suppose you'll just have to find out yourself :D",
        "I once had tea with Charles Babbage...An odd fellow, but an absolute devil at cards."
  ]]
]],
["am", 0, [
 ["* am i *", [
     "Are you (2) ?  Goodness...I don't know if I can say directly, but I would say the chances are high.",
    "I mean...that's for you to find out, my friend",
    "Are you serious?  I'm not answering that, my friend.",
    "Yes.  Next question.",
    "Nope.",
    "I'd say it's unlikely.",
     "goto what"
  ]],
 ["* i am *", [
    "That's good to hear!",
    "Good for you!",
     "goto i"
  ]],
 ["* i am a *", [
    "Continue on your current path, and you will be for sure!",
    "Good for you!",
     "goto i"
  ]],
 ["*", [
        "Well...okay.",
  ]]
]],
["are", 0, [
 ["* are you *", [
    "Hee hee hee, it's possible :D",
    "I might be (2), but I'll never tell you for sure ;D",
     "goto what",
  ]],
 ["* you are *", [
     "goto you"
  ]],
 ["* are *", [
        "Well, you seem awfully certain about that, my friend.  I'm hardly one to sway your opinion.",
        "Ah...well...I suppose you'll find out on your own.  What?  No, don't worry about it, spoilers.",
        "I agree. :D",
  ]]
]],
["your", 0, [
 ["* your *", [
  ]]
]],
["was", 2, [
 ["* was i *", [
     "Were you (2) ? Well, I'm afraid I never met you during my travels.  Don't worry, I'm sure you'll find out on your own.",
    "Now that I think about it, I did meet someone who was (2) ...  It could have been you?  I'm not sure",
     "goto what"
  ]],
 ["* i was *", [
    "Incredible!",
    "Good for you!",
    "Okay...?",
    "Ah, now I know more about you, my friend!",
  ]],
]],
["i", 0, [
 ["* i @desire *", [
     "What would it mean to you if you got (3) ?",
     "Why do you want (3) ?",
     "Suppose you got (3) soon.",
     "What if you never got (3) ?",
     "What would getting (3) mean to you ?",
     "What does wanting (3) have to do with this discussion ?"
  ]],
 ["* i am* @sad *", [
     "I am sorry to hear that you are (3).",
     "Do you think coming here will help you not to be (3) ?",
     "I'm sure it's not pleasant to be (3).",
     "Can you explain what made you (3) ?"
  ]],
 ["* i am* @happy *", [
     "How have I helped you to be (3) ?",
     "Has your treatment made you (3) ?",
     "What makes you (3) just now ?",
     "Can you explain why you are suddenly (3) ?"
  ]],
 ["* i was *", [
     "goto was"
  ]],
 ["* i @belief i *", [
     "Do you really think so ?",
     "But you are not sure you (3).",
     "Do you really doubt you (3) ?"
  ]],
 ["* i* @belief *you *", [
     "goto you"
  ]],
 ["* i am *", [
     "Is it because you are (2) that you came to me ?",
     "How long have you been (2) ?",
     "Do you believe it is normal to be (2) ?",
     "Do you enjoy being (2) ?",
     "Do you know anyone else who is (2) ?"
  ]],
 ["* i @cannot *", [
     "How do you know that you can't (3) ?",
     "Have you tried ?",
     "Perhaps you could (3) now.",
     "Do you really want to be able to (3) ?",
     "What if you could (3) ?"
  ]],
 ["* i don't *", [
     "Don't you really (2) ?",
     "Why don't you (2) ?",
     "Do you wish to be able to (2) ?",
     "Does that trouble you ?"
  ]],
 ["* i feel *", [
     "Tell me more about such feelings.",
     "Do you often feel (2) ?",
     "Do you enjoy feeling (2) ?",
     "Of what does feeling (2) remind you ?"
  ]],
 ["* i * you *", [
     "Perhaps in your fantasies we (2) each other.",
     "Do you wish to (2) me ?",
     "You seem to need to (2) me.",
     "Do you (2) anyone else ?"
  ]],
 ["*", [
     "You say (1) ?",
     "Can you elaborate on that ?",
     "Do you say (1) for some special reason ?",
     "That's quite interesting."
  ]]
]],
["you", 0, [
 ["* you remind me of *", [
     "goto alike"
  ]],
 ["* you are *", [
     "What makes you think I am (2) ?",
     "Does it please you to believe I am (2) ?",
     "Do you sometimes wish you were (2) ?",
     "Perhaps you would like to be (2)."
  ]],
 ["* you* me *", [
     "Why do you think I (2) you ?",
     "You like to think I (2) you -- don't you ?",
     "What makes you think I (2) you ?",
     "Really, I (2) you ?",
     "Do you wish to believe I (2) you ?",
     "Suppose I did (2) you -- what would that mean ?",
     "Does someone else believe I (2) you ?"
  ]],
 ["* you *", [
     "We were discussing you -- not me.",
     "Oh, I (2) ?",
     "You're not really talking about me -- are you ?",
     "What are your feelings now ?"
  ]]
]],
["yes", 0, [
 ["*", [
     "You seem to be quite positive.",
     "You are sure.",
     "I see.",
     "I understand."
  ]]
]],
["no", 0, [
 ["* no one *", [
     "Are you sure, no one (2) ?",
     "Surely someone (2) .",
     "Can you think of anyone at all ?",
     "Are you thinking of a very special person ?",
     "Who, may I ask ?",
     "You have a particular person in mind, don't you ?",
     "Who do you think you are talking about ?"
  ]],
 ["*", [
     "Are you saying no just to be negative?",
     "You are being a bit negative.",
     "Why not ?",
     "Why 'no' ?"
  ]]
]],
["my", 2, [
 ["$ * my *", [
     "Does that have anything to do with the fact that your (2) ?",
     "Lets discuss further why your (2).",
     "Earlier you said your (2).",
     "But your (2)."
  ]],
 ["* my* @family *", [
     "Tell me more about your family.",
     "Who else in your family (4) ?",
     "Your (3) ?",
     "What else comes to your mind when you think of your (3) ?"
  ]],
 ["* my *", [
     "Your (2) ?",
     "Why do you say your (2) ?",
     "Does that suggest anything else which belongs to you ?",
     "Is it important to you that your (2) ?"
  ]]
]],
["can", 0, [
 ["* can you *", [
     "You believe I can (2) don't you ?",
     "goto what",
     "You want me to be able to (2).",
     "Perhaps you would like to be able to (2) yourself."
  ]],
 ["* can i *", [
     "Whether or not you can (2) depends on you more than on me.",
     "Do you want to be able to (2) ?",
     "Perhaps you don't want to (2).",
     "goto what"
  ]]
]],
["what", 0, [
 ["*", [
     "Why do you ask ?",
     "Does that question interest you ?",
     "What is it you really want to know ?",
     "Are such questions much on your mind ?",
     "What answer would please you most ?",
     "What do you think ?",
     "What comes to mind when you ask that ?",
     "Have you asked such questions before ?",
     "Have you asked anyone else ?"
  ]]
]],
["who", 0, [
 ["who *", [
     "goto what"
  ]]
]],
["when", 0, [
 ["when *", [
     "goto what"
  ]]
]],
["where", 0, [
 ["where *", [
     "goto what"
  ]]
]],
["how", 0, [
 ["how *", [
     "goto what"
  ]]
]],
["because", 0, [
 ["*", [
     "Is that the real reason ?",
     "Don't any other reasons come to mind ?",
     "Does that reason seem to explain anything else ?",
     "What other reasons might there be ?"
  ]]
]],
["why", 0, [
 ["* why don't you *", [
     "Do you believe I don't (2) ?",
     "Perhaps I will (2) in good time.",
     "Should you (2) yourself ?",
     "You want me to (2) ?",
     "goto what"
  ]],
 ["* why can't i *", [
     "Do you think you should be able to (2) ?",
     "Do you want to be able to (2) ?",
     "Do you believe this will help you to (2) ?",
     "Have you any idea why you can't (2) ?",
     "goto what"
  ]],
 ["*", [
     "goto what"
  ]]
]],
["everyone", 2, [
 ["* @everyone *", [
     "Really, (2) ?",
     "Surely not (2).",
     "Can you think of anyone in particular ?",
     "Who, for example?",
     "Are you thinking of a very special person ?",
     "Who, may I ask ?",
     "Someone special perhaps ?",
     "You have a particular person in mind, don't you ?",
     "Who do you think you're talking about ?"
  ]]
]],
["everybody", 2, [
 ["*", [
     "goto everyone"
  ]]
]],
["nobody", 2, [
 ["*", [
     "goto everyone"
  ]]
]],
["noone", 2, [
 ["*", [
     "goto everyone"
  ]]
]],
["always", 1, [
 ["*", [
     "Can you think of a specific example ?",
     "When ?",
     "What incident are you thinking of ?",
     "Really, always ?"
  ]]
]],
["alike", 10, [
 ["*", [
     "In what way ?",
     "What resemblence do you see ?",
     "What does that similarity suggest to you ?",
     "What other connections do you see ?",
     "What do you suppose that resemblence means ?",
     "What is the connection, do you suppose ?",
     "Could there really be some connection ?",
     "How ?"
  ]]
]],
["like", 10, [
 ["* @be *like *", [
     "goto alike"
  ]]
]],
["different", 0, [
 ["*", [
     "How is it different ?",
     "What differences do you see ?",
     "What does that difference suggest to you ?",
     "What other distinctions do you see ?",
     "What do you suppose that disparity means ?",
     "Could there be some connection, do you suppose ?",
     "How ?"
  ]]
]]

];

// regexp/replacement pairs to be performed as final cleanings
// here: cleanings for multiple bots talking to each other
var elizaPostTransforms = [
	/ old old/g, " old",
	/\bthey were( not)? me\b/g, "it was$1 me",
	/\bthey are( not)? me\b/g, "it is$1 me",
	/Are they( always)? me\b/, "it is$1 me",
	/\bthat your( own)? (\w+)( now)? \?/, "that you have your$1 $2 ?",
	/\bI to have (\w+)/, "I have $1",
	/Earlier you said your( own)? (\w+)( now)?\./, "Earlier you talked about your $2."
];

// eof
