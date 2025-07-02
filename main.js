document.title = 'Jump Stars Community';

function createRepeatingTextBackground() {

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

  const text = 'JUMP STARS COMMUNITY FAME';
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

  const boostsDiv = document.createElement('div');
  boostsDiv.style.display = 'flex';
  boostsDiv.style.justifyContent = 'center';
  boostsDiv.style.gap = '18px';
  boostsDiv.style.marginTop = '12px';

  if (profile.buffs && profile.buffs.money && profile.buffs.money > 1) {
    const moneyBoost = document.createElement('div');
    moneyBoost.textContent = `Money Boost: x${profile.buffs.money}`;
    moneyBoost.style.color = '#4eff4e';
    moneyBoost.style.fontWeight = 'bold';
    moneyBoost.style.fontFamily = 'Fredoka, sans-serif';
    boostsDiv.appendChild(moneyBoost);
  }

  if (profile.buffs && profile.buffs.luck && profile.buffs.luck > 1) {
    const luckBoost = document.createElement('div');
    luckBoost.textContent = `Luck Boost: x${profile.buffs.luck}`;
    luckBoost.style.color = '#ff4e4e';
    luckBoost.style.fontFamily = 'Fredoka, sans-serif';
    luckBoost.style.fontWeight = 'bold';
    boostsDiv.appendChild(luckBoost);
  }

  if (boostsDiv.children.length > 0) {
    panel.appendChild(boostsDiv);
  }

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
  {img: 'https://images-ext-1.discordapp.net/external/_o_S9vh_5KGFF0fnPrFs6pbCF50b0-AvKa8ZlmV2WOc/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/1298099597268221965/78146a3983d1889bb209008e9bab5ace.png?format=webp&quality=lossless&width=563&height=563', name: 'Chicken Toe Enthusiast', desc: 'I like chicken toes' },
  {img: 'https://images-ext-1.discordapp.net/external/HrS55dJEIwC2FD6YgsLgeW4TzeWOAA7dGfb5xnP8ZMI/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/1195914102611120179/68e12f46d4cce9ade42929ef9e9409d4.png?format=webp&quality=lossless&width=223&height=223', name: 'Ball', desc: 'Look at my concepts.' },
  {img: 'https://images-ext-1.discordapp.net/external/Eb9wXrRzZASiq4OIZnVAGrDLDitxxBy8i1-YDhp6r5s/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/1322309830308007976/f4a7019e4eab272382652b283df63929.png?format=webp&quality=lossless&width=282&height=282', name: 'MeTa', desc: 'You can’t beat MeTA' },
  {img: 'https://images-ext-1.discordapp.net/external/8epQOkPyrzf2cHXQFvruSRHn60oHMHfT3Tr1t8hyxw0/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/945234689768189983/a_3bf76ed8c109e5d45360ada42e35a5e2.gif?width=953&height=953', name: 'FentDealer', desc: "My name is fentdealer I'm driving a Mercedes benz" },
  {img: 'https://images-ext-1.discordapp.net/external/eLtu-AY1mlgTp9Asr2gWUbm8tKMh0jfb4ZRWVIgZD0Q/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/1197970215326199881/ecae35402353750bf0d820c03f0fb2bc.png?format=webp&quality=lossless&width=282&height=282', name: 'Bonkey1', desc: 'cause bread tastes better than key.' },
  {img: 'https://images-ext-1.discordapp.net/external/CS_mEdm5BxDzrNMgkMATtYcDGk_N0hHpCmFJkttqbB4/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/534213395629604895/bd8f398054de66eea9d3e7b4a5d1097e.png?format=webp&quality=lossless&width=718&height=718', name: 'MonkeyEd', desc: 'ANGRY BIRDS TRANSFORMERS TOURNAMENT CHAMPION' },
  {img: 'https://images-ext-1.discordapp.net/external/qXmyF4ImLqD-_We6iPtSaXbD7XDvNSSYL6lWK7WQuW8/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/704365516130746458/dbcc7873b4a67e5540864711e0ea7430.png?format=webp&quality=lossless&width=396&height=396', name: 'i am you', desc: 'i hope you feel less motivated after reading this' },
];

// --- Rarity Config ---

const rarityColors = {
  common: "#4eff4e",
  rare: "#4e9cff",
  epic: "#b84eff",
  legendary: "#ffb84e",
  mythic: "#ff4e9c",
  secret: "#ff4e4e",
  divine: "linear-gradient(90deg, #00ffd0, #00bfff)",
  zephyr: "linear-gradient(90deg, #01AEFD, #0050ff)"
};

const profileRarityMap = {
  "Zeph":      { rarity: "zephyr",   buffs: { money: 2, damage: 2, luck: 2 } },
  "Remote":    { rarity: "divine",   buffs: { money: 1.7, damage: 1.7, luck: 1.7 } },
  "i am you":  { rarity: "divine",   buffs: { money: 1.7, damage: 1.7, luck: 1.7 } },
  "Justin":    { rarity: "secret",   buffs: { money: 1.5, damage: 1.5, luck: 1.5 } },
  "Infuff":    { rarity: "mythic",   buffs: { money: 1.3, damage: 1.3, luck: 1.3 } },
  "#45 Player":{ rarity: "legendary",buffs: { money: 1.15, damage: 1.15, luck: 1.15 } },
  "SenterSych":{ rarity: "legendary",buffs: { money: 1.15, damage: 1.15, luck: 1.15 } },
  "Zoinkys":   { rarity: "epic",     buffs: { money: 1.08, damage: 1.08, luck: 1.08 } },
  "Ball":      { rarity: "epic",     buffs: { money: 1.08, damage: 1.08, luck: 1.08 } },
  "Dr. Tempest":{rarity: "rare",     buffs: { money: 1.03, damage: 1.03, luck: 1.03 } },
  "Qich":      { rarity: "rare",     buffs: { money: 1.03, damage: 1.03, luck: 1.03 } },
};

