function createRepeatingTextBackground() {

  document.title = 'Jump Stars Community';

  const oldBg = document.getElementById('repeating-text-bg');
  if (oldBg) oldBg.remove();
  const bg = document.createElement('div');
  bg.id = 'repeating-text-bg';
  bg.style.backgroundColor = '#1D1D1D';
  bg.style.position = 'fixed';
  bg.style.top = '0';
  bg.style.left = '0';
  bg.style.width = '100vw';
  bg.style.height = '100vh';
  bg.style.zIndex = '0th';
  bg.style.display = 'flex';
  bg.style.flexDirection = 'column';
  bg.style.justifyContent = 'center';
  bg.style.alignItems = 'center';

  const text = 'JUMP STARS COMMUNITY';
  for (let i = 0; i < Math.floor(window.innerHeight / 32); i++) {
    const line = document.createElement('div');
    line.textContent = text + '    ' + text;
    line.style.fontFamily = 'Fredoka, sans-serif';
    line.style.fontSize = '4em';
    line.style.fontWeight = '700';
    line.style.color = '#232423';
    line.style.width = '100vw';
    line.style.marginLeft = '10vw';
    bg.appendChild(line);
  }
  document.body.appendChild(bg);
}

function createProfileGrid(profiles) {
  const old = document.getElementById('fullscreen-bg-overlay');
  if (old) old.remove();
  const gridOverlay = document.createElement('div');
  gridOverlay.id = 'fullscreen-bg-overlay';
  gridOverlay.style.position = 'fixed';
  gridOverlay.style.top = '0';
  gridOverlay.style.left = '0';
  gridOverlay.style.width = '100vw';
  gridOverlay.style.height = '100vh';
  gridOverlay.style.background = 'transparent';
  gridOverlay.style.zIndex = '99999';
  gridOverlay.style.display = 'flex';
  gridOverlay.style.justifyContent = 'center';
  gridOverlay.style.alignItems = 'center';
  gridOverlay.style.overflow = 'auto';

  const grid = document.createElement('div');
  grid.style.display = 'grid';
  grid.style.gridTemplateColumns = 'repeat(6, 1fr)';
  grid.style.gap = '0px 0px';
  grid.style.rowGap = '32px';
  grid.style.padding = '8px 0px';
  grid.style.width = '100%';
  grid.style.maxWidth = '100vw';
  grid.style.boxSizing = 'border-box';
  grid.style.justifyItems = 'center';

  gridOverlay.appendChild(grid);
  document.body.appendChild(gridOverlay);
}

function showProfilePanel(profile) {
  const oldPanel = document.getElementById('profile-detail-panel');
  if (oldPanel) oldPanel.remove();
  const panel = document.createElement('div');
  panel.id = 'profile-detail-panel';
  panel.style.position = 'fixed';
  panel.style.top = '50%';
  panel.style.left = '50%';
  panel.style.transform = 'translate(-50%, -50%)';
  panel.style.background = 'rgba(34,34,34,0.98)';
  panel.style.borderRadius = '32px';
  panel.style.boxShadow = '0 8px 32px rgba(0,0,0,0.4)';
  panel.style.padding = '48px 40px 32px 40px';
  panel.style.zIndex = '100000';
  panel.style.display = 'flex';
  panel.style.flexDirection = 'column';
  panel.style.alignItems = 'center';
  panel.style.minWidth = '340px';
  panel.style.maxWidth = '90vw';

  const bg = document.getElementById('repeating-text-bg');
  if (bg) bg.style.filter = 'blur(10px)';
  const gridOverlay = document.getElementById('fullscreen-bg-overlay');
  if (gridOverlay) gridOverlay.style.filter = 'blur(10px)';

  const closeBtn = document.createElement('button');
  closeBtn.textContent = '×';
  closeBtn.title = 'Close';
  closeBtn.style.position = 'absolute';
  closeBtn.style.top = '18px';
  closeBtn.style.right = '24px';
  closeBtn.style.background = '#e74c3c';
  closeBtn.style.color = '#fff';
  closeBtn.style.border = 'none';
  closeBtn.style.borderRadius = '8px';
  closeBtn.style.fontSize = '24px';
  closeBtn.style.width = '44px';
  closeBtn.style.height = '44px';
  closeBtn.style.cursor = 'pointer';
  closeBtn.style.fontWeight = 'bold';
  closeBtn.style.zIndex = '2';
  closeBtn.onclick = () => {
    panel.remove();
    if (bg) bg.style.filter = '';
    if (gridOverlay) gridOverlay.style.filter = '';
  };
  panel.appendChild(closeBtn);

  const pfp = document.createElement('img');
  pfp.src = profile.img;
  pfp.alt = profile.name;
  pfp.style.width = '192px';
  pfp.style.height = '192px';
  pfp.style.borderRadius = '50%';
  pfp.style.objectFit = 'cover';
  pfp.style.background = '#222';
  pfp.style.marginBottom = '18px';
  panel.appendChild(pfp);

  const name = document.createElement('div');
  name.textContent = profile.name;
  name.style.fontFamily = 'Fredoka, sans-serif';
  name.style.fontSize = '2.2em';
  name.style.color = '#fff';
  name.style.marginBottom = '10px';
  name.style.textAlign = 'center';
  panel.appendChild(name);

  const desc = document.createElement('div');
  desc.textContent = profile.desc;
  desc.style.fontFamily = 'Fredoka, sans-serif';
  desc.style.fontSize = '1.2em';
  desc.style.color = '#bbb';
  desc.style.textAlign = 'center';
  desc.style.maxWidth = '420px';
  panel.appendChild(desc);

  document.body.appendChild(panel);
}

