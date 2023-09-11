const { kc } = require('./client');

async function fetchKubernetesContexts() {
  try {
   // Access the contexts directly from KubeConfig
   const contexts = kc.contexts;

   return contexts;

  } catch (error) {
    console.error('Error fetching Kubernetes contexts:', error);
  }
}

async function setKubernetesContext(ctx) {
    try {
        kc.setCurrentContext(ctx);
    } catch (error) {
        console.error('Error setting Kubernetes context:', error);
    }
}

async function getKubernetesContext(ctx) {
    try {
        return kc.getCurrentContext();
    } catch (error) {
        console.error('Error setting Kubernetes context:', error);
    }
}

module.exports = {
    fetchKubernetesContexts,
    setKubernetesContext,
    getKubernetesContext,
};