profiles.forEach(profile => {
  const info = profileRarityMap[profile.name];
  profile.rarity = info ? info.rarity : "common";
  profile.buffs = info ? info.buffs : { money: 1, damage: 1, luck: 1 };
});

function recalculateBuffs() {
  let moneyBuff = 1, damageBuff = 1, luckBuff = 1;
  unlockedProfiles.forEach(idx => {
    const buffs = profiles[idx].buffs;
    moneyBuff *= buffs.money;
    damageBuff *= buffs.damage;
    luckBuff *= buffs.luck;
  });
  profileMoneyMultiplier = moneyBuff;
  multiplier = coinsPerClick * moneyBuff;
  damage = damageBuff;
  luck = luckBuff;
}

function getRarityByChance() {
  let luckMultiplier = luck;

  let roll = Math.random() * 100;
  roll /= luckMultiplier;

  if (roll < 0.01) return 'secret';
  if (roll < 1) return 'mythic';
  if (roll < 6) return 'legendary';
  if (roll < 26) return 'epic';
  if (roll < 56) return 'rare';
  return 'common';
}

function unlockProfile(idx) {
  if (!unlockedProfiles.includes(idx)) {
    unlockedProfiles.push(idx);
    recalculateBuffs();
  }
}

function getRarityByChance() {
  let luckMultiplier = 1;
  if (activeProfile && activeProfile.luckDiv) luckMultiplier = activeProfile.luckDiv;

  let roll = Math.random() * 100;
  roll /= luckMultiplier;

  if (roll < 0.01) return 'secret';
  if (roll < 1) return 'mythic';
  if (roll < 6) return 'legendary';
  if (roll < 26) return 'epic';
  if (roll < 56) return 'rare';
  return 'common';
}
function getRandomProfileIndex() {
  let rarity = getRarityByChance();

  let pool = profiles.map((p, i) => ({ ...p, idx: i })).filter(p => p.rarity === rarity);

  if (pool.length === 0) pool = profiles.map((p, i) => ({ ...p, idx: i })).filter(p => p.rarity === 'common');
  const pick = pool[Math.floor(Math.random() * pool.length)];
  return pick.idx;
}

