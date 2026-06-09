
function calculateSize(){
const h=+height.value,w=+weight.value,c=+chest.value,z=+waist.value;
if(!h||!w){alert("يرجى إدخال الطول والوزن");return;}

const bmi=w/((h/100)*(h/100));
let idx=0;

if(bmi<22) idx=0;
else if(bmi<25) idx=1;
else if(bmi<28) idx=2;
else if(bmi<31) idx=3;
else if(bmi<35) idx=4;
else idx=5;

if(c){
 if(c>=88&&c<92) idx=Math.max(idx,1);
 if(c>=92&&c<96) idx=Math.max(idx,2);
 if(c>=96&&c<100) idx=Math.max(idx,3);
 if(c>=100&&c<104) idx=Math.max(idx,4);
 if(c>=104) idx=Math.max(idx,5);
}
if(z){
 if(z>=72&&z<76) idx=Math.max(idx,2);
 if(z>=76&&z<80) idx=Math.max(idx,3);
 if(z>=80&&z<84) idx=Math.max(idx,4);
 if(z>=84) idx=Math.max(idx,5);
}

const sizes=["S","M","L","XL","XXL","XXXL"];
const nums=["38","40","42","44","46","48"];
let confidence=82+(c?8:0)+(z?8:0);
if(confidence>98) confidence=98;

result.classList.remove("hidden");
result.innerHTML=`
<h2>النتيجة</h2>
<p><span class="badge">${sizes[idx]}</span></p>
<p><b>المقاس الرقمي:</b> ${nums[idx]}</p>
<p><b>درجة الثقة:</b> ${confidence}%</p>
<p>لأفضل دقة يفضل إدخال الصدر والخصر.</p>`;
}
