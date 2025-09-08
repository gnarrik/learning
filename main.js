const moveto = new MoveTo();
const refs = document.querySelectorAll('a');
const button = document.querySelector('button');
refs.forEach(ref => moveto.registerTrigger(ref));
moveto.registerTrigger(button);