function renderIndexGrid() {
  const main = document.getElementById('main-section');
  main.innerHTML = '';
  main.style.display = 'flex';
  main.style.flexDirection = 'column';
  main.style.alignItems = 'center';
  main.style.justifyContent = 'center';

  if (selectedRarity === 'all') {
  const rarityOrder = ['zephyr', 'divine', 'secret', 'mythic', 'legendary', 'epic', 'rare', 'common'];
  const sortedProfiles = profiles.slice().sort((a, b) => {
    return rarityOrder.indexOf(a.rarity) - rarityOrder.indexOf(b.rarity);
  });

  const grid = document.createElement('div');
  grid.style.display = 'grid';
  grid.style.gridTemplateColumns = 'repeat(6, 1fr)';
  grid.style.gap = '32px 32px';
  grid.style.rowGap = '32px';
  grid.style.padding = '8px 0px';
  grid.style.width = '100%';
  grid.style.maxWidth = '900px';
  grid.style.boxSizing = 'border-box';
  grid.style.justifyItems = 'center';
  grid.style.margin = '0 auto';

  sortedProfiles.forEach((profile, idx) => {
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
    pfp.style.cursor = unlockedProfiles.includes(profiles.indexOf(profile)) ? 'pointer' : 'not-allowed';
    pfp.style.background = '#222';
    pfp.style.filter = unlockedProfiles.includes(profiles.indexOf(profile)) ? '' : 'grayscale(1) brightness(0.5)';
    pfp.onclick = () => {
      if (unlockedProfiles.includes(profiles.indexOf(profile))) showProfilePanel(profile);
    };
    cell.appendChild(pfp);
    const name = document.createElement('div');
    name.textContent = profile.name;
    name.style.fontFamily = 'Fredoka, sans-serif';
    name.style.fontSize = '1em';
    if (rarityColors[profile.rarity] && rarityColors[profile.rarity].includes('gradient')) {
      name.style.background = rarityColors[profile.rarity];
      name.style.webkitBackgroundClip = "text";
      name.style.webkitTextFillColor = "transparent";
    } else {
      name.style.color = rarityColors[profile.rarity];
    }
    name.style.marginTop = '10px';
    name.style.textAlign = 'center';
    cell.appendChild(name);
    grid.appendChild(cell);
  });
  main.appendChild(grid);
  } else {
    const group = profiles
      .map((p, idx) => ({ ...p, idx }))
      .filter(p => p.rarity === selectedRarity);
    if (group.length === 0) return;
    const header = document.createElement('div');
    header.textContent = selectedRarity.charAt(0).toUpperCase() + selectedRarity.slice(1);
    header.style.fontFamily = 'Fredoka, sans-serif';
    header.style.fontWeight = 'bold';
    header.style.fontSize = '2em';
    header.style.margin = '32px 0 12px 0';
    header.style.textAlign = 'center';
    header.style.background = rarityColors[selectedRarity] && rarityColors[selectedRarity].includes('gradient') ? rarityColors[selectedRarity] : 'none';
    header.style.color = rarityColors[selectedRarity] && rarityColors[selectedRarity].includes('gradient') ? '#fff' : rarityColors[selectedRarity];
    if (rarityColors[selectedRarity] && rarityColors[selectedRarity].includes('gradient')) {
      header.style.background = rarityColors[selectedRarity];
      header.style.webkitBackgroundClip = "text";
      header.style.webkitTextFillColor = "transparent";
    }
    main.appendChild(header);

    const grid = document.createElement('div');
    grid.style.display = 'grid';
    grid.style.gridTemplateColumns = 'repeat(6, 1fr)';
    grid.style.gap = '32px 32px';
    grid.style.rowGap = '32px';
    grid.style.padding = '8px 0px';
    grid.style.width = '100%';
    grid.style.maxWidth = '900px';
    grid.style.boxSizing = 'border-box';
    grid.style.justifyItems = 'center';
    grid.style.margin = '0 auto';

    group.forEach(profile => {
      const cell = document.createElement('div');
      cell.style.display = 'flex';
      cell.style.flexDirection = 'column';
      cell.style.alignItems = 'center';
      cell.style.justifyContent = 'center';
      cell.style.margin = '0';
      cell.style.width = '160px';
      cell.style.minWidth = '160px';
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
      pfp.style.cursor = unlockedProfiles.includes(profile.idx) ? 'pointer' : 'not-allowed';
      pfp.style.background = '#222';
      pfp.style.filter = unlockedProfiles.includes(profile.idx) ? '' : 'grayscale(1) brightness(0.5)';
      pfp.onclick = () => {
        if (unlockedProfiles.includes(profile.idx)) showProfilePanel(profile);
      };
      cell.appendChild(pfp);
      const name = document.createElement('div');
      name.textContent = profile.name;
      name.style.fontFamily = 'Fredoka, sans-serif';
      name.style.fontSize = '1em';
      if (rarityColors[profile.rarity] && rarityColors[profile.rarity].includes('gradient')) {
        name.style.background = rarityColors[profile.rarity];
        name.style.webkitBackgroundClip = "text";
        name.style.webkitTextFillColor = "transparent";
      } else {
        name.style.color = rarityColors[profile.rarity];
      }
      name.style.marginTop = '10px';
      name.style.textAlign = 'center';
      cell.appendChild(name);
      grid.appendChild(cell);
    });
    main.appendChild(grid);
  }
}

// --- Rarity Sidebar ---
let selectedRarity = 'all';

function renderRaritySidebar() {
  let sidebar = document.getElementById('rarity-sidebar');
  if (!sidebar) {
    sidebar = document.createElement('div');
    sidebar.id = 'rarity-sidebar';
    sidebar.style.position = 'fixed';
    sidebar.style.right = '0';
    sidebar.style.top = '0';
    sidebar.style.width = '180px';
    sidebar.style.height = '100vh';
    sidebar.style.background = '#18191c';
    sidebar.style.zIndex = '100001';
    sidebar.style.display = 'flex';
    sidebar.style.flexDirection = 'column';
    sidebar.style.alignItems = 'center';
    sidebar.style.paddingTop = '48px';
    sidebar.style.boxShadow = '-2px 0 16px rgba(0,0,0,0.18)';
    document.body.appendChild(sidebar);
  }
  sidebar.innerHTML = '';
  const title = document.createElement('div');
  title.textContent = 'Filter by Rarity';
  title.style.color = '#fff';
  title.style.fontFamily = 'Fredoka, sans-serif';
  title.style.fontWeight = 'bold';
  title.style.fontSize = '1.2em';
  title.style.marginBottom = '24px';
  sidebar.appendChild(title);

  const rarities = ['all', 'zephyr', 'divine', 'secret', 'mythic', 'legendary', 'epic', 'rare', 'common'];
  rarities.forEach(rarity => {
    const btn = document.createElement('button');
    btn.textContent = rarity.charAt(0).toUpperCase() + rarity.slice(1);
    btn.style.background = selectedRarity === rarity ? '#23272a' : 'transparent';

  if (rarity === 'all') {
    btn.style.color = '#FFD700';
  } else if (rarity === 'zephyr') {
    btn.style.color = '#01AEFD';
  } else if (rarity === 'divine') {
    btn.style.color = '#00ffd0';
  } else if (rarityColors[rarity] && rarityColors[rarity].includes('gradient')) {
    btn.style.color = '#fff';
  } else if (rarity === 'common') {
    btn.style.color = '#4eff4e';
  } else {
    btn.style.color = rarityColors[rarity] || '#fff';
  }

    btn.style.border = 'none';
    btn.style.fontFamily = 'Fredoka, sans-serif';
    btn.style.fontSize = '1.1em';
    btn.style.padding = '12px 0';
    btn.style.cursor = 'pointer';
    btn.style.width = '100%';
    btn.style.transition = 'background 0.2s';
    btn.onmouseenter = () => btn.style.background = '#111317';
    btn.onmouseleave = () => btn.style.background = selectedRarity === rarity ? '#23272a' : 'transparent';
    btn.onclick = () => {
      selectedRarity = rarity;
      renderIndexGrid();
      renderRaritySidebar();
    };
    sidebar.appendChild(btn);
  });
}

