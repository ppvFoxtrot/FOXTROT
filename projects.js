const fieldItems = [
  'Recon',
  'UAV',
  'UGV',
  'UUV',
  'Medical & Wearables'
];

const projectItems = [
  { href: 'item 001.html', label: 'item 001' },
  { href: 'item 002.html', label: 'item 002' },
  { href: 'item 003.html', label: 'item 003' },
  { href: 'item 004.html', label: 'item 004' }
];

const softwareItems = [
  { href: 'item 001.html', label: 'Study assistant' },
  { href: 'item 002.html', label: 'Daily Routine Tracker' },
  { href: 'item 003.html', label: 'Study deployer' },
  { href: 'item 004.html', label: 'AI Research Planner' }
];

function buildList(containerId, items) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const list = document.createElement('ul');

  items.forEach((item) => {
    const li = document.createElement('li');

    if (typeof item === 'string') {
      li.textContent = item;
    } else {
      const link = document.createElement('a');
      link.href = item.href;
      link.textContent = item.label;
      li.appendChild(link);
    }

    list.appendChild(li);
  });

  container.appendChild(list);
}

function attachCopyButtons() {
  const blocks = document.querySelectorAll('pre');

  blocks.forEach((block) => {
    if (block.parentElement && block.parentElement.classList.contains('code-block-wrap')) {
      return;
    }

    const wrapper = document.createElement('div');
    wrapper.className = 'code-block-wrap';

    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'copy-code-btn';
    button.textContent = 'Copy code';

    button.addEventListener('click', async () => {
      try {
        const text = block.innerText;
        await navigator.clipboard.writeText(text);
        button.textContent = 'Copied!';
        setTimeout(() => {
          button.textContent = 'Copy code';
        }, 1200);
      } catch (error) {
        button.textContent = 'Copy failed';
        setTimeout(() => {
          button.textContent = 'Copy code';
        }, 1200);
      }
    });

    block.parentNode.insertBefore(wrapper, block);
    wrapper.appendChild(button);
    wrapper.appendChild(block);
  });
}

window.addEventListener('DOMContentLoaded', () => {
  buildList('field-list', fieldItems);
  buildList('project-list', projectItems);
  buildList('software-list', softwareItems);
  attachCopyButtons();
});
