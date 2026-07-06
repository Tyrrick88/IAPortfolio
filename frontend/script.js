// Hero load-in
  window.addEventListener('load', ()=>{
    document.getElementById('heroSection').classList.add('loaded');
  });

  // Custom cursor
  const cdot = document.getElementById('cdot');
  const cring = document.getElementById('cring');
  window.addEventListener('mousemove', (e)=>{
    cdot.style.left = e.clientX+'px'; cdot.style.top = e.clientY+'px';
    cring.style.left = e.clientX+'px'; cring.style.top = e.clientY+'px';
  });
  document.querySelectorAll('a, button, .ep, [data-cursor]').forEach(el=>{
    el.addEventListener('mouseenter', ()=>{
      cring.classList.add('hovered');
      if(el.matches('[data-cursor="play"], .ep')) cring.classList.add('play'); else cring.classList.remove('play');
    });
    el.addEventListener('mouseleave', ()=>{ cring.classList.remove('hovered'); cring.classList.remove('play'); });
  });

  // Scroll progress + header contrast
  const progress = document.getElementById('progress');
  window.addEventListener('scroll', ()=>{
    const h = document.documentElement;
    const pct = (h.scrollTop)/(h.scrollHeight - h.clientHeight) * 100;
    progress.style.width = pct+'%';
  });

  // Menu toggle
  const menuBtn = document.getElementById('menuBtn');
  const fullMenu = document.getElementById('fullMenu');
  menuBtn.addEventListener('click', ()=>{
    menuBtn.classList.toggle('open');
    fullMenu.classList.toggle('open');
  });
  document.querySelectorAll('.menu-link').forEach(l=>{
    l.addEventListener('click', ()=>{ menuBtn.classList.remove('open'); fullMenu.classList.remove('open'); });
  });

  // Reveal on scroll
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(en=>{ if(en.isIntersecting){ en.target.classList.add('in'); io.unobserve(en.target); } });
  }, { threshold:0.15 });
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

  // Waveform bars generation
  const waveBars = document.getElementById('waveBars');
  for(let i=0;i<40;i++){
    const bar = document.createElement('span');
    const h = 30 + Math.random()*70;
    bar.style.setProperty('--h', h+'%');
    bar.style.animationDelay = (Math.random()*1.4)+'s';
    bar.style.animationDuration = (0.9 + Math.random()*0.9)+'s';
    waveBars.appendChild(bar);
  }
