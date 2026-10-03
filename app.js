// Demo frontend. For production, connect the submit/lookup functions to Supabase.
// Never put a Supabase service-role/secret key in this file.
const $=s=>document.querySelector(s);
const toast=(m)=>{const t=$("#toast");t.textContent=m;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),2200)};
document.querySelectorAll("[data-cat]").forEach(b=>b.onclick=()=>{$("#category").value=b.dataset.cat;location.hash="ticket";$("#title").focus()});
$("#ticketForm").onsubmit=e=>{
 e.preventDefault();
 const id="RS-"+Math.random().toString(36).slice(2,8).toUpperCase();
 const ticket={id,title:$("#title").value.trim(),category:$("#category").value,priority:$("#priority").value,email:$("#email").value.trim(),message:$("#message").value.trim(),status:"Đã tiếp nhận",createdAt:new Date().toISOString()};
 const tickets=JSON.parse(localStorage.getItem("rs_demo_tickets")||"[]");tickets.unshift(ticket);localStorage.setItem("rs_demo_tickets",JSON.stringify(tickets));
 $("#formMsg").textContent=`✓ Đã tạo ticket ${id}. Hãy lưu mã này để tra cứu.`;
 $("#ticketForm").reset();toast("Đã tạo ticket "+id);
};
$("#lookupBtn").onclick=()=>{
 const id=$("#lookup").value.trim().toUpperCase();
 const t=JSON.parse(localStorage.getItem("rs_demo_tickets")||"[]").find(x=>x.id===id);
 $("#lookupResult").innerHTML=t?`<div class="result"><b>${t.title}</b><br>Danh mục: ${t.category}<br>Trạng thái: <b>${t.status}</b><br><small>Tạo lúc: ${new Date(t.createdAt).toLocaleString("vi-VN")}</small></div>`:`<div class="result">Không tìm thấy ticket trong bản demo trên thiết bị này.</div>`;
};
$("#authBtn").onclick=()=>toast("Khu đăng nhập sẽ được nối với Supabase Auth ở bản production.");