const profiles = [
  { img: 'https://cdn.discordapp.com/avatars/1126277279568367698/74d284282b825336027f80dab2a5ecf7.png?size=4096', name: 'Zeph', desc: 'i made ts so thats cool ig' },
  { img: 'https://cdn.discordapp.com/avatars/366203114962812930/630edffda445f985fcf7d6da8a9c9604.png?size=4096', name: 'Remote', desc: 'remote is probably autistic' },
  { img: 'https://images-ext-1.discordapp.net/external/iWUtqQNDZ8Y52lgEHRywV-IBQ4BNr6U484M9ZYsyNuM/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/1330709434044776493/85dcffe516eb74b5578bd25726e4ca74.png?format=webp&quality=lossless&width=239&height=239', name: 'Infuff', desc: 'Goated common chatter 💪' },
  { img: 'https://images-ext-1.discordapp.net/external/eE_2BvedHApFOCF-SkpqfkL0YjQJFKAQzZfDJAogALI/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/1385733890353660028/37f1a301001f8f6ceb857da9b522145e.png?format=webp&quality=lossless&width=248&height=248', name: '#45 Player', desc: 'ban guts' },
  { img: 'https://images-ext-1.discordapp.net/external/ywJC5PXtAAznJQiMj8T_QVM1bdTTlG4ttYXTnjvETeU/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/600579663781298176/c47f327688a7f7af77dd9185a8be74f4.png?format=webp&quality=lossless&width=810&height=810', name: 'Dr. Tempest', desc: '"the best jump stars cc"' },
  { img: 'https://images-ext-1.discordapp.net/external/wJ0SVYcCdGpVbNEupSEvoRKxXpjXJYdCUDSE4KdRhCE/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/667912422341738496/bfd2a55d4b55cb01f40e68d5453f8359.png?format=webp&quality=lossless&width=282&height=282', name: 'Qich', desc: 'Everyone is good with me' },
  { img: 'https://images-ext-1.discordapp.net/external/3o7nK356MmMqulb8uNbRG-yg20W_1Kcd7NtZhoAAcwU/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/397911610297024524/0e1eed142dfe8298d39014c7fe1ebbe6.png?format=webp&quality=lossless&width=282&height=282', name: 'FacuToilet', desc: 'buff guta' },
  { img: 'https://cdn.discordapp.com/avatars/387335054206173184/272dd49f7692df610b668b13c47d1337.png?size=4096', name: 'Zoinkys', desc: 'N/A' },
  { img: 'https://cdn.discordapp.com/avatars/594191661597327375/60f2145c98584eada12ff522e3800fea.png?size=4096', name: 'SenterSych', desc: '"im the goat"' },
  { img: 'https://cdn.discordapp.com/avatars/1119296560468066404/b9e183255ddee74ed8e5dac8b2e146a3.png?size=4096', name: 'Justin', desc: 'Never underestimate the Uchiha' },
  {img: 'https://images-ext-1.discordapp.net/external/mu2O2UUb-4XueO4y3I6MmdvuOdrs2jlUqg0MkzMWQZo/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/529669497938903051/785fa087f01174e6034aca2f4c2152b2.png?format=webp&quality=lossless&width=810&height=810', name: 'DKR', desc: 'Guts is life' },
  {img: 'https://images-ext-1.discordapp.net/external/_o_S9vh_5KGFF0fnPrFs6pbCF50b0-AvKa8ZlmV2WOc/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/1298099597268221965/78146a3983d1889bb209008e9bab5ace.png?format=webp&quality=lossless&width=563&height=563', name: 'Toe Enthusiast', desc: 'I like chicken toes' },
  {img: 'https://images-ext-1.discordapp.net/external/HrS55dJEIwC2FD6YgsLgeW4TzeWOAA7dGfb5xnP8ZMI/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/1195914102611120179/68e12f46d4cce9ade42929ef9e9409d4.png?format=webp&quality=lossless&width=223&height=223', name: 'Ball', desc: 'Look at my concepts.' },
  {img: 'https://images-ext-1.discordapp.net/external/Eb9wXrRzZASiq4OIZnVAGrDLDitxxBy8i1-YDhp6r5s/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/1322309830308007976/f4a7019e4eab272382652b283df63929.png?format=webp&quality=lossless&width=282&height=282', name: 'MeTa', desc: 'You can’t beat MeTA' },
  {img: 'https://images-ext-1.discordapp.net/external/8epQOkPyrzf2cHXQFvruSRHn60oHMHfT3Tr1t8hyxw0/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/945234689768189983/a_3bf76ed8c109e5d45360ada42e35a5e2.gif?width=953&height=953', name: 'FentDealer', desc: "My name is fentdealer I'm driving a Mercedes benz" },
  {img: 'https://images-ext-1.discordapp.net/external/eLtu-AY1mlgTp9Asr2gWUbm8tKMh0jfb4ZRWVIgZD0Q/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/1197970215326199881/ecae35402353750bf0d820c03f0fb2bc.png?format=webp&quality=lossless&width=282&height=282', name: 'Bonkey1', desc: 'cause bread tastes better than key.' },
  {img: 'https://images-ext-1.discordapp.net/external/CS_mEdm5BxDzrNMgkMATtYcDGk_N0hHpCmFJkttqbB4/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/534213395629604895/bd8f398054de66eea9d3e7b4a5d1097e.png?format=webp&quality=lossless&width=718&height=718', name: 'MonkeyEd', desc: 'ANGRY BIRDS TRANSFORMERS TOURNAMENT CHAMPION' },
  {img: 'https://images-ext-1.discordapp.net/external/qXmyF4ImLqD-_We6iPtSaXbD7XDvNSSYL6lWK7WQuW8/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/704365516130746458/dbcc7873b4a67e5540864711e0ea7430.png?format=webp&quality=lossless&width=396&height=396', name: 'i am you', desc: 'i hope you feel less motivated after reading this' },
];

// --- Config ---
let coins = 0;
let coinsPerClick = 1;
let coinsPerSecond = 0;
let multiplier = 1;
let unlockedProfiles = [];
let fasterAuto = false;

// --- Utility Functions ---
function formatCoins(num) {
  if (num < 1_000) return num.toString();
  if (num < 1_000_000) return num.toLocaleString();
  const units = [
  { value: 1e6, symbol: "M" },
  { value: 1e9, symbol: "B" },
  { value: 1e12, symbol: "T" },
  { value: 1e15, symbol: "Qa" },
  { value: 1e18, symbol: "Qi" },
  { value: 1e21, symbol: "Sx" },
  { value: 1e24, symbol: "Sp" },
  { value: 1e27, symbol: "Oc" },
  { value: 1e30, symbol: "No" },
  { value: 1e33, symbol: "Dc" },
  { value: 1e36, symbol: "Ud" },
  { value: 1e39, symbol: "Dd" },
  { value: 1e42, symbol: "Td" },
  { value: 1e45, symbol: "Qad" },
  { value: 1e48, symbol: "Qid" },
  { value: 1e51, symbol: "Sxd" },
  { value: 1e54, symbol: "Spd" },
  { value: 1e57, symbol: "Ocd" },
  { value: 1e60, symbol: "Nod" },
  { value: 1e63, symbol: "Vg" },
  { value: 1e66, symbol: "Uvg" },
  { value: 1e69, symbol: "Dvg" },
  { value: 1e72, symbol: "Tvg" },
  { value: 1e75, symbol: "Qavg" },
  { value: 1e78, symbol: "Qxvg" },
  { value: 1e81, symbol: "Sxvg" },
  { value: 1e84, symbol: "Spvg" },
  { value: 1e87, symbol: "Ocvg" },
  { value: 1e90, symbol: "Novg" },
  { value: 1e93, symbol: "Dcvg" },
  { value: 1e96, symbol: "Udvg" },
  { value: 1e99, symbol: "Ddvg" },
  { value: 1e102, symbol: "Tdvg" },
  { value: 1e105, symbol: "Qadvg" },
  { value: 1e108, symbol: "Qidvg" },
  { value: 1e111, symbol: "Sxdvg" },
  { value: 1e114, symbol: "Spdvg" },
  { value: 1e117, symbol: "Ocdvg" },
  { value: 1e120, symbol: "Nodvg" },
  { value: 1e123, symbol: "Vgvg" },
  { value: 1e126, symbol: "Uvgvg" },
  { value: 1e129, symbol: "Dvgvg" },
  { value: 1e132, symbol: "Tvgvg" },
  { value: 1e135, symbol: "Qavgvg" },
  { value: 1e138, symbol: "Qxvgvg" },
  { value: 1e141, symbol: "Sxvgvg" },
  { value: 1e144, symbol: "Spvgvg" },
  { value: 1e147, symbol: "Ocvgvg" },
  { value: 1e150, symbol: "Novgvg" },
  { value: 1e153, symbol: "Dcvgvg" },
  ];
  for (let i = 0; i < units.length; i++) {
    if (num >= units[i].value) {
      return (num / units[i].value).toFixed(2).replace(/\.00$/, '') + units[i].symbol;
    }
  }
  return num.toLocaleString();
}

