// Réalisé par Nicola Dutartre, 2019 (https://github.com/dutartre)
// Si vous souhaitez reprendre le code, merci de me créditer.

window.onload = function () {
	horloge('div_horloge');
};


function horloge(el) {
	if (typeof el == "string") {
		el = document.getElementById(el);
	}

	function actualiser() {
		var date = new Date();
		var str = date.getHours();
		str += ':' + (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
		str += ':' + (date.getSeconds() < 10 ? '0' : '') + date.getSeconds();
		el.innerHTML = str;
		var jour = date.getDate();
		var mois = date.getMonth() + 1;
		var annee = date.getFullYear();
		if (mois < 10) {
			document.getElementById("date").innerHTML = jour + "/0" + mois + "/" + annee;
		} else {
			document.getElementById("date").innerHTML = jour + "/" + mois + "/" + annee;
		}


		// Prochaine minute
		var BarreMinutes = document.getElementById("ProchaineMinute");
		BarreMinutes.style.width = date.getSeconds() * 1.66666666667 + '%'; //1min = 60sec, 100/60 = ~1.67
		document.getElementById("SecondesRestantes").innerHTML = 60 - date.getSeconds();


		//Prochaine heure
		var BarreHeures = document.getElementById("ProchaineHeure");
		BarreHeures.style.width = date.getMinutes() * 1.66666666667 + '%'; //1h = 60min, 100/60 = ~1.67
		document.getElementById("MinutesRestantes").innerHTML = 60 - date.getMinutes();

		//Prochain jour
		var BarreJours = document.getElementById("ProchainJour");
		BarreJours.style.width = date.getHours() * 4.16666666667 + '%'; //1j = 24h, 100/24 = ~4.167
		document.getElementById("HeuresRestantes").innerHTML = 24 - date.getHours();

		//Calcul nombre de jour par mois
		//Février
		if (mois == 2) {
			var nbjour = 28;
			var pourcent = 3.57142857143; // 100/28
		}

		//Mois en 31 jours
		else if (mois == 1 || mois == 3 || mois == 5 || mois == 7 || mois == 8 || mois == 10 || mois == 12) {
			var nbjour = 31;
			var pourcent = 3.22580645161; // 100/31
		}

		//Mois en 30 jours
		else {
			var nbjour = 30;
			var pourcent = 3.33333333333; // 100/30
		}

		//Prochain mois
		var BarreMois = document.getElementById("ProchainMois");
		BarreMois.style.width = date.getDate() * pourcent + '%';
		document.getElementById("JoursRestantsMois").innerHTML = nbjour - date.getDate();
		//Tests
		//document.getElementById("nbjour").innerHTML = nbjour;
		//document.getElementById("mois").innerHTML = mois;
		//document.getElementById("pc").innerHTML = pourcent;

		//Prochaine année
		var itstime = date.getTime();
		var NouvelAn = new Date();
		NouvelAn.setMonth(0);
		NouvelAn.setDate(1);
		var nbMillisecNA = date.getTime() - NouvelAn.getTime();
		var nbjourannee = Math.ceil(((((nbMillisecNA / 1000) / 60) / 60) / 24));
		//Tests
		//document.getElementById("itstime").innerHTML = itstime;
		//document.getElementById("itsnyd").innerHTML = NouvelAn;
		//document.getElementById("nbjourannee").innerHTML = nbjourannee;

		var BarreAnnee = document.getElementById("ProchaineAnnee");
		BarreAnnee.style.width = nbjourannee * 0.27397260274 + '%'; // 1a = 365j, 100/365 = ~0.27
		document.getElementById("JoursRestantsAnnee").innerHTML = 365 - nbjourannee;

//		//Prochaine Saint Valentin
//		var StValentin = new Date();
//		StValentin.setDate(14);
//		StValentin.setMonth(0);
//		var nbMillisecSV = date.getTime() - StValentin.getTime();
//		var nbjourStValentin = Math.ceil(((((nbMillisecSV / 1000) / 60) / 60) / 24)+1);
//		//document.getElementById("stval").innerHTML = StValentin;
//
//		var BarreStValentin = document.getElementById("ProchaineStVal");
//		BarreStValentin.style.width = (365 - (nbjourannee - nbjourStValentin)) * 0.27397260274 + '%';
//		document.getElementById("JoursRestantsStVal").innerHTML = nbjourannee - nbjourStValentin;
//
//		//Mon Anniversaire
//		var Anniversaire = new Date();
//		Anniversaire.setDate(31);
//		Anniversaire.setMonth(6);
//		var nbMillisecAnniv = date.getTime() - Anniversaire.getTime();
//		var nbjourAnniversaire = Math.ceil(((((nbMillisecAnniv / 1000) / 60) / 60) / 24));
//		//document.getElementById("anni").innerHTML = Anniversaire;
//
//		var BarreAnniversaire = document.getElementById("ProchainAnniversaire");
//		BarreAnniversaire.style.width = (365 - (nbjourannee - nbjourAnniversaire)) * 0.27397260274 + '%';
//		document.getElementById("JoursRestantsAnniversaire").innerHTML = nbjourannee - nbjourAnniversaire;
//
//		//Prochain ProchainHalloween
//		var Halloween = new Date();
//		Halloween.setDate(31);
//		Halloween.setMonth(9);
//		var nbMillisecHalloween = date.getTime() - Halloween.getTime();
//		var nbjourHalloween = Math.ceil(((((nbMillisecHalloween / 1000) / 60) / 60) / 24));
//
//		var BarreHalloween = document.getElementById("ProchainHalloween");
//		BarreHalloween.style.width = (365 - (nbjourannee - nbjourHalloween)) * 0.27397260274 + '%';
//		document.getElementById("JoursRestantsHalloween").innerHTML = nbjourannee - nbjourHalloween;
//
//		//Prochain Noël
//		var Noel = new Date();
//		Noel.setDate(25);
//		Noel.setMonth(10);
//		var nbMillisecNoel = date.getTime() - Noel.getTime();
//		var nbjourNoel = Math.ceil(((((nbMillisecNoel / 1000) / 60) / 60) / 24));
//
//		var BarreNoel = document.getElementById("ProchainNoel");
//		BarreNoel.style.width = (365 - (nbjourannee - nbjourNoel)) * 0.27397260274 + '%';
//		document.getElementById("JoursRestantsNoel").innerHTML = nbjourannee - nbjourNoel;

		//Prochaine décennie
		arrondirannee = Math.ceil((annee + 0.1) / 10); //Arrondi la decennie de l'année au dessus (ex: 201X => 202), le "+0.1" est pour ne pas avoir de nombre rond et d'être sûr de toujours arrondir au dessus
		anneedecennie = arrondirannee * 10; //On multiplie le nombre précédent par 10 pour avoir l'année de la Prochaine décennie
		var BarreDecennie = document.getElementById("ProchaineDecennie");
		BarreDecennie.style.width = (10 - (anneedecennie - date.getFullYear())) * 10 + '%'; //Calcul un peu compliqué mais je l'expliquerais un jour
		document.getElementById("AnneesRestantesDecennie").innerHTML = anneedecennie - date.getFullYear();

		//Prochain sicle
		var BarreSiecle = document.getElementById("ProchainSiecle");
		BarreSiecle.style.width = 100 - (2100 - date.getFullYear()) + '%'; //Je pense que d'ici l'an 2100 ce programme ne marchera plus
		document.getElementById("AnneesRestantesSiecle").innerHTML = 2100 - date.getFullYear();

		//Prochain millenaire
		var BarreMillenaire = document.getElementById("ProchainMillenaire");
		BarreMillenaire.style.width = (date.getFullYear() - 2000) / 10 + '%'; //Je pense que d'ici l'an 3000 ce programme ne marchera plus
		document.getElementById("AnneesRestantesMillenaire").innerHTML = 3000 - date.getFullYear();


	}

	actualiser();
	setInterval(actualiser, 1000);
}
