const versi1 = `Cantem ao Senhor um novo cântico; cantem ao Senhor, todos os habitantes da terra! Cantem ao Senhor, bendigam o seu nome; cada dia proclamem a sua salvação! <br><br><b>Salmos 96:1-2 </b>
`
const versi2 = `Prestem culto ao Senhor com alegria;
entrem na sua presença
com cânticos alegres.<br><br><b>
Salmos 100:2</b>`
const versi3 = `Pôs um novo cântico na minha boca,
um hino de louvor ao nosso Deus.
Muitos verão isso e temerão,
e confiarão no Senhor.<br><br> <b> 
Salmos 40:3</b>`
const versi4 = `Cantem de alegria ao Senhor,
vocês que são justos;
aos que são retos fica bem louvá-lo. Louvem o Senhor com harpa;
ofereçam-lhe música com lira de dez cordas. Cantem-lhe uma nova canção;
toquem com habilidade ao aclamá-lo <br> <br><b>
Salmos 33:1-3</b>`
const facts = [versi1, versi2, versi3];

! function newFact() {
    const randomFact = Math.floor(Math.random() * facts.length);
    document.getElementById('factDisplay').innerHTML = facts[randomFact];
}();