// --- Particle & Sound Effects ---
function playSound(type) {
  const sounds = {
    click: 'https://cdn.pixabay.com/audio/2022/07/26/audio_124bfa4c7b.mp3',
    upgrade: 'https://cdn.pixabay.com/audio/2022/07/26/audio_124bfa4c7b.mp3',
    summon: 'https://cdn.pixabay.com/audio/2022/07/26/audio_12b6fa4c7b.mp3'
  };
  const audio = new Audio(sounds[type]);
  audio.volume = 0.2;
  audio.play();
}
function spawnParticles(x, y, color = '#FFD700') {
  for (let i = 0; i < 12; i++) {
    const p = document.createElement('div');
    p.style.position = 'fixed';
    p.style.left = x + 'px';
    p.style.top = y + 'px';
    p.style.width = '8px';
    p.style.height = '8px';
    p.style.borderRadius = '50%';
    p.style.background = color;
    p.style.pointerEvents = 'none';
    p.style.zIndex = 1000000;
    document.body.appendChild(p);
    const angle = Math.random() * 2 * Math.PI;
    const dist = 40 + Math.random() * 30;
    p.animate([
      { transform: 'translate(0,0)', opacity: 1 },
      { transform: `translate(${Math.cos(angle)*dist}px,${Math.sin(angle)*dist}px)`, opacity: 0 }
    ], { duration: 600 });
    setTimeout(() => p.remove(), 600);
  }
}

function renderSidebar(selected) {
  let sidebar = document.getElementById('sidebar');
  if (!sidebar) {
    sidebar = document.createElement('div');
    sidebar.id = 'sidebar';
    sidebar.style.position = 'fixed';
    sidebar.style.left = '0';
    sidebar.style.top = '0';
    sidebar.style.width = '180px';
    sidebar.style.height = '100vh';
    sidebar.style.background = '#18191c';
    sidebar.style.zIndex = '100001';
    sidebar.style.display = 'flex';
    sidebar.style.flexDirection = 'column';
    sidebar.style.alignItems = 'stretch';
    sidebar.style.paddingTop = '48px';
    sidebar.style.boxShadow = '2px 0 16px rgba(0,0,0,0.18)';
    document.body.appendChild(sidebar);
  }
  sidebar.innerHTML = '';
  const sections = ['Workshop','Summon', 'Index'];
  sections.forEach(section => {
    const btn = document.createElement('button');
    btn.textContent = section;
    btn.style.background = selected === section ? '#23272a' : 'transparent';
    btn.style.color = '#fff';
    btn.style.border = 'none';
    btn.style.fontFamily = 'Fredoka, sans-serif';
    btn.style.fontSize = '1.2em';
    btn.style.padding = '18px 0';
    btn.style.cursor = 'pointer';
    btn.style.width = '100%';
    btn.style.transition = 'background 0.2s';
    btn.onmouseenter = () => btn.style.background = '#111317';
    btn.onmouseleave = () => btn.style.background = selected === section ? '#23272a' : 'transparent';
    btn.onclick = () => {
      renderSidebar(section);
      renderSection(section);
      renderShopSidebar(section);
    };
    sidebar.appendChild(btn);
  });

  const coinDiv = document.createElement('div');
  coinDiv.textContent = `Coins: $${formatCoins(coins)}`;
  coinDiv.style.color = '#FFD700';
  coinDiv.style.fontFamily = 'Fredoka, sans-serif';
  coinDiv.style.fontWeight = 'bold';
  coinDiv.style.fontSize = '1.1em';
  coinDiv.style.marginTop = '35px';
  coinDiv.style.marginBottom = '35px';
  coinDiv.style.textAlign = 'center';
  sidebar.appendChild(coinDiv);
}


let shopPage = 0;
const shopPages = ['Permanent', 'Upgrades', 'Boosts'];

let purchasedUpgrades = {
  "Golden Cursor": false,
  "Mega Magnet": false,
  "Faster Auto": false
};
let autoClickerLevel = 0;
let autoClickerCost = 50;
let doubleClickLevel = 0;
let doubleClickCost = 150;
let tripleClickLevel = 0;
let tripleClickCost = 1000;

function getAutoClickerGain(level) {
  if (level < 10) return 10;
  if (level < 20) return 1000;
  if (level < 30) return 100000;
  if (level < 40) return 10000000;
  return 1000000000;
}

