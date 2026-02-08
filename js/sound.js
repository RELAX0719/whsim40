// ========== 音效系統 ==========

let audioContext = null;
let masterVolume = 0.5;
let isMuted = false;

function initAudio() {
  if (!audioContext) {
    try {
      audioContext = new (window.AudioContext || window.webkitAudioContext)();
    } catch (e) {
      console.warn('Web Audio API not supported');
    }
  }
}

function setVolume(value) {
  masterVolume = Math.max(0, Math.min(1, value));
  document.getElementById('volumeValue').textContent = Math.round(masterVolume * 100) + '%';
}

function toggleMute() {
  isMuted = !isMuted;
  const btn = document.getElementById('muteBtn');
  if (btn) {
    btn.textContent = isMuted ? '🔇' : '🔊';
    btn.title = isMuted ? '取消靜音' : '靜音';
  }
}

function playSound(type, options = {}) {
  if (isMuted || !audioContext) return;
  initAudio();

  const volume = (options.volume || 1) * masterVolume;

  switch(type) {
    case 'shoot': playShotSound(volume, options.weapon); break;
    case 'hit': playHitSound(volume); break;
    case 'explosion': playExplosionSound(volume, options.size); break;
    case 'melee': playMeleeSound(volume); break;
    case 'miss': playMissSound(volume); break;
    case 'death': playDeathSound(volume); break;
    case 'heal': playHealSound(volume); break;
    case 'select': playSelectSound(volume); break;
    case 'click': playClickSound(volume); break;
    case 'roundStart': playRoundStartSound(volume); break;
    case 'victory': playVictorySound(volume); break;
    case 'charge': playChargeSound(volume); break;
    case 'dice': playDiceSound(volume); break;
  }
}

function playShotSound(volume, weapon) {
  const ctx = audioContext;
  const now = ctx.currentTime;

  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  const filter = ctx.createBiquadFilter();

  osc.connect(filter);
  filter.connect(gain);
  gain.connect(ctx.destination);

  if (weapon === 'laser') {
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(1200, now);
    osc.frequency.exponentialRampToValueAtTime(400, now + 0.15);
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(3000, now);
    gain.gain.setValueAtTime(volume * 0.3, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.2);
    osc.start(now);
    osc.stop(now + 0.2);
  } else {
    osc.type = 'square';
    osc.frequency.setValueAtTime(150, now);
    osc.frequency.exponentialRampToValueAtTime(50, now + 0.1);
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1000, now);
    gain.gain.setValueAtTime(volume * 0.4, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.15);
    osc.start(now);
    osc.stop(now + 0.15);
  }
}

function playHitSound(volume) {
  const ctx = audioContext;
  const now = ctx.currentTime;

  const noise = ctx.createBufferSource();
  noise.buffer = createNoiseBuffer(0.1);
  const gain = ctx.createGain();
  const filter = ctx.createBiquadFilter();

  noise.connect(filter);
  filter.connect(gain);
  gain.connect(ctx.destination);

  filter.type = 'bandpass';
  filter.frequency.setValueAtTime(800, now);
  gain.gain.setValueAtTime(volume * 0.5, now);
  gain.gain.exponentialRampToValueAtTime(0.01, now + 0.1);

  noise.start(now);
  noise.stop(now + 0.1);
}

function playExplosionSound(volume, size = 'medium') {
  const ctx = audioContext;
  const now = ctx.currentTime;
  const duration = size === 'large' ? 0.8 : size === 'small' ? 0.3 : 0.5;

  const noise = ctx.createBufferSource();
  noise.buffer = createNoiseBuffer(duration);
  const gain = ctx.createGain();
  const filter = ctx.createBiquadFilter();

  noise.connect(filter);
  filter.connect(gain);
  gain.connect(ctx.destination);

  filter.type = 'lowpass';
  filter.frequency.setValueAtTime(500, now);
  filter.frequency.exponentialRampToValueAtTime(100, now + duration);
  gain.gain.setValueAtTime(volume * 0.7, now);
  gain.gain.exponentialRampToValueAtTime(0.01, now + duration);

  noise.start(now);
  noise.stop(now + duration);
}

function playMeleeSound(volume) {
  const ctx = audioContext;
  const now = ctx.currentTime;

  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.type = 'sawtooth';
  osc.frequency.setValueAtTime(200, now);
  osc.frequency.exponentialRampToValueAtTime(80, now + 0.1);
  gain.gain.setValueAtTime(volume * 0.4, now);
  gain.gain.exponentialRampToValueAtTime(0.01, now + 0.15);

  osc.start(now);
  osc.stop(now + 0.15);
}

