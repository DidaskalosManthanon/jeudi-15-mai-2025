const vocabulary = [
    {
        english: "Stretching",
        pronunciation: "/ˈstrɛtʃɪŋ/ (STRETCH-ing)",
        french: "Étirements",
        example_en: "I always do some stretching before my workout.",
        example_fr: "Je fais toujours des étirements avant ma séance d'entraînement."
    },
    {
        english: "Exercise / Workout",
        pronunciation: "Exercise: /ˈɛksərsaɪz/, Workout: /ˈwɜːrkaʊt/",
        french: "Exercice / Séance d'entraînement",
        note: "\"Workout\" est un type spécifique d'\"exercise\", souvent plus intense et planifié.",
        example_en: "Regular exercise is good. I had a tough workout today.",
        example_fr: "L'exercice régulier est bon. J'ai eu une séance d'entraînement difficile aujourd'hui."
    },
    {
        english: "Rehearsal",
        pronunciation: "/rɪˈhɜːrsəl/ (ri-HEUR-seul)",
        french: "Répétition (spectacle, musique)",
        example_en: "The band has a rehearsal tonight for the concert.",
        example_fr: "Le groupe a une répétition ce soir pour le concert."
    },
    {
        english: "Musical Notes (A, B, C, D, E, F, G)",
        pronunciation: "A /eɪ/, B /biː/, C /siː/, D /diː/, E /iː/, F /ɛf/, G /dʒiː/",
        french: "Notes de musique (La, Si, Do, Ré, Mi, Fa, Sol)",
        example_en: "Can you play a C major scale? (C=Do, D=Ré, E=Mi... A=La, B=Si)",
        example_fr: "Peux-tu jouer une gamme de Do majeur ?"
    },
    {
        english: "Going to (Gonna)",
        pronunciation: "Gonna: /ˈɡɒnə/ ou /ˈɡʌnə/",
        french: "Aller (faire quelque chose)",
        note: "\"Gonna\" est une contraction orale et informelle de \"going to\".",
        example_en: "I'm gonna call you later. (I am going to call you later.)",
        example_fr: "Je vais t'appeler plus tard."
    },
    {
        english: "To chew",
        pronunciation: "/tʃuː/ (TCHOU)",
        french: "Mâcher",
        example_en: "Remember to chew your food properly.",
        example_fr: "N'oublie pas de bien mâcher ta nourriture."
    },
    {
        english: "Want to (Wanna)",
        pronunciation: "Wanna: /ˈwɒnə/",
        french: "Vouloir (faire quelque chose)",
        note: "\"Wanna\" est une contraction orale et informelle de \"want to\".",
        example_en: "I wanna learn English quickly. (I want to learn English quickly.)",
        example_fr: "Je veux apprendre l'anglais rapidement."
    },
    {
        english: "A wannabe",
        pronunciation: "/ˈwɒnəbi/ (WON-na-bii)",
        french: "Un aspirant / quelqu'un qui voudrait être (souvent péjoratif)",
        note: "Quelqu'un qui imite le style ou les actions de quelqu'un d'autre (souvent une célébrité) dans l'espoir de devenir comme cette personne, mais qui n'y parvient pas vraiment.",
        example_en: "He's just a wannabe actor, he never gets any roles.",
        example_fr: "C'est juste un aspirant acteur (qui se la raconte), il n'obtient jamais de rôles."
    },
    {
        english: "Needy",
        pronunciation: "/ˈniːdi/ (NII-dii)",
        french: "En manque d'attention/d'affection, dépendant affectif",
        example_en: "She can be a bit needy sometimes, always seeking validation.",
        example_fr: "Elle peut être un peu en manque d'affection parfois, cherchant toujours à être validée."
    },
    {
        english: "To fill",
        pronunciation: "/fɪl/ (FIL)",
        french: "Remplir",
        example_en: "Could you please fill this bottle with water?",
        example_fr: "Pourrais-tu s'il te plaît remplir cette bouteille avec de l'eau ?"
    },
    {
        english: "Empty",
        pronunciation: "/ˈɛmpti/ (EMP-tii)",
        french: "Vide",
        note: "\"Void\" (nom) signifie 'un vide, le néant'. \"Empty\" est l'adjectif courant pour 'vide'.",
        example_en: "The glass is empty. This space feels void of joy.",
        example_fr: "Le verre est vide. Cet espace semble vide de joie."
    },
    {
        english: "Even if",
        pronunciation: "/ˈiːvən ɪf/ (II-veun if)",
        french: "Même si",
        example_en: "I will go to the party, even if I'm tired.",
        example_fr: "J'irai à la fête, même si je suis fatigué."
    },
    {
        english: "Laziness",
        pronunciation: "/ˈleɪzinəs/ (LEÏ-zi-ness)",
        french: "Paresse",
        example_en: "Laziness can prevent you from achieving your goals.",
        example_fr: "La paresse peut t'empêcher d'atteindre tes objectifs."
    },
    {
        english: "Lazy",
        pronunciation: "/ˈleɪzi/ (LEÏ-zi)",
        french: "Paresseux / Paresseuse",
        example_en: "He's too lazy to do his homework.",
        example_fr: "Il est trop paresseux pour faire ses devoirs."
    },
    {
        english: "Available",
        pronunciation: "/əˈveɪləbəl/ (a-VEÏ-le-beul)",
        french: "Disponible",
        example_en: "Are you available for a meeting tomorrow morning?",
        example_fr: "Es-tu disponible pour une réunion demain matin ?"
    },
    {
        english: "Besides",
        pronunciation: "/bɪˈsaɪdz/ (bi-SAÏDZ)",
        french: "De plus, en outre, d'ailleurs",
        example_en: "I don't want to go out tonight. Besides, I have a lot of work to do.",
        example_fr: "Je ne veux pas sortir ce soir. D'ailleurs / De plus, j'ai beaucoup de travail à faire."
    },
    {
        english: "Advice",
        pronunciation: "/ədˈvaɪs/ (ad-VAÏS)",
        french: "Conseil(s)",
        note: "\"Advice\" est indénombrable en anglais. On dit \"a piece of advice\" (un conseil) ou \"some advice\" (des conseils).",
        example_en: "Can I give you a piece of advice?",
        example_fr: "Puis-je te donner un conseil ?"
    }
];

