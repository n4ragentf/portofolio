// DROP 001 - Main Interactive Logic
// Plain Vanilla JS. Zero frameworks, zero bloat.

(function () {
  'use strict';

  // --- 1. LANGUAGE CONTROLLER ---
  let currentLang = 'id';

  try {
    const saved = localStorage.getItem('drop001_lang');
    if (saved === 'en' || saved === 'id') {
      currentLang = saved;
    }
  } catch (err) {
    console.warn('localStorage unavailable, defaulting to id', err);
  }

  function applyLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;

    try {
      localStorage.setItem('drop001_lang', lang);
    } catch (err) {
      // safe fallback
    }

    const dict = translations[lang] || translations.id;

    // Update text nodes
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    // Update attributes like placeholder, title, aria-label
    document.querySelectorAll('[data-i18n-attr]').forEach((el) => {
      const attrSpec = el.getAttribute('data-i18n-attr'); // e.g. "title:key"
      const [attr, key] = attrSpec.split(':');
      if (attr && key && dict[key]) {
        el.setAttribute(attr, dict[key]);
      }
    });

    // Update toggle button states
    const btnId = document.getElementById('lang-id-btn');
    const btnEn = document.getElementById('lang-en-btn');
    if (btnId && btnEn) {
      if (lang === 'id') {
        btnId.classList.add('active');
        btnId.setAttribute('aria-pressed', 'true');
        btnEn.classList.remove('active');
        btnEn.setAttribute('aria-pressed', 'false');
      } else {
        btnEn.classList.add('active');
        btnEn.setAttribute('aria-pressed', 'true');
        btnId.classList.remove('active');
        btnId.setAttribute('aria-pressed', 'false');
      }
    }
  }

  // Language toggle listener
  const langToggle = document.getElementById('lang-toggle');
  if (langToggle) {
    langToggle.addEventListener('click', (e) => {
      const target = e.target.closest('button');
      if (!target) return;
      const chosen = target.getAttribute('data-lang');
      if (chosen && chosen !== currentLang) {
        applyLanguage(chosen);
      }
    });
  }

  // --- 2. DRAGGABLE HERO STICKERS ---
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  function initDraggableStickers() {
    if (prefersReducedMotion.matches) return; // Disabled under prefers-reduced-motion

    const container = document.getElementById('hero-stage');
    if (!container) return;

    const stickers = container.querySelectorAll('.draggable-sticker');

    stickers.forEach((sticker) => {
      let isDragging = false;
      let startX = 0;
      let startY = 0;
      let initialLeft = 0;
      let initialTop = 0;

      // Extract current transform rotation if any
      const baseRotation = sticker.getAttribute('data-rotation') || '0deg';

      sticker.addEventListener('pointerdown', (e) => {
        // Only primary mouse button or touch
        if (e.button !== 0 && e.pointerType === 'mouse') return;

        isDragging = true;
        sticker.setPointerCapture(e.pointerId);
        sticker.classList.add('is-dragging');

        // Bring to front
        stickers.forEach((s) => (s.style.zIndex = '10'));
        sticker.style.zIndex = '50';

        const rect = sticker.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();

        startX = e.clientX;
        startY = e.clientY;
        initialLeft = rect.left - containerRect.left;
        initialTop = rect.top - containerRect.top;

        // Convert to absolute positioning inside hero-stage
        sticker.style.left = `${initialLeft}px`;
        sticker.style.top = `${initialTop}px`;
        sticker.style.right = 'auto';
        sticker.style.bottom = 'auto';

        e.preventDefault();
      });

      sticker.addEventListener('pointermove', (e) => {
        if (!isDragging) return;

        const deltaX = e.clientX - startX;
        const deltaY = e.clientY - startY;

        let newLeft = initialLeft + deltaX;
        let newTop = initialTop + deltaY;

        const containerRect = container.getBoundingClientRect();
        const stickerWidth = sticker.offsetWidth;
        const stickerHeight = sticker.offsetHeight;

        // Keep inside boundaries with slight margin
        newLeft = Math.max(-20, Math.min(newLeft, containerRect.width - stickerWidth + 20));
        newTop = Math.max(-10, Math.min(newTop, containerRect.height - stickerHeight + 20));

        sticker.style.left = `${newLeft}px`;
        sticker.style.top = `${newTop}px`;
      });

      function stopDragging(e) {
        if (!isDragging) return;
        isDragging = false;
        sticker.classList.remove('is-dragging');
        try {
          sticker.releasePointerCapture(e.pointerId);
        } catch (err) {
          // ignore
        }
      }

      sticker.addEventListener('pointerup', stopDragging);
      sticker.addEventListener('pointercancel', stopDragging);
    });
  }

  // --- 3. PROJECT HANG TAG FLIP INTERACTION ---
  function initHangTagFlips() {
    const cards = document.querySelectorAll('.product-card');

    cards.forEach((card) => {
      const flipBtn = card.querySelector('.flip-trigger');
      const inner = card.querySelector('.card-inner');

      function toggleFlip() {
        card.classList.toggle('is-flipped');
        const flipped = card.classList.contains('is-flipped');
        if (flipBtn) {
          flipBtn.setAttribute('aria-expanded', flipped ? 'true' : 'false');
        }
      }

      if (flipBtn) {
        flipBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          toggleFlip();
        });
      }

      // Also tap anywhere on the tag to flip if not clicking a direct link
      card.addEventListener('click', (e) => {
        if (e.target.closest('a') || e.target.closest('button')) return;
        toggleFlip();
      });

      // Keyboard accessible flip
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          if (e.target.closest('a')) return;
          e.preventDefault();
          toggleFlip();
        }
      });
    });
  }

  // --- 4. COPY EMAIL TO CLIPBOARD ---
  function initEmailCopy() {
    const copyBtn = document.getElementById('copy-email-btn');
    const emailText = 'naaragentha@gmail.com';

    if (!copyBtn) return;

    copyBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(emailText);
        const originalText = copyBtn.textContent;
        const dict = translations[currentLang] || translations.id;
        copyBtn.textContent = dict.copied_email || 'COPIED!';
        copyBtn.classList.add('is-copied');

        setTimeout(() => {
          copyBtn.textContent = dict.copy_email || 'COPY';
          copyBtn.classList.remove('is-copied');
        }, 2200);
      } catch (err) {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = emailText;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        try {
          document.execCommand('copy');
          const dict = translations[currentLang] || translations.id;
          copyBtn.textContent = dict.copied_email || 'COPIED!';
          setTimeout(() => {
            copyBtn.textContent = dict.copy_email || 'COPY';
          }, 2200);
        } catch (e) {
          alert('Email: ' + emailText);
        }
        document.body.removeChild(textarea);
      }
    });
  }

  // --- 5. INITIALIZE ON DOM READY ---
  document.addEventListener('DOMContentLoaded', () => {
    applyLanguage(currentLang);
    initDraggableStickers();
    initHangTagFlips();
    initEmailCopy();
  });
})();
