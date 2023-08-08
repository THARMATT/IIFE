let a=()=>{ 
  return new Promise((rs,rej)=>{
  setTimeout(()=>{
  rs("after four seconds")  
  },2000)
})
}
(async()=>{
let b=await a()
  console.log(b)
let c= await a()
  console.log(c)
let d= await a()
  console.log(d)
}) ()
