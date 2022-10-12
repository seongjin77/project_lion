function insertCommas(n) {
    // get stuff before the dot
    let s1 = n.toString();
    let d = s1.indexOf('.');
    let s2 = d === -1 ? s1 : s1.slice(0, d);
  
    // insert commas every 3 digits from the right
    for (var i = s2.length - 3; i > 0; i -= 3)
      s2 = s2.slice(0, i) + ',' + s2.slice(i);
  
    // append fractional part
    if (d !== -1)
      s2 += s1.slice(d);
  
    return s2;
  }

  console.log(insertCommas(10000000));

  