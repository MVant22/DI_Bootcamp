let rowCount = 6;  

for (let i = 1; i <= rowCount; i++) {
  let stars = '';
  for (let j = 1; j <= i; j++) {
    stars += '* ';
  }
  console.log(stars.trim()); 
}