const express = require('express');
const app     = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(function (req, res, next) {
	res.setHeader('Content-Type', 'application/json');
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
	res.setHeader('Access-Control-Allow-Headers', '*');
	next();
});

const MongoClient = require('mongodb').MongoClient;
const ObjectID    = require('mongodb').ObjectId;
const url         = "mongodb://localhost:27017";

MongoClient.connect(url, {useNewUrlParser: true}, (err, client) => {
	let db = client.db("SUPERVENTES");

	/* Liste des produits */
	app.get("/produits", (req,res) => {
		console.log("/produits");
		try {
			db.collection("produits").find().toArray((err, documents) => {
				res.end(JSON.stringify(documents));
			});
		} catch(e) {
			console.log("Erreur sur /produits : " + e);
			res.end(JSON.stringify([]));
		}
	});

	/* Liste des produits suivant une catégorie */
	app.get("/produits/:categorie", (req, res) => {
  	// let categorie = req.params.categorie;
		console.log("/produits/" + req.params.categorie);
		try {
			db.collection("produits").find({type: req.params.categorie}).toArray((err, documents) => {
				res.end(JSON.stringify(documents));
			});
		} catch(e) {
			console.log("Erreur sur /produits/" + req.params.categorie + " : " + e);
			res.end(JSON.stringify([]));
		}
	});
	
	/* Liste des produits selon un type */
	app.get("/recherche/:categorie/:Text", (req, res) => {
  
		console.log("/produits/" + req.params.categorie+"/"+req.params.Text);
		try {
			db.collection("produits").find({ type: req.params.Text}).toArray((err, documents) => {
				res.end(JSON.stringify(documents));
			});
		} catch(e) {
			console.log("Erreur sur /produits/" + req.params.categorie + " : " + e);
			res.end(JSON.stringify([]));
		}
	});


	/* Liste des catégories de produits */
	app.get("/categories", (req,res) => {
		console.log("/categories");
	  categories = [];
		try {
			db.collection("produits").find().toArray((err, documents) => {
		for (let doc of documents) {
				if (!categories.includes(doc.type)) categories.push(doc.type);
		}
			res.end(JSON.stringify(categories));
			});
		} catch(e) {
			console.log("Erreur sur /categories : " + e);
			res.end(JSON.stringify([]));
		}
	});

	/* Connexion */
	app.post("/membre/connexion", (req, res) => {
		try {
			db.collection("membres")
			.find(req.body)
			.toArray((err, documents) => {
				if (documents != undefined && documents.length == 1) {
					res.end(JSON.stringify({"resultat": 1, "message": "Authentification réussie"}));
					console.log("Authentification réussie");
				} else { 
					res.end(JSON.stringify({"resultat": 0, "message": "Email et/ou mot de passe incorrect"}));
					console.log("Email et/ou mot de passe incorrect");
				}
			});
		} catch (e) {
			res.end(JSON.stringify({"resultat": 0, "message": e}));
		}
	});
	
	/* Ajout user */
	app.post("/membre/inscription", (req, res)=> {
		console.log("/membre/inscription/");
		try{
			db.collection("membres")
			.find(req.body)
			.toArray((err, documents) => {
				if (documents != undefined && documents.length == 1){
					res.end(JSON.stringify({"resultat": 0, "message": "Membre déjà inscrit"}));
				}
				else{	
					db.collection("membres")
					.insertOne( 
						req.body
					);
					res.end(JSON.stringify({"resultat": 1, "message": "Inscription réussie"}));
				}
			});

		} catch(e) {
			res.end(JSON.stringify({"resultat": 0, "message": "Inscription echec utilisateur déjà inscrit"}));
		}

	});


	app.post("/panier/ajout", (req, res) => {
		console.log("route: produit/ajout avec ", JSON.stringify(req.body));
		res.end(JSON.stringify({"reponde": "ajout d'un produit dans le panier"}));
	});
});

app.listen(8888);
