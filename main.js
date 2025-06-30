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

function createProfileUploadButton(onProfileAdd) {
  const uploadBtn = document.createElement('button');
  uploadBtn.textContent = 'Add Yourself';
  uploadBtn.style.position = 'fixed';
  uploadBtn.style.bottom = '32px';
  uploadBtn.style.right = '32px';
  uploadBtn.style.zIndex = '100002';
  uploadBtn.style.fontFamily = 'Poppins, sans-serif';
  uploadBtn.style.fontSize = '1.1em';
  uploadBtn.style.padding = '12px 28px';
  uploadBtn.style.background = '#01AEFD';
  uploadBtn.style.color = '#fff';
  uploadBtn.style.border = 'none';
  uploadBtn.style.borderRadius = '12px';
  uploadBtn.style.cursor = 'pointer';
  document.body.appendChild(uploadBtn);

  uploadBtn.onclick = () => {
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.background = 'rgba(0,0,0,0.7)';
    overlay.style.zIndex = '100003';
    overlay.style.display = 'flex';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';

    const form = document.createElement('div');
    form.style.background = '#232323';
    form.style.borderRadius = '18px';
    form.style.padding = '36px 32px 28px 32px';
    form.style.display = 'flex';
    form.style.flexDirection = 'column';
    form.style.alignItems = 'center';
    form.style.boxShadow = '0 8px 32px rgba(0,0,0,0.4)';
    form.style.minWidth = '320px';
    form.style.fontFamily = 'Poppins, sans-serif';

    const title = document.createElement('div');
    title.textContent = 'Add Yourself';
    title.style.fontSize = '1.5em';
    title.style.color = '#01AEFD';
    title.style.marginBottom = '18px';
    form.appendChild(title);

    const nameInput = document.createElement('input');
    nameInput.placeholder = 'Your Name';
    nameInput.style.fontSize = '1.1em';
    nameInput.style.marginBottom = '12px';
    nameInput.style.padding = '8px 12px';
    nameInput.style.borderRadius = '8px';
    nameInput.style.border = '1px solid #444';
    nameInput.style.width = '100%';
    nameInput.style.boxSizing = 'border-box';
    nameInput.style.background = '#f2f4f8';
    nameInput.style.color = '#015AFD';
    form.appendChild(nameInput);

    const descInput = document.createElement('textarea');
    descInput.placeholder = 'Short Description';
    descInput.style.fontSize = '1.1em';
    descInput.style.marginBottom = '12px';
    descInput.style.padding = '8px 12px';
    descInput.style.borderRadius = '8px';
    descInput.style.border = '1px solid #444';
    descInput.style.width = '100%';
    descInput.style.boxSizing = 'border-box';
    descInput.style.minHeight = '60px';
    descInput.style.background = '#f2f4f8';
    descInput.style.color = '#015AFD';
    form.appendChild(descInput);

    const imgInput = document.createElement('input');
    imgInput.type = 'text';
    imgInput.placeholder = 'Image Link (or choose file below)';
    imgInput.style.fontSize = '1.1em';
    imgInput.style.marginBottom = '8px';
    imgInput.style.padding = '8px 12px';
    imgInput.style.borderRadius = '8px';
    imgInput.style.border = '1px solid #444';
    imgInput.style.width = '100%';
    imgInput.style.boxSizing = 'border-box';
    imgInput.style.background = '#f2f4f8';
    imgInput.style.color = '#015AFD';
    form.appendChild(imgInput);

    // Custom upload button
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';
    fileInput.style.display = 'none';
    const fileLabel = document.createElement('label');
    fileLabel.textContent = 'Choose Image File';
    fileLabel.style.display = 'inline-block';
    fileLabel.style.background = 'linear-gradient(to bottom, #01AEFD, #015AFD)';
    fileLabel.style.color = '#fff';
    fileLabel.style.fontWeight = 'bold';
    fileLabel.style.fontSize = '1.05em';
    fileLabel.style.padding = '10px 24px';
    fileLabel.style.borderRadius = '8px';
    fileLabel.style.cursor = 'pointer';
    fileLabel.style.marginBottom = '16px';
    fileLabel.style.marginTop = '2px';
    fileLabel.htmlFor = 'profile-upload-file';
    fileInput.id = 'profile-upload-file';
    form.appendChild(fileInput);
    form.appendChild(fileLabel);

    fileLabel.onclick = () => fileInput.click();
    fileInput.onchange = () => {
      if (fileInput.files && fileInput.files[0]) {
        const reader = new FileReader();
        reader.onload = e => {
          imgInput.value = e.target.result;
        };
        reader.readAsDataURL(fileInput.files[0]);
      }
    };

    const submitBtn = document.createElement('button');
    submitBtn.textContent = 'Add';
    submitBtn.style.fontSize = '1.1em';
    submitBtn.style.padding = '10px 28px';
    submitBtn.style.background = '#01AEFD';
    submitBtn.style.color = '#fff';
    submitBtn.style.border = 'none';
    submitBtn.style.borderRadius = '8px';
    submitBtn.style.cursor = 'pointer';
    submitBtn.style.marginTop = '8px';
    form.appendChild(submitBtn);

    const cancelBtn = document.createElement('button');
    cancelBtn.textContent = 'Cancel';
    cancelBtn.style.fontSize = '1.1em';
    cancelBtn.style.padding = '10px 28px';
    cancelBtn.style.background = '#444';
    cancelBtn.style.color = '#fff';
    cancelBtn.style.border = 'none';
    cancelBtn.style.borderRadius = '8px';
    cancelBtn.style.cursor = 'pointer';
    cancelBtn.style.marginTop = '8px';
    cancelBtn.style.marginLeft = '8px';
    form.appendChild(cancelBtn);

    const buttonRow = document.createElement('div');
    buttonRow.style.display = 'flex';
    buttonRow.style.justifyContent = 'space-between';
    buttonRow.style.width = '100%';
    buttonRow.style.marginTop = '18px';

    submitBtn.style.marginTop = '0';
    submitBtn.style.marginLeft = '0';
    submitBtn.style.marginRight = 'auto';
    submitBtn.style.alignSelf = 'flex-start';
    cancelBtn.style.marginTop = '0';
    cancelBtn.style.marginLeft = 'auto';
    cancelBtn.style.marginRight = '0';
    cancelBtn.style.alignSelf = 'flex-end';

    buttonRow.appendChild(submitBtn);
    buttonRow.appendChild(cancelBtn);
    form.appendChild(buttonRow);

    cancelBtn.onclick = () => overlay.remove();

    submitBtn.onclick = () => {
      const name = nameInput.value.trim();
      const desc = descInput.value.trim();
      const img = imgInput.value.trim();
      if (!name || !desc || !img) {
        alert('Please fill out all fields and provide an image.');
        return;
      }
      onProfileAdd({ name, desc, img });
      overlay.remove();
    };

    overlay.appendChild(form);
    document.body.appendChild(overlay);
  };
}

async function fetchProfiles() {
  const res = await fetch('/.netlify/functions/get-profiles');
  return await res.json();
}

async function addProfile(profile) {
  const res = await fetch('/.netlify/functions/add-profile', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(profile)
  });
  return await res.json();
}

fetchProfiles().then(profiles => {
  createProfileGrid(profiles);
});

createProfileUploadButton(async profile => {
  const result = await addProfile(profile);
  if (!result || result.error) {
    alert('Failed to add profile. Please try again.');
    return;
  }
  const profiles = await fetchProfiles();
  createProfileGrid(profiles);
});

createRepeatingTextBackground();
