const spell = document.querySelector('.spell')
const orb = document.querySelectorAll('.orb')
const invoke = document.querySelector('.invoke')

let firstSpell = 0
let secondSpell = 0
let thirdSpell = 0

let coldSnap = 'quasquasquas'
let ghostWalk = ['wexquasquas', 'quasquaswex', 'quaswexquas']
let iceWall = ['exortquasquas', 'quasexortquas', 'quasquasexort']
let EMP = 'wexwexwex'
let tornado = ['quaswexwex', 'wexquaswex', 'wexwexquas']
let alacrity = ['exortwexwex', 'wexexortwex', 'wexwexexort']
let sunStrike = 'exortexortexort'
let forgeSpirit = ['exortexortquas', 'exortquasexort', 'quasexortexort']
let meteor = ['exortexortwex', 'wexexortexort', 'exortwexexort']
let blast = ['exortwexquas', 'exortquaswex', 'quasexortwex', 'quaswexexort', 'wexexortquas', 'wexquasexort']

// 1 - quas, 2 - wex, 3 - exort

document.addEventListener('keydown', function(evt){

	if (evt.keyCode === 82){ // r
    	orb[0].classList.remove('quas')
    	orb[0].classList.remove('wex')
    	orb[0].classList.remove('exort')

    	orb[1].classList.remove('quas')
    	orb[1].classList.remove('wex')
    	orb[1].classList.remove('exort')

    	orb[2].classList.remove('quas')
    	orb[2].classList.remove('wex')
    	orb[2].classList.remove('exort')

    	console.log(firstSpell + secondSpell + thirdSpell)
    	for (let i=0; i<6; i++) {
			if (firstSpell + secondSpell + thirdSpell == coldSnap){
				spell.classList.remove('cold-snap')
				spell.classList.remove('ghost-walk')
				spell.classList.remove('ice-wall')
				spell.classList.remove('emp')
				spell.classList.remove('tornado')
				spell.classList.remove('alacrity')
				spell.classList.remove('sun-strike')
				spell.classList.remove('forge-spirit')
				spell.classList.remove('meteor')
				spell.classList.add('cold-snap')
			}

			if (firstSpell + secondSpell + thirdSpell == ghostWalk[i]){
				spell.classList.remove('cold-snap')
				spell.classList.remove('ghost-walk')
				spell.classList.remove('ice-wall')
				spell.classList.remove('emp')
				spell.classList.remove('tornado')
				spell.classList.remove('alacrity')
				spell.classList.remove('sun-strike')
				spell.classList.remove('forge-spirit')
				spell.classList.remove('meteor')
				spell.classList.add('ghost-walk')
			}

			if (firstSpell + secondSpell + thirdSpell == iceWall[i]){
				spell.classList.remove('cold-snap')
				spell.classList.remove('ghost-walk')
				spell.classList.remove('ice-wall')
				spell.classList.remove('emp')
				spell.classList.remove('tornado')
				spell.classList.remove('alacrity')
				spell.classList.remove('sun-strike')
				spell.classList.remove('forge-spirit')
				spell.classList.remove('meteor')
				spell.classList.add('ice-wall')
			}

			if (firstSpell + secondSpell + thirdSpell == EMP){
				spell.classList.remove('cold-snap')
				spell.classList.remove('ghost-walk')
				spell.classList.remove('ice-wall')
				spell.classList.remove('emp')
				spell.classList.remove('tornado')
				spell.classList.remove('alacrity')
				spell.classList.remove('sun-strike')
				spell.classList.remove('forge-spirit')
				spell.classList.remove('meteor')
				spell.classList.add('emp')
			}

			if (firstSpell + secondSpell + thirdSpell == tornado[i]){
				spell.classList.remove('cold-snap')
				spell.classList.remove('ghost-walk')
				spell.classList.remove('ice-wall')
				spell.classList.remove('emp')
				spell.classList.remove('tornado')
				spell.classList.remove('alacrity')
				spell.classList.remove('sun-strike')
				spell.classList.remove('forge-spirit')
				spell.classList.remove('meteor')
				spell.classList.add('tornado')
			}

			if (firstSpell + secondSpell + thirdSpell == alacrity[i]){
				spell.classList.remove('cold-snap')
				spell.classList.remove('ghost-walk')
				spell.classList.remove('ice-wall')
				spell.classList.remove('emp')
				spell.classList.remove('tornado')
				spell.classList.remove('alacrity')
				spell.classList.remove('sun-strike')
				spell.classList.remove('forge-spirit')
				spell.classList.remove('meteor')
				spell.classList.add('alacrity')
			}

			if (firstSpell + secondSpell + thirdSpell == sunStrike){
				spell.classList.remove('cold-snap')
				spell.classList.remove('ghost-walk')
				spell.classList.remove('ice-wall')
				spell.classList.remove('emp')
				spell.classList.remove('tornado')
				spell.classList.remove('alacrity')
				spell.classList.remove('sun-strike')
				spell.classList.remove('forge-spirit')
				spell.classList.remove('meteor')
				spell.classList.add('sun-strike')
			}

			if (firstSpell + secondSpell + thirdSpell == forgeSpirit[i]){
				spell.classList.remove('cold-snap')
				spell.classList.remove('ghost-walk')
				spell.classList.remove('ice-wall')
				spell.classList.remove('emp')
				spell.classList.remove('tornado')
				spell.classList.remove('alacrity')
				spell.classList.remove('sun-strike')
				spell.classList.remove('forge-spirit')
				spell.classList.remove('meteor')
				spell.classList.add('forge-spirit')
			}

			if (firstSpell + secondSpell + thirdSpell == meteor[i]){
				spell.classList.remove('cold-snap')
				spell.classList.remove('ghost-walk')
				spell.classList.remove('ice-wall')
				spell.classList.remove('emp')
				spell.classList.remove('tornado')
				spell.classList.remove('alacrity')
				spell.classList.remove('sun-strike')
				spell.classList.remove('forge-spirit')
				spell.classList.remove('meteor')
				spell.classList.add('meteor')
			}

			if (firstSpell + secondSpell + thirdSpell == blast[i]){
				spell.classList.remove('cold-snap')
				spell.classList.remove('ghost-walk')
				spell.classList.remove('ice-wall')
				spell.classList.remove('emp')
				spell.classList.remove('tornado')
				spell.classList.remove('alacrity')
				spell.classList.remove('sun-strike')
				spell.classList.remove('forge-spirit')
				spell.classList.remove('meteor')
				spell.classList.add('blast')
			}
		}

    	firstSpell = 0
		secondSpell = 0
		thirdSpell = 0
    }

	// Смена третьего орба

	if (secondSpell == 'quas') {
		orb[2].classList.remove('quas')
    	orb[2].classList.remove('wex')
    	orb[2].classList.remove('exort')
    	orb[2].classList.add('quas')
    	thirdSpell = 'quas'
    }

    if (secondSpell == 'wex') {
    	orb[2].classList.remove('quas')
    	orb[2].classList.remove('wex')
    	orb[2].classList.remove('exort')
    	orb[2].classList.add('wex')
    	thirdSpell = 'wex'
    }

    if (secondSpell == 'exort') {
    	orb[2].classList.remove('quas')
    	orb[2].classList.remove('wex')
    	orb[2].classList.remove('exort')
    	orb[2].classList.add('exort')
    	thirdSpell = 'exort'
    }

	// Смена второго орба

	if (firstSpell == 'quas') {
    	orb[1].classList.remove('quas')
    	orb[1].classList.remove('wex')
    	orb[1].classList.remove('exort')
    	orb[1].classList.add('quas')
    	secondSpell = 'quas'
    	firstSpell = 0
    }

    if (firstSpell == 'wex') {
    	orb[1].classList.remove('quas')
    	orb[1].classList.remove('wex')
    	orb[1].classList.remove('exort')
    	orb[1].classList.add('wex')
    	secondSpell = 'wex'
    	firstSpell = 0
    }

    if (firstSpell == 'exort') {
    	orb[1].classList.remove('quas')
    	orb[1].classList.remove('wex')
    	orb[1].classList.remove('exort')
    	orb[1].classList.add('exort')
    	secondSpell = 'exort'
    	firstSpell = 0
    }

	// Прокасты

    if (evt.keyCode === 81){ // q
        firstSpell = 'quas'
    }
    if (evt.keyCode === 87){ // w
        firstSpell = 'wex'
    }
    if (evt.keyCode === 69){ // e
        firstSpell = 'exort'
    }

    // Смена первого орба

    if (firstSpell == 'quas') {
    	orb[0].classList.remove('quas')
    	orb[0].classList.remove('wex')
    	orb[0].classList.remove('exort')
    	orb[0].classList.add('quas')
    }

    if (firstSpell == 'wex') {
    	orb[0].classList.remove('quas')
    	orb[0].classList.remove('wex')
    	orb[0].classList.remove('exort')
    	orb[0].classList.add('wex')
    }

    if (firstSpell == 'exort') {
    	orb[0].classList.remove('quas')
    	orb[0].classList.remove('wex')
    	orb[0].classList.remove('exort')
    	orb[0].classList.add('exort')
    }
})