// Aqui começa os versiculos


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
const versi5 = `falando entre vocês com salmos, hinos e cânticos espirituais, cantando e louvando de coração ao Senhor,
<br><br><b>Efésios 5:19</b>`
const versi6 = ` Habite ricamente em vocês a palavra de Cristo; ensinem e aconselhem-se uns aos outros com toda a sabedoria e cantem salmos, hinos e cânticos espirituais com gratidão a Deus em seu coração.
<br><br><b>Colossenses 3:16
</b>
`
const versi7 = ` Então Miriã, a profeti­sa, irmã de Arão, pegou um tamborim e todas as mulheres a seguiram, tocando tamborins e dançando. E Miriã lhes respondia, cantando:
"Cantem ao Senhor,
pois triunfou gloriosamente.
Lançou ao mar o cavalo
e o seu cavaleiro".<br><br><b>
Êxodo 15:20-21
</b>
`
const versi8 = ` "Ouçam, ó reis!
Governantes, escutem!
Cantarei ao Senhor, cantarei;
comporei músicas ao Senhor,
o Deus de Israel.<br> <br><b>
Juízes 5:3
</b>
`
const versi9 = ` Davi e todos os israelitas iam cantando e dançando perante o Senhor, ao som de todo tipo de instrumentos de pinho: harpas, liras, tamborins, chocalhos e címbalos.
<br><br><b>2 Samuel 6:5
</b>
`
const versi10 = ` Sempre que o espírito mandado por Deus se apoderava de Saul, Davi apanhava sua harpa e tocava. Então Saul sentia alívio e melhorava, e o espírito maligno o deixava.
<br><br><b>1 Samuel 16:23
</b>
`
const versi11 = ` O próprio Senhor irá à sua frente e estará com você; ele nunca o deixará, nunca o abandonará. Não tenha medo! Não desanime!"
<br><br><b>Deuteronômio 31:8
</b>
`
const versi12 = ` Pois a sua ira só dura um instante,
mas o seu favor dura a vida toda;
o choro pode persistir uma noite,
mas de manhã irrompe a alegria.<br><br><b>
Salmos 30:5
</b>
`
const versi13 = ` Deixo a paz a vocês; a minha paz dou a vocês. Não a dou como o mundo a dá. Não se perturbe o seu coração, nem tenham medo.
<br><br><b>João 14:27
</b>
`
const versi14 = ` Entregue suas preocupações ao Senhor,
e ele o susterá;
jamais permitirá que o justo venha a cair.<br><br><b>
Salmos 55:22
</b>
`
const versi15 = ` O Senhor está perto
dos que têm o coração quebrantado
e salva os de espírito abatido.<br><br><b>
Salmos 34:18
</b>
`
const versi16 = ` "Eu disse essas coisas para que em mim vocês tenham paz. Neste mundo vocês terão aflições; contudo, tenham ânimo! Eu venci o mundo".
<br><br><b>João 16:33
</b>
`
const versi17 = ` Mesmo quando eu andar
por um vale de trevas e morte,
não temerei perigo algum, pois tu estás comigo;
a tua vara e o teu cajado me protegem.<br><br><b>
Salmos 23:4
</b>
`
const versi18 = ` O Senhor é refúgio para os oprimidos,
uma torre segura na hora da adversidade.
<br><br><b>Salmos 9:9
</b>
`
const versi19 = ` E a paz de Deus, que excede todo o entendimento, guardará o coração e a mente de vocês em Cristo Jesus.
<br><br><b>Filipenses 4:7
</b>
`

const versi20 = ` Que o Deus da esperança os encha de toda alegria e paz, por sua confiança nele, para que vocês transbordem de esperança, pelo poder do Espírito Santo.
<br><br><b>Romanos 15:13
</b>
`




const facts = [versi1, versi2, versi3, versi4, versi5, versi6, versi7, versi8, versi9, versi10, versi11, versi12, versi13, versi14, versi15, versi16, versi17, versi18, versi19, versi20];

! function newFact() {
    const randomFact = Math.floor(Math.random() * facts.length);
    document.getElementById('factDisplay').innerHTML = facts[randomFact];
}();

// fim


// 2top button
//Get the button:
mybutton = document.getElementById("topbtn");


window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}


function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
// fim