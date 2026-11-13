const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');

menuToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', isOpen);
  menuToggle.textContent = isOpen ? '×' : '☰';
});

mainNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.textContent = '☰';
  });
});

// All 12 chapters
const chapterDetails = [
  {
    title: "The Beginning of Self-Discovery",
    content: [
      "हर इंसान के जीवन में खुद को समझना एक महत्वपूर्ण शुरुआत है। हम अक्सर दूसरों को समझने में समय लगाते हैं, लेकिन अपने विचारों, भावनाओं और व्यवहार को समझना भूल जाते हैं।",
      "Self-discovery का अर्थ है अपने बारे में जानना। अपनी पसंद, नापसंद, खूबियों, कमियों और जीवन के उद्देश्यों को पहचानना।",
      "जब हम खुद को समझना शुरू करते हैं, तब हम अपने फैसले अधिक समझदारी से लेने लगते हैं।"
    ]
  },
  {
    title: "What Is Mindset?",
    content: [
      "Mindset का अर्थ है हमारी सोचने और किसी परिस्थिति को देखने का तरीका। हमारी सोच हमारे फैसलों और व्यवहार को प्रभावित करती है।",
      "Growth Mindset में व्यक्ति मानता है कि मेहनत, अभ्यास और सीखने से अपनी क्षमताओं को विकसित किया जा सकता है।",
      "हमारी सोच हमेशा एक जैसी नहीं रहती। नए अनुभवों और सीखने से हमारा नजरिया बदल सकता है।"
    ]
  },
  {
    title: "The Power of Thoughts",
    content: [
      "विचार हमारे मन में आने वाली धारणाएँ हैं जिनके आधार पर हम परिस्थितियों को समझते हैं।",
      "हमारी सोच हमारी भावनाओं और व्यवहार को प्रभावित कर सकती है। इसलिए अपने विचारों को पहचानना जरूरी है।",
      "सकारात्मक और वास्तविक सोच हमें समस्याओं को समझने और बेहतर निर्णय लेने में मदद करती है।"
    ]
  },
  {
    title: "Understanding Your Emotions",
    content: [
      "Emotions यानी भावनाएँ हमारे अनुभवों का महत्वपूर्ण हिस्सा हैं। खुशी, दुख, डर, गुस्सा और आश्चर्य जैसी भावनाएँ सभी इंसानों में होती हैं।",
      "अपनी भावनाओं को पहचानना और उनके कारणों को समझना Emotional Awareness कहलाता है।",
      "भावनाओं को समझकर हम उन्हें बेहतर तरीके से व्यक्त करना सीख सकते हैं।"
    ]
  },
  {
    title: "Self-Belief and Confidence",
    content: [
      "Self-belief का अर्थ है अपनी क्षमताओं और प्रयासों पर विश्वास रखना।",
      "आत्मविश्वास अभ्यास, अनुभव और स्वयं को समझने से विकसित होता है।",
      "गलतियाँ सीखने का अवसर होती हैं। हमें उनसे सीखकर आगे बढ़ना चाहिए।"
    ]
  },
  {
    title: "Fear and Overthinking",
    content: [
      "डर एक सामान्य मानवीय भावना है। यह कभी-कभी हमें सावधान रहने में मदद करता है।",
      "Overthinking का अर्थ है किसी बात के बारे में बार-बार और जरूरत से ज्यादा सोचना।",
      "अपने विचारों को लिखना और समस्या को छोटे भागों में समझना उपयोगी हो सकता है।"
    ]
  },
  {
    title: "Daily Habits and Behaviour",
    content: [
      "हमारी दैनिक आदतें हमारे व्यवहार और दिनचर्या को प्रभावित करती हैं।",
      "छोटी-छोटी अच्छी आदतें समय के साथ सकारात्मक बदलाव ला सकती हैं।",
      "नियमित पढ़ना, समय का सही उपयोग और नई चीजें सीखना उपयोगी आदतों के उदाहरण हैं।"
    ]
  },
  {
    title: "Self-Awareness and Self-Control",
    content: [
      "Self-awareness का अर्थ है अपने विचारों, भावनाओं और व्यवहार को समझना।",
      "Self-control का अर्थ है परिस्थितियों में सोच-समझकर प्रतिक्रिया देना।",
      "जब हम खुद को समझते हैं, तो अपने व्यवहार में आवश्यक सुधार करना आसान हो जाता है।"
    ]
  },
  {
    title: "Understanding Human Behaviour",
    content: [
      "Human Behaviour का अर्थ है इंसान का व्यवहार और उसकी प्रतिक्रियाएँ।",
      "हमारा व्यवहार हमारे अनुभवों, विचारों, भावनाओं और वातावरण से प्रभावित होता है।",
      "दूसरों को ध्यान से सुनना, सहानुभूति रखना और सम्मान देना अच्छे संबंध बनाने में मदद करता है।"
    ]
  },
  {
    title: "Failure, Growth and Learning",
    content: [
      "असफलता जीवन और सीखने की प्रक्रिया का एक हिस्सा है।",
      "गलतियों से हमें अपनी कमियों को पहचानने और बेहतर तरीके से प्रयास करने का अवसर मिलता है।",
      "सीखने की इच्छा और लगातार अभ्यास व्यक्ति के विकास में मदद करते हैं।"
    ]
  },
  {
    title: "Changing Your Perspective",
    content: [
      "Perspective का अर्थ है किसी परिस्थिति को देखने और समझने का नजरिया।",
      "एक ही परिस्थिति को अलग-अलग लोग अलग तरीके से समझ सकते हैं।",
      "नए नजरिए से सोचने पर हमें किसी समस्या के नए समाधान मिल सकते हैं।"
    ]
  },
  {
    title: "Becoming a Better Version of Yourself",
    content: [
      "खुद का बेहतर रूप बनने का अर्थ है लगातार सीखना और अपने व्यवहार में अच्छे बदलाव लाना।",
      "अपने अनुभवों से सीखना, अपनी गलतियों को स्वीकार करना और नए लक्ष्य बनाना इस यात्रा का हिस्सा है।",
      "व्यक्तिगत विकास एक लगातार चलने वाली प्रक्रिया है। इसका उद्देश्य दूसरों जैसा बनना नहीं, बल्कि खुद को बेहतर समझना और विकसित करना है।"
    ]
  }
];