function renderShopSidebar(section) {
  let shop = document.getElementById('shop-sidebar');
  if (!shop) {
    shop = document.createElement('div');
    shop.id = 'shop-sidebar';
    shop.style.position = 'fixed';
    shop.style.right = '0';
    shop.style.top = '0';
    shop.style.width = '320px';
    shop.style.height = '100vh';
    shop.style.background = '#18191c';
    shop.style.zIndex = '100001';
    shop.style.display = 'flex';
    shop.style.flexDirection = 'column';
    shop.style.alignItems = 'stretch';
    shop.style.paddingTop = '48px';
    shop.style.boxShadow = '-2px 0 16px rgba(0,0,0,0.18)';
    shop.style.overflowY = 'auto';
    document.body.appendChild(shop);
  }
  shop.innerHTML = '';
  if (section !== 'Workshop') {
    shop.style.display = 'none';
    return;
  }
  shop.style.display = 'flex';

  const pageSelector = document.createElement('div');
  pageSelector.style.display = 'flex';
  pageSelector.style.alignItems = 'center';
  pageSelector.style.justifyContent = 'center';
  pageSelector.style.margin = '0 0 18px 0';

  const leftArrow = document.createElement('button');
  leftArrow.textContent = '←';
  leftArrow.style.background = 'none';
  leftArrow.style.border = 'none';
  leftArrow.style.color = '#01AEFD';
  leftArrow.style.fontSize = '1.5em';
  leftArrow.style.cursor = 'pointer';
  leftArrow.style.marginRight = '12px';
  leftArrow.onmouseenter = () => leftArrow.style.background = '#0a2236';
  leftArrow.onmouseleave = () => leftArrow.style.background = 'none';
  leftArrow.onclick = () => {
    shopPage = (shopPage + shopPages.length - 1) % shopPages.length;
    renderShopSidebar('Workshop');
  };

  const rightArrow = document.createElement('button');
  rightArrow.textContent = '→';
  rightArrow.style.background = 'none';
  rightArrow.style.border = 'none';
  rightArrow.style.color = '#01AEFD';
  rightArrow.style.fontSize = '1.5em';
  rightArrow.style.cursor = 'pointer';
  rightArrow.style.marginLeft = '12px';
  rightArrow.onmouseenter = () => rightArrow.style.background = '#0a2236';
  rightArrow.onmouseleave = () => rightArrow.style.background = 'none';
  rightArrow.onclick = () => {
    shopPage = (shopPage + 1) % shopPages.length;
    renderShopSidebar('Workshop');
  };

  const pageTitle = document.createElement('span');
  pageTitle.textContent = shopPages[shopPage];
  pageTitle.style.fontFamily = 'Fredoka, sans-serif';
  pageTitle.style.fontWeight = 'bold';
  pageTitle.style.fontSize = '1.2em';
  pageTitle.style.color = '#01AEFD';

  pageSelector.appendChild(leftArrow);
  pageSelector.appendChild(pageTitle);
  pageSelector.appendChild(rightArrow);
  shop.appendChild(pageSelector);

  if (shopPages[shopPage] === 'Permanent') {
    const autoClickerCard = document.createElement('div');
    autoClickerCard.style.background = '#23272a';
    autoClickerCard.style.borderRadius = '14px';
    autoClickerCard.style.margin = '16px 18px 0 18px';
    autoClickerCard.style.padding = '18px 16px';
    autoClickerCard.style.display = 'flex';
    autoClickerCard.style.flexDirection = 'column';
    autoClickerCard.style.alignItems = 'flex-start';
    autoClickerCard.style.boxShadow = '0 2px 8px rgba(0,0,0,0.18)';
    autoClickerCard.style.fontFamily = 'Fredoka, sans-serif';

    const autoName = document.createElement('div');
    autoName.textContent = `Auto Clicker (Level ${autoClickerLevel})`;
    autoName.style.fontWeight = 'bold';
    autoName.style.fontSize = '1.1em';
    autoName.style.color = '#01AEFD';
    autoClickerCard.appendChild(autoName);

    const autoDesc = document.createElement('div');
    autoDesc.textContent = `Gain ${formatCoins(getAutoClickerGain(autoClickerLevel))} coins per second.`;
    autoDesc.style.fontSize = '0.98em';
    autoDesc.style.color = '#bbb';
    autoDesc.style.margin = '6px 0 12px 0';
    autoClickerCard.appendChild(autoDesc);

    const autoBtn = document.createElement('button');
    autoBtn.textContent = `Buy ($${formatCoins(autoClickerCost)})`;
    autoBtn.style.background = '#01AEFD';
    autoBtn.style.color = '#fff';
    autoBtn.style.border = 'none';
    autoBtn.style.borderRadius = '8px';
    autoBtn.style.padding = '8px 18px';
    autoBtn.style.fontFamily = 'Fredoka, sans-serif';
    autoBtn.style.fontSize = '1em';
    autoBtn.style.cursor = coins >= autoClickerCost ? 'pointer' : 'not-allowed';
    autoBtn.style.transition = 'background 0.2s';
    autoBtn.onmouseenter = () => autoBtn.style.background = '#0170b6';
    autoBtn.onmouseleave = () => autoBtn.style.background = '#01AEFD';
    autoBtn.onclick = (e) => {
      if (coins >= autoClickerCost) {
        coins -= autoClickerCost;
        autoClickerLevel++;
        coinsPerSecond += getAutoClickerGain(autoClickerLevel - 1);
        autoClickerCost = Math.round(autoClickerCost * 1.7);
        playSound('upgrade');
        spawnParticles(e.clientX, e.clientY, '#01AEFD');
        updateWorkshopUI();
        renderSidebar('Workshop');
        renderShopSidebar('Workshop');
        startAutoCoins();
      }
    };
    autoBtn.oncontextmenu = (e) => {
      e.preventDefault();
      let bought = 0;
      while (coins >= autoClickerCost) {
        coins -= autoClickerCost;
        autoClickerLevel++;
        coinsPerSecond += getAutoClickerGain(autoClickerLevel - 1);
        autoClickerCost = Math.round(autoClickerCost * 1.7);
        bought++;
      }
      if (bought > 0) {
        playSound('upgrade');
        spawnParticles(e.clientX, e.clientY, '#01AEFD');
        updateWorkshopUI();
        renderSidebar('Workshop');
        renderShopSidebar('Workshop');
        startAutoCoins();
      }
    };
    autoClickerCard.appendChild(autoBtn);
    shop.appendChild(autoClickerCard);

    const doubleClickCard = document.createElement('div');
    doubleClickCard.style.background = '#23272a';
    doubleClickCard.style.borderRadius = '14px';
    doubleClickCard.style.margin = '16px 18px 0 18px';
    doubleClickCard.style.padding = '18px 16px';
    doubleClickCard.style.display = 'flex';
    doubleClickCard.style.flexDirection = 'column';
    doubleClickCard.style.alignItems = 'flex-start';
    doubleClickCard.style.boxShadow = '0 2px 8px rgba(0,0,0,0.18)';
    doubleClickCard.style.fontFamily = 'Fredoka, sans-serif';

    const doubleName = document.createElement('div');
    doubleName.textContent = `Double Click Power (Level ${doubleClickLevel})`;
    doubleName.style.fontWeight = 'bold';
    doubleName.style.fontSize = '1.1em';
    doubleName.style.color = '#01AEFD';
    doubleClickCard.appendChild(doubleName);

    const doubleDesc = document.createElement('div');
    doubleDesc.textContent = `Doubles coins per click.`;
    doubleDesc.style.fontSize = '0.98em';
    doubleDesc.style.color = '#bbb';
    doubleDesc.style.margin = '6px 0 12px 0';
    doubleClickCard.appendChild(doubleDesc);

    const doubleBtn = document.createElement('button');
    doubleBtn.textContent = `Buy ($${formatCoins(doubleClickCost)})`;
    doubleBtn.style.background = '#01AEFD';
    doubleBtn.style.color = '#fff';
    doubleBtn.style.border = 'none';
    doubleBtn.style.borderRadius = '8px';
    doubleBtn.style.padding = '8px 18px';
    doubleBtn.style.fontFamily = 'Fredoka, sans-serif';
    doubleBtn.style.fontSize = '1em';
    doubleBtn.style.cursor = coins >= doubleClickCost ? 'pointer' : 'not-allowed';
    doubleBtn.style.transition = 'background 0.2s';
    doubleBtn.onmouseenter = () => doubleBtn.style.background = '#0170b6';
    doubleBtn.onmouseleave = () => doubleBtn.style.background = '#01AEFD';
    doubleBtn.onclick = (e) => {
      if (coins >= doubleClickCost) {
        coins -= doubleClickCost;
        doubleClickLevel++;
        coinsPerClick *= 2;
        multiplier = coinsPerClick;
        doubleClickCost = Math.round(doubleClickCost * 2.5);
        playSound('upgrade');
        spawnParticles(e.clientX, e.clientY, '#01AEFD');
        updateWorkshopUI();
        renderSidebar('Workshop');
        renderShopSidebar('Workshop');
      }
    };
    doubleBtn.oncontextmenu = (e) => {
      e.preventDefault();
      let bought = 0;
      while (coins >= doubleClickCost) {
        coins -= doubleClickCost;
        doubleClickLevel++;
        coinsPerClick *= 2;
        multiplier = coinsPerClick;
        doubleClickCost = Math.round(doubleClickCost * 2);
        bought++;
      }
      if (bought > 0) {
        playSound('upgrade');
        spawnParticles(e.clientX, e.clientY, '#01AEFD');
        updateWorkshopUI();
        renderSidebar('Workshop');
        renderShopSidebar('Workshop');
      }
    };
    doubleClickCard.appendChild(doubleBtn);
    shop.appendChild(doubleClickCard);

    const tripleClickCard = document.createElement('div');
    tripleClickCard.style.background = '#23272a';
    tripleClickCard.style.borderRadius = '14px';
    tripleClickCard.style.margin = '16px 18px 0 18px';
    tripleClickCard.style.padding = '18px 16px';
    tripleClickCard.style.display = 'flex';
    tripleClickCard.style.flexDirection = 'column';
    tripleClickCard.style.alignItems = 'flex-start';
    tripleClickCard.style.boxShadow = '0 2px 8px rgba(0,0,0,0.18)';
    tripleClickCard.style.fontFamily = 'Fredoka, sans-serif';

    const tripleName = document.createElement('div');
    tripleName.textContent = `Triple Click Power (Level ${tripleClickLevel})`;
    tripleName.style.fontWeight = 'bold';
    tripleName.style.fontSize = '1.1em';
    tripleName.style.color = '#01AEFD';
    tripleClickCard.appendChild(tripleName);

    const tripleDesc = document.createElement('div');
    tripleDesc.textContent = `Increase coins per click by 3x.`;
    tripleDesc.style.fontSize = '0.98em';
    tripleDesc.style.color = '#bbb';
    tripleDesc.style.margin = '6px 0 12px 0';
    tripleClickCard.appendChild(tripleDesc);

    const tripleBtn = document.createElement('button');
    tripleBtn.textContent = `Buy ($${formatCoins(tripleClickCost)})`;
    tripleBtn.style.background = '#01AEFD';
    tripleBtn.style.color = '#fff';
    tripleBtn.style.border = 'none';
    tripleBtn.style.borderRadius = '8px';
    tripleBtn.style.padding = '8px 18px';
    tripleBtn.style.fontFamily = 'Fredoka, sans-serif';
    tripleBtn.style.fontSize = '1em';
    tripleBtn.style.cursor = coins >= tripleClickCost ? 'pointer' : 'not-allowed';
    tripleBtn.style.transition = 'background 0.2s';
    tripleBtn.onmouseenter = () => tripleBtn.style.background = '#0170b6';
    tripleBtn.onmouseleave = () => tripleBtn.style.background = '#01AEFD';
    tripleBtn.onclick = (e) => {
      if (coins >= tripleClickCost) {
        coins -= tripleClickCost;
        tripleClickLevel++;
        coinsPerClick = Math.round(coinsPerClick * 3);
        multiplier = coinsPerClick;
        tripleClickCost = Math.round(tripleClickCost * 2.5);
        playSound('upgrade');
        spawnParticles(e.clientX, e.clientY, '#01AEFD');
        updateWorkshopUI();
        renderSidebar('Workshop');
        renderShopSidebar('Workshop');
      }
    };
    tripleBtn.oncontextmenu = (e) => {
      e.preventDefault();
      let bought = 0;
      while (coins >= tripleClickCost) {
        coins -= tripleClickCost;
        tripleClickLevel++;
        coinsPerClick = Math.round(coinsPerClick * 3);
        multiplier = coinsPerClick;
        tripleClickCost = Math.round(tripleClickCost * 2.5);
        bought++;
      }
      if (bought > 0) {
        playSound('upgrade');
        spawnParticles(e.clientX, e.clientY, '#01AEFD');
        updateWorkshopUI();
        renderSidebar('Workshop');
        renderShopSidebar('Workshop');
      }
    };
    tripleClickCard.appendChild(tripleBtn);
    shop.appendChild(tripleClickCard);

  } else if (shopPages[shopPage] === 'Upgrades') {
    if (!purchasedUpgrades["Golden Cursor"]) {
      const goldenCard = document.createElement('div');
      goldenCard.style.background = '#23272a';
      goldenCard.style.borderRadius = '14px';
      goldenCard.style.margin = '16px 18px 0 18px';
      goldenCard.style.padding = '18px 16px';
      goldenCard.style.display = 'flex';
      goldenCard.style.flexDirection = 'column';
      goldenCard.style.alignItems = 'flex-start';
      goldenCard.style.boxShadow = '0 2px 8px rgba(0,0,0,0.18)';
      goldenCard.style.fontFamily = 'Fredoka, sans-serif';

      const name = document.createElement('div');
      name.textContent = "Golden Cursor";
      name.style.fontWeight = 'bold';
      name.style.fontSize = '1.1em';
      name.style.color = '#01AEFD';
      goldenCard.appendChild(name);

      const desc = document.createElement('div');
      desc.textContent = "Boosts click coins by 10%.";
      desc.style.fontSize = '0.98em';
      desc.style.color = '#bbb';
      desc.style.margin = '6px 0 12px 0';
      goldenCard.appendChild(desc);

      const btn = document.createElement('button');
      btn.textContent = `Buy ($1,000)`;
      btn.style.background = '#01AEFD';
      btn.style.color = '#fff';
      btn.style.border = 'none';
      btn.style.borderRadius = '8px';
      btn.style.padding = '8px 18px';
      btn.style.fontFamily = 'Fredoka, sans-serif';
      btn.style.fontSize = '1em';
      btn.style.cursor = coins >= 1000 ? 'pointer' : 'not-allowed';
      btn.style.transition = 'background 0.2s';
      btn.onmouseenter = () => btn.style.background = '#0170b6';
      btn.onmouseleave = () => btn.style.background = '#01AEFD';
      btn.onclick = (e) => {
        if (coins >= 1000) {
          coins -= 1000;
          coinsPerClick = Math.round(coinsPerClick * 1.1);
          multiplier = coinsPerClick;
          purchasedUpgrades["Golden Cursor"] = true;
          playSound('upgrade');
          spawnParticles(e.clientX, e.clientY, '#01AEFD');
          updateWorkshopUI();
          renderSidebar('Workshop');
          renderShopSidebar('Workshop');
        }
      };
      goldenCard.appendChild(btn);
      shop.appendChild(goldenCard);
    }

    if (!purchasedUpgrades["Mega Magnet"]) {
      const magnetCard = document.createElement('div');
      magnetCard.style.background = '#23272a';
      magnetCard.style.borderRadius = '14px';
      magnetCard.style.margin = '16px 18px 0 18px';
      magnetCard.style.padding = '18px 16px';
      magnetCard.style.display = 'flex';
      magnetCard.style.flexDirection = 'column';
      magnetCard.style.alignItems = 'flex-start';
      magnetCard.style.boxShadow = '0 2px 8px rgba(0,0,0,0.18)';
      magnetCard.style.fontFamily = 'Fredoka, sans-serif';

      const name = document.createElement('div');
      name.textContent = "Mega Magnet";
      name.style.fontWeight = 'bold';
      name.style.fontSize = '1.1em';
      name.style.color = '#01AEFD';
      magnetCard.appendChild(name);

      const desc = document.createElement('div');
      desc.textContent = "Boosts coins per second by 10%.";
      desc.style.fontSize = '0.98em';
      desc.style.color = '#bbb';
      desc.style.margin = '6px 0 12px 0';
      magnetCard.appendChild(desc);

      const btn = document.createElement('button');
      btn.textContent = `Buy ($2,000)`;
      btn.style.background = '#01AEFD';
      btn.style.color = '#fff';
      btn.style.border = 'none';
      btn.style.borderRadius = '8px';
      btn.style.padding = '8px 18px';
      btn.style.fontFamily = 'Fredoka, sans-serif';
      btn.style.fontSize = '1em';
      btn.style.cursor = coins >= 2000 ? 'pointer' : 'not-allowed';
      btn.style.transition = 'background 0.2s';
      btn.onmouseenter = () => btn.style.background = '#0170b6';
      btn.onmouseleave = () => btn.style.background = '#01AEFD';
      btn.onclick = (e) => {
        if (coins >= 2000) {
          coins -= 2000;
          coinsPerSecond = Math.round(coinsPerSecond * 1.1);
          purchasedUpgrades["Mega Magnet"] = true;
          playSound('upgrade');
          spawnParticles(e.clientX, e.clientY, '#01AEFD');
          updateWorkshopUI();
          renderSidebar('Workshop');
          renderShopSidebar('Workshop');
        }
      };
      magnetCard.appendChild(btn);
      shop.appendChild(magnetCard);
    }

    if (!purchasedUpgrades["Faster Auto"]) {
      const fasterCard = document.createElement('div');
      fasterCard.style.background = '#23272a';
      fasterCard.style.borderRadius = '14px';
      fasterCard.style.margin = '16px 18px 0 18px';
      fasterCard.style.padding = '18px 16px';
      fasterCard.style.display = 'flex';
      fasterCard.style.flexDirection = 'column';
      fasterCard.style.alignItems = 'flex-start';
      fasterCard.style.boxShadow = '0 2px 8px rgba(0,0,0,0.18)';
      fasterCard.style.fontFamily = 'Fredoka, sans-serif';

      const name = document.createElement('div');
      name.textContent = "Faster Auto";
      name.style.fontWeight = 'bold';
      name.style.fontSize = '1.1em';
      name.style.color = '#01AEFD';
      fasterCard.appendChild(name);

      const desc = document.createElement('div');
      desc.textContent = "Auto coins every second instead of two. One-time.";
      desc.style.fontSize = '0.98em';
      desc.style.color = '#bbb';
      desc.style.margin = '6px 0 12px 0';
      fasterCard.appendChild(desc);

      const btn = document.createElement('button');
      btn.textContent = `Buy ($500)`;
      btn.style.background = '#01AEFD';
      btn.style.color = '#fff';
      btn.style.border = 'none';
      btn.style.borderRadius = '8px';
      btn.style.padding = '8px 18px';
      btn.style.fontFamily = 'Fredoka, sans-serif';
      btn.style.fontSize = '1em';
      btn.style.cursor = coins >= 500 ? 'pointer' : 'not-allowed';
      btn.style.transition = 'background 0.2s';
      btn.onmouseenter = () => btn.style.background = '#0170b6';
      btn.onmouseleave = () => btn.style.background = '#01AEFD';
      btn.onclick = (e) => {
        if (coins >= 500) {
          coins -= 500;
          purchasedUpgrades["Faster Auto"] = true;
          fasterAuto = true;
          playSound('upgrade');
          spawnParticles(e.clientX, e.clientY, '#01AEFD');
          updateWorkshopUI();
          renderSidebar('Workshop');
          renderShopSidebar('Workshop');
          startAutoCoins();
        }
      };
      fasterCard.appendChild(btn);
      shop.appendChild(fasterCard);
    }
  } else if (shopPages[shopPage] === 'Boosts') {
    const empty = document.createElement('div');
    empty.textContent = 'No boosts available yet!';
    empty.style.color = '#bbb';
    empty.style.fontFamily = 'Fredoka, sans-serif';
    empty.style.fontSize = '1.1em';
    empty.style.margin = '32px 0 0 0';
    empty.style.textAlign = 'center';
    shop.appendChild(empty);
  }
}

