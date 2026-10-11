/**
 * ==========================================================================
 * ENCHANTED LUXURY BIRTHDAY EXPERIENCE - MASTER JAVASCRIPT ENGINE
 * Ultra-Realistic Cake Flame & Smoke Physics + Grand Sky Lantern Fireworks
 * ==========================================================================
 */

// Global State
const state = {
    isMusicPlaying: false,
    candlesRemaining: 5,
    micListening: false,
    currentQuizIndex: 0,
    quizScore: 0,
    recipientName: "Grace",
    senderName: "Yash",
    birthDate: new Date(2005, 9, 16), // October 16, 2005
    audioCtx: null,
    musicInterval: null
};

// Curated Touching Reasons for Magic Wishing Jar
const WISH_REASONS = [
    "Your contagious laughter can brighten the darkest day in seconds! ✨",
    "You always know how to turn simple everyday moments into unforgettable memories. 💫",
    "You have a heart of pure gold and the most loyal soul anyone could ask for. 💖",
    "Your silly facial expressions and inside jokes never fail to make me burst out laughing! 😂",
    "You are fierce, incredibly smart, and destined for greatness in everything you do. 👑",
    "The way you genuinely care and listen when someone is speaking is a rare gift. 🌸",
    "We can talk about deep philosophical ideas for hours, then laugh over dumb memes for another three! 🍕",
    "You inspire everyone around you to be more positive, confident, and kind. 🌟",
    "You never judge my questionable decisions, you just join in the adventure! 🚀",
    "Having you in my life makes this whole world feel safer, brighter, and way more fun. 🎈",
    "Your sense of fashion, charm, and elegance is always on point! 👗✨",
    "You give the absolute warmest, most comforting hugs when they're needed the most. 🤗",
    "No distance, time, or circumstance could ever weaken our bond. We are forever! 🔗❤️",
    "Your courage to pursue your dreams inspires me every single day. 🎯",
    "You are truly one of a kind — a masterpiece of a human being! 🎨✨"
];



// Bestie Trivia Questions (Tailored for 21st Birthday Milestone)
const QUIZ_QUESTIONS = [
    {
        question: "What iconic event happened on October 16, 2005?",
        options: [
            { text: "A bright star arrived on Earth & the most fabulous Queen was born! 👑💖", correct: true },
            { text: "The universe received 1000x more laughter, beauty & sunshine! ✨", correct: true },
            { text: "World Bestie Day was officially founded! 🌸", correct: true },
            { text: "All of the above combined with infinite love! 🌟", correct: true }
        ]
    },
    {
        question: "What is the secret superpower of our friendship?",
        options: [
            { text: "Telepathic look across the room that says everything 😂", correct: true },
            { text: "Ordering the exact same food cravings at 11 PM", correct: true },
            { text: "Laughing at inside jokes nobody else understands", correct: true },
            { text: "All of the above combined with 1000% love! 💖", correct: true }
        ]
    },
    {
        question: "What is guaranteed to happen whenever we hang out?",
        options: [
            { text: "Uncontrollable laughter and a million photos taken 📸", correct: true },
            { text: "We conquer the day and create new core memories ✨", correct: true },
            { text: "We plan 10 dream vacations we will definitely take ✈️", correct: true },
            { text: "Pure chaotic happiness and delicious food 🍰", correct: true }
        ]
    },
    {
        question: "What is the official verdict for your 21st chapter of life?",
        options: [
            { text: "It's going to be your most fabulous, successful, and happiest year ever! 🏆🎉", correct: true },
            { text: "You're going to achieve all your big dreams & rule the world! 👑", correct: true }
        ]
    }
];

/* ==========================================================================
   INITIALIZATION
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
    initStardustCanvas();
    initCursorGlow();
    init3DTilt();
    initGatekeeper();
    initBirthdayCountdownTimer();
    initCakeCanvasEngine();
    initGalleryFilters();
    initWishingJar();
    initLetterEnvelope();
    initQuiz();
    initAudioController();
    initKeepsakeDownload();
    initNavbarScrollSpy();
});

/* ==========================================================================
   REAL-TIME 21ST BIRTHDAY COUNTDOWN ENGINE (OCTOBER 16, 2026)
   ========================================================================== */
function initBirthdayCountdownTimer() {
    const daysEl = document.getElementById("timer-days");
    const hoursEl = document.getElementById("timer-hours");
    const minEl = document.getElementById("timer-minutes");
    const secEl = document.getElementById("timer-seconds");
    const headlineEl = document.getElementById("countdown-headline");
    const substatusEl = document.getElementById("countdown-substatus");

    if (!daysEl || !hoursEl || !minEl || !secEl) return;

    // Target: October 16, 2026 00:00:00 local time
    const targetBirthday = new Date(2026, 9, 16, 0, 0, 0);

    function updateTimer() {
        const now = new Date();
        const diffMs = targetBirthday - now;

        if (diffMs <= 0) {
            // Target date reached! Birthday is officially today!
            daysEl.textContent = "00";
            hoursEl.textContent = "00";
            minEl.textContent = "00";
            secEl.textContent = "00";

            if (headlineEl) headlineEl.innerHTML = "🎉 IT'S YOUR 21ST BIRTHDAY, GRACE! 🎂👑";
            if (substatusEl) substatusEl.innerHTML = "✨ The celebration is officially live! Make your wish and shine bright forever! 💖";
            return;
        }

        const totalSeconds = Math.floor(diffMs / 1000);
        const days = Math.floor(totalSeconds / (3600 * 24));
        const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        daysEl.textContent = String(days).padStart(2, "0");
        hoursEl.textContent = String(hours).padStart(2, "0");
        minEl.textContent = String(minutes).padStart(2, "0");
        secEl.textContent = String(seconds).padStart(2, "0");
    }

    // Run immediately and tick every second
    updateTimer();
    setInterval(updateTimer, 1000);
}

function triggerHeroCelebration(btn) {
    triggerConfettiExplosion();
    playJarCrystalChime();
    playWishManifestedChord();
    if (btn) {
        spawnFloatingHearts(btn);
        btn.classList.add("spark-active");
        setTimeout(() => btn.classList.remove("spark-active"), 600);
    }
}

/* ==========================================================================
   ELEGANT, CALM & SOOTHING ACOUSTIC SOUND ENGINE (WEB AUDIO API)
   ========================================================================== */
function getAudioContext() {
    if (!state.audioCtx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        state.audioCtx = new AudioContext();
    }
    if (state.audioCtx.state === 'suspended') {
        state.audioCtx.resume();
    }
    return state.audioCtx;
}

// 1. Delicate, warm crystalline chime (Pure & Peaceful)
function playChime(freq = 523.25, duration = 0.9, volume = 0.1) {
    try {
        const ctx = getAudioContext();
        const osc = ctx.createOscillator();
        const oscHarmonic = ctx.createOscillator();
        const gain = ctx.createGain();
        
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, ctx.currentTime);
        
        // Soft shimmer harmonic
        oscHarmonic.type = "sine";
        oscHarmonic.frequency.setValueAtTime(freq * 2.002, ctx.currentTime);
        
        // Velvety smooth attack & graceful decay
        gain.gain.setValueAtTime(0.0001, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(volume, ctx.currentTime + 0.04);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);
        
        osc.connect(gain);
        oscHarmonic.connect(gain);
        gain.connect(ctx.destination);
        
        osc.start();
        oscHarmonic.start();
        osc.stop(ctx.currentTime + duration);
        oscHarmonic.stop(ctx.currentTime + duration);
    } catch (e) {}
}

// 2. Soft, subtle touch / tap tone (Elegant marimba / celesta droplet)
function playSoftTouch(freq = 440) {
    try {
        const ctx = getAudioContext();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, ctx.currentTime);
        
        gain.gain.setValueAtTime(0.001, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.07, ctx.currentTime + 0.015);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.22);
        
        osc.connect(gain);
        gain.connect(ctx.destination);
        
        osc.start();
        osc.stop(ctx.currentTime + 0.22);
    } catch (e) {}
}

