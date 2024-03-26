const localQuotes = [
  {
    text: 'Difficulties increase the nearer we get to the goal.',
    author: 'Johann Wolfgang von Goethe',
  },
  {
    text: 'Fate is in your hands and no one elses',
    author: 'Byron Pulsifer',
  },
  {
    text: 'Nothing happens unless first we dream.',
    author: 'Carl Sandburg',
  },
  {
    text: 'Well begun is half done.',
    author: 'Aristotle',
  },
  {
    text: 'Life is a learning experience, only if you learn.',
    author: 'Yogi Berra',
  },
  {
    text: 'Self-complacency is fatal to progress.',
    author: 'Margaret Sangster',
  },
  {
    text: 'Peace comes from within. Do not seek it without.',
    author: 'Buddha',
  },
  {
    text: 'What you give is what you get.',
    author: 'Byron Pulsifer',
  },
  {
    text: 'We can only learn to love by loving.',
    author: 'Iris Murdoch',
  },
  {
    text: 'Life is change. Growth is optional. Choose wisely.',
    author: 'Karen Clark',
  },
  {
    text: "You'll see it when you believe it.",
    author: 'Wayne Dyer',
  },
  {
    text: 'Today is the tomorrow we worried about yesterday.',
    author: null,
  },
  {
    text: 'Every man dies. Not every man really lives.',
    author: null,
  },
  {
    text: 'To lead people walk behind them.',
    author: 'Lao Tzu',
  },
  {
    text: 'Ideas are the beginning points of all fortunes.',
    author: 'Napoleon Hill',
  },
  {
    text: 'Trust yourself. You know more than you think you do.',
    author: 'Benjamin Spock',
  },
  {
    text: 'Study the past, if you would divine the future.',
    author: 'Confucius',
  },
  {
    text: 'From error to error one discovers the entire truth.',
    author: 'Sigmund Freud',
  },
  {
    text: 'Well done is better than well said.',
    author: 'Benjamin Franklin',
  },
  {
    text: 'Bite off more than you can chew, then chew it.',
    author: 'Ella Williams',
  },
  {
    text: 'Work out your own salvation. Do not depend on others.',
    author: 'Buddha',
  },
  {
    text: 'One fails forward toward success.',
    author: 'Charles Kettering',
  },
  {
    text: 'Learning is a treasure that will follow its owner everywhere',
    author: 'Chinese proverb',
  },
  {
    text: 'Be as you wish to seem.',
    author: 'Socrates',
  },
  {
    text: 'The world is always in movement.',
    author: 'V. Naipaul',
  },
  {
    text: 'Never mistake activity for achievement.',
    author: 'John Wooden',
  },
  {
    text: 'What worries you masters you.',
    author: 'Haddon Robinson',
  },
  {
    text: 'One faces the future with ones past.',
    author: 'Pearl Buck',
  },
  {
    text: 'Goals are the fuel in the furnace of achievement.',
    author: 'Brian Tracy',
  },
  {
    text: 'Who sows virtue reaps honour.',
    author: 'Leonardo da Vinci',
  },
  {
    text: 'He is able who thinks he is able.',
    author: 'Buddha',
  },
  {
    text: 'A goal without a plan is just a wish.',
    author: 'Larry Elder',
  },
  {
    text: 'To succeed, we must first believe that we can.',
    author: 'Michael Korda',
  },
  {
    text: 'Learn from yesterday, live for today, hope for tomorrow.',
    author: 'Albert Einstein',
  },
  {
    text: 'The best teacher is experience learned from failures.',
    author: 'Byron Pulsifer',
  },
  {
    text: "Don't wait. The time will never be just right.",
    author: 'Napoleon Hill',
  },
  {
    text: 'Time is the wisest counsellor of all.',
    author: 'Pericles',
  },
  {
    text: 'You give before you get.',
    author: 'Napoleon Hill',
  },
  {
    text: 'Wisdom begins in wonder.',
    author: 'Socrates',
  },
  {
    text: 'Without courage, wisdom bears no fruit.',
    author: 'Baltasar Gracian',
  },
  {
    text: 'Change in all things is sweet.',
    author: 'Aristotle',
  },
  {
    text: 'What you fear is that which requires action to overcome.',
    author: 'Byron Pulsifer',
  },
  {
    text: 'When performance exceeds ambition, the overlap is called success.',
    author: 'Cullen Hightower',
  },
  {
    text: 'When deeds speak, words are nothing.',
    author: 'African proverb',
  },
  {
    text: 'Skill to do comes of doing.',
    author: 'Ralph Emerson',
  },
  {
    text: 'Wisdom is the supreme part of happiness.',
    author: 'Sophocles',
  },
  {
    text: 'Important principles may, and must, be inflexible.',
    author: 'Abraham Lincoln',
  },
  {
    text: 'The undertaking of a new action brings new strength.',
    author: 'Richard Evans',
  },
  {
    text: 'The years teach much which the days never know.',
    author: 'Ralph Emerson',
  },
  {
    text: 'All know the way; few actually walk it.',
    author: 'Bodhidharma',
  },
  {
    text: 'Faith in oneself is the best and safest course.',
    author: 'Michelangelo',
  },
  {
    text: 'Courage is going from failure to failure without losing enthusiasm.',
    author: 'Winston Churchill',
  },
  {
    text: 'The two most powerful warriors are patience and time.',
    author: 'Leo Tolstoy',
  },
  {
    text: 'Anticipate the difficult by managing the easy.',
    author: 'Lao Tzu',
  },
  {
    text: 'Those who are free of resentful thoughts surely find peace.',
    author: 'Buddha',
  },
  {
    text: 'A short saying often contains much wisdom.',
    author: 'Sophocles',
  },
  {
    text: 'Life is movement-we breathe, we eat, we walk, we move!',
    author: 'John Pierrakos',
  },
  {
    text: 'Argue for your limitations, and sure enough theyre yours.',
    author: 'Richard Bach',
  },
  {
    text: 'Luck is what happens when preparation meets opportunity.',
    author: 'Seneca',
  },
  {
    text: 'Victory belongs to the most persevering.',
    author: 'Napoleon Bonaparte',
  },
  {
    text: 'Love all, trust a few, do wrong to none.',
    author: 'William Shakespeare',
  },
  {
    text: 'In order to win, you must expect to win.',
    author: 'Richard Bach',
  },
  {
    text: 'A goal is a dream with a deadline.',
    author: 'Napoleon Hill',
  },
  {
    text: 'You can do it if you believe you can!',
    author: 'Napoleon Hill',
  },
  {
    text: "Set your goals high, and don't stop till you get there.",
    author: 'Bo Jackson',
  },
  {
    text: 'Every new day is another chance to change your life.',
    author: null,
  },
  {
    text: 'Smile, breathe, and go slowly.',
    author: 'Thich Nhat Hanh',
  },
  {
    text: 'Nobody will believe in you unless you believe in yourself.',
    author: 'Liberace',
  },
  {
    text: 'Do more than dream: work.',
    author: 'William Arthur Ward',
  },
  {
    text: 'No man was ever wise by chance.',
    author: 'Seneca',
  },
  {
    text: 'Some pursue happiness, others create it.',
    author: null,
  },
  {
    text: "Don't ruin the present with the ruined past.",
    author: 'Ellen Gilchrist',
  },
  {
    text: 'Do something wonderful, people may imitate it.',
    author: 'Albert Schweitzer',
  },
  {
    text: 'Do one thing every day that scares you.',
    author: 'Eleanor Roosevelt',
  },
  {
    text: 'If you cannot be silent be brilliant and thoughtful.',
    author: 'Byron Pulsifer',
  },
  {
    text: 'Who looks outside, dreams; who looks inside, awakes.',
    author: 'Carl Jung',
  },
  {
    text: 'What we think, we become.',
    author: 'Buddha',
  },
  {
    text: 'The shortest answer is doing.',
    author: 'Lord Herbert',
  },
  {
    text: 'All our knowledge has its origins in our perceptions.',
    author: 'Leonardo da Vinci',
  },
  {
    text: 'Truth is powerful and it prevails.',
    author: 'Sojourner Truth',
  },
  {
    text: 'Light tomorrow with today!',
    author: 'Elizabeth Browning',
  },
  {
    text: 'Society develops wit, but its contemplation alone forms genius.',
    author: 'Madame de Stael',
  },
  {
    text: 'The simplest things are often the truest.',
    author: 'Richard Bach',
  },
  {
    text: 'Everyone smiles in the same language.',
    author: null,
  },
  {
    text: 'Yesterday I dared to struggle. Today I dare to win.',
    author: 'Bernadette Devlin',
  },
  {
    text: 'No alibi will save you from accepting the responsibility.',
    author: 'Napoleon Hill',
  },
  {
    text: 'If you can dream it, you can do it.',
    author: 'Walt Disney',
  },
  {
    text: 'It is better to travel well than to arrive.',
    author: 'Buddha',
  },
  {
    text: "Life shrinks or expands in proportion to one's courage.",
    author: 'Anais Nin',
  },
  {
    text: 'You have to believe in yourself.',
    author: 'Sun Tzu',
  },
  {
    text: 'Our intention creates our reality.',
    author: 'Wayne Dyer',
  },
  {
    text: 'Character develops itself in the stream of life.',
    author: 'Johann Wolfgang von Goethe',
  },
  {
    text: "You can't stop the waves, but you can learn to surf.",
    author: 'Jon Kabat-Zinn',
  },
  {
    text: 'Reality does not conform to the ideal, but confirms it.',
    author: 'Gustave Flaubert',
  },
  {
    text: 'Growth itself contains the germ of happiness.',
    author: 'Pearl Buck',
  },
  {
    text: "You can do what's reasonable or you can decide what's possible.",
    author: null,
  },
  {
    text: "The most important thing is this: To be able at any moment, to sacrifice what you are, for what you will become!",
    author: 'Eric Thomas',
  },
  {
    text: "For the truly fortunate man, his body is a breathing image of his self respect.",
    author: 'Marcus Aurelius',
  },
  {
    text: "Everything you want is on the other side of fear.",
    author: 'George Addair',
  },
  {
    text: "No man has the right to be an amateur in the matter of physical training. It is a shame for a man to grow old without seeing the beauty and strength of which his body is capable.",
    author: null,
  },
  {
    text: "That which does not kill us makes us stronger.",
    author: 'Friedrich Nietzsche',
  },
  {
    text: "He who has a why to live can bear almost any how.",
    author: 'Friedrich Nietzsche',
  },
  {
    text: "And those who were seen dancing were thought to be insane by those who could not hear the music.",
    author: 'Friedrich Nietzsche',
  },
  {
    text: "If you can't fly then run, if you can't run then walk, if you can't walk then crawl, but whatever you do you have to keep moving forward.",
    author: 'Martin Luther King Jr.',
  },
  {
    text: "You only live once; but if you live it right, once is enough.",
    author: 'Mae West',
  },
  {
    text: "Second by second you lose the opportunity to become the person you want to be. Take charge of your life.",
    author: 'Greg Plitt',
  },
  {
    text: "Life isn't about waiting for the storm to pass. It's about learning how to dance in the rain.",
    author: 'Vivian Greene',
  },
  {
    text: "You must believe in yourself enough to be the person now that you want others to remember you for later.",
    author: 'Greg Plitt',
  },
  {
    text: "The vast majority of us are slaves to our minds. Most don't even make the first effort when it comes to mastering their thought process because it's a never-ending chore and impossible to get right every time.",
    author: 'David Goggins',
  },
  {
    text: "It's about what we do with opportunities revoked or presented to us that determine how a story ends.",
    author: 'David Goggins',
  },
  {
    text: "Never let people who choose the path of least resistance steer you away from your chosen path of most resistance.",
    author: 'David Goggins',
  },
  {
    text: "Never give up on a dream just because of the time it will take to accomplish it. The time will pass anyway.",
    author: 'Earl Nightingale',
  },
  {
    text: "Two men looked out from prison bars; one saw the mud, the other saw stars.",
    author: 'Dale Carnegie',
  },
  {
    text: "The struggle itself to the heights is enough to fill a man's heart. One must imagine Sisyphus happy.",
    author: 'Albert Camus',
  },
  {
    text: "Keep your face always toward the sunshine, and shadows will fall behind you.",
    author: 'Walt Whitman',
  },
  {
    text: "Champions keep playing until they get it right.",
    author: 'Billie Jean King',
  },
  {
    text: "Believe you can and you're halfway there.",
    author: 'Theodore Roosevelt',
  },
  {
    text: "Don't count the days, make the days count.",
    author: 'Muhammad Ali',
  },
  {
    text: "If you risk nothing, then you risk everything.",
    author: 'Geena Davis',
  },
  {
    text: "Failure is the condiment that gives success its flavor.",
    author: 'Truman Capote',
  },
  {
    text: "To live is the rarest thing in the world. Most people just exist.",
    author: 'Oscar Wilde',
  },
  {
    text: "If you prioritize yourself, you are going to save yourself.",
    author: 'Gabrielle Union',
  },
  {
    text: "A problem is a chance for you to do your best.",
    author: 'Duke Ellington',
  },
  {
    text: "The Society that separates its scholars from its warriors will have its thinking done by cowards and its fighting done by fools.",
    author: 'Thucydides',
  },
];
