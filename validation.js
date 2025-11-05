export function validateForm(form){
  const fields = Array.from(form.elements).filter(f=>f.tagName==='INPUT' || f.tagName==='TEXTAREA' || f.tagName==='SELECT');
  let valid = true;
  fields.forEach(f=>{
    f.classList.remove('error');
    if(f.hasAttribute('required') && !f.value.trim()){
      f.classList.add('error'); valid=false;
    }
    const pattern = f.getAttribute('pattern');
    if(pattern && f.value.trim()){
      const re = new RegExp('^'+pattern+'$');
      if(!re.test(f.value.trim())){ f.classList.add('error'); valid=false; }
    }
    if(f.type==='email' && f.value){
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if(!re.test(f.value)){ f.classList.add('error'); valid=false; }
    }
  });
  return valid;
}