// 3. Wishing Jar Crystal Glass Shimmer (3-note cascade)
function playJarCrystalChime() {
    try {
        const ctx = getAudioContext();
        const notes = [659.25, 830.61, 987.77]; // E5, G#5, B5 (Lydian Dream)
        
        notes.forEach((freq, idx) => {
            setTimeout(() => {
                try {
                    const osc = ctx.createOscillator();
                    const gain = ctx.createGain();
                    osc.type = "sine";
                    osc.frequency.setValueAtTime(freq, ctx.currentTime);
                    
                    gain.gain.setValueAtTime(0.001, ctx.currentTime);
                    gain.gain.exponentialRampToValueAtTime(0.08 - idx * 0.015, ctx.currentTime + 0.03);
                    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.85);
                    
                    osc.connect(gain);
                    gain.connect(ctx.destination);
                    osc.start();
                    osc.stop(ctx.currentTime + 0.85);
                } catch (err) {}
            }, idx * 75);
        });
    } catch (e) {}
}

// 4. Ultra-Calm Starlight Candle Extinguish (Pure, Delicate Crystal Droplet)
function playCandleExtinguish(candleIdx = 0) {
    try {
        const ctx = getAudioContext();
        // Delicate pentatonic star bells (matching the magic wishing jar)
        const notes = [659.25, 739.99, 830.61, 987.77, 1108.73]; // E5, F#5, G#5, B5, C#6
        const freq = notes[candleIdx % notes.length] || 830.61;

        const osc = ctx.createOscillator();
        const oscOvertone = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        oscOvertone.type = "sine";
        oscOvertone.frequency.setValueAtTime(freq * 2.001, ctx.currentTime);

        // Velvety soft attack, peaceful bell decay
        gain.gain.setValueAtTime(0.0001, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.045, ctx.currentTime + 0.025);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.65);

        osc.connect(gain);
        oscOvertone.connect(gain);
        gain.connect(ctx.destination);

        osc.start();
        oscOvertone.start();
        osc.stop(ctx.currentTime + 0.65);
        oscOvertone.stop(ctx.currentTime + 0.65);
    } catch (e) {}
}

// 4b. Gentle Warm Breath Breeze (For "Blow Out All Candles" button or wind sweep)
function playGentleBlowBreeze() {
    try {
        const ctx = getAudioContext();
        const bufferSize = ctx.sampleRate * 0.55;
        const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
            data[i] = (Math.random() * 2 - 1) * 0.035;
        }
        const noise = ctx.createBufferSource();
        noise.buffer = buffer;

        const filter = ctx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(240, ctx.currentTime);
        filter.frequency.exponentialRampToValueAtTime(120, ctx.currentTime + 0.55);
        filter.Q.setValueAtTime(1.0, ctx.currentTime);

        const nGain = ctx.createGain();
        nGain.gain.setValueAtTime(0.001, ctx.currentTime);
        nGain.gain.exponentialRampToValueAtTime(0.03, ctx.currentTime + 0.06);
        nGain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.55);

        noise.connect(filter);
        filter.connect(nGain);
        nGain.connect(ctx.destination);
        noise.start();
    } catch (e) {}
}

// 5. Grand Peaceful Wish Manifested Chord (When all 5 candles blown out)
function playWishManifestedChord() {
    try {
        const ctx = getAudioContext();
        // Dreamy celestial harp cascade (E5 -> G#5 -> B5 -> D#6 -> E6)
        const chord = [659.25, 830.61, 987.77, 1244.51, 1318.51];
        chord.forEach((note, i) => {
            setTimeout(() => {
                try {
                    const osc = ctx.createOscillator();
                    const gain = ctx.createGain();
                    
                    osc.type = "sine";
                    osc.frequency.setValueAtTime(note, ctx.currentTime);
                    
                    gain.gain.setValueAtTime(0.0001, ctx.currentTime);
                    gain.gain.exponentialRampToValueAtTime(0.06 - i * 0.007, ctx.currentTime + 0.03);
                    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.2);
                    
                    osc.connect(gain);
                    gain.connect(ctx.destination);
                    
                    osc.start();
                    osc.stop(ctx.currentTime + 1.2);
                } catch (err) {}
            }, i * 85);
        });
    } catch (e) {}
}

// 6. Calm & Rewarding Quiz Answer Chime (Celestial 2-note harp fifth)
function playQuizSuccessChime() {
    try {
        const ctx = getAudioContext();
        const notes = [783.99, 1046.50]; // G5 -> C6
        notes.forEach((freq, idx) => {
            setTimeout(() => {
                try {
                    const osc = ctx.createOscillator();
                    const gain = ctx.createGain();
                    osc.type = "sine";
                    osc.frequency.setValueAtTime(freq, ctx.currentTime);
                    
                    gain.gain.setValueAtTime(0.001, ctx.currentTime);
                    gain.gain.exponentialRampToValueAtTime(0.08, ctx.currentTime + 0.025);
                    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.75);
                    
                    osc.connect(gain);
                    gain.connect(ctx.destination);
                    osc.start();
                    osc.stop(ctx.currentTime + 0.75);
                } catch (err) {}
            }, idx * 110);
        });
    } catch (e) {}
}

// 7. Quiz Championship Trophy Fanfare (Heavenly 4-note windchime)
function playQuizVictoryFanfare() {
    try {
        const ctx = getAudioContext();
        const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
        notes.forEach((freq, idx) => {
            setTimeout(() => {
                try {
                    const osc = ctx.createOscillator();
                    const gain = ctx.createGain();
                    osc.type = "sine";
                    osc.frequency.setValueAtTime(freq, ctx.currentTime);
                    
                    gain.gain.setValueAtTime(0.001, ctx.currentTime);
                    gain.gain.exponentialRampToValueAtTime(0.08, ctx.currentTime + 0.03);
                    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.2);
                    
                    osc.connect(gain);
                    gain.connect(ctx.destination);
                    osc.start();
                    osc.stop(ctx.currentTime + 1.2);
                } catch (err) {}
            }, idx * 100);
        });
    } catch (e) {}
}

// 8. Parchment Unfold / Fold Paper Sound
function playParchmentFlutter() {
    playChime(587.33, 0.7, 0.06);
}

// 9. Camera Shutter Click Tone
function playCameraClick() {
    try {
        const ctx = getAudioContext();
        const bufferSize = ctx.sampleRate * 0.06;
        const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
            data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (ctx.sampleRate * 0.012));
        }
        const noise = ctx.createBufferSource();
        noise.buffer = buffer;
        const filter = ctx.createBiquadFilter();
        filter.type = 'highpass';
        filter.frequency.setValueAtTime(1400, ctx.currentTime);
        const gain = ctx.createGain();
        gain.gain.setValueAtTime(0.08, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.06);
        noise.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);
        noise.start();
    } catch (e) {}
}

// 10. Warm Heart Pop Chime
function playHeartPop() {
    try {
        const ctx = getAudioContext();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
        osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.12); // A5
        gain.gain.setValueAtTime(0.001, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.08, ctx.currentTime + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.35);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.35);
    } catch (e) {}
}

// Procedural Happy Birthday Lo-Fi Melody Engine
const BIRTHDAY_NOTES = [
    { note: 261.63, dur: 0.35 }, // C4
    { note: 261.63, dur: 0.35 }, // C4
    { note: 293.66, dur: 0.7 },  // D4
    { note: 261.63, dur: 0.7 },  // C4
    { note: 349.23, dur: 0.7 },  // F4
    { note: 329.63, dur: 1.2 },  // E4
    
    { note: 261.63, dur: 0.35 }, // C4
    { note: 261.63, dur: 0.35 }, // C4
    { note: 293.66, dur: 0.7 },  // D4
    { note: 261.63, dur: 0.7 },  // C4
    { note: 392.00, dur: 0.7 },  // G4
    { note: 349.23, dur: 1.2 },  // F4

    { note: 261.63, dur: 0.35 }, // C4
    { note: 261.63, dur: 0.35 }, // C4
    { note: 523.25, dur: 0.7 },  // C5
    { note: 440.00, dur: 0.7 },  // A4
    { note: 349.23, dur: 0.7 },  // F4
    { note: 329.63, dur: 0.7 },  // E4
    { note: 293.66, dur: 1.2 },  // D4

    { note: 466.16, dur: 0.35 }, // Bb4
    { note: 466.16, dur: 0.35 }, // Bb4
    { note: 440.00, dur: 0.7 },  // A4
    { note: 349.23, dur: 0.7 },  // F4
    { note: 392.00, dur: 0.7 },  // G4
    { note: 349.23, dur: 1.5 }   // F4
];

