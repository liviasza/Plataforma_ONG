/* Minimal JS to toggle mobile menu, modal and toasts */
document.addEventListener('DOMContentLoaded', function(){
  // Mobile menu toggle
  const btn = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav');
  if(btn && nav){
    btn.addEventListener('click', ()=> nav.classList.toggle('active'));
  }

  // Modal open/close
  document.querySelectorAll('[data-modal-open]').forEach(el=>{
    el.addEventListener('click', ()=>{
      const id = el.getAttribute('data-modal-open');
      const modal = document.getElementById(id);
      if(modal) modal.classList.add('active');
      const backdrop = document.querySelector('.modal-backdrop');
      if(backdrop) backdrop.classList.add('active');
    });
  });
  document.querySelectorAll('[data-modal-close]').forEach(el=>{
    el.addEventListener('click', ()=>{
      const backdrop = document.querySelector('.modal-backdrop');
      if(backdrop) backdrop.classList.remove('active');
      document.querySelectorAll('.modal').forEach(m=>m.classList.remove('active'));
    });
  });
  document.querySelectorAll('.modal-backdrop').forEach(b=>{
    b.addEventListener('click',(e)=>{
      if(e.target === b){ b.classList.remove('active'); document.querySelectorAll('.modal').forEach(m=>m.classList.remove('active')); }
    });
  });

  // Toast show
  const toastArea = document.querySelector('.toast-wrap');
  document.querySelectorAll('[data-toast]').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const text = btn.getAttribute('data-toast') || 'Notificação';
      const t = document.createElement('div');
      t.className = 'toast';
      t.textContent = text;
      toastArea.appendChild(t);
      setTimeout(()=> t.classList.add('hide'), 3500);
      setTimeout(()=> t.remove(), 4200);
    });
  });

});