// --- Variables Config ---
let coins = 0;
let coinsPerClick = 1;
let coinsPerSecond = 0;
let multiplier = 1;
let damage = 1;
let luck = 1;
let profileMoneyMultiplier = 1;
let unlockedProfiles = [];
let fasterAuto = false;
let disableParticles = false;
let disableSound = false;
let goldMultiplier = 1;
let activeProfile = null;
if (unlockedProfiles.length > 0) {
  activeProfile = profiles[unlockedProfiles[0]];
}
if (activeProfile && activeProfile.multiDiv) goldMultiplier = activeProfile.multiDiv;
coins += coinsPerClick * goldMultiplier;
coins += coinsPerSecond * goldMultiplier;


// ---  Number Formatting ---
function formatCoins(num) {
  if (num < 1_000) return num.toString();
  if (num < 1_000_000) return num.toLocaleString();
  const units = [
    { value: 1e153, symbol: "Dcvgvg" },
    { value: 1e150, symbol: "Novgvg" },
    { value: 1e147, symbol: "Ocvgvg" },
    { value: 1e144, symbol: "Spvgvg" },
    { value: 1e141, symbol: "Sxvgvg" },
    { value: 1e138, symbol: "Qxvgvg" },
    { value: 1e135, symbol: "Qavgvg" },
    { value: 1e132, symbol: "Tvgvg" },
    { value: 1e129, symbol: "Dvgvg" },
    { value: 1e126, symbol: "Uvgvg" },
    { value: 1e123, symbol: "Vgvg" },
    { value: 1e120, symbol: "Nodvg" },
    { value: 1e117, symbol: "Ocdvg" },
    { value: 1e114, symbol: "Spdvg" },
    { value: 1e111, symbol: "Sxdvg" },
    { value: 1e108, symbol: "Qidvg" },
    { value: 1e105, symbol: "Qadvg" },
    { value: 1e102, symbol: "Tdvg" },
    { value: 1e99, symbol: "Ddvg" },
    { value: 1e96, symbol: "Udvg" },
    { value: 1e93, symbol: "Dcvg" },
    { value: 1e90, symbol: "Novg" },
    { value: 1e87, symbol: "Ocvg" },
    { value: 1e84, symbol: "Spvg" },
    { value: 1e81, symbol: "Sxvg" },
    { value: 1e78, symbol: "Qxvg" },
    { value: 1e75, symbol: "Qavg" },
    { value: 1e72, symbol: "Tvg" },
    { value: 1e69, symbol: "Dvg" },
    { value: 1e66, symbol: "Uvg" },
    { value: 1e63, symbol: "Vg" },
    { value: 1e60, symbol: "Nod" },
    { value: 1e57, symbol: "Ocd" },
    { value: 1e54, symbol: "Spd" },
    { value: 1e51, symbol: "Sxd" },
    { value: 1e48, symbol: "Qid" },
    { value: 1e45, symbol: "Qad" },
    { value: 1e42, symbol: "Td" },
    { value: 1e39, symbol: "Dd" },
    { value: 1e36, symbol: "Ud" },
    { value: 1e33, symbol: "Dc" },
    { value: 1e30, symbol: "No" },
    { value: 1e27, symbol: "Oc" },
    { value: 1e24, symbol: "Sp" },
    { value: 1e21, symbol: "Sx" },
    { value: 1e18, symbol: "Qi" },
    { value: 1e15, symbol: "Qa" },
    { value: 1e12, symbol: "T" },
    { value: 1e9, symbol: "B" },
    { value: 1e6, symbol: "M" }
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
  if (disableSound) return;
  const sounds = {
    click: '',
    upgrade: '',
    summon: ''
  };
  const audio = new Audio(sounds[type]);
  audio.volume = 0.2;
  audio.play();
}
function spawnParticles(x, y, color = '#1D1D1D') {
  if (disableParticles) return;
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
  const sections = ['Workshop','Summon', 'Index', 'Settings'];
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

  const profileMultiplierDiv = document.createElement('div');
  profileMultiplierDiv.textContent = `Cash Multiplier: x${profileMoneyMultiplier.toFixed(2)}`;
  profileMultiplierDiv.style.color = '#ff3b3b';
  profileMultiplierDiv.style.fontFamily = 'Fredoka, sans-serif';
  profileMultiplierDiv.style.fontWeight = 'bold';
  profileMultiplierDiv.style.fontSize = '1.1em';
  profileMultiplierDiv.style.marginBottom = '4px';
  profileMultiplierDiv.style.textAlign = 'center';
  sidebar.appendChild(profileMultiplierDiv);

  const damageDiv = document.createElement('div');
  damageDiv.textContent = `Damage: x${damage.toFixed(2)}`;
  damageDiv.style.color = '#9013C5';
  damageDiv.style.fontFamily = 'Fredoka, sans-serif';
  damageDiv.style.fontWeight = 'bold';
  damageDiv.style.fontSize = '1.1em';
  damageDiv.style.marginBottom = '4px';
  damageDiv.style.textAlign = 'center';
  sidebar.appendChild(damageDiv);

  const luckDiv = document.createElement('div');
  luckDiv.textContent = `Luck: x${luck.toFixed(2)}`;
  luckDiv.style.color = '#4eff4e';
  luckDiv.style.fontFamily = 'Fredoka, sans-serif';
  luckDiv.style.fontWeight = 'bold';
  luckDiv.style.fontSize = '1.1em';
  luckDiv.style.marginBottom = '35px';
  luckDiv.style.textAlign = 'center';
  sidebar.appendChild(luckDiv);
}

// --- Settings Toggles ---
function createSwitch(isOn, onChange) {
  const wrapper = document.createElement('div');
  wrapper.style.display = 'flex';
  wrapper.style.alignItems = 'center';
  wrapper.style.cursor = 'pointer';

  const track = document.createElement('div');
  track.style.width = '44px';
  track.style.height = '24px';
  track.style.borderRadius = '12px';
  track.style.background = isOn ? '#01AEFD' : '#444';
  track.style.transition = 'background 0.2s';
  track.style.position = 'relative';
  track.style.marginRight = '12px';

  const knob = document.createElement('div');
  knob.style.width = '20px';
  knob.style.height = '20px';
  knob.style.borderRadius = '50%';
  knob.style.background = '#fff';
  knob.style.position = 'absolute';
  knob.style.top = '2px';
  knob.style.left = isOn ? '22px' : '2px';
  knob.style.transition = 'left 0.2s';

  track.appendChild(knob);
  wrapper.appendChild(track);

  wrapper.onclick = () => {
    isOn = !isOn;
    track.style.background = isOn ? '#01AEFD' : '#444';
    knob.style.left = isOn ? '22px' : '2px';
    onChange(isOn);
  };

  return wrapper;
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
let tripleClickCost = 100000;

function getAutoClickerGain(level) {
  if (level < 10) return 10;
  if (level < 20) return 1000;
  if (level < 30) return 100000;
  if (level < 40) return 10000000;
  return 1000000000;
}


let shopSidebar = null;

function renderShopSidebar(section) {
  if (!shopSidebar) {
    shopSidebar = document.createElement('div');
    shopSidebar.id = 'shop-sidebar';
    shopSidebar.style.position = 'fixed';
    shopSidebar.style.right = '0';
    shopSidebar.style.top = '0';
    shopSidebar.style.width = '320px';
    shopSidebar.style.height = '100vh';
    shopSidebar.style.background = '#18191c';
    shopSidebar.style.zIndex = '100001';
    shopSidebar.style.display = 'flex';
    shopSidebar.style.flexDirection = 'column';
    shopSidebar.style.alignItems = 'stretch';
    shopSidebar.style.paddingTop = '48px';
    shopSidebar.style.boxShadow = '-2px 0 16px rgba(0,0,0,0.18)';
    shopSidebar.style.overflowY = 'auto';
    document.body.appendChild(shopSidebar);
  }

  if (section !== 'Workshop') {
    shopSidebar.style.display = 'none';
  } else {
    shopSidebar.style.display = 'flex';
  }

  shopSidebar.innerHTML = '';

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
  shopSidebar.appendChild(pageSelector);

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
        startAutoCoins();
      }
    };
    autoClickerCard.appendChild(autoBtn);
    shopSidebar.appendChild(autoClickerCard);

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
        doubleClickCost = Math.round(doubleClickCost * getClickUpgradeMultiplier(doubleClickLevel));
        playSound('upgrade');
        spawnParticles(e.clientX, e.clientY, '#01AEFD');
        updateWorkshopUI();
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
        doubleClickCost = Math.round(doubleClickCost * getClickUpgradeMultiplier(doubleClickLevel));
        bought++;
      }
      if (bought > 0) {
        playSound('upgrade');
        spawnParticles(e.clientX, e.clientY, '#01AEFD');
        updateWorkshopUI();
      }
    };
    doubleClickCard.appendChild(doubleBtn);
    shopSidebar.appendChild(doubleClickCard);

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
        tripleClickCost = Math.round(tripleClickCost * getClickUpgradeMultiplier(tripleClickLevel));
        playSound('upgrade');
        spawnParticles(e.clientX, e.clientY, '#01AEFD');
        updateWorkshopUI();
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
        tripleClickCost = Math.round(tripleClickCost * getClickUpgradeMultiplier(tripleClickLevel));
        bought++;
      }
      if (bought > 0) {
        playSound('upgrade');
        spawnParticles(e.clientX, e.clientY, '#01AEFD');
        updateWorkshopUI();
      }
    };
    tripleClickCard.appendChild(tripleBtn);
    shopSidebar.appendChild(tripleClickCard);

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
        }
      };
      goldenCard.appendChild(btn);
      shopSidebar.appendChild(goldenCard);
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
        }
      };
      magnetCard.appendChild(btn);
      shopSidebar.appendChild(magnetCard);
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
      btn.textContent = `Buy ($100K)`;
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
          startAutoCoins();
        }
      };
      fasterCard.appendChild(btn);
      shopSidebar.appendChild(fasterCard);
    }
  } else if (shopPages[shopPage] === 'Boosts') {
    const empty = document.createElement('div');
    empty.textContent = 'No boosts available yet!';
    empty.style.color = '#bbb';
    empty.style.fontFamily = 'Fredoka, sans-serif';
    empty.style.fontSize = '1.1em';
    empty.style.margin = '32px 0 0 0';
    empty.style.textAlign = 'center';
    shopSidebar.appendChild(empty);
  }
}