function playMissSound(volume) {
  const ctx = audioContext;
  const now = ctx.currentTime;

  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.type = 'sine';
  osc.frequency.setValueAtTime(400, now);
  osc.frequency.exponentialRampToValueAtTime(200, now + 0.2);
  gain.gain.setValueAtTime(volume * 0.2, now);
  gain.gain.exponentialRampToValueAtTime(0.01, now + 0.2);

  osc.start(now);
  osc.stop(now + 0.2);
}

function playDeathSound(volume) {
  const ctx = audioContext;
  const now = ctx.currentTime;

  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.type = 'sawtooth';
  osc.frequency.setValueAtTime(300, now);
  osc.frequency.exponentialRampToValueAtTime(50, now + 0.5);
  gain.gain.setValueAtTime(volume * 0.5, now);
  gain.gain.exponentialRampToValueAtTime(0.01, now + 0.5);

  osc.start(now);
  osc.stop(now + 0.5);
}

function playHealSound(volume) {
  const ctx = audioContext;
  const now = ctx.currentTime;

  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.type = 'sine';
  osc.frequency.setValueAtTime(400, now);
  osc.frequency.linearRampToValueAtTime(800, now + 0.2);
  osc.frequency.linearRampToValueAtTime(600, now + 0.4);
  gain.gain.setValueAtTime(volume * 0.3, now);
  gain.gain.exponentialRampToValueAtTime(0.01, now + 0.4);

  osc.start(now);
  osc.stop(now + 0.4);
}

function playSelectSound(volume) {
  const ctx = audioContext;
  const now = ctx.currentTime;

  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.type = 'sine';
  osc.frequency.setValueAtTime(600, now);
  osc.frequency.exponentialRampToValueAtTime(800, now + 0.05);
  gain.gain.setValueAtTime(volume * 0.2, now);
  gain.gain.exponentialRampToValueAtTime(0.01, now + 0.1);

  osc.start(now);
  osc.stop(now + 0.1);
}

function playClickSound(volume) {
  const ctx = audioContext;
  const now = ctx.currentTime;

  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.type = 'square';
  osc.frequency.setValueAtTime(1000, now);
  gain.gain.setValueAtTime(volume * 0.15, now);
  gain.gain.exponentialRampToValueAtTime(0.01, now + 0.03);

  osc.start(now);
  osc.stop(now + 0.03);
}

function playRoundStartSound(volume) {
  const ctx = audioContext;
  const now = ctx.currentTime;

  for (let i = 0; i < 3; i++) {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.type = 'sine';
    osc.frequency.setValueAtTime(400 + i * 200, now + i * 0.15);
    gain.gain.setValueAtTime(0, now + i * 0.15);
    gain.gain.linearRampToValueAtTime(volume * 0.3, now + i * 0.15 + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.01, now + i * 0.15 + 0.2);

    osc.start(now + i * 0.15);
    osc.stop(now + i * 0.15 + 0.2);
  }
}

function playVictorySound(volume) {
  const ctx = audioContext;
  const now = ctx.currentTime;
  const notes = [523.25, 659.25, 783.99, 1046.50];

  notes.forEach((freq, i) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, now + i * 0.2);
    gain.gain.setValueAtTime(0, now + i * 0.2);
    gain.gain.linearRampToValueAtTime(volume * 0.4, now + i * 0.2 + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.01, now + i * 0.2 + 0.5);

    osc.start(now + i * 0.2);
    osc.stop(now + i * 0.2 + 0.5);
  });
}

function playChargeSound(volume) {
  const ctx = audioContext;
  const now = ctx.currentTime;

  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.type = 'sawtooth';
  osc.frequency.setValueAtTime(100, now);
  osc.frequency.linearRampToValueAtTime(300, now + 0.3);
  gain.gain.setValueAtTime(volume * 0.4, now);
  gain.gain.exponentialRampToValueAtTime(0.01, now + 0.4);

  osc.start(now);
  osc.stop(now + 0.4);
}

function playDiceSound(volume) {
  const ctx = audioContext;
  const now = ctx.currentTime;

  for (let i = 0; i < 5; i++) {
    const noise = ctx.createBufferSource();
    noise.buffer = createNoiseBuffer(0.03);
    const gain = ctx.createGain();
    const filter = ctx.createBiquadFilter();

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    filter.type = 'highpass';
    filter.frequency.setValueAtTime(2000, now + i * 0.05);
    gain.gain.setValueAtTime(volume * 0.3, now + i * 0.05);
    gain.gain.exponentialRampToValueAtTime(0.01, now + i * 0.05 + 0.03);

    noise.start(now + i * 0.05);
    noise.stop(now + i * 0.05 + 0.03);
  }
}

function createNoiseBuffer(duration) {
  const sampleRate = audioContext.sampleRate;
  const length = sampleRate * duration;
  const buffer = audioContext.createBuffer(1, length, sampleRate);
  const data = buffer.getChannelData(0);

  for (let i = 0; i < length; i++) {
    data[i] = Math.random() * 2 - 1;
  }

  return buffer;
}
