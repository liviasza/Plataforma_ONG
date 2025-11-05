export const Templates = {
  registerTemplates(doc){
    this.app = doc.getElementById('app');
    this.templates = {};
    doc.querySelectorAll('template').forEach(tpl=>{
      this.templates[tpl.id] = tpl.innerHTML;
    });
  },
  render(tplId){
    if(!this.templates[tplId]) return;
    this.app.innerHTML = this.templates[tplId];
    // dispatch event to notify modules that view changed
    window.dispatchEvent(new CustomEvent('view:changed',{detail:{view:tplId}}));
  }
};