// --- Main Section ---

function renderSection(section) {
  let main = document.getElementById('main-section');
  if (!main) {
    main = document.createElement('div');
    main.id = 'main-section';
    main.style.position = 'fixed';
    main.style.left = '180px';
    main.style.top = '0';
    main.style.width = 'calc(100vw - 180px - 260px)';
    main.style.height = '100vh';
    main.style.background = 'transparent';
    main.style.zIndex = '100000';
    main.style.overflow = 'auto';
    document.body.appendChild(main);
  }
  main.innerHTML = '';
  if (section === 'Workshop') {
    main.style.overflow = 'hidden';
    const workshopDiv = document.createElement('div');
    workshopDiv.style.display = 'flex';
    workshopDiv.style.flexDirection = 'column';
    workshopDiv.style.alignItems = 'center';
    workshopDiv.style.justifyContent = 'center';
    workshopDiv.style.height = '100vh';
    workshopDiv.style.fontFamily = 'Fredoka, sans-serif';
    workshopDiv.style.color = '#fff';
    workshopDiv.style.fontSize = '1.5em';
    workshopDiv.style.paddingTop = '80px';

    const coinsDiv = document.createElement('div');
    coinsDiv.id = 'coins-display';
    coinsDiv.textContent = `Coins: $${formatCoins(coins)}`;
    coinsDiv.style.color = '#FFD700';
    coinsDiv.style.fontFamily = 'Fredoka, sans-serif';
    coinsDiv.style.fontWeight = 'bold';
    coinsDiv.style.fontSize = '2em';
    coinsDiv.style.marginBottom = '8px';
    coinsDiv.style.textAlign = 'center';
    workshopDiv.appendChild(coinsDiv);

    const multDiv = document.createElement('div');
    multDiv.id = 'multiplier-display';
    multDiv.textContent = `Per Click: +${formatCoins(multiplier)}`;
    multDiv.style.color = '#ff3b3b';
    multDiv.style.fontFamily = 'Fredoka, sans-serif';
    multDiv.style.fontSize = '1.1em';
    multDiv.style.marginBottom = '8px';
    multDiv.style.textAlign = 'center';
    workshopDiv.appendChild(multDiv);

    const cpsDiv = document.createElement('div');
    cpsDiv.id = 'cps-display';
    cpsDiv.textContent = `Coins per Second: ${formatCoins(coinsPerSecond)}`;
    cpsDiv.style.color = '#01AEFD';
    cpsDiv.style.fontFamily = 'Fredoka, sans-serif';
    cpsDiv.style.fontSize = '1.1em';
    cpsDiv.style.marginBottom = '24px';
    cpsDiv.style.textAlign = 'center';
    workshopDiv.appendChild(cpsDiv);

    const clickBtn = document.createElement('button');
    clickBtn.textContent = `Click (+${formatCoins(multiplier)})`;
    clickBtn.style.fontSize = '1.3em';
    clickBtn.style.fontFamily = 'Fredoka, sans-serif';
    clickBtn.style.padding = '18px 48px';
    clickBtn.style.background = '#01AEFD';
    clickBtn.style.color = '#fff';
    clickBtn.style.border = 'none';
    clickBtn.style.borderRadius = '16px';
    clickBtn.style.cursor = 'pointer';
    clickBtn.style.marginBottom = '32px';
    clickBtn.style.transition = 'background 0.2s';
    clickBtn.onmouseenter = () => clickBtn.style.background = '#0170b6';
    clickBtn.onmouseleave = () => clickBtn.style.background = '#01AEFD';
    clickBtn.onclick = (e) => {
      coins += multiplier;
      playSound('click');
      spawnParticles(e.clientX, e.clientY, '#FFD700');
      updateWorkshopUI();
      renderSidebar('Workshop');
      renderShopSidebar('Workshop');
    };
    workshopDiv.appendChild(clickBtn);

    main.appendChild(workshopDiv);
  }
  else if (section === 'Index') {
    main.style.overflow = 'auto';
    const grid = document.createElement('div');
    grid.style.display = 'grid';
    grid.style.gridTemplateColumns = 'repeat(6, 1fr)';
    grid.style.gap = '0px 0px';
    grid.style.rowGap = '32px';
    grid.style.padding = '48px 0 0 0';
    grid.style.width = '100%';
    grid.style.maxWidth = '100vw';
    grid.style.boxSizing = 'border-box';
    grid.style.justifyItems = 'center';
    profiles.forEach((profile, idx) => {
      const cell = document.createElement('div');
      cell.style.display = 'flex';
      cell.style.flexDirection = 'column';
      cell.style.alignItems = 'center';
      cell.style.justifyContent = 'center';
      cell.style.margin = '0';
      cell.style.width = '90px';
      cell.style.minWidth = '90px';
      cell.style.boxSizing = 'border-box';
      const pfp = document.createElement('img');
      pfp.src = profile.img;
      pfp.alt = profile.name;
      pfp.style.width = '160px';
      pfp.style.height = '160px';
      pfp.style.borderRadius = '50%';
      pfp.style.objectFit = 'cover';
      pfp.style.boxShadow = '0 2px 8px rgba(0,0,0,0.18)';
      pfp.style.transition = 'box-shadow 0.2s, border 0.2s, filter 0.2s';
      pfp.style.cursor = unlockedProfiles.includes(idx) ? 'pointer' : 'not-allowed';
      pfp.style.background = '#222';
      pfp.style.filter = unlockedProfiles.includes(idx) ? '' : 'grayscale(1) brightness(0.5)';
      pfp.onclick = () => {
        if (unlockedProfiles.includes(idx)) showProfilePanel(profile);
      };
      cell.appendChild(pfp);
      const name = document.createElement('div');
      name.textContent = profile.name;
      name.style.fontFamily = 'Fredoka, sans-serif';
      name.style.fontSize = '1em';
      name.style.color = unlockedProfiles.includes(idx) ? '#fff' : '#888';
      name.style.marginTop = '10px';
      name.style.textAlign = 'center';
      cell.appendChild(name);
      grid.appendChild(cell);
    });
    main.appendChild(grid);
  } else if (section === 'Summon') {
    main.style.overflow = 'hidden';
    const summonDiv = document.createElement('div');
    summonDiv.style.display = 'flex';
    summonDiv.style.flexDirection = 'column';
    summonDiv.style.alignItems = 'center';
    summonDiv.style.justifyContent = 'center';
    summonDiv.style.height = '100vh';
    summonDiv.style.fontFamily = 'Fredoka, sans-serif';
    summonDiv.style.color = '#fff';
    summonDiv.style.fontSize = '1.5em';
    summonDiv.style.paddingTop = '80px';
    const title = document.createElement('div');
    title.textContent = 'Summon People';
    title.style.marginBottom = '32px';
    summonDiv.appendChild(title);

    const btnRow = document.createElement('div');
    btnRow.style.display = 'flex';
    btnRow.style.gap = '32px';

    const errorMsg = document.createElement('div');
    errorMsg.style.color = '#ff3b3b';
    errorMsg.style.fontFamily = 'Fredoka, sans-serif';
    errorMsg.style.fontSize = '1.1em';
    errorMsg.style.marginTop = '32px';
    errorMsg.style.opacity = '0';
    errorMsg.style.transition = 'opacity 0.3s';

    function showError(msg) {
      errorMsg.textContent = msg;
      errorMsg.style.opacity = '1';
      setTimeout(() => {
        errorMsg.style.opacity = '0';
      }, 1000);
    }

    function summon(times) {
      let cost = times === 1 ? 500 : 4000;
      if (coins < cost) {
        showError('Not enough coins');
        return;
      }
      coins -= cost;
      let results = [];
      for (let i = 0; i < times; i++) {
        let idx = Math.floor(Math.random() * profiles.length);
        if (!unlockedProfiles.includes(idx)) {
          unlockedProfiles.push(idx);
          results.push({ ...profiles[idx], duplicate: false });
        } else {
          coins += 250;
          results.push({ ...profiles[idx], duplicate: true });
        }
      }
      renderSidebar('Summon');
      renderSection('Summon');
      showSummonResults(results);
    }

    const summon1 = document.createElement('button');
    summon1.textContent = 'Summon 1x (500 coins)';
    summon1.style.fontSize = '1.1em';
    summon1.style.fontFamily = 'Fredoka, sans-serif';
    summon1.style.padding = '12px 32px';
    summon1.style.background = '#01AEFD';
    summon1.style.color = '#fff';
    summon1.style.border = 'none';
    summon1.style.borderRadius = '12px';
    summon1.style.cursor = 'pointer';
    summon1.onclick = () => summon(1);

    const summon10 = document.createElement('button');
    summon10.textContent = 'Summon 10x (4000 coins)';
    summon10.style.fontSize = '1.1em'; 
    summon10.style.fontFamily = 'Fredoka, sans-serif';
    summon10.style.padding = '12px 32px';
    summon10.style.background = '#015AFD';
    summon10.style.color = '#fff';
    summon10.style.border = 'none';
    summon10.style.borderRadius = '12px';
    summon10.style.cursor = 'pointer';
    summon10.onclick = () => summon(10);

    btnRow.appendChild(summon1);
    btnRow.appendChild(summon10);
    summonDiv.appendChild(btnRow);
    summonDiv.appendChild(errorMsg);

    main.appendChild(summonDiv);
  }
}

