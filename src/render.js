const { fetchKubernetesContexts , getKubernetesContext, setKubernetesContext } = require("./k8s/kubectx");

const currentContext = document.getElementById("currentContextValue");
const ctxButton = document.getElementById("contextSelector");

ctxButton.onclick = async () => {
    console.log("Button clicked");
    const dropdownContent = document.querySelector('.dropdown-content');
    dropdownContent.classList.toggle('is-active');
};

// Set the current context
async function loadCurrentContext() {
    const context = await getKubernetesContext();
    currentContext.textContent = context;
    const contexts = await fetchKubernetesContexts();
    console.log(contexts);

    // Populate the dropdown menu with context names
    const dropdownContent = document.querySelector('.dropdown-content');

    contexts.forEach(context => {
        const contextName = context.name;
        const dropdownItem = document.createElement('a');
        dropdownItem.className = 'dropdown-item';
        dropdownItem.textContent = contextName;

        // Add an event listener to handle context selection
        dropdownItem.addEventListener('click', async () => {
                // Handle context selection here
                await setKubernetesContext(contextName);
                console.log(`Selected context: ${contextName}`);
                const context = await getKubernetesContext();
                currentContext.textContent = context;
        });

        dropdownContent.appendChild(dropdownItem);
    });
}

loadCurrentContext();
