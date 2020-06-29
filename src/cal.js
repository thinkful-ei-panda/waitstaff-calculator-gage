const sum = (arr) => {
  let res = 0 ;
  if(arr.length){
    arr.map(add => res += add);
  }
  return res;
}; 

const mealDetails = (price,tax ,tip) => {
  let total = 0;
  const tipPercent = tip * 0.01 ;
  const taxPercent = tax * 0.01 ;
  if( tax <= 0  || undefined){
    return 0;
  } else {
    total += taxPercent * price ; 
  }
  if( tip <= 0  || undefined){
    return 0;
  } else {
    total += tipPercent * price ; 
  }
  return total += price ; 

};

export default{
  sum,
  mealDetails: mealDetails,
};