// --- UI Helper ---
function updateWorkshopUI() {
  const coinsDiv = document.getElementById('coins-display');
  if (coinsDiv) coinsDiv.textContent = `Coins: $${formatCoins(coins)}`;
  const multDiv = document.getElementById('multiplier-display');
  if (multDiv) multDiv.textContent = `Per Click: +${formatCoins(multiplier)}`;
  const cpsDiv = document.getElementById('cps-display');
  if (cpsDiv) cpsDiv.textContent = `Coins per Second: ${formatCoins(coinsPerSecond)}`;
}

// --- Auto Coin Gain ---
let autoInterval = null;
function startAutoCoins() {
  if (autoInterval) clearInterval(autoInterval);
  autoInterval = setInterval(() => {
    if (coinsPerSecond > 0) {
      coins += coinsPerSecond;
      updateWorkshopUI();
      renderSidebar('Workshop');
      renderShopSidebar('Workshop');
    }
  }, fasterAuto ? 1000 : 2000);
}
startAutoCoins();

setInterval(() => {
  if (fasterAuto && autoInterval && autoInterval._idleTimeout !== 1000) startAutoCoins();
}, 500);

createRepeatingTextBackground();
renderSidebar('Workshop');
renderSection('Workshop');
renderShopSidebar('Workshop');

