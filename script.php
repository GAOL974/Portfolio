<?php
// Connexion à la base de données
$db = new mysqli('localhost', 'utilisateur', 'mot_de_passe', 'mon_site_db');

// Vérifie la connexion
if ($db->connect_error) {
    die('Erreur de connexion à la base de données : ' . $db->connect_error);
}

// Requête SQL pour récupérer les articles triés par date de publication
$query = "SELECT * FROM articles ORDER BY date_de_publication DESC";
$result = $db->query($query);

// Afficher les articles
while ($row = $result->fetch_assoc()) {
    echo '<h2>' . $row['titre'] . '</h2>';
    echo '<p>' . $row['contenu'] . '</p>';
    echo '<p>Date de publication : ' . $row['date_de_publication'] . '</p>';
}

// Fermer la connexion à la base de données
$db->close();
?>