function playLoFiNote(freq, duration) {
    if (!state.isMusicPlaying) return;
    try {
        const ctx = getAudioContext();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, ctx.currentTime);
        
        gain.gain.setValueAtTime(0.001, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.12, ctx.currentTime + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);
        
        osc.connect(gain);
        gain.connect(ctx.destination);
        
        osc.start();
        osc.stop(ctx.currentTime + duration);
    } catch (e) {}
}

function startMelodyLoop() {
    state.isMusicPlaying = true;
    updateAudioUI();
    
    let noteIdx = 0;
    function scheduleNextNote() {
        if (!state.isMusicPlaying) return;
        const current = BIRTHDAY_NOTES[noteIdx];
        playLoFiNote(current.note, current.dur);
        
        const delay = current.dur * 750;
        noteIdx = (noteIdx + 1) % BIRTHDAY_NOTES.length;
        
        state.musicInterval = setTimeout(scheduleNextNote, delay);
    }
    scheduleNextNote();
}

function stopMelodyLoop() {
    state.isMusicPlaying = false;
    if (state.musicInterval) {
        clearTimeout(state.musicInterval);
    }
    updateAudioUI();
}

function updateAudioUI() {
    const bars = document.getElementById("sound-bars");
    const label = document.getElementById("audio-btn-label");
    if (bars && label) {
        if (state.isMusicPlaying) {
            bars.classList.add("playing");
            label.textContent = "Music ON";
        } else {
            bars.classList.remove("playing");
            label.textContent = "Music OFF";
        }
    }
}

function initAudioController() {
    const btn = document.getElementById("audio-toggle-btn");
    if (btn) {
        btn.addEventListener("click", () => {
            getAudioContext();
            if (state.isMusicPlaying) {
                stopMelodyLoop();
            } else {
                startMelodyLoop();
            }
        });
    }
}

/* ==========================================================================
   PHASE 1: SURPRISE UNBOXING GATEKEEPER
   ========================================================================== */
function initGatekeeper() {
    const gate = document.getElementById("surprise-gate");
    const triggerBox = document.getElementById("gift-box-trigger");
    const btnOpen = document.getElementById("btn-open-box");

    function unlockSurprise() {
        playJarCrystalChime();
        triggerConfettiExplosion();
        getAudioContext();
        startMelodyLoop();

        gate.classList.add("opened");
        setTimeout(() => {
            triggerConfettiExplosion();
        }, 600);
    }

    if (triggerBox) triggerBox.addEventListener("click", unlockSurprise);
    if (btnOpen) btnOpen.addEventListener("click", unlockSurprise);
}

function triggerConfettiExplosion() {
    if (typeof confetti === 'function') {
        const count = 200;
        const defaults = { origin: { y: 0.7 } };

        function fire(particleRatio, opts) {
            confetti(Object.assign({}, defaults, opts, {
                particleCount: Math.floor(count * particleRatio)
            }));
        }

        fire(0.25, { spread: 26, startVelocity: 55 });
        fire(0.2, { spread: 60 });
        fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
        fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
        fire(0.1, { spread: 120, startVelocity: 45 });
    }
}

/* ==========================================================================
   CURSOR GLOW & 3D TILT PHYSICS
   ========================================================================== */
function initCursorGlow() {
    const glow = document.getElementById("cursor-glow");
    if (!glow) return;

    window.addEventListener("pointermove", (e) => {
        glow.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
    });
}

function init3DTilt() {
    const tiltElements = document.querySelectorAll("[data-tilt]");
    tiltElements.forEach(card => {
        card.addEventListener("mousemove", (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            const rotateX = (-y / rect.height) * 15;
            const rotateY = (x / rect.width) * 15;
            
            const inner = card.querySelector(".polaroid-inner");
            if (inner) {
                inner.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px) scale(1.03)`;
            }
        });

        card.addEventListener("mouseleave", () => {
            const inner = card.querySelector(".polaroid-inner");
            if (inner) {
                inner.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px) scale(1)`;
            }
        });
    });
}

/* ==========================================================================
   STARDUST BACKGROUND CANVAS PARTICLES
   ========================================================================== */
function initStardustCanvas() {
    const canvas = document.getElementById("magic-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    window.addEventListener("resize", () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    const particles = [];
    const count = 45;

    for (let i = 0; i < count; i++) {
        particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            radius: Math.random() * 2 + 0.8,
            color: ["#ff477e", "#ffd166", "#4cc9f0", "#ffffff"][Math.floor(Math.random() * 4)],
            vx: (Math.random() - 0.5) * 0.4,
            vy: -Math.random() * 0.5 - 0.2,
            alpha: Math.random() * 0.7 + 0.3
        });
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);

        particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;

            if (p.y < 0) {
                p.y = height;
                p.x = Math.random() * width;
            }
            if (p.x < 0) p.x = width;
            if (p.x > width) p.x = 0;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.globalAlpha = p.alpha;
            ctx.shadowBlur = 8;
            ctx.shadowColor = p.color;
            ctx.fill();
        });

        requestAnimationFrame(animate);
    }
    animate();
}

/* ==========================================================================
   SECTION 2: ULTRA-REALISTIC CAKE CANVAS FLAME & SMOKE PHYSICS ENGINE
   ========================================================================== */
let cakeCandles = [];
let smokeParticles = [];
let emberParticles = [];
let cakeCanvas = null;
let cakeCtx = null;
let lastPointerPos = { x: 0, y: 0, speed: 0, time: 0 };

// Exact relative coordinates on the 1:1 luxury cake image
const CANDLE_REL_COORDS = [
    { x: 0.428, y: 0.148, h: 28, wickLen: 5, slant: -0.06 },
    { x: 0.465, y: 0.158, h: 30, wickLen: 5, slant: -0.03 },
    { x: 0.505, y: 0.126, h: 35, wickLen: 6, slant: 0.00 },
    { x: 0.542, y: 0.155, h: 30, wickLen: 5, slant: 0.03 },
    { x: 0.578, y: 0.168, h: 28, wickLen: 5, slant: 0.06 }
];

function initCakeCanvasEngine() {
    cakeCanvas = document.getElementById("cake-flames-canvas");
    if (!cakeCanvas) return;
    cakeCtx = cakeCanvas.getContext("2d");

    function resizeCakeCanvas() {
        const rect = cakeCanvas.parentElement.getBoundingClientRect();
        cakeCanvas.width = rect.width;
        cakeCanvas.height = rect.height;
    }
    resizeCakeCanvas();
    window.addEventListener("resize", resizeCakeCanvas);

    // Initialize the 5 candles state
    cakeCandles = CANDLE_REL_COORDS.map((coord, index) => ({
        id: index,
        relX: coord.x,
        relY: coord.y,
        baseHeight: coord.h,
        slant: coord.slant,
        lit: true,
        flickerPhase: Math.random() * Math.PI * 2,
        swayX: 0,
        emberHeat: 0, // 0 to 1 for glowing wick after extinguish
        blownTime: 0
    }));
    state.candlesRemaining = 5;
    updateCakeBanner();

    // Attach Interactive Blow / Swipe Events on Canvas
    function handlePointerMove(e) {
        const rect = cakeCanvas.getBoundingClientRect();
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        const px = clientX - rect.left;
        const py = clientY - rect.top;

        const now = performance.now();
        const dt = (now - lastPointerPos.time) || 16;
        const dist = Math.hypot(px - lastPointerPos.x, py - lastPointerPos.y);
        const speed = dist / dt; // pixels per ms

        lastPointerPos = { x: px, y: py, speed: speed, time: now };

        // Check proximity to any candle
        const w = cakeCanvas.width;
        const h = cakeCanvas.height;

        cakeCandles.forEach(candle => {
            if (!candle.lit) return;
            const cx = candle.relX * w;
            const cy = candle.relY * h;
            const d = Math.hypot(px - cx, py - cy);

            // If hovering close, sway flame in swipe direction
            if (d < 50) {
                candle.swayX = (px - cx) * 0.35;
                // If fast swipe or tap directly on flame
                if (speed > 0.75 || d < 25) {
                    extinguishSingleCandle(candle);
                }
            }
        });
    }

    cakeCanvas.addEventListener("pointermove", handlePointerMove);
    cakeCanvas.addEventListener("pointerdown", (e) => {
        handlePointerMove(e);
        // Direct tap check
        const rect = cakeCanvas.getBoundingClientRect();
        const px = e.clientX - rect.left;
        const py = e.clientY - rect.top;
        const w = cakeCanvas.width;
        const h = cakeCanvas.height;

        cakeCandles.forEach(candle => {
            if (!candle.lit) return;
            const cx = candle.relX * w;
            const cy = candle.relY * h;
            if (Math.hypot(px - cx, py - cy) < 42) {
                extinguishSingleCandle(candle);
            }
        });
    });

    // Buttons
    const btnBlowAll = document.getElementById("btn-blow-candles");
    const btnRelight = document.getElementById("btn-relight-candles");
    const btnMic = document.getElementById("btn-mic-blow");

    if (btnBlowAll) {
        btnBlowAll.addEventListener("click", () => {
            blowOutAllCandlesSequentially();
        });
    }

    if (btnRelight) {
        btnRelight.addEventListener("click", () => {
            relightAllCandles();
        });
    }

    if (btnMic) {
        btnMic.addEventListener("click", toggleMicrophoneBlow);
    }

    // Start Realtime Canvas Render Loop
    renderCakeCanvasLoop();
}