function showSummonResults(results) {
  const overlay = document.createElement('div');
  overlay.style.position = 'fixed';
  overlay.style.top = '0';
  overlay.style.left = '0';
  overlay.style.width = '100vw';
  overlay.style.height = '100vh';
  overlay.style.background = 'rgba(0,0,0,0.7)';
  overlay.style.zIndex = '100010';
  overlay.style.display = 'flex';
  overlay.style.justifyContent = 'center';
  overlay.style.alignItems = 'center';

  const resultBox = document.createElement('div');
  resultBox.style.background = '#232323';
  resultBox.style.borderRadius = '18px';
  resultBox.style.padding = '36px 32px 28px 32px';
  resultBox.style.display = 'flex';
  resultBox.style.flexDirection = 'column';
  resultBox.style.alignItems = 'center';
  resultBox.style.boxShadow = '0 8px 32px rgba(0,0,0,0.4)';
  resultBox.style.fontFamily = 'Fredoka, sans-serif';

  const title = document.createElement('div');
  title.textContent = 'Summon Results';
  title.style.fontSize = '1.5em';
  title.style.color = '#01AEFD';
  title.style.marginBottom = '18px';
  resultBox.appendChild(title);

  const grid = document.createElement('div');
  grid.style.display = 'flex';
  grid.style.gap = '24px';
  results.forEach(res => {
    const cell = document.createElement('div');
    cell.style.display = 'flex';
    cell.style.flexDirection = 'column';
    cell.style.alignItems = 'center';
    cell.style.margin = '0';
    cell.style.width = '90px';
    cell.style.minWidth = '90px';
    cell.style.boxSizing = 'border-box';
    const pfp = document.createElement('img');
    pfp.src = res.img;
    pfp.alt = res.name;
    pfp.style.width = '100px';
    pfp.style.height = '100px';
    pfp.style.borderRadius = '50%';
    pfp.style.objectFit = 'cover';
    pfp.style.background = '#222';
    pfp.style.marginBottom = '8px';
    cell.appendChild(pfp);
    const name = document.createElement('div');
    name.textContent = res.name;
    name.style.fontFamily = 'Fredoka, sans-serif';
    name.style.fontSize = '1em';
    name.style.color = '#fff';
    name.style.textAlign = 'center';
    cell.appendChild(name);
    if (res.duplicate) {
      const dup = document.createElement('div');
      dup.textContent = '+250 coins (duplicate)';
      dup.style.color = '#01AEFD';
      dup.style.fontSize = '0.9em';
      cell.appendChild(dup);
    }
    grid.appendChild(cell);
  });
  resultBox.appendChild(grid);

  const closeBtn = document.createElement('button');
  closeBtn.textContent = 'Close';
  closeBtn.style.marginTop = '24px';
  closeBtn.style.fontSize = '1.1em';
  closeBtn.style.padding = '10px 28px';
  closeBtn.style.background = '#01AEFD';
  closeBtn.style.color = '#fff';
  closeBtn.style.border = 'none';
  closeBtn.style.borderRadius = '8px';
  closeBtn.style.cursor = 'pointer';
  closeBtn.onclick = () => overlay.remove();
  resultBox.appendChild(closeBtn);

  overlay.appendChild(resultBox);
  document.body.appendChild(overlay);
}

createRepeatingTextBackground();
renderSidebar('Workshop');
renderSection('Workshop');
