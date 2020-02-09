const crypto = require('crypto');

const pwd = crypto.createHash('sha512').update('비밀번호').digest('base64');
console.log(pwd); //dvfV6nyLRRt3NxKSlTHOkkEGgqW2HRtfu19Ou/psUXvwlebbXCboxIPmDYOFRIpqav2eUTBFuHaZri5x+usy1g==