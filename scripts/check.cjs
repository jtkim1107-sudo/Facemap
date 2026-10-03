const fs=require('fs'),vm=require('vm');
const html=fs.readFileSync('prototype/index.html','utf8');
new vm.Script(html.match(/<script>([\s\S]*?)<\/script>/)[1]);
for(const id of ['first','space','story','season']){if(!fs.existsSync('prototype/assets/'+id+'.png'))throw Error('Missing image '+id);}
console.log('JavaScript syntax and four sample assets OK');
