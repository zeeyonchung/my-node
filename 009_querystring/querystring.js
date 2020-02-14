const url = require('url');
const querystring = require('querystring');

const parsedUrl = url.parse('https://search.daum.net/search?w=tot&DA=YZR&t__nil_searchbox=btn&sug=&sugo=&q=%EC%95%88%EB%85%95');
const query = querystring.parse(parsedUrl.query);

console.log(query);
/*
[Object: null prototype] {
  w: 'tot',
  DA: 'YZR',
  t__nil_searchbox: 'btn',
  sug: '',
  sugo: '',
  q: '안녕'
}
*/

console.log(querystring.stringify(query));
// w=tot&DA=YZR&t__nil_searchbox=btn&sug=&sugo=&q=%EC%95%88%EB%85%95