// --- Main Section ---

let lastClickTime = 0;
const minClickInterval = 100; 

function renderSection(section) {
  const raritySidebar = document.getElementById('rarity-sidebar');

  if (raritySidebar && section !== 'Index') {
    raritySidebar.remove();
  }

  let main = document.getElementById('main-section');
  if (!main) {
    main = document.createElement('div');
    main.id = 'main-section';
    main.style.position = 'fixed';
    main.style.top = '0';
    main.style.height = '100vh';
    main.style.background = 'transparent';
    main.style.zIndex = '100000';
    main.style.overflow = 'auto';
    document.body.appendChild(main);
  }
  main.innerHTML = '';

  if (section === 'Workshop') {
    main.style.left = '180px';
    main.style.width = 'calc(100vw - 180px - 320px)';
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
      const now = Date.now();
      if (now - lastClickTime < minClickInterval) {
        return;
      }
      lastClickTime = now;
      coins += multiplier;
      playSound('click');
      spawnParticles(e.clientX, e.clientY, '#FFD700');
      updateWorkshopUI();
    };
    workshopDiv.appendChild(clickBtn);

    main.appendChild(workshopDiv);
  } else if (section === 'Index') {
    main.style.left = '180px';
    main.style.width = 'calc(100vw - 180px)';
    main.style.overflow = 'auto';
    renderRaritySidebar();
    renderIndexGrid();
  } else if (section === 'Summon') {
    main.style.left = '180px';
    main.style.width = 'calc(100vw - 180px)';
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
      let cost = times === 1 ? 100000 : 1000000;
      if (coins < cost) {
        showError('Not enough coins');
        return;
      }
      coins -= cost;
      let results = [];
      for (let i = 0; i < times; i++) {
        let rarity = getRarityByChance();
        const summonableRarities = ['secret', 'mythic', 'legendary', 'epic', 'rare', 'common'];
        if (!summonableRarities.includes(rarity)) rarity = 'common';
        let pool = profiles.map((p, idx) => ({ ...p, idx })).filter(p => p.rarity === rarity);
        if (pool.length === 0) pool = profiles.map((p, idx) => ({ ...p, idx })).filter(p => p.rarity === 'common');
        const pick = pool[Math.floor(Math.random() * pool.length)];
        if (!unlockedProfiles.includes(pick.idx)) {
          unlockProfile(pick.idx);
          results.push({ ...pick, duplicate: false });
        } else {
          coins += 250;
          results.push({ ...pick, duplicate: true });
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
    summon10.textContent = 'Summon 10x (1M coins)';
    summon10.style.fontSize = '1.1em';
    summon10.style.fontFamily = 'Fredoka, sans-serif';
    summon10.style.padding = '12px 32px';
    summon10.style.background = '#015AFD';
    summon10.style.color = '#fff';
    summon10.style.border = 'none';
    summon10.style.borderRadius = '12px';
    summon10.style.cursor = 'pointer';
    summon10.onclick = () => summon(10);

    const ratesBtn = document.createElement('button');
    ratesBtn.textContent = 'Rates';
    ratesBtn.style.fontSize = '1.1em';
    ratesBtn.style.fontFamily = 'Fredoka, sans-serif';
    ratesBtn.style.padding = '12px 32px';
    ratesBtn.style.background = '#23272a';
    ratesBtn.style.color = '#fff';
    ratesBtn.style.border = 'none';
    ratesBtn.style.borderRadius = '12px';
    ratesBtn.style.cursor = 'pointer';
    ratesBtn.onclick = () => {
      const rates = [
        { name: 'Secret', rate: '0.01', color: rarityColors.secret },
        { name: 'Mythic', rate: '1', color: rarityColors.mythic },
        { name: 'Legendary', rate: '5', color: rarityColors.legendary },
        { name: 'Epic', rate: '20', color: rarityColors.epic },
        { name: 'Rare', rate: '30', color: rarityColors.rare },
        { name: 'Common', rate: '44', color: rarityColors.common }
      ];
      let html = '';
      rates.forEach(r => {
        if (r.color && r.color.includes('gradient')) {
          html += `<div style="font-family:Fredoka,sans-serif;font-size:1.2em;margin-bottom:8px;background:${r.color};-webkit-background-clip:text;-webkit-text-fill-color:transparent;">${r.name} = ${r.rate}%</div>`;
        } else {
          html += `<div style="font-family:Fredoka,sans-serif;font-size:1.2em;margin-bottom:8px;color:${r.color};">${r.name} = ${r.rate}%</div>`;
        }
      });
      showPopup('Summon Rates:<br><br>' + html, "OK");
    };

    btnRow.appendChild(summon1);
    btnRow.appendChild(summon10);
    btnRow.appendChild(ratesBtn);
    summonDiv.appendChild(btnRow);
    summonDiv.appendChild(errorMsg);

    main.appendChild(summonDiv);
  } else if (section === 'Settings') {
    main.style.left = '180px';
    main.style.width = 'calc(100vw - 180px)';
    main.style.overflow = 'auto';
    main.style.display = 'flex';
    main.style.flexDirection = 'column';
    main.style.alignItems = 'center';
    main.style.justifyContent = 'center';
    main.style.paddingTop = '80px';

    const header = document.createElement('div');
    header.textContent = 'Settings';
    header.style.fontFamily = 'Fredoka, sans-serif';
    header.style.fontWeight = 'bold';
    header.style.fontSize = '2em';
    header.style.marginBottom = '40px';
    header.style.color = '#01AEFD';
    header.style.textAlign = 'center';
    main.appendChild(header);

    const particlesToggle = document.createElement('div');
    particlesToggle.style.display = 'flex';
    particlesToggle.style.alignItems = 'center';
    particlesToggle.style.fontFamily = 'Fredoka, sans-serif';
    particlesToggle.style.fontSize = '1.1em';
    particlesToggle.style.marginBottom = '18px';
    particlesToggle.style.color = '#01AEFD';
    particlesToggle.appendChild(createSwitch(disableParticles, (on) => {
      disableParticles = on;
      saveGame();
    }));
    particlesToggle.appendChild(document.createTextNode('Disable Particles'));
    main.appendChild(particlesToggle);

    const soundToggle = document.createElement('div');
    soundToggle.style.display = 'flex';
    soundToggle.style.alignItems = 'center';
    soundToggle.style.fontFamily = 'Fredoka, sans-serif';
    soundToggle.style.fontSize = '1.1em';
    soundToggle.style.marginBottom = '18px';
    soundToggle.style.color = '#01AEFD';
    soundToggle.appendChild(createSwitch(disableSound, (on) => {
      disableSound = on;
      saveGame();
    }));
    soundToggle.appendChild(document.createTextNode('Disable Sound Effects'));
    main.appendChild(soundToggle);

    const resetBtn = document.createElement('button');
    resetBtn.textContent = 'Reset Progress';
    resetBtn.style.background = '#ff4e4e';
    resetBtn.style.color = '#fff';
    resetBtn.style.border = 'none';
    resetBtn.style.borderRadius = '8px';
    resetBtn.style.padding = '12px 32px';
    resetBtn.style.fontFamily = 'Fredoka, sans-serif';
    resetBtn.style.fontSize = '1.1em';
    resetBtn.style.cursor = 'pointer';
    resetBtn.style.marginTop = '32px';
    resetBtn.onclick = () => {
      showPopup(
        'Are you sure you want to reset all progress? This cannot be undone.',
        'Reset',
        'Cancel',
        () => {
          coins = 0;
          coinsPerClick = 1;
          coinsPerSecond = 0;
          multiplier = 1;
          unlockedProfiles = [];
          fasterAuto = false;
          purchasedUpgrades = {
            "Golden Cursor": false,
            "Mega Magnet": false,
            "Faster Auto": false
          };
          autoClickerLevel = 0;
          autoClickerCost = 50;
          doubleClickLevel = 0;
          doubleClickCost = 150;
          tripleClickLevel = 0;
          tripleClickCost = 1000;
          disableParticles = false;
          disableSound = false;
          localStorage.removeItem('jumpstars_save');
          saveGame();
          location.reload();
        }
      );
    };
    main.appendChild(resetBtn);
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

// --- Popup ---
function showPopup(message, confirmText = "OK", cancelText = null, onConfirm = null, onCancel = null) {
  const old = document.getElementById('custom-popup-overlay');
  if (old) old.remove();

  const overlay = document.createElement('div');
  overlay.id = 'custom-popup-overlay';
  overlay.style.position = 'fixed';
  overlay.style.top = '0';
  overlay.style.left = '0';
  overlay.style.width = '100vw';
  overlay.style.height = '100vh';
  overlay.style.background = 'rgba(0,0,0,0.6)';
  overlay.style.zIndex = '100010';
  overlay.style.display = 'flex';
  overlay.style.justifyContent = 'center';
  overlay.style.alignItems = 'center';

  const box = document.createElement('div');
  box.style.background = '#232323';
  box.style.borderRadius = '18px';
  box.style.padding = '36px 32px 28px 32px';
  box.style.display = 'flex';
  box.style.flexDirection = 'column';
  box.style.alignItems = 'center';
  box.style.boxShadow = '0 8px 32px rgba(0,0,0,0.4)';
  box.style.fontFamily = 'Fredoka, sans-serif';
  box.style.minWidth = '320px';

  const msg = document.createElement('div');
  msg.innerHTML = message;
  msg.style.fontSize = '1.2em';
  msg.style.color = '#fff';
  msg.style.marginBottom = '24px';
  msg.style.textAlign = 'center';
  box.appendChild(msg);

  const btnRow = document.createElement('div');
  btnRow.style.display = 'flex';
  btnRow.style.gap = '18px';

  const okBtn = document.createElement('button');
  okBtn.textContent = confirmText;
  okBtn.style.background = '#01AEFD';
  okBtn.style.color = '#fff';
  okBtn.style.border = 'none';
  okBtn.style.borderRadius = '8px';
  okBtn.style.padding = '10px 28px';
  okBtn.style.fontFamily = 'Fredoka, sans-serif';
  okBtn.style.fontSize = '1.1em';
  okBtn.style.cursor = 'pointer';
  okBtn.onclick = () => {
    overlay.remove();
    if (onConfirm) onConfirm();
  };
  btnRow.appendChild(okBtn);

  if (cancelText) {
    const cancelBtn = document.createElement('button');
    cancelBtn.textContent = cancelText;
    cancelBtn.style.background = '#444';
    cancelBtn.style.color = '#fff';
    cancelBtn.style.border = 'none';
    cancelBtn.style.borderRadius = '8px';
    cancelBtn.style.padding = '10px 28px';
    cancelBtn.style.fontFamily = 'Fredoka, sans-serif';
    cancelBtn.style.fontSize = '1.1em';
    cancelBtn.style.cursor = 'pointer';
    cancelBtn.onclick = () => {
      overlay.remove();
      if (onCancel) onCancel();
    };
    btnRow.appendChild(cancelBtn);
  }

  box.appendChild(btnRow);
  overlay.appendChild(box);
  document.body.appendChild(overlay);
}

// --- Auto Coin Gain ---
let autoInterval = null;
function startAutoCoins() {
  if (autoInterval) clearInterval(autoInterval);
  autoInterval = setInterval(() => {
    if (coinsPerSecond > 0) {
      coins += coinsPerSecond;
      updateWorkshopUI();
    }
  }, fasterAuto ? 500 : 1000);
}
startAutoCoins();

// --- Click Upgrade Multiplier

function getClickUpgradeMultiplier(level) {
  const decade = Math.floor((level - 1) / 10);
  return 2.5 * Math.pow(50, decade);
}

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
if (rarityColors[res.rarity] && rarityColors[res.rarity].includes('gradient')) {
  name.style.background = rarityColors[res.rarity];
  name.style.webkitBackgroundClip = "text";
  name.style.webkitTextFillColor = "transparent";
} else {
  name.style.color = rarityColors[res.rarity] || '#fff';
}
name.style.textAlign = 'center';
cell.appendChild(name);
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

// --- Save System ---

function saveGame() {
const saveData = {
  coins,
  coinsPerClick,
  coinsPerSecond,
  multiplier,
  unlockedProfiles,
  fasterAuto,
  purchasedUpgrades,
  autoClickerLevel,
  autoClickerCost,
  doubleClickLevel,
  doubleClickCost,
  tripleClickLevel,
  tripleClickCost,
  activeProfileIndex: activeProfile ? activeProfile.idx : null
};
  localStorage.setItem('jumpstars_save', JSON.stringify(saveData));
}

function loadGame() {
  const data = localStorage.getItem('jumpstars_save');
  if (!data) return;
  try {
    const save = JSON.parse(data);
    coins = save.coins ?? coins;
    coinsPerClick = save.coinsPerClick ?? coinsPerClick;
    coinsPerSecond = save.coinsPerSecond ?? coinsPerSecond;
    multiplier = save.multiplier ?? multiplier;
    unlockedProfiles = save.unlockedProfiles ?? unlockedProfiles;
    fasterAuto = save.fasterAuto ?? fasterAuto;
    purchasedUpgrades = save.purchasedUpgrades ?? purchasedUpgrades;
    autoClickerLevel = save.autoClickerLevel ?? autoClickerLevel;
    autoClickerCost = save.autoClickerCost ?? autoClickerCost;
    doubleClickLevel = save.doubleClickLevel ?? doubleClickLevel;
    doubleClickCost = save.doubleClickCost ?? doubleClickCost;
    tripleClickLevel = save.tripleClickLevel ?? tripleClickLevel;
    tripleClickCost = save.tripleClickCost ?? tripleClickCost;
    activeProfile = null;
    if (typeof save.activeProfileIndex === 'number' && unlockedProfiles.includes(save.activeProfileIndex)) {
      activeProfile = profiles[save.activeProfileIndex];
    }

    const DEFAULT_AUTO_CLICKER_COST = 50;
    const DEFAULT_DOUBLE_CLICK_COST = 150;
    const DEFAULT_TRIPLE_CLICK_COST = 1000000;
    const DEFAULT_SUMMON_COST = 100000;
    const DEFAULT_SUMMON10_COST = 1000000;

    if (typeof autoClickerCost === "undefined" || autoClickerCost < DEFAULT_AUTO_CLICKER_COST) {
      autoClickerCost = DEFAULT_AUTO_CLICKER_COST;
    }
    if (typeof doubleClickCost === "undefined" || doubleClickCost < DEFAULT_DOUBLE_CLICK_COST) {
      doubleClickCost = DEFAULT_DOUBLE_CLICK_COST;
    }
    if (typeof tripleClickCost === "undefined" || tripleClickCost < DEFAULT_TRIPLE_CLICK_COST) {
      tripleClickCost = DEFAULT_TRIPLE_CLICK_COST;
    }

    if (typeof window.summonCost !== "undefined" && window.summonCost < DEFAULT_SUMMON_COST) {
      window.summonCost = DEFAULT_SUMMON_COST;
    }
    if (typeof window.summon10Cost !== "undefined" && window.summon10Cost < DEFAULT_SUMMON10_COST) {
      window.summon10Cost = DEFAULT_SUMMON10_COST;
    }

  } catch (e) {
    console.error("Failed to load save:", e);
  }
}

setInterval(saveGame, 10000);
window.addEventListener('beforeunload', saveGame);

loadGame();
updateWorkshopUI();
renderSidebar('Workshop');
renderShopSidebar('Workshop');
renderSection('Workshop');
createRepeatingTextBackground();
