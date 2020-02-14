const url = require('url');

/**
 * WHATWG 방식 url.URL
 * search 처리가 편리하다.
 */
const URL = url.URL; //URL 생성자
const myURL = new URL('https://search.daum.net/search?w=tot&DA=YZR&t__nil_searchbox=btn&sug=&sugo=&q=%EC%95%88%EB%85%95');

console.log(myURL);
/*
URL {
    href: 'https://search.daum.net/search?w=tot&DA=YZR&t__nil_searchbox=btn&sug=&sugo=&q=%EC%95%88%EB%85
    %95',
    origin: 'https://search.daum.net',
        protocol: 'https:',
        username: '',
        password: '',
        host: 'search.daum.net',
        hostname: 'search.daum.net',
        port: '',
        pathname: '/search',
        search: '?w=tot&DA=YZR&t__nil_searchbox=btn&sug=&sugo=&q=%EC%95%88%EB%85%95',
        searchParams: URLSearchParams {
        'w' => 'tot',
            'DA' => 'YZR',
            't__nil_searchbox' => 'btn',
            'sug' => '',
            'sugo' => '',
            'q' => '안녕' },
    hash: ''
}
*/

console.log(url.format(myURL));
// https://search.daum.net/search?w=tot&DA=YZR&t__nil_searchbox=btn&sug=&sugo=&q=%EC%95%88%EB%85%95

console.log(myURL.searchParams.getAll('w')); // ['tot'] : w 에 속하는 파라미터 값 리스트
console.log(myURL.searchParams.get('w')); // tot : w에 속하는 첫번째 파라미터 값
console.log(myURL.searchParams.has('w')); // true
console.log(myURL.searchParams.has('w')); // true
console.log(myURL.searchParams.keys()); //URLSearchParams Iterator { 'w', 'DA', 't__nil_searchbox', 'sug', 'sugo', 'q' }
console.log(myURL.searchParams.values()); //URLSearchParams Iterator { 'tot', 'YZR', 'btn', '', '', '안녕' }

myURL.searchParams.append('w', 'hello');
myURL.searchParams.append('w', 'hi');
console.log(myURL.searchParams.getAll('w')); // [ 'tot', 'hello', 'hi' ]

myURL.searchParams.set('w', 'merong');
console.log(myURL.searchParams.getAll('w')); // [ 'merong' ] : 기존에 있던 값을 수정

myURL.searchParams.delete('w');
console.log(myURL.searchParams.getAll('w')); // []

console.log(myURL.searchParams.toString()); //DA=YZR&t__nil_searchbox=btn&sug=&sugo=&q=%EC%95%88%EB%85%95

/**
 * 기존 방식 url.parse
 */
console.log(url.parse('https://search.daum.net/search?w=tot&DA=YZR&t__nil_searchbox=btn&sug=&sugo=&q=%EC%95%88%EB%85%95'));
/*
Url {
  protocol: 'https:',
  slashes: true,
  auth: null,
  host: 'search.daum.net',
  port: null,
  hostname: 'search.daum.net',
  hash: null,
  search: '?w=tot&DA=YZR&t__nil_searchbox=btn&sug=&sugo=&q=%EC%95%88%EB%85%95',
  query: 'w=tot&DA=YZR&t__nil_searchbox=btn&sug=&sugo=&q=%EC%95%88%EB%85%95',
  pathname: '/search',
  path: '/search?w=tot&DA=YZR&t__nil_searchbox=btn&sug=&sugo=&q=%EC%95%88%EB%85%95',
  href: 'https://search.daum.net/search?w=tot&DA=YZR&t__nil_searchbox=btn&sug=&sugo=&q=%EC%95%88%EB%85
%95'
}
*/