function extinguishSingleCandle(candle) {
    if (!candle.lit) return;
    candle.lit = false;
    candle.emberHeat = 1.0; // hot glowing cherry coal on wick
    candle.blownTime = performance.now();

    playCandleExtinguish(candle.id);
    state.candlesRemaining = Math.max(0, state.candlesRemaining - 1);
    updateCakeBanner();

    const w = cakeCanvas.width;
    const h = cakeCanvas.height;
    const cx = candle.relX * w;
    const cy = candle.relY * h;

    // Upward fire detachment spark
    emberParticles.push({
        x: cx,
        y: cy - 10,
        vx: (Math.random() - 0.5) * 0.8 + candle.swayX * 0.1,
        vy: -2.2,
        radius: 2.2,
        alpha: 1.0,
        color: "#ffffff"
    });

    // Rich initial wispy curling smoke plume
    for (let i = 0; i < 24; i++) {
        smokeParticles.push({
            x: cx + (Math.random() - 0.5) * 4,
            y: cy - 2 + (Math.random() - 0.5) * 4,
            vx: (Math.random() - 0.5) * 0.7 + (Math.random() > 0.5 ? 0.35 : -0.35),
            vy: -Math.random() * 1.6 - 0.7,
            radius: Math.random() * 3.5 + 2.5,
            maxRadius: Math.random() * 24 + 18,
            alpha: Math.random() * 0.55 + 0.35,
            rotation: Math.random() * Math.PI * 2,
            vRot: (Math.random() - 0.5) * 0.04,
            color: Math.random() > 0.4 ? "rgba(230, 230, 240," : "rgba(190, 190, 205,"
        });
    }

    // Hot ember sparks
    for (let i = 0; i < 6; i++) {
        emberParticles.push({
            x: cx,
            y: cy - 2,
            vx: (Math.random() - 0.5) * 1.4,
            vy: -Math.random() * 1.8 - 0.4,
            radius: Math.random() * 1.4 + 0.8,
            alpha: 1.0,
            color: "#ffaa00"
        });
    }

    if (state.candlesRemaining === 0) {
        onAllCandlesExtinguished();
    }
}

function blowOutAllCandlesSequentially() {
    playGentleBlowBreeze();
    const gust = document.getElementById("wind-gust-effect");
    if (gust) {
        gust.classList.remove("sweep");
        void gust.offsetWidth;
        gust.classList.add("sweep");
    }

    cakeCandles.forEach((candle, idx) => {
        setTimeout(() => {
            if (candle.lit) {
                extinguishSingleCandle(candle);
            }
        }, idx * 150);
    });
}

function relightAllCandles() {
    const wrapper = document.getElementById("cake-image-wrapper");
    if (wrapper) {
        wrapper.classList.remove("extinguished");
    }
    const card = document.getElementById("wish-manifestation-card");
    if (card) {
        card.classList.remove("revealed");
    }
    
    cakeCandles.forEach((candle, idx) => {
        setTimeout(() => {
            candle.lit = true;
            candle.emberHeat = 0;
            candle.swayX = 0;
            playChime(659.25 + idx * 75, 0.7, 0.05);
        }, idx * 120);
    });

    state.candlesRemaining = 5;
    updateCakeBanner();
}

function updateCakeBanner() {
    const banner = document.getElementById("wish-banner-text");
    const icon = document.getElementById("wish-banner-icon");
    if (!banner) return;

    if (state.candlesRemaining === 0) {
        banner.textContent = "✨ All 5 candles are blown out! Your birthday wish is sealed in the universe! ✨";
        if (icon) icon.textContent = "🎉";
    } else {
        banner.textContent = `${state.candlesRemaining} candle${state.candlesRemaining > 1 ? 's are' : ' is'} glowing bright! Blow them out to make your secret wish!`;
        if (icon) icon.textContent = "🕯️";
    }
}

function onAllCandlesExtinguished() {
    const wrapper = document.getElementById("cake-image-wrapper");
    if (wrapper) {
        wrapper.classList.add("extinguished");
    }

    triggerConfettiExplosion();
    playWishManifestedChord();

    setTimeout(() => {
        const card = document.getElementById("wish-manifestation-card");
        if (card) {
            card.classList.add("revealed");
            card.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
    }, 500);
}

// Microphone wind blow detection
async function toggleMicrophoneBlow() {
    const btnMic = document.getElementById("btn-mic-blow");
    if (state.micListening) return;

    try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const ctx = getAudioContext();
        const source = ctx.createMediaStreamSource(stream);
        const analyser = ctx.createAnalyser();
        analyser.fftSize = 256;
        source.connect(analyser);

        const data = new Uint8Array(analyser.frequencyBinCount);
        state.micListening = true;
        btnMic.textContent = "🎙️ Listening... Blow into mic!";
        btnMic.style.background = "#2ecc71";

        const checkAudio = () => {
            if (!state.micListening) return;
            analyser.getByteFrequencyData(data);
            let sum = 0;
            for (let i = 0; i < data.length; i++) sum += data[i];
            let average = sum / data.length;

            if (average > 55) {
                // Strong breath detected
                blowOutAllCandlesSequentially();
                state.micListening = false;
                stream.getTracks().forEach(track => track.stop());
                btnMic.textContent = "🎤 Blow Using Microphone";
                btnMic.style.background = "";
            } else {
                requestAnimationFrame(checkAudio);
            }
        };
        checkAudio();
    } catch (e) {
        alert("Microphone permission was denied or is not supported. You can easily swipe or click across the candles to blow them out!");
    }
}

