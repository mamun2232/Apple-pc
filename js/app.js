          

function onClick(clickId, updateId, price){
          document.getElementById(clickId).addEventListener('click',function(){
                    updateCost(updateId, price)
          })
}

onClick("sixteenGB", "memory-cost", 600);
onClick("eightGB", "memory-cost", 300);
onClick("ssd1", "storage-cost", 400);
onClick("ssd2", "storage-cost", 600);
onClick("paid-delivery", "delivery-cost", 50);


function updateCost(id, price){
          
          const memoryCost = document.getElementById(id).innerText = price

          
          const bestPrice = document.getElementById('best-price').innerText
          const memoryPrice = document.getElementById("memory-cost").innerText;
          const storagePrice = document.getElementById('storage-cost').innerText
          const deliveryPrice = document.getElementById('delivery-cost').innerText

         //  tutal price ............
         const tutalCost = 
         parseFloat(bestPrice) + 
         parseFloat(memoryPrice) +
          parseFloat(storagePrice) + 
          parseFloat(deliveryPrice)

        const tutal = document.getElementById('total-price')
        tutal.innerText = parseFloat(tutalCost)
}
// pomu code 
document.getElementById('apply-btn').addEventListener('click', function(){
         const promoInput = document.getElementById('promo-input').value
         const promoCode = 'mamun'
         if(promoInput === promoCode){
                   const tutal = document.getElementById('total-price')
                   let tutalPrice = parseFloat(tutal.innerText)
                   const discount = (tutalPrice*20) / 100
                   tutalPrice = tutalPrice - discount
                   tutal.innerText = tutalPrice;
                   

         }
         else{
          const notMaching = document.getElementById('promo-macching')
          notMaching.innerText = 'Promo Code Not Matching, Please Try Again.'
         }
})




