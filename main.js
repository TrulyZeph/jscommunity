function createRepeatingTextBackground() {
  if (!document.getElementById('poppins-font-link')) {
    const link = document.createElement('link');
    link.id = 'poppins-font-link';
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap';
    document.head.appendChild(link);
  }
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
  bg.style.zIndex = '99998';
  bg.style.display = 'flex';
  bg.style.flexDirection = 'column';
  bg.style.justifyContent = 'center';
  bg.style.alignItems = 'center';

  const text = 'JUMP STARS COMMUNITY';
  for (let i = 0; i < Math.floor(window.innerHeight / 32); i++) {
    const line = document.createElement('div');
    line.textContent = text + '    ' + text;
    line.style.fontFamily = 'Poppins, sans-serif';
    line.style.fontSize = '4em';
    line.style.fontWeight = '700';
    line.style.color = '#232423';
    line.style.width = '100vw';
    line.style.textAlign = 'center';
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

  profiles.forEach(profile => {
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
    pfp.style.transition = 'box-shadow 0.2s, border 0.2s';
    pfp.style.cursor = 'pointer';
    pfp.style.background = '#222';
    pfp.onmouseenter = () => {
      pfp.style.boxShadow = '0 0 0 4px #01AEFD, 0 2px 8px rgba(0,0,0,0.18)';
    };
    pfp.onmouseleave = () => {
      pfp.style.boxShadow = '0 2px 8px rgba(0,0,0,0.18)';
    };
    pfp.onclick = () => showProfilePanel(profile);
    cell.appendChild(pfp);

    const name = document.createElement('div');
    name.textContent = profile.name;
    name.style.fontFamily = 'Poppins, sans-serif';
    name.style.fontSize = '1em';
    name.style.color = '#fff';
    name.style.marginTop = '10px';
    name.style.textAlign = 'center';
    cell.appendChild(name);

    grid.appendChild(cell);
  });

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
  name.style.fontFamily = 'Poppins, sans-serif';
  name.style.fontSize = '2.2em';
  name.style.color = '#fff';
  name.style.marginBottom = '10px';
  name.style.textAlign = 'center';
  panel.appendChild(name);

  const desc = document.createElement('div');
  desc.textContent = profile.desc;
  desc.style.fontFamily = 'Poppins, sans-serif';
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
  { img: 'https://cdn.discordapp.com/avatars/1119296560468066404/b9e183255ddee74ed8e5dac8b2e146a3.png?size=4096', name: 'Justin', desc: 'N/A' },
  {img: 'https://cdn.discordapp.com/guilds/1176637372721545316/users/529669497938903051/avatars/a_1b79bccfdc3d5629267bf6fb8094f171.gif?size=4096', name: 'DKR', desc: 'Guts is life' },
];

createRepeatingTextBackground();
createProfileGrid(profiles);
