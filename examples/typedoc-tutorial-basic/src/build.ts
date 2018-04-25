// build tutorial.hbs supporting two formats, plain markdown or docco (that's markdown with typescript sourcecode embedded)

import { readFileSync, writeFileSync } from 'fs';
import { sep } from 'path';
import { compile, registerHelper } from 'handlebars';

const config:  {outputType:('markdown' | 'docco'), language:string} = { outputType: 'docco', language: 'ts' };

const textHelperImplementation = (text:string):string => {
  if (config.outputType === 'docco') {
    return text.split('\n').map(l => l.trim() ? '// ' + l : '').join('\n');
  } else {
    return text;
  }
};
registerHelper('text', (options) => {
  return textHelperImplementation(options.fn(this));
});


const linkHelperImplementation = (link:string, label?:string) => {
  const url = link.includes('.html') ? link : link + '.html';
  return `[${label || link}](../../${url})`;
};
registerHelper ('link', (options) => {
  return linkHelperImplementation(options.hash.url, options.hash.label);
});


const codeHelperImplementation = (text:string, config):string => {
  const linkText = config.link ? `Here you can see the output generated by TypeDoc: ${linkHelperImplementation(config.link)}.` : '';
  if (config.outputType === 'markdown') {
    return '```' + (config.language || config.language || 'ts') + '\n' + text + '```\n' + linkText;
      
  }else {
    return text + '\n' + textHelperImplementation(linkText);
  }
 
};
registerHelper('code', (options) => {
  return codeHelperImplementation(options.fn(this), { link: options.hash.link });
});



const content = readFileSync(`${__dirname}${sep}tutorial.hbs`).toString();
const template = compile(content);
const result = template({});
writeFileSync(`${__dirname}${sep}index.ts`, result);
