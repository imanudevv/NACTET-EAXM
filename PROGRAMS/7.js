let s = "Hello World";
let v = {a:0, e:0, i:0, o:0, u:0};

for (let c of s.toLowerCase())
  if (v.hasOwnProperty(c)) v[c]++;

console.log(v);
