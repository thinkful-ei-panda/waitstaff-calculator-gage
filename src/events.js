import cal from './cal.js';

const mealDetailTemplate = () =>{
  return (
    `<div class="meal-enter">
            <h1>Enter the Meal Details</h1>
            <form id='meal-form'>
                <label for='price'> Base Meal Price : $</label>
                    <input type="number" id="price" required />
                <label for='tax'> Tax rate : %</label>
                    <input type="number" id="tax" value="6"/>
                <label for='tip'> Tip Rate: %</label>
                    <input type="number" id="tip" value="15"/>
                <button type="submit" id='submit'>Submit</button>
                <button type="reset" id='cancel'>Cancel</button>
            </form>

        </div>`
  );
};

const customerChargeTemplate = () =>{
  return(
    `<div class="subtotal">
            <div >
            <h2> Customer Charges</h2>
                <span>Subtotal</span> 
                <span>$${cal.subTotal()}</span>
            </div>
            <div class="tip-total">
                <span>Tip</span> 
                <span>$${cal.tipSum()}</span> 
            </div>
            <div class="total">
                <span>Total</span> 
                <span>$${cal.tipSum() + cal.subTotal()}</span>
            </div>
        </div>`

  );
};

const earningsTemplate = () =>{
  const avgTip = () => cal.store.meals.length === 0  ? '': cal.tipSum() / cal.store.meals.length;
  return (
    `<div class='earnings'>
        <h2>My Earning info</h2>
            <div>
                <span>Tip Total:</span>
                <span>$${cal.tipSum()}</span>
            </div>
            <div>
                <span>Meal count:</span>
                <span>${cal.store.meals.length}</span>
            </div>
            <div>
                <span>Average Tip Per Meal</span>
                <span>$${avgTip()}</span>
                <button type="reset" class='clear'>reset</button>
            </div>
    </div>` 
  );
};

const render = () => {
  let html = '';
  html += mealDetailTemplate();
  html += customerChargeTemplate();
  html += earningsTemplate();
  
  $('.root').html(html);
};

const handleSubmitClick = () => {
  $('.root').on('click', '#submit', (e) => {
    e.preventDefault();
    const price = parseInt($('#price').val());
    const tip =  0.01 * parseInt($('#tip').val());
    const tax =  0.01 * parseInt($('#tax').val());
    const tipTotal = price * tip; 
    cal.changeTipVal(tip);
    cal.changeTaxVal(tax);
    cal.handleSubmit(price, tipTotal);
    $('#price').val('');
    render();
  });
};

const handleResetClick = () => {
  $('.root').on('click','button.clear', (e)=> {  
    e.preventDefault();
    $('#price').val('');
    cal.handleClear();
    render();
  });
};

const eventPackage = () => {
  render();
  handleSubmitClick();
  handleResetClick();
};

export default{
  eventPackage,
};