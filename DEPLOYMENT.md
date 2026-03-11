# Guide de Déploiement sur Vercel

## Configuration requise

Pour que le chatbot fonctionne sur Vercel, vous devez configurer les **variables d'environnement**.

### Étapes à suivre

1. **Allez sur votre projet Vercel**
   - https://vercel.com/dashboard

2. **Sélectionnez votre projet** (3cm-site)

3. **Allez dans Settings → Environment Variables**

4. **Ajoutez les variables suivantes** :

   ```
   GROQ_API_KEY = votre_clé_groq_ici
   ```

   - **Nom** : `GROQ_API_KEY`
   - **Valeur** : Votre clé API Groq (obtenez-la sur https://console.groq.com/)
   - **Scope** : Production (ou Preview si vous testez en staging)

5. **Cliquez sur "Save"**

6. **Redéployez votre projet**
   - Vercel redéploiera automatiquement
   - Ou allez dans "Deployments" et cliquez sur "Redeploy"

### Obtenir votre clé API Groq

1. Allez sur https://console.groq.com/
2. Créez un compte ou connectez-vous
3. Allez dans "API Keys"
4. Créez une nouvelle clé
5. Copiez la clé
6. Collez-la dans Vercel Environment Variables

## Vérification

Pour vérifier que tout fonctionne :

1. Ouvrez votre site déployé
2. Ouvrez le chatbot (coin inférieur droit)
3. Envoyez un message test
4. Vérifiez dans les Logs Vercel si une erreur apparaît :
   - Settings → Functions → Logs

## Structure du déploiement

- **Frontend** : Angular compilé (dist/3cm-site/browser)
- **API Serverless** : /api/chat.ts (Vercel Function)
- **Port** : Port standard Vercel (pas de configuration requise)

## Troubleshooting

### "GROQ_API_KEY not configured on Vercel"
- ✅ Vérifiez que vous avez bien ajouté la variable d'environnement dans Vercel Settings
- ✅ Vérifiez que le nom est exact : `GROQ_API_KEY`
- ✅ Redéployez après ajout de la variable

### Chatbot ne répond pas
- ✅ Vérifiez que la clé Groq est valide et active
- ✅ Vérifiez dans Vercel Logs qu'il n'y a pas d'erreur d'authentification
- ✅ Attendez 2-3 minutes après redéploiement

### Fonction serverless timeout
- ✅ Les requêtes timeout > 60 secondes sont annulées par Vercel
- ✅ C'est rare avec Groq, mais vérifiez votre connexion

## Variables d'environnement locales (.env)

Pour le développement local, créez un fichier `.env` à la racine :

```
GROQ_API_KEY=votre_clé_ici
```

Ne committez PAS ce fichier en git ! Il est déjà dans `.gitignore`.
