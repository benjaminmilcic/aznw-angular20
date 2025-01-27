export interface Question {
  question: { en: string; de: string; hr: string };
  options: { en: string[]; de: string[]; hr: string[] };
  correctAnswerIndex: number;
}

export const QUESTIONS: Question[] = [
  // Frage 1
  {
    question: {
      en: 'How many planets are in our solar system?',
      de: 'Wie viele Planeten hat unser Sonnensystem?',
      hr: 'Koliko planeta ima u našem Sunčevom sustavu?',
    },
    options: {
      en: ['7', '8', '9', '10'],
      de: ['7', '8', '9', '10'],
      hr: ['7', '8', '9', '10'],
    },
    correctAnswerIndex: 1, // Die richtige Antwort ist "8" (Index 1)
  },
  // Frage 2
  {
    question: {
      en: 'Who developed the theory of relativity?',
      de: 'Wer hat die Relativitätstheorie entwickelt?',
      hr: 'Tko je razvio teoriju relativnosti?',
    },
    options: {
      en: [
        'Isaac Newton',
        'Albert Einstein',
        'Stephen Hawking',
        'Galileo Galilei',
      ],
      de: [
        'Isaac Newton',
        'Albert Einstein',
        'Stephen Hawking',
        'Galileo Galilei',
      ],
      hr: [
        'Isaac Newton',
        'Albert Einstein',
        'Stephen Hawking',
        'Galileo Galilei',
      ],
    },
    correctAnswerIndex: 1, // Die richtige Antwort ist "Albert Einstein" (Index 1)
  },
  // Frage 3
  {
    question: {
      en: 'Which is the largest country in the world by area?',
      de: 'Welches ist das größte Land der Welt nach Fläche?',
      hr: 'Koja je najveća država na svijetu po površini?',
    },
    options: {
      en: ['China', 'USA', 'Russia', 'Canada'],
      de: ['China', 'USA', 'Russland', 'Kanada'],
      hr: ['Kina', 'SAD', 'Rusija', 'Kanada'],
    },
    correctAnswerIndex: 2, // Die richtige Antwort ist "Russia" (Index 2)
  },
  // Frage 4
  {
    question: {
      en: 'Which company developed the Android operating system?',
      de: 'Welches Unternehmen entwickelte das Betriebssystem Android?',
      hr: 'Koja je tvrtka razvila operativni sustav Android?',
    },
    options: {
      en: ['Apple', 'Microsoft', 'Google', 'Samsung'],
      de: ['Apple', 'Microsoft', 'Google', 'Samsung'],
      hr: ['Apple', 'Microsoft', 'Google', 'Samsung'],
    },
    correctAnswerIndex: 2, // Die richtige Antwort ist "Google" (Index 2)
  },
  // Frage 5
  {
    question: {
      en: "What does the abbreviation 'HTML' stand for?",
      de: "Was bedeutet die Abkürzung 'HTML'?",
      hr: "Što znači kratica 'HTML'?",
    },
    options: {
      en: [
        'Hyperlinks and Text Markup Language',
        'Home Tool Markup Language',
        'Hyper Text Markup Language',
        'Hyper Text Machine Language',
      ],
      de: [
        'Hyperlinks and Text Markup Language',
        'Home Tool Markup Language',
        'Hyper Text Markup Language',
        'Hyper Text Machine Language',
      ],
      hr: [
        'Hyperveze i jezik za označavanje teksta',
        'Home Tool Markup Language',
        'Hyper Text Markup Language',
        'Hyper Text Machine Language',
      ],
    },
    correctAnswerIndex: 2, // Die richtige Antwort ist "Hyper Text Markup Language" (Index 2)
  },
  // Frage 6
  {
    question: {
      en: 'In which year did World War II end?',
      de: 'In welchem Jahr endete der Zweite Weltkrieg?',
      hr: 'Koje godine je završio Drugi svjetski rat?',
    },
    options: {
      en: ['1943', '1945', '1950', '1939'],
      de: ['1943', '1945', '1950', '1939'],
      hr: ['1943', '1945', '1950', '1939'],
    },
    correctAnswerIndex: 1, // Die richtige Antwort ist "1945" (Index 1)
  },
  // Frage 7
  {
    question: {
      en: "Which element has the chemical symbol 'O'?",
      de: "Welches Element hat das chemische Symbol 'O'?",
      hr: "Koji element ima kemijski simbol 'O'?",
    },
    options: {
      en: ['Gold', 'Oxygen', 'Carbon', 'Iron'],
      de: ['Gold', 'Sauerstoff', 'Kohlenstoff', 'Eisen'],
      hr: ['Zlato', 'Kisik', 'Ugljik', 'Željezo'],
    },
    correctAnswerIndex: 1, // Die richtige Antwort ist "Oxygen" (Index 1)
  },
  // Frage 8
  {
    question: {
      en: "Who played the lead role in 'Titanic'?",
      de: "Wer spielte die Hauptrolle in 'Titanic'?",
      hr: "Tko je glumio glavnu ulogu u 'Titanicu'?",
    },
    options: {
      en: ['Brad Pitt', 'Leonardo DiCaprio', 'Tom Cruise', 'Johnny Depp'],
      de: ['Brad Pitt', 'Leonardo DiCaprio', 'Tom Cruise', 'Johnny Depp'],
      hr: ['Brad Pitt', 'Leonardo DiCaprio', 'Tom Cruise', 'Johnny Depp'],
    },
    correctAnswerIndex: 1, // Die richtige Antwort ist "Leonardo DiCaprio" (Index 1)
  },
  // Frage 9
  {
    question: {
      en: 'In which sport is a puck used?',
      de: 'In welcher Sportart spielt man mit einem Puck?',
      hr: 'U kojem se sportu koristi pak?',
    },
    options: {
      en: ['Football', 'Ice Hockey', 'Basketball', 'Tennis'],
      de: ['Fußball', 'Eishockey', 'Basketball', 'Tennis'],
      hr: ['Nogomet', 'Hokej na ledu', 'Košarka', 'Tenis'],
    },
    correctAnswerIndex: 1, // Die richtige Antwort ist "Ice Hockey" (Index 1)
  },
  // Frage 10
  {
    question: {
      en: 'What is the square root of 64?',
      de: 'Was ist die Quadratwurzel von 64?',
      hr: 'Koliki je kvadratni korijen od 64?',
    },
    options: {
      en: ['6', '8', '10', '12'],
      de: ['6', '8', '10', '12'],
      hr: ['6', '8', '10', '12'],
    },
    correctAnswerIndex: 1, // Die richtige Antwort ist "8" (Index 1)
  },
  // Frage 11
  {
    question: {
      en: 'Which planet is known as the Red Planet?',
      de: 'Welcher Planet wird als der Rote Planet bezeichnet?',
      hr: 'Koji planet je poznat kao Crveni planet?',
    },
    options: {
      en: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
      de: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
      hr: ['Venera', 'Mars', 'Jupiter', 'Saturn'],
    },
    correctAnswerIndex: 1, // Die richtige Antwort ist "Mars" (Index 1)
  },
  // Frage 12
  {
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
    correctAnswerIndex: 0, // Die richtige Antwort ist "William Shakespeare" (Index 0)
  },
  // Frage 13
  {
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
    correctAnswerIndex: 2, // Die richtige Antwort ist "Paris" (Index 2)
  },
  // Frage 14
  {
    question: {
      en: "Which gas is most abundant in the Earth's atmosphere?",
      de: 'Welches Gas ist in der Erdatmosphäre am häufigsten?',
      hr: 'Koji plin je najzastupljeniji u Zemljinoj atmosferi?',
    },
    options: {
      en: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Hydrogen'],
      de: ['Sauerstoff', 'Kohlenstoffdioxid', 'Stickstoff', 'Wasserstoff'],
      hr: ['Kisik', 'Ugljični dioksid', 'Dušik', 'Vodik'],
    },
    correctAnswerIndex: 2, // Die richtige Antwort ist "Nitrogen" (Index 2)
  },
  // Frage 15
  {
    question: {
      en: 'What is the largest mammal in the world?',
      de: 'Welches ist das größte Säugetier der Welt?',
      hr: 'Koji je najveći sisavac na svijetu?',
    },
    options: {
      en: ['Elephant', 'Blue Whale', 'Giraffe', 'Hippopotamus'],
      de: ['Elefant', 'Blauwal', 'Giraffe', 'Nilpferd'],
      hr: ['Slon', 'Plavi kit', 'Žirafa', 'Nilski konj'],
    },
    correctAnswerIndex: 1, // Die richtige Antwort ist "Blue Whale" (Index 1)
  },
  // Frage 16
  {
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
    correctAnswerIndex: 1, // Die richtige Antwort ist "2" (Index 1)
  },
  // Frage 17
  {
    question: {
      en: 'Who painted the Mona Lisa?',
      de: 'Wer malte die Mona Lisa?',
      hr: 'Tko je naslikao Mona Lisu?',
    },
    options: {
      en: [
        'Vincent van Gogh',
        'Pablo Picasso',
        'Leonardo da Vinci',
        'Claude Monet',
      ],
      de: [
        'Vincent van Gogh',
        'Pablo Picasso',
        'Leonardo da Vinci',
        'Claude Monet',
      ],
      hr: [
        'Vincent van Gogh',
        'Pablo Picasso',
        'Leonardo da Vinci',
        'Claude Monet',
      ],
    },
    correctAnswerIndex: 2, // Die richtige Antwort ist "Leonardo da Vinci" (Index 2)
  },
  // Frage 18
  {
    question: {
      en: 'Which country has the most population?',
      de: 'Welches Land hat die meisten Einwohner?',
      hr: 'Koja zemlja ima najviše stanovnika?',
    },
    options: {
      en: ['India', 'USA', 'China', 'Russia'],
      de: ['Indien', 'USA', 'China', 'Russland'],
      hr: ['Indija', 'SAD', 'Kina', 'Rusija'],
    },
    correctAnswerIndex: 2, // Die richtige Antwort ist "China" (Index 2)
  },
  // Frage 19
  {
    question: {
      en: 'What is the fastest land animal?',
      de: 'Welches ist das schnellste Landtier?',
      hr: 'Koja je najbrža kopnena životinja?',
    },
    options: {
      en: ['Cheetah', 'Lion', 'Horse', 'Antelope'],
      de: ['Gepard', 'Löwe', 'Pferd', 'Antilope'],
      hr: ['Gepard', 'Lav', 'Konj', 'Antilopa'],
    },
    correctAnswerIndex: 0, // Die richtige Antwort ist "Cheetah" (Index 0)
  },
  // Frage 20
  {
    question: {
      en: 'Which ocean is the largest?',
      de: 'Welcher Ozean ist der größte?',
      hr: 'Koji je ocean najveći?',
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
    correctAnswerIndex: 3, // Die richtige Antwort ist "Pacific Ocean" (Index 3)
  },
  // Frage 21
  {
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
    correctAnswerIndex: 0, // Die richtige Antwort ist "Au" (Index 0)
  },
  // Frage 22
  {
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
    correctAnswerIndex: 1, // Die richtige Antwort ist "Japan" (Index 1)
  },
  // Frage 23
  {
    question: {
      en: "Who wrote '1984'?",
      de: "Wer schrieb '1984'?",
      hr: "Tko je napisao '1984'?",
    },
    options: {
      en: ['George Orwell', 'Aldous Huxley', 'Ray Bradbury', 'J.R.R. Tolkien'],
      de: ['George Orwell', 'Aldous Huxley', 'Ray Bradbury', 'J.R.R. Tolkien'],
      hr: ['George Orwell', 'Aldous Huxley', 'Ray Bradbury', 'J.R.R. Tolkien'],
    },
    correctAnswerIndex: 0, // Die richtige Antwort ist "George Orwell" (Index 0)
  },
  // Frage 24
  {
    question: {
      en: 'What is the largest desert in the world?',
      de: 'Welches ist die größte Wüste der Welt?',
      hr: 'Koja je najveća pustinja na svijetu?',
    },
    options: {
      en: ['Sahara', 'Arabian Desert', 'Gobi Desert', 'Antarctica'],
      de: ['Sahara', 'Arabische Wüste', 'Gobi-Wüste', 'Antarktis'],
      hr: ['Sahara', 'Arapska pustinja', 'Gobi pustinja', 'Antarktika'],
    },
    correctAnswerIndex: 3, // Die richtige Antwort ist "Antarctica" (Index 3)
  },
  // Frage 25
  {
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
    correctAnswerIndex: 1, // Die richtige Antwort ist "Mercury" (Index 1)
  },
  // Frage 26
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
    correctAnswerIndex: 2, // Die richtige Antwort ist "Canberra" (Index 2)
  },
  // Frage 27
  {
    question: {
      en: "Which element has the chemical symbol 'Na'?",
      de: "Welches Element hat das chemische Symbol 'Na'?",
      hr: "Koji element ima kemijski simbol 'Na'?",
    },
    options: {
      en: ['Sodium', 'Nickel', 'Nitrogen', 'Neon'],
      de: ['Natrium', 'Nickel', 'Stickstoff', 'Neon'],
      hr: ['Natrij', 'Nikal', 'Dušik', 'Neon'],
    },
    correctAnswerIndex: 0, // Die richtige Antwort ist "Sodium" (Index 0)
  },
  // Frage 28
  {
    question: {
      en: 'Who discovered penicillin?',
      de: 'Wer entdeckte Penicillin?',
      hr: 'Tko je otkrio penicilin?',
    },
    options: {
      en: ['Alexander Fleming', 'Louis Pasteur', 'Marie Curie', 'Isaac Newton'],
      de: ['Alexander Fleming', 'Louis Pasteur', 'Marie Curie', 'Isaac Newton'],
      hr: ['Alexander Fleming', 'Louis Pasteur', 'Marie Curie', 'Isaac Newton'],
    },
    correctAnswerIndex: 0, // Die richtige Antwort ist "Alexander Fleming" (Index 0)
  },
  // Frage 29
  {
    question: {
      en: 'What is the largest ocean on Earth?',
      de: 'Welcher ist der größte Ozean der Erde?',
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
    correctAnswerIndex: 3, // Die richtige Antwort ist "Pacific Ocean" (Index 3)
  },
  // Frage 30
  {
    question: {
      en: 'Which country is famous for inventing pizza?',
      de: 'Welches Land ist berühmt für die Erfindung der Pizza?',
      hr: 'Koja je zemlja poznata po izumu pizze?',
    },
    options: {
      en: ['France', 'Italy', 'Spain', 'Greece'],
      de: ['Frankreich', 'Italien', 'Spanien', 'Griechenland'],
      hr: ['Francuska', 'Italija', 'Španjolska', 'Grčka'],
    },
    correctAnswerIndex: 1, // Die richtige Antwort ist "Italy" (Index 1)
  },
  // Frage 31
  {
    question: {
      en: 'What is the smallest bone in the human body?',
      de: 'Welches ist der kleinste Knochen im menschlichen Körper?',
      hr: 'Koja je najmanja kost u ljudskom tijelu?',
    },
    options: {
      en: ['Femur', 'Stapes', 'Tibia', 'Radius'],
      de: ['Femur', 'Steigbügel', 'Schienbein', 'Speiche'],
      hr: ['Butna kost', 'Stremen', 'Potkoljenica', 'Palčana kost'],
    },
    correctAnswerIndex: 1, // Die richtige Antwort ist "Stapes" (Index 1)
  },
  // Frage 32
  {
    question: {
      en: 'Which language is the most widely spoken in the world?',
      de: 'Welche Sprache wird weltweit am häufigsten gesprochen?',
      hr: 'Koji je jezik najrašireniji u svijetu?',
    },
    options: {
      en: ['English', 'Mandarin Chinese', 'Spanish', 'Hindi'],
      de: ['Englisch', 'Mandarin-Chinesisch', 'Spanisch', 'Hindi'],
      hr: ['Engleski', 'Mandarinski kineski', 'Španjolski', 'Hindi'],
    },
    correctAnswerIndex: 1, // Die richtige Antwort ist "Mandarin Chinese" (Index 1)
  },
  // Frage 33
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
    correctAnswerIndex: 2, // Die richtige Antwort ist "Ottawa" (Index 2)
  },
  // Frage 34
  {
    question: {
      en: "Which animal is known as the 'King of the Jungle'?",
      de: "Welches Tier ist bekannt als der 'König des Dschungels'?",
      hr: "Koja životinja je poznata kao 'Kralj džungle'?",
    },
    options: {
      en: ['Tiger', 'Lion', 'Elephant', 'Gorilla'],
      de: ['Tiger', 'Löwe', 'Elefant', 'Gorilla'],
      hr: ['Tigar', 'Lav', 'Slon', 'Gorila'],
    },
    correctAnswerIndex: 1, // Die richtige Antwort ist "Lion" (Index 1)
  },
  // Frage 35
  {
    question: {
      en: 'What is the largest bird in the world?',
      de: 'Welcher ist der größte Vogel der Welt?',
      hr: 'Koja je najveća ptica na svijetu?',
    },
    options: {
      en: ['Eagle', 'Ostrich', 'Albatross', 'Penguin'],
      de: ['Adler', 'Strauß', 'Albatros', 'Pinguin'],
      hr: ['Orao', 'Noj', 'Albatros', 'Pingvin'],
    },
    correctAnswerIndex: 1, // Die richtige Antwort ist "Ostrich" (Index 1)
  },
  // Frage 36
  {
    question: {
      en: 'Which country is famous for the Great Wall?',
      de: 'Welches Land ist berühmt für die Große Mauer?',
      hr: 'Koja je zemlja poznata po Velikom zidu?',
    },
    options: {
      en: ['Japan', 'China', 'India', 'Mongolia'],
      de: ['Japan', 'China', 'Indien', 'Mongolei'],
      hr: ['Japan', 'Kina', 'Indija', 'Mongolija'],
    },
    correctAnswerIndex: 1, // Die richtige Antwort ist "China" (Index 1)
  },
  // Frage 37
  {
    question: {
      en: 'What is the largest island in the world?',
      de: 'Welches ist die größte Insel der Welt?',
      hr: 'Koji je najveći otok na svijetu?',
    },
    options: {
      en: ['Greenland', 'Australia', 'Borneo', 'Madagascar'],
      de: ['Grönland', 'Australien', 'Borneo', 'Madagaskar'],
      hr: ['Grenland', 'Australija', 'Borneo', 'Madagaskar'],
    },
    correctAnswerIndex: 0, // Die richtige Antwort ist "Greenland" (Index 0)
  },
  // Frage 38
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
    correctAnswerIndex: 1, // Die richtige Antwort ist "Saturn" (Index 1)
  },
  // Frage 39
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
    correctAnswerIndex: 2, // Die richtige Antwort ist "Brasília" (Index 2)
  },
  // Frage 40
  {
    question: {
      en: 'Which animal is known for its black and white stripes?',
      de: 'Welches Tier ist bekannt für seine schwarz-weißen Streifen?',
      hr: 'Koja životinja je poznata po crno-bijelim prugama?',
    },
    options: {
      en: ['Zebra', 'Tiger', 'Giraffe', 'Panda'],
      de: ['Zebra', 'Tiger', 'Giraffe', 'Panda'],
      hr: ['Zebra', 'Tigar', 'Žirafa', 'Panda'],
    },
    correctAnswerIndex: 0, // Die richtige Antwort ist "Zebra" (Index 0)
  },
  // Frage 41
  {
    question: {
      en: 'What is the chemical symbol for silver?',
      de: 'Was ist das chemische Symbol für Silber?',
      hr: 'Koji je kemijski simbol za srebro?',
    },
    options: {
      en: ['Ag', 'Au', 'Si', 'Sr'],
      de: ['Ag', 'Au', 'Si', 'Sr'],
      hr: ['Ag', 'Au', 'Si', 'Sr'],
    },
    correctAnswerIndex: 0, // Die richtige Antwort ist "Ag" (Index 0)
  },
  // Frage 42
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
    correctAnswerIndex: 0, // Die richtige Antwort ist "Norway" (Index 0)
  },
  // Frage 43
  {
    question: {
      en: "Who wrote 'The Great Gatsby'?",
      de: "Wer schrieb 'Der große Gatsby'?",
      hr: "Tko je napisao 'Veliki Gatsby'?",
    },
    options: {
      en: [
        'F. Scott Fitzgerald',
        'Ernest Hemingway',
        'Mark Twain',
        'John Steinbeck',
      ],
      de: [
        'F. Scott Fitzgerald',
        'Ernest Hemingway',
        'Mark Twain',
        'John Steinbeck',
      ],
      hr: [
        'F. Scott Fitzgerald',
        'Ernest Hemingway',
        'Mark Twain',
        'John Steinbeck',
      ],
    },
    correctAnswerIndex: 0, // Die richtige Antwort ist "F. Scott Fitzgerald" (Index 0)
  },
  // Frage 44
  {
    question: {
      en: 'What is the largest lake in the world?',
      de: 'Welches ist der größte See der Welt?',
      hr: 'Koje je najveće jezero na svijetu?',
    },
    options: {
      en: ['Caspian Sea', 'Lake Superior', 'Lake Victoria', 'Lake Baikal'],
      de: ['Kaspisches Meer', 'Oberer See', 'Viktoriasee', 'Baikalsee'],
      hr: [
        'Kaspijsko jezero',
        'Gornje jezero',
        'Jezero Viktorija',
        'Bajkalsko jezero',
      ],
    },
    correctAnswerIndex: 0, // Die richtige Antwort ist "Caspian Sea" (Index 0)
  },
  // Frage 45
  {
    question: {
      en: 'Which planet is known for its rings?',
      de: 'Welcher Planet ist bekannt für seine Ringe?',
      hr: 'Koji je planet poznat po svojim prstenovima?',
    },
    options: {
      en: ['Jupiter', 'Saturn', 'Uranus', 'Neptune'],
      de: ['Jupiter', 'Saturn', 'Uranus', 'Neptun'],
      hr: ['Jupiter', 'Saturn', 'Uran', 'Neptun'],
    },
    correctAnswerIndex: 1, // Die richtige Antwort ist "Saturn" (Index 1)
  },
  // Frage 46
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
    correctAnswerIndex: 1, // Die richtige Antwort ist "Madrid" (Index 1)
  },
  // Frage 47
  {
    question: {
      en: "Which element has the chemical symbol 'K'?",
      de: "Welches Element hat das chemische Symbol 'K'?",
      hr: "Koji element ima kemijski simbol 'K'?",
    },
    options: {
      en: ['Potassium', 'Phosphorus', 'Krypton', 'Kryptonite'],
      de: ['Kalium', 'Phosphor', 'Krypton', 'Kryptonit'],
      hr: ['Kalij', 'Fosfor', 'Kripton', 'Kriptonit'],
    },
    correctAnswerIndex: 0, // Die richtige Antwort ist "Potassium" (Index 0)
  },
  // Frage 48
  {
    question: {
      en: 'Who invented the telephone?',
      de: 'Wer hat das Telefon erfunden?',
      hr: 'Tko je izumio telefon?',
    },
    options: {
      en: [
        'Thomas Edison',
        'Alexander Graham Bell',
        'Nikola Tesla',
        'Guglielmo Marconi',
      ],
      de: [
        'Thomas Edison',
        'Alexander Graham Bell',
        'Nikola Tesla',
        'Guglielmo Marconi',
      ],
      hr: [
        'Thomas Edison',
        'Alexander Graham Bell',
        'Nikola Tesla',
        'Guglielmo Marconi',
      ],
    },
    correctAnswerIndex: 1, // Die richtige Antwort ist "Alexander Graham Bell" (Index 1)
  },
  // Frage 49
  {
    question: {
      en: 'What is the smallest continent by land area?',
      de: 'Welcher ist der kleinste Kontinent nach Landfläche?',
      hr: 'Koji je najmanji kontinent po površini?',
    },
    options: {
      en: ['Europe', 'Australia', 'Antarctica', 'South America'],
      de: ['Europa', 'Australien', 'Antarktis', 'Südamerika'],
      hr: ['Europa', 'Australija', 'Antarktika', 'Južna Amerika'],
    },
    correctAnswerIndex: 1, // Die richtige Antwort ist "Australia" (Index 1)
  },
  // Frage 50
  {
    question: {
      en: 'Which country is famous for the Eiffel Tower?',
      de: 'Welches Land ist berühmt für den Eiffelturm?',
      hr: 'Koja je zemlja poznata po Eiffelovom tornju?',
    },
    options: {
      en: ['Germany', 'France', 'Italy', 'Spain'],
      de: ['Deutschland', 'Frankreich', 'Italien', 'Spanien'],
      hr: ['Njemačka', 'Francuska', 'Italija', 'Španjolska'],
    },
    correctAnswerIndex: 1, // Die richtige Antwort ist "France" (Index 1)
  },
  // Frage 51
  {
    question: {
      en: 'What is the longest river in the world?',
      de: 'Welcher ist der längste Fluss der Welt?',
      hr: 'Koja je najduža rijeka na svijetu?',
    },
    options: {
      en: ['Amazon River', 'Nile River', 'Yangtze River', 'Mississippi River'],
      de: ['Amazonas', 'Nil', 'Jangtse', 'Mississippi'],
      hr: ['Amazonka', 'Nil', 'Jangce', 'Misisipi'],
    },
    correctAnswerIndex: 1, // Die richtige Antwort ist "Nile River" (Index 1)
  },
  // Frage 52
  {
    question: {
      en: 'Which language is spoken in Brazil?',
      de: 'Welche Sprache wird in Brasilien gesprochen?',
      hr: 'Koji je jezik službeni u Brazilu?',
    },
    options: {
      en: ['Spanish', 'Portuguese', 'French', 'English'],
      de: ['Spanisch', 'Portugiesisch', 'Französisch', 'Englisch'],
      hr: ['Španjolski', 'Portugalski', 'Francuski', 'Engleski'],
    },
    correctAnswerIndex: 1, // Die richtige Antwort ist "Portuguese" (Index 1)
  },
  // Frage 53
  {
    question: {
      en: 'What is the capital of Japan?',
      de: 'Was ist die Hauptstadt von Japan?',
      hr: 'Koji je glavni grad Japana?',
    },
    options: {
      en: ['Osaka', 'Kyoto', 'Tokyo', 'Hiroshima'],
      de: ['Osaka', 'Kyoto', 'Tokio', 'Hiroshima'],
      hr: ['Osaka', 'Kyoto', 'Tokio', 'Hirošima'],
    },
    correctAnswerIndex: 2, // Die richtige Antwort ist "Tokyo" (Index 2)
  },
  // Frage 54
  {
    question: {
      en: "Which animal is known as the 'Ship of the Desert'?",
      de: "Welches Tier ist bekannt als das 'Schiff der Wüste'?",
      hr: "Koja životinja je poznata kao 'Brod pustinje'?",
    },
    options: {
      en: ['Camel', 'Elephant', 'Kangaroo', 'Giraffe'],
      de: ['Kamel', 'Elefant', 'Känguru', 'Giraffe'],
      hr: ['Deva', 'Slon', 'Klokan', 'Žirafa'],
    },
    correctAnswerIndex: 0, // Die richtige Antwort ist "Camel" (Index 0)
  },
  // Frage 55
  {
    question: {
      en: 'What is the largest species of shark?',
      de: 'Welche ist die größte Haiart?',
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
      hr: [
        'Velika bijela psina',
        'Kitopsina',
        'Tigrasti morski pas',
        'Čekićar',
      ],
    },
    correctAnswerIndex: 1, // Die richtige Antwort ist "Whale Shark" (Index 1)
  },
  // Frage 56
  {
    question: {
      en: 'Which country is famous for the pyramids?',
      de: 'Welches Land ist berühmt für die Pyramiden?',
      hr: 'Koja je zemlja poznata po piramidama?',
    },
    options: {
      en: ['Mexico', 'Egypt', 'Peru', 'Sudan'],
      de: ['Mexiko', 'Ägypten', 'Peru', 'Sudan'],
      hr: ['Meksiko', 'Egipat', 'Peru', 'Sudan'],
    },
    correctAnswerIndex: 1, // Die richtige Antwort ist "Egypt" (Index 1)
  },
  // Frage 57
  {
    question: {
      en: 'What is the largest species of bear?',
      de: 'Welche ist die größte Bärenart?',
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
    correctAnswerIndex: 0, // Die richtige Antwort ist "Polar Bear" (Index 0)
  },
  // Frage 58
  {
    question: {
      en: 'Which country is known for the Taj Mahal?',
      de: 'Welches Land ist bekannt für das Taj Mahal?',
      hr: 'Koja je zemlja poznata po Taj Mahalu?',
    },
    options: {
      en: ['India', 'Pakistan', 'Bangladesh', 'Nepal'],
      de: ['Indien', 'Pakistan', 'Bangladesch', 'Nepal'],
      hr: ['Indija', 'Pakistan', 'Bangladeš', 'Nepal'],
    },
    correctAnswerIndex: 0, // Die richtige Antwort ist "India" (Index 0)
  },
  // Frage 59
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
    correctAnswerIndex: 1, // Die richtige Antwort ist "Pretoria" (Index 1)
  },
  // Frage 60
  {
    question: {
      en: "Which animal is known as the 'King of the Beasts'?",
      de: "Welches Tier ist bekannt als der 'König der Tiere'?",
      hr: "Koja životinja je poznata kao 'Kralj životinja'?",
    },
    options: {
      en: ['Tiger', 'Lion', 'Elephant', 'Gorilla'],
      de: ['Tiger', 'Löwe', 'Elefant', 'Gorilla'],
      hr: ['Tigar', 'Lav', 'Slon', 'Gorila'],
    },
    correctAnswerIndex: 1, // Die richtige Antwort ist "Lion" (Index 1)
  },
  // Frage 61
  {
    question: {
      en: 'What is the chemical symbol for iron?',
      de: 'Was ist das chemische Symbol für Eisen?',
      hr: 'Koji je kemijski simbol za željezo?',
    },
    options: {
      en: ['Fe', 'Ir', 'In', 'I'],
      de: ['Fe', 'Ir', 'In', 'I'],
      hr: ['Fe', 'Ir', 'In', 'I'],
    },
    correctAnswerIndex: 0, // Die richtige Antwort ist "Fe" (Index 0)
  },
  // Frage 62
  {
    question: {
      en: 'Which country is known as the Land of the Thunder Dragon?',
      de: 'Welches Land ist bekannt als das Land des Donnerdrachens?',
      hr: 'Koja je zemlja poznata kao Zemlja gromovitog zmaja?',
    },
    options: {
      en: ['Nepal', 'Bhutan', 'Tibet', 'Mongolia'],
      de: ['Nepal', 'Bhutan', 'Tibet', 'Mongolei'],
      hr: ['Nepal', 'Butan', 'Tibet', 'Mongolija'],
    },
    correctAnswerIndex: 1, // Die richtige Antwort ist "Bhutan" (Index 1)
  },
  // Frage 63
  {
    question: {
      en: "Who wrote 'Pride and Prejudice'?",
      de: "Wer schrieb 'Stolz und Vorurteil'?",
      hr: "Tko je napisao 'Ponos i predrasude'?",
    },
    options: {
      en: ['Jane Austen', 'Charlotte Brontë', 'Emily Brontë', 'Virginia Woolf'],
      de: ['Jane Austen', 'Charlotte Brontë', 'Emily Brontë', 'Virginia Woolf'],
      hr: ['Jane Austen', 'Charlotte Brontë', 'Emily Brontë', 'Virginia Woolf'],
    },
    correctAnswerIndex: 0, // Die richtige Antwort ist "Jane Austen" (Index 0)
  },
  // Frage 64
  {
    question: {
      en: 'What is the largest coral reef system in the world?',
      de: 'Welches ist das größte Korallenriffsystem der Welt?',
      hr: 'Koji je najveći koraljni greben na svijetu?',
    },
    options: {
      en: [
        'Great Barrier Reef',
        'Mesoamerican Barrier Reef',
        'New Caledonia Barrier Reef',
        'Red Sea Coral Reef',
      ],
      de: [
        'Great Barrier Reef',
        'Mesoamerikanisches Barriereriff',
        'Neukaledonisches Barriereriff',
        'Rotes Meer Korallenriff',
      ],
      hr: [
        'Veliki koraljni greben',
        'Mesoamerički koraljni greben',
        'Novokaledonski koraljni greben',
        'Koraljni greben Crvenog mora',
      ],
    },
    correctAnswerIndex: 0, // Die richtige Antwort ist "Great Barrier Reef" (Index 0)
  },
  // Frage 65
  {
    question: {
      en: "Which planet is known as the 'Morning Star'?",
      de: "Welcher Planet ist bekannt als der 'Morgenstern'?",
      hr: "Koji je planet poznat kao 'Jutarnja zvijezda'?",
    },
    options: {
      en: ['Venus', 'Mercury', 'Mars', 'Jupiter'],
      de: ['Venus', 'Merkur', 'Mars', 'Jupiter'],
      hr: ['Venera', 'Merkur', 'Mars', 'Jupiter'],
    },
    correctAnswerIndex: 0, // Die richtige Antwort ist "Venus" (Index 0)
  },
  // Frage 66
  {
    question: {
      en: 'What is the capital of Argentina?',
      de: 'Was ist die Hauptstadt von Argentinien?',
      hr: 'Koji je glavni grad Argentine?',
    },
    options: {
      en: ['Buenos Aires', 'Santiago', 'Lima', 'Montevideo'],
      de: ['Buenos Aires', 'Santiago', 'Lima', 'Montevideo'],
      hr: ['Buenos Aires', 'Santiago', 'Lima', 'Montevideo'],
    },
    correctAnswerIndex: 0, // Die richtige Antwort ist "Buenos Aires" (Index 0)
  },
  // Frage 67
  {
    question: {
      en: "Which element has the chemical symbol 'Pb'?",
      de: "Welches Element hat das chemische Symbol 'Pb'?",
      hr: "Koji element ima kemijski simbol 'Pb'?",
    },
    options: {
      en: ['Lead', 'Platinum', 'Phosphorus', 'Potassium'],
      de: ['Blei', 'Platin', 'Phosphor', 'Kalium'],
      hr: ['Olovo', 'Platina', 'Fosfor', 'Kalij'],
    },
    correctAnswerIndex: 0, // Die richtige Antwort ist "Lead" (Index 0)
  },
  // Frage 68
  {
    question: {
      en: 'Who invented the light bulb?',
      de: 'Wer hat die Glühbirne erfunden?',
      hr: 'Tko je izumio žarulju?',
    },
    options: {
      en: [
        'Thomas Edison',
        'Nikola Tesla',
        'Benjamin Franklin',
        'Alexander Graham Bell',
      ],
      de: [
        'Thomas Edison',
        'Nikola Tesla',
        'Benjamin Franklin',
        'Alexander Graham Bell',
      ],
      hr: [
        'Thomas Edison',
        'Nikola Tesla',
        'Benjamin Franklin',
        'Alexander Graham Bell',
      ],
    },
    correctAnswerIndex: 0, // Die richtige Antwort ist "Thomas Edison" (Index 0)
  },
  // Frage 69
  {
    question: {
      en: 'What is the largest species of penguin?',
      de: 'Welche ist die größte Pinguinart?',
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
    correctAnswerIndex: 0, // Die richtige Antwort ist "Emperor Penguin" (Index 0)
  },
  // Frage 70
  {
    question: {
      en: 'Which country is famous for the Colosseum?',
      de: 'Welches Land ist berühmt für das Kolosseum?',
      hr: 'Koja je zemlja poznata po Koloseumu?',
    },
    options: {
      en: ['Greece', 'Italy', 'France', 'Spain'],
      de: ['Griechenland', 'Italien', 'Frankreich', 'Spanien'],
      hr: ['Grčka', 'Italija', 'Francuska', 'Španjolska'],
    },
    correctAnswerIndex: 1, // Die richtige Antwort ist "Italy" (Index 1)
  },
  // Frage 71
  {
    question: {
      en: 'What is the longest mountain range in the world?',
      de: 'Welches ist das längste Gebirge der Welt?',
      hr: 'Koji je najduži planinski lanac na svijetu?',
    },
    options: {
      en: ['Andes', 'Himalayas', 'Rocky Mountains', 'Alps'],
      de: ['Anden', 'Himalaya', 'Rocky Mountains', 'Alpen'],
      hr: ['Ande', 'Himalaja', 'Stjenjaci', 'Alpe'],
    },
    correctAnswerIndex: 0, // Die richtige Antwort ist "Andes" (Index 0)
  },
  // Frage 72
  {
    question: {
      en: 'Which language is spoken in Switzerland?',
      de: 'Welche Sprache wird in der Schweiz gesprochen?',
      hr: 'Koji je jezik službeni u Švicarskoj?',
    },
    options: {
      en: ['German', 'French', 'Italian', 'All of the above'],
      de: ['Deutsch', 'Französisch', 'Italienisch', 'Alle oben genannten'],
      hr: ['Njemački', 'Francuski', 'Talijanski', 'Svi navedeni'],
    },
    correctAnswerIndex: 3, // Die richtige Antwort ist "All of the above" (Index 3)
  },
  // Frage 73
  {
    question: {
      en: 'What is the capital of South Korea?',
      de: 'Was ist die Hauptstadt von Südkorea?',
      hr: 'Koji je glavni grad Južne Koreje?',
    },
    options: {
      en: ['Seoul', 'Busan', 'Incheon', 'Daegu'],
      de: ['Seoul', 'Busan', 'Incheon', 'Daegu'],
      hr: ['Seul', 'Busan', 'Incheon', 'Daegu'],
    },
    correctAnswerIndex: 0, // Die richtige Antwort ist "Seoul" (Index 0)
  },
  // Frage 74
  {
    question: {
      en: "Which animal is known as the 'King of the Arctic'?",
      de: "Welches Tier ist bekannt als der 'König der Arktis'?",
      hr: "Koja životinja je poznata kao 'Kralj Arktika'?",
    },
    options: {
      en: ['Polar Bear', 'Arctic Fox', 'Walrus', 'Narwhal'],
      de: ['Eisbär', 'Polarfuchs', 'Walross', 'Narwal'],
      hr: ['Polarni medvjed', 'Polarna lisica', 'Morž', 'Narval'],
    },
    correctAnswerIndex: 0, // Die richtige Antwort ist "Polar Bear" (Index 0)
  },
  // Frage 75
  {
    question: {
      en: 'What is the largest species of turtle?',
      de: 'Welche ist die größte Schildkrötenart?',
      hr: 'Koja je najveća vrsta kornjače?',
    },
    options: {
      en: [
        'Leatherback Turtle',
        'Green Turtle',
        'Loggerhead Turtle',
        'Hawksbill Turtle',
      ],
      de: [
        'Lederschildkröte',
        'Grüne Meeresschildkröte',
        'Unechte Karettschildkröte',
        'Echte Karettschildkröte',
      ],
      hr: ['Kožnata kornjača', 'Zelena kornjača', 'Glavata kornjača', 'Kareta'],
    },
    correctAnswerIndex: 0, // Die richtige Antwort ist "Leatherback Turtle" (Index 0)
  },
  // Frage 76
  {
    question: {
      en: 'Which country is famous for the Machu Picchu?',
      de: 'Welches Land ist berühmt für Machu Picchu?',
      hr: 'Koja je zemlja poznata po Machu Picchuu?',
    },
    options: {
      en: ['Peru', 'Bolivia', 'Chile', 'Ecuador'],
      de: ['Peru', 'Bolivien', 'Chile', 'Ecuador'],
      hr: ['Peru', 'Bolivija', 'Čile', 'Ekvador'],
    },
    correctAnswerIndex: 0, // Die richtige Antwort ist "Peru" (Index 0)
  },
  // Frage 77
  {
    question: {
      en: 'What is the largest species of whale?',
      de: 'Welche ist die größte Walart?',
      hr: 'Koja je najveća vrsta kita?',
    },
    options: {
      en: ['Blue Whale', 'Humpback Whale', 'Sperm Whale', 'Killer Whale'],
      de: ['Blauwal', 'Buckelwal', 'Pottwal', 'Schwertwal'],
      hr: ['Plavi kit', 'Grbavi kit', 'Ulješura', 'Kit ubojica'],
    },
    correctAnswerIndex: 0, // Die richtige Antwort ist "Blue Whale" (Index 0)
  },
  // Frage 78
  {
    question: {
      en: 'Which country is known for the Angkor Wat?',
      de: 'Welches Land ist bekannt für Angkor Wat?',
      hr: 'Koja je zemlja poznata po Angkor Watu?',
    },
    options: {
      en: ['Cambodia', 'Thailand', 'Vietnam', 'Laos'],
      de: ['Kambodscha', 'Thailand', 'Vietnam', 'Laos'],
      hr: ['Kambodža', 'Tajland', 'Vijetnam', 'Laos'],
    },
    correctAnswerIndex: 0, // Die richtige Antwort ist "Cambodia" (Index 0)
  },
  // Frage 79
  {
    question: {
      en: 'What is the capital of New Zealand?',
      de: 'Was ist die Hauptstadt von Neuseeland?',
      hr: 'Koji je glavni grad Novog Zelanda?',
    },
    options: {
      en: ['Auckland', 'Wellington', 'Christchurch', 'Hamilton'],
      de: ['Auckland', 'Wellington', 'Christchurch', 'Hamilton'],
      hr: ['Auckland', 'Wellington', 'Christchurch', 'Hamilton'],
    },
    correctAnswerIndex: 1, // Die richtige Antwort ist "Wellington" (Index 1)
  },
  // Frage 80
  {
    question: {
      en: "Which animal is known as the 'King of the Birds'?",
      de: "Welches Tier ist bekannt als der 'König der Vögel'?",
      hr: "Koja životinja je poznata kao 'Kralj ptica'?",
    },
    options: {
      en: ['Eagle', 'Peacock', 'Albatross', 'Falcon'],
      de: ['Adler', 'Pfau', 'Albatros', 'Falke'],
      hr: ['Orao', 'Paun', 'Albatros', 'Sokol'],
    },
    correctAnswerIndex: 0, // Die richtige Antwort ist "Eagle" (Index 0)
  },
  // Frage 81
  {
    question: {
      en: 'What is the chemical symbol for carbon?',
      de: 'Was ist das chemische Symbol für Kohlenstoff?',
      hr: 'Koji je kemijski simbol za ugljik?',
    },
    options: {
      en: ['C', 'Co', 'Ca', 'Cu'],
      de: ['C', 'Co', 'Ca', 'Cu'],
      hr: ['C', 'Co', 'Ca', 'Cu'],
    },
    correctAnswerIndex: 0, // Die richtige Antwort ist "C" (Index 0)
  },
  // Frage 82
  {
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
    correctAnswerIndex: 1, // Die richtige Antwort ist "Japan" (Index 1)
  },
  // Frage 83
  {
    question: {
      en: "Who wrote 'The Catcher in the Rye'?",
      de: "Wer schrieb 'Der Fänger im Roggen'?",
      hr: "Tko je napisao 'Lovac u žitu'?",
    },
    options: {
      en: [
        'J.D. Salinger',
        'Ernest Hemingway',
        'Mark Twain',
        'F. Scott Fitzgerald',
      ],
      de: [
        'J.D. Salinger',
        'Ernest Hemingway',
        'Mark Twain',
        'F. Scott Fitzgerald',
      ],
      hr: [
        'J.D. Salinger',
        'Ernest Hemingway',
        'Mark Twain',
        'F. Scott Fitzgerald',
      ],
    },
    correctAnswerIndex: 0, // Die richtige Antwort ist "J.D. Salinger" (Index 0)
  },
  // Frage 84
  {
    question: {
      en: 'What is the largest desert in Asia?',
      de: 'Welches ist die größte Wüste in Asien?',
      hr: 'Koja je najveća pustinja u Aziji?',
    },
    options: {
      en: ['Gobi Desert', 'Arabian Desert', 'Thar Desert', 'Karakum Desert'],
      de: ['Gobi-Wüste', 'Arabische Wüste', 'Thar-Wüste', 'Karakum-Wüste'],
      hr: [
        'Gobi pustinja',
        'Arapska pustinja',
        'Thar pustinja',
        'Karakum pustinja',
      ],
    },
    correctAnswerIndex: 0, // Die richtige Antwort ist "Gobi Desert" (Index 0)
  },
  // Frage 85
  {
    question: {
      en: "Which planet is known as the 'Red Planet'?",
      de: "Welcher Planet ist bekannt als der 'Rote Planet'?",
      hr: "Koji je planet poznat kao 'Crveni planet'?",
    },
    options: {
      en: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
      de: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
      hr: ['Venera', 'Mars', 'Jupiter', 'Saturn'],
    },
    correctAnswerIndex: 1, // Die richtige Antwort ist "Mars" (Index 1)
  },
  // Frage 86
  {
    question: {
      en: 'What is the capital of Egypt?',
      de: 'Was ist die Hauptstadt von Ägypten?',
      hr: 'Koji je glavni grad Egipta?',
    },
    options: {
      en: ['Cairo', 'Alexandria', 'Luxor', 'Giza'],
      de: ['Kairo', 'Alexandria', 'Luxor', 'Gizeh'],
      hr: ['Kairo', 'Aleksandrija', 'Luksor', 'Giza'],
    },
    correctAnswerIndex: 0, // Die richtige Antwort ist "Cairo" (Index 0)
  },
  // Frage 87
  {
    question: {
      en: "Which element has the chemical symbol 'Ag'?",
      de: "Welches Element hat das chemische Symbol 'Ag'?",
      hr: "Koji element ima kemijski simbol 'Ag'?",
    },
    options: {
      en: ['Silver', 'Gold', 'Aluminum', 'Argon'],
      de: ['Silber', 'Gold', 'Aluminium', 'Argon'],
      hr: ['Srebro', 'Zlato', 'Aluminij', 'Argon'],
    },
    correctAnswerIndex: 0, // Die richtige Antwort ist "Silver" (Index 0)
  },
  // Frage 88
  {
    question: {
      en: 'Who discovered gravity?',
      de: 'Wer entdeckte die Schwerkraft?',
      hr: 'Tko je otkrio gravitaciju?',
    },
    options: {
      en: [
        'Isaac Newton',
        'Albert Einstein',
        'Galileo Galilei',
        'Nikola Tesla',
      ],
      de: [
        'Isaac Newton',
        'Albert Einstein',
        'Galileo Galilei',
        'Nikola Tesla',
      ],
      hr: [
        'Isaac Newton',
        'Albert Einstein',
        'Galileo Galilei',
        'Nikola Tesla',
      ],
    },
    correctAnswerIndex: 0, // Die richtige Antwort ist "Isaac Newton" (Index 0)
  },
  // Frage 89
  {
    question: {
      en: 'What is the largest species of shark?',
      de: 'Welche ist die größte Haiart?',
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
      hr: [
        'Velika bijela psina',
        'Kitopsina',
        'Tigrasti morski pas',
        'Čekićar',
      ],
    },
    correctAnswerIndex: 1, // Die richtige Antwort ist "Whale Shark" (Index 1)
  },
  // Frage 90
  {
    question: {
      en: 'Which country is famous for the Great Wall?',
      de: 'Welches Land ist berühmt für die Große Mauer?',
      hr: 'Koja je zemlja poznata po Velikom zidu?',
    },
    options: {
      en: ['Japan', 'China', 'India', 'Mongolia'],
      de: ['Japan', 'China', 'Indien', 'Mongolei'],
      hr: ['Japan', 'Kina', 'Indija', 'Mongolija'],
    },
    correctAnswerIndex: 1, // Die richtige Antwort ist "China" (Index 1)
  },
  // Frage 91
  {
    question: {
      en: 'What is the longest river in Europe?',
      de: 'Welcher ist der längste Fluss in Europa?',
      hr: 'Koja je najduža rijeka u Europi?',
    },
    options: {
      en: ['Danube', 'Volga', 'Rhine', 'Thames'],
      de: ['Donau', 'Wolga', 'Rhein', 'Themse'],
      hr: ['Dunav', 'Volga', 'Rajna', 'Temza'],
    },
    correctAnswerIndex: 1, // Die richtige Antwort ist "Volga" (Index 1)
  },
  // Frage 92
  {
    question: {
      en: 'Which language is spoken in Brazil?',
      de: 'Welche Sprache wird in Brasilien gesprochen?',
      hr: 'Koji je jezik službeni u Brazilu?',
    },
    options: {
      en: ['Spanish', 'Portuguese', 'French', 'English'],
      de: ['Spanisch', 'Portugiesisch', 'Französisch', 'Englisch'],
      hr: ['Španjolski', 'Portugalski', 'Francuski', 'Engleski'],
    },
    correctAnswerIndex: 1, // Die richtige Antwort ist "Portuguese" (Index 1)
  },
  // Frage 93
  {
    question: {
      en: 'What is the capital of Japan?',
      de: 'Was ist die Hauptstadt von Japan?',
      hr: 'Koji je glavni grad Japana?',
    },
    options: {
      en: ['Osaka', 'Kyoto', 'Tokyo', 'Hiroshima'],
      de: ['Osaka', 'Kyoto', 'Tokio', 'Hiroshima'],
      hr: ['Osaka', 'Kyoto', 'Tokio', 'Hirošima'],
    },
    correctAnswerIndex: 2, // Die richtige Antwort ist "Tokyo" (Index 2)
  },
  // Frage 94
  {
    question: {
      en: "Which animal is known as the 'Ship of the Desert'?",
      de: "Welches Tier ist bekannt als das 'Schiff der Wüste'?",
      hr: "Koja životinja je poznata kao 'Brod pustinje'?",
    },
    options: {
      en: ['Camel', 'Elephant', 'Kangaroo', 'Giraffe'],
      de: ['Kamel', 'Elefant', 'Känguru', 'Giraffe'],
      hr: ['Deva', 'Slon', 'Klokan', 'Žirafa'],
    },
    correctAnswerIndex: 0, // Die richtige Antwort ist "Camel" (Index 0)
  },
  // Frage 95
  {
    question: {
      en: 'What is the largest species of turtle?',
      de: 'Welche ist die größte Schildkrötenart?',
      hr: 'Koja je najveća vrsta kornjače?',
    },
    options: {
      en: [
        'Leatherback Turtle',
        'Green Turtle',
        'Loggerhead Turtle',
        'Hawksbill Turtle',
      ],
      de: [
        'Lederschildkröte',
        'Grüne Meeresschildkröte',
        'Unechte Karettschildkröte',
        'Echte Karettschildkröte',
      ],
      hr: ['Kožnata kornjača', 'Zelena kornjača', 'Glavata kornjača', 'Kareta'],
    },
    correctAnswerIndex: 0, // Die richtige Antwort ist "Leatherback Turtle" (Index 0)
  },
  // Frage 96
  {
    question: {
      en: 'Which country is famous for the pyramids?',
      de: 'Welches Land ist berühmt für die Pyramiden?',
      hr: 'Koja je zemlja poznata po piramidama?',
    },
    options: {
      en: ['Mexico', 'Egypt', 'Peru', 'Sudan'],
      de: ['Mexiko', 'Ägypten', 'Peru', 'Sudan'],
      hr: ['Meksiko', 'Egipat', 'Peru', 'Sudan'],
    },
    correctAnswerIndex: 1, // Die richtige Antwort ist "Egypt" (Index 1)
  },
  // Frage 97
  {
    question: {
      en: 'What is the largest species of bear?',
      de: 'Welche ist die größte Bärenart?',
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
    correctAnswerIndex: 0, // Die richtige Antwort ist "Polar Bear" (Index 0)
  },
  // Frage 98
  {
    question: {
      en: 'Which country is known for the Taj Mahal?',
      de: 'Welches Land ist bekannt für das Taj Mahal?',
      hr: 'Koja je zemlja poznata po Taj Mahalu?',
    },
    options: {
      en: ['India', 'Pakistan', 'Bangladesh', 'Nepal'],
      de: ['Indien', 'Pakistan', 'Bangladesch', 'Nepal'],
      hr: ['Indija', 'Pakistan', 'Bangladeš', 'Nepal'],
    },
    correctAnswerIndex: 0, // Die richtige Antwort ist "India" (Index 0)
  },
  // Frage 99
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
    correctAnswerIndex: 1, // Die richtige Antwort ist "Pretoria" (Index 1)
  },
  // Frage 100
  {
    question: {
      en: "Which animal is known as the 'King of the Beasts'?",
      de: "Welches Tier ist bekannt als der 'König der Tiere'?",
      hr: "Koja životinja je poznata kao 'Kralj životinja'?",
    },
    options: {
      en: ['Tiger', 'Lion', 'Elephant', 'Gorilla'],
      de: ['Tiger', 'Löwe', 'Elefant', 'Gorilla'],
      hr: ['Tigar', 'Lav', 'Slon', 'Gorila'],
    },
    correctAnswerIndex: 1, // Die richtige Antwort ist "Lion" (Index 1)
  },
  // Frage 101
  {
    question: {
      en: 'What is the chemical symbol for helium?',
      de: 'Was ist das chemische Symbol für Helium?',
      hr: 'Koji je kemijski simbol za helij?',
    },
    options: {
      en: ['He', 'H', 'Li', 'Be'],
      de: ['He', 'H', 'Li', 'Be'],
      hr: ['He', 'H', 'Li', 'Be'],
    },
    correctAnswerIndex: 0, // Die richtige Antwort ist "He" (Index 0)
  },
  // Frage 102
  {
    question: {
      en: 'Which country is known as the Land of the Long White Cloud?',
      de: 'Welches Land ist bekannt als das Land der langen weißen Wolke?',
      hr: 'Koja je zemlja poznata kao Zemlja duge bijele oblake?',
    },
    options: {
      en: ['Australia', 'New Zealand', 'Fiji', 'Samoa'],
      de: ['Australien', 'Neuseeland', 'Fidschi', 'Samoa'],
      hr: ['Australija', 'Novi Zeland', 'Fidži', 'Samoa'],
    },
    correctAnswerIndex: 1, // Die richtige Antwort ist "New Zealand" (Index 1)
  },
  // Frage 103
  {
    question: {
      en: "Who wrote 'To Kill a Mockingbird'?",
      de: "Wer schrieb 'Wer die Nachtigall stört'?",
      hr: "Tko je napisao 'Ubij pticu rugalicu'?",
    },
    options: {
      en: ['Harper Lee', 'Mark Twain', 'John Steinbeck', 'F. Scott Fitzgerald'],
      de: ['Harper Lee', 'Mark Twain', 'John Steinbeck', 'F. Scott Fitzgerald'],
      hr: ['Harper Lee', 'Mark Twain', 'John Steinbeck', 'F. Scott Fitzgerald'],
    },
    correctAnswerIndex: 0, // Die richtige Antwort ist "Harper Lee" (Index 0)
  },
  // Frage 104
  {
    question: {
      en: 'What is the largest island in the Mediterranean Sea?',
      de: 'Welches ist die größte Insel im Mittelmeer?',
      hr: 'Koji je najveći otok u Sredozemnom moru?',
    },
    options: {
      en: ['Sicily', 'Sardinia', 'Cyprus', 'Crete'],
      de: ['Sizilien', 'Sardinien', 'Zypern', 'Kreta'],
      hr: ['Sicilija', 'Sardinija', 'Cipar', 'Kreta'],
    },
    correctAnswerIndex: 0, // Die richtige Antwort ist "Sicily" (Index 0)
  },
  // Frage 105
  {
    question: {
      en: "Which planet is known as the 'Evening Star'?",
      de: "Welcher Planet ist bekannt als der 'Abendstern'?",
      hr: "Koji je planet poznat kao 'Večernja zvijezda'?",
    },
    options: {
      en: ['Venus', 'Mercury', 'Mars', 'Jupiter'],
      de: ['Venus', 'Merkur', 'Mars', 'Jupiter'],
      hr: ['Venera', 'Merkur', 'Mars', 'Jupiter'],
    },
    correctAnswerIndex: 0, // Die richtige Antwort ist "Venus" (Index 0)
  },
  // Frage 106
  {
    question: {
      en: 'What is the capital of Greece?',
      de: 'Was ist die Hauptstadt von Griechenland?',
      hr: 'Koji je glavni grad Grčke?',
    },
    options: {
      en: ['Athens', 'Thessaloniki', 'Patras', 'Heraklion'],
      de: ['Athen', 'Thessaloniki', 'Patras', 'Heraklion'],
      hr: ['Atena', 'Solun', 'Patra', 'Iraklion'],
    },
    correctAnswerIndex: 0, // Die richtige Antwort ist "Athens" (Index 0)
  },
  // Frage 107
  {
    question: {
      en: "Which element has the chemical symbol 'Fe'?",
      de: "Welches Element hat das chemische Symbol 'Fe'?",
      hr: "Koji element ima kemijski simbol 'Fe'?",
    },
    options: {
      en: ['Iron', 'Fluorine', 'Francium', 'Fermium'],
      de: ['Eisen', 'Fluor', 'Francium', 'Fermium'],
      hr: ['Željezo', 'Fluor', 'Francij', 'Fermij'],
    },
    correctAnswerIndex: 0, // Die richtige Antwort ist "Iron" (Index 0)
  },
  // Frage 108
  {
    question: {
      en: 'Who invented the printing press?',
      de: 'Wer hat den Buchdruck erfunden?',
      hr: 'Tko je izumio tiskarski stroj?',
    },
    options: {
      en: [
        'Johannes Gutenberg',
        'Leonardo da Vinci',
        'Isaac Newton',
        'Galileo Galilei',
      ],
      de: [
        'Johannes Gutenberg',
        'Leonardo da Vinci',
        'Isaac Newton',
        'Galileo Galilei',
      ],
      hr: [
        'Johannes Gutenberg',
        'Leonardo da Vinci',
        'Isaac Newton',
        'Galileo Galilei',
      ],
    },
    correctAnswerIndex: 0, // Die richtige Antwort ist "Johannes Gutenberg" (Index 0)
  },
  // Frage 109
  {
    question: {
      en: 'What is the largest species of penguin?',
      de: 'Welche ist die größte Pinguinart?',
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
    correctAnswerIndex: 0, // Die richtige Antwort ist "Emperor Penguin" (Index 0)
  },
  // Frage 110
  {
    question: {
      en: 'Which country is famous for the Colosseum?',
      de: 'Welches Land ist berühmt für das Kolosseum?',
      hr: 'Koja je zemlja poznata po Koloseumu?',
    },
    options: {
      en: ['Greece', 'Italy', 'France', 'Spain'],
      de: ['Griechenland', 'Italien', 'Frankreich', 'Spanien'],
      hr: ['Grčka', 'Italija', 'Francuska', 'Španjolska'],
    },
    correctAnswerIndex: 1, // Die richtige Antwort ist "Italy" (Index 1)
  },
  // Frage 111
  {
    question: {
      en: 'What is the longest mountain range in South America?',
      de: 'Welches ist das längste Gebirge in Südamerika?',
      hr: 'Koji je najduži planinski lanac u Južnoj Americi?',
    },
    options: {
      en: ['Andes', 'Rocky Mountains', 'Himalayas', 'Alps'],
      de: ['Anden', 'Rocky Mountains', 'Himalaya', 'Alpen'],
      hr: ['Ande', 'Stjenjaci', 'Himalaja', 'Alpe'],
    },
    correctAnswerIndex: 0, // Die richtige Antwort ist "Andes" (Index 0)
  },
  // Frage 112
  {
    question: {
      en: 'Which language is spoken in Switzerland?',
      de: 'Welche Sprache wird in der Schweiz gesprochen?',
      hr: 'Koji je jezik službeni u Švicarskoj?',
    },
    options: {
      en: ['German', 'French', 'Italian', 'All of the above'],
      de: ['Deutsch', 'Französisch', 'Italienisch', 'Alle oben genannten'],
      hr: ['Njemački', 'Francuski', 'Talijanski', 'Svi navedeni'],
    },
    correctAnswerIndex: 3, // Die richtige Antwort ist "All of the above" (Index 3)
  },
  // Frage 113
  {
    question: {
      en: 'What is the capital of South Korea?',
      de: 'Was ist die Hauptstadt von Südkorea?',
      hr: 'Koji je glavni grad Južne Koreje?',
    },
    options: {
      en: ['Seoul', 'Busan', 'Incheon', 'Daegu'],
      de: ['Seoul', 'Busan', 'Incheon', 'Daegu'],
      hr: ['Seul', 'Busan', 'Incheon', 'Daegu'],
    },
    correctAnswerIndex: 0, // Die richtige Antwort ist "Seoul" (Index 0)
  },
  // Frage 114
  {
    question: {
      en: "Which animal is known as the 'King of the Arctic'?",
      de: "Welches Tier ist bekannt als der 'König der Arktis'?",
      hr: "Koja životinja je poznata kao 'Kralj Arktika'?",
    },
    options: {
      en: ['Polar Bear', 'Arctic Fox', 'Walrus', 'Narwhal'],
      de: ['Eisbär', 'Polarfuchs', 'Walross', 'Narwal'],
      hr: ['Polarni medvjed', 'Polarna lisica', 'Morž', 'Narval'],
    },
    correctAnswerIndex: 0, // Die richtige Antwort ist "Polar Bear" (Index 0)
  },
  // Frage 115
  {
    question: {
      en: 'What is the largest species of turtle?',
      de: 'Welche ist die größte Schildkrötenart?',
      hr: 'Koja je najveća vrsta kornjače?',
    },
    options: {
      en: [
        'Leatherback Turtle',
        'Green Turtle',
        'Loggerhead Turtle',
        'Hawksbill Turtle',
      ],
      de: [
        'Lederschildkröte',
        'Grüne Meeresschildkröte',
        'Unechte Karettschildkröte',
        'Echte Karettschildkröte',
      ],
      hr: ['Kožnata kornjača', 'Zelena kornjača', 'Glavata kornjača', 'Kareta'],
    },
    correctAnswerIndex: 0, // Die richtige Antwort ist "Leatherback Turtle" (Index 0)
  },
  // Frage 116
  {
    question: {
      en: 'Which country is famous for the Machu Picchu?',
      de: 'Welches Land ist berühmt für Machu Picchu?',
      hr: 'Koja je zemlja poznata po Machu Picchuu?',
    },
    options: {
      en: ['Peru', 'Bolivia', 'Chile', 'Ecuador'],
      de: ['Peru', 'Bolivien', 'Chile', 'Ecuador'],
      hr: ['Peru', 'Bolivija', 'Čile', 'Ekvador'],
    },
    correctAnswerIndex: 0, // Die richtige Antwort ist "Peru" (Index 0)
  },
  // Frage 117
  {
    question: {
      en: 'What is the largest species of whale?',
      de: 'Welche ist die größte Walart?',
      hr: 'Koja je najveća vrsta kita?',
    },
    options: {
      en: ['Blue Whale', 'Humpback Whale', 'Sperm Whale', 'Killer Whale'],
      de: ['Blauwal', 'Buckelwal', 'Pottwal', 'Schwertwal'],
      hr: ['Plavi kit', 'Grbavi kit', 'Ulješura', 'Kit ubojica'],
    },
    correctAnswerIndex: 0, // Die richtige Antwort ist "Blue Whale" (Index 0)
  },
  // Frage 118
  {
    question: {
      en: 'Which country is known for the Angkor Wat?',
      de: 'Welches Land ist bekannt für Angkor Wat?',
      hr: 'Koja je zemlja poznata po Angkor Watu?',
    },
    options: {
      en: ['Cambodia', 'Thailand', 'Vietnam', 'Laos'],
      de: ['Kambodscha', 'Thailand', 'Vietnam', 'Laos'],
      hr: ['Kambodža', 'Tajland', 'Vijetnam', 'Laos'],
    },
    correctAnswerIndex: 0, // Die richtige Antwort ist "Cambodia" (Index 0)
  },
  // Frage 119
  {
    question: {
      en: 'What is the capital of New Zealand?',
      de: 'Was ist die Hauptstadt von Neuseeland?',
      hr: 'Koji je glavni grad Novog Zelanda?',
    },
    options: {
      en: ['Auckland', 'Wellington', 'Christchurch', 'Hamilton'],
      de: ['Auckland', 'Wellington', 'Christchurch', 'Hamilton'],
      hr: ['Auckland', 'Wellington', 'Christchurch', 'Hamilton'],
    },
    correctAnswerIndex: 1, // Die richtige Antwort ist "Wellington" (Index 1)
  },
  // Frage 120
  {
    question: {
      en: "Which animal is known as the 'King of the Birds'?",
      de: "Welches Tier ist bekannt als der 'König der Vögel'?",
      hr: "Koja životinja je poznata kao 'Kralj ptica'?",
    },
    options: {
      en: ['Eagle', 'Peacock', 'Albatross', 'Falcon'],
      de: ['Adler', 'Pfau', 'Albatros', 'Falke'],
      hr: ['Orao', 'Paun', 'Albatros', 'Sokol'],
    },
    correctAnswerIndex: 0, // Die richtige Antwort ist "Eagle" (Index 0)
  },
  // Frage 121
  {
    question: {
      en: 'What is the chemical symbol for potassium?',
      de: 'Was ist das chemische Symbol für Kalium?',
      hr: 'Koji je kemijski simbol za kalij?',
    },
    options: {
      en: ['K', 'P', 'Ka', 'Ko'],
      de: ['K', 'P', 'Ka', 'Ko'],
      hr: ['K', 'P', 'Ka', 'Ko'],
    },
    correctAnswerIndex: 0, // Die richtige Antwort ist "K" (Index 0)
  },
  // Frage 122
  {
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
    correctAnswerIndex: 1, // Die richtige Antwort ist "Japan" (Index 1)
  },
  // Frage 123
  {
    question: {
      en: "Who wrote 'The Odyssey'?",
      de: "Wer schrieb 'Die Odyssee'?",
      hr: "Tko je napisao 'Odiseju'?",
    },
    options: {
      en: ['Homer', 'Virgil', 'Sophocles', 'Plato'],
      de: ['Homer', 'Vergil', 'Sophokles', 'Platon'],
      hr: ['Homer', 'Vergilije', 'Sofoklo', 'Platon'],
    },
    correctAnswerIndex: 0, // Die richtige Antwort ist "Homer" (Index 0)
  },
  // Frage 124
  {
    question: {
      en: 'What is the largest desert in Africa?',
      de: 'Welches ist die größte Wüste in Afrika?',
      hr: 'Koja je najveća pustinja u Africi?',
    },
    options: {
      en: ['Sahara', 'Kalahari', 'Namib', 'Arabian Desert'],
      de: ['Sahara', 'Kalahari', 'Namib', 'Arabische Wüste'],
      hr: ['Sahara', 'Kalahari', 'Namib', 'Arapska pustinja'],
    },
    correctAnswerIndex: 0, // Die richtige Antwort ist "Sahara" (Index 0)
  },
  // Frage 125
  {
    question: {
      en: "Which planet is known as the 'Morning Star'?",
      de: "Welcher Planet ist bekannt als der 'Morgenstern'?",
      hr: "Koji je planet poznat kao 'Jutarnja zvijezda'?",
    },
    options: {
      en: ['Venus', 'Mercury', 'Mars', 'Jupiter'],
      de: ['Venus', 'Merkur', 'Mars', 'Jupiter'],
      hr: ['Venera', 'Merkur', 'Mars', 'Jupiter'],
    },
    correctAnswerIndex: 0, // Die richtige Antwort ist "Venus" (Index 0)
  },
  // Frage 126
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
    correctAnswerIndex: 0, // Die richtige Antwort ist "Rome" (Index 0)
  },
  // Frage 127
  {
    question: {
      en: "Which element has the chemical symbol 'Na'?",
      de: "Welches Element hat das chemische Symbol 'Na'?",
      hr: "Koji element ima kemijski simbol 'Na'?",
    },
    options: {
      en: ['Sodium', 'Nickel', 'Nitrogen', 'Neon'],
      de: ['Natrium', 'Nickel', 'Stickstoff', 'Neon'],
      hr: ['Natrij', 'Nikal', 'Dušik', 'Neon'],
    },
    correctAnswerIndex: 0, // Die richtige Antwort ist "Sodium" (Index 0)
  },
  // Frage 128
  {
    question: {
      en: 'Who discovered penicillin?',
      de: 'Wer entdeckte Penicillin?',
      hr: 'Tko je otkrio penicilin?',
    },
    options: {
      en: ['Alexander Fleming', 'Louis Pasteur', 'Marie Curie', 'Isaac Newton'],
      de: ['Alexander Fleming', 'Louis Pasteur', 'Marie Curie', 'Isaac Newton'],
      hr: ['Alexander Fleming', 'Louis Pasteur', 'Marie Curie', 'Isaac Newton'],
    },
    correctAnswerIndex: 0, // Die richtige Antwort ist "Alexander Fleming" (Index 0)
  },
  // Frage 129
  {
    question: {
      en: 'What is the largest species of penguin?',
      de: 'Welche ist die größte Pinguinart?',
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
    correctAnswerIndex: 0, // Die richtige Antwort ist "Emperor Penguin" (Index 0)
  },
  // Frage 130
  {
    question: {
      en: 'Which country is famous for the Colosseum?',
      de: 'Welches Land ist berühmt für das Kolosseum?',
      hr: 'Koja je zemlja poznata po Koloseumu?',
    },
    options: {
      en: ['Greece', 'Italy', 'France', 'Spain'],
      de: ['Griechenland', 'Italien', 'Frankreich', 'Spanien'],
      hr: ['Grčka', 'Italija', 'Francuska', 'Španjolska'],
    },
    correctAnswerIndex: 1, // Die richtige Antwort ist "Italy" (Index 1)
  },
  // Frage 131
  {
    question: {
      en: 'What is the longest river in Europe?',
      de: 'Welcher ist der längste Fluss in Europa?',
      hr: 'Koja je najduža rijeka u Europi?',
    },
    options: {
      en: ['Danube', 'Volga', 'Rhine', 'Thames'],
      de: ['Donau', 'Wolga', 'Rhein', 'Themse'],
      hr: ['Dunav', 'Volga', 'Rajna', 'Temza'],
    },
    correctAnswerIndex: 1, // Die richtige Antwort ist "Volga" (Index 1)
  },
  // Frage 132
  {
    question: {
      en: 'Which language is spoken in Brazil?',
      de: 'Welche Sprache wird in Brasilien gesprochen?',
      hr: 'Koji je jezik službeni u Brazilu?',
    },
    options: {
      en: ['Spanish', 'Portuguese', 'French', 'English'],
      de: ['Spanisch', 'Portugiesisch', 'Französisch', 'Englisch'],
      hr: ['Španjolski', 'Portugalski', 'Francuski', 'Engleski'],
    },
    correctAnswerIndex: 1, // Die richtige Antwort ist "Portuguese" (Index 1)
  },
  // Frage 133
  {
    question: {
      en: 'What is the capital of Japan?',
      de: 'Was ist die Hauptstadt von Japan?',
      hr: 'Koji je glavni grad Japana?',
    },
    options: {
      en: ['Osaka', 'Kyoto', 'Tokyo', 'Hiroshima'],
      de: ['Osaka', 'Kyoto', 'Tokio', 'Hiroshima'],
      hr: ['Osaka', 'Kyoto', 'Tokio', 'Hirošima'],
    },
    correctAnswerIndex: 2, // Die richtige Antwort ist "Tokyo" (Index 2)
  },
  // Frage 134
  {
    question: {
      en: "Which animal is known as the 'Ship of the Desert'?",
      de: "Welches Tier ist bekannt als das 'Schiff der Wüste'?",
      hr: "Koja životinja je poznata kao 'Brod pustinje'?",
    },
    options: {
      en: ['Camel', 'Elephant', 'Kangaroo', 'Giraffe'],
      de: ['Kamel', 'Elefant', 'Känguru', 'Giraffe'],
      hr: ['Deva', 'Slon', 'Klokan', 'Žirafa'],
    },
    correctAnswerIndex: 0, // Die richtige Antwort ist "Camel" (Index 0)
  },
  // Frage 135
  {
    question: {
      en: 'What is the largest species of turtle?',
      de: 'Welche ist die größte Schildkrötenart?',
      hr: 'Koja je najveća vrsta kornjače?',
    },
    options: {
      en: [
        'Leatherback Turtle',
        'Green Turtle',
        'Loggerhead Turtle',
        'Hawksbill Turtle',
      ],
      de: [
        'Lederschildkröte',
        'Grüne Meeresschildkröte',
        'Unechte Karettschildkröte',
        'Echte Karettschildkröte',
      ],
      hr: ['Kožnata kornjača', 'Zelena kornjača', 'Glavata kornjača', 'Kareta'],
    },
    correctAnswerIndex: 0, // Die richtige Antwort ist "Leatherback Turtle" (Index 0)
  },
  // Frage 136
  {
    question: {
      en: 'Which country is famous for the pyramids?',
      de: 'Welches Land ist berühmt für die Pyramiden?',
      hr: 'Koja je zemlja poznata po piramidama?',
    },
    options: {
      en: ['Mexico', 'Egypt', 'Peru', 'Sudan'],
      de: ['Mexiko', 'Ägypten', 'Peru', 'Sudan'],
      hr: ['Meksiko', 'Egipat', 'Peru', 'Sudan'],
    },
    correctAnswerIndex: 1, // Die richtige Antwort ist "Egypt" (Index 1)
  },
  // Frage 137
  {
    question: {
      en: 'What is the largest species of bear?',
      de: 'Welche ist die größte Bärenart?',
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
    correctAnswerIndex: 0, // Die richtige Antwort ist "Polar Bear" (Index 0)
  },
  // Frage 138
  {
    question: {
      en: 'Which country is known for the Taj Mahal?',
      de: 'Welches Land ist bekannt für das Taj Mahal?',
      hr: 'Koja je zemlja poznata po Taj Mahalu?',
    },
    options: {
      en: ['India', 'Pakistan', 'Bangladesh', 'Nepal'],
      de: ['Indien', 'Pakistan', 'Bangladesch', 'Nepal'],
      hr: ['Indija', 'Pakistan', 'Bangladeš', 'Nepal'],
    },
    correctAnswerIndex: 0, // Die richtige Antwort ist "India" (Index 0)
  },
  // Frage 139
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
    correctAnswerIndex: 1, // Die richtige Antwort ist "Pretoria" (Index 1)
  },
  // Frage 140
  {
    question: {
      en: "Which animal is known as the 'King of the Beasts'?",
      de: "Welches Tier ist bekannt als der 'König der Tiere'?",
      hr: "Koja životinja je poznata kao 'Kralj životinja'?",
    },
    options: {
      en: ['Tiger', 'Lion', 'Elephant', 'Gorilla'],
      de: ['Tiger', 'Löwe', 'Elefant', 'Gorilla'],
      hr: ['Tigar', 'Lav', 'Slon', 'Gorila'],
    },
    correctAnswerIndex: 1, // Die richtige Antwort ist "Lion" (Index 1)
  },
];