// Master Canvas Rendering Engine for Photorealistic Flames & Smoke
function renderCakeCanvasLoop() {
    if (!cakeCanvas || !cakeCtx) return;

    const w = cakeCanvas.width;
    const h = cakeCanvas.height;
    const ctx = cakeCtx;
    const time = performance.now() * 0.003;

    ctx.clearRect(0, 0, w, h);

    // 0. Soft Cake Surface Warm Radiance (Simulates dynamic candlelight on frosting)
    let litCount = 0;
    let avgX = 0;
    let avgY = 0;
    cakeCandles.forEach(c => {
        if (c.lit) {
            litCount++;
            avgX += c.relX * w;
            avgY += c.relY * h;
        }
    });

    if (litCount > 0) {
        avgX /= litCount;
        avgY /= litCount;
        const ambientFlicker = 0.85 + Math.sin(time * 7) * 0.08 + Math.sin(time * 19) * 0.04;
        const cakeGlow = ctx.createRadialGradient(avgX, avgY + 32, 10, avgX, avgY + 32, w * 0.38);
        cakeGlow.addColorStop(0, `rgba(255, 175, 45, ${0.28 * ambientFlicker * (litCount / 5)})`);
        cakeGlow.addColorStop(0.5, `rgba(255, 110, 20, ${0.10 * ambientFlicker * (litCount / 5)})`);
        cakeGlow.addColorStop(1, "rgba(255, 50, 0, 0)");

        ctx.save();
        ctx.fillStyle = cakeGlow;
        ctx.beginPath();
        ctx.arc(avgX, avgY + 32, w * 0.38, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    }

    // 1. Draw Candle Flames & Wicks
    cakeCandles.forEach((candle, idx) => {
        const cx = candle.relX * w;
        const cy = candle.relY * h;

        // Smooth aerodynamic drag return
        candle.swayX *= 0.90;

        if (candle.lit) {
            // Complex organic turbulent micro-physics
            const turb1 = Math.sin(time * 5.5 + candle.flickerPhase) * 1.8;
            const turb2 = Math.sin(time * 13.2 + candle.flickerPhase * 2) * 0.9;
            const turb3 = Math.sin(time * 24.7) * 0.4;
            const flickerTotal = turb1 + turb2 + turb3;

            const flameHeight = candle.baseHeight + flickerTotal;
            // Conservation of volume: taller flame gets narrower
            const flameWidth = (11.5 * (candle.baseHeight / Math.max(18, flameHeight))) * (1 + Math.sin(time * 11) * 0.06);

            // Natural draft wave swaying
            const swayApex = candle.swayX + Math.sin(time * 4.2 + candle.flickerPhase) * 2.8 + Math.sin(time * 16) * 0.7;
            const swayMid = candle.swayX * 0.55 + Math.sin(time * 3.8 + candle.flickerPhase) * 1.4;

            // --- LAYER 1: Ambient Outer Warmth Halo ---
            ctx.save();
            const haloPulse = 0.88 + Math.sin(time * 9 + candle.flickerPhase) * 0.12;
            const haloRadius = flameHeight * 2.5;
            const haloGrad = ctx.createRadialGradient(
                cx + swayMid * 0.5, cy - flameHeight * 0.4, 2,
                cx + swayMid * 0.5, cy - flameHeight * 0.4, haloRadius
            );
            haloGrad.addColorStop(0, `rgba(255, 185, 55, ${0.42 * haloPulse})`);
            haloGrad.addColorStop(0.4, `rgba(255, 110, 10, ${0.18 * haloPulse})`);
            haloGrad.addColorStop(0.8, `rgba(255, 50, 0, ${0.04 * haloPulse})`);
            haloGrad.addColorStop(1, "rgba(255, 30, 0, 0)");
            ctx.fillStyle = haloGrad;
            ctx.beginPath();
            ctx.arc(cx + swayMid * 0.5, cy - flameHeight * 0.4, haloRadius, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();

            // --- LAYER 2: Charcoal Wick With Red-Hot Combustion Tip ---
            ctx.save();
            ctx.strokeStyle = "#1b140e";
            ctx.lineWidth = 1.8;
            ctx.lineCap = "round";
            ctx.beginPath();
            ctx.moveTo(cx, cy + 5);
            ctx.quadraticCurveTo(cx + candle.slant * 10, cy + 1, cx + swayMid * 0.2, cy - 2);
            ctx.stroke();

            // Glowing hot carbon ember tip
            ctx.fillStyle = "#ff6a00";
            ctx.shadowBlur = 4;
            ctx.shadowColor = "#ff3300";
            ctx.beginPath();
            ctx.arc(cx + swayMid * 0.2, cy - 2, 1.2, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();

            // --- LAYER 3: Incomplete Combustion Blue Mantle (Blue Cup at base) ---
            ctx.save();
            ctx.beginPath();
            const blueW = flameWidth * 0.48;
            const blueH = 6;
            ctx.ellipse(cx + swayMid * 0.2, cy, blueW, blueH, 0, 0, Math.PI * 2);
            const blueGrad = ctx.createRadialGradient(
                cx + swayMid * 0.2, cy, 1,
                cx + swayMid * 0.2, cy, blueW
            );
            blueGrad.addColorStop(0, "rgba(0, 195, 255, 0.95)");
            blueGrad.addColorStop(0.6, "rgba(0, 100, 245, 0.7)");
            blueGrad.addColorStop(1, "rgba(0, 40, 180, 0)");
            ctx.fillStyle = blueGrad;
            ctx.fill();
            ctx.restore();

            // --- LAYER 4: Outer Teardrop Luminous Envelope (Thermal Emission) ---
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(cx - flameWidth * 0.55, cy + 1);
            // Left flank curve to flickering apex
            ctx.bezierCurveTo(
                cx - flameWidth * 1.05 + swayMid * 0.6, cy - flameHeight * 0.35,
                cx - flameWidth * 0.45 + swayApex * 0.85, cy - flameHeight * 0.75,
                cx + swayApex, cy - flameHeight
            );
            // Right flank curve back to base
            ctx.bezierCurveTo(
                cx + flameWidth * 0.45 + swayApex * 0.85, cy - flameHeight * 0.75,
                cx + flameWidth * 1.05 + swayMid * 0.6, cy - flameHeight * 0.35,
                cx + flameWidth * 0.55, cy + 1
            );
            ctx.closePath();

            const outerThermalGrad = ctx.createLinearGradient(cx, cy, cx + swayApex, cy - flameHeight);
            outerThermalGrad.addColorStop(0, "rgba(255, 65, 0, 0.88)");
            outerThermalGrad.addColorStop(0.25, "rgba(255, 140, 0, 0.95)");
            outerThermalGrad.addColorStop(0.65, "rgba(255, 215, 45, 0.98)");
            outerThermalGrad.addColorStop(0.92, "rgba(255, 250, 190, 1.0)");
            outerThermalGrad.addColorStop(1, "rgba(255, 255, 255, 1.0)");
            ctx.fillStyle = outerThermalGrad;
            ctx.shadowBlur = 14;
            ctx.shadowColor = "#ff7b00";
            ctx.fill();
            ctx.restore();

            // --- LAYER 5: Inner Incandescent Golden Core ---
            ctx.save();
            ctx.beginPath();
            const inW = flameWidth * 0.42;
            const inH = flameHeight * 0.62;
            const inApex = swayApex * 0.75;
            const inMid = swayMid * 0.5;

            ctx.moveTo(cx - inW * 0.5, cy - 1);
            ctx.bezierCurveTo(
                cx - inW * 0.9 + inMid, cy - inH * 0.35,
                cx - inW * 0.35 + inApex, cy - inH * 0.75,
                cx + inApex, cy - inH
            );
            ctx.bezierCurveTo(
                cx + inW * 0.35 + inApex, cy - inH * 0.75,
                cx + inW * 0.9 + inMid, cy - inH * 0.35,
                cx + inW * 0.5, cy - 1
            );
            ctx.closePath();

            const coreGrad = ctx.createLinearGradient(cx, cy, cx + inApex, cy - inH);
            coreGrad.addColorStop(0, "rgba(255, 200, 50, 0.9)");
            coreGrad.addColorStop(0.4, "rgba(255, 245, 140, 0.98)");
            coreGrad.addColorStop(0.85, "#ffffff");
            coreGrad.addColorStop(1, "#ffffff");
            ctx.fillStyle = coreGrad;
            ctx.shadowBlur = 8;
            ctx.shadowColor = "#ffeaa7";
            ctx.fill();
            ctx.restore();

            // --- LAYER 6: Brilliant White-Hot Flame Eye ---
            ctx.save();
            ctx.beginPath();
            const eyeW = flameWidth * 0.22;
            const eyeH = flameHeight * 0.28;
            ctx.ellipse(cx + inMid * 0.3, cy - inH * 0.3, eyeW, eyeH, 0, 0, Math.PI * 2);
            ctx.fillStyle = "#ffffff";
            ctx.shadowBlur = 6;
            ctx.shadowColor = "#ffffff";
            ctx.fill();
            ctx.restore();

            // Micro Embers Sparking Occasionally
            if (Math.random() < 0.12) {
                emberParticles.push({
                    x: cx + (Math.random() - 0.5) * 3,
                    y: cy - flameHeight * 0.65,
                    vx: (Math.random() - 0.5) * 0.3 + swayApex * 0.04,
                    vy: -Math.random() * 1.2 - 0.4,
                    radius: Math.random() * 1.1 + 0.5,
                    alpha: 0.95,
                    color: "#fff2a8"
                });
            }
        } else {
            // Extinguished Wick Cooling & Photorealistic Wispy Smoke
            // Draw Charcoal Wick
            ctx.save();
            ctx.strokeStyle = "#1b140e";
            ctx.lineWidth = 1.8;
            ctx.lineCap = "round";
            ctx.beginPath();
            ctx.moveTo(cx, cy + 5);
            ctx.quadraticCurveTo(cx + candle.slant * 8, cy + 1, cx, cy - 2);
            ctx.stroke();

            if (candle.emberHeat > 0) {
                candle.emberHeat -= 0.0025; // cools down gracefully over ~6.5 seconds
                if (candle.emberHeat < 0) candle.emberHeat = 0;

                const heat = candle.emberHeat;
                // Cherry red glowing coal on wick tip
                ctx.beginPath();
                ctx.arc(cx, cy - 2, 1.8 * Math.max(0.4, heat), 0, Math.PI * 2);
                const emberGlow = `rgba(255, ${Math.floor(75 * heat)}, 0, ${heat})`;
                ctx.fillStyle = emberGlow;
                ctx.shadowBlur = 10 * heat;
                ctx.shadowColor = "#ff2200";
                ctx.fill();

                // Generate lifelike curling rising smoke while wick is warm
                if (Math.random() < 0.4 * heat) {
                    smokeParticles.push({
                        x: cx + (Math.random() - 0.5) * 2,
                        y: cy - 2,
                        vx: (Math.random() - 0.5) * 0.4,
                        vy: -Math.random() * 0.85 - 0.45,
                        radius: Math.random() * 2.5 + 1.8,
                        maxRadius: Math.random() * 20 + 14,
                        alpha: 0.5 * heat,
                        rotation: Math.random() * Math.PI * 2,
                        vRot: (Math.random() - 0.5) * 0.035,
                        color: Math.random() > 0.5 ? "rgba(225, 225, 235," : "rgba(195, 195, 210,"
                    });
                }
            }
            ctx.restore();
        }
    });

    // 2. Render & Animate Volumetric Curling Smoke Streams
    for (let i = smokeParticles.length - 1; i >= 0; i--) {
        const p = smokeParticles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.radius += (p.maxRadius - p.radius) * 0.018;
        p.alpha -= 0.0035;
        p.rotation += p.vRot;
        p.vx += Math.sin(p.y * 0.04 + time * 1.5) * 0.035; // organic vortex drift

        if (p.alpha <= 0) {
            smokeParticles.splice(i, 1);
            continue;
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        const smokeGrad = ctx.createRadialGradient(0, 0, 0, 0, 0, p.radius);
        smokeGrad.addColorStop(0, `${p.color} ${p.alpha})`);
        smokeGrad.addColorStop(0.5, `${p.color} ${p.alpha * 0.45})`);
        smokeGrad.addColorStop(1, `${p.color} 0)`);
        ctx.fillStyle = smokeGrad;
        ctx.beginPath();
        ctx.arc(0, 0, p.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    }

    // 3. Render & Animate Floating Golden Micro Embers
    for (let i = emberParticles.length - 1; i >= 0; i--) {
        const ep = emberParticles[i];
        ep.x += ep.vx;
        ep.y += ep.vy;
        ep.alpha -= 0.018;

        if (ep.alpha <= 0) {
            emberParticles.splice(i, 1);
            continue;
        }

        ctx.save();
        ctx.beginPath();
        ctx.arc(ep.x, ep.y, ep.radius, 0, Math.PI * 2);
        ctx.fillStyle = ep.color;
        ctx.globalAlpha = ep.alpha;
        ctx.shadowBlur = 6;
        ctx.shadowColor = ep.color;
        ctx.fill();
        ctx.restore();
    }

    requestAnimationFrame(renderCakeCanvasLoop);
}

/* ==========================================================================
   SECTION 3: MEMORY LANE POLAROID GALLERY & STORY MODAL ENGINE
   ========================================================================== */
const MEMORIES_DATA = [
    {
        id: 0,
        img: "assets/memory1.jpg",
        title: "Pure Chaos & Goofy Vibes 🤪",
        badge: "😂 Silly Queen",
        date: "Silly Hours",
        caption: "Goofball Queen & 100% Chaos 🤪",
        subtext: "When being goofy together is a billion times better than looking aesthetic!",
        story: "There is no better feeling in this universe than having a best friend around whom you never have to pretend or hold back. One silly look, one goofy face, and suddenly we're both laughing until our stomachs hurt! You bring so much vibrant energy and unadulterated joy into my life. Here's to countless more candid, crazy, and uncontrollable laughing fits together! 😂💖",
        secretNote: "Dear Grace, only with you can anyone be this unapologetically silly and authentic! Your goofy expressions, sudden bursts of laughter, and contagious humor can instantly turn any gloomy day into pure joy. Never lose your playful spark!",
        sig: "— Partner in Chaos, Yash 🤪❤️",
        likes: 21,
        category: "laugh"
    },
    {
        id: 1,
        img: "assets/memory2.jpg",
        title: "Shadows In The Sun, Bond For Life 🌅✨",
        badge: "✨ Aesthetic Soul",
        date: "Golden Hour",
        caption: "Shadows Fade, We Don't 🌅",
        subtext: "Two silhouettes on an afternoon wall — where silence speaks a million words.",
        story: "Some moments don't even need words or flashy poses. Just the warm golden sun casting our shadows together on a textured wall, capturing the quiet certainty that we've always got each other's back. In a fast-changing world, having a friendship as genuine, grounding, and loyal as ours is the rarest gift of all. 🌅❤️",
        secretNote: "Two silhouettes cast upon the golden afternoon sun. Even when shadows fade into twilight, our bond remains steadfast and unwavering. Through every high and low, I know I have a true friend who stands by me no matter what.",
        sig: "— Side by side through everything ✨",
        likes: 32,
        category: "aesthetic"
    },
    {
        id: 2,
        img: "assets/memory3.jpg",
        title: "Twinning Flannels & Telepathic Vibes 👯‍♀️💙",
        badge: "💙 Twinning Duo",
        date: "Vibe Check",
        caption: "Unplanned Twinning & Heart Halos 💖",
        subtext: "Matching checkered shirts with zero prior planning — 100% bestie telepathy!",
        story: "They say best friends start thinking alike, dressing alike, and finishing each other's sentences. This photo is living proof! From matching flannel patterns to having the exact same wavelength in any crowded room, hanging out with you is always top-tier comfort and pure vibes. 👯‍♀️✨",
        secretNote: "When we show up wearing matching flannel checkered shirts with zero prior coordination! 😂 If that isn't undeniable cosmic proof of our bestie connection, I don't know what is. You + Me = The Ultimate Unstoppable Duo.",
        sig: "— The Flannel Squad 👯‍♀️✨",
        likes: 45,
        category: "vibes"
    },
    {
        id: 3,
        img: "assets/memory4.jpg",
        title: "Roses Fit For The Birthday Queen 💐🌹",
        badge: "👑 Royal Blooms",
        date: "Royal Bouquet",
        caption: "Blooms Fit For A Queen 💐",
        subtext: "Crimson and golden roses wrapped in luxury black & gold for your 21st!",
        story: "Every petal represents a wish for your happiness, every red rose for deep affection, and the golden blossom for the bright, prosperous future waiting for you in your 21st chapter. You deserve all the flowers, celebrations, and love in the universe today and always! 💐✨",
        secretNote: "Hand-picked crimson red & vibrant golden roses wrapped with love. Just a small reminder of how deeply valued, cherished, and irreplaceable you are in my life. Wishing you a year as bright and beautiful as these blooms!",
        sig: "— Only the finest for you, Queen 🌹💖",
        likes: 56,
        category: "sweet"
    },
    {
        id: 4,
        img: "assets/memory5.jpg",
        title: "Golden Hours & Endless Smiles 🌸✨",
        badge: "💫 Core Memory",
        date: "Yash & Grace",
        caption: "Pure Sunshine & Core Memories ✨",
        subtext: "Dressed in gold, surrounded by sunshine, and smiling because life is better together.",
        story: "This photo radiates everything I love about our friendship: comfort, genuine happiness, effortless style, and memories that will remain close to my heart for a lifetime. Thank you for being the most supportive, wonderful, and extraordinary best friend. 💖👑",
        secretNote: "The warmest afternoon smiles and pure sunshine. Having you, Grace, as my best friend makes even the most ordinary day feel like an unforgettable adventure. Grateful for every single second of this journey with you!",
        sig: "— Forever & always, Yash ❤️",
        category: "sweet"
    },
    {
        id: 5,
        img: "assets/memory6.jpg",
        title: "Foodie Dates & Sassy Looks 😎🍽️",
        badge: "😎 Iconic Duo",
        date: "Foodie Chronicles",
        caption: "Foodie Dates & Sassy Looks 😎🍽️",
        subtext: "When the food is taking too long and we decide to take candid selfies instead!",
        story: "Some of the best memories aren't the planned luxury vacations, but the spontaneous cafe dates where we sit with a menu, share juicy gossip, take goofy candid selfies, and laugh at each other's expressions. You rocking that adorable dramatic pout while I wear my headphones like a DJ — iconic duo behavior! Here's to 1,000 more delicious food adventures together! 🎧🍕💖",
        secretNote: "Dear Grace, hanging out with you over good food and endless banter is my absolute favorite pastime. Whether we're judging everyone in the room or complaining about how hungry we are, there's nobody else I'd rather share a table (or my fries) with! Stay sassy, stay iconic.",
        sig: "— Your Foodie Partner in Crime, Yash 🍕✨",
        category: "laugh"
    }
];

let currentMemoryModalIndex = 0;

function initGalleryFilters() {
    const tabs = document.querySelectorAll(".filter-tab");
    const cards = document.querySelectorAll(".polaroid-card");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            tabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");

            const filter = tab.getAttribute("data-filter");
            playSoftTouch(520);

            cards.forEach(card => {
                const cat = card.getAttribute("data-category");
                if (filter === "all" || cat === filter) {
                    card.classList.remove("hidden");
                } else {
                    card.classList.add("hidden");
                }
            });
        });
    });

    // Attach global keyboard navigation for modal
    window.addEventListener("keydown", (e) => {
        const modal = document.getElementById("memory-story-modal");
        if (modal && modal.classList.contains("active")) {
            if (e.key === "Escape") closeMemoryModal();
            if (e.key === "ArrowLeft") navigateMemory(-1);
            if (e.key === "ArrowRight") navigateMemory(1);
        }
    });
}

function flipPolaroid(idx) {
    const cards = document.querySelectorAll(".polaroid-card");
    if (cards[idx]) {
        cards[idx].classList.toggle("flipped");
        playParchmentFlutter();
    }
}



function spawnFloatingHearts(sourceElement) {
    const rect = sourceElement.getBoundingClientRect();
    const hearts = ["💖", "✨", "🌸", "❤️", "⭐"];
    
    for (let i = 0; i < 6; i++) {
        const span = document.createElement("span");
        span.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        span.style.position = "fixed";
        span.style.left = `${rect.left + rect.width / 2 + (Math.random() * 40 - 20)}px`;
        span.style.top = `${rect.top + (Math.random() * 10 - 5)}px`;
        span.style.fontSize = `${Math.random() * 10 + 16}px`;
        span.style.pointerEvents = "none";
        span.style.zIndex = "99999";
        span.style.transition = "all 0.85s cubic-bezier(0.2, 0.8, 0.2, 1)";
        span.style.opacity = "1";
        document.body.appendChild(span);

        setTimeout(() => {
            span.style.transform = `translateY(-${Math.random() * 60 + 50}px) scale(${Math.random() * 0.4 + 1.2}) rotate(${Math.random() * 40 - 20}deg)`;
            span.style.opacity = "0";
        }, 20);

        setTimeout(() => {
            span.remove();
        }, 900);
    }
}

function openMemoryModal(index) {
    currentMemoryModalIndex = index;
    const mem = MEMORIES_DATA[index];
    if (!mem) return;

    const modal = document.getElementById("memory-story-modal");
    const imgEl = document.getElementById("modal-memory-img");
    const badgeEl = document.getElementById("modal-memory-badge");
    const countEl = document.getElementById("modal-memory-counter");
    const titleEl = document.getElementById("modal-memory-title");
    const dateEl = document.getElementById("modal-memory-date");
    const storyEl = document.getElementById("modal-memory-story");

    if (imgEl) {
        imgEl.src = mem.img;
        imgEl.alt = mem.title;
        // Shift Memory #4 (bouquet) upward to focus on the vibrant blooms
        if (index === 3) {
            imgEl.style.objectPosition = "center 52%";
        } else {
            imgEl.style.objectPosition = "center 25%";
        }
    }
    if (badgeEl) badgeEl.textContent = mem.badge;
    if (countEl) countEl.textContent = `${index + 1} of ${MEMORIES_DATA.length}`;
    if (titleEl) titleEl.textContent = mem.title;
    if (dateEl) dateEl.textContent = mem.date;
    if (storyEl) storyEl.textContent = mem.story;

    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    playCameraClick();
}

function closeMemoryModal() {
    const modal = document.getElementById("memory-story-modal");
    if (modal) {
        modal.classList.remove("active");
        modal.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";
        playSoftTouch(330);
    }
}

function navigateMemory(delta) {
    let nextIdx = currentMemoryModalIndex + delta;
    if (nextIdx < 0) nextIdx = MEMORIES_DATA.length - 1;
    if (nextIdx >= MEMORIES_DATA.length) nextIdx = 0;
    openMemoryModal(nextIdx);
}

/* ==========================================================================
   SECTION 4: MAGIC WISHING JAR
   ========================================================================== */
function initWishingJar() {
    drawWishScroll();
}

function drawWishScroll() {
    const jar = document.getElementById("jar-trigger");
    const parchment = document.getElementById("scroll-parchment");
    const quoteEl = document.getElementById("scroll-quote");
    const numberEl = document.getElementById("scroll-number");

    playJarCrystalChime();

    if (jar) {
        jar.style.transform = "scale(0.94) rotate(-3deg)";
        setTimeout(() => {
            jar.style.transform = "";
        }, 300);
    }

    const randomIdx = Math.floor(Math.random() * WISH_REASONS.length);
    quoteEl.textContent = `"${WISH_REASONS[randomIdx]}"`;
    numberEl.textContent = `Reason #${randomIdx + 1} of ${WISH_REASONS.length}`;

    if (parchment) {
        parchment.style.animation = 'none';
        parchment.offsetHeight;
        parchment.style.animation = 'unrollScroll 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    }
}

/* ==========================================================================
   SECTION 5: GOLDEN WAX SECRET LETTER
   ========================================================================== */
function initLetterEnvelope() {
    const dateEl = document.getElementById("letter-current-date");
    if (dateEl) {
        dateEl.textContent = "October 16, 2026";
    }
}

function openWaxLetter() {
    const env = document.getElementById("vintage-envelope");
    const letter = document.getElementById("unfolded-letter-card");

    playParchmentFlutter();
    playChime(659.25, 1.0, 0.08);

    env.classList.add("opened");
    letter.classList.add("show");
    
    // Smoothly scroll to the very beginning/top of the letter
    setTimeout(() => {
        const nav = document.querySelector(".glass-nav");
        const navHeight = nav ? nav.offsetHeight + 20 : 80;
        const letterRect = letter.getBoundingClientRect();
        const letterTop = letterRect.top + window.pageYOffset - navHeight;
        
        window.scrollTo({
            top: Math.max(0, letterTop),
            behavior: "smooth"
        });
    }, 60);
}

function closeWaxLetter() {
    const env = document.getElementById("vintage-envelope");
    const letter = document.getElementById("unfolded-letter-card");
    const letterSection = document.getElementById("letter-section");

    if (letter) letter.classList.remove("show");
    if (env) {
        env.classList.remove("opened");
    }
    
    setTimeout(() => {
        if (letterSection) {
            const nav = document.querySelector(".glass-nav");
            const navHeight = nav ? nav.offsetHeight + 20 : 80;
            const secTop = letterSection.getBoundingClientRect().top + window.pageYOffset - navHeight;
            window.scrollTo({
                top: Math.max(0, secTop),
                behavior: "smooth"
            });
        }
    }, 60);
    
    playSoftTouch(440);
}

function switchLetterLang(lang) {
    const taView = document.getElementById("letter-view-ta");
    const enView = document.getElementById("letter-view-en");
    const btnTa = document.getElementById("btn-lang-ta");
    const btnEn = document.getElementById("btn-lang-en");
    const btnToggle = document.getElementById("btn-toggle-lang");

    if (!taView || !enView) return;

    if (lang === 'en') {
        taView.style.display = 'none';
        enView.style.display = 'block';
        if (btnTa) btnTa.classList.remove('active');
        if (btnEn) btnEn.classList.add('active');
        if (btnToggle) {
            btnToggle.innerHTML = '<span>📜</span> Read in Original Tamil (தமிழ்)';
        }
    } else {
        enView.style.display = 'none';
        taView.style.display = 'block';
        if (btnEn) btnEn.classList.remove('active');
        if (btnTa) btnTa.classList.add('active');
        if (btnToggle) {
            btnToggle.innerHTML = '<span>🌐</span> Read English Translation';
        }
    }
    playSoftTouch(520);
}

function toggleLetterTranslation() {
    const enView = document.getElementById("letter-view-en");
    if (enView && enView.style.display === 'block') {
        switchLetterLang('ta');
    } else {
        switchLetterLang('en');
    }
}

/* ==========================================================================
   SECTION 6: BESTIE TRIVIA CHALLENGE
   ========================================================================== */
function initQuiz() {
    renderQuizQuestion();
}

function renderQuizQuestion() {
    const questionEl = document.getElementById("quiz-question-text");
    const stepEl = document.getElementById("quiz-step-label");
    const progressFill = document.getElementById("quiz-progress-fill");
    const optionsList = document.getElementById("quiz-options-list");
    const box = document.getElementById("quiz-question-box");
    const result = document.getElementById("quiz-result-screen");

    if (state.currentQuizIndex >= QUIZ_QUESTIONS.length) {
        box.style.display = "none";
        result.style.display = "block";
        triggerConfettiExplosion();
        playQuizVictoryFanfare();
        return;
    }

    const current = QUIZ_QUESTIONS[state.currentQuizIndex];
    stepEl.textContent = `Question ${state.currentQuizIndex + 1} of ${QUIZ_QUESTIONS.length}`;
    questionEl.textContent = current.question;
    progressFill.style.width = `${((state.currentQuizIndex + 1) / QUIZ_QUESTIONS.length) * 100}%`;

    optionsList.innerHTML = "";
    current.options.forEach((opt, idx) => {
        const btn = document.createElement("button");
        btn.className = "quiz-option-btn";
        btn.innerHTML = `<span>${['A', 'B', 'C', 'D'][idx]}.</span> <span>${opt.text}</span>`;
        btn.addEventListener("click", () => handleQuizAnswer(btn, opt.correct));
        optionsList.appendChild(btn);
    });
}

function handleQuizAnswer(btn, isCorrect) {
    if (isCorrect) {
        btn.classList.add("correct");
        playQuizSuccessChime();
        state.quizScore++;
        triggerConfettiExplosion();
    } else {
        btn.classList.add("wrong");
        playSoftTouch(330);
    }

    setTimeout(() => {
        state.currentQuizIndex++;
        renderQuizQuestion();
    }, 700);
}

function restartQuiz() {
    state.currentQuizIndex = 0;
    state.quizScore = 0;
    document.getElementById("quiz-question-box").style.display = "block";
    document.getElementById("quiz-result-screen").style.display = "none";
    renderQuizQuestion();
}

/* ==========================================================================
   DOWNLOADABLE KEEPSAKE SOUVENIR CARD (CANVAS EXPORT)
   ========================================================================== */
function initKeepsakeDownload() {
    const btn = document.getElementById("btn-download-card");
    if (btn) {
        btn.addEventListener("click", generateAndDownloadCard);
    }
}

function generateAndDownloadCard() {
    const canvas = document.getElementById("souvenir-export-canvas");
    canvas.width = 1200;
    canvas.height = 800;
    const ctx = canvas.getContext("2d");

    // Luxury Royal Dark Gradient Background
    const grad = ctx.createLinearGradient(0, 0, 1200, 800);
    grad.addColorStop(0, "#19082b");
    grad.addColorStop(0.5, "#2d0b42");
    grad.addColorStop(1, "#0a0212");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 1200, 800);

    // Golden Borders
    ctx.strokeStyle = "#ffd166";
    ctx.lineWidth = 6;
    ctx.strokeRect(30, 30, 1140, 740);

    ctx.strokeStyle = "rgba(255, 71, 126, 0.5)";
    ctx.lineWidth = 2;
    ctx.strokeRect(45, 45, 1110, 710);

    // Decorative Stars
    ctx.fillStyle = "#ffffff";
    for (let i = 0; i < 80; i++) {
        ctx.fillRect(Math.random() * 1200, Math.random() * 800, 2, 2);
    }

    // Header Badge
    ctx.fillStyle = "#ffd166";
    ctx.font = "bold 22px 'Poppins', sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("✨ SPECIAL 21ST BIRTHDAY MILESTONE KEEPSAKE ✨", 600, 120);

    // Main Greeting
    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 64px 'Outfit', sans-serif";
    ctx.fillText("Happy 21st Birthday,", 600, 210);

    // Recipient Name
    ctx.fillStyle = "#ff477e";
    ctx.font = "bold 78px 'Dancing Script', cursive";
    ctx.fillText(state.recipientName + " 👑", 600, 300);

    // Message Box
    ctx.fillStyle = "#fdfbf7";
    ctx.font = "italic 26px 'Playfair Display', serif";
    ctx.fillText('"Born on October 16, 2005 — 21 Glorious Years of Radiance & Smiles."', 600, 410);
    ctx.fillText('Thank you for being the most incredible, loyal & cherished best friend! 💖', 600, 460);

    // Date & Signature
    ctx.fillStyle = "#ffd166";
    ctx.font = "20px 'Poppins', sans-serif";
    ctx.fillText(`Commemorated for: October 16, 2005 • Sweet 21st Edition`, 600, 570);

    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 28px 'Dancing Script', cursive";
    ctx.fillText(`With Eternal Love & Friendship, — ${state.senderName} ❤️`, 600, 640);

    // Download Trigger
    const link = document.createElement("a");
    link.download = `Happy_21st_Birthday_Oct_16_2005_Keepsake.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();

    triggerConfettiExplosion();
    playWishManifestedChord();
}

/* Smooth Scroll Helper with Navbar Offset */
function scrollToSection(sectionId) {
    const el = document.getElementById(sectionId);
    if (el) {
        const navHeight = document.querySelector(".glass-navbar")?.offsetHeight || 70;
        const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = Math.max(0, elementPosition - navHeight - 15);
        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }
}

/* ==========================================================================
   NAVBAR SCROLL SPY & DYNAMIC NAVIGATION ENGINE
   ========================================================================== */
function initNavbarScrollSpy() {
    const navLinks = document.querySelectorAll(".nav-item");
    const sectionIds = ["hero", "cake-section", "memories-section", "wishing-jar-section", "letter-section", "quiz-section"];
    
    // Click navigation with smooth offset scrolling
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            const href = link.getAttribute("href");
            if (href && href.startsWith("#")) {
                e.preventDefault();
                const targetId = href.substring(1);
                scrollToSection(targetId);

                navLinks.forEach(l => l.classList.remove("active"));
                link.classList.add("active");
                playSoftTouch(480);
            }
        });
    });

    // ScrollSpy tracking based on viewport position
    let ticking = false;
    function updateActiveNavbar() {
        const scrollPosition = window.pageYOffset + 180;
        
        // Handle bottom of page (Trivia section)
        if ((window.innerHeight + window.pageYOffset) >= document.documentElement.scrollHeight - 60) {
            const quizLink = document.querySelector('.nav-item[href="#quiz-section"]');
            if (quizLink) {
                navLinks.forEach(l => l.classList.remove("active"));
                quizLink.classList.add("active");
                return;
            }
        }

        let currentActiveId = "hero";
        sectionIds.forEach(id => {
            const el = document.getElementById(id);
            if (el) {
                const top = el.offsetTop;
                if (scrollPosition >= top) {
                    currentActiveId = id;
                }
            }
        });

        navLinks.forEach(link => {
            const href = link.getAttribute("href");
            if (href === `#${currentActiveId}`) {
                if (!link.classList.contains("active")) {
                    navLinks.forEach(l => l.classList.remove("active"));
                    link.classList.add("active");
                }
            }
        });

        ticking = false;
    }

    window.addEventListener("scroll", () => {
        if (!ticking) {
            window.requestAnimationFrame(updateActiveNavbar);
            ticking = true;
        }
    }, { passive: true });

    // Run once on load
    updateActiveNavbar();
}