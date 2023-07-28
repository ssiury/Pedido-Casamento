let nao = document.getElementById('nao');
let sim = document.getElementById('sim');
let altura = window.innerHeight;
let largura = window.innerWidth;
let contagem = 0;

let link = ()=>{
    window.open('https://www.youtube.com/watch?v=Wo-x0w-SMJY');
}
nao.addEventListener('mouseover',()=>{
    let NovaAltura = Math.random() * (altura - 100);
    let NovaLargura = Math.random() * (largura - 100);

    nao.style.position = "absolute";
    nao.style.top = NovaAltura + "px";
    nao.style.left = NovaLargura + "px";

    if(contagem<4){
        contagem++;
    }else{
        Swal.fire({
            icon: 'error',
            title: 'ESCOLHA ERRADA !',
            text: 'Você não vai fugir de mim'
        });
        contagem = 0;
    } 
})

sim.addEventListener('click',()=>{
    const defaults = {
        spread: 360,
        ticks: 100,
        gravity: 0,
        decay: 0.94,
        startVelocity: 30,
        shapes: ["heart"],
        colors: ["FF0000", "FF0000", "FF1111", "AA1111"],
      };
      
      confetti({
        ...defaults,
        particleCount: 50,
        scalar: 2,
      });
      
      confetti({
        ...defaults,
        particleCount: 25,
        scalar: 3,
      });
      
      confetti({
        ...defaults,
        particleCount: 10,
        scalar: 4,
      });
      setTimeout(link,1000);
})

