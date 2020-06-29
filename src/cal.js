const store = {
  tip : 0,
  tax : 0,
  meals : [],
  tipJar : [],
};

const tipSum = () =>{
  if(store.tipJar.length){
    return store.tipJar.reduce( (a,b) => a+b );
  }else{
    return 0;
  }
};

const mealsSum = () =>{
  if(store.meals.length){
    return store.meals.reduce((x,y) => x + y);
  }else{
    return 0;
  }
} 

const changeTipVal = (tip) => store.tip = tip; 

const changeTaxVal = (tax) => store.tax = tax;

const handleClear = () =>{
  store.meals.splice(0,store.meals.length);
  store.tipJar.splice(0,store.tipJar.length);
  store.tax = 0;
  store.tip = 0;
}; 

const handleSubmit = (newItem , tip) => {
  store.tipJar.push(tip);
  store.meals.push(newItem);
} ;

const subTotal = () => mealsSum() + (store.tax  * mealsSum() );


export default{
  store,
  mealsSum,
  tipSum,
  subTotal,
  handleClear,
  handleSubmit,
  changeTipVal,
  changeTaxVal
};