let currentIndex = 0;

const englishWordEl = document.getElementById('english-word');
const pronunciationEl = document.getElementById('pronunciation');
const frenchTranslationEl = document.getElementById('french-translation');
const noteEl = document.getElementById('note');
const exampleEnEl = document.getElementById('example-en');
const exampleFrEl = document.getElementById('example-fr');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const progressEl = document.getElementById('progress');
const toggleBtn = document.getElementById('toggle-translation-btn');
const definitionSectionElements = [frenchTranslationEl.parentElement, exampleFrEl.parentElement.parentElement]; // Pour cacher la section entière

function displayWord(index) {
    const item = vocabulary[index];
    englishWordEl.textContent = item.english;
    pronunciationEl.textContent = item.pronunciation || "";
    frenchTranslationEl.textContent = item.french;
    
    if (item.note) {
        noteEl.textContent = `Note : ${item.note}`;
        noteEl.style.display = 'block';
    } else {
        noteEl.style.display = 'none';
        noteEl.textContent = '';
    }

    exampleEnEl.textContent = item.example_en || "Pas d'exemple disponible.";
    exampleFrEl.textContent = item.example_fr || "";

    progressEl.textContent = `Mot ${index + 1} / ${vocabulary.length}`;

    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === vocabulary.length - 1;
}

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        displayWord(currentIndex);
    }
});

nextBtn.addEventListener('click', () => {
    if (currentIndex < vocabulary.length - 1) {
        currentIndex++;
        displayWord(currentIndex);
    }
});

toggleBtn.addEventListener('click', () => {
    definitionSectionElements.forEach(el => {
        // On cible les éléments qui contiennent la traduction FR et l'exemple FR
        // Ici, on va cibler directement les <p> contenant la traduction et l'exemple FR
        const frenchTransP = el.querySelector('#french-translation');
        const exampleFrP = el.querySelector('#example-fr');
        
        if (frenchTransP) frenchTransP.parentElement.classList.toggle('hidden');
        if (exampleFrP) exampleFrP.parentElement.classList.toggle('hidden'); // Cacher le <p> parent
    });
});


// Initial display
displayWord(currentIndex);