// Connect HTML elements
const cards = document.querySelectorAll('.chapter-card');
const reader = document.getElementById('chapterReader');
const chapterGrid = document.querySelector('.chapter-grid');
const chapterDisclaimer = document.querySelector('.chapter-disclaimer');

let currentChapter = 0;

// Open chapter
function showChapter(index) {
  if (index < 0 || index >= chapterDetails.length) return;

  currentChapter = index;
  const chapter = chapterDetails[index];

  document.getElementById('readerNumber').textContent =
    `CHAPTER ${String(index + 1).padStart(2, '0')} / THE SECRET OF MINDSET`;

  document.getElementById('readerTitle').textContent = chapter.title;

  document.getElementById('readerIntro').textContent =
    cards[index].querySelector('p').textContent;

  const content = document.getElementById('readerContent');
  content.replaceChildren();

  chapter.content.forEach(paragraph => {
    const p = document.createElement('p');
    p.textContent = paragraph;
    content.appendChild(p);
  });

  reader.hidden = false;
  chapterGrid.hidden = true;
  chapterDisclaimer.hidden = true;

  document.getElementById('previousChapter').disabled = index === 0;
  document.getElementById('nextChapter').disabled =
    index === chapterDetails.length - 1;

  reader.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Make all cards clickable
cards.forEach((card, index) => {
  card.setAttribute('role', 'button');
  card.setAttribute('tabindex', '0');

  card.addEventListener('click', () => showChapter(index));

  card.addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      showChapter(index);
    }
  });
});

// Back to chapters
function backToChapters() {
  reader.hidden = true;
  chapterGrid.hidden = false;
  chapterDisclaimer.hidden = false;

  chapterGrid.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}

document.getElementById('backToChapters')
  .addEventListener('click', backToChapters);

// Previous and Next
document.getElementById('previousChapter')
  .addEventListener('click', () => showChapter(currentChapter - 1));

document.getElementById('nextChapter')
  .addEventListener('click', () => showChapter(currentChapter + 1));

// Contact form
const messageForm = document.getElementById('messageForm');
const formStatus = document.getElementById('formStatus');

messageForm.addEventListener('submit', event => {
  event.preventDefault();

  const visitorName = document.getElementById('visitorName').value.trim();
  const visitorMessage = document.getElementById('visitorMessage').value.trim();

  const subject = encodeURIComponent('Message about The Secret of Mindset');

  const body = encodeURIComponent(
   ` Hello Muskan,\n\nMy name is ${visitorName}.\n\n${visitorMessage}`
  );

  formStatus.textContent = 'Opening your email app...';

  window.location.href =
    `mailto:muskantripathi077@gmail.com?subject=${subject}&body=${body}`;
});