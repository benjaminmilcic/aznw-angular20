export interface Question {
  question: { en: string; de: string; hr: string };
  options: { en: string[]; de: string[]; hr: string[] };
  correctAnswerIndex: number;
}

export const QUESTIONS: Question[] = [
  {
    // Question 1
    question: {
      en: 'What is the capital of France?',
      de: 'Was ist die Hauptstadt von Frankreich?',
      hr: 'Koji je glavni grad Francuske?',
    },
    options: {
      en: ['Berlin', 'Madrid', 'Paris', 'Rome'],
      de: ['Berlin', 'Madrid', 'Paris', 'Rom'],
      hr: ['Berlin', 'Madrid', 'Pariz', 'Rim'],
    },
    correctAnswerIndex: 2, // Correct answer: Paris
  },
  {
    // Question 2
    question: {
      en: 'Which planet is known as the Red Planet?',
      de: 'Welcher Planet ist als der Rote Planet bekannt?',
      hr: 'Koji je planet poznat kao Crveni planet?',
    },
    options: {
      en: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
      de: ['Erde', 'Mars', 'Jupiter', 'Saturn'],
      hr: ['Zemlja', 'Mars', 'Jupiter', 'Saturn'],
    },
    correctAnswerIndex: 1, // Correct answer: Mars
  },
  {
    // Question 3
    question: {
      en: "Who wrote 'Romeo and Juliet'?",
      de: "Wer schrieb 'Romeo und Julia'?",
      hr: "Tko je napisao 'Romea i Juliju'?",
    },
    options: {
      en: [
        'William Shakespeare',
        'Charles Dickens',
        'Mark Twain',
        'Jane Austen',
      ],
      de: [
        'William Shakespeare',
        'Charles Dickens',
        'Mark Twain',
        'Jane Austen',
      ],
      hr: [
        'William Shakespeare',
        'Charles Dickens',
        'Mark Twain',
        'Jane Austen',
      ],
    },
    correctAnswerIndex: 0, // Correct answer: William Shakespeare
  },
  {
    // Question 4
    question: {
      en: 'What is the largest ocean on Earth?',
      de: 'Welches ist der größte Ozean der Erde?',
      hr: 'Koji je najveći ocean na Zemlji?',
    },
    options: {
      en: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
      de: [
        'Atlantischer Ozean',
        'Indischer Ozean',
        'Arktischer Ozean',
        'Pazifischer Ozean',
      ],
      hr: ['Atlantski ocean', 'Indijski ocean', 'Arktički ocean', 'Tihi ocean'],
    },
    correctAnswerIndex: 3, // Correct answer: Pacific Ocean
  },
  {
    // Question 5
    question: {
      en: 'What is the chemical symbol for water?',
      de: 'Was ist das chemische Symbol für Wasser?',
      hr: 'Koji je kemijski simbol za vodu?',
    },
    options: {
      en: ['H2O', 'CO2', 'O2', 'NaCl'],
      de: ['H2O', 'CO2', 'O2', 'NaCl'],
      hr: ['H2O', 'CO2', 'O2', 'NaCl'],
    },
    correctAnswerIndex: 0, // Correct answer: H2O
  },
  {
    // Question 6
    question: {
      en: 'What is the smallest prime number?',
      de: 'Was ist die kleinste Primzahl?',
      hr: 'Koji je najmanji prosti broj?',
    },
    options: {
      en: ['1', '2', '3', '5'],
      de: ['1', '2', '3', '5'],
      hr: ['1', '2', '3', '5'],
    },
    correctAnswerIndex: 1, // Correct answer: 2
  },
  {
    // Question 7
    question: {
      en: 'Which country is known as the Land of the Rising Sun?',
      de: 'Welches Land ist bekannt als das Land der aufgehenden Sonne?',
      hr: 'Koja je zemlja poznata kao Zemlja izlazećeg sunca?',
    },
    options: {
      en: ['China', 'Japan', 'South Korea', 'Thailand'],
      de: ['China', 'Japan', 'Südkorea', 'Thailand'],
      hr: ['Kina', 'Japan', 'Južna Koreja', 'Tajland'],
    },
    correctAnswerIndex: 1, // Correct answer: Japan
  },
  {
    // Question 8
    question: {
      en: 'What is the square root of 64?',
      de: 'Was ist die Quadratwurzel von 64?',
      hr: 'Koliki je kvadratni korijen od 64?',
    },
    options: {
      en: ['4', '6', '8', '10'],
      de: ['4', '6', '8', '10'],
      hr: ['4', '6', '8', '10'],
    },
    correctAnswerIndex: 2, // Correct answer: 8
  },
  {
    // Question 9
    question: {
      en: "Which element has the chemical symbol 'O'?",
      de: "Welches Element hat das chemische Symbol 'O'?",
      hr: "Koji element ima kemijski simbol 'O'?",
    },
    options: {
      en: ['Oxygen', 'Gold', 'Iron', 'Carbon'],
      de: ['Sauerstoff', 'Gold', 'Eisen', 'Kohlenstoff'],
      hr: ['Kisik', 'Zlato', 'Željezo', 'Ugljik'],
    },
    correctAnswerIndex: 0, // Correct answer: Oxygen
  },
  {
    // Question 10
    question: {
      en: 'Who painted the Mona Lisa?',
      de: 'Wer malte die Mona Lisa?',
      hr: 'Tko je naslikao Mona Lisu?',
    },
    options: {
      en: [
        'Vincent van Gogh',
        'Leonardo da Vinci',
        'Pablo Picasso',
        'Claude Monet',
      ],
      de: [
        'Vincent van Gogh',
        'Leonardo da Vinci',
        'Pablo Picasso',
        'Claude Monet',
      ],
      hr: [
        'Vincent van Gogh',
        'Leonardo da Vinci',
        'Pablo Picasso',
        'Claude Monet',
      ],
    },
    correctAnswerIndex: 1, // Correct answer: Leonardo da Vinci
  },
  {
    // Question 11
    question: {
      en: 'What is the largest mammal in the world?',
      de: 'Was ist das größte Säugetier der Welt?',
      hr: 'Koji je najveći sisavac na svijetu?',
    },
    options: {
      en: ['Elephant', 'Blue Whale', 'Giraffe', 'Hippopotamus'],
      de: ['Elefant', 'Blauwal', 'Giraffe', 'Flusspferd'],
      hr: ['Slon', 'Plavi kit', 'Žirafa', 'Nilski konj'],
    },
    correctAnswerIndex: 1, // Correct answer: Blue Whale
  },
  {
    // Question 12
    question: {
      en: 'What is the capital of Germany?',
      de: 'Was ist die Hauptstadt von Deutschland?',
      hr: 'Koji je glavni grad Njemačke?',
    },
    options: {
      en: ['Munich', 'Berlin', 'Hamburg', 'Frankfurt'],
      de: ['München', 'Berlin', 'Hamburg', 'Frankfurt'],
      hr: ['München', 'Berlin', 'Hamburg', 'Frankfurt'],
    },
    correctAnswerIndex: 1, // Correct answer: Berlin
  },
  {
    // Question 13
    question: {
      en: 'What is the boiling point of water in Celsius?',
      de: 'Was ist der Siedepunkt von Wasser in Celsius?',
      hr: 'Koja je vrelište vode u Celzijusima?',
    },
    options: {
      en: ['90°C', '100°C', '110°C', '120°C'],
      de: ['90°C', '100°C', '110°C', '120°C'],
      hr: ['90°C', '100°C', '110°C', '120°C'],
    },
    correctAnswerIndex: 1, // Correct answer: 100°C
  },
  {
    // Question 14
    question: {
      en: 'Which country is famous for the Pyramids?',
      de: 'Welches Land ist berühmt für die Pyramiden?',
      hr: 'Koja je zemlja poznata po piramidama?',
    },
    options: {
      en: ['Greece', 'Egypt', 'Mexico', 'India'],
      de: ['Griechenland', 'Ägypten', 'Mexiko', 'Indien'],
      hr: ['Grčka', 'Egipat', 'Meksiko', 'Indija'],
    },
    correctAnswerIndex: 1, // Correct answer: Egypt
  },
  {
    // Question 15
    question: {
      en: 'What is the currency of Japan?',
      de: 'Was ist die Währung von Japan?',
      hr: 'Koja je valuta Japana?',
    },
    options: {
      en: ['Yen', 'Dollar', 'Euro', 'Pound'],
      de: ['Yen', 'Dollar', 'Euro', 'Pfund'],
      hr: ['Jen', 'Dolar', 'Euro', 'Funta'],
    },
    correctAnswerIndex: 0, // Correct answer: Yen
  },
  {
    // Question 16
    question: {
      en: 'Who discovered gravity?',
      de: 'Wer entdeckte die Schwerkraft?',
      hr: 'Tko je otkrio gravitaciju?',
    },
    options: {
      en: [
        'Albert Einstein',
        'Isaac Newton',
        'Galileo Galilei',
        'Nikola Tesla',
      ],
      de: [
        'Albert Einstein',
        'Isaac Newton',
        'Galileo Galilei',
        'Nikola Tesla',
      ],
      hr: [
        'Albert Einstein',
        'Isaac Newton',
        'Galileo Galilei',
        'Nikola Tesla',
      ],
    },
    correctAnswerIndex: 1, // Correct answer: Isaac Newton
  },
  {
    // Question 17
    question: {
      en: 'What is the largest desert in the world?',
      de: 'Was ist die größte Wüste der Welt?',
      hr: 'Koja je najveća pustinja na svijetu?',
    },
    options: {
      en: ['Sahara', 'Arabian', 'Gobi', 'Antarctic'],
      de: ['Sahara', 'Arabische Wüste', 'Gobi', 'Antarktis'],
      hr: ['Sahara', 'Arapska pustinja', 'Gobi', 'Antarktika'],
    },
    correctAnswerIndex: 3, // Correct answer: Antarctic
  },
  {
    // Question 18
    question: {
      en: 'What is the capital of Croatia?',
      de: 'Was ist die Hauptstadt von Kroatien?',
      hr: 'Koji je glavni grad Hrvatske?',
    },
    options: {
      en: ['Split', 'Zagreb', 'Dubrovnik', 'Rijeka'],
      de: ['Split', 'Zagreb', 'Dubrovnik', 'Rijeka'],
      hr: ['Split', 'Zagreb', 'Dubrovnik', 'Rijeka'],
    },
    correctAnswerIndex: 1, // Correct answer: Zagreb
  },
  {
    // Question 19
    question: {
      en: 'What is the chemical symbol for gold?',
      de: 'Was ist das chemische Symbol für Gold?',
      hr: 'Koji je kemijski simbol za zlato?',
    },
    options: {
      en: ['Au', 'Ag', 'Fe', 'Cu'],
      de: ['Au', 'Ag', 'Fe', 'Cu'],
      hr: ['Au', 'Ag', 'Fe', 'Cu'],
    },
    correctAnswerIndex: 0, // Correct answer: Au
  },
  {
    // Question 20
    question: {
      en: 'Which planet is closest to the Sun?',
      de: 'Welcher Planet ist der Sonne am nächsten?',
      hr: 'Koji je planet najbliži Suncu?',
    },
    options: {
      en: ['Venus', 'Mercury', 'Earth', 'Mars'],
      de: ['Venus', 'Merkur', 'Erde', 'Mars'],
      hr: ['Venera', 'Merkur', 'Zemlja', 'Mars'],
    },
    correctAnswerIndex: 1, // Correct answer: Mercury
  },
  // Question 21
  {
    question: {
      en: 'What is the largest planet in the solar system?',
      de: 'Welcher Planet ist der größte im Sonnensystem?',
      hr: 'Koji je najveći planet u Sunčevom sustavu?',
    },
    options: {
      en: ['Earth', 'Saturn', 'Jupiter', 'Neptune'],
      de: ['Erde', 'Saturn', 'Jupiter', 'Neptun'],
      hr: ['Zemlja', 'Saturn', 'Jupiter', 'Neptun'],
    },
    correctAnswerIndex: 2, // Correct answer: Jupiter
  },
  // Question 23
  {
    question: {
      en: 'What is the hardest natural substance on Earth?',
      de: 'Was ist die härteste natürliche Substanz auf der Erde?',
      hr: 'Koja je najtvrđa prirodna tvar na Zemlji?',
    },
    options: {
      en: ['Gold', 'Iron', 'Diamond', 'Quartz'],
      de: ['Gold', 'Eisen', 'Diamant', 'Quarz'],
      hr: ['Zlato', 'Željezo', 'Dijamant', 'Kremen'],
    },
    correctAnswerIndex: 2, // Correct answer: Diamond
  },
  // Question 24
  {
    question: {
      en: 'Which country is known as the Land of the Midnight Sun?',
      de: 'Welches Land ist bekannt als das Land der Mitternachtssonne?',
      hr: 'Koja je zemlja poznata kao Zemlja ponoćnog sunca?',
    },
    options: {
      en: ['Norway', 'Sweden', 'Finland', 'Iceland'],
      de: ['Norwegen', 'Schweden', 'Finnland', 'Island'],
      hr: ['Norveška', 'Švedska', 'Finska', 'Island'],
    },
    correctAnswerIndex: 0, // Correct answer: Norway
  },
  // Question 25
  {
    question: {
      en: 'What is the smallest country in the world?',
      de: 'Was ist das kleinste Land der Welt?',
      hr: 'Koja je najmanja zemlja na svijetu?',
    },
    options: {
      en: ['Monaco', 'San Marino', 'Vatican City', 'Liechtenstein'],
      de: ['Monaco', 'San Marino', 'Vatikanstadt', 'Liechtenstein'],
      hr: ['Monako', 'San Marino', 'Vatikan', 'Lihtenštajn'],
    },
    correctAnswerIndex: 2, // Correct answer: Vatican City
  },
  // Question 27
  {
    question: {
      en: 'What is the chemical symbol for sodium?',
      de: 'Was ist das chemische Symbol für Natrium?',
      hr: 'Koji je kemijski simbol za natrij?',
    },
    options: {
      en: ['Na', 'So', 'Ni', 'Sa'],
      de: ['Na', 'So', 'Ni', 'Sa'],
      hr: ['Na', 'So', 'Ni', 'Sa'],
    },
    correctAnswerIndex: 0, // Correct answer: Na
  },
  // Question 28
  {
    question: {
      en: 'Which continent is the Sahara Desert located on?',
      de: 'Auf welchem Kontinent liegt die Sahara-Wüste?',
      hr: 'Na kojem se kontinentu nalazi pustinja Sahara?',
    },
    options: {
      en: ['Asia', 'Africa', 'Australia', 'South America'],
      de: ['Asien', 'Afrika', 'Australien', 'Südamerika'],
      hr: ['Azija', 'Afrika', 'Australija', 'Južna Amerika'],
    },
    correctAnswerIndex: 1, // Correct answer: Africa
  },
  // Question 29
  {
    question: {
      en: 'What is the capital of Australia?',
      de: 'Was ist die Hauptstadt von Australien?',
      hr: 'Koji je glavni grad Australije?',
    },
    options: {
      en: ['Sydney', 'Melbourne', 'Canberra', 'Brisbane'],
      de: ['Sydney', 'Melbourne', 'Canberra', 'Brisbane'],
      hr: ['Sydney', 'Melbourne', 'Canberra', 'Brisbane'],
    },
    correctAnswerIndex: 2, // Correct answer: Canberra
  },
  // Question 30
  {
    question: {
      en: "Which element is the most abundant in the Earth's atmosphere?",
      de: 'Welches Element ist am häufigsten in der Erdatmosphäre vorhanden?',
      hr: 'Koji je element najzastupljeniji u Zemljinoj atmosferi?',
    },
    options: {
      en: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Argon'],
      de: ['Sauerstoff', 'Kohlendioxid', 'Stickstoff', 'Argon'],
      hr: ['Kisik', 'Ugljični dioksid', 'Dušik', 'Argon'],
    },
    correctAnswerIndex: 2, // Correct answer: Nitrogen
  },
  // Question 31
  {
    question: {
      en: 'What is the largest bird in the world?',
      de: 'Was ist der größte Vogel der Welt?',
      hr: 'Koja je najveća ptica na svijetu?',
    },
    options: {
      en: ['Eagle', 'Ostrich', 'Albatross', 'Penguin'],
      de: ['Adler', 'Strauß', 'Albatros', 'Pinguin'],
      hr: ['Orao', 'Noj', 'Albatros', 'Pingvin'],
    },
    correctAnswerIndex: 1, // Correct answer: Ostrich
  },
  // Question 32
  {
    question: {
      en: 'Which country invented tea?',
      de: 'Welches Land hat Tee erfunden?',
      hr: 'Koja je zemlja izumila čaj?',
    },
    options: {
      en: ['India', 'China', 'Japan', 'England'],
      de: ['Indien', 'China', 'Japan', 'England'],
      hr: ['Indija', 'Kina', 'Japan', 'Engleska'],
    },
    correctAnswerIndex: 1, // Correct answer: China
  },
  // Question 33
  {
    question: {
      en: 'What is the capital of Canada?',
      de: 'Was ist die Hauptstadt von Kanada?',
      hr: 'Koji je glavni grad Kanade?',
    },
    options: {
      en: ['Toronto', 'Vancouver', 'Ottawa', 'Montreal'],
      de: ['Toronto', 'Vancouver', 'Ottawa', 'Montreal'],
      hr: ['Toronto', 'Vancouver', 'Ottawa', 'Montreal'],
    },
    correctAnswerIndex: 2, // Correct answer: Ottawa
  },
  // Question 34
  {
    question: {
      en: 'Which planet has the most moons?',
      de: 'Welcher Planet hat die meisten Monde?',
      hr: 'Koji planet ima najviše mjeseca?',
    },
    options: {
      en: ['Jupiter', 'Saturn', 'Uranus', 'Neptune'],
      de: ['Jupiter', 'Saturn', 'Uranus', 'Neptun'],
      hr: ['Jupiter', 'Saturn', 'Uran', 'Neptun'],
    },
    correctAnswerIndex: 1, // Correct answer: Saturn
  },
  // Question 35
  {
    question: {
      en: 'What is the chemical symbol for potassium?',
      de: 'Was ist das chemische Symbol für Kalium?',
      hr: 'Koji je kemijski simbol za kalij?',
    },
    options: {
      en: ['K', 'P', 'Ka', 'Po'],
      de: ['K', 'P', 'Ka', 'Po'],
      hr: ['K', 'P', 'Ka', 'Po'],
    },
    correctAnswerIndex: 0, // Correct answer: K
  },
  // Question 36
  {
    question: {
      en: 'Which country is famous for the Great Wall?',
      de: 'Welches Land ist berühmt für die Große Mauer?',
      hr: 'Koja je zemlja poznata po Velikom zidu?',
    },
    options: {
      en: ['Japan', 'China', 'India', 'South Korea'],
      de: ['Japan', 'China', 'Indien', 'Südkorea'],
      hr: ['Japan', 'Kina', 'Indija', 'Južna Koreja'],
    },
    correctAnswerIndex: 1, // Correct answer: China
  },
  // Question 37
  {
    question: {
      en: 'What is the capital of Italy?',
      de: 'Was ist die Hauptstadt von Italien?',
      hr: 'Koji je glavni grad Italije?',
    },
    options: {
      en: ['Rome', 'Milan', 'Venice', 'Florence'],
      de: ['Rom', 'Mailand', 'Venedig', 'Florenz'],
      hr: ['Rim', 'Milano', 'Venecija', 'Firence'],
    },
    correctAnswerIndex: 0, // Correct answer: Rome
  },
  // Question 39
  {
    question: {
      en: 'What is the largest species of shark?',
      de: 'Was ist die größte Haiart?',
      hr: 'Koja je najveća vrsta morskog psa?',
    },
    options: {
      en: [
        'Great White Shark',
        'Whale Shark',
        'Tiger Shark',
        'Hammerhead Shark',
      ],
      de: ['Weißer Hai', 'Walhai', 'Tigerhai', 'Hammerhai'],
      hr: ['Veliki bijeli pas', 'Kitni pas', 'Tigrasti pas', 'Čekićar'],
    },
    correctAnswerIndex: 1, // Correct answer: Whale Shark
  },
  // Question 40
  {
    question: {
      en: 'Which country is known for inventing pizza?',
      de: 'Welches Land ist bekannt für die Erfindung der Pizza?',
      hr: 'Koja je zemlja poznata po izumu pizze?',
    },
    options: {
      en: ['France', 'Italy', 'Spain', 'Greece'],
      de: ['Frankreich', 'Italien', 'Spanien', 'Griechenland'],
      hr: ['Francuska', 'Italija', 'Španjolska', 'Grčka'],
    },
    correctAnswerIndex: 1, // Correct answer: Italy
  },
  // Question 41
  {
    question: {
      en: 'What is the capital of Spain?',
      de: 'Was ist die Hauptstadt von Spanien?',
      hr: 'Koji je glavni grad Španjolske?',
    },
    options: {
      en: ['Barcelona', 'Madrid', 'Valencia', 'Seville'],
      de: ['Barcelona', 'Madrid', 'Valencia', 'Sevilla'],
      hr: ['Barcelona', 'Madrid', 'Valencia', 'Sevilla'],
    },
    correctAnswerIndex: 1, // Correct answer: Madrid
  },
  // Question 42
  {
    question: {
      en: 'Which planet is known for its rings?',
      de: 'Welcher Planet ist für seine Ringe bekannt?',
      hr: 'Koji je planet poznat po svojim prstenovima?',
    },
    options: {
      en: ['Jupiter', 'Saturn', 'Uranus', 'Neptune'],
      de: ['Jupiter', 'Saturn', 'Uranus', 'Neptun'],
      hr: ['Jupiter', 'Saturn', 'Uran', 'Neptun'],
    },
    correctAnswerIndex: 1, // Correct answer: Saturn
  },
  // Question 43
  {
    question: {
      en: 'What is the chemical symbol for silver?',
      de: 'Was ist das chemische Symbol für Silber?',
      hr: 'Koji je kemijski simbol za srebro?',
    },
    options: {
      en: ['Si', 'Ag', 'Au', 'Sr'],
      de: ['Si', 'Ag', 'Au', 'Sr'],
      hr: ['Si', 'Ag', 'Au', 'Sr'],
    },
    correctAnswerIndex: 1, // Correct answer: Ag
  },
  // Question 45
  {
    question: {
      en: 'What is the capital of Brazil?',
      de: 'Was ist die Hauptstadt von Brasilien?',
      hr: 'Koji je glavni grad Brazila?',
    },
    options: {
      en: ['Rio de Janeiro', 'São Paulo', 'Brasília', 'Salvador'],
      de: ['Rio de Janeiro', 'São Paulo', 'Brasília', 'Salvador'],
      hr: ['Rio de Janeiro', 'São Paulo', 'Brasília', 'Salvador'],
    },
    correctAnswerIndex: 2, // Correct answer: Brasília
  },
  // Question 46
  {
    question: {
      en: 'Which animal is the fastest land animal?',
      de: 'Welches Tier ist das schnellste Landtier?',
      hr: 'Koja je životinja najbrže kopneno životinja?',
    },
    options: {
      en: ['Cheetah', 'Lion', 'Gazelle', 'Horse'],
      de: ['Gepard', 'Löwe', 'Gazelle', 'Pferd'],
      hr: ['Gepard', 'Lav', 'Gazela', 'Konj'],
    },
    correctAnswerIndex: 0, // Correct answer: Cheetah
  },
  // Question 47
  {
    question: {
      en: 'What is the chemical symbol for iron?',
      de: 'Was ist das chemische Symbol für Eisen?',
      hr: 'Koji je kemijski simbol za željezo?',
    },
    options: {
      en: ['Fe', 'Ir', 'In', 'Io'],
      de: ['Fe', 'Ir', 'In', 'Io'],
      hr: ['Fe', 'Ir', 'In', 'Io'],
    },
    correctAnswerIndex: 0, // Correct answer: Fe
  },
  // Question 48
  {
    question: {
      en: 'Which country is known for the Eiffel Tower?',
      de: 'Welches Land ist bekannt für den Eiffelturm?',
      hr: 'Koja je zemlja poznata po Eiffelovom tornju?',
    },
    options: {
      en: ['Italy', 'France', 'Germany', 'Spain'],
      de: ['Italien', 'Frankreich', 'Deutschland', 'Spanien'],
      hr: ['Italija', 'Francuska', 'Njemačka', 'Španjolska'],
    },
    correctAnswerIndex: 1, // Correct answer: France
  },
  // Question 49
  {
    question: {
      en: 'What is the capital of Russia?',
      de: 'Was ist die Hauptstadt von Russland?',
      hr: 'Koji je glavni grad Rusije?',
    },
    options: {
      en: ['St. Petersburg', 'Moscow', 'Kazan', 'Novosibirsk'],
      de: ['St. Petersburg', 'Moskau', 'Kasan', 'Nowosibirsk'],
      hr: ['Sankt Peterburg', 'Moskva', 'Kazan', 'Novosibirsk'],
    },
    correctAnswerIndex: 1, // Correct answer: Moscow
  },
  // Question 51
  {
    question: {
      en: 'What is the largest species of penguin?',
      de: 'Was ist die größte Pinguinart?',
      hr: 'Koja je najveća vrsta pingvina?',
    },
    options: {
      en: [
        'Emperor Penguin',
        'King Penguin',
        'Adélie Penguin',
        'Gentoo Penguin',
      ],
      de: ['Kaiserpinguin', 'Königspinguin', 'Adéliepinguin', 'Eselspinguin'],
      hr: [
        'Carski pingvin',
        'Kraljevski pingvin',
        'Adélie pingvin',
        'Gentoo pingvin',
      ],
    },
    correctAnswerIndex: 0, // Correct answer: Emperor Penguin
  },
  // Question 52
  {
    question: {
      en: 'Which country is known for inventing the telephone?',
      de: 'Welches Land ist bekannt für die Erfindung des Telefons?',
      hr: 'Koja je zemlja poznata po izumu telefona?',
    },
    options: {
      en: ['USA', 'Germany', 'United Kingdom', 'Italy'],
      de: ['USA', 'Deutschland', 'Vereinigtes Königreich', 'Italien'],
      hr: ['SAD', 'Njemačka', 'Ujedinjeno Kraljevstvo', 'Italija'],
    },
    correctAnswerIndex: 0, // Correct answer: USA
  },
  // Question 53
  {
    question: {
      en: 'What is the capital of Argentina?',
      de: 'Was ist die Hauptstadt von Argentinien?',
      hr: 'Koji je glavni grad Argentine?',
    },
    options: {
      en: ['Buenos Aires', 'Córdoba', 'Rosario', 'Mendoza'],
      de: ['Buenos Aires', 'Córdoba', 'Rosario', 'Mendoza'],
      hr: ['Buenos Aires', 'Córdoba', 'Rosario', 'Mendoza'],
    },
    correctAnswerIndex: 0, // Correct answer: Buenos Aires
  },
  // Question 54
  {
    question: {
      en: 'Which planet is closest to Earth?',
      de: 'Welcher Planet ist der Erde am nächsten?',
      hr: 'Koji je planet najbliži Zemlji?',
    },
    options: {
      en: ['Venus', 'Mars', 'Mercury', 'Jupiter'],
      de: ['Venus', 'Mars', 'Merkur', 'Jupiter'],
      hr: ['Venera', 'Mars', 'Merkur', 'Jupiter'],
    },
    correctAnswerIndex: 0, // Correct answer: Venus
  },
  // Question 55
  {
    question: {
      en: 'What is the chemical symbol for carbon?',
      de: 'Was ist das chemische Symbol für Kohlenstoff?',
      hr: 'Koji je kemijski simbol za ugljik?',
    },
    options: {
      en: ['C', 'Co', 'Ca', 'Cr'],
      de: ['C', 'Co', 'Ca', 'Cr'],
      hr: ['C', 'Co', 'Ca', 'Cr'],
    },
    correctAnswerIndex: 0, // Correct answer: C
  },
  // Question 56
  {
    question: {
      en: 'Which country is known for the Taj Mahal?',
      de: 'Welches Land ist bekannt für das Taj Mahal?',
      hr: 'Koja je zemlja poznata po Taj Mahalu?',
    },
    options: {
      en: ['Pakistan', 'India', 'Bangladesh', 'Nepal'],
      de: ['Pakistan', 'Indien', 'Bangladesch', 'Nepal'],
      hr: ['Pakistan', 'Indija', 'Bangladeš', 'Nepal'],
    },
    correctAnswerIndex: 1, // Correct answer: India
  },
  // Question 57
  {
    question: {
      en: 'What is the capital of South Africa?',
      de: 'Was ist die Hauptstadt von Südafrika?',
      hr: 'Koji je glavni grad Južne Afrike?',
    },
    options: {
      en: ['Cape Town', 'Pretoria', 'Johannesburg', 'Durban'],
      de: ['Kapstadt', 'Pretoria', 'Johannesburg', 'Durban'],
      hr: ['Cape Town', 'Pretoria', 'Johannesburg', 'Durban'],
    },
    correctAnswerIndex: 1, // Correct answer: Pretoria
  },
  // Question 58
  {
    question: {
      en: 'Which gas is used by plants during photosynthesis?',
      de: 'Welches Gas wird von Pflanzen während der Photosynthese verwendet?',
      hr: 'Koji plin biljke koriste tijekom fotosinteze?',
    },
    options: {
      en: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Hydrogen'],
      de: ['Sauerstoff', 'Kohlendioxid', 'Stickstoff', 'Wasserstoff'],
      hr: ['Kisik', 'Ugljični dioksid', 'Dušik', 'Vodik'],
    },
    correctAnswerIndex: 1, // Correct answer: Carbon Dioxide
  },
  // Question 59
  {
    question: {
      en: 'What is the largest species of bear?',
      de: 'Was ist die größte Bärenart?',
      hr: 'Koja je najveća vrsta medvjeda?',
    },
    options: {
      en: ['Polar Bear', 'Grizzly Bear', 'Black Bear', 'Panda Bear'],
      de: ['Eisbär', 'Grizzlybär', 'Schwarzbär', 'Pandabär'],
      hr: [
        'Polarni medvjed',
        'Grizli medvjed',
        'Crni medvjed',
        'Panda medvjed',
      ],
    },
    correctAnswerIndex: 0, // Correct answer: Polar Bear
  },
  // Question 60
  {
    question: {
      en: 'Which country is known for the Colosseum?',
      de: 'Welches Land ist bekannt für das Kolosseum?',
      hr: 'Koja je zemlja poznata po Koloseumu?',
    },
    options: {
      en: ['Greece', 'Italy', 'France', 'Spain'],
      de: ['Griechenland', 'Italien', 'Frankreich', 'Spanien'],
      hr: ['Grčka', 'Italija', 'Francuska', 'Španjolska'],
    },
    correctAnswerIndex: 1, // Correct answer: Italy
  },
  // Question 61
  {
    question: {
      en: 'What is the capital of Japan?',
      de: 'Was ist die Hauptstadt von Japan?',
      hr: 'Koji je glavni grad Japana?',
    },
    options: {
      en: ['Osaka', 'Kyoto', 'Tokyo', 'Hiroshima'],
      de: ['Osaka', 'Kyoto', 'Tokio', 'Hiroshima'],
      hr: ['Osaka', 'Kyoto', 'Tokio', 'Hiroshima'],
    },
    correctAnswerIndex: 2, // Correct answer: Tokyo
  },
  // Question 63
  {
    question: {
      en: 'What is the chemical symbol for helium?',
      de: 'Was ist das chemische Symbol für Helium?',
      hr: 'Koji je kemijski simbol za helij?',
    },
    options: {
      en: ['He', 'H', 'Hi', 'Ho'],
      de: ['He', 'H', 'Hi', 'Ho'],
      hr: ['He', 'H', 'Hi', 'Ho'],
    },
    correctAnswerIndex: 0, // Correct answer: He
  },
  // Question 64
  {
    question: {
      en: 'Which country is known for the Great Barrier Reef?',
      de: 'Welches Land ist bekannt für das Great Barrier Reef?',
      hr: 'Koja je zemlja poznata po Velikom koraljnom grebenu?',
    },
    options: {
      en: ['Australia', 'Brazil', 'Indonesia', 'Thailand'],
      de: ['Australien', 'Brasilien', 'Indonesien', 'Thailand'],
      hr: ['Australija', 'Brazil', 'Indonezija', 'Tajland'],
    },
    correctAnswerIndex: 0, // Correct answer: Australia
  },
  // Question 65
  {
    question: {
      en: 'What is the capital of South Korea?',
      de: 'Was ist die Hauptstadt von Südkorea?',
      hr: 'Koji je glavni grad Južne Koreje?',
    },
    options: {
      en: ['Busan', 'Seoul', 'Incheon', 'Daegu'],
      de: ['Busan', 'Seoul', 'Incheon', 'Daegu'],
      hr: ['Busan', 'Seoul', 'Incheon', 'Daegu'],
    },
    correctAnswerIndex: 1, // Correct answer: Seoul
  },
  // Question 66
  {
    question: {
      en: "Which animal is known as the 'Ship of the Desert'?",
      de: "Welches Tier ist als 'Schiff der Wüste' bekannt?",
      hr: "Koja je životinja poznata kao 'Brod pustinje'?",
    },
    options: {
      en: ['Camel', 'Elephant', 'Horse', 'Donkey'],
      de: ['Kamel', 'Elefant', 'Pferd', 'Esel'],
      hr: ['Deva', 'Slon', 'Konj', 'Magarac'],
    },
    correctAnswerIndex: 0, // Correct answer: Camel
  },
  // Question 67
  {
    question: {
      en: 'What is the chemical symbol for nitrogen?',
      de: 'Was ist das chemische Symbol für Stickstoff?',
      hr: 'Koji je kemijski simbol za dušik?',
    },
    options: {
      en: ['Ni', 'N', 'No', 'Na'],
      de: ['Ni', 'N', 'No', 'Na'],
      hr: ['Ni', 'N', 'No', 'Na'],
    },
    correctAnswerIndex: 1, // Correct answer: N
  },
  // Question 69
  {
    question: {
      en: 'What is the capital of Egypt?',
      de: 'Was ist die Hauptstadt von Ägypten?',
      hr: 'Koji je glavni grad Egipta?',
    },
    options: {
      en: ['Alexandria', 'Cairo', 'Giza', 'Luxor'],
      de: ['Alexandria', 'Kairo', 'Gizeh', 'Luxor'],
      hr: ['Aleksandrija', 'Kairo', 'Giza', 'Luksor'],
    },
    correctAnswerIndex: 1, // Correct answer: Cairo
  },
  // Question 71
  {
    question: {
      en: 'What is the largest species of turtle?',
      de: 'Was ist die größte Schildkrötenart?',
      hr: 'Koja je najveća vrsta kornjače?',
    },
    options: {
      en: [
        'Green Turtle',
        'Leatherback Turtle',
        'Loggerhead Turtle',
        'Hawksbill Turtle',
      ],
      de: [
        'Grüne Meeresschildkröte',
        'Lederschildkröte',
        'Unechte Karettschildkröte',
        'Echte Karettschildkröte',
      ],
      hr: [
        'Zelena kornjača',
        'Leatherback kornjača',
        'Loggerhead kornjača',
        'Hawksbill kornjača',
      ],
    },
    correctAnswerIndex: 1, // Correct answer: Leatherback Turtle
  },
  // Question 73
  {
    question: {
      en: 'What is the capital of Mexico?',
      de: 'Was ist die Hauptstadt von Mexiko?',
      hr: 'Koji je glavni grad Meksika?',
    },
    options: {
      en: ['Guadalajara', 'Monterrey', 'Mexico City', 'Cancún'],
      de: ['Guadalajara', 'Monterrey', 'Mexiko-Stadt', 'Cancún'],
      hr: ['Guadalajara', 'Monterrey', 'Mexico City', 'Cancún'],
    },
    correctAnswerIndex: 2, // Correct answer: Mexico City
  },
  // Question 74
  {
    question: {
      en: "Which planet is known as the 'Ice Giant'?",
      de: "Welcher Planet ist als 'Eisriese' bekannt?",
      hr: "Koji je planet poznat kao 'Ledeni div'?",
    },
    options: {
      en: ['Uranus', 'Neptune', 'Saturn', 'Jupiter'],
      de: ['Uranus', 'Neptun', 'Saturn', 'Jupiter'],
      hr: ['Uran', 'Neptun', 'Saturn', 'Jupiter'],
    },
    correctAnswerIndex: 1, // Correct answer: Neptune
  },
  // Question 75
  {
    question: {
      en: 'What is the chemical symbol for calcium?',
      de: 'Was ist das chemische Symbol für Kalzium?',
      hr: 'Koji je kemijski simbol za kalcij?',
    },
    options: {
      en: ['Ca', 'Cl', 'Co', 'Cu'],
      de: ['Ca', 'Cl', 'Co', 'Cu'],
      hr: ['Ca', 'Cl', 'Co', 'Cu'],
    },
    correctAnswerIndex: 0, // Correct answer: Ca
  },
  // Question 77
  {
    question: {
      en: 'What is the capital of Turkey?',
      de: 'Was ist die Hauptstadt der Türkei?',
      hr: 'Koji je glavni grad Turske?',
    },
    options: {
      en: ['Istanbul', 'Ankara', 'Izmir', 'Antalya'],
      de: ['Istanbul', 'Ankara', 'Izmir', 'Antalya'],
      hr: ['Istanbul', 'Ankara', 'Izmir', 'Antalya'],
    },
    correctAnswerIndex: 1, // Correct answer: Ankara
  },
  // Question 78
  {
    question: {
      en: 'Which gas is used in balloons to make them float?',
      de: 'Welches Gas wird in Ballons verwendet, um sie schweben zu lassen?',
      hr: 'Koji plin se koristi u balonima kako bi lebdjeli?',
    },
    options: {
      en: ['Oxygen', 'Helium', 'Hydrogen', 'Nitrogen'],
      de: ['Sauerstoff', 'Helium', 'Wasserstoff', 'Stickstoff'],
      hr: ['Kisik', 'Helij', 'Vodik', 'Dušik'],
    },
    correctAnswerIndex: 1, // Correct answer: Helium
  },
  // Question 79
  {
    question: {
      en: 'What is the largest species of lizard?',
      de: 'Was ist die größte Echsenart?',
      hr: 'Koja je najveća vrsta guštera?',
    },
    options: {
      en: ['Komodo Dragon', 'Iguana', 'Gecko', 'Chameleon'],
      de: ['Komodowaran', 'Leguan', 'Gecko', 'Chamäleon'],
      hr: ['Komodo zmaj', 'Iguana', 'Gecko', 'Kameleon'],
    },
    correctAnswerIndex: 0, // Correct answer: Komodo Dragon
  },
  // Question 80
  {
    question: {
      en: 'Which country is known for the invention of the airplane?',
      de: 'Welches Land ist bekannt für die Erfindung des Flugzeugs?',
      hr: 'Koja je zemlja poznata po izumu aviona?',
    },
    options: {
      en: ['USA', 'Germany', 'France', 'United Kingdom'],
      de: ['USA', 'Deutschland', 'Frankreich', 'Vereinigtes Königreich'],
      hr: ['SAD', 'Njemačka', 'Francuska', 'Ujedinjeno Kraljevstvo'],
    },
    correctAnswerIndex: 0, // Correct answer: USA
  },
  // Question 81
  {
    question: {
      en: 'What is the capital of Greece?',
      de: 'Was ist die Hauptstadt von Griechenland?',
      hr: 'Koji je glavni grad Grčke?',
    },
    options: {
      en: ['Athens', 'Thessaloniki', 'Patras', 'Heraklion'],
      de: ['Athen', 'Thessaloniki', 'Patras', 'Heraklion'],
      hr: ['Atena', 'Solun', 'Patras', 'Heraklion'],
    },
    correctAnswerIndex: 0, // Correct answer: Athens
  },
  // Question 82
  {
    question: {
      en: 'Which planet is known for its Great Red Spot?',
      de: 'Welcher Planet ist bekannt für seinen Großen Roten Fleck?',
      hr: 'Koji je planet poznat po Velikoj crvenoj pjegi?',
    },
    options: {
      en: ['Saturn', 'Jupiter', 'Mars', 'Neptune'],
      de: ['Saturn', 'Jupiter', 'Mars', 'Neptun'],
      hr: ['Saturn', 'Jupiter', 'Mars', 'Neptun'],
    },
    correctAnswerIndex: 1, // Correct answer: Jupiter
  },
  // Question 84
  {
    question: {
      en: 'Which country is known for the invention of the telescope?',
      de: 'Welches Land ist bekannt für die Erfindung des Teleskops?',
      hr: 'Koja je zemlja poznata po izumu teleskopa?',
    },
    options: {
      en: ['Italy', 'Netherlands', 'Germany', 'France'],
      de: ['Italien', 'Niederlande', 'Deutschland', 'Frankreich'],
      hr: ['Italija', 'Nizozemska', 'Njemačka', 'Francuska'],
    },
    correctAnswerIndex: 1, // Correct answer: Netherlands
  },
  // Question 85
  {
    question: {
      en: 'What is the capital of Sweden?',
      de: 'Was ist die Hauptstadt von Schweden?',
      hr: 'Koji je glavni grad Švedske?',
    },
    options: {
      en: ['Gothenburg', 'Stockholm', 'Malmö', 'Uppsala'],
      de: ['Göteborg', 'Stockholm', 'Malmö', 'Uppsala'],
      hr: ['Göteborg', 'Stockholm', 'Malmö', 'Uppsala'],
    },
    correctAnswerIndex: 1, // Correct answer: Stockholm
  },
  // Question 86
  {
    question: {
      en: "Which animal is known as the 'King of the Beasts'?",
      de: "Welches Tier ist als 'König der Tiere' bekannt?",
      hr: "Koja je životinja poznata kao 'Kralj životinja'?",
    },
    options: {
      en: ['Tiger', 'Lion', 'Elephant', 'Gorilla'],
      de: ['Tiger', 'Löwe', 'Elefant', 'Gorilla'],
      hr: ['Tigar', 'Lav', 'Slon', 'Gorila'],
    },
    correctAnswerIndex: 1, // Correct answer: Lion
  },
  // Question 88
  {
    question: {
      en: 'Which country is known for the invention of the steam engine?',
      de: 'Welches Land ist bekannt für die Erfindung der Dampfmaschine?',
      hr: 'Koja je zemlja poznata po izumu parnog stroja?',
    },
    options: {
      en: ['USA', 'United Kingdom', 'France', 'Germany'],
      de: ['USA', 'Vereinigtes Königreich', 'Frankreich', 'Deutschland'],
      hr: ['SAD', 'Ujedinjeno Kraljevstvo', 'Francuska', 'Njemačka'],
    },
    correctAnswerIndex: 1, // Correct answer: United Kingdom
  },
  // Question 89
  {
    question: {
      en: 'What is the capital of Norway?',
      de: 'Was ist die Hauptstadt von Norwegen?',
      hr: 'Koji je glavni grad Norveške?',
    },
    options: {
      en: ['Bergen', 'Oslo', 'Trondheim', 'Stavanger'],
      de: ['Bergen', 'Oslo', 'Trondheim', 'Stavanger'],
      hr: ['Bergen', 'Oslo', 'Trondheim', 'Stavanger'],
    },
    correctAnswerIndex: 1, // Correct answer: Oslo
  },
  // Question 90
  {
    question: {
      en: "Which gas is known as the 'Silent Killer'?",
      de: "Welches Gas ist als 'Stiller Killer' bekannt?",
      hr: "Koji plin je poznat kao 'Tihi ubojica'?",
    },
    options: {
      en: ['Oxygen', 'Carbon Monoxide', 'Nitrogen', 'Hydrogen'],
      de: ['Sauerstoff', 'Kohlenmonoxid', 'Stickstoff', 'Wasserstoff'],
      hr: ['Kisik', 'Ugljični monoksid', 'Dušik', 'Vodik'],
    },
    correctAnswerIndex: 1, // Correct answer: Carbon Monoxide
  },
  // Question 92
  {
    question: {
      en: 'Which country is known for the invention of the computer?',
      de: 'Welches Land ist bekannt für die Erfindung des Computers?',
      hr: 'Koja je zemlja poznata po izumu računala?',
    },
    options: {
      en: ['USA', 'Germany', 'United Kingdom', 'France'],
      de: ['USA', 'Deutschland', 'Vereinigtes Königreich', 'Frankreich'],
      hr: ['SAD', 'Njemačka', 'Ujedinjeno Kraljevstvo', 'Francuska'],
    },
    correctAnswerIndex: 2, // Correct answer: United Kingdom
  },
  // Question 93
  {
    question: {
      en: 'What is the capital of Switzerland?',
      de: 'Was ist die Hauptstadt der Schweiz?',
      hr: 'Koji je glavni grad Švicarske?',
    },
    options: {
      en: ['Zurich', 'Geneva', 'Bern', 'Basel'],
      de: ['Zürich', 'Genf', 'Bern', 'Basel'],
      hr: ['Zürich', 'Ženeva', 'Bern', 'Basel'],
    },
    correctAnswerIndex: 2, // Correct answer: Bern
  },
  // Question 95
  {
    question: {
      en: 'What is the chemical symbol for magnesium?',
      de: 'Was ist das chemische Symbol für Magnesium?',
      hr: 'Koji je kemijski simbol za magnezij?',
    },
    options: {
      en: ['Mg', 'Ma', 'Mn', 'Mo'],
      de: ['Mg', 'Ma', 'Mn', 'Mo'],
      hr: ['Mg', 'Ma', 'Mn', 'Mo'],
    },
    correctAnswerIndex: 0, // Correct answer: Mg
  },
  // Question 97
  {
    question: {
      en: 'What is the capital of Denmark?',
      de: 'Was ist die Hauptstadt von Dänemark?',
      hr: 'Koji je glavni grad Danske?',
    },
    options: {
      en: ['Copenhagen', 'Aarhus', 'Odense', 'Aalborg'],
      de: ['Kopenhagen', 'Aarhus', 'Odense', 'Aalborg'],
      hr: ['Kopenhagen', 'Aarhus', 'Odense', 'Aalborg'],
    },
    correctAnswerIndex: 0, // Correct answer: Copenhagen
  },
  // Question 98
  {
    question: {
      en: "Which gas is known as the 'Greenhouse Gas'?",
      de: "Welches Gas ist als 'Treibhausgas' bekannt?",
      hr: "Koji plin je poznat kao 'Staklenički plin'?",
    },
    options: {
      en: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Hydrogen'],
      de: ['Sauerstoff', 'Kohlendioxid', 'Stickstoff', 'Wasserstoff'],
      hr: ['Kisik', 'Ugljični dioksid', 'Dušik', 'Vodik'],
    },
    correctAnswerIndex: 1, // Correct answer: Carbon Dioxide
  },
  // Question 101
  {
    question: {
      en: 'What is the capital of Portugal?',
      de: 'Was ist die Hauptstadt von Portugal?',
      hr: 'Koji je glavni grad Portugala?',
    },
    options: {
      en: ['Lisbon', 'Porto', 'Braga', 'Coimbra'],
      de: ['Lissabon', 'Porto', 'Braga', 'Coimbra'],
      hr: ['Lisabon', 'Porto', 'Braga', 'Coimbra'],
    },
    correctAnswerIndex: 0, // Correct answer: Lisbon
  },
  // Question 102
  {
    question: {
      en: "Which planet is known as the 'Blue Planet'?",
      de: "Welcher Planet ist als 'Blauer Planet' bekannt?",
      hr: "Koji je planet poznat kao 'Plavi planet'?",
    },
    options: {
      en: ['Earth', 'Neptune', 'Uranus', 'Saturn'],
      de: ['Erde', 'Neptun', 'Uranus', 'Saturn'],
      hr: ['Zemlja', 'Neptun', 'Uran', 'Saturn'],
    },
    correctAnswerIndex: 0, // Correct answer: Earth
  },
  // Question 103
  {
    question: {
      en: 'What is the chemical symbol for chlorine?',
      de: 'Was ist das chemische Symbol für Chlor?',
      hr: 'Koji je kemijski simbol za klor?',
    },
    options: {
      en: ['Cl', 'Ch', 'Co', 'Cr'],
      de: ['Cl', 'Ch', 'Co', 'Cr'],
      hr: ['Cl', 'Ch', 'Co', 'Cr'],
    },
    correctAnswerIndex: 0, // Correct answer: Cl
  },
  // Question 104
  {
    question: {
      en: 'Which country is known for the invention of the compass?',
      de: 'Welches Land ist bekannt für die Erfindung des Kompasses?',
      hr: 'Koja je zemlja poznata po izumu kompasa?',
    },
    options: {
      en: ['China', 'Italy', 'Greece', 'Egypt'],
      de: ['China', 'Italien', 'Griechenland', 'Ägypten'],
      hr: ['Kina', 'Italija', 'Grčka', 'Egipat'],
    },
    correctAnswerIndex: 0, // Correct answer: China
  },
  // Question 105
  {
    question: {
      en: 'What is the capital of Finland?',
      de: 'Was ist die Hauptstadt von Finnland?',
      hr: 'Koji je glavni grad Finske?',
    },
    options: {
      en: ['Helsinki', 'Espoo', 'Tampere', 'Vantaa'],
      de: ['Helsinki', 'Espoo', 'Tampere', 'Vantaa'],
      hr: ['Helsinki', 'Espoo', 'Tampere', 'Vantaa'],
    },
    correctAnswerIndex: 0, // Correct answer: Helsinki
  },
  // Question 107
  {
    question: {
      en: 'What is the chemical symbol for sulfur?',
      de: 'Was ist das chemische Symbol für Schwefel?',
      hr: 'Koji je kemijski simbol za sumpor?',
    },
    options: {
      en: ['S', 'Su', 'Sl', 'Sr'],
      de: ['S', 'Su', 'Sl', 'Sr'],
      hr: ['S', 'Su', 'Sl', 'Sr'],
    },
    correctAnswerIndex: 0, // Correct answer: S
  },
  // Question 108
  {
    question: {
      en: 'Which country is known for the invention of the printing press?',
      de: 'Welches Land ist bekannt für die Erfindung des Buchdrucks?',
      hr: 'Koja je zemlja poznata po izumu tiskarskog stroja?',
    },
    options: {
      en: ['Germany', 'China', 'Italy', 'France'],
      de: ['Deutschland', 'China', 'Italien', 'Frankreich'],
      hr: ['Njemačka', 'Kina', 'Italija', 'Francuska'],
    },
    correctAnswerIndex: 0, // Correct answer: Germany
  },
  // Question 109
  {
    question: {
      en: 'What is the capital of Poland?',
      de: 'Was ist die Hauptstadt von Polen?',
      hr: 'Koji je glavni grad Poljske?',
    },
    options: {
      en: ['Warsaw', 'Kraków', 'Łódź', 'Wrocław'],
      de: ['Warschau', 'Krakau', 'Lodz', 'Breslau'],
      hr: ['Varšava', 'Krakov', 'Łódź', 'Wrocław'],
    },
    correctAnswerIndex: 0, // Correct answer: Warsaw
  },
  // Question 110
  {
    question: {
      en: "Which gas is known as the 'Tear Gas'?",
      de: "Welches Gas ist als 'Tränengas' bekannt?",
      hr: "Koji plin je poznat kao 'Suzavac'?",
    },
    options: {
      en: ['Oxygen', 'Chlorine', 'Nitrogen', 'Hydrogen'],
      de: ['Sauerstoff', 'Chlor', 'Stickstoff', 'Wasserstoff'],
      hr: ['Kisik', 'Klor', 'Dušik', 'Vodik'],
    },
    correctAnswerIndex: 1, // Correct answer: Chlorine
  },
  // Question 111
  {
    question: {
      en: 'What is the largest species of snake?',
      de: 'Was ist die größte Schlangenart?',
      hr: 'Koja je najveća vrsta zmije?',
    },
    options: {
      en: ['Python', 'Anaconda', 'Cobra', 'Rattlesnake'],
      de: ['Python', 'Anakonda', 'Kobra', 'Klapperschlange'],
      hr: ['Piton', 'Anakonda', 'Kobra', 'Zvečarka'],
    },
    correctAnswerIndex: 1, // Correct answer: Anaconda
  },
  // Question 112
  {
    question: {
      en: 'Which country is known for the invention of the camera?',
      de: 'Welches Land ist bekannt für die Erfindung der Kamera?',
      hr: 'Koja je zemlja poznata po izumu kamere?',
    },
    options: {
      en: ['France', 'Germany', 'USA', 'United Kingdom'],
      de: ['Frankreich', 'Deutschland', 'USA', 'Vereinigtes Königreich'],
      hr: ['Francuska', 'Njemačka', 'SAD', 'Ujedinjeno Kraljevstvo'],
    },
    correctAnswerIndex: 0, // Correct answer: France
  },
  // Question 113
  {
    question: {
      en: 'What is the capital of Austria?',
      de: 'Was ist die Hauptstadt von Österreich?',
      hr: 'Koji je glavni grad Austrije?',
    },
    options: {
      en: ['Vienna', 'Graz', 'Salzburg', 'Innsbruck'],
      de: ['Wien', 'Graz', 'Salzburg', 'Innsbruck'],
      hr: ['Beč', 'Graz', 'Salzburg', 'Innsbruck'],
    },
    correctAnswerIndex: 0, // Correct answer: Vienna
  },
  // Question 115
  {
    question: {
      en: 'What is the chemical symbol for phosphorus?',
      de: 'Was ist das chemische Symbol für Phosphor?',
      hr: 'Koji je kemijski simbol za fosfor?',
    },
    options: {
      en: ['P', 'Ph', 'Po', 'Ps'],
      de: ['P', 'Ph', 'Po', 'Ps'],
      hr: ['P', 'Ph', 'Po', 'Ps'],
    },
    correctAnswerIndex: 0, // Correct answer: P
  },
  // Question 117
  {
    question: {
      en: 'What is the capital of Belgium?',
      de: 'Was ist die Hauptstadt von Belgien?',
      hr: 'Koji je glavni grad Belgije?',
    },
    options: {
      en: ['Brussels', 'Antwerp', 'Ghent', 'Bruges'],
      de: ['Brüssel', 'Antwerpen', 'Gent', 'Brügge'],
      hr: ['Brisel', 'Antwerpen', 'Gent', 'Brugge'],
    },
    correctAnswerIndex: 0, // Correct answer: Brussels
  },
  // Question 120
  {
    question: {
      en: 'Which country is known for the invention of the light bulb?',
      de: 'Welches Land ist bekannt für die Erfindung der Glühbirne?',
      hr: 'Koja je zemlja poznata po izumu žarulje?',
    },
    options: {
      en: ['USA', 'Germany', 'United Kingdom', 'France'],
      de: ['USA', 'Deutschland', 'Vereinigtes Königreich', 'Frankreich'],
      hr: ['SAD', 'Njemačka', 'Ujedinjeno Kraljevstvo', 'Francuska'],
    },
    correctAnswerIndex: 0, // Correct answer: USA
  },
  // Question 121
  {
    question: {
      en: 'What is the capital of Ireland?',
      de: 'Was ist die Hauptstadt von Irland?',
      hr: 'Koji je glavni grad Irske?',
    },
    options: {
      en: ['Dublin', 'Cork', 'Galway', 'Limerick'],
      de: ['Dublin', 'Cork', 'Galway', 'Limerick'],
      hr: ['Dublin', 'Cork', 'Galway', 'Limerick'],
    },
    correctAnswerIndex: 0, // Correct answer: Dublin
  },
  // Question 123
  {
    question: {
      en: 'What is the chemical symbol for zinc?',
      de: 'Was ist das chemische Symbol für Zink?',
      hr: 'Koji je kemijski simbol za cink?',
    },
    options: {
      en: ['Zn', 'Zi', 'Zc', 'Zk'],
      de: ['Zn', 'Zi', 'Zc', 'Zk'],
      hr: ['Zn', 'Zi', 'Zc', 'Zk'],
    },
    correctAnswerIndex: 0, // Correct answer: Zn
  },
  // Question 125
  {
    question: {
      en: 'What is the capital of Hungary?',
      de: 'Was ist die Hauptstadt von Ungarn?',
      hr: 'Koji je glavni grad Mađarske?',
    },
    options: {
      en: ['Budapest', 'Debrecen', 'Szeged', 'Pécs'],
      de: ['Budapest', 'Debrecen', 'Szeged', 'Pécs'],
      hr: ['Budimpešta', 'Debrecen', 'Szeged', 'Pécs'],
    },
    correctAnswerIndex: 0, // Correct answer: Budapest
  },
  // Question 126
  {
    question: {
      en: "Which animal is known as the 'King of the Arctic'?",
      de: "Welches Tier ist als 'König der Arktis' bekannt?",
      hr: "Koja je životinja poznata kao 'Kralj Arktika'?",
    },
    options: {
      en: ['Polar Bear', 'Walrus', 'Arctic Fox', 'Seal'],
      de: ['Eisbär', 'Walross', 'Polarfuchs', 'Robbe'],
      hr: ['Polarni medvjed', 'Morž', 'Arktička lisica', 'Tuljan'],
    },
    correctAnswerIndex: 0, // Correct answer: Polar Bear
  },
  // Question 127
  {
    question: {
      en: 'What is the chemical symbol for copper?',
      de: 'Was ist das chemische Symbol für Kupfer?',
      hr: 'Koji je kemijski simbol za bakar?',
    },
    options: {
      en: ['Cu', 'Co', 'Cp', 'Cr'],
      de: ['Cu', 'Co', 'Cp', 'Cr'],
      hr: ['Cu', 'Co', 'Cp', 'Cr'],
    },
    correctAnswerIndex: 0, // Correct answer: Cu
  },
  // Question 129
  {
    question: {
      en: 'What is the capital of Romania?',
      de: 'Was ist die Hauptstadt von Rumänien?',
      hr: 'Koji je glavni grad Rumunjske?',
    },
    options: {
      en: ['Bucharest', 'Cluj-Napoca', 'Timișoara', 'Iași'],
      de: ['Bukarest', 'Klausenburg', 'Temeswar', 'Jassy'],
      hr: ['Bukurešt', 'Cluj-Napoca', 'Timișoara', 'Iași'],
    },
    correctAnswerIndex: 0, // Correct answer: Bucharest
  },
  // Question 133
  {
    question: {
      en: 'What is the capital of Slovakia?',
      de: 'Was ist die Hauptstadt der Slowakei?',
      hr: 'Koji je glavni grad Slovačke?',
    },
    options: {
      en: ['Bratislava', 'Košice', 'Prešov', 'Žilina'],
      de: ['Bratislava', 'Košice', 'Prešov', 'Žilina'],
      hr: ['Bratislava', 'Košice', 'Prešov', 'Žilina'],
    },
    correctAnswerIndex: 0, // Correct answer: Bratislava
  },
  // Question 136
  {
    question: {
      en: 'Which country is known for the invention of the radio?',
      de: 'Welches Land ist bekannt für die Erfindung des Radios?',
      hr: 'Koja je zemlja poznata po izumu radija?',
    },
    options: {
      en: ['USA', 'Italy', 'Germany', 'United Kingdom'],
      de: ['USA', 'Italien', 'Deutschland', 'Vereinigtes Königreich'],
      hr: ['SAD', 'Italija', 'Njemačka', 'Ujedinjeno Kraljevstvo'],
    },
    correctAnswerIndex: 2, // Correct answer: Germany
  },
];



