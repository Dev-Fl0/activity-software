# **Résumé :**

Pour faire suite à notre process de recrutement, je me permets de vous envoyer les informations sur le mini projet que vous allez devoir réaliser et soutenir.

Comme il s'agit d'un poste Front, j'attends principalement l'usage de *REACT* avec le *projet en illustration*. N'hesitez pas à rendre votre interface *responsive* et utiliser des composants complexes comme un *planning*. 
Le but est bien de mettre en avant vos compétences techniques en REACT. si vous pouvez rendre votre code dans un repo Git et le *déployer* sur un environnement Cloud Azure (ou AWS) est un plus.

Merci de revenir vers moi pour définir une date de soutenance 
  - 20 minutes de présentation 
  - Analyse du projet
  - Choix des composants
  - Structure du code
  - Gestion des tests unitaires
  - Temps passé sur le projet et la différences entre mini projet et projet entreprise

  # **Projet :**
  ## V1

  Logiciel de gestion d'activité dans l'atelier :

    Pour chaque tâche
      - Quel est le technicien qui travaille ? (Tâche gérée par un technicien).
      - Pour quel client ? (Tâche crée par un client).
      - Quand et combien de temps ? (Date de réalisation de la tâche, et temps d'execution).
      - Sur quelle tâche ? 
      - Combien sera facturé le client ? (Prix de la tâche)

    L’hiver, l’atelier travaille sur des skis tandis que l’été, l’atelier travaille sur des vélos.
    - Hiver => Novembre à Avril => Skis.
    - Été => Mai à Octobre => Vélos.

    3 techniciens - 2 pc.

### Skis :
  - Affutâge - 20€ - 15mn.
  - Fartage - 20€ - 15mn.
  - Réparation (selon le temps passé et les pièces à changer) : 
        - Fixation complète - ?
        - Semelles - ?

### Vélos :
- Révision annuelle - 50€ -45 minutes.
- Réparation (selon le temps passé et les pièces à changer) 1€/mn : 
        - Dévoilage - ?
        - Pneu - ?
        - Plaquettes de frein - ?

### Entités
 - *Client* :
    - Nom
    - Prénom
    - Mail
    - Téléphone (option)

 - *Technicien* :
    - Nom
    - Prénom

 - *Vélo* :
    - Numéro de série

 - *ski* :
    - Numéro de série

  ## V2

 - Les techniciens aimeraient plus tard ajouter de nouveaux travaux à proposer aux clients et
organiser la veille la journée prévue le lendemain.

 - Le gérant aimerait plus tard mesurer l’efficacité de chacun de ses